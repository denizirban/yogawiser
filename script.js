const places = [
  {
    name: "De Ceuvel",
    city: "Amsterdam",
    country: "Netherlands",
    system: "Land · Materials · Community",
    image: "assets/de-ceuvel.jpg",
    photoCredit: "Photo: Space & Matter / Urban Matters",
    changed: "A polluted former shipyard became a circular office park using repurposed houseboats, clean-tech systems and plants that help remediate contaminated soil.",
    matters: "It turns urban regeneration into something physical: reuse the structures, clean the land, share infrastructure, and let a temporary site work as a real-life laboratory.",
    access: "Public / café + events",
    scale: "Urban site",
    link: "https://deceuvel.nl/en/about/general-information/"
  },
  {
    name: "BlueCity",
    city: "Rotterdam",
    country: "Netherlands",
    system: "Materials · Waste · Enterprise",
    image: "assets/bluecity.webp",
    photoCredit: "Photo: Jacqueline Fuijkschot / Rotterdam Partners",
    changed: "An abandoned tropical swimming complex was reused as a 12,000 m² hub where circular entrepreneurs build products, materials and value chains together.",
    matters: "Instead of treating circularity as a checklist, BlueCity makes one company’s output another company’s input — an economic ecosystem inside an existing building.",
    access: "Public events / visits",
    scale: "City hub",
    link: "https://www.bluecity.nl/en/over-bluecity/"
  },
  {
    name: "ReTuna",
    city: "Eskilstuna",
    country: "Sweden",
    system: "Waste · Retail · Materials",
    image: "assets/retuna.jpg",
    photoCredit: "Photo: ReTuna / press image",
    changed: "A conventional shopping mall was inverted: goods arrive through a recycling centre, are sorted, repaired or transformed, then return to the economy through specialist shops.",
    matters: "Re-use becomes normal retail infrastructure rather than a niche charity activity. The waste stream and the shopping street are physically connected.",
    access: "Public / guided tours",
    scale: "Municipal retail",
    link: "https://www.retuna.se/english"
  },
  {
    name: "CopenHill",
    city: "Copenhagen",
    country: "Denmark",
    system: "Energy · Waste · Public Space",
    image: "assets/copenhill.jpg",
    photoCredit: "Photo: Ehrhorn Hummerston / Tverga",
    changed: "A waste-to-energy plant was designed as public landscape too: its roof carries a year-round ski slope, hiking route, café and recreation spaces.",
    matters: "Infrastructure that cities normally hide becomes visible and usable. The project asks whether heavy civic systems can also return public space to the city.",
    access: "Public rooftop",
    scale: "City infrastructure",
    link: "https://www.copenhill.dk/en"
  },
  {
    name: "Prinzessinnengarten",
    city: "Berlin",
    country: "Germany",
    system: "Food · Biodiversity · Community",
    image: "assets/prinzessinnengarten.jpg",
    photoCredit: "Photo: Prinzessinnengarten / Architectuul",
    changed: "A community garden model that began on a brownfield now operates in Neukölln as shared public green space, with collective beds, workshops and ecological education.",
    matters: "The garden is not private allotments. It treats food-growing, biodiversity, climate adaptation and neighborhood knowledge as a commons people maintain together.",
    access: "Public / workshops",
    scale: "Neighborhood",
    link: "https://prinzessinnengarten-kollektiv.net/"
  },
  {
    name: "Lufa Farms",
    city: "Montréal",
    country: "Canada",
    system: "Food · Water · Urban Agriculture",
    image: "assets/lufa-farms.jpg",
    photoCredit: "Photo: Lufa Farms / CNRS",
    changed: "Unused industrial roofs became commercial greenhouses. Lufa built the first of them in Montréal and has since expanded into a network of urban farms and local food distribution.",
    matters: "It treats rooftops as productive city land and shortens the physical distance between cultivation, distribution and the people eating the food.",
    access: "Working farm / limited visits",
    scale: "City food system",
    link: "https://montreal.lufa.com/en/about"
  },
  {
    name: "Earthship Visitor Center",
    city: "Taos",
    country: "United States",
    system: "Water · Energy · Materials · Food",
    image: "assets/earthship.jpg",
    photoCredit: "Photo: Roadtrippers",
    changed: "A functioning off-grid building combines earth-rammed recycled tires, passive solar heat, rainwater capture, solar power, wastewater treatment and indoor food production.",
    matters: "Normally separate utilities are designed as one household system. Visitors can walk through the loops instead of reading about them in a sustainability report.",
    access: "Public / daily tours",
    scale: "Building",
    link: "https://earthship.com/visit/"
  },
  {
    name: "Torri Superiore",
    city: "Ventimiglia",
    country: "Italy",
    system: "Community · Land · Food",
    image: "assets/torri-superiore.webp",
    photoCredit: "Photo: Torri Superiore / Vanity Fair Italia",
    changed: "An abandoned medieval village was restored into an intentional ecovillage, guesthouse and learning place where shared governance, ecological restoration and tourism support one another.",
    matters: "It shows that regeneration can be social as well as architectural: the old fabric survives because a contemporary community found an economic and collective use for it.",
    access: "Visitors / stays",
    scale: "Village",
    link: "https://ecovillage.org/ecovillage/torri-superiore/"
  },
  {
    name: "Vauban",
    city: "Freiburg",
    country: "Germany",
    system: "Mobility · Energy · Community",
    image: "assets/vauban.jpg",
    photoCredit: "Photo: FWTM / Spiegelhalter",
    changed: "A former military site became a low-car district shaped by citizen participation, low-energy building standards, solar architecture, transit and shared public space.",
    matters: "The key lesson is not one green building. It is coordination: housing, mobility, energy and neighborhood life were planned as one connected system.",
    access: "Public district",
    scale: "Neighborhood",
    link: "https://www.freiburg.de/pb/208736.html"
  },
  {
    name: "Heliotrope",
    city: "Freiburg",
    country: "Germany",
    system: "Energy · Architecture",
    image: "assets/heliotrope.jpg",
    photoCredit: "Photo: Rolf Disch Solar Architecture",
    changed: "The cylindrical house rotates with the sun: glazing faces solar gain when useful, insulation turns toward heat when needed, while roof photovoltaics track the sun.",
    matters: "It reframes a building from passive energy consumer to active energy producer — one early prototype for the plus-energy architecture that followed.",
    access: "Guided tours",
    scale: "Building",
    link: "https://rolfdisch.de/en/projects/das-heliotrop-2/"
  }  ,
  {
    name: "BedZED",
    city: "London",
    country: "United Kingdom",
    system: "Energy · Water · Mobility · Community",
    image: "https://miro.medium.com/v2/resize%3Afit%3A1400/1%2A2vNxrpBv3thBMNe6vZf-Vw.jpeg",
    photoCredit: "Photo: BedZED / editorial reference",
    changed: "A mixed-use London neighbourhood made low-impact living part of the physical plan: passive solar design, lower water use, reduced car dependence, shared green space and community facilities were designed together rather than added later.",
    matters: "BedZED is useful precisely because it is old enough to have been lived in, tested and revised. Sustainable housing here is not a render; it has two decades of ordinary life behind it.",
    access: "Public district / guided tours",
    scale: "Neighborhood",
    link: "https://www.bioregional.com/projects-and-services/case-studies/bedzed-the-uks-first-large-scale-eco-village"
  },
  {
    name: "Bullitt Center",
    city: "Seattle",
    country: "United States",
    system: "Energy · Water · Materials",
    image: "https://images.squarespace-cdn.com/content/v1/5f00df29a16ce9490ea49ed6/1596256727898-HHG57DX5LGN1HPYPB5IY/Bullitt.BB.001.M.jpg",
    photoCredit: "Photo: Bullitt Center / Craig Curtis",
    changed: "A commercial office building brought net-zero energy and water goals, rainwater capture, composting toilets, non-toxic materials and a large solar canopy into one functioning urban building.",
    matters: "The interesting part is not a single technology. It is integration: systems that are usually outsourced to distant infrastructure become visible parts of the building itself.",
    access: "Public tours by reservation",
    scale: "Building",
    link: "https://bullittcenter.org/building/"
  },
  {
    name: "Kamikatsu Zero Waste Center WHY",
    city: "Kamikatsu",
    country: "Japan",
    system: "Waste · Materials · Community",
    image: "https://kisarazu-concept-store.com/images/report/report11/image_1.jpg",
    photoCredit: "Photo: Kamikatsu Zero Waste Center WHY",
    changed: "Japan’s first municipality to declare a Zero Waste goal built its waste station, reuse shop, learning spaces and hotel into one civic facility. Residents currently sort household waste into 44 categories and sub-categories.",
    matters: "Waste becomes public infrastructure you can actually see. The building makes sorting, reuse and learning part of everyday civic life instead of hiding the system behind a truck.",
    access: "Public / tours / stays",
    scale: "Town system",
    link: "https://why-kamikatsu.jp/en"
  },
  {
    name: "Kalundborg Symbiosis",
    city: "Kalundborg",
    country: "Denmark",
    system: "Industry · Water · Energy · Materials",
    image: "https://assets.weforum.org/editor/zOvkqOEazAiSLWQBpwH5xpm2jQtrsT8DY-wYtDnbyjQ.png",
    photoCredit: "Diagram: Kalundborg Symbiosis",
    changed: "Public and private companies in Kalundborg physically exchange surplus water, energy and material streams so that one operation’s excess becomes another operation’s input.",
    matters: "Circular economy usually arrives as a diagram. Here the arrows are pipes. More than twenty resource streams connect real industrial partners across the city.",
    access: "Study visits / industrial district",
    scale: "City industry",
    link: "https://www.symbiosis.dk/en/"
  },
  {
    name: "The Plant",
    city: "Chicago",
    country: "United States",
    system: "Food · Waste · Materials · Enterprise",
    image: "https://static.wixstatic.com/media/1d176c_4302de9428d24937ac69bb80df69b53e~mv2.jpg/v1/fill/w_940%2Ch_530%2Cal_c%2Cq_85%2Cenc_auto/1d176c_4302de9428d24937ac69bb80df69b53e~mv2.jpg",
    photoCredit: "Photo: Plant Chicago",
    changed: "A former meatpacking plant became a testing ground for local circular food production, connecting businesses and experiments around food, nutrients, materials and waste loops.",
    matters: "It treats circularity as local metabolism: brewery by-products, food production, cultivation and material reuse become potential inputs for one another rather than separate waste problems.",
    access: "Programs / events",
    scale: "Urban facility",
    link: "https://www.plantchicago.org/circular-economy"
  },
  {
    name: "Ecovillage Findhorn",
    city: "Findhorn",
    country: "Scotland",
    system: "Community · Energy · Water · Food",
    image: "https://framerusercontent.com/images/HIKzAD8q0vwws4xuYnse4hxXnas.jpeg?height=1200&scale-down-to=1024&width=1920",
    photoCredit: "Photo: Ecovillage Findhorn",
    changed: "For more than sixty years the community has experimented with ecological building, renewable energy, water systems, food growing and shared social infrastructure in one inhabited place.",
    matters: "Longevity changes the question. Instead of asking whether an ecovillage can be imagined, Findhorn lets us ask what survives, adapts and becomes ordinary after decades of use.",
    access: "Visitors / stays / learning",
    scale: "Village",
    link: "https://www.ecovillagefindhorn.com/"
  },
  {
    name: "Hammarby Sjöstad",
    city: "Stockholm",
    country: "Sweden",
    system: "Water · Waste · Energy · Mobility",
    image: "https://images.squarespace-cdn.com/content/v1/657b886a23be507969bc8da8/1709519184075-3YZALYFOB3K3KFF7S4YG/Stockholm%2Bhammarby-sjostad%2B2.jpg",
    photoCredit: "Photo: Hammarby Sjöstad / editorial reference",
    changed: "A former industrial and harbour area was redeveloped as a dense waterfront district where energy, water, waste, public transport, cycling and public space were planned as connected urban systems.",
    matters: "Its strongest lesson is scale: environmental performance was treated as a district problem, not something each apartment owner was expected to solve alone.",
    access: "Public district",
    scale: "Urban district",
    link: "https://www.hammarbysjostad.se/en/hammarby-sjostad/"
  },
  {
    name: "EVA-Lanxmeer",
    city: "Culemborg",
    country: "Netherlands",
    system: "Water · Food · Energy · Community",
    image: "https://www.gebiedsontwikkeling.nu/images/fOwk56cW3EWmoyfjoIzKCDnFqmk%3D/11566/width-639/Foto_2_EVA_Lanxmeer_zes_hoven_ten_zuidwesten_waterwingebied__Jeroen_Komen_.jpg",
    photoCredit: "Photo: EVA-Lanxmeer / Jeroen Komen",
    changed: "Housing, work, recreation, food production, water, energy and landscape were planned together, with residents deeply involved in developing and managing shared green space and neighbourhood systems.",
    matters: "Residents are not just users of the infrastructure. They help run pieces of it — from public landscape to car sharing, local food and a resident-owned neighbourhood energy company.",
    access: "Public district / guided tours",
    scale: "Neighborhood",
    link: "https://lanxmeer.nl/"
  },
  {
    name: "Resource Rows",
    city: "Copenhagen",
    country: "Denmark",
    system: "Materials · Housing · Circular Construction",
    image: "https://lendager.com/wp-content/uploads/2021/12/R_Hjortshoj-Ressourceraekkerne-WEB-12web.jpg",
    photoCredit: "Photo: Rasmus Hjortshøj / Lendager",
    changed: "A residential development was built using material streams reclaimed from buildings headed for demolition, including distinctive brick facade modules cut and reused as larger sections.",
    matters: "Instead of designing a building and then shopping for new materials, the project asks what architecture becomes when the existing material stock of the city is treated as the quarry.",
    access: "Public exterior",
    scale: "Housing",
    link: "https://lendager.com/project/resource-rows/"
  },
  {
    name: "Powerhouse Brattørkaia",
    city: "Trondheim",
    country: "Norway",
    system: "Energy · Architecture · Mobility",
    image: "https://stacbond.com/wp-content/uploads/2021/07/w_Powerhouse-7.jpg",
    photoCredit: "Photo: Powerhouse Brattørkaia / editorial reference",
    changed: "At 63° north, a large solar-clad office building was designed to produce more energy over its lifespan than it consumes, while feeding surplus renewable power to neighbouring buildings and electric transport through a local microgrid.",
    matters: "The useful provocation is accounting: the building does not stop at a low utility bill. It asks whether architecture can repay the energy debt of making and operating itself.",
    access: "Public waterfront / workplace",
    scale: "Building + microgrid",
    link: "https://www.snohetta.com/projects/powerhouse-brattorkaia"
  }

  ,{
    name: "Schoonschip",
    city: "Amsterdam",
    country: "Netherlands",
    system: "Water · Energy · Community · Mobility",
    image: "https://www.housingevolutions.eu/files/2021/03/Afbeelding4-1920x960.png",
    photoCredit: "Photo: Schoonschip / Housing Evolutions",
    changed: "Residents co-developed a floating neighbourhood of 46 households with highly efficient homes, shared mobility, a smart energy grid and collective ecological infrastructure.",
    matters: "Climate adaptation becomes ordinary domestic life: floating homes, shared systems and resident governance are treated as one neighbourhood rather than separate technologies.",
    access: "Neighbourhood / virtual tour / excursions",
    scale: "Floating neighborhood",
    link: "https://schoonschipamsterdam.org/en/"
  },
  {
    name: "Sumu Yakushima",
    city: "Yakushima",
    country: "Japan",
    system: "Land · Materials · Architecture",
    image: "https://archinect.gumlet.io/uploads/13/13c2e6553616c9246b1267c075f56c68.jpg?auto=compress%2Cformat&enlarge=true&w=1028",
    photoCredit: "Photo: Sumu Yakushima / tono Inc.",
    changed: "A small residential project was designed around existing trees, local timber and soil-supporting construction methods instead of clearing the site into a blank plot.",
    matters: "The building is asked to participate in the ecology it occupies. Architecture stops being a sealed object and becomes another actor in the forest system.",
    access: "Private residence / project study",
    scale: "Residence",
    link: "https://www.tono-inc.com/sumu-yakushima"
  },
  {
    name: "Taisugar Circular Village",
    city: "Tainan",
    country: "Taiwan",
    system: "Materials · Housing · Food · Energy",
    image: "https://metropolismag.com/wp-content/uploads/2025/03/96647-full_4026-1_96647_sc_v2com-1-scaled.jpg",
    photoCredit: "Photo: Studio Millspace",
    changed: "351 rental homes were built around modular components, material passports, urban farming and product-as-service contracts where some fixtures are rented rather than permanently owned.",
    matters: "Circularity moves beyond recycling bins and into ownership itself: components are designed to be disassembled, tracked and reused after the building changes.",
    access: "Residential complex / exterior",
    scale: "Housing village",
    link: "https://www.bioarch.com.tw/en/work/taisugar-circular-village"
  },
  {
    name: "Sundrop Farms",
    city: "Port Augusta",
    country: "Australia",
    system: "Food · Water · Energy",
    image: "https://www.aalborgcsp.com/fileadmin/_processed_/f/5/csm_2016-05-24_Sundrop_Farms_Sundrop_Aerial_bd106a63fb.jpg",
    photoCredit: "Photo: Sundrop Farms / Aalborg CSP",
    changed: "A 20-hectare greenhouse system uses concentrated solar power and seawater desalination to grow produce in arid land with far less dependence on freshwater and fossil fuels.",
    matters: "It treats scarcity as a systems-design problem: sunlight and seawater become the main inputs for food production in a landscape conventional agriculture would largely reject.",
    access: "Limited group tours by appointment",
    scale: "Agricultural infrastructure",
    link: "https://www.sundropfarms.com/our-technology/"
  },
  {
    name: "Auroville Earth Institute",
    city: "Auroville",
    country: "India",
    system: "Materials · Architecture · Knowledge",
    image: "https://dev.earth-auroville.com/wp-content/uploads/2023/03/Vikas-49-edit-compressed-1024x669.jpg",
    photoCredit: "Photo: Auroville Earth Institute",
    changed: "A research and training centre has spent decades developing and teaching low-carbon earthen construction, including compressed stabilised earth blocks, vaults and domes.",
    matters: "Instead of treating vernacular material knowledge as nostalgia, the institute turns earth construction into a tested, transferable contemporary building technology.",
    access: "Training / awareness visits",
    scale: "Research + training centre",
    link: "https://www.earth-auroville.com/"
  },
  {
    name: "Huerto Roma Verde",
    city: "Mexico City",
    country: "Mexico",
    system: "Food · Community · Resilience · Land",
    image: "https://img.travesiasdigital.com/cdn-cgi/image/width%3D1024%2Cheight%3D683%2Cquality%3D90%2Cformat%3Dauto%2Conerror%3Dredirect/2014/06/Huerto-G2-1024x683.jpg",
    photoCredit: "Photo: Huerto Roma Verde / Travesías",
    changed: "An abandoned post-earthquake urban lot was regenerated into a public permaculture garden, agroecological market, workshop space and community resilience centre.",
    matters: "The garden behaves as social infrastructure. Food growing is only one layer; disaster response, learning, culture and neighbourhood organization occupy the same ground.",
    access: "Open to the public",
    scale: "Community site",
    link: "https://www.huertoromaverde.org/en"
  },
  {
    name: "Floating Farm",
    city: "Rotterdam",
    country: "Netherlands",
    system: "Food · Waste · Water · Urban Agriculture",
    image: "https://lbweng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2019/07/19/node_5762/92534/public/2019/07/19/B9720323632Z.1_20190719221941_000%2BGCGE18U0I.1-0.png.jpg?itok=Mk-D5ftz1563891971",
    photoCredit: "Photo: Floating Farm Rotterdam",
    changed: "A working dairy farm was placed on a floating platform in Rotterdam, using urban food residuals as feed while producing food close to consumers and experimenting with circular by-products.",
    matters: "It asks a useful climate question: if land, water levels and food logistics keep changing, does the farm itself have to stay on land?",
    access: "Public site / tours",
    scale: "Urban farm",
    link: "https://floatingfarm.nl/"
  },
  {
    name: "Warka Water",
    city: "Dorze",
    country: "Ethiopia",
    system: "Water · Materials · Community",
    image: "https://cdn.archilovers.com/projects/2027dd59-88cb-4e50-b1b0-0994dd8a1270.jpg",
    photoCredit: "Photo: Architecture and Vision / Arturo Vittori",
    changed: "A lightweight bamboo tower was designed to harvest rain, fog and dew without electricity, using local assembly techniques and a mesh that collects atmospheric moisture.",
    matters: "The infrastructure is intentionally low-tech: gravity, condensation, local materials and community maintenance replace pipes, pumps and centralized utility networks where those systems may never arrive.",
    access: "Prototype / project study",
    scale: "Community water system",
    link: "https://wdo.org/site-project/warka-water/"
  },
  {
    name: "Kampung Admiralty",
    city: "Singapore",
    country: "Singapore",
    system: "Housing · Health · Food · Community",
    image: "https://static1.straitstimes.com.sg/s3fs-public/articles/2018/12/07/hzadmiralty1207.jpg?VersionId=B8zw.UYDclDv5jPq7TjrTeMAHnb7XrUP",
    photoCredit: "Photo: WOHA / Kampung Admiralty",
    changed: "Senior housing, healthcare, childcare, food, public space and a rooftop community farm were stacked into one compact vertical neighbourhood rather than separated into institutional buildings.",
    matters: "Density becomes social infrastructure. The project treats ageing, care, food and public life as systems that work better when their physical distances collapse.",
    access: "Public community complex",
    scale: "Vertical neighborhood",
    link: "https://woha.net/project/kampung-admiralty/"
  },
  {
    name: "Dancing Rabbit Ecovillage",
    city: "Rutledge",
    country: "United States",
    system: "Community · Energy · Materials · Land",
    image: "https://www.dancingrabbit.org/wp-content/uploads/2025/02/67ae45a623204.webp",
    photoCredit: "Photo: Dancing Rabbit Ecovillage",
    changed: "A long-running intentional community uses ecological covenants, shared infrastructure, natural building, renewable energy and cooperative systems to reduce resource use collectively rather than household by household.",
    matters: "It is valuable because it is not a demonstration house. It is a social experiment that has had to survive governance, maintenance, disagreement and everyday life over decades.",
    access: "Visitors / tours / programs",
    scale: "Ecovillage",
    link: "https://www.dancingrabbit.org/"
  }
  ,{
    name: "Living Breakwaters",
    city: "Staten Island",
    country: "United States",
    system: "Coast · Biodiversity · Infrastructure",
    image: "https://www.scapestudio.com/wp-content/uploads/2023/08/240822_Scape_LivingBreakwateres-0166-1.jpg",
    photoCredit: "Photo: SCAPE",
    changed: "A chain of near-shore breakwaters is designed to reduce wave energy while rebuilding oyster habitat and creating more complex marine ecosystems along a vulnerable shoreline.",
    matters: "The unusual part is that the oysters are not decoration. They are collaborators in the infrastructure: as habitat grows, coastal protection and biodiversity can grow with it.",
    access: "Public shoreline / project landscape",
    scale: "Coastal infrastructure",
    link: "https://www.scapestudio.com/projects/living-breakwaters/"
  },
  {
    name: "Factory 01",
    city: "Vantaa",
    country: "Finland",
    system: "Food · Energy · Biotechnology",
    image: "https://www.greenqueen.com.hk/wp-content/uploads/2024/04/factory-01-solar-foods-air-protein-solein-commercial-facility-2.jpg",
    photoCredit: "Photo: Solar Foods / Factory 01",
    changed: "A commercial-scale factory grows protein using microbes fed carbon dioxide, hydrogen and electricity instead of farmland, sunlight or livestock.",
    matters: "It breaks one of food production's oldest assumptions: that protein has to begin with agriculture. The factory turns electricity and atmospheric inputs into edible biomass under one roof.",
    access: "Working production facility",
    scale: "Food infrastructure",
    link: "https://solarfoods.com/factory-01-press-kit/"
  },
  {
    name: "Sahara Forest Project",
    city: "Aqaba",
    country: "Jordan",
    system: "Food · Water · Energy · Land",
    image: "https://network.bellona.org/content/uploads/sites/3/2017/09/SFP-opening-Jordan3.jpg",
    photoCredit: "Photo: Sahara Forest Project / Bellona",
    changed: "Saltwater-cooled greenhouses, solar power, desalination and desert revegetation were combined into one system for producing food and freshwater in an arid landscape.",
    matters: "Instead of importing ideal conditions, the project starts with what the site has too much of — heat, sun, saltwater and barren land — and tries to turn those constraints into inputs.",
    access: "Demonstration facility / research",
    scale: "Desert food-water system",
    link: "https://www.saharaforestproject.com/project-development/"
  },
  {
    name: "RecoLab",
    city: "Helsingborg",
    country: "Sweden",
    system: "Wastewater · Nutrients · Energy",
    image: "https://media.helsingborg.se/uploads/networks/4/sites/169/2023/01/recolab_dji_0047-2psd.jpeg",
    photoCredit: "Photo: City of Helsingborg / RecoLab",
    changed: "A city district separates toilet waste, greywater and food waste at source so nutrients, biogas and water can be recovered instead of diluted together in one conventional sewer stream.",
    matters: "Wastewater stops being one dirty substance to dispose of and becomes several material streams with different values. The plumbing itself becomes part of a circular economy.",
    access: "Innovation facility / study visits",
    scale: "District infrastructure",
    link: "https://innovation.helsingborg.se/testbaddar/recolab/"
  },
  {
    name: "Houtan Park",
    city: "Shanghai",
    country: "China",
    system: "Water · Wetlands · Public Space",
    image: "https://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/24/c24/26259765_1380025753715.jpg",
    photoCredit: "Photo: Houtan Wetland Park",
    changed: "A former industrial riverfront became a public park where terraced constructed wetlands clean polluted river water while producing habitat, flood resilience and usable landscape.",
    matters: "The treatment plant is the park. Instead of hiding ecological infrastructure behind fences, the water-cleaning process becomes the spatial experience people walk through.",
    access: "Public park",
    scale: "Urban landscape",
    link: "https://www.turenscape.com/en/news/detail/327.html"
  },
  {
    name: "Biosphere 2",
    city: "Oracle",
    country: "United States",
    system: "Ecology · Climate · Closed Systems",
    image: "https://biosphere2.org/sites/default/files/styles/az_card_image/public/2021-10/5_Social-Media_TikTok_0.jpg.webp?itok=1pTZeILb",
    photoCredit: "Photo: Biosphere 2 / University of Arizona",
    changed: "A giant sealed complex was built to test whether humans, plants, soils, water and atmosphere could function together as a materially closed ecological system.",
    matters: "Its failures are part of the value. Biosphere 2 made invisible planetary dependencies painfully measurable: oxygen, microbes, soil chemistry and human behavior all refused to stay in separate boxes.",
    access: "Public tours / research campus",
    scale: "Closed ecosystem laboratory",
    link: "https://biosphere2.org/"
  },
  {
    name: "Gando Primary School",
    city: "Gando",
    country: "Burkina Faso",
    system: "Education · Materials · Passive Cooling",
    image: "https://iwan.com/wp-content/uploads/2022/03/21-Gando-School-FKA-7747-1280x0-c-default.jpg",
    photoCredit: "Photo: Iwan Baan / Kéré Architecture",
    changed: "Local clay was upgraded into compressed earth blocks, while a raised roof and ventilated ceiling create shade and passive airflow without mechanical cooling.",
    matters: "The architecture is inseparable from who built it. Local material knowledge, community labor and climatic physics do more work than imported technology.",
    access: "Working school / architectural study",
    scale: "Community building",
    link: "https://www.kerearchitecture.com/work/building/gando-primary-school"
  },
  {
    name: "Brighton Waste House",
    city: "Brighton",
    country: "United Kingdom",
    system: "Waste · Materials · Education",
    image: "https://inhabitat.com/wp-content/blogs.dir/1/files/2014/06/Brighton-Waste-House-3.jpg",
    photoCredit: "Photo: University of Brighton / Waste House",
    changed: "A permanent research building was assembled largely from discarded, surplus and difficult-to-recycle materials, including construction offcuts and everyday waste streams.",
    matters: "It asks a deliberately awkward question: if a material already exists, why should its previous use disqualify it from becoming architecture? Waste becomes an inventory rather than an endpoint.",
    access: "University research building",
    scale: "Building prototype",
    link: "https://research.brighton.ac.uk/en/publications/the-brighton-waste-house/"
  },
  {
    name: "Circular Garden",
    city: "Milan",
    country: "Italy",
    system: "Mycelium · Materials · Temporary Architecture",
    image: "https://static.designboom.com/wp-content/uploads/2019/04/carlo-ratti-mycelium-circular-garden-structure-milan-design-week-designboom-X1.jpg",
    photoCredit: "Photo: Carlo Ratti Associati / Designboom",
    changed: "A garden installation used grown mycelium structures as architectural arches, then returned its principal biological material to the soil after the exhibition.",
    matters: "Temporary architecture usually behaves like permanent waste. Here the expiration date was designed into the material system from the beginning.",
    access: "Past installation / case study",
    scale: "Material experiment",
    link: "https://www.archdaily.com/914704/carlo-ratti-unveils-structure-grown-from-mushrooms-at-milan-design-week"
  },
  {
    name: "TOILETOWA",
    city: "Miyoshi",
    country: "Japan",
    system: "Wastewater · Soil · Microbiology",
    image: "https://amusementlogic.com/wp-content/uploads/2024/06/Toiletowa-design-and-construction-of-a-public-toilet-Japan-C.jpg",
    photoCredit: "Photo: Tono Mirai Architects",
    changed: "A tiny public toilet pairs recycled rammed earth walls with a visible wastewater treatment system based on microbial fermentation and circulation.",
    matters: "One of the least glamorous pieces of infrastructure becomes an environmental classroom. The building makes the normally hidden journey of human waste part of the architecture.",
    access: "Public facility",
    scale: "Micro infrastructure",
    link: "https://www.archdaily.com/1015881/toiletowa-wc-tono-mirai-architects"
  }
  ,{
    name: "Floating Fields",
    city: "Shenzhen",
    country: "China",
    system: "Food · Water · Aquaculture · Regeneration",
    image: "https://images.divisare.com/images/f_auto%2Cq_auto%2Cw_auto/v1458135488/g7zbpvvqkadf1re2rcjw/thomas-chung-floating-fields-shenzhen-china.jpg",
    photoCredit: "Photo: Thomas Chung / Floating Fields",
    changed: "A former flour factory was cut open into a self-cleansing pondscape combining floating crops, fish, ducks, silkworms, algae and filtering plants.",
    matters: "It is less an urban farm than a metabolic diagram you can walk through: food production, water cleaning, industrial reuse and public space operating as one loop.",
    access: "Completed research landscape / case study",
    scale: "Productive urban landscape",
    link: "https://www.arch.cuhk.edu.hk/projects/research-works/floating-fields-shenzhen"
  },
  {
    name: "Floating University",
    city: "Berlin",
    country: "Germany",
    system: "Water · Wetlands · Learning · Community",
    image: "https://archinect.gumlet.io/uploads/4b/4b5b4c8be9beffa5b73ad2e0acb73f2d.jpg?auto=compress%2Cformat",
    photoCredit: "Photo: Floating University / Raumlabor Berlin",
    changed: "An overlooked rainwater retention basin at the former Tempelhof airport became an experimental learning site built around the wetland ecosystem that had colonised the infrastructure.",
    matters: "The interesting move was not replacing the accidental ecology with a campus. The ecology became the campus — drainage infrastructure, culture and collective learning sharing the same muddy address.",
    access: "Programs / events / seasonal access",
    scale: "Urban learning landscape",
    link: "https://www.thf-berlin.de/en/development/cooperative-development/floating-university"
  },
  {
    name: "Urban Atölye Mycelium Research",
    city: "Istanbul",
    country: "Türkiye",
    system: "Mycelium · Materials · Community · Research",
    image: "https://ucarecdn.com/e15de85f-c6bd-4aa3-9f09-9dba41b9e6a1/-/autorotate/yes/",
    photoCredit: "Reference image: community mycelium fabrication",
    changed: "Urban Atölye and Arup Türkiye ran more than one hundred cultivation trials in Istanbul to test how non-specialists could grow mycelium composites using different fungi, substrates, moulds and ordinary environments.",
    matters: "The research shifts biomaterials away from specialist labs and toward a stranger question: could residents eventually grow parts of the material city themselves?",
    access: "Research archive / workshops",
    scale: "Community biomaterial research",
    link: "https://www.urbanatolye.com/works/mycelium"
  },
  {
    name: "Mushi Floating Wetlands",
    city: "Melbourne",
    country: "Australia",
    system: "Mycelium · Water · Habitat · Waste",
    image: "https://www.swinburne.edu.au/content/dam/media/engagement/mushi-researchers-in-boat-low-res.jpg/_jcr_content/renditions/cq5dam.web.3840.2160.jpeg",
    photoCredit: "Photo: Swinburne University",
    changed: "Floating wetland modules made with mycelium and organic matter were trialled as biodegradable platforms for plants that can filter waterways and create aquatic habitat.",
    matters: "Most water infrastructure arrives as plastic, concrete or steel. Mushi asks whether the cleaning device itself can be grown, inhabited by other species and eventually disappear.",
    access: "Research trial / case study",
    scale: "Living water infrastructure",
    link: "https://www.swinburne.edu.au/news/2021/04/swinburne-researchers-contribute-to-world-first-approach-to-cleaning-waterways/"
  },
  {
    name: "Omega Eco Machine",
    city: "Rhinebeck",
    country: "United States",
    system: "Water · Microbes · Plants · Closed Loop",
    image: "https://mc-insideout.nyc3.cdn.digitaloceanspaces.com/2024/09/lagoons-ocsl-omega-robert-skip-backus.jpg",
    photoCredit: "Photo: Omega Center for Sustainable Living",
    changed: "Campus wastewater moves through microbes, constructed wetlands, planted lagoons and sand filters before returning as clean water to the aquifer — without chemical treatment.",
    matters: "A sewage plant usually hides its biology. Here the biology is the machinery, and the machinery is a greenhouse people can visit.",
    access: "Public tours / education center",
    scale: "Living wastewater system",
    link: "https://www.eomega.org/center-sustainable-living/eco-machine"
  },
  {
    name: "CloudFisher",
    city: "Aït Baamrane",
    country: "Morocco",
    system: "Fog · Water · Climate · Community",
    image: "https://cultureroom.theclimatetribe.com/_next/image?q=75&url=https%3A%2F%2Fstorage.theclimatetribe.com%2F19%2F62%2F441%2FHamad_1_1_88614afce8.jpg&w=3840",
    photoCredit: "Photo: Dar Si Hmad / CloudFisher",
    changed: "Large mesh collectors on mountain ridges intercept Atlantic fog and condense it into water that is piped to Amazigh communities in the Anti-Atlas.",
    matters: "There is no river to divert and no aquifer to pump harder. The infrastructure starts with weather that most engineering would classify as empty air.",
    access: "Working community water system",
    scale: "Regional water infrastructure",
    link: "https://darsihmad.org/"
  },
  {
    name: "BIQ House",
    city: "Hamburg",
    country: "Germany",
    system: "Algae · Energy · Architecture",
    image: "assets/biq-house.jpg",
    photoCredit: "Photo: Arup / BIQ House",
    changed: "The building facade contains photobioreactors where microalgae grow in sunlight, providing shade while producing biomass and capturing solar heat.",
    matters: "The facade stops being a static boundary. It behaves more like a thin farm wrapped around apartments — growing, shading and participating in the building's energy system.",
    access: "Residential building / exterior view",
    scale: "Bio-reactive architecture",
    link: "https://www.arup.com/projects/solarleaf"
  },
  {
    name: "Hy-Fi",
    city: "New York",
    country: "United States",
    system: "Mycelium · Waste · Computation · Architecture",
    image: "https://media.wired.com/photos/5932518aa3126458449940e1/master/w_1600%2Cc_limit/Copyright_BarkowPhoto_HY-FI_IntFinal.jpg",
    photoCredit: "Photo: Barkow Photo / Hy-Fi",
    changed: "A forty-foot temporary pavilion at MoMA PS1 was assembled from thousands of bricks grown from agricultural waste bound together by fungal mycelium.",
    matters: "The architecture had a planned afterlife: grow the material, inhabit it briefly, dismantle it and return the biological bricks to the material cycle instead of a landfill.",
    access: "Past installation / documented case study",
    scale: "Biofabricated pavilion",
    link: "https://www.moma.org/slideshows/74"
  },
  {
    name: "Living Water Garden",
    city: "Chengdu",
    country: "China",
    system: "Water · Wetlands · Public Space · Education",
    image: "https://images.squarespace-cdn.com/content/v1/5f34120866c84608fe9fe40a/3020bf94-a58b-4933-a21a-8e63238ec4f8/LWG%2BAerial%2Bview%2BHQ.jpg",
    photoCredit: "Photo: Betsy Damon / Living Water Garden",
    changed: "Polluted river water was diverted through settling ponds, planted wetlands and ecological treatment stages inside a public park before returning cleaner to the river system.",
    matters: "It makes water quality legible. Instead of treating pollution somewhere invisible, the city gets a landscape where the cleaning process can be followed spatially.",
    access: "Public ecological park",
    scale: "Urban water system",
    link: "https://www.betsydamon.com/artworks/living-water-garden"
  },
  {
    name: "Foresta",
    city: "Frankfurt",
    country: "Germany",
    system: "Mycelium · Textile Waste · Acoustics · Interiors",
    image: "https://www.arup.com/globalassets/images/projects/f/foresta/foresta-renewable-materials.webp?height=802&quality=80&width=1200",
    photoCredit: "Photo: Arup / Mogu",
    changed: "Arup and Mogu developed acoustic panels by growing mycelium through hemp and textile residues, then mounting the compostable modules in a reusable timber frame.",
    matters: "Building structures may last a century while interiors are replaced every few years. Foresta targets that overlooked churn with a material literally grown from another industry's leftovers.",
    access: "Commercial material system / case study",
    scale: "Regenerative interior system",
    link: "https://www.arup.com/en-us/projects/foresta/"
  }



];

const fieldNoteSlugs = {
  "De Ceuvel": "de-ceuvel",
  "BlueCity": "bluecity",
  "ReTuna": "retuna",
  "CopenHill": "copenhill",
  "Prinzessinnengarten": "prinzessinnengarten",
  "Lufa Farms": "lufa-farms",
  "Earthship Visitor Center": "earthship-visitor-center",
  "Torri Superiore": "torri-superiore",
  "Vauban": "vauban",
  "Heliotrope": "heliotrope",
  "BIQ House": "biq-house"
};

const listEl = document.getElementById("place-list");
const inputEl = document.getElementById("atlas-search");
const resultCountEl = document.getElementById("result-count");
const emptyEl = document.getElementById("empty-state");
const clearEl = document.getElementById("clear-search");
const panelEl = document.querySelector(".story-panel");

const story = {
  image: document.getElementById("story-image"),
  number: document.getElementById("story-number"),
  total: document.getElementById("story-total"),
  credit: document.getElementById("photo-credit"),
  location: document.getElementById("story-location"),
  title: document.getElementById("story-title"),
  changed: document.getElementById("story-changed"),
  matters: document.getElementById("story-matters"),
  system: document.getElementById("story-system"),
  access: document.getElementById("story-access"),
  scale: document.getElementById("story-scale"),
  link: document.getElementById("story-link")
};

const fieldNoteLink = story.link.cloneNode(false);
fieldNoteLink.id = "story-field-note";
fieldNoteLink.textContent = "Read field note ↗";
fieldNoteLink.setAttribute("aria-label", "Read Yogawiser field note");
fieldNoteLink.style.display = "none";
fieldNoteLink.style.marginLeft = "12px";
story.link.insertAdjacentElement("afterend", fieldNoteLink);

let filteredPlaces = [...places];
let activeName = places[0].name;

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function renderList() {
  listEl.innerHTML = "";
  filteredPlaces.forEach((place) => {
    const originalIndex = places.findIndex((item) => item.name === place.name);
    const button = document.createElement("button");
    button.className = "place-row" + (place.name === activeName ? " is-active" : "");
    button.type = "button";
    button.dataset.name = place.name;
    button.innerHTML = `
      <span class="place-number">${String(originalIndex + 1).padStart(2, "0")}</span>
      <span class="place-primary">
        <span class="place-name">${place.name}</span>
        <span class="place-location">${place.city}, ${place.country}</span>
      </span>
      <span class="place-system">${place.system}</span>
    `;
    button.addEventListener("mouseenter", () => selectPlace(place));
    button.addEventListener("focus", () => selectPlace(place));
    button.addEventListener("click", () => {
      selectPlace(place);
      if (window.innerWidth <= 900) {
        panelEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    listEl.appendChild(button);
  });

  resultCountEl.textContent = `${filteredPlaces.length} / ${places.length}`;
  emptyEl.hidden = filteredPlaces.length !== 0;
}

function selectPlace(place) {
  activeName = place.name;
  panelEl.classList.add("is-changing");
  const originalIndex = places.findIndex((item) => item.name === place.name);

  setTimeout(() => {
    story.image.src = place.image;
    story.image.alt = `${place.name}, ${place.city}`;
    story.number.textContent = String(originalIndex + 1).padStart(2, "0");
    story.total.textContent = places.length;
    story.credit.textContent = place.photoCredit;
    story.location.textContent = `${place.city}, ${place.country}`;
    story.title.textContent = place.name;
    story.changed.textContent = place.changed;
    story.matters.textContent = place.matters;
    story.system.textContent = place.system;
    story.access.textContent = place.access;
    story.scale.textContent = place.scale;
    story.link.href = place.link;

    const fieldNoteSlug = fieldNoteSlugs[place.name];
    if (fieldNoteSlug) {
      fieldNoteLink.href = `/places/${fieldNoteSlug}/`;
      fieldNoteLink.style.display = "";
    } else {
      fieldNoteLink.removeAttribute("href");
      fieldNoteLink.style.display = "none";
    }

    document.querySelectorAll(".place-row").forEach((row) => {
      row.classList.toggle("is-active", row.dataset.name === place.name);
    });
    panelEl.classList.remove("is-changing");
  }, 90);
}

function applySearch(query) {
  const q = normalize(query.trim());
  filteredPlaces = !q
    ? [...places]
    : places.filter((place) => normalize([
        place.name,
        place.city,
        place.country,
        place.system,
        place.changed,
        place.matters
      ].join(" ")).includes(q));

  if (filteredPlaces.length && !filteredPlaces.some((p) => p.name === activeName)) {
    activeName = filteredPlaces[0].name;
    selectPlace(filteredPlaces[0]);
  }
  renderList();
}

inputEl.addEventListener("input", (event) => applySearch(event.target.value));
clearEl.addEventListener("click", () => {
  inputEl.value = "";
  applySearch("");
  inputEl.focus();
});

document.querySelectorAll("[data-query]").forEach((button) => {
  button.addEventListener("click", () => {
    inputEl.value = button.dataset.query;
    applySearch(button.dataset.query);
  });
});

story.total.textContent = places.length;
renderList();
selectPlace(places[0]);
