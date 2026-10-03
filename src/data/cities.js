/**
 * City landing pages for the main Kerala markets.
 *
 * House style, same as landers.js:
 *   - No em dashes. Short sentences.
 *   - Every entry must say something true of this city and false of the others.
 *     If a paragraph would survive a find and replace of the city name, cut it.
 *   - No branch offices, project counts, client names or engineer names. Capricorn
 *     works from the Ernakulam office. When the client supplies real projects and
 *     photos per city, put them in `projects` and show them on the page. That is
 *     what will make these pages hard to beat, and it is the one thing this file
 *     cannot invent.
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
      'Elevator company in Kochi. Home lifts, commercial elevators, modernization and maintenance for all brands, from our office in Vyttila, Ernakulam.',
    lede:
      'Our office is in Vyttila. Kochi is where we do most of our work: home lifts in the villa developments around Kakkanad and Aluva, passenger lifts in the apartment towers at Marine Drive and Edappally, and maintenance contracts across the commercial corridor.',
    localContext:
      'Kochi has the most mixed building stock in Kerala. High rise apartments on reclaimed ground near the backwaters. IT campus buildings around Infopark. Older three and four storey commercial blocks in the city centre with no lift at all. Gated villa developments spreading east to Kakkanad and north to Aluva. The retrofit market here is as big as the new build one.',
    engineering: [
      {
        heading: 'Low ground and high water',
        body:
          'Much of Kochi sits barely above sea level on filled or reclaimed land. The 2018 floods showed what that means for a lift pit. Pits in low lying areas need waterproofing, a drain or sump, and controller equipment mounted clear of any likely water level. On flood exposed sites, agree up front what the lift does when water is detected. Parking the car at an upper landing is better than losing the controller.',
      },
      {
        heading: 'Salt air from the backwaters',
        body:
          'Close to the backwaters and the sea the air carries salt most of the year. We specify hairline or matte stainless for exposed car and frame parts, sealed door tracks and corrosion resistant fixings. This is what decides whether the lift still looks right in year five.',
      },
      {
        heading: 'Retrofits in the old commercial core',
        body:
          'Plenty of buildings around the city centre were built three or four storeys with no shaft. Adding a lift usually means a self supporting shaft in a light well, a stair void or against the rear wall. The harder problem is often delivery, because many of those streets cannot take a lorry.',
      },
    ],
    areas: [
      'Kakkanad', 'Edappally', 'Vyttila', 'Palarivattom', 'Kaloor', 'Marine Drive',
      'Fort Kochi', 'Tripunithura', 'Aluva', 'Perumbavoor', 'Angamaly', 'Muvattupuzha',
    ],
    demand: ['Apartment towers', 'IT and office buildings', 'Hospitals', 'Hotels', 'Villa home lifts', 'Retail'],
    faqs: [
      {
        q: 'Do you have an office in Kochi?',
        a: 'Yes. Unit 03, 11th Floor, Jomer Symphony, Ponnurunni East, Vyttila. Kochi sites are the quickest for us to reach for surveys and service calls.',
      },
      {
        q: 'Our building is in a low lying area that flooded. What should the lift allow for?',
        a: 'A waterproofed and drained pit with a sump, controller equipment mounted clear of likely water levels, and an agreed response when water is detected. Parking the car at an upper landing protects the equipment far better than leaving it in a flooded pit.',
      },
      {
        q: 'Can a lift be added to an older building in the city centre?',
        a: 'Usually, with a self supporting shaft in a light well, stair void or against the rear wall. The bigger constraint is often delivery access, since many streets there cannot take a lorry. We check that at the survey.',
      },
      {
        q: 'Does being near the backwaters change the specification?',
        a: 'Yes. Salt air attacks painted steel and plain fixings, so we use hairline or matte stainless on exposed car and frame parts, sealed door tracks and corrosion resistant fixings.',
      },
      {
        q: 'Will you maintain a lift another company installed?',
        a: 'Yes, any make. We inspect it, document its condition and list anything needing correction before quoting.',
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
      'Elevators in Thiruvananthapuram. Home lifts, passenger and hospital lifts, modernization and maintenance for all brands across the capital.',
    lede:
      'We supply, install and maintain lifts across Thiruvananthapuram from our Ernakulam office. The capital has a different mix to the rest of Kerala: government and institutional buildings, the Technopark campuses, a large medical sector, and residential streets of big older houses.',
    localContext:
      'Thiruvananthapuram combines a dense institutional and government building stock with established residential areas of large individual houses at Kowdiar, Vazhuthacaud and Sasthamangalam, and newer apartments out towards Kazhakkoottam and Technopark. Institutional and healthcare work makes up a bigger share of demand here than anywhere else in Kerala.',
    engineering: [
      {
        heading: 'Hospital and institutional duty',
        body:
          'The concentration of hospitals here means bed lifts with real stretcher clearances, essential supply backup and accurate levelling for trolley transfer. These are sized around the loaded bed, not a passenger count. Getting the clear door width wrong cannot be corrected afterwards.',
      },
      {
        heading: 'Slopes and split levels',
        body:
          'The city is noticeably undulating and houses on sloping plots often have split levels and half landings. The lift may need to serve levels that do not line up with the stair landings. That has to come out of a measured survey, not a drawing.',
      },
      {
        heading: 'Retrofits into large older houses',
        body:
          'Many of the bigger houses in the older residential areas were built across three floors with no provision for a lift, and are now lived in by families with elderly parents. A glass or structural shaft in the stair void is usually the least disruptive route and avoids rebuilding through finished rooms.',
      },
    ],
    areas: [
      'Kowdiar', 'Vazhuthacaud', 'Sasthamangalam', 'Pattom', 'Kazhakkoottam',
      'Technopark', 'Vellayambalam', 'Peroorkada', 'Nedumangad', 'Neyyattinkara',
    ],
    demand: ['Hospitals and clinics', 'Government and institutional', 'IT offices', 'Apartments', 'Home lifts'],
    faqs: [
      {
        q: 'Do you supply hospital bed lifts here?',
        a: 'Yes. Bed lifts are sized around the longest loaded trolley in use with an attendant beside it, with clear door openings from 1100 mm, accurate re-levelling for transfers, and essential supply backup plus an automatic rescue device.',
      },
      {
        q: 'Our house is on a slope with split levels. Can a lift serve them?',
        a: 'Usually, but it has to be designed from a measured survey. On sloping plots the levels a lift needs to reach often do not match the stair landings, and that has to be settled before ordering.',
      },
      {
        q: 'Can a lift be retrofitted into a large older house at Kowdiar or Vazhuthacaud?',
        a: 'A glass or structural shaft in the stair void is normally the least disruptive option. It avoids rebuilding through finished rooms and keeps daylight in the stairwell.',
      },
      {
        q: 'What do office and IT buildings need here?',
        a: 'Passenger lifts sized on the morning arrival peak, not on floor count, with group control where two or more lifts share a lobby.',
      },
      {
        q: 'Do you cover Technopark and Kazhakkoottam?',
        a: 'Yes, along with Kowdiar, Vazhuthacaud, Sasthamangalam, Pattom, Peroorkada, Nedumangad and Neyyattinkara.',
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
      'Elevators in Kozhikode. Lifts for the city trade core and private hospitals, home lifts, modernization and maintenance for all elevator brands.',
    lede:
      'Passenger lifts, hospital lifts and home elevators across Kozhikode. A large share of our work here is lifts going into multi storey trading buildings and private hospitals, not new residential towers.',
    localContext:
      'The commercial heart of Kozhikode runs along Mavoor Road, the Beach Road area and the old bazaar quarters. Four and five storey trading buildings sit on tight plots with no setback and no service yard. The city also carries a dense private healthcare sector. Outside the core it spreads into established residential neighbourhoods and down the coast to Beypore and Feroke.',
    engineering: [
      {
        heading: 'Tight plots and no delivery frontage',
        body:
          'Buildings in the trading quarters often have no off street space at all. Car panels, rails and the machine have to come in through a shop front during restricted hours, sometimes at night, and go up by hand or through a light well. That shapes the component sizes we specify and the delivery sequence, and it has to be agreed before anything is ordered.',
      },
      {
        heading: 'Working above a trading business',
        body:
          'Putting a lift into a working building means the shop below cannot close for three weeks. We phase the work around trading hours, contain dust and noise at each floor, and seal the shaft so business continues. The sequencing matters more here than the equipment choice.',
      },
      {
        heading: 'Private hospital work',
        body:
          'The private hospitals here need bed lifts sized around a loaded trolley with an attendant and equipment, accurate levelling for transfers, and essential supply backup. Many are in buildings that grew floor by floor, so the lift has to work with the structure that exists.',
      },
      {
        heading: 'Coastal exposure',
        body:
          'The municipal area reaches the shore at Beypore and the beach quarter. Within a few kilometres of the sea we specify corrosion resistant car and frame finishes, sealed landing door tracks and protected fixings.',
      },
    ],
    areas: [
      'Mavoor Road', 'Nadakkavu', 'Kottooli', 'Mankavu', 'Thondayad', 'Chevayur',
      'Beypore', 'Feroke', 'Ramanattukara', 'Vadakara', 'Koyilandy',
    ],
    demand: ['Retail and trading buildings', 'Private hospitals', 'Hotels', 'Home lifts', 'Apartments'],
    faqs: [
      {
        q: 'Can a lift go into a trading building with no off street access?',
        a: 'Usually yes, but it changes the programme. Components are sized to come in through the stair or a light well, delivery is scheduled outside trading hours, and the work is phased so the business below keeps running. We agree all of that before the order.',
      },
      {
        q: 'Will the shop have to close during installation?',
        a: 'Normally not. We phase the work around trading hours, seal the shaft and contain dust at each floor. The stair is what goes out of use, not the shop.',
      },
      {
        q: 'Do you supply hospital bed lifts in Kozhikode?',
        a: 'Yes. Sized around the longest loaded trolley with an attendant, clear door openings from 1100 mm, accurate re-levelling, and essential supply backup with a rescue device.',
      },
      {
        q: 'Which areas do you cover?',
        a: 'Kozhikode city, Beypore, Feroke, Ramanattukara, Vadakara and Koyilandy, plus the wider district. Surveys and service visits run from our Vyttila office.',
      },
      {
        q: 'Will you take over maintenance of a lift another company installed?',
        a: 'Yes, any make. We inspect it first, document condition, then quote.',
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
      'Elevators in Thrissur. Showroom and capsule lifts for the jewellery trade, home lifts, commercial passenger lifts, modernization and maintenance.',
    lede:
      'Lifts for Thrissur homes, showrooms and commercial buildings. The city has a demand profile we do not see elsewhere, because its multi floor jewellery and textile showrooms need lifts that carry customers comfortably and look like part of the shop.',
    localContext:
      'Thrissur is the centre of the gold and textile retail trade in Kerala. The showrooms around the Round are multi storey buildings where the lift is part of how customers experience the shop. The district also has a large stock of traditional and modern family homes, and steady construction in the towns around it.',
    engineering: [
      {
        heading: 'A showroom lift is a different brief',
        body:
          'It carries customers, often several at once, between sales floors. It has to suit a high value retail interior, so glass or well finished stone and steel instead of a utility car. It needs the capacity and door timing to take a group without feeling cramped. That is why capsule and glass lifts are common here.',
      },
      {
        heading: 'Keep stock out of the customer lift',
        body:
          'Retail buildings that move stock in the customer lift end up with a scratched car and a lift that is busy when customers want it. Where the building allows, a separate goods lift or dumbwaiter for stock protects both.',
      },
      {
        heading: 'Houses built around a courtyard',
        body:
          'Older Thrissur houses are often built around a central courtyard, which limits where a shaft can go without ruining the thing that makes the house work. A compact external or stair void shaft is usually the answer, placed so the courtyard and its light are untouched.',
      },
    ],
    areas: [
      'Swaraj Round', 'Punkunnam', 'Ayyanthole', 'Poothole', 'Kuriachira',
      'Ollur', 'Guruvayur', 'Chalakudy', 'Irinjalakuda', 'Kodungallur',
    ],
    demand: ['Jewellery and textile showrooms', 'Home lifts', 'Hospitals', 'Hotels', 'Commercial'],
    faqs: [
      {
        q: 'What kind of lift suits a jewellery or textile showroom?',
        a: 'One that looks like part of the retail interior and handles groups. Glass or well finished stone and steel instead of a utility car, with capacity and door timing that let several customers travel together comfortably.',
      },
      {
        q: 'Should stock move in the same lift as customers?',
        a: 'Ideally not. A customer lift used for stock gets scratched and is busy when customers need it. Where the building allows, use a separate goods lift or dumbwaiter.',
      },
      {
        q: 'Can a lift go into a traditional house built around a courtyard?',
        a: 'Yes, but where the shaft goes decides whether the house still works afterwards. A compact external or stair void shaft keeps the courtyard and its light intact.',
      },
      {
        q: 'Do you cover Guruvayur and the towns around Thrissur?',
        a: 'Yes. Thrissur city, Swaraj Round, Punkunnam, Ayyanthole, Poothole, Kuriachira, Ollur, Guruvayur, Chalakudy, Irinjalakuda and Kodungallur.',
      },
      {
        q: 'Can you take over maintenance of an existing showroom lift?',
        a: 'Yes, whatever the make. We inspect it, document condition and quote from there.',
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
      'Elevators in Kollam. Goods lifts for processing and warehousing, home lifts, commercial lifts, modernization and maintenance for all brands.',
    lede:
      'Home lifts, passenger lifts and goods lifts across Kollam, with maintenance for lifts of any make. Goods lifts make up a bigger share of our work here than in most Kerala districts, because of the processing and warehousing sector.',
    localContext:
      'Kollam sits between the Arabian Sea and Ashtamudi Lake, with a commercial core, a long established cashew processing industry and residential development spreading inland. The industrial side is what makes the demand here different.',
    engineering: [
      {
        heading: 'Water on two sides',
        body:
          'With the sea on one side and Ashtamudi Lake on the other, much of Kollam gets high humidity and salt exposure at the same time, plus a high water table in low lying areas. Pit waterproofing and corrosion resistant specification both matter here, and neither should be cut from a quotation to make the number look better.',
      },
      {
        heading: 'Goods lifts for processing and warehousing',
        body:
          'These need specifying around how the lift is loaded. A pallet truck wheeled across the sill, or a forklift driving fully into the car, needs a reinforced floor and a heavy duty sill that a standard goods lift does not have. Say which it is before ordering.',
      },
      {
        heading: 'Dust and fibre in the machine space',
        body:
          'In processing buildings, airborne dust and fibre get into controller cabinets and onto brake surfaces. Enclosure ratings should suit the real environment and the maintenance interval should be set around it, not taken from a standard schedule.',
      },
    ],
    areas: [
      'Chinnakada', 'Kadappakada', 'Ashtamudi', 'Kottiyam', 'Karunagappally',
      'Punalur', 'Paravur', 'Chavara',
    ],
    demand: ['Goods and industrial lifts', 'Home lifts', 'Commercial buildings', 'Hospitals'],
    faqs: [
      {
        q: 'What capacity should a goods lift be?',
        a: 'Take the heaviest single load including its pallet and any handling equipment that enters the car, then add margin for how loading really happens. If a pallet truck or forklift crosses the sill, say so before ordering. That needs a reinforced floor and heavy duty sill, and it cannot be added later.',
      },
      {
        q: 'Does the high water table affect the lift pit?',
        a: 'Yes. In low lying areas near the lake or the coast the pit needs waterproofing, drainage and a sump. Where a watertight deep pit is impractical, a reduced pit arrangement avoids the problem.',
      },
      {
        q: 'We run a processing unit. Does dust affect the lift?',
        a: 'Significantly. Dust and fibre reach controller cabinets and brake surfaces, so the enclosure rating should suit the environment and maintenance should be more frequent than a standard schedule.',
      },
      {
        q: 'Which areas do you cover?',
        a: 'Chinnakada, Kadappakada, Ashtamudi, Kottiyam, Karunagappally, Punalur, Paravur and Chavara.',
      },
      {
        q: 'Do you maintain lifts from other manufacturers?',
        a: 'Yes, all brands, including lifts installed by other suppliers.',
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
      'Elevators in Kannur. Hotel and commercial lifts near the airport corridor, home lifts, heritage building retrofits in Thalassery, and maintenance.',
    lede:
      'Passenger lifts, hotel lifts and home elevators across Kannur district. Since the airport opened at Mattannur, hotel and commercial construction along that corridor has become a steady part of the work here.',
    localContext:
      'Kannur district runs from the Mattannur airport corridor inland, through the old trading and weaving town of Thalassery, to the coast at Payyanur and Taliparamba. Hotel and serviced accommodation development around the airport has grown. The handloom and textile sector occupies large multi floor premises, and Thalassery has a stock of nineteenth and early twentieth century buildings now being converted.',
    engineering: [
      {
        heading: 'Hotel lifts carry luggage',
        body:
          'A guest lift that takes four people comfortably stops working when two of them have suitcases. Size the capacity and car depth for luggage. Add protective wall panels or removable blankets at the rear. Specify quiet door operation, because bedrooms open straight onto the lift lobby. Separate housekeeping movement from guest traffic where the building allows.',
      },
      {
        heading: 'Laterite walls will not hold a rail bracket',
        body:
          'Much of the district is built in laterite block, which is cheap and local but far weaker in tension than concrete. Guide rail brackets cannot simply be bolted to it. They need concrete inserts, a cast band at each bracket level, or an independent steel structure to carry the rail loads. We confirm this at the survey, because a fixing that pulls out only shows up under load.',
      },
      {
        heading: 'Thalassery conversions',
        body:
          'Converting an older Thalassery building usually means a lift cannot be cut through the structure without losing what made it worth converting. A free standing shaft in a courtyard or rear service area, structurally independent of the old fabric, is normally the workable answer, with landing openings kept to the minimum.',
      },
      {
        heading: 'Textile and handloom premises',
        body:
          'Weaving and finishing put lint into the air, and lint gets into controller cabinets, onto brake surfaces and into door tracks. Specify the controller enclosure for it and clean more often than a standard schedule says.',
      },
    ],
    areas: [
      'Kannur town', 'Thalassery', 'Mattannur', 'Payyanur', 'Taliparamba', 'Kuthuparamba', 'Iritty',
    ],
    demand: ['Hotels and serviced accommodation', 'Commercial buildings', 'Home lifts', 'Hospitals'],
    faqs: [
      {
        q: 'What should a hotel lift be specified for?',
        a: 'Capacity and car depth that work with luggage, not just passenger count. Protective rear panelling. Quiet doors, because bedrooms open onto the lobby. Separate service movement where the building allows it.',
      },
      {
        q: 'Can a lift be fixed to laterite block walls?',
        a: 'Not directly. Laterite is weak in tension, so rail brackets need concrete inserts, a cast band at bracket levels, or an independent steel structure to carry the loads. We settle this at the survey.',
      },
      {
        q: 'Can a lift go into an old building in Thalassery without damaging it?',
        a: 'Usually by building a structurally independent shaft in a courtyard or rear service area instead of cutting through the old fabric, keeping landing openings to a minimum.',
      },
      {
        q: 'Do you cover Mattannur and the airport corridor?',
        a: 'Yes. Kannur town, Mattannur, Thalassery, Payyanur, Taliparamba, Kuthuparamba and Iritty.',
      },
      {
        q: 'Do you maintain lifts installed by other companies?',
        a: 'Yes, all makes. We inspect and document the condition first, then quote.',
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
      'Elevators in Alappuzha. Lifts for resorts, hotels and homes where the water table is high and salt exposure is constant, plus maintenance for all brands.',
    lede:
      'Lifts for resorts, hotels, hospitals and homes in Alappuzha. This is the hardest environment in Kerala to install a lift in, and it is worth being direct about why. The water table is high, the ground is soft and the air carries salt all year.',
    localContext:
      'Alappuzha is built across a network of backwaters and canals and lies very low relative to sea level. It carries a large hospitality sector alongside its residential and commercial buildings, and resort developments regularly need lifts where a conventional deep pit is not practical.',
    engineering: [
      {
        heading: 'The pit is the whole problem',
        body:
          'With the water table often close to the surface, a conventional pit will take water unless it is tanked, drained and fitted with a sump and pump. This is the most important decision on an Alappuzha installation. Where a deep pit cannot be kept watertight, a reduced pit arrangement avoids the issue completely and is usually the better answer.',
      },
      {
        heading: 'Salt, all the time',
        body:
          'Constant salt laden humid air attacks painted steel, plain fixings and door track assemblies. Stainless on exposed components, sealed tracks and protected electrical enclosures are the baseline here, not options.',
      },
      {
        heading: 'Resort access and duty',
        body:
          'Resort buildings need lifts that are quiet, well finished and able to take luggage as well as guests. Many sites are reachable only by narrow roads or across water, so we work out delivery and installation access at the survey instead of assuming it.',
      },
    ],
    areas: [
      'Alappuzha town', 'Cherthala', 'Kayamkulam', 'Mavelikkara', 'Haripad', 'Ambalappuzha',
    ],
    demand: ['Resorts and hotels', 'Hospitals', 'Home lifts', 'Commercial'],
    faqs: [
      {
        q: 'The water table here is high. Can a lift pit be built at all?',
        a: 'It can, with tanking, drainage and a sump and pump. But where a deep pit cannot realistically be kept watertight, a reduced pit arrangement is usually the better answer than fighting the groundwater.',
      },
      {
        q: 'What does constant salt exposure mean for the specification?',
        a: 'Stainless on exposed car and frame components, sealed landing door tracks and protected electrical enclosures. Painted mild steel and plain fixings will not last here.',
      },
      {
        q: 'Our resort is only reachable by a narrow road or by water. Is that a problem?',
        a: 'It is a planning problem, not a blocker. We work out component sizes, transport method and lifting arrangements at the survey.',
      },
      {
        q: 'What should a resort lift be specified for?',
        a: 'Quiet operation, a finish that suits the interior, and capacity that works with luggage as well as guests. Bedrooms often open onto the lift lobby, so door and drive noise matter more than in a commercial building.',
      },
      {
        q: 'Do you cover Cherthala and Kayamkulam?',
        a: 'Yes. Alappuzha town, Cherthala, Kayamkulam, Mavelikkara, Haripad and Ambalappuzha.',
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
      'Elevators in Palakkad. Industrial goods lifts, passenger and home lifts for an inland, hot and dry district, with maintenance for all elevator brands.',
    lede:
      'Passenger lifts, goods lifts and home lifts across Palakkad. This is the one major Kerala market that is genuinely inland, and the specification priorities are different from the coast in ways worth stating plainly.',
    localContext:
      'Palakkad sits in the gap in the Western Ghats, with an industrial belt, extensive agricultural trade and growing residential and commercial construction around the town. It is drier and noticeably hotter than coastal Kerala for much of the year.',
    engineering: [
      {
        heading: 'Heat, not salt',
        body:
          'Away from the coast, salt corrosion stops being the governing concern and ambient temperature takes over. Machine spaces and controller cabinets need real ventilation. Hydraulic installations need attention to oil temperature, because hot oil thins, performance drifts and the controller can trip on thermal protection. An oil cooler is a sensible specification here and unnecessary elsewhere in Kerala.',
      },
      {
        heading: 'Industrial goods handling',
        body:
          'The industrial belt generates goods lift demand, and those need specifying around real loading. Reinforced car floors and heavy duty sills where pallet trucks or forklifts cross the threshold, with the door type matched to the duty cycle.',
      },
      {
        heading: 'Dry season dust',
        body:
          'Dust in the dry months is a real factor for controller cabinets, brake surfaces and door tracks in industrial and semi rural locations. Enclosure ratings and cleaning intervals should allow for it.',
      },
    ],
    areas: [
      'Palakkad town', 'Ottapalam', 'Shoranur', 'Chittur', 'Mannarkkad', 'Pattambi',
    ],
    demand: ['Industrial goods lifts', 'Commercial buildings', 'Home lifts', 'Hospitals'],
    faqs: [
      {
        q: 'Is the specification different inland compared with coastal Kerala?',
        a: 'Yes, and it saves money. Away from the coast the corrosion protection package is largely unnecessary. Ambient heat takes over instead, so machine spaces and controller cabinets need proper ventilation.',
      },
      {
        q: 'We are considering a hydraulic lift. Does the heat matter?',
        a: 'More here than anywhere else in Kerala. Hot oil thins, performance drifts and thermal protection trips. Ventilate the power pack space properly, and on higher duty installations specify an oil cooler.',
      },
      {
        q: 'What do industrial goods lifts need?',
        a: 'Specification around real loading. A reinforced car floor and heavy duty sill where pallet trucks or forklifts cross the threshold, and a door type matched to the duty cycle.',
      },
      {
        q: 'Does dry season dust cause problems?',
        a: 'Yes, for controller cabinets, brake surfaces and door tracks. Enclosure ratings and cleaning intervals should allow for it.',
      },
      {
        q: 'Which towns do you cover?',
        a: 'Palakkad town, Ottapalam, Shoranur, Chittur, Mannarkkad and Pattambi.',
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
      'Elevators in Kottayam. Hospital and institutional lifts, home lifts for hillside plots, modernization and maintenance for all elevator brands.',
    lede:
      'Lifts for hospitals, colleges, commercial buildings and homes across Kottayam. The district has an unusually high concentration of medical and educational buildings, which pushes demand towards bed lifts and institutional passenger lifts.',
    localContext:
      'Kottayam is a long established centre for healthcare, education and publishing, set in rubber growing country with undulating terrain. Residential demand comes largely from plantation sector families, often on sloping plots where the house is built across split levels.',
    engineering: [
      {
        heading: 'Bed lifts for the medical sector',
        body:
          'Stretcher capable lifts are core work here. Car depth sized to a loaded bed with an attendant, clear door openings from 1100 mm, accurate levelling for trolley transfer, and essential supply backup with a rescue device.',
      },
      {
        heading: 'Institutional traffic is peaky',
        body:
          'Colleges generate sharp surges between classes and almost nothing between them. Sizing for average use produces queues at exactly the moments the building gets judged on. A realistic peak calculation and group control matter more here than headline capacity.',
      },
      {
        heading: 'Hillside plots',
        body:
          'Houses on sloping plots often have entrances at two different levels and half landings between floors. The stop arrangement has to come from a measured survey, because the levels a lift must serve frequently do not match the stair landings.',
      },
    ],
    areas: [
      'Kottayam town', 'Changanassery', 'Pala', 'Ettumanoor', 'Vaikom', 'Kanjirappally',
    ],
    demand: ['Hospitals', 'Educational institutions', 'Home lifts', 'Commercial'],
    faqs: [
      {
        q: 'Do you supply bed lifts for hospitals in Kottayam?',
        a: 'Yes. Car depth is set by the longest loaded bed plus the person steering it and an attendant with equipment, with clear door openings from 1100 mm and accurate re-levelling.',
      },
      {
        q: 'Our campus building is only busy between classes. How should it be sized?',
        a: 'On the peak, not the average. Sizing for average use produces queues exactly when the building is busiest. Group control helps where lifts share a lobby.',
      },
      {
        q: 'Our house is on a hillside with two entrance levels. Can a lift work?',
        a: 'Usually, but the stop arrangement has to come from a measured survey, since the levels needing service often do not match the stair landings.',
      },
      {
        q: 'Can an older institutional lift be modernized instead of replaced?',
        a: 'Often. Where rails, shaft and structure are sound, replacing the controller, drive and door equipment restores ride quality and levelling and cuts breakdowns, without the civil work a replacement needs.',
      },
      {
        q: 'Which areas do you cover?',
        a: 'Kottayam town, Changanassery, Pala, Ettumanoor, Vaikom and Kanjirappally.',
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
      'Elevators in Malappuram. Lifts for the Kottakkal treatment sector, college campuses, home lifts, and maintenance for all elevator brands.',
    lede:
      'Lifts for the healthcare and education sectors in Malappuram, alongside residential work. The district has an unusual concentration of ayurveda hospitals and treatment centres around Kottakkal, and one of the largest student populations in Kerala.',
    localContext:
      'Malappuram is the most populous district in Kerala and spans two very different environments. The coastal belt at Tirur and Ponnani, and the inland, forested east around Nilambur. Kottakkal is a long established centre for ayurvedic treatment drawing patients from across India and abroad, and the district has a dense network of colleges and residential campuses.',
    engineering: [
      {
        heading: 'Treatment centres need patient capable lifts',
        body:
          'Ayurveda hospitals move patients who are often elderly, post treatment, covered in oil and unsteady. That calls for a seat, a handrail on at least one side, extended door dwell time, a low mounted control panel reachable when seated, and above all a floor that is not slippery when wet with treatment oil. Polished stone in that setting is a hazard.',
      },
      {
        heading: 'Campus traffic is peaky',
        body:
          'Hostels and academic blocks surge between sessions and sit idle in between. Sizing on average use produces queues at the worst possible moment. A realistic peak calculation, and group control where two or more lifts share a lobby, matter more than headline capacity.',
      },
      {
        heading: 'One district, two climates',
        body:
          'Tirur and Ponnani on the coast need the full salt exposure specification. Inland towards Nilambur that is largely unnecessary, and ventilation and monsoon humidity become the governing concerns instead. Specifying coastal protection for an inland site adds cost for nothing. Leaving it off a coastal site is a false economy.',
      },
      {
        heading: 'Settle the shaft while the building goes up',
        body:
          'A large share of work here is new construction. Agreeing shaft position, clear dimensions and pit depth at slab stage costs almost nothing and removes every compromise a retrofit forces.',
      },
    ],
    areas: [
      'Manjeri', 'Perinthalmanna', 'Kottakkal', 'Tirur', 'Ponnani', 'Nilambur', 'Edappal',
    ],
    demand: ['Ayurveda and healthcare', 'Educational campuses', 'Home lifts', 'Commercial buildings'],
    faqs: [
      {
        q: 'What should a lift in an ayurveda treatment centre be specified for?',
        a: 'A non slip car floor that stays safe when wet with treatment oil, a seat and handrail, extended door dwell time, and a control panel reachable from seated height. Patients are often elderly and unsteady after treatment.',
      },
      {
        q: 'How many lifts does a college or hostel block need?',
        a: 'It follows from the peak between sessions, not the average. Sizing on average use produces queues exactly when the building is busiest. Group control helps where lifts share a lobby.',
      },
      {
        q: 'Does a lift in Nilambur need the same specification as one in Tirur?',
        a: 'No. Tirur and Ponnani are coastal and need corrosion resistant finishes and sealed door tracks. Inland towards Nilambur that is unnecessary cost, and ventilation and humidity control matter more.',
      },
      {
        q: 'We are still building. When should we decide on the lift?',
        a: 'Now, if the structure is still going up. Fixing shaft position, clear dimensions and pit depth at slab stage is close to free and avoids the compromises a later retrofit forces.',
      },
      {
        q: 'Do you service lifts supplied by other manufacturers?',
        a: 'Yes, all makes. We inspect the lift, document its condition and quote from what we find.',
      },
    ],
    projects: [],
  },
];

export const CITY_SLUGS = CITIES.map((c) => c.slug);

export function getCity(slug) {
  return CITIES.find((c) => c.slug === slug) ?? null;
}
