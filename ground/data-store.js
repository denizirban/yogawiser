(function(){
  "use strict";

  const text=value=>String(value??"").trim();
  const optionalNumber=value=>{const number=Number(value);return value!==""&&Number.isFinite(number)?number:null};
  const roundedCoordinate=value=>{const number=optionalNumber(value);return number===null?null:Math.round(number*100)/100};
  const newId=()=>globalThis.crypto?.randomUUID?.()||`ground-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  function payloadFrom(plan,language){
    return {
      submission_id:newId(),
      consent:true,
      consent_version:"ground-2026-09-v2",
      source_version:"010",
      language:language,
      location:text(plan.location).slice(0,200),
      map_lat:roundedCoordinate(plan.mapLat),
      map_lng:roundedCoordinate(plan.mapLng),
      parcel_system:text(plan.parcelSystem).slice(0,30)||null,
      land_reference_a:null,
      land_reference_b:null,
      climate_zone:text(plan.climate?.zone||plan.climateZone).slice(0,40),
      space_type:text(plan.space).slice(0,30),
      area_m2:optionalNumber(plan.area),
      direct_sun:text(plan.sun).slice(0,20),
      water_access:text(plan.water).slice(0,20),
      primary_goal:text(plan.goal).slice(0,30),
      soil_type:text(plan.soil).slice(0,30)||null,
      soil_depth_cm:optionalNumber(plan.soilDepth),
      irrigation_l_day:optionalNumber(plan.dailyWater),
      slope:text(plan.slope).slice(0,30)||null,
      existing_trees:text(plan.trees).slice(0,30)||null,
      previous_crop:text(plan.lastCrop).slice(0,120)||null,
      plot_shape:text(plan.plotShape).slice(0,30)||null,
      rain_capture:text(plan.rainCapture).slice(0,30)||null,
      organic_material:text(plan.organicWaste).slice(0,30)||null,
      sanitation:text(plan.sanitation).slice(0,30)||null,
      candidate_count:Number(plan.candidateCount)||0,
      recommended_crop_ids:(plan.ranked||[]).slice(0,12).map(item=>item.id),
      strategy_choices:(plan.alternatives||[]).map(item=>({goal:item.goal,crop_id:item.top.id})),
      input_coverage:Number(plan.coverage)||0,
      has_drawn_boundary:Boolean(plan.boundaryGeoJSON)
    };
  }

  async function savePlan(plan,language){
    const config=window.YOGAWISER_DATA||{},url=text(config.supabaseUrl).replace(/\/$/,""),key=text(config.anonKey);
    if(!url||!key){const error=new Error("Data connection is not configured");error.code="NOT_CONFIGURED";throw error}
    const response=await fetch(`${url}/rest/v1/ground_sites`,{
      method:"POST",
      headers:{apikey:key,Authorization:`Bearer ${key}`,"Content-Type":"application/json",Prefer:"return=minimal"},
      body:JSON.stringify(payloadFrom(plan,language))
    });
    if(!response.ok)throw new Error(`Ground data save failed (${response.status})`);
    return true;
  }

  window.GroundData={savePlan};
})();
