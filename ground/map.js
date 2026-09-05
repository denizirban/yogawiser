(function(){
  "use strict";

  const ui={
    en:{ready:"Search for the place or move the map, then draw at least three boundary points.",searching:"Finding the location…",found:"Location found. Zoom in if needed, then draw the boundary.",notFound:"No matching place found. Add a city and country, or move the map manually.",geo:"Finding your position…",geoError:"Position unavailable. Search by place name or move the map manually.",draw:"Click around the land boundary. Add at least three points, then choose Finish boundary.",finish:"Finish boundary",drawButton:"Draw boundary",measured:area=>`Boundary measured: ${formatArea(area)}. Now place any known site elements.`,place:type=>`Click the map to place ${labels.en[type].toLowerCase()}.`,placed:type=>`${labels.en[type]} placed. Choose another tool or build the plan.`,choose:"Choose Draw boundary or a site-element tool first.",undo:"Last boundary point removed.",cleared:"Map drawing cleared. The manually entered area remains available.",unavailable:"The interactive map could not load. Continue with the manual area and position fields below."},
    tr:{ready:"Yeri arayın veya haritayı kaydırın; ardından sınır için en az üç nokta çizin.",searching:"Konum aranıyor…",found:"Konum bulundu. Gerekirse yakınlaşın, sonra arazi sınırını çizin.",notFound:"Eşleşen yer bulunamadı. İlçe ve ülke ekleyin veya haritayı elle kaydırın.",geo:"Konumunuz bulunuyor…",geoError:"Konum alınamadı. Yer adıyla arayın veya haritayı elle kaydırın.",draw:"Arazi sınırı boyunca tıklayın. En az üç nokta ekleyip Sınırı bitir'e basın.",finish:"Sınırı bitir",drawButton:"Sınırı çiz",measured:area=>`Sınır ölçüldü: ${formatArea(area)}. Şimdi bildiğiniz alan öğelerini yerleştirin.`,place:type=>`${labels.tr[type]} konumu için haritaya tıklayın.`,placed:type=>`${labels.tr[type]} yerleştirildi. Başka bir araç seçin veya planı oluşturun.`,choose:"Önce Sınırı çiz veya bir alan öğesi aracı seçin.",undo:"Son sınır noktası geri alındı.",cleared:"Harita çizimi temizlendi. Elle girilen alan değeri korunuyor.",unavailable:"Etkileşimli harita yüklenemedi. Aşağıdaki alan ve yaklaşık konum bilgileriyle devam edebilirsiniz."}
  };
  const labels={en:{house:"House",water:"Water",access:"Entrance",trees:"Trees",compost:"Compost"},tr:{house:"Ev",water:"Su",access:"Giriş",trees:"Ağaçlar",compost:"Kompost"}};
  const letters={house:"H",water:"W",access:"E",trees:"T",compost:"C"};
  let lang=document.documentElement.lang==="tr"?"tr":"en";
  let map=null,mode=null,boundaryLayer=null,boundaryPoints=[],markers={},lastSearchAt=0;
  let vertexLayer=null;

  const byId=id=>document.getElementById(id);
  const setStatus=value=>{const node=byId("map-status");if(node)node.textContent=value};
  const setHidden=(id,value)=>{const node=byId(id);if(node)node.value=value};
  const formatArea=area=>area>=10000?`${new Intl.NumberFormat(lang==="tr"?"tr-TR":"en-US",{maximumFractionDigits:2}).format(area/10000)} ha`:`${new Intl.NumberFormat(lang==="tr"?"tr-TR":"en-US",{maximumFractionDigits:0}).format(area)} m²`;

  function geodesicArea(points){
    if(points.length<3)return 0;
    const radius=6378137,toRad=value=>value*Math.PI/180;
    let sum=0;
    for(let i=0;i<points.length;i++){
      const a=points[i],b=points[(i+1)%points.length];
      sum+=toRad(b.lng-a.lng)*(2+Math.sin(toRad(a.lat))+Math.sin(toRad(b.lat)));
    }
    return Math.abs(sum*radius*radius/2);
  }

  function boundaryGeoJSON(){
    if(boundaryPoints.length<3)return "";
    const ring=boundaryPoints.map(point=>[Number(point.lng.toFixed(7)),Number(point.lat.toFixed(7))]);
    ring.push([...ring[0]]);
    return JSON.stringify({type:"Polygon",coordinates:[ring]});
  }

  function shapeFromBoundary(){
    if(boundaryPoints.length<3)return;
    const lats=boundaryPoints.map(p=>p.lat),lngs=boundaryPoints.map(p=>p.lng),midLat=(Math.min(...lats)+Math.max(...lats))/2;
    const height=(Math.max(...lats)-Math.min(...lats))*111320;
    const width=(Math.max(...lngs)-Math.min(...lngs))*111320*Math.cos(midLat*Math.PI/180);
    const ratio=Math.max(width,height)/Math.max(1,Math.min(width,height));
    const shape=boundaryPoints.length>5?"irregular":ratio>1.35?"rectangle":"square";
    const input=byId("plotShape");if(input)input.value=shape;
  }

  function directionFor(point){
    if(!point)return"unknown";
    const source=boundaryPoints.length>=3?boundaryPoints:[map.getBounds().getNorthWest(),map.getBounds().getSouthEast()];
    const minLat=Math.min(...source.map(p=>p.lat)),maxLat=Math.max(...source.map(p=>p.lat)),minLng=Math.min(...source.map(p=>p.lng)),maxLng=Math.max(...source.map(p=>p.lng));
    const cy=(minLat+maxLat)/2,cx=(minLng+maxLng)/2,dx=(point.lng-cx)/Math.max(.000001,maxLng-minLng),dy=(point.lat-cy)/Math.max(.000001,maxLat-minLat);
    if(Math.abs(dx)<.18&&Math.abs(dy)<.18)return"center";
    return Math.abs(dx)>Math.abs(dy)?(dx>0?"east":"west"):(dy>0?"north":"south");
  }

  function syncObjectFields(type,point){
    const ids={house:"housePosition",water:"waterPosition",access:"accessPosition",trees:"treePosition",compost:"compostPosition"};
    const input=byId(ids[type]);if(!input)return;
    const direction=directionFor(point);
    input.value=direction==="center"&&!["trees"].includes(type)?(point.lat>=map.getCenter().lat?"north":"south"):direction;
  }

  function syncObjects(){
    const data={};
    Object.entries(markers).forEach(([type,marker])=>{const p=marker.getLatLng();data[type]={lat:Number(p.lat.toFixed(7)),lng:Number(p.lng.toFixed(7)),direction:directionFor(p)}});
    setHidden("mapObjects",Object.keys(data).length?JSON.stringify(data):"");
  }

  function renderBoundary(){
    if(boundaryLayer)map.removeLayer(boundaryLayer);
    vertexLayer.clearLayers();
    boundaryPoints.forEach(point=>L.marker(point,{interactive:false,icon:L.divIcon({className:"boundary-vertex",iconSize:[12,12]})}).addTo(vertexLayer));
    if(boundaryPoints.length>=3)boundaryLayer=L.polygon(boundaryPoints,{color:"#171417",weight:3,fillColor:"#f0ff70",fillOpacity:.2}).addTo(map);
    else if(boundaryPoints.length>=1)boundaryLayer=L.polyline(boundaryPoints,{color:"#171417",weight:3,dashArray:"7 7"}).addTo(map);
    const area=geodesicArea(boundaryPoints);
    setHidden("boundaryGeoJSON",boundaryGeoJSON());
    if(area>=1){const areaInput=byId("area");areaInput.value=Math.round(area);areaInput.dispatchEvent(new Event("input",{bubbles:true}));shapeFromBoundary()}
    Object.entries(markers).forEach(([type,marker])=>syncObjectFields(type,marker.getLatLng()));
    syncObjects();
    return area;
  }

  function setMode(next){
    mode=next;
    document.querySelectorAll(".map-tool").forEach(button=>button.classList.toggle("is-active",next==="boundary"?button.id==="draw-boundary":button.dataset.mapObject===next));
    const draw=byId("draw-boundary");
    draw.querySelector("b").textContent=next==="boundary"&&boundaryPoints.length>=3?ui[lang].finish:ui[lang].drawButton;
    map.getContainer().style.cursor=next?"crosshair":"grab";
  }

  function finishBoundary(){
    if(boundaryPoints.length<3){setStatus(ui[lang].draw);return}
    const area=renderBoundary();setMode(null);setStatus(ui[lang].measured(area));
  }

  function iconFor(type){return L.divIcon({className:`map-object-icon kind-${type}`,html:letters[type],iconSize:[28,28],iconAnchor:[14,14]})}
  function placeObject(type,latlng){
    if(markers[type])map.removeLayer(markers[type]);
    markers[type]=L.marker(latlng,{icon:iconFor(type),draggable:true,title:labels[lang][type]}).addTo(map);
    markers[type].on("dragend",()=>{syncObjectFields(type,markers[type].getLatLng());syncObjects()});
    syncObjectFields(type,latlng);syncObjects();setMode(null);setStatus(ui[lang].placed(type));
  }

  function onMapClick(event){
    if(mode==="boundary"){
      boundaryPoints.push(event.latlng);const area=renderBoundary();
      if(boundaryPoints.length>=3){byId("draw-boundary").querySelector("b").textContent=ui[lang].finish;setStatus(`${ui[lang].draw} ${formatArea(area)}`)}
      return;
    }
    if(mode&&letters[mode]){placeObject(mode,event.latlng);return}
    setStatus(ui[lang].choose);
  }

  async function findLocation(){
    const query=byId("location").value.trim();
    if(!query){byId("location").focus();setStatus(ui[lang].notFound);return}
    const elapsed=Date.now()-lastSearchAt;if(elapsed<1000)return;
    lastSearchAt=Date.now();const button=byId("find-location");button.disabled=true;setStatus(ui[lang].searching);
    try{
      const response=await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(query)}`,{headers:{"Accept-Language":lang}});
      if(!response.ok)throw new Error("search failed");
      const data=await response.json();
      if(!data.length){setStatus(ui[lang].notFound);return}
      const item=data[0],lat=Number(item.lat),lng=Number(item.lon);map.setView([lat,lng],16);setHidden("mapLat",lat.toFixed(7));setHidden("mapLng",lng.toFixed(7));setStatus(ui[lang].found);
    }catch(error){setStatus(ui[lang].notFound)}finally{button.disabled=false}
  }

  function useCurrentLocation(){
    if(!navigator.geolocation){setStatus(ui[lang].geoError);return}
    setStatus(ui[lang].geo);
    navigator.geolocation.getCurrentPosition(position=>{const lat=position.coords.latitude,lng=position.coords.longitude;map.setView([lat,lng],18);setHidden("mapLat",lat.toFixed(7));setHidden("mapLng",lng.toFixed(7));setStatus(ui[lang].found)},()=>setStatus(ui[lang].geoError),{enableHighAccuracy:true,timeout:12000,maximumAge:60000});
  }

  function clearMap(){
    if(boundaryLayer){map.removeLayer(boundaryLayer);boundaryLayer=null}
    vertexLayer.clearLayers();Object.values(markers).forEach(marker=>map.removeLayer(marker));
    boundaryPoints=[];markers={};["mapLat","mapLng","boundaryGeoJSON","mapObjects"].forEach(id=>setHidden(id,""));setMode(null);setStatus(ui[lang].cleared);
  }

  function init(){
    const container=byId("land-map");if(!container)return;
    if(!window.L){container.classList.add("map-unavailable");container.textContent=ui[lang].unavailable;document.querySelectorAll(".map-toolbar button,.map-search-actions button,.map-edit-actions button").forEach(button=>button.disabled=true);setStatus(ui[lang].unavailable);return}
    map=L.map(container,{zoomControl:true}).setView([39,35],5);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',referrerPolicy:"strict-origin-when-cross-origin"}).addTo(map);
    vertexLayer=L.layerGroup().addTo(map);map.on("click",onMapClick);
    byId("find-location").addEventListener("click",findLocation);byId("use-location").addEventListener("click",useCurrentLocation);
    byId("draw-boundary").addEventListener("click",()=>{if(mode==="boundary"&&boundaryPoints.length>=3){finishBoundary();return}setMode("boundary");setStatus(ui[lang].draw)});
    document.querySelectorAll("[data-map-object]").forEach(button=>button.addEventListener("click",()=>{if(mode==="boundary"&&boundaryPoints.length>=3)finishBoundary();setMode(button.dataset.mapObject);setStatus(ui[lang].place(button.dataset.mapObject))}));
    byId("undo-map").addEventListener("click",()=>{if(!boundaryPoints.length)return;boundaryPoints.pop();const area=renderBoundary();setMode("boundary");setStatus(boundaryPoints.length>=3?`${ui[lang].draw} ${formatArea(area)}`:ui[lang].undo)});
    byId("clear-map").addEventListener("click",clearMap);
    byId("location").addEventListener("keydown",event=>{if(event.key==="Enter"){event.preventDefault();findLocation()}});
    setStatus(ui[lang].ready);
  }

  window.GroundMap={
    setLanguage(next){lang=next==="tr"?"tr":"en";if(map){Object.entries(markers).forEach(([type,marker])=>marker.options.title=labels[lang][type]);setStatus(boundaryPoints.length>=3?ui[lang].measured(geodesicArea(boundaryPoints)):ui[lang].ready);setMode(mode)}},
    getState(){return{area:geodesicArea(boundaryPoints),boundary:boundaryGeoJSON(),objects:JSON.parse(byId("mapObjects")?.value||"{}")}},
    areaOf:geodesicArea,
    directionOf:directionFor
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
