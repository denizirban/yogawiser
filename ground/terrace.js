(function(){
  "use strict";

  const markerLabels={door:"D",water:"W",drain:"G",rail:"R"};
  let activeMarker="door",photoUrl="",markers={},previousMode="field",landArea="1200",terraceArea="12";
  const byId=id=>document.getElementById(id);
  const esc=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));
  const tr=()=>document.documentElement.lang==="tr";

  function syncMode(){
    const terrace=document.querySelector('input[name="space"]:checked')?.value==="terrace";
    const area=byId("area");
    if(terrace&&previousMode!=="terrace"){landArea=area.value||landArea;if(!byId("terraceLength").value&&!byId("terraceWidth").value)area.value=terraceArea}
    if(!terrace&&previousMode==="terrace"){terraceArea=area.value||terraceArea;area.value=landArea}
    previousMode=terrace?"terrace":"land";
    document.querySelectorAll(".land-only").forEach(element=>element.hidden=terrace);
    document.querySelectorAll(".terrace-only").forEach(element=>element.hidden=!terrace);
    const areaLabel=byId("area-label");
    if(areaLabel)areaLabel.textContent=terrace?(tr()?"Kullanılabilir saksı alanı":"Usable container area"):(tr()?"Üretim alanı":"Growing area");
    const locationLabel=byId("location-label");
    if(locationLabel)locationLabel.textContent=terrace?(tr()?"Teras nerede?":"Where is the terrace?"):(tr()?"Arazi nerede?":"Where is the land?");
    if(terrace){
      byId("soil").value="container";
      byId("slope").value="flat";
      byId("trees").value="none";
    }
  }

  function syncArea(){
    const length=Number(byId("terraceLength")?.value),width=Number(byId("terraceWidth")?.value);
    if(length>0&&width>0)byId("area").value=Math.max(1,Math.round(length*width*10)/10);
  }

  function paintMarkers(){
    const layer=byId("terrace-photo-markers");
    layer.innerHTML=Object.entries(markers).map(([kind,point])=>`<span class="terrace-photo-marker kind-${kind}" style="left:${point.x}%;top:${point.y}%">${markerLabels[kind]}</span>`).join("");
    byId("terraceMarkers").value=JSON.stringify(markers);
  }

  function clearPhoto(){
    if(photoUrl)URL.revokeObjectURL(photoUrl);
    photoUrl="";markers={};byId("terracePhoto").value="";
    byId("terrace-photo-preview").removeAttribute("src");
    byId("terrace-photo-stage").hidden=true;byId("terrace-photo-tools").hidden=true;paintMarkers();
  }

  function init(){
    document.querySelectorAll('input[name="space"]').forEach(input=>input.addEventListener("change",syncMode));
    ["terraceLength","terraceWidth"].forEach(id=>byId(id)?.addEventListener("input",syncArea));
    byId("terracePhoto")?.addEventListener("change",event=>{
      const file=event.target.files?.[0];if(!file)return;
      if(photoUrl)URL.revokeObjectURL(photoUrl);photoUrl=URL.createObjectURL(file);markers={};
      byId("terrace-photo-preview").src=photoUrl;byId("terrace-photo-stage").hidden=false;byId("terrace-photo-tools").hidden=false;paintMarkers();
    });
    document.querySelectorAll("[data-terrace-marker]").forEach(button=>button.addEventListener("click",()=>{
      activeMarker=button.dataset.terraceMarker;
      document.querySelectorAll("[data-terrace-marker]").forEach(item=>item.classList.toggle("is-active",item===button));
    }));
    byId("terrace-photo-stage")?.addEventListener("click",event=>{
      const rect=event.currentTarget.getBoundingClientRect();
      markers[activeMarker]={x:Math.round((event.clientX-rect.left)/rect.width*1000)/10,y:Math.round((event.clientY-rect.top)/rect.height*1000)/10};paintMarkers();
    });
    byId("clear-terrace-photo")?.addEventListener("click",clearPhoto);
    document.querySelector('[data-terrace-marker="door"]')?.classList.add("is-active");syncMode();
  }

  function sidePoint(side){return{north:{x:360,y:72},east:{x:645,y:260},south:{x:360,y:448},west:{x:75,y:260},unknown:{x:630,y:420}}[side]||{x:630,y:420}}
  function edgeLine(side,klass){const lines={north:[90,78,630,78],east:[632,78,632,442],south:[90,442,630,442],west:[88,78,88,442]};const p=lines[side];return p?`<line class="${klass}" x1="${p[0]}" y1="${p[1]}" x2="${p[2]}" y2="${p[3]}"/>`:""}
  function marker(side,label,klass){const p=sidePoint(side);return`<circle class="terrace-node ${klass}" cx="${p.x}" cy="${p.y}" r="18"/><text class="map-marker" x="${p.x}" y="${p.y+5}" text-anchor="middle">${label}</text>`}
  function pot(x,y,size,klass,label=""){return`<circle class="terrace-pot ${klass}" cx="${x}" cy="${y}" r="${size}"/>${label?`<text class="terrace-pot-label" x="${x}" y="${y+4}" text-anchor="middle">${label}</text>`:""}`}

  function plan(data){
    const isTr=tr(),door=data.terraceDoor||"south",water=data.terraceWater||"unknown",drain=data.terraceDrain||"unknown",rail=data.terraceRailing||"unknown";
    const labels=isTr?{title:"Teras için saksı yerleşimi.",note:"Ölçülere göre şematik plan · yapısal yükü doğrulayın",path:"80–90 CM AÇIK GEÇİŞ",daily:"GÜNLÜK HASAT",tall:"DİKEY / UZUN",low:"ALÇAK VE ÇOK YILLIK",door:"Kapı",tap:"Musluk",drain:"Gider",rail:"Açık kenar"}:{title:"A container layout for the terrace.",note:"Schematic from your measurements · verify structural load",path:"80–90 CM CLEAR ROUTE",daily:"DAILY HARVEST",tall:"VERTICAL / TALL",low:"LOW + PERENNIAL",door:"Door",tap:"Tap",drain:"Drain",rail:"Open edge"};
    const dp=sidePoint(door),center={x:360,y:260};
    const path=`<path class="terrace-route" d="M${dp.x} ${dp.y}L${center.x} ${center.y}"/><text class="terrace-route-label" x="365" y="246">${labels.path}</text>`;
    const tallSide=rail!=="unknown"&&rail!=="multiple"?rail:"north";
    const svg=`<svg viewBox="0 0 720 520" aria-hidden="true"><rect class="terrace-floor" x="88" y="78" width="544" height="364"/>${edgeLine(tallSide,"terrace-trellis")}${rail!=="multiple"?edgeLine(rail,"terrace-open-edge"):""}<rect class="terrace-daily-zone" x="270" y="170" width="180" height="180" rx="24"/>${path}${marker(door,"D","door")}${water!=="unknown"?marker(water,"W","water"):""}${drain!=="unknown"?marker(drain,"G","drain"):""}${pot(150,135,25,"tall","1")}${pot(245,125,25,"tall","2")}${pot(475,125,25,"tall","3")}${pot(565,140,25,"tall","4")}${pot(210,370,18,"low")}${pot(275,392,18,"low")}${pot(445,392,18,"low")}${pot(510,370,18,"low")}${pot(315,205,16,"daily")}${pot(360,205,16,"daily")}${pot(405,205,16,"daily")}${pot(315,305,16,"daily")}${pot(360,305,16,"daily")}${pot(405,305,16,"daily")}<text class="map-small" x="285" y="156">${labels.daily}</text><text class="map-small" x="110" y="105">${labels.tall}</text><text class="map-small" x="110" y="425">${labels.low}</text></svg>`;
    const legend=[["#f0ff70",labels.daily],["#b8cf9c",labels.low],["#6f935d",labels.tall],["D",labels.door],["W",labels.tap],["G",labels.drain],["R",labels.rail]];
    const photoMarked=Object.keys(markers).length>0;
    const insights=isTr?[
      ["Çıkışı açık bırakın","Kapıdan merkeze en az 80–90 cm engelsiz geçiş bırakın; saksı, hortum ve tabak bu hatta taşmasın."],
      ["Suyu iş bölgesine yaklaştırın",water!=="unknown"?"Susuzluğa hassas saksıları musluğa yakın tek bir damla sulama grubunda toplayın.":"Musluk yeri bilinmiyor; sulama hattı kurmadan önce kaynak ve hortum güzergâhını işaretleyin."],
      ["Rüzgârı yükseklikle yönetin",data.terraceWind==="exposed"?"Alçak ve geniş tabanlı saksılar kullanın; kafesleri korkuluğa değil bağımsız güvenli taşıyıcıya sabitleyin.":"Uzun bitkileri gölge düşürmeyecek arka kenarda gruplayın; devrilmeye karşı yine sabitleyin."],
      ["Ağırlığı doğrulayın",data.terraceLoad==="verified"?"Taşıma doğrulanmış olsa da ıslak toprak ve depo suyu ağırlığını eşit dağıtın.":"Yapısal doğrulama olmadan büyük ağaç saksısı, yükseltilmiş yatak veya dolu su deposu önermiyoruz."],
      [photoMarked?"Fotoğraf işaretlerini kullanın":"Fotoğraf üzerinde noktaları işaretleyin",photoMarked?"Kapı, su, gider veya açık kenar için koyduğunuz işaretleri uygulama öncesi ölçülerle eşleştirin.":"İsteğe bağlı fotoğrafı ekleyip kapı, musluk, gider ve açık kenarı işaretlemek planı sahaya taşımayı kolaylaştırır."]
    ]:[
      ["Keep the exit clear","Maintain an unobstructed 80–90 cm route from the door; keep pots, hose and saucers outside it."],
      ["Bring water to the work zone",water!=="unknown"?"Group thirsty containers near the tap on one drip-irrigation zone.":"The tap is unknown; mark the source and hose route before installing irrigation."],
      ["Manage wind with height",data.terraceWind==="exposed"?"Use low, wide-based containers and anchor trellises to an independent safe support—not the railing.":"Group tall crops at a back edge that will not shade the rest, and secure them against overturning."],
      ["Verify weight",data.terraceLoad==="verified"?"Even after verification, distribute wet soil and stored-water loads evenly.":"Do not add large tree pots, raised beds or a full water tank without structural verification."],
      [photoMarked?"Use the photo markers":"Mark the photo",photoMarked?"Match your door, tap, drain or open-edge markers to real measurements before installation.":"An optional photo with door, tap, drain and open-edge markers makes the schematic easier to transfer on site."]
    ];
    return{svg,legend,insights,title:labels.title,note:labels.note};
  }

  window.GroundTerrace={init,plan,syncMode};
})();
