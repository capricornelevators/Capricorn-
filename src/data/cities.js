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
    intro:
      'Kochi has the most mixed building stock in Kerala. High rise apartments on reclaimed ground near the backwaters. IT campus buildings around Infopark. Older three and four storey commercial blocks in the city centre with no lift at all. Gated villa developments spreading east to Kakkanad and north to Aluva. The retrofit market here is as big as the new build one.',
    sections: [
      {
        heading: "What you get for a flood-prone site",
        body:
          "If your building is on low ground near the backwaters, the pit is what you should ask about. We waterproof and drain it, fit a sump, and keep the controller above any likely water level. We can also set the lift to park at an upper landing if water is detected. A flooded pit on an unprotected lift usually means a new controller, which is the expensive part.",
      },
      {
        heading: "Finishes that survive the salt air",
        body:
          "Near the water, plain painted steel starts showing rust at the door sills within a few years. We quote hairline or matte stainless on the exposed car and frame parts, sealed door tracks and corrosion resistant fixings as standard. If you are comparing quotes from anyone, ask what finish is included. It is the main reason two prices differ.",
      },
      {
        heading: "Adding a lift to an older building",
        body:
          "Plenty of three and four storey buildings around the city centre were built with no shaft. You can still have a lift. We build a self supporting shaft in a light well, the stair void or against the rear wall, so there is no need to open up the structure. We handle delivery into narrow city centre streets as part of the job.",
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
    intro:
      'Thiruvananthapuram combines a dense institutional and government building stock with established residential areas of large individual houses at Kowdiar, Vazhuthacaud and Sasthamangalam, and newer apartments out towards Kazhakkoottam and Technopark. Institutional and healthcare work makes up a bigger share of demand here than anywhere else in Kerala.',
    sections: [
      {
        heading: "Bed lifts for hospitals and clinics",
        body:
          "We size a bed lift around your longest loaded trolley with an attendant beside it, not around a passenger figure. That gives you a car a bed actually fits in and a clear door opening it passes through while being steered. We put it on your essential supply with a rescue device, so a power cut does not strand a patient between floors.",
      },
      {
        heading: "Houses on sloping plots",
        body:
          "Most of the city is built on slopes, so split levels and half landings are normal here. A lift can still serve them. We measure the real floor levels at the survey and set the stops to match, so you are not told halfway through that one level cannot be reached.",
      },
      {
        heading: "A lift in a large older house",
        body:
          "If you have a three storey house at Kowdiar, Vazhuthacaud or Sasthamangalam and elderly parents who cannot manage the stairs, you do not need to rebuild. A glass or structural shaft goes into the stair void, keeps the daylight, and leaves the finished rooms alone.",
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
    intro:
      'The commercial heart of Kozhikode runs along Mavoor Road, the Beach Road area and the old bazaar quarters. Four and five storey trading buildings sit on tight plots with no setback and no service yard. The city also carries a dense private healthcare sector. Outside the core it spreads into established residential neighbourhoods and down the coast to Beypore and Feroke.',
    sections: [
      {
        heading: "Your shop stays open during installation",
        body:
          "Most of our city centre work here is lifts going into buildings with a business trading underneath. You do not have to close. We phase the work around your trading hours, seal the shaft and contain dust at each floor, and bring material in outside business hours. The stair goes out of use, not the shop.",
      },
      {
        heading: "Lifts for buildings with no off street access",
        body:
          "Tight plots with no setback and no service yard are normal in the trading quarters. That does not rule out a lift. We size the components to come up through the stair or a light well and plan the delivery around the street, and we confirm all of it at the survey before you commit.",
      },
      {
        heading: "Hospital and clinic lifts",
        body:
          "For the private hospitals here we supply bed lifts sized to a loaded trolley with an attendant, with accurate levelling so trolley transfers are smooth, and backup supply so a power cut does not strand anyone. We work with buildings that have grown floor by floor rather than requiring an ideal shaft.",
      },
      {
        heading: "Coastal finishes",
        body:
          "Within a few kilometres of the sea at Beypore or the beach quarter, ask for corrosion resistant car and frame finishes and sealed door tracks. We include them. They are what decides how the lift looks in five years.",
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
    intro:
      'Thrissur is the centre of the gold and textile retail trade in Kerala. The showrooms around the Round are multi storey buildings where the lift is part of how customers experience the shop. The district also has a large stock of traditional and modern family homes, and steady construction in the towns around it.',
    sections: [
      {
        heading: "Showroom lifts that suit the shop",
        body:
          "A jewellery or textile showroom lift is part of what customers see, so a utility car is the wrong product. We supply glass and finished stone or steel cars with the capacity and door timing to take a group of customers together without anyone feeling crowded. Capsule and glass lifts are the usual choice here.",
      },
      {
        heading: "Keep stock out of the customer lift",
        body:
          "If staff move stock in the customer lift it gets scratched and it is busy when customers want it. Where the building allows, we quote a separate goods lift or dumbwaiter for stock. It costs less than refinishing a damaged showroom car.",
      },
      {
        heading: "Houses built around a courtyard",
        body:
          "If your house is built around a central courtyard, the courtyard is usually the thing worth protecting. We place a compact shaft externally or in the stair void so the courtyard and its light stay exactly as they are.",
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
    intro:
      'Kollam sits between the Arabian Sea and Ashtamudi Lake, with a commercial core, a long established cashew processing industry and residential development spreading inland. The industrial side is what makes the demand here different.',
    sections: [
      {
        heading: "Goods lifts specified for how you load",
        body:
          "Tell us whether goods go in by hand, on a pallet truck, or on a forklift that drives into the car. Forklift loading needs a reinforced floor and heavy duty sill, and it has to be in the order. If it is added to the brief later the lift has to be changed, so this one question saves the most money on a goods lift.",
      },
      {
        heading: "Protecting the pit near the water",
        body:
          "Close to the lake or the coast the water table is high and a standard pit will take water. We tank and drain it and fit a sump. Where a deep watertight pit is not realistic on your site, we quote a reduced pit arrangement instead, so the problem does not arise.",
      },
      {
        heading: "Maintenance in a processing plant",
        body:
          "In a cashew or processing building, dust and fibre reach the controller and the brake. That means the lift needs servicing more often than a lift in an office, and we set the contract interval to match. Budget for it rather than being surprised by breakdown calls.",
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
    intro:
      'Kannur district runs from the Mattannur airport corridor inland, through the old trading and weaving town of Thalassery, to the coast at Payyanur and Taliparamba. Hotel and serviced accommodation development around the airport has grown. The handloom and textile sector occupies large multi floor premises, and Thalassery has a stock of nineteenth and early twentieth century buildings now being converted.',
    sections: [
      {
        heading: "Hotel lifts that work with luggage",
        body:
          "A lift rated for four people stops working when two of them have suitcases. For hotels and serviced apartments we size the car for guests plus luggage, panel the rear so trolleys do not mark it, and specify quiet doors because bedrooms open onto the lobby. Where the building allows, we keep housekeeping off the guest lift.",
      },
      {
        heading: "Converting an older Thalassery building",
        body:
          "If you are converting a heritage building, a lift does not have to be cut through the structure. We build a free standing shaft in a courtyard or rear service area that carries its own loads, with the openings at each landing kept to the minimum. The building keeps its character and you get the lift.",
      },
      {
        heading: "Home lifts for a house built in stages",
        body:
          "Many houses here were extended upward over several years, so floor heights vary and there is no continuous vertical void. We measure what is actually there at the survey and design around it, so the quotation you get is for your house rather than a standard drawing.",
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
        q: 'Do you quote for hotels and serviced apartments?',
        a: 'Yes. Tell us the number of floors, how many rooms the lift serves and whether housekeeping will use it too, and we will size it from that.',
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
    intro:
      'Alappuzha is built across a network of backwaters and canals and lies very low relative to sea level. It carries a large hospitality sector alongside its residential and commercial buildings, and resort developments regularly need lifts where a conventional deep pit is not practical.',
    sections: [
      {
        heading: "A lift where the water table is high",
        body:
          "Alappuzha is the hardest place in Kerala to put in a conventional pit, and you should ask any supplier how they will handle it. We tank and drain the pit and fit a sump and pump. Where that cannot be made reliable on your site, we quote a reduced pit lift instead so there is no pit to flood.",
      },
      {
        heading: "Finishes that last in constant salt air",
        body:
          "Here the salt never lets up. Painted steel and plain fixings will not survive it. We include stainless on exposed parts, sealed door tracks and protected electrical enclosures. If a quotation looks cheaper, check whether this is in it.",
      },
      {
        heading: "Resorts reached by narrow road or by water",
        body:
          "If your property is only reachable down a narrow road or across the backwaters, tell us at enquiry. We size components and plan transport and lifting around the access you actually have, and confirm it at the survey. It affects the programme, not whether you can have a lift.",
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
    // Customer testimonial filmed in Alappuzha, on Capricorn's own YouTube channel.
    // title, uploadDate and duration were read from the live video, not guessed.
    // customer and quote are intentionally empty: nobody here has watched the
    // video and transcribed it, and inventing a customer name or a quote on a
    // testimonial would be fabricating a review. Fill these in from the client
    // and they will render under the player and in the caption.
    video: {
      id: 'Zqd8-gDeo4w',
      title: 'Capricorn Elevators customer testimonial, Alappuzha',
      description:
        'A Capricorn Elevators customer in Alappuzha talks about their home elevator installation.',
      uploadDate: '2025-12-17',
      duration: 'PT2M4S',
      customer: null,
      customerDetail: null,
      quote: null,
    },
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
    intro:
      'Palakkad sits in the gap in the Western Ghats, with an industrial belt, extensive agricultural trade and growing residential and commercial construction around the town. It is drier and noticeably hotter than coastal Kerala for much of the year.',
    sections: [
      {
        heading: "Inland, so you are not paying for coastal protection",
        body:
          "Away from the coast the corrosion package that coastal sites need is largely unnecessary. If you are being quoted full marine specification for a building in Palakkad town, ask why. We specify for the site you have, which here usually means spending the money on ventilation and heat handling instead.",
      },
      {
        heading: "Hydraulic lifts and the summer heat",
        body:
          "If you are considering hydraulic, the heat here matters. Hot oil thins, the ride changes and the controller can trip out in the afternoon. We ventilate the power pack space properly and fit an oil cooler where the duty justifies it, so the lift behaves the same in April as it does in July.",
      },
      {
        heading: "Goods lifts for the industrial belt",
        body:
          "Tell us the heaviest load, its pallet, and whether a pallet truck or forklift crosses the sill. That decides the floor construction and the sill, and it has to be in the order rather than added later.",
      },
      {
        heading: "Maintenance where it gets dusty",
        body:
          "In industrial and semi rural locations dry season dust reaches the controller and the door tracks. We set the service interval around that, so you get fewer breakdown calls instead of a contract that looks cheaper and costs more in downtime.",
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
    intro:
      'Kottayam is a long established centre for healthcare, education and publishing, set in rubber growing country with undulating terrain. Residential demand comes largely from plantation sector families, often on sloping plots where the house is built across split levels.',
    sections: [
      {
        heading: "Bed lifts for hospitals",
        body:
          "We size a hospital lift from your longest loaded bed plus the person steering it and an attendant with equipment. You get a car the bed fits and a door it passes through while turning, with accurate levelling so transfers are smooth and backup supply so a power cut does not strand a patient.",
      },
      {
        heading: "Sizing a lift for a college building",
        body:
          "Campus buildings are empty for an hour then everyone moves at once. A lift sized on average use will queue at exactly the moment people judge the building. We size on the peak between sessions, and where two lifts share a lobby we add group control so the nearer car is not the only one answering.",
      },
      {
        heading: "Homes on hillside plots",
        body:
          "Sloping plots here often mean two entrance levels and half landings. A lift can serve them, but the stops have to be set from measured floor levels. We do that at the survey so there are no surprises once the shaft is up.",
      },
      {
        heading: "Goods lifts for the printing trade",
        body:
          "A paper reel is heavy, concentrated on a small contact area, and usually crosses the sill on a trolley. If that is your load, say so, because it needs a reinforced floor and heavy duty sill. A lift quoted on total weight alone will not take it for long.",
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
    intro:
      'Malappuram is the most populous district in Kerala and spans two very different environments. The coastal belt at Tirur and Ponnani, and the inland, forested east around Nilambur. Kottakkal is a long established centre for ayurvedic treatment drawing patients from across India and abroad, and the district has a dense network of colleges and residential campuses.',
    sections: [
      {
        heading: "Lifts for treatment centres",
        body:
          "In an ayurveda hospital the floor matters more than anything else in the car, because patients come out of treatment covered in oil. We specify a non slip floor that stays safe when wet, with a seat, a handrail and extended door timing so elderly patients are not rushed.",
      },
      {
        heading: "Sizing a lift for a campus",
        body:
          "Hostel and academic blocks surge between sessions and sit idle in between. We size on that peak, not the average, and add group control where lifts share a lobby, so students are not queuing in the five minutes that matter.",
      },
      {
        heading: "Pay for the coast only if you are on it",
        body:
          "The district runs from the sea at Tirur and Ponnani to the hills at Nilambur. A building on the coast needs corrosion resistant finishes and sealed door tracks. A building inland does not, and should not be charged for them. We specify for where your building actually is.",
      },
      {
        heading: "Decide the shaft while you are still building",
        body:
          "If your structure is still going up, now is the cheapest moment to fix the shaft position, clear size and pit depth. Settling it at slab stage costs almost nothing and avoids every compromise that a retrofit forces on you later.",
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
