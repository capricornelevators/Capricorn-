/**
 * City landing pages for the main Kerala markets.
 *
 * RULE — read before adding a city:
 * Each entry must carry content that is true of that city and false of the others.
 * `localContext` and `engineering` are the differentiators: building stock, climate,
 * water table, salt exposure and the kinds of buildings that actually need lifts
 * there. A city whose entry could be produced by find-and-replacing another city's
 * name does not belong here — that is the scaled-content pattern that gets a young
 * domain filtered, and it is why this list is ten cities and not two hundred.
 *
 * NOT claimed anywhere below: branch offices, local project counts, named clients
 * or engineer names. Capricorn operates from the Ernakulam office. When the client
 * supplies real per-city projects and photos, add them to `projects` and surface
 * them on the page — that is what will make these pages genuinely hard to beat.
 */

export const HQ = 'Vyttila, Ernakulam';

export const CITIES = [
  {
    slug: 'kochi',
    name: 'Kochi',
    aka: ['Ernakulam', 'Cochin'],
    district: 'Ernakulam',
    isHQ: true,
    metaTitle: 'Elevator Company in Kochi',
    metaDescription:
      'Elevator company in Kochi — home lifts, commercial elevators, modernization and AMC for all brands, from our Vyttila office in Ernakulam.',
    lede:
      'Capricorn Elevators is based in Vyttila, Ernakulam. Kochi is our home market: home lifts in the villa developments around Kakkanad and Aluva, passenger lifts in the apartment towers along Marine Drive and Edappally, and maintenance contracts across the commercial corridor.',
    localContext:
      'Kochi has the most varied building stock in Kerala — high-rise apartments on reclaimed ground near the backwaters, IT campus buildings around Infopark, older three and four storey commercial blocks in the city centre with no lift at all, and gated villa developments spreading east towards Kakkanad and north towards Aluva. Each needs a different answer, and the retrofit market here is as large as the new-build one.',
    engineering: [
      {
        heading: 'Low ground and high water',
        body:
          'Much of Kochi sits barely above sea level on reclaimed or filled land, and the 2018 floods made the consequences very clear. Lift pits in low-lying areas need proper waterproofing, a drainage or sump arrangement, and controller equipment positioned so that standing water in a pit does not take out the lift. On flood-exposed sites it is worth agreeing in advance what the lift does when water is detected — parking the car at an upper landing is better than losing the controller.',
      },
      {
        heading: 'Salt air from the backwaters',
        body:
          'Proximity to the backwaters and the sea means salt-laden, humid air for most of the year. Specify hairline or matte stainless rather than painted mild steel for exposed car and frame components, sealed door tracks, and corrosion-resistant fixings. This is specification, not an upsell — it determines whether the lift looks acceptable in year five.',
      },
      {
        heading: 'Retrofits in the old commercial core',
        body:
          'A large number of buildings in and around the city centre were built three or four storeys with no shaft. Adding a lift usually means a self-supporting structural shaft in a light well, a stair void or against a rear elevation, with careful attention to access for delivery in streets where a lorry cannot park.',
      },
    ],
    areas: [
      'Kakkanad', 'Edappally', 'Vyttila', 'Palarivattom', 'Kaloor', 'Marine Drive',
      'Fort Kochi', 'Tripunithura', 'Aluva', 'Perumbavoor', 'Angamaly', 'Muvattupuzha',
    ],
    demand: ['Apartment towers', 'IT and office buildings', 'Hospitals', 'Hotels', 'Villa home lifts', 'Retail'],
    faqs: [
      {
        q: "Do you have an office in Kochi?",
        a:
          "Yes. Capricorn Elevators operates from Unit 03, 11th Floor, Jomer Symphony, Ponnurunni East, Vyttila. Kochi sites are the quickest for us to reach for surveys, installation and service calls.",
      },
      {
        q: "Our building is in a low-lying area that flooded. What should the lift allow for?",
        a:
          "Tanked and drained pit with a sump arrangement, controller equipment positioned clear of likely water levels, and an agreed behaviour on water detection. Parking the car at an upper landing protects the equipment far better than letting it sit in a flooded pit.",
      },
      {
        q: "Can a lift be added to an older building in the city centre?",
        a:
          "Usually with a self-supporting shaft in a light well, stair void or against a rear elevation. The harder constraint in the old commercial core is delivery access, since many streets cannot take a lorry, and that is settled at survey.",
      },
      {
        q: "Does being near the backwaters affect the specification?",
        a:
          "Yes. Salt-laden humid air attacks painted steel and plain fixings, so hairline or matte stainless for exposed car and frame components, sealed door tracks and corrosion-resistant fixings are the right baseline.",
      },
      {
        q: "Will you maintain a lift installed by another company?",
        a:
          "Yes, for every make. We inspect the lift, document its condition and list anything needing correction before quoting the contract.",
      },
    ],
    projects: [],
  },

  {
    slug: 'thiruvananthapuram',
    name: 'Thiruvananthapuram',
    aka: ['Trivandrum'],
    district: 'Thiruvananthapuram',
    metaTitle: 'Elevator Company in Thiruvananthapuram',
    metaDescription:
      'Elevators in Thiruvananthapuram — home lifts, passenger and hospital lifts, modernization and AMC for all brands across the capital city.',
    lede:
      'Lift supply, installation, modernization and maintenance across Thiruvananthapuram, served from our Ernakulam office. The capital has a distinct mix: government and institutional buildings, the Technopark campuses, a large medical sector, and residential streets of substantial older houses.',
    localContext:
      'Thiruvananthapuram combines a dense institutional and government building stock with established residential areas of large individual houses in Kowdiar, Vazhuthacaud and Sasthamangalam, and newer apartment development out towards Kazhakkoottam and the Technopark corridor. The institutional and healthcare share of demand is higher here than anywhere else in Kerala.',
    engineering: [
      {
        heading: 'Hospital and institutional duty',
        body:
          'The city\'s concentration of hospitals and medical institutions means bed lifts with genuine stretcher clearances, essential-supply backup and accurate levelling for trolley transfer. These are specified around the loaded bed, not a passenger count, and getting the clear door width wrong is the mistake that cannot be corrected later.',
      },
      {
        heading: 'Terrain and split levels',
        body:
          'Thiruvananthapuram is noticeably undulating, and houses on sloping plots frequently have split levels and half landings. These complicate the stop arrangement — a lift may need to serve levels that do not align with the stair landings, which has to be resolved at survey rather than discovered during installation.',
      },
      {
        heading: 'Retrofits into substantial older homes',
        body:
          'Many of the larger houses in the older residential areas were built across three floors without provision for a lift, and are now occupied by families with elderly parents. A glass or structural shaft in the stair void is usually the least disruptive route, and avoids rebuilding through finished rooms.',
      },
    ],
    areas: [
      'Kowdiar', 'Vazhuthacaud', 'Sasthamangalam', 'Pattom', 'Kazhakkoottam',
      'Technopark', 'Vellayambalam', 'Peroorkada', 'Nedumangad', 'Neyyattinkara',
    ],
    demand: ['Hospitals and clinics', 'Government and institutional', 'IT offices', 'Apartments', 'Home lifts'],
    faqs: [
      {
        q: "Do you supply hospital bed lifts in Thiruvananthapuram?",
        a:
          "Yes. Bed lifts are sized around the longest loaded trolley in service with an attendant alongside, with clear door openings from 1100 mm, accurate re-levelling for trolley transfer, and essential-supply backup plus an automatic rescue device.",
      },
      {
        q: "Our house is on a slope with split levels. Can a lift serve them?",
        a:
          "Usually yes, but it has to be designed from a measured survey. On sloping plots the levels a lift needs to serve often do not line up with the stair landings, and that must be resolved before ordering rather than discovered on site.",
      },
      {
        q: "Can a lift be retrofitted into a large older house in Kowdiar or Vazhuthacaud?",
        a:
          "A glass or structural shaft in the stair void is normally the least disruptive route, since it avoids rebuilding through finished rooms and keeps daylight in the stairwell.",
      },
      {
        q: "What do office and IT buildings here typically need?",
        a:
          "Passenger lifts sized on morning-arrival peak traffic rather than floor count, with group control where two or more lifts share a lobby. The arrival peak governs office buildings the way the evening peak governs residential ones.",
      },
      {
        q: "Do you cover Technopark and Kazhakkoottam?",
        a:
          "Yes, along with Kowdiar, Vazhuthacaud, Sasthamangalam, Pattom, Peroorkada, Nedumangad and Neyyattinkara. Visits are scheduled from our Ernakulam office.",
      },
    ],
    projects: [],
  },

  {
    slug: 'kozhikode',
    name: 'Kozhikode',
    aka: ['Calicut'],
    district: 'Kozhikode',
    metaTitle: 'Elevator Company in Kozhikode (Calicut)',
    metaDescription:
      'Elevators in Kozhikode — retail and hospital lifts for the city trade core, home lifts, modernization and AMC for all elevator brands.',
    lede:
      'Passenger lifts, hospital lifts and home elevators across Kozhikode. The city has one of the densest commercial cores in Kerala, and a large share of our work here is lifts in multi-storey trading buildings and private hospitals rather than new residential towers.',
    localContext:
      'Kozhikode\'s commercial heart runs along Mavoor Road, the Beach Road area and the old bazaar quarters, where four and five storey trading buildings sit on tight plots with no setback and no service yard. The city also carries a dense private healthcare sector. Outside the core, the municipal area spreads into established residential neighbourhoods and down the coast towards Beypore and Feroke.',
    engineering: [
      {
        heading: 'Tight plots and no delivery frontage',
        body:
          'Buildings in the trading quarters frequently have no off-street space at all. Car panels, rails and the machine have to be brought in through a shop frontage during restricted hours, often at night, and lifted by hand or through a light well. This drives real decisions — component sizes that fit a stair, a phased delivery, and a programme agreed with the occupier before anything is ordered.',
      },
      {
        heading: 'Lifts above an operating business',
        body:
          'Retrofitting a lift into a working trading building means the shop below cannot close for three weeks. Work is phased around trading hours, with dust and noise containment at each floor, and the shaft sealed so the business continues. The sequencing matters more than the equipment.',
      },
      {
        heading: 'Private hospital duty',
        body:
          'The city\'s private hospitals need bed lifts sized around a loaded trolley with an attendant and equipment, accurate levelling for transfers, and essential-supply backup. Many are in buildings that have grown floor by floor, so the lift has to work with the structure that exists rather than an ideal one.',
      },
      {
        heading: 'Coastal exposure',
        body:
          'The municipal area reaches the shore at Beypore and the beach quarter. Within a few kilometres of the sea, specify corrosion-resistant car and frame finishes, sealed landing door tracks and protected fixings, or the sills will show rust well before the equipment is worn.',
      },
    ],
    areas: [
      'Mavoor Road', 'Nadakkavu', 'Kottooli', 'Mankavu', 'Thondayad', 'Chevayur',
      'Beypore', 'Feroke', 'Ramanattukara', 'Vadakara', 'Koyilandy',
    ],
    demand: ['Retail and trading buildings', 'Private hospitals', 'Hotels', 'Home lifts', 'Apartments'],
    faqs: [
      {
        q: 'Can a lift be installed in a trading building with no off-street access?',
        a: 'Usually yes, but it changes the programme. Components are sized to come in through the stair or a light well, delivery is scheduled outside trading hours, and the installation is phased so the business below keeps operating. This should be agreed before the order, not discovered during installation.',
      },
      {
        q: 'Will the shop have to close during installation?',
        a: 'Normally not. Work is phased around trading hours with the shaft sealed and dust containment at each floor. The outage that matters is the stair, not the shop.',
      },
      {
        q: 'Do you supply hospital bed lifts in Kozhikode?',
        a: 'Yes. Bed lifts are sized around the longest loaded trolley in service plus an attendant, with clear door openings from 1100 mm, accurate re-levelling for transfers, and essential-supply backup with an automatic rescue device.',
      },
      {
        q: 'Which areas do you cover from Ernakulam?',
        a: 'Kozhikode city, Beypore, Feroke, Ramanattukara, Vadakara and Koyilandy, along with the wider district. Surveys and service visits are scheduled from our Vyttila office.',
      },
      {
        q: 'Will you take over maintenance of a lift another company installed?',
        a: 'Yes, for any make. We inspect the lift first, document its condition and list anything needing correction, then quote the AMC from that.',
      },
    ],
    projects: [],
  },

  {
    slug: 'thrissur',
    name: 'Thrissur',
    aka: [],
    district: 'Thrissur',
    metaTitle: 'Elevator Company in Thrissur',
    metaDescription:
      'Elevators in Thrissur — home lifts, showroom and commercial passenger lifts, capsule lifts, modernization and AMC for all brands.',
    lede:
      'Lifts for Thrissur homes, showrooms and commercial buildings. The city has an unusual demand profile: alongside the usual residential and office work, its multi-floor jewellery and textile retail sector needs lifts that carry customers comfortably and look like part of the shop.',
    localContext:
      'Thrissur is the centre of Kerala\'s gold and textile retail trade, and the showrooms around the Round and Swaraj Round are multi-storey buildings where the lift is part of the customer experience. The district also has a large stock of substantial traditional and modern family homes, and a strong flow of remittance-funded construction in the surrounding towns.',
    engineering: [
      {
        heading: 'Retail lifts are a different brief',
        body:
          'A showroom lift carries customers, often several at a time, between sales floors. It needs to be visually in keeping with a high-value retail interior — glass or well-finished stone and steel rather than a utility car — and it needs the door timing and capacity to handle groups without feeling cramped. Capsule and glass lifts are common here for exactly this reason.',
      },
      {
        heading: 'Separate the goods movement',
        body:
          'Retail buildings that use the customer lift to move stock end up with a scratched car and a lift that is unavailable when customers need it. Where the building allows, a separate goods lift or dumbwaiter for stock transfer protects both.',
      },
      {
        heading: 'Traditional homes with courtyards',
        body:
          'Older Thrissur houses are frequently built around a central courtyard, which constrains where a shaft can go without destroying the thing that makes the house work. A compact external or stair-void shaft is usually the answer, placed so the courtyard and its light are untouched.',
      },
    ],
    areas: [
      'Swaraj Round', 'Punkunnam', 'Ayyanthole', 'Poothole', 'Kuriachira',
      'Ollur', 'Guruvayur', 'Chalakudy', 'Irinjalakuda', 'Kodungallur',
    ],
    demand: ['Jewellery and textile showrooms', 'Home lifts', 'Hospitals', 'Hotels', 'Commercial'],
    faqs: [
      {
        q: "What kind of lift suits a jewellery or textile showroom?",
        a:
          "One that looks like part of the retail interior and handles groups. Glass or well-finished stone and steel rather than a utility car, with capacity and door timing that let several customers travel together without feeling cramped. Capsule and glass lifts are common here for that reason.",
      },
      {
        q: "Should stock move in the same lift as customers?",
        a:
          "Ideally not. A customer lift used for stock ends up scratched and unavailable when customers need it. Where the building allows, a separate goods lift or dumbwaiter for stock transfer protects both.",
      },
      {
        q: "Can a lift go into a traditional house built around a courtyard?",
        a:
          "Yes, but the shaft placement decides whether the house still works afterwards. A compact external or stair-void shaft keeps the courtyard and its light intact, which is usually the whole point of the house.",
      },
      {
        q: "Do you cover Guruvayur and the surrounding towns?",
        a:
          "Yes. Thrissur city, Swaraj Round, Punkunnam, Ayyanthole, Poothole, Kuriachira, Ollur, Guruvayur, Chalakudy, Irinjalakuda and Kodungallur.",
      },
      {
        q: "Can you take over the AMC for an existing showroom lift?",
        a:
          "Yes, whatever the make. We inspect it, document condition and quote from there, which is useful where the original supplier has become slow or unreachable.",
      },
    ],
    projects: [],
  },

  {
    slug: 'kollam',
    name: 'Kollam',
    aka: ['Quilon'],
    district: 'Kollam',
    metaTitle: 'Elevator Company in Kollam',
    metaDescription:
      'Elevators in Kollam — home lifts, commercial and goods lifts, modernization and AMC for all elevator brands across the district.',
    lede:
      'Home lifts, passenger lifts and goods lifts across Kollam, with maintenance contracts for lifts of any make. The district combines a coastal and backwater town centre with a long-established cashew processing and trading sector.',
    localContext:
      'Kollam sits between the sea and Ashtamudi Lake, with a commercial core, a substantial cashew processing industry and a spread of residential development inland. The industrial and warehousing element gives goods lifts a larger share of demand here than in most Kerala districts.',
    engineering: [
      {
        heading: 'Water on two sides',
        body:
          'With the Arabian Sea on one side and Ashtamudi Lake on the other, much of Kollam experiences high humidity and salt exposure simultaneously, along with a high water table in low-lying areas. Pit waterproofing and corrosion-resistant specification both matter, and neither should be value-engineered out of a quotation.',
      },
      {
        heading: 'Goods lifts for processing and warehousing',
        body:
          'Processing and warehouse buildings need lifts specified around how they are loaded — a pallet truck wheeled across the sill, or a forklift driving fully into the car, demands a reinforced floor and heavy-duty sill that a standard goods lift does not have. This has to be stated before ordering.',
      },
      {
        heading: 'Dust and fibre in the machine space',
        body:
          'In processing environments, airborne dust and fibre find their way into controller cabinets and onto brake surfaces. Specify appropriate enclosure ratings and set maintenance intervals around the real environment rather than a generic schedule.',
      },
    ],
    areas: [
      'Chinnakada', 'Kadappakada', 'Ashtamudi', 'Kottiyam', 'Karunagappally',
      'Punalur', 'Paravur', 'Chavara',
    ],
    demand: ['Goods and industrial lifts', 'Home lifts', 'Commercial buildings', 'Hospitals'],
    faqs: [
      {
        q: "What capacity should a goods lift be?",
        a:
          "Take the heaviest single load including its pallet and any handling equipment that enters the car, then add margin for how loading actually happens. If a pallet truck or forklift crosses the sill, say so before ordering, because it needs a reinforced floor and heavy-duty sill that cannot be added later.",
      },
      {
        q: "Does the high water table affect the lift pit?",
        a:
          "Yes. In low-lying areas near the lake or the coast the pit needs proper tanking, drainage and a sump arrangement. Where a watertight deep pit is impractical, a reduced-pit arrangement avoids the problem entirely.",
      },
      {
        q: "We run a processing unit. Does dust affect the lift?",
        a:
          "Significantly. Airborne dust and fibre reach controller cabinets and brake surfaces, so enclosure ratings should suit the real environment and maintenance intervals should be set around it rather than a generic schedule.",
      },
      {
        q: "Which areas do you cover?",
        a:
          "Chinnakada, Kadappakada, Ashtamudi, Kottiyam, Karunagappally, Punalur, Paravur and Chavara, with surveys and service from our Ernakulam office.",
      },
      {
        q: "Do you maintain lifts from other manufacturers?",
        a:
          "Yes, all brands, including lifts installed by other suppliers.",
      },
    ],
    projects: [],
  },

  {
    slug: 'kannur',
    name: 'Kannur',
    aka: [],
    district: 'Kannur',
    metaTitle: 'Elevator Company in Kannur',
    metaDescription:
      'Elevators in Kannur — hotel and commercial lifts around the airport corridor, home lifts, heritage retrofits in Thalassery, and AMC for all brands.',
    lede:
      'Passenger lifts, hotel lifts and home elevators across Kannur district. Since the international airport opened at Mattannur, hospitality and commercial construction along that corridor has become a distinct part of the work here, alongside residential installations.',
    localContext:
      'Kannur district runs from the Mattannur airport corridor inland, through the old trading and weaving town of Thalassery, to the coast at Payyanur and Taliparamba. Hotel and serviced-accommodation development around the airport has grown steadily, the handloom and textile sector occupies substantial multi-floor premises, and Thalassery carries a stock of nineteenth and early twentieth century buildings now being converted.',
    engineering: [
      {
        heading: 'Hotel lifts carry luggage, not just people',
        body:
          'A guest lift that fits four people comfortably becomes unusable when two of them have suitcases. Hotel lifts need capacity and car depth sized for luggage, protective wall panels or removable blankets at the rear, and quiet door operation because bedrooms sit directly off the lift lobby. Service and housekeeping movement should be separated from guest traffic wherever the building allows it.',
      },
      {
        heading: 'Laterite walls will not take a shaft fixing on their own',
        body:
          'Much of the district is built in laterite block, which is widely available locally but far weaker in tension than concrete. Bracket fixings for guide rails cannot simply be bolted to a laterite wall — they need concrete inserts, a cast band at each bracket level, or an independent steel structure carrying the rail loads. Confirming this at survey prevents a fixing failure that only shows up under load.',
      },
      {
        heading: 'Heritage buildings in Thalassery',
        body:
          'Converting an older Thalassery building usually means a lift cannot be cut through the structure without losing what makes it worth converting. A free-standing shaft in a courtyard or rear service area, structurally independent of the historic fabric, is normally the workable answer, with the landing openings kept to the minimum the lift needs.',
      },
      {
        heading: 'Textile and handloom premises',
        body:
          'Weaving and finishing premises put airborne lint into the air, and lint finds its way into controller cabinets, onto brake surfaces and into door tracks. Specify appropriate enclosure ratings for the controller and set cleaning intervals around the real environment rather than a standard schedule.',
      },
    ],
    areas: [
      'Kannur town', 'Thalassery', 'Mattannur', 'Payyanur', 'Taliparamba', 'Kuthuparamba', 'Iritty',
    ],
    demand: ['Hotels and serviced accommodation', 'Commercial buildings', 'Home lifts', 'Hospitals'],
    faqs: [
      {
        q: 'What should a hotel lift in Kannur be specified for?',
        a: 'Capacity and car depth that work with luggage rather than passenger count alone, protective rear panelling, quiet doors because bedrooms open onto the lobby, and separate service movement where the building allows it.',
      },
      {
        q: 'Can a lift be fixed to laterite block walls?',
        a: 'Not directly. Laterite is weak in tension, so guide rail brackets need concrete inserts, a cast band at bracket levels, or an independent steel structure to carry the rail loads. This is settled at the site survey.',
      },
      {
        q: 'Can a lift go into an old building in Thalassery without damaging it?',
        a: 'Usually by building a structurally independent shaft in a courtyard or rear service area rather than cutting through the historic fabric, keeping landing openings to the minimum.',
      },
      {
        q: 'Do you cover Mattannur and the airport corridor?',
        a: 'Yes — Kannur town, Mattannur, Thalassery, Payyanur, Taliparamba, Kuthuparamba and Iritty, with surveys and service scheduled from our Ernakulam office.',
      },
      {
        q: 'Do you maintain lifts installed by other companies?',
        a: 'Yes, for all makes. We inspect and document the lift\'s condition first, then quote the maintenance contract from what we find.',
      },
    ],
    projects: [],
  },

  {
    slug: 'alappuzha',
    name: 'Alappuzha',
    aka: ['Alleppey'],
    district: 'Alappuzha',
    metaTitle: 'Elevator Company in Alappuzha',
    metaDescription:
      'Elevators in Alappuzha — lifts for resorts, hotels and homes in a high water table, high salt environment, plus AMC for all elevator brands.',
    lede:
      'Lifts for Alappuzha\'s resorts, hotels, hospitals and homes. This is the most demanding environment in Kerala for lift installation, and it is worth being direct about why: the water table is high, the ground is soft and the air is salt-laden year round.',
    localContext:
      'Built across a network of backwaters and canals and lying very low relative to sea level, Alappuzha supports a large hospitality sector alongside its residential and commercial buildings. Resort and hotel developments regularly need lifts in locations where a conventional deep pit is impractical.',
    engineering: [
      {
        heading: 'The pit is the whole problem',
        body:
          'With a water table often close to the surface, a conventional lift pit will take water unless it is properly tanked, drained and provided with a sump and pump. This is the single most important engineering decision on an Alappuzha installation. Where a deep pit simply cannot be made watertight, a reduced-pit lift arrangement avoids the issue entirely and is usually the better answer.',
      },
      {
        heading: 'Salt everywhere, permanently',
        body:
          'Continuous exposure to salt-laden humid air attacks painted steel, plain fixings and door track assemblies. Stainless specification for exposed components, sealed tracks and protected electrical enclosures are baseline here, not options.',
      },
      {
        heading: 'Hospitality duty and access',
        body:
          'Resort buildings need lifts that are quiet, well finished and able to carry luggage as well as guests. Many sites are reachable only by narrow roads or across water, so delivery and installation access has to be planned at survey rather than assumed.',
      },
    ],
    areas: [
      'Alappuzha town', 'Cherthala', 'Kayamkulam', 'Mavelikkara', 'Haripad', 'Ambalappuzha',
    ],
    demand: ['Resorts and hotels', 'Hospitals', 'Home lifts', 'Commercial'],
    faqs: [
      {
        q: "The water table here is high. Can a lift pit be built at all?",
        a:
          "It can, with proper tanking, drainage and a sump and pump. But where a deep pit cannot realistically be kept watertight, a reduced-pit lift arrangement is usually the better engineering answer than fighting the groundwater.",
      },
      {
        q: "What does continuous salt exposure mean for the specification?",
        a:
          "Stainless for exposed car and frame components, sealed landing door tracks and protected electrical enclosures are baseline rather than optional here. Painted mild steel and plain fixings will not last.",
      },
      {
        q: "Our resort is only reachable by a narrow road or by water. Is that a problem?",
        a:
          "It is a planning problem rather than a blocker. Delivery and installation access has to be worked out at survey, covering component sizes, transport method and lifting arrangements, rather than assumed.",
      },
      {
        q: "What should a resort lift be specified for?",
        a:
          "Quiet operation, a finish that suits the interior, and capacity that works with luggage as well as guests. Bedrooms often open directly onto the lift lobby, so door and drive noise matter more than in a commercial building.",
      },
      {
        q: "Do you cover Cherthala and Kayamkulam?",
        a:
          "Yes. Alappuzha town, Cherthala, Kayamkulam, Mavelikkara, Haripad and Ambalappuzha.",
      },
    ],
    projects: [],
  },

  {
    slug: 'palakkad',
    name: 'Palakkad',
    aka: [],
    district: 'Palakkad',
    metaTitle: 'Elevator Company in Palakkad',
    metaDescription:
      'Elevators in Palakkad — industrial goods lifts, passenger and home lifts for an inland, hot and dry district, with AMC for all brands.',
    lede:
      'Passenger lifts, goods lifts and home lifts across Palakkad. This is the one major Kerala market that is genuinely inland, and the specification priorities are different from the coast in ways that are worth stating plainly.',
    localContext:
      'Palakkad sits in the gap in the Western Ghats, with an industrial belt, extensive agricultural trade and a growing residential and commercial sector around the town. It is drier and markedly hotter than coastal Kerala for much of the year.',
    engineering: [
      {
        heading: 'Heat, not salt, is the enemy here',
        body:
          'Away from the coast, salt corrosion stops being the governing concern and ambient temperature takes over. Machine spaces and controller cabinets need genuine ventilation, and hydraulic installations need attention to oil temperature — hot oil thins, performance drifts and thermal protection trips. An oil cooler is a reasonable specification here where it would be unnecessary elsewhere in Kerala.',
      },
      {
        heading: 'Industrial goods handling',
        body:
          'The industrial belt generates demand for goods lifts specified around real loading: reinforced car floors and heavy-duty sills where pallet trucks or forklifts cross the threshold, and door types matched to the duty cycle rather than the budget.',
      },
      {
        heading: 'Dust in the dry season',
        body:
          'Dry-season dust is a real factor for controller cabinets, brake surfaces and door tracks in industrial and semi-rural locations. Enclosure ratings and cleaning intervals should reflect it.',
      },
    ],
    areas: [
      'Palakkad town', 'Ottapalam', 'Shoranur', 'Chittur', 'Mannarkkad', 'Pattambi',
    ],
    demand: ['Industrial goods lifts', 'Commercial buildings', 'Home lifts', 'Hospitals'],
    faqs: [
      {
        q: "Is the specification different inland compared with coastal Kerala?",
        a:
          "Yes, and it saves money. Away from the coast salt corrosion stops governing, so the coastal protection package is largely unnecessary. Ambient heat takes over instead, and machine spaces and controller cabinets need genuine ventilation.",
      },
      {
        q: "We are considering a hydraulic lift. Does the heat matter?",
        a:
          "It matters here more than anywhere else in Kerala. Hot hydraulic oil thins, performance drifts and thermal protection trips. Ventilate the power pack space properly, and on higher-duty installations specify an oil cooler, which is reasonable here and unnecessary on the coast.",
      },
      {
        q: "What do industrial goods lifts need?",
        a:
          "Specification around real loading. A reinforced car floor and heavy-duty sill where pallet trucks or forklifts cross the threshold, and a door type matched to the duty cycle rather than to the budget.",
      },
      {
        q: "Does dry-season dust cause problems?",
        a:
          "Yes, for controller cabinets, brake surfaces and door tracks in industrial and semi-rural locations. Enclosure ratings and cleaning intervals should reflect it.",
      },
      {
        q: "Which towns do you cover?",
        a:
          "Palakkad town, Ottapalam, Shoranur, Chittur, Mannarkkad and Pattambi, with visits scheduled from our Ernakulam office.",
      },
    ],
    projects: [],
  },

  {
    slug: 'kottayam',
    name: 'Kottayam',
    aka: [],
    district: 'Kottayam',
    metaTitle: 'Elevator Company in Kottayam',
    metaDescription:
      'Elevators in Kottayam — hospital and institutional lifts, home lifts for hillside plots, modernization and AMC for all elevator brands.',
    lede:
      'Lifts for Kottayam\'s hospitals, educational institutions, commercial buildings and homes. The district has an unusually high concentration of medical and educational buildings, which shifts demand towards bed lifts and institutional passenger lifts.',
    localContext:
      'Kottayam is a long-established centre for healthcare, education and publishing, set in rubber-growing country with undulating terrain. Residential demand comes substantially from plantation-sector families, often on sloping plots where the house is built across split levels.',
    engineering: [
      {
        heading: 'Bed lifts for the medical sector',
        body:
          'The concentration of hospitals and medical institutions makes stretcher-capable lifts a core requirement: car depth sized to a loaded bed with an attendant, clear door openings from 1100 mm, accurate levelling for trolley transfer, and essential-supply backup with an automatic rescue device.',
      },
      {
        heading: 'Sloping sites and split levels',
        body:
          'Houses on hillside plots frequently have entrances at two different levels and half landings between floors. The stop arrangement needs to be worked out from a measured survey, because the floor levels a lift must serve often do not match the stair landings.',
      },
      {
        heading: 'Institutional traffic patterns',
        body:
          'Colleges and institutional buildings generate sharp peaks between classes rather than steady flow. Sizing for average use produces queues at exactly the moments the building is judged on; group control and a realistic peak calculation matter more than the headline capacity.',
      },
    ],
    areas: [
      'Kottayam town', 'Changanassery', 'Pala', 'Ettumanoor', 'Vaikom', 'Kanjirappally',
    ],
    demand: ['Hospitals', 'Educational institutions', 'Home lifts', 'Commercial'],
    faqs: [
      {
        q: "Do you supply bed lifts for hospitals in Kottayam?",
        a:
          "Yes. The car depth is set by the longest loaded bed plus the person steering it and an attendant with equipment, with clear door openings from 1100 mm and accurate re-levelling so trolley transfer is smooth.",
      },
      {
        q: "Our campus building is busy only between classes. How should it be sized?",
        a:
          "On the peak, not the average. Institutional buildings surge sharply between sessions, so sizing on average use produces queues at exactly the moments the building is judged on. Group control helps where lifts share a lobby.",
      },
      {
        q: "Our house is on a hillside with two entrance levels. Can a lift work?",
        a:
          "Usually, but the stop arrangement has to come from a measured survey. On sloping plots the levels needing service frequently do not match the stair landings.",
      },
      {
        q: "Can an older institutional lift be modernized rather than replaced?",
        a:
          "Often yes. Where rails, shaft and structure are sound, replacing the controller, drive and door equipment restores ride quality and levelling, cuts breakdowns and reduces consumption without the civil work a replacement needs.",
      },
      {
        q: "Which areas do you cover?",
        a:
          "Kottayam town, Changanassery, Pala, Ettumanoor, Vaikom and Kanjirappally.",
      },
    ],
    projects: [],
  },

  {
    slug: 'malappuram',
    name: 'Malappuram',
    aka: [],
    district: 'Malappuram',
    metaTitle: 'Elevator Company in Malappuram',
    metaDescription:
      'Elevators in Malappuram — lifts for the Kottakkal ayurveda and healthcare sector, college campuses, home lifts and AMC for all elevator brands.',
    lede:
      'Lifts for Malappuram\'s healthcare and education sectors alongside residential work. The district has an unusual concentration of ayurveda hospitals and treatment centres around Kottakkal, and one of the largest student populations in Kerala.',
    localContext:
      'Malappuram is Kerala\'s most populous district and spans two very different environments: the coastal belt at Tirur and Ponnani, and the inland, forested east around Nilambur. Kottakkal is a long-established centre for ayurvedic treatment drawing patients from across India and abroad, and the district carries a dense network of colleges and residential campuses.',
    engineering: [
      {
        heading: 'Treatment centres need patient-capable lifts, not passenger lifts',
        body:
          'Ayurveda hospitals and treatment centres move patients who are frequently elderly, post-treatment, oil-covered and unsteady. That argues for a lift with a seat, a handrail on at least one side, extended door dwell time, a low-mounted control panel reachable when seated, and above all a floor that is not slippery when wet with treatment oil. A polished stone car floor in that setting is a hazard.',
      },
      {
        heading: 'Residential campus traffic is peaky, not steady',
        body:
          'College hostels and academic blocks generate sharp surges between sessions and almost nothing in between. Sizing on average use produces queues at exactly the moments the building is judged on. A realistic peak calculation and group control where two or more lifts share a lobby matter far more here than headline capacity.',
      },
      {
        heading: 'One district, two climates',
        body:
          'The coastal belt at Tirur and Ponnani needs the full salt-exposure specification — corrosion-resistant finishes, sealed door tracks, protected fixings. Inland towards Nilambur that is largely unnecessary, and the governing concerns become machine-space ventilation and monsoon humidity instead. Specifying coastal protection for an inland site adds cost for nothing; omitting it on the coast is a false economy.',
      },
      {
        heading: 'Settle the shaft while the building is going up',
        body:
          'A large share of work here is new construction rather than retrofit. Agreeing shaft position, clear dimensions and pit depth at slab stage costs almost nothing and removes every compromise a retrofit forces. If the structure is still rising, this is the moment.',
      },
    ],
    areas: [
      'Manjeri', 'Perinthalmanna', 'Kottakkal', 'Tirur', 'Ponnani', 'Nilambur', 'Edappal',
    ],
    demand: ['Ayurveda and healthcare', 'Educational campuses', 'Home lifts', 'Commercial buildings'],
    faqs: [
      {
        q: 'What should a lift in an ayurveda treatment centre be specified for?',
        a: 'A non-slip car floor that stays safe when wet with treatment oil, a seat and handrail, extended door dwell time, and a control panel reachable from seated height. Patients are often elderly and unsteady after treatment, which makes these choices clinical rather than cosmetic.',
      },
      {
        q: 'How many lifts does a college or hostel block need?',
        a: 'It depends on the peak between sessions rather than the average. Sizing on average use produces queues exactly when the building is busiest. A peak traffic calculation at design stage settles it, and group control helps where two or more lifts share a lobby.',
      },
      {
        q: 'Does a lift in Nilambur need the same coastal specification as Tirur?',
        a: 'No. Tirur and Ponnani are coastal and need corrosion-resistant finishes and sealed door tracks. Inland towards Nilambur that is unnecessary cost, and ventilation and humidity control matter more instead.',
      },
      {
        q: 'We are still building. When should we decide on the lift?',
        a: 'Now, if the structure is still going up. Fixing the shaft position, clear dimensions and pit depth at slab stage is close to free and avoids every compromise a later retrofit forces.',
      },
      {
        q: 'Do you service lifts supplied by other manufacturers?',
        a: 'Yes, all makes. We inspect the lift, document its condition and quote the maintenance contract from what we find.',
      },
    ],
    projects: [],
  },
];

export const CITY_SLUGS = CITIES.map((c) => c.slug);

export function getCity(slug) {
  return CITIES.find((c) => c.slug === slug) ?? null;
}
