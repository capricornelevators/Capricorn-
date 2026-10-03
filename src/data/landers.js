/**
 * Product and service landing pages, one per search intent.
 *
 * House style for this file:
 *   - No em dashes. Use a full stop or a comma.
 *   - Short sentences. Say the thing, then stop.
 *   - Every claim must be checkable, or it does not go in.
 *   - No prices, no project counts, no client names until the client supplies them.
 *
 * Capacities come from the model data in src/views/Commercial.jsx and
 * src/views/Residential.jsx. Delivery and install timings come from the process
 * steps in src/views/Services.jsx.
 */

export const LANDERS = [
  {
    slug: 'home-lifts',
    title: 'Home Lifts and Home Elevators in Kerala',
    metaTitle: 'Home Lifts in Kerala',
    metaDescription:
      'Home lifts and residential elevators for Kerala homes. Compact shafts, machine-room-less drives, power failure rescue and maintenance for all brands.',
    h1: 'Home Lifts in Kerala',
    intent: 'home lift, home elevator, lift for home, residential lift',
    lede:
      'Capricorn supplies and installs home lifts across Kerala, for new houses and for houses that were built without a shaft. Most of our residential work is three to six passenger lifts serving two or three floors.',
    sections: [
      {
        heading: 'Sizing for a Kerala home',
        body:
          'A 3 to 6 passenger lift covers almost every house we survey. Under 6 passengers you can usually avoid a machine room, which keeps the installation inside the existing stair core. If the house is already built, a self supporting shaft can go in the stairwell void or against an outside wall. Glazing the shaft keeps light in the stairwell.',
      },
      {
        heading: 'Salt air and humidity',
        body:
          'Houses near the coast or the backwaters need corrosion resistant parts. We specify hairline or matte stainless for the car and frame, sealed landing door tracks, and powder coated guide brackets. Houses that stay locked for months while the family is abroad also need a controller cabinet that handles humidity.',
      },
      {
        heading: 'Power cuts',
        body:
          'Every lift we supply includes an automatic rescue device. On mains failure it runs the car to the nearest landing on battery, opens the doors and holds them open. Check that any quotation you compare includes this. It is often priced as an extra.',
      },
      {
        heading: 'What happens after you call',
        body:
          'We visit the site and measure the shaft, pit and headroom. You get a drawing for approval before anything is manufactured. Delivery is within three months of the order. Installation takes 10 to 20 days once the shaft is ready, then testing and commissioning before handover.',
      },
    ],
    specs: {
      caption: 'Typical residential configuration',
      rows: [
        ['Passenger capacity', '3 to 8 persons (272 to 630 kg)'],
        ['Floors served', 'G+1 to G+5'],
        ['Drive', 'Gearless machine-room-less traction, or hydraulic for low rise'],
        ['Travel speed', '0.3 to 1.0 m/s'],
        ['Shaft, indicative', 'From about 1200 x 1200 mm clear for a 3 passenger car'],
        ['Doors', 'Automatic sliding, swing, full vision or frameless glass'],
        ['Cabin finishes', 'Stainless steel, marble, granite, wood panel, glass'],
        ['Safety', 'Automatic rescue device, overload detection, door sensors'],
      ],
    },
    faqs: [
      {
        q: 'How much space does a home lift need?',
        a: 'A 3 passenger machine-room-less lift usually needs about 1200 x 1200 mm of clear shaft. Smaller is possible with a reduced capacity car. We confirm the usable shaft on site once wall thickness and the stair opening are measured.',
      },
      {
        q: 'Can a lift be added to a house that is already built?',
        a: 'Yes. The usual options are a self supporting shaft in the stairwell void, an external shaft against a side wall, or a corner taken from stacked rooms on each floor.',
      },
      {
        q: 'Does it need a machine room?',
        a: 'No, for the capacities most homes use. The gearless drive sits inside the shaft.',
      },
      {
        q: 'What happens during a power cut?',
        a: 'The automatic rescue device takes the car to the nearest landing on battery power and opens the doors.',
      },
      {
        q: 'How long does it take?',
        a: 'Delivery within three months of order. Installation takes 10 to 20 days once the shaft is ready.',
      },
    ],
    related: ['home-lift-price-kerala', 'glass-lifts', 'wheelchair-lifts', 'elevator-amc'],
  },

  {
    slug: 'home-lift-price-kerala',
    title: 'Home Lift Price in Kerala',
    metaTitle: 'Home Lift Price in Kerala',
    metaDescription:
      'What changes the price of a home lift in Kerala: floors, drive type, shaft work, doors, cabin finish, GST and maintenance. How to read a lift quotation.',
    h1: 'Home Lift Price in Kerala',
    intent: 'home lift price in kerala, home elevator cost, lift price kerala',
    lede:
      'Published price ranges for home lifts in Kerala run from about 10 lakh to 50 lakh, which is too wide to plan with. This page explains what moves the number, so you can read any quotation and see what you are paying for.',
    priceNote:
      'We quote after a site visit, not over the phone. The shaft, drive and finish change the figure too much for a phone estimate to be useful.',
    sections: [
      {
        heading: 'Seven things that change the price',
        body:
          'Floors served. Each stop adds rail, wiring, a landing door and a door operator. Drive type. Gearless traction costs more to buy than hydraulic and less to run. Shaft. An existing masonry shaft is cheapest, a fabricated steel or glass shaft is a separate line item. Doors. Swing is cheapest, automatic sliding is mid range, frameless glass is the top. Cabin finish. Stainless is the baseline, stone and wood panelling add. Capacity. Going from 3 to 6 passengers changes the machine, the rails and often the shaft. Site conditions. Pit depth, headroom, three phase supply and crane access for delivery.',
      },
      {
        heading: 'What a quotation should name',
        body:
          'Ask for the drive and its manufacturer, the controller, capacity in persons and kilograms, door type and clear opening, the automatic rescue device, warranty period, what the first year of maintenance covers, and whether civil work, shaft fabrication, electrical supply to the controller and GST are in or out. Most of the gap between two very different quotations sits in those exclusions.',
      },
      {
        heading: 'Ten year cost, not purchase price',
        body:
          'Over ten years the maintenance contract, the electricity the drive uses and the availability of spares matter more than a few percent at purchase. A lift whose controller board cannot be sourced in five years is the expensive one.',
      },
    ],
    faqs: [
      {
        q: 'Why will nobody quote a price on the phone?',
        a: 'Because the shaft is the variable. Until someone has measured the stair core, pit depth and headroom, any figure will change.',
      },
      {
        q: 'Is hydraulic cheaper than traction?',
        a: 'Usually cheaper to buy for two or three stops and more expensive to run, because there is no counterweight. For G+2 and above, gearless traction is normally the better ten year cost.',
      },
      {
        q: 'Does the price include civil work?',
        a: 'Check each quotation. Shaft construction, the pit, electrical supply to the controller and scaffolding are commonly excluded.',
      },
      {
        q: 'Is GST included?',
        a: 'Ask. It accounts for a visible part of the difference between two quotations.',
      },
      {
        q: 'What does maintenance add per year?',
        a: 'Budget for it from year one. We offer a Standard package with parts billed separately and a Comprehensive package that includes parts within an agreed scope.',
      },
    ],
    related: ['home-lifts', 'elevator-amc', 'hydraulic-lifts'],
  },

  {
    slug: 'passenger-lifts',
    title: 'Passenger Lifts and Commercial Elevators in Kerala',
    metaTitle: 'Passenger Lifts in Kerala',
    metaDescription:
      'Passenger elevators for offices, hotels, apartments and retail buildings in Kerala. 4 to 26 passenger capacities, gearless drives, maintenance for all brands.',
    h1: 'Passenger Lifts in Kerala',
    intent: 'passenger lift, passenger elevator, commercial elevator, building lift',
    lede:
      'Passenger lifts for apartment blocks, offices, hotels and retail buildings. Our commercial range runs from 4 to 26 passengers, with simplex, duplex and group control.',
    sections: [
      {
        heading: 'Size on traffic, not floor count',
        body:
          'A twelve floor apartment block with two flats per floor and an eight floor office with forty desks per floor need different lifts. What governs is how many people need to move in the busiest five minutes. For apartments that is the evening. For offices it is the morning arrival.',
      },
      {
        heading: 'Group control',
        body:
          'Where two or more lifts serve one lobby, a group controller sends the car that will answer soonest instead of the nearest one. On a busy building that decides whether people complain. It costs far less to specify at order stage than to add later.',
      },
      {
        heading: 'What the building has to provide',
        body:
          'A plumb shaft within tolerance, the specified pit depth and headroom, three phase supply terminated at the controller position, lighting and a socket in the pit and at the machine, and a clear route to deliver the car and rails. Delays on commercial sites are almost always shaft readiness, not equipment.',
      },
    ],
    specs: {
      caption: 'Commercial passenger range',
      rows: [
        ['Passenger capacity', '4, 6, 8, 10, 15, 18, 20, 26 persons'],
        ['Drive', 'Gearless traction, with or without machine room'],
        ['Travel speed', '1.0 to 2.5 m/s depending on rise'],
        ['Control', 'Simplex, duplex or group'],
        ['Doors', 'Automatic centre or side opening, 800 to 1100 mm clear'],
        ['Cabin', 'Stainless steel, glass, stone or laminate'],
        ['Safety', 'Automatic rescue device, overload detection, door sensors'],
      ],
    },
    faqs: [
      {
        q: 'How many lifts does an apartment building need?',
        a: 'It follows from population and peak traffic, not floor count. As a guide, one lift starts to struggle past about eight floors with several flats per floor. A traffic calculation at design stage settles it.',
      },
      {
        q: 'Machine room or machine-room-less?',
        a: 'Machine-room-less suits most mid rise buildings and saves the headroom structure. A machine room still makes sense for high capacities and long rises.',
      },
      {
        q: 'What speed do we need?',
        a: 'Up to about six floors, 1.0 m/s is enough. Above that, speed should rise with the travel so journey time stays acceptable.',
      },
      {
        q: 'Do we need a firemans lift?',
        a: 'That depends on building height and occupancy under the applicable rules. Confirm it with your architect and the local authority at design stage.',
      },
    ],
    related: ['hospital-lifts', 'capsule-lifts', 'elevator-modernization', 'elevator-amc'],
  },

  {
    slug: 'hospital-lifts',
    title: 'Hospital and Bed Lifts in Kerala',
    metaTitle: 'Hospital Lifts and Bed Elevators in Kerala',
    metaDescription:
      'Hospital bed lifts for Kerala healthcare buildings. Stretcher clearances, car depth, door widths and capacities, with installation and maintenance.',
    h1: 'Hospital Lifts and Bed Elevators in Kerala',
    intent: 'hospital lift, bed elevator, stretcher lift, hospital lift size',
    lede:
      'A hospital lift is sized around a loaded bed with staff beside it, not around a passenger count. Get the car depth or the door width wrong and it cannot do the one job it exists for. Here are the dimensions that decide it.',
    sections: [
      {
        heading: 'Start from the bed',
        body:
          'Measure the longest trolley or bed in use, including the headboard and any IV pole. Add clearance at the foot for a staff member to stand and steer. Add space along one side for an attendant with a monitor or an oxygen cylinder. That gives the internal car size. This is why bed lifts are deep rather than wide.',
      },
      {
        heading: 'The door is where it usually goes wrong',
        body:
          'Car depth gets attention. Door width gets forgotten. The clear opening has to pass the bed at its widest while it is being steered, not while it is standing still. From 1100 mm is a common minimum. Go wider if the lobby is tight and the bed has to turn as it enters.',
      },
      {
        heading: 'Levelling',
        body:
          'A lift that stops 20 mm low is a jolt for a patient on a trolley and a trip hazard for the person pushing it. Specify levelling accuracy and have it verified at commissioning.',
      },
      {
        heading: 'Power',
        body:
          'Hospital lifts belong on the essential services supply with generator backup, plus an automatic rescue device as a second layer. If the building has two bed lifts, keep them off the same distribution board.',
      },
    ],
    specs: {
      caption: 'Indicative bed lift configuration',
      rows: [
        ['Capacity', '1000 to 2000 kg (about 15 to 26 persons)'],
        ['Car depth', 'Sized to take a loaded bed with an attendant, commonly 2000 mm or more'],
        ['Clear door opening', 'From 1100 mm, wider where lobby space is tight'],
        ['Door type', 'Automatic, usually two speed side opening for maximum clear width'],
        ['Speed', '0.5 to 1.5 m/s depending on rise'],
        ['Finishes', 'Cleanable surfaces, handrails, bumper rails'],
        ['Power', 'Essential supply with generator backup, plus automatic rescue device'],
      ],
    },
    faqs: [
      {
        q: 'What size should a hospital lift be?',
        a: 'It is set by the bed. Measure the longest trolley in use, add clearance at the foot for the person steering and along one side for an attendant with equipment. That gives the internal car dimensions.',
      },
      {
        q: 'What door width does a stretcher need?',
        a: 'A clear opening from 1100 mm is a common minimum, so the bed passes at its widest while being steered. Go wider where the lobby is narrow and the bed has to turn.',
      },
      {
        q: 'What capacity is typical?',
        a: 'Between 1000 and 2000 kg. The capacity follows the car size once the bed envelope is fixed.',
      },
      {
        q: 'Can it carry passengers too?',
        a: 'Yes, and in smaller facilities it has to. Where budget allows, keep one lift for bed movement so transfers do not queue behind visitors.',
      },
      {
        q: 'What happens in a power failure?',
        a: 'The lift should sit on the essential supply backed by the generator, with an automatic rescue device so the car still reaches a landing if both fail.',
      },
    ],
    related: ['passenger-lifts', 'goods-lifts', 'elevator-amc'],
  },

  {
    slug: 'capsule-lifts',
    title: 'Capsule Lifts in Kerala',
    metaTitle: 'Capsule Lifts in Kerala',
    metaDescription:
      'Panoramic capsule lifts for homes, hotels and showrooms in Kerala. Glass cabin options, structural shafts, solar control glazing and cleaning access.',
    h1: 'Capsule Lifts in Kerala',
    intent: 'capsule lift, panoramic lift, capsule lift for home',
    lede:
      'A capsule lift is a passenger lift with a glazed car in a glazed shaft, usually curved or faceted. The engineering is ordinary. The decisions that matter are about the glass.',
    sections: [
      {
        heading: 'Where it works',
        body:
          'A capsule lift pays for itself where there is something to look at. An atrium, a stairwell around a double height space, or an external wall with a view. Boxed into an internal shaft with walls close on all sides, the glazing is wasted. A standard car with a glass rear panel gives most of the effect for much less.',
      },
      {
        heading: 'Heat and glare',
        body:
          'A glazed shaft on a west or south wall gets very hot by afternoon. Specify heat reflective or solar control laminated glass and ventilate the shaft head. Without that the car is uncomfortable and the controller runs hot.',
      },
      {
        heading: 'Cleaning access',
        body:
          'Glass needs cleaning on both faces. Decide how that will happen during design, whether from the landings or by a maintenance route at the head. Adding access to a finished glass tower afterwards is expensive and usually looks it.',
      },
    ],
    specs: {
      caption: 'Typical capsule configuration',
      rows: [
        ['Capacity', '3 to 13 persons'],
        ['Shaft', 'Structural glass, or steel structure with glazed infill'],
        ['Glazing', 'Laminated safety glass, solar control on external walls'],
        ['Drive', 'Gearless machine-room-less traction'],
        ['Doors', 'Automatic sliding, full vision or frameless glass'],
        ['Shape', 'Semi circular, faceted, or rectangular with glazed faces'],
      ],
    },
    faqs: [
      {
        q: 'Is a capsule lift suitable for a home?',
        a: 'Yes where the house has a stairwell or atrium worth looking into. In a fully enclosed internal shaft it adds cost without the visual benefit.',
      },
      {
        q: 'Does the glass get hot?',
        a: 'On a wall facing the afternoon sun, yes, unless you specify solar control laminated glass and ventilate the shaft head.',
      },
      {
        q: 'Is glass safe for a lift car?',
        a: 'Laminated safety glass is used throughout. It holds together if broken, which is why toughened glass alone is not used.',
      },
      {
        q: 'How is it cleaned?',
        a: 'Through an access route agreed at design stage, either from the landings or at the shaft head.',
      },
    ],
    related: ['glass-lifts', 'home-lifts', 'passenger-lifts'],
  },

  {
    slug: 'glass-lifts',
    title: 'Glass Lifts and Panoramic Elevators in Kerala',
    metaTitle: 'Glass Lifts in Kerala',
    metaDescription:
      'Glass home elevators and panoramic lifts in Kerala. Structural glass shafts for retrofits, frameless doors, and privacy options for bedroom landings.',
    h1: 'Glass Lifts in Kerala',
    intent: 'glass lift, glass elevator home, panoramic elevator',
    lede:
      'A glass shaft keeps daylight in a stairwell instead of blocking it with a masonry box. For retrofits into finished houses this is often what decides it, because a self supporting glass shaft avoids the civil work a concrete shaft needs.',
    sections: [
      {
        heading: 'Structural glass or glazed infill',
        body:
          'A structural glass shaft uses the glass and its framing as part of the structure. It looks cleanest and shows least steel. A steel frame with glazed infill is more forgiving of site tolerances and costs less. Both work. The choice is budget against how much metal you want to see.',
      },
      {
        heading: 'Retrofit into a finished house',
        body:
          'The common pattern is a self supporting shaft dropped into the void at the centre of a dog leg stair, or placed against an outside wall with a landing cut at each floor. Because the shaft carries itself, the existing slab usually needs local strengthening at the base and nothing more.',
      },
      {
        heading: 'Privacy',
        body:
          'Full glazing past a bedroom landing is rarely what people want once they live with it. Fritted, tinted or opaque panels at those levels fix it without losing the daylight that justified the glass.',
      },
    ],
    specs: {
      caption: 'Glass lift options',
      rows: [
        ['Glass', 'Laminated safety glass, solar control where exposed'],
        ['Shaft', 'Structural glass, or steel frame with glazed infill'],
        ['Doors', 'Full vision or frameless glass, automatic sliding'],
        ['Capacity', '3 to 8 persons typical for a house'],
        ['Drive', 'Gearless machine-room-less traction'],
        ['Privacy options', 'Fritted or tinted panels at selected landings'],
      ],
    },
    faqs: [
      {
        q: 'Can a glass lift go into a finished house?',
        a: 'Yes. A self supporting glass shaft in the stair void or against an outside wall is the standard retrofit, and avoids building a masonry shaft through the house.',
      },
      {
        q: 'Does a glass shaft need its own foundation?',
        a: 'Usually local strengthening at the base, not a new foundation. The site visit confirms what the existing slab can take.',
      },
      {
        q: 'Is it private enough for a bedroom floor?',
        a: 'Specify fritted or tinted panels at those landings.',
      },
    ],
    related: ['capsule-lifts', 'home-lifts', 'home-lift-price-kerala'],
  },

  {
    slug: 'goods-lifts',
    title: 'Goods Lifts and Freight Elevators in Kerala',
    metaTitle: 'Goods Lifts in Kerala',
    metaDescription:
      'Goods and freight lifts for Kerala warehouses, factories and retail. Capacities, loading method, car floor construction and door types for heavy use.',
    h1: 'Goods Lifts in Kerala',
    intent: 'goods lift, freight elevator, industrial lift, material lift',
    lede:
      'Goods lifts fail for predictable reasons. The car floor was specified for the stated load but not for a pallet truck driving across it, or the doors were not built to be hit. How the lift gets loaded matters more than the capacity figure.',
    sections: [
      {
        heading: 'How it gets loaded',
        body:
          'Hand loaded boxes, a pallet truck, a forklift driving fully into the car, and a trolley wheeled across the threshold are four different lifts. Forklift loading needs a reinforced car floor, a heavy duty sill and tighter levelling, because one wheel crossing the gap is a far harder point load than the weight of the goods spread across the floor.',
      },
      {
        heading: 'Protect the car',
        body:
          'Chequered plate floors, steel kick plates to about a metre, and timber or rubber bumper rails cost less than refinishing a damaged car, and much less than replacing a door panel hit by a pallet.',
      },
      {
        heading: 'Doors',
        body:
          'Vertical bi-parting doors suit wide openings and heavy traffic. Horizontal sliding doors suit cleaner environments. A manual collapsible gate costs least and will be the first thing to fail under heavy use. Match the door to the duty cycle.',
      },
    ],
    specs: {
      caption: 'Goods lift configuration',
      rows: [
        ['Capacity', '250 kg up to 5000 kg and above'],
        ['Loading', 'Hand, pallet truck, trolley, or full forklift entry'],
        ['Car floor', 'Chequered plate, or reinforced for wheel loads'],
        ['Doors', 'Vertical bi-parting, horizontal sliding, or collapsible gate'],
        ['Drive', 'Traction or hydraulic depending on rise and duty'],
        ['Protection', 'Kick plates, bumper rails, heavy duty sills'],
      ],
    },
    faqs: [
      {
        q: 'What capacity do we need?',
        a: 'Take the heaviest single load including its pallet and any handling equipment that enters the car, then add margin for how loading actually happens.',
      },
      {
        q: 'Can a forklift drive into the car?',
        a: 'Only if the lift is specified for it, with a reinforced floor, heavy duty sill and the forklift weight counted in the capacity. Say so before ordering, because it cannot be added later.',
      },
      {
        q: 'Traction or hydraulic?',
        a: 'Hydraulic suits low rises and very heavy loads. Traction suits taller rises and heavier usage where running cost matters.',
      },
    ],
    related: ['dumbwaiters', 'hospital-lifts', 'elevator-amc'],
  },

  {
    slug: 'dumbwaiters',
    title: 'Dumbwaiters and Kitchen Lifts in Kerala',
    metaTitle: 'Dumbwaiters and Kitchen Lifts in Kerala',
    metaDescription:
      'Dumbwaiters and kitchen lifts for Kerala restaurants, hotels and homes. Hatch heights, hygienic stainless finishes and capacities from 50 to 300 kg.',
    h1: 'Dumbwaiters and Kitchen Lifts in Kerala',
    intent: 'dumbwaiter, kitchen lift, service lift, food lift',
    lede:
      'A dumbwaiter moves food, crockery, linen or files between floors so nobody carries a tray up a staircase. In restaurants and hotels it is a service speed decision. In houses with a first floor dining room it removes the worst trip of the day.',
    sections: [
      {
        heading: 'Set the hatch to worktop height',
        body:
          'The most common regret is a serving hatch at the wrong height. Set the landing sill level with the worktop so trays slide across instead of being lifted. Fix this with the kitchen layout, before the joinery is installed.',
      },
      {
        heading: 'Hygiene',
        body:
          'For food service the car should be stainless throughout, with coved internal corners and no exposed fasteners to trap residue. It will be cleaned at the end of a shift by someone in a hurry, so it has to clean quickly in place.',
      },
      {
        heading: 'Noise',
        body:
          'A dumbwaiter next to a dining room needs quiet drive and door operation specified up front. A rattling service lift twenty feet from the guests is hard to fix afterwards.',
      },
    ],
    specs: {
      caption: 'Dumbwaiter configuration',
      rows: [
        ['Capacity', '50 to 300 kg'],
        ['Stops', 'Typically 2 to 5'],
        ['Sill height', 'Set to worktop level for tray transfer'],
        ['Car finish', 'Stainless steel, coved corners for food service'],
        ['Doors', 'Vertical bi-parting or horizontal sliding hatch'],
        ['Controls', 'Call and send at each landing, with car present indication'],
      ],
    },
    faqs: [
      {
        q: 'What is the difference between a dumbwaiter and a goods lift?',
        a: 'A dumbwaiter is small and never carries people, typically up to 300 kg with a hatch at waist height. A goods lift is walk in or drive in, built for pallets and trolleys.',
      },
      {
        q: 'What height should the hatch be?',
        a: 'Level with the worktop it serves, so trays slide instead of being lifted.',
      },
      {
        q: 'Can it go into an existing building?',
        a: 'Usually. The shaft is small and often fits a service duct, a cupboard stack or a corner of the kitchen.',
      },
    ],
    related: ['goods-lifts', 'elevator-amc'],
  },

  {
    slug: 'hydraulic-lifts',
    title: 'Hydraulic Lifts in Kerala',
    metaTitle: 'Hydraulic Lifts in Kerala',
    metaDescription:
      'Hydraulic elevators in Kerala. Where they beat traction, pit and headroom needs, running cost, and why oil temperature matters in the Kerala climate.',
    h1: 'Hydraulic Lifts in Kerala',
    intent: 'hydraulic lift, hydraulic elevator, hydraulic lift for home',
    lede:
      'A hydraulic lift pushes the car up on a ram driven by an oil pump, instead of hauling it on ropes. For two or three stops with heavy loads and low headroom it is often the right choice. For a tall rise in daily use it is usually the wrong one.',
    sections: [
      {
        heading: 'Where hydraulic wins',
        body:
          'Low rise, up to about four or five stops. Heavy loads for the size of building. Sites with restricted headroom above the top landing, because a hydraulic lift needs much less overhead than traction. Retrofits where the structure cannot easily take a traction machine at the shaft head, since most of the hydraulic load goes into the pit instead.',
      },
      {
        heading: 'Where it loses',
        body:
          'Running cost. Every upward trip is work done by the pump motor and there is no counterweight helping. On a building with constant traffic the electricity difference against gearless traction adds up over ten years. Speed is limited too, so journey times on a tall rise become noticeable.',
      },
      {
        heading: 'Oil temperature in the Kerala climate',
        body:
          'With frequent use and a poorly ventilated machine space, hydraulic oil heats up. Hot oil thins, performance drifts, and the controller can trip on thermal protection. Ventilate the power pack space properly. On higher duty installations, specify an oil cooler. This is the most common complaint on hydraulic lifts installed without thought for the room they sit in.',
      },
    ],
    specs: {
      caption: 'Hydraulic configuration',
      rows: [
        ['Stops', 'Best suited to 2 to 5'],
        ['Capacity', 'Wide range, suits heavy loads at low rise'],
        ['Speed', 'Typically up to 0.6 m/s'],
        ['Headroom', 'Lower requirement than traction'],
        ['Pit', 'Required, depth depends on ram arrangement'],
        ['Machine space', 'Power pack location is flexible, ventilation is not optional'],
      ],
    },
    faqs: [
      {
        q: 'Is hydraulic cheaper than traction?',
        a: 'Often cheaper to buy at two or three stops and more expensive to run. Compare over ten years including electricity.',
      },
      {
        q: 'How many floors can a hydraulic lift serve?',
        a: 'Practically up to about four or five stops. Above that, speed and running cost make traction the better choice.',
      },
      {
        q: 'Does it need a machine room?',
        a: 'It needs a ventilated space for the power pack. The location is more flexible than a traction machine room.',
      },
      {
        q: 'Does the oil need changing?',
        a: 'Oil condition and level are checked at each maintenance visit, along with the seals and ram. This is routine on a maintained lift and a failure point on an unmaintained one.',
      },
    ],
    related: ['home-lifts', 'goods-lifts', 'elevator-amc'],
  },

  {
    slug: 'wheelchair-lifts',
    title: 'Wheelchair Accessible Lifts in Kerala',
    metaTitle: 'Wheelchair Accessible Lifts in Kerala',
    metaDescription:
      'Accessible lifts for wheelchair users and elderly family members in Kerala. Car size, control height, door timing and handrails that make a lift usable.',
    h1: 'Wheelchair Accessible Lifts in Kerala',
    intent: 'wheelchair lift, elevator for elderly, accessible lift, disabled lift',
    lede:
      'Plenty of lifts are technically accessible and practically not. A car a wheelchair can enter but not turn in. A control panel at standing height. Doors that close before someone with a walker is through. These are specification choices and they cost very little if you make them before ordering.',
    sections: [
      {
        heading: 'Turning, not just entering',
        body:
          'If the user cannot turn inside the car they have to reverse out, which on a landing with a staircase behind them is unsafe. Where the car cannot be deep enough to turn, doors on opposite sides let the user enter at one face and leave at the other.',
      },
      {
        heading: 'Controls within reach',
        body:
          'A seated user cannot reach a panel set for someone standing. Mount the car panel low, with large tactile buttons and braille. A horizontal layout is easier to reach along than a tall vertical one. Landing call buttons need the same treatment.',
      },
      {
        heading: 'Door timing and fittings',
        body:
          'Default door dwell times assume able bodied passengers. They can be extended. Add a handrail on at least one side at a height useful when seated or unsteady, and a mirror on the rear wall so a user reversing out can see the landing.',
      },
      {
        heading: 'Getting out in a power cut',
        body:
          'The automatic rescue device matters most for these users, who are least able to deal with being stranded. Pair it with a two way intercom that reaches someone who will answer, not just an alarm bell.',
      },
    ],
    specs: {
      caption: 'Accessibility specification',
      rows: [
        ['Car size', 'Sized so a wheelchair can turn, or doors on opposite sides'],
        ['Clear door opening', 'Wide enough for a powered wheelchair with clearance'],
        ['Car controls', 'Low mounted, tactile, braille marked, horizontal layout'],
        ['Door dwell', 'Extended timing for slower boarding'],
        ['Fittings', 'Handrail, rear mirror, non slip floor'],
        ['Signals', 'Audible arrival and voice announcement'],
        ['Emergency', 'Automatic rescue device and two way intercom'],
      ],
    },
    faqs: [
      {
        q: 'How big does the car need to be for a wheelchair?',
        a: 'Big enough to turn in, not just to enter. Where depth is limited, doors on opposite faces let the user drive in one side and out the other.',
      },
      {
        q: 'Can an existing lift be made more accessible?',
        a: 'Often. Moving the car panel, extending door dwell time, and adding a handrail, mirror and voice announcements can all be retrofitted. Changing the car size cannot.',
      },
      {
        q: 'Is this useful for elderly parents who do not use a wheelchair?',
        a: 'Yes, and that is the more common case. Extended door timing, a handrail, a low panel and a seat are what make a lift comfortable for someone unsteady on their feet.',
      },
    ],
    related: ['home-lifts', 'elevator-modernization', 'elevator-amc'],
  },

  {
    slug: 'elevator-amc',
    title: 'Elevator AMC in Kerala, All Brands',
    metaTitle: 'Elevator AMC in Kerala, All Brands',
    metaDescription:
      'Annual maintenance contracts for elevators of any make in Kerala. What Standard and Comprehensive cover, how to compare AMC quotes, and response times.',
    h1: 'Elevator AMC in Kerala',
    intent: 'lift amc, elevator amc, lift maintenance, amc charges',
    lede:
      'We service elevators whoever installed them. If your original supplier has become slow, expensive or hard to reach, you do not need to replace the lift. You need someone willing to maintain the equipment you already own.',
    sections: [
      {
        heading: 'Standard and Comprehensive',
        body:
          'Standard covers scheduled preventive visits, inspection, lubrication, adjustment and safety checks, with parts billed as they are used. Comprehensive includes parts within an agreed scope, so an unpredictable repair bill becomes a fixed annual figure. For apartment associations working to a budget, comprehensive is usually easier to defend even when the headline number is higher.',
      },
      {
        heading: 'How to compare two AMC quotations',
        body:
          'Ask both providers the same five questions. How many preventive visits a year, scheduled or on request. What is the committed response time for a breakdown, and separately for someone trapped in the car. Which parts are included and which are excluded by name, specifically rope, door operator, controller board and rescue device battery. Is repair labour included or billed. Is there a surcharge outside working hours. The cheapest contract is usually the one that excludes the expensive parts.',
      },
      {
        heading: 'What a preventive visit covers',
        body:
          'Ropes and terminations checked for wear and tension. Brake operation and lining. Door operator, gibs and safety edge adjusted, since door faults cause most breakdown calls. Guide shoes and rails lubricated. Levelling checked at each landing. Safety gear, overspeed governor and buffers. Alarm, intercom and rescue device battery tested. Controller checked for heat and loose terminations.',
      },
      {
        heading: 'Entrapment response',
        body:
          'A breakdown is an inconvenience. Someone trapped in a car is an emergency. Ask what the committed attendance time is, who holds the keys, and what happens at night and on Sundays. A contract that says nothing about this is a discount on parts, not a maintenance contract.',
      },
    ],
    specs: {
      caption: 'AMC packages',
      rows: [
        ['Standard', 'Preventive visits, inspection, lubrication, adjustment. Parts billed separately'],
        ['Comprehensive', 'Preventive visits plus parts within the agreed scope'],
        ['Brands serviced', 'All makes, including lifts installed by other suppliers'],
        ['Routine visits', 'Scheduled, frequency set in the contract'],
        ['Breakdown support', 'Attendance committed in the contract'],
        ['Records', 'Visit reports and a maintenance log per lift'],
      ],
    },
    faqs: [
      {
        q: 'Will you service a lift installed by another company?',
        a: 'Yes. We provide maintenance for all elevator brands, including lifts installed by other suppliers.',
      },
      {
        q: 'What does an AMC cost?',
        a: 'It depends on make, capacity, number of floors, age and how hard the lift works. We inspect the lift first. Quoting without seeing it either overprices the contract or hides exclusions.',
      },
      {
        q: 'How often should a lift be serviced?',
        a: 'Scheduled preventive visits through the year, with frequency set by usage. A lift in a busy commercial building needs attention more often than one in a private house.',
      },
      {
        q: 'What is the difference between Standard and Comprehensive?',
        a: 'Standard covers visits and labour with parts billed as used. Comprehensive includes parts within the agreed scope, so the annual cost is predictable.',
      },
      {
        q: 'Can we switch providers mid contract?',
        a: 'Once the existing contract ends, yes. We inspect the lift, document its condition, list anything needing correction, and quote from there.',
      },
    ],
    related: ['elevator-modernization', 'passenger-lifts', 'home-lifts'],
  },

  {
    slug: 'elevator-modernization',
    title: 'Elevator Modernization in Kerala',
    metaTitle: 'Elevator Modernization in Kerala',
    metaDescription:
      'Modernize an ageing lift in Kerala. What to replace and what to keep, typical scope, downtime, and when modernization beats full replacement.',
    h1: 'Elevator Modernization in Kerala',
    intent: 'elevator modernization, lift upgrade, elevator retrofit',
    lede:
      'A twenty year old lift is rarely worn out everywhere. The rails, shaft and often the structure have decades left. The controller, drive and doors are what people are complaining about. Modernization replaces what has aged and keeps what has not.',
    sections: [
      {
        heading: 'When to modernize and when to replace',
        body:
          'Modernize if the rails and shaft are sound, spares for the controller are getting hard to find, ride quality and levelling have slipped, electricity consumption is high, or the doors keep failing. Replace if the shaft no longer suits the building, if capacity is fundamentally too small, or if corrosion has reached the structure. The survey settles it, and sometimes the answer is replace.',
      },
      {
        heading: 'Typical scope',
        body:
          'Controller and drive to a modern VVVF system, which is where most of the ride quality and energy saving comes from. Door operator and landing door equipment, since doors cause most breakdowns. Car interior, lighting and fixtures. Safety systems brought up to current expectation, including rescue device, door detection and intercom. Guide shoes and ropes if worn. Rails and structure usually stay.',
      },
      {
        heading: 'Downtime',
        body:
          'The lift is out of service while the work runs, which matters in an apartment block with elderly residents. Agree the outage window in writing before starting. In a building with two lifts, do them one at a time so the building is never without.',
      },
      {
        heading: 'What you get back',
        body:
          'Better ride and levelling. Fewer door faults. Lower electricity consumption from the VVVF drive. Parts that will still be available in ten years. For a residential association the drop in breakdown calls is usually what residents notice first.',
      },
    ],
    specs: {
      caption: 'Modernization scope',
      rows: [
        ['Controller', 'Replaced with modern microprocessor control'],
        ['Drive', 'VVVF, gearless where the machine is replaced'],
        ['Doors', 'New operator, safety edge, landing door equipment'],
        ['Car', 'Interior, lighting, fixtures, handrail, flooring'],
        ['Safety', 'Rescue device, door detection, intercom, alarm'],
        ['Usually retained', 'Guide rails, shaft, structure, car frame'],
      ],
    },
    faqs: [
      {
        q: 'How long is the lift out of service?',
        a: 'It depends on scope. Agree the outage window in writing before work starts. In a building with two lifts, phase them so one is always running.',
      },
      {
        q: 'Can you modernize a lift from another manufacturer?',
        a: 'Yes. Modernization often means replacing another maker\'s controller and drive while keeping the existing rails and structure.',
      },
      {
        q: 'Will it reduce the electricity bill?',
        a: 'A VVVF drive replacing older control usually reduces consumption measurably, and the saving is bigger on a lift that runs constantly.',
      },
      {
        q: 'Is modernization cheaper than a new lift?',
        a: 'Normally, because the rails, shaft and structure stay and the civil work is minimal. Where the shaft itself is the problem, replacement can be better value.',
      },
    ],
    related: ['elevator-amc', 'passenger-lifts', 'wheelchair-lifts'],
  },
];

export const LANDER_SLUGS = LANDERS.map((l) => l.slug);

export function getLander(slug) {
  return LANDERS.find((l) => l.slug === slug) ?? null;
}
