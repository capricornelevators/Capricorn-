/**
 * Product / service landing pages.
 *
 * One entry per search intent, mapped from the keyword research in
 * docs/seo/02-keyword-plan.md. Each lander must carry its own specs, FAQs and
 * body copy — these are not a template with the product name swapped out.
 *
 * Specifications below describe the equipment classes Capricorn supplies
 * (capacities taken from the model data in src/views/Commercial.jsx and
 * src/views/Residential.jsx). Prices are deliberately absent: none are
 * published yet. Add them to `priceNote` once the client signs off on bands.
 */

export const LANDERS = [
  {
    slug: 'home-lifts',
    title: 'Home Lifts & Home Elevators in Kerala',
    metaTitle: 'Home Lifts in Kerala',
    metaDescription:
      'Home lifts and residential elevators for Kerala villas and apartments. Compact shafts, machine-room-less drives, power-failure rescue and AMC support.',
    h1: 'Home Lifts in Kerala',
    intent: 'home lift, home elevator, lift for home, residential lift',
    lede:
      'A home lift turns a three-storey Kerala house into a single-level home for everyone living in it. Capricorn supplies machine-room-less residential elevators sized for the plots and stair cores that are typical of villas across Ernakulam, Thrissur and Kozhikode — including retrofits into houses that were built without a shaft.',
    sections: [
      {
        heading: 'What suits a Kerala home',
        body:
          'Most Kerala homes need a 3 to 6 passenger lift serving G+1 or G+2. Below 6 passengers you can usually avoid a machine room entirely, which matters when the stair core is already built. Where the house is finished and no shaft exists, a self-supporting structural shaft can be erected in the stairwell void or on an external wall, with the cabin glazed so it reads as part of the architecture rather than an add-on.',
      },
      {
        heading: 'Humidity and the coast',
        body:
          'Anything within a few kilometres of the backwaters or the sea sees salt-laden air year round. That drives real specification choices: hairline or matte stainless rather than mild steel for the car and frame, sealed landing door tracks, and powder-coated guide brackets. Monsoon humidity also argues for a controller cabinet with a heater or a dehumidifying element, particularly in houses that stay locked for months while the owners are abroad.',
      },
      {
        heading: 'Power cuts',
        body:
          'An automatic rescue device is not optional in Kerala. On mains failure the lift should run on battery to the nearest landing, open the doors and hold them open. Confirm this is included rather than quoted as an extra — it is the single feature homeowners regret omitting.',
      },
    ],
    specs: {
      caption: 'Typical residential configuration',
      rows: [
        ['Passenger capacity', '3 – 8 persons (272 – 630 kg)'],
        ['Floors served', 'G+1 to G+5'],
        ['Drive', 'Gearless machine-room-less traction, or hydraulic for low rise'],
        ['Travel speed', '0.3 – 1.0 m/s'],
        ['Shaft (indicative)', 'From approx. 1200 × 1200 mm clear for a 3-passenger car'],
        ['Pit / headroom', 'Reduced-pit options available for retrofits'],
        ['Doors', 'Automatic sliding, swing, full-vision or frameless glass'],
        ['Cabin finishes', 'Stainless steel, marble, granite, wood panel, glass'],
        ['Power supply', 'Single or three phase, with automatic rescue device'],
      ],
    },
    faqs: [
      {
        q: 'How much space does a home lift need?',
        a: 'A 3-passenger machine-room-less lift typically needs around 1200 × 1200 mm of clear shaft. Smaller footprints are possible with reduced-capacity cars and compact door arrangements. A site visit confirms the usable shaft once wall thickness, plumb and the stair opening are measured.',
      },
      {
        q: 'Can a lift be added to a house that is already built?',
        a: 'Yes. The usual approaches are a self-supporting shaft in the stairwell void, an external shaft against a side wall, or taking a corner of stacked rooms. A structural glass shaft avoids heavy civil work and keeps daylight in the stairwell.',
      },
      {
        q: 'Does it need a machine room?',
        a: 'For the capacities most homes use, no. A gearless machine-room-less drive sits inside the shaft, which is what makes retrofits practical.',
      },
      {
        q: 'What happens during a power cut?',
        a: 'The automatic rescue device brings the car to the nearest landing on battery power and opens the doors. It should be specified as standard.',
      },
      {
        q: 'How long does installation take?',
        a: 'Capricorn delivers within three months of order placement, with installation taking 10 to 20 days once the shaft is ready. Testing and commissioning follow before handover.',
      },
    ],
    related: ['home-lift-price-kerala', 'glass-lifts', 'wheelchair-lifts', 'elevator-amc'],
  },

  {
    slug: 'home-lift-price-kerala',
    title: 'Home Lift Price in Kerala',
    metaTitle: 'Home Lift Price in Kerala',
    metaDescription:
      'What drives home lift cost in Kerala: floors served, drive type, shaft work, cabin finishes, doors, GST and AMC. Request a site-specific quotation.',
    h1: 'Home Lift Price in Kerala — What Actually Drives the Cost',
    intent: 'home lift price in kerala, home elevator cost, lift price kerala',
    lede:
      'Published price ranges for home lifts in Kerala vary so widely that they are close to useless on their own. The number that matters is the one for your house, and it is driven by a short list of decisions. This page explains each of them so you can read any quotation — ours or anyone else\'s — and understand what you are being charged for.',
    priceNote:
      'Capricorn does not publish fixed prices because the shaft, drive and finish combination changes the figure substantially. A written quotation follows the free technical site visit.',
    sections: [
      {
        heading: 'The seven things that move the price',
        body:
          'Floors served — each additional stop adds guide rail, wiring, a landing door and a door operator. Drive type — gearless machine-room-less traction costs more than hydraulic up front and less to run over ten years. Shaft — an existing masonry shaft is the cheapest case; a self-supporting steel or structural glass shaft is a separate line item. Doors — a swing door is the least expensive, automatic sliding is mid-range, full-vision and frameless glass are the premium. Cabin finish — stainless is the baseline; marble, granite, wood panelling and mood lighting all add. Capacity — going from 3 to 6 passengers changes the machine, the rails and often the shaft. Site conditions — pit depth, headroom, three-phase availability and crane access for delivery.',
      },
      {
        heading: 'What should be in the quotation',
        body:
          'Insist that the quote names: the drive and its manufacturer, the controller, the capacity in both persons and kilograms, the door type and clear opening, the automatic rescue device, the warranty period, what the first year of maintenance covers, and whether civil work, shaft fabrication, electrical supply to the controller and GST are included or excluded. Most of the gap between two very different quotations for "the same" lift sits in those exclusions.',
      },
      {
        heading: 'Running cost, not just purchase cost',
        body:
          'Over a ten year life the annual maintenance contract, the electricity consumption of the drive, and the eventual cost of spares availability matter more than a difference of a few percent at purchase. A lift from a manufacturer who cannot supply a controller board in five years is the expensive option, whatever the invoice said.',
      },
    ],
    faqs: [
      {
        q: 'Why will nobody give a fixed price over the phone?',
        a: 'Because the shaft is the variable. Until someone has measured the stair core, the pit depth and the headroom, any figure is a guess that will change.',
      },
      {
        q: 'Is a hydraulic lift cheaper than traction?',
        a: 'Usually lower to buy for two or three stops, and higher to run — it draws more power on every upward trip. For G+2 and above, gearless traction is normally the better ten-year cost.',
      },
      {
        q: 'Does the price include civil work?',
        a: 'Check each quotation specifically. Shaft construction, the pit, electrical supply up to the controller and scaffolding are commonly excluded and quoted separately.',
      },
      {
        q: 'Is GST included?',
        a: 'Elevators attract GST. Ask whether the figure quoted is inclusive, because this alone accounts for a visible difference between quotations.',
      },
      {
        q: 'What does an annual maintenance contract add?',
        a: 'Budget for it from year one. Capricorn offers Standard and Comprehensive packages; the comprehensive package covers parts that the standard package bills separately.',
      },
    ],
    related: ['home-lifts', 'elevator-amc', 'hydraulic-lifts'],
  },

  {
    slug: 'passenger-lifts',
    title: 'Passenger Lifts & Commercial Elevators in Kerala',
    metaTitle: 'Passenger Lifts in Kerala',
    metaDescription:
      'Passenger elevators for offices, hotels, apartments and retail buildings in Kerala. 4 to 26 passenger capacities, gearless drives, full AMC support.',
    h1: 'Passenger Lifts in Kerala',
    intent: 'passenger lift, passenger elevator, commercial elevator, building lift',
    lede:
      'Passenger lifts for apartment blocks, offices, hotels and retail buildings across Kerala. Capricorn\'s commercial range covers 4 to 26 passengers, with gearless drives and controller options sized to the traffic the building actually sees rather than the nameplate capacity alone.',
    sections: [
      {
        heading: 'Sizing by traffic, not by floor count',
        body:
          'A twelve-floor apartment block with two flats per floor and an eight-floor office with forty desks per floor have completely different traffic patterns. Handling capacity over a five minute peak, not the number of landings, determines whether a building needs one lift or two and what speed they should run at. For residential towers the evening peak governs; for offices it is the morning arrival.',
      },
      {
        heading: 'Group control',
        body:
          'Where two or more lifts serve the same lobby, a group controller dispatches the car that will answer the call soonest rather than simply the nearest. On a building with real traffic this is the difference between an acceptable wait and daily complaints, and it is far cheaper to specify at order stage than to retrofit.',
      },
      {
        heading: 'What the building needs to provide',
        body:
          'A plumb shaft within tolerance, the specified pit depth and headroom, a three-phase supply terminated at the controller position, lighting and a socket in the pit and at the machine position, and a clear route for delivery of the car and rails. Delays on commercial sites are almost always shaft readiness rather than equipment.',
      },
    ],
    specs: {
      caption: 'Commercial passenger range',
      rows: [
        ['Passenger capacity', '4, 6, 8, 10, 15, 18, 20, 26 persons'],
        ['Drive', 'Gearless traction, machine-room-less or with machine room'],
        ['Travel speed', '1.0 – 2.5 m/s depending on rise'],
        ['Control', 'Simplex, duplex or group control'],
        ['Doors', 'Automatic centre or side opening, 800 – 1100 mm clear'],
        ['Cabin', 'Stainless steel, glass, stone or laminate finishes'],
        ['Safety', 'ARD, overload detection, door obstruction sensors, firemans return'],
      ],
    },
    faqs: [
      {
        q: 'How many lifts does an apartment building need?',
        a: 'It depends on population and peak traffic rather than floors alone. As a rough guide, a single lift struggles once a residential block passes roughly eight floors with multiple flats per floor. A traffic calculation at design stage settles it.',
      },
      {
        q: 'Machine room or machine-room-less?',
        a: 'Machine-room-less saves the headroom structure and is standard for most mid-rise buildings. A machine room still makes sense for higher capacities, long rises and buildings where service access matters more than roof space.',
      },
      {
        q: 'What speed is appropriate?',
        a: 'Up to about six floors, 1.0 m/s is adequate. Beyond that, speed should rise with the travel so journey time stays acceptable.',
      },
      {
        q: 'Is a firemans lift required?',
        a: 'Fire safety requirements depend on building height and occupancy under the applicable building rules. This should be confirmed with your architect and the local authority at design stage, not after installation.',
      },
    ],
    related: ['hospital-lifts', 'capsule-lifts', 'elevator-modernization', 'elevator-amc'],
  },

  {
    slug: 'hospital-lifts',
    title: 'Hospital & Bed Lifts in Kerala',
    metaTitle: 'Hospital Lifts & Bed Elevators in Kerala',
    metaDescription:
      'Hospital bed lifts for Kerala healthcare buildings — stretcher clearances, car sizes, door widths and capacities explained, with installation and AMC.',
    h1: 'Hospital Lifts and Bed Elevators in Kerala',
    intent: 'hospital lift, bed elevator, stretcher lift, hospital lift size',
    lede:
      'A hospital lift is specified around a loaded bed with staff and equipment alongside it, not around a passenger count. Get the car depth or the door width wrong and the lift is unusable for its only important job. This page sets out the dimensions that govern the decision, because almost nobody publishes them.',
    sections: [
      {
        heading: 'Start from the bed, then work outward',
        body:
          'Measure the longest trolley or bed in service, including any headboard and the IV pole. Add clearance at the foot for a staff member to stand and steer, and add space along one side for an attendant plus a monitor or oxygen cylinder. That envelope sets the internal car depth and width. A car that fits the bed exactly and nothing else will force staff to tilt patients to get in, which is precisely what the lift exists to avoid.',
      },
      {
        heading: 'The door is the usual mistake',
        body:
          'Car depth gets the attention and door width gets forgotten. The clear door opening has to pass the bed at its widest point while it is being steered, not while it is standing still. A 1100 mm clear opening is a common minimum for bed lifts; wider is better where the lobby in front of the lift is tight and the bed has to be turned as it enters.',
      },
      {
        heading: 'Ride quality is clinical, not cosmetic',
        body:
          'Smooth acceleration and accurate levelling matter more in a hospital than anywhere else. A lift that stops 20 mm below the landing is a jolt for a patient on a trolley and a trip hazard for staff pushing it. Specify levelling accuracy and insist it is verified at commissioning.',
      },
      {
        heading: 'Power and redundancy',
        body:
          'Hospital lifts should be on the essential services supply with generator backup, with an automatic rescue device as a second line of defence. For buildings with more than one bed lift, avoid putting both on the same distribution board.',
      },
    ],
    specs: {
      caption: 'Indicative bed lift configuration',
      rows: [
        ['Capacity', '1000 – 2000 kg (approx. 15 – 26 persons)'],
        ['Car depth', 'Sized to pass a loaded bed with attendant — commonly 2000 mm or more'],
        ['Clear door opening', 'From 1100 mm; wider where lobby space is tight'],
        ['Door type', 'Automatic, usually two-speed side opening to maximise clear width'],
        ['Speed', '0.5 – 1.5 m/s depending on rise'],
        ['Levelling', 'Accurate re-levelling for trolley transfer'],
        ['Finishes', 'Antibacterial and cleanable surfaces, handrails, bumper rails'],
        ['Power', 'Essential supply with generator backup plus automatic rescue device'],
      ],
    },
    faqs: [
      {
        q: 'What size should a hospital lift be?',
        a: 'It is set by the bed, not by a standard passenger figure. Measure the longest trolley in service, add clearance at the foot for the person steering and along one side for an attendant with equipment. That gives the internal car dimensions, which is why bed lifts are deep rather than wide.',
      },
      {
        q: 'What door width is needed for a stretcher?',
        a: 'A clear opening from 1100 mm is a common minimum so the bed passes at its widest point while being steered. Where the lift lobby is narrow and the bed must turn as it enters, go wider.',
      },
      {
        q: 'What capacity is typical?',
        a: 'Bed lifts generally fall between 1000 and 2000 kg. The capacity follows from the car size once the bed envelope is fixed.',
      },
      {
        q: 'Can a hospital lift carry passengers too?',
        a: 'Yes, and in smaller facilities it often has to. Where budget allows, keep at least one lift dedicated to bed movement so clinical transfers do not wait behind visitor traffic.',
      },
      {
        q: 'What happens in a power failure?',
        a: 'The lift should sit on the essential services supply backed by the generator, with an automatic rescue device as a second layer so the car reaches a landing and opens even if both fail.',
      },
    ],
    related: ['passenger-lifts', 'goods-lifts', 'elevator-amc'],
  },

  {
    slug: 'capsule-lifts',
    title: 'Capsule Lifts in Kerala',
    metaTitle: 'Capsule Lifts in Kerala',
    metaDescription:
      'Panoramic capsule lifts for homes, hotels and showrooms in Kerala. Glass cabin options, structural shafts, and what the glazing means for heat and cleaning.',
    h1: 'Capsule Lifts in Kerala',
    intent: 'capsule lift, panoramic lift, capsule lift for home',
    lede:
      'A capsule lift is a passenger lift with a glazed car in a glazed shaft, usually curved or faceted, placed where it will be seen — a hotel atrium, a showroom, or the stairwell of a house built around a double-height space. The engineering is conventional; the decisions that matter are about glass.',
    sections: [
      {
        heading: 'Where it works',
        body:
          'Capsule lifts earn their cost when there is something to look at and when the lift itself is part of the architecture. In an atrium or against an external wall with a view they transform the space. Boxed into an internal shaft with walls close on all sides, the glazing is wasted and a standard car with a glass rear panel gives most of the effect for far less.',
      },
      {
        heading: 'Heat, glare and the Kerala sun',
        body:
          'An externally glazed shaft on a west or south elevation becomes an oven by afternoon. Specify heat-reflective or laminated solar-control glass and plan for ventilation at the shaft head. Without it, the car is uncomfortable, the controller runs hot and the lift ages faster than it should.',
      },
      {
        heading: 'Cleaning and maintenance access',
        body:
          'Glass has to be cleaned on both faces, and an external capsule shaft needs a realistic plan for that from day one — access from landings, or a maintenance route at the head. Decide this during design. Retrofitting access to a finished glass tower is expensive and usually ugly.',
      },
    ],
    specs: {
      caption: 'Typical capsule configuration',
      rows: [
        ['Capacity', '3 – 13 persons'],
        ['Shaft', 'Structural glass, or steel structure with glazed infill'],
        ['Glazing', 'Laminated safety glass; solar control for external elevations'],
        ['Drive', 'Gearless machine-room-less traction'],
        ['Doors', 'Automatic sliding, full-vision or frameless glass'],
        ['Shape', 'Semi-circular, faceted or rectangular with glazed faces'],
      ],
    },
    faqs: [
      {
        q: 'Is a capsule lift suitable for a home?',
        a: 'Yes, where the house has a stairwell or atrium worth looking into or out from. In a fully enclosed internal shaft a glazed car adds cost without the visual benefit.',
      },
      {
        q: 'Does the glass get hot?',
        a: 'On an external elevation facing the afternoon sun, yes, unless you specify solar-control laminated glass and ventilate the shaft head. Plan for it at design stage.',
      },
      {
        q: 'Is glass safe for a lift car?',
        a: 'Laminated safety glass is used throughout. It holds together if broken, which is why it is the required specification rather than toughened glass alone.',
      },
      {
        q: 'How is it cleaned?',
        a: 'Through a planned access route agreed at design — from the landings for internal shafts, or a dedicated maintenance arrangement at the head for external ones.',
      },
    ],
    related: ['glass-lifts', 'home-lifts', 'passenger-lifts'],
  },

  {
    slug: 'glass-lifts',
    title: 'Glass Lifts & Panoramic Elevators in Kerala',
    metaTitle: 'Glass Lifts in Kerala',
    metaDescription:
      'Glass home elevators and panoramic lifts in Kerala — structural glass shafts, frameless doors, and the glazing specification that keeps them comfortable.',
    h1: 'Glass Lifts in Kerala',
    intent: 'glass lift, glass elevator home, panoramic elevator',
    lede:
      'Glass lifts keep daylight in a stairwell instead of blocking it with a masonry box. For retrofits in finished houses this is often the deciding factor: a structural glass shaft can stand in the stair void without the heavy civil work a concrete shaft would need.',
    sections: [
      {
        heading: 'Structural glass shaft versus glazed infill',
        body:
          'A structural glass shaft uses the glass and its framing as part of the supporting structure, giving the cleanest appearance with minimal visible steel. A steel frame with glazed infill is more forgiving of site tolerances and usually less expensive. Both work; the choice is budget against how much metal you are willing to see.',
      },
      {
        heading: 'Retrofit into an existing house',
        body:
          'The common pattern in Kerala villas is a self-supporting glass shaft dropped into the void at the centre of a dog-leg stair, or placed against an external wall with landings cut at each floor. Because the structure is self-supporting, the existing slab usually needs local strengthening at the base rather than wholesale rebuilding.',
      },
      {
        heading: 'Privacy and glare',
        body:
          'Full glazing on a bedroom landing is rarely what people want once they live with it. Fritted, tinted or partially opaque panels at specific levels solve this without losing the daylight that justified the glass in the first place.',
      },
    ],
    specs: {
      caption: 'Glass lift options',
      rows: [
        ['Glass', 'Laminated safety glass throughout; solar control where exposed'],
        ['Shaft', 'Structural glass or steel frame with glazed infill'],
        ['Doors', 'Full-vision or frameless glass, automatic sliding'],
        ['Capacity', '3 – 8 persons typical for residential'],
        ['Drive', 'Gearless machine-room-less traction'],
        ['Options', 'Fritted or tinted panels for privacy at selected landings'],
      ],
    },
    faqs: [
      {
        q: 'Can a glass lift be added to a finished house?',
        a: 'Yes — a self-supporting glass shaft in the stair void or against an external wall is the standard retrofit approach, and avoids building a masonry shaft through the house.',
      },
      {
        q: 'Does a glass shaft need its own foundation?',
        a: 'Usually local strengthening at the base rather than a new foundation, since the shaft is self-supporting. The site visit confirms what the existing slab can take.',
      },
      {
        q: 'Is it private enough for a bedroom floor?',
        a: 'Specify fritted or tinted panels at those landings. You keep the daylight and lose the fishbowl effect.',
      },
    ],
    related: ['capsule-lifts', 'home-lifts', 'home-lift-price-kerala'],
  },

  {
    slug: 'goods-lifts',
    title: 'Goods Lifts & Freight Elevators in Kerala',
    metaTitle: 'Goods Lifts in Kerala',
    metaDescription:
      'Goods and freight lifts for Kerala warehouses, factories and retail — capacities, loading method, floor construction and door types that survive daily use.',
    h1: 'Goods Lifts in Kerala',
    intent: 'goods lift, freight elevator, industrial lift, material lift',
    lede:
      'Goods lifts fail for predictable reasons: the car floor was specified for the stated load but not for a loaded pallet truck driving across it, or the doors were not built for being hit. Specifying how the lift is actually loaded matters more than the capacity figure.',
    sections: [
      {
        heading: 'How it is loaded decides the specification',
        body:
          'Hand-loaded boxes, a pallet truck, a forklift driving fully into the car, or a trolley wheeled across the threshold are four different lifts. Forklift loading in particular demands a reinforced car floor, a heavy-duty sill and tighter levelling, because the point load of a wheel crossing the gap is far more punishing than the distributed weight of the goods.',
      },
      {
        heading: 'Protect the car',
        body:
          'Stainless or chequered plate floors, steel kick plates to around a metre, and timber or rubber bumper rails are not luxuries on a goods lift. They are cheaper than refinishing a damaged car, and far cheaper than replacing a door panel that has been struck by a pallet.',
      },
      {
        heading: 'Doors',
        body:
          'Vertical bi-parting doors suit wide openings and heavy traffic. Horizontal sliding doors suit cleaner environments. Manual collapsible gates cost least and will be the first thing to fail where usage is heavy. Match the door to the duty cycle.',
      },
    ],
    specs: {
      caption: 'Goods lift configuration',
      rows: [
        ['Capacity', '250 kg (dumbwaiter class) up to 5000 kg and above'],
        ['Loading', 'Hand, pallet truck, trolley or full forklift entry'],
        ['Car floor', 'Chequered plate or reinforced for wheel loads'],
        ['Doors', 'Vertical bi-parting, horizontal sliding or collapsible gate'],
        ['Drive', 'Traction or hydraulic depending on rise and duty'],
        ['Protection', 'Kick plates, bumper rails, heavy-duty sills'],
      ],
    },
    faqs: [
      {
        q: 'What capacity do I need?',
        a: 'Take the heaviest single load including its pallet and the handling equipment that enters the car, then add margin for how loading actually happens rather than how it is supposed to happen.',
      },
      {
        q: 'Can a forklift drive into the car?',
        a: 'Only if the lift is specified for it — reinforced floor, heavy-duty sill and the forklift weight counted in the capacity. Say so before ordering; it cannot be added later.',
      },
      {
        q: 'Traction or hydraulic?',
        a: 'Hydraulic suits low rises and very heavy loads. Traction suits taller rises and higher usage where running cost matters.',
      },
    ],
    related: ['dumbwaiters', 'hospital-lifts', 'elevator-amc'],
  },

  {
    slug: 'dumbwaiters',
    title: 'Dumbwaiters & Kitchen Lifts in Kerala',
    metaTitle: 'Dumbwaiters & Kitchen Lifts in Kerala',
    metaDescription:
      'Dumbwaiters and kitchen lifts for Kerala restaurants, hotels and homes. Serving hatch heights, hygienic finishes and capacities from 50 to 300 kg.',
    h1: 'Dumbwaiters and Kitchen Lifts in Kerala',
    intent: 'dumbwaiter, kitchen lift, service lift, food lift',
    lede:
      'A dumbwaiter moves food, crockery, linen or files between floors without anyone carrying a tray up a staircase. In restaurants and hotels it is a service-speed decision; in homes with a first-floor dining area it quietly removes the worst trip of the day.',
    sections: [
      {
        heading: 'Set the sill height to the worktop',
        body:
          'The single most common regret is a serving hatch at the wrong height. Set the landing sill level with the worktop so trays slide across instead of being lifted. Decide this with the kitchen layout, not after the joinery is installed.',
      },
      {
        heading: 'Hygiene',
        body:
          'For food service the car should be stainless throughout with coved internal corners and no exposed fasteners that trap residue. The car must be cleanable in place, quickly, because it will be cleaned at the end of a shift by someone in a hurry.',
      },
      {
        heading: 'Noise',
        body:
          'A dumbwaiter next to a dining room needs attention to drive noise and door operation. Specify it; a rattling service lift twenty feet from the guests is a daily irritation that is hard to fix afterwards.',
      },
    ],
    specs: {
      caption: 'Dumbwaiter configuration',
      rows: [
        ['Capacity', '50 – 300 kg'],
        ['Stops', 'Typically 2 – 5'],
        ['Sill height', 'Set to worktop level for tray transfer'],
        ['Car finish', 'Stainless steel, coved corners for food service'],
        ['Doors', 'Vertical bi-parting or horizontal sliding hatch'],
        ['Controls', 'Call and send at each landing with car-present indication'],
      ],
    },
    faqs: [
      {
        q: 'What is the difference between a dumbwaiter and a goods lift?',
        a: 'A dumbwaiter is small and never carries people — typically up to 300 kg with a hatch at waist height. A goods lift is walk-in or drive-in and built for pallets and trolleys.',
      },
      {
        q: 'What height should the hatch be?',
        a: 'Level with the worktop it serves, so trays slide rather than lift. Fix this with the kitchen layout.',
      },
      {
        q: 'Can it be installed in an existing building?',
        a: 'Usually yes. The shaft is small and often fits into a service duct, a cupboard stack or a corner of the kitchen.',
      },
    ],
    related: ['goods-lifts', 'elevator-amc'],
  },

  {
    slug: 'hydraulic-lifts',
    title: 'Hydraulic Lifts in Kerala',
    metaTitle: 'Hydraulic Lifts in Kerala',
    metaDescription:
      'Hydraulic elevators in Kerala — where they beat traction, pit and headroom needs, running cost, oil temperature in the Kerala climate, and maintenance.',
    h1: 'Hydraulic Lifts in Kerala',
    intent: 'hydraulic lift, hydraulic elevator, hydraulic lift for home',
    lede:
      'Hydraulic lifts push the car up on a ram driven by an oil pump instead of hauling it on ropes. For two or three stops with heavy loads and low headroom they are often the right answer. For a tall rise with heavy daily use they are usually the wrong one.',
    sections: [
      {
        heading: 'Where hydraulic wins',
        body:
          'Low rise, typically up to four or five stops. Heavy loads relative to the building. Sites where headroom above the top landing is restricted, because a hydraulic lift needs much less overhead than traction. And retrofits where the structure cannot easily take the loads a traction machine imposes at the shaft head, since a hydraulic lift puts most of its load into the pit.',
      },
      {
        heading: 'Where it loses',
        body:
          'Running cost. Every upward trip is work done by the pump motor, and there is no counterweight helping. On a building with constant traffic the electricity difference against gearless traction is substantial over a decade. Speed is also limited, so journey times on taller rises become noticeable.',
      },
      {
        heading: 'Oil temperature matters here',
        body:
          'In the Kerala climate, with a machine room that may be poorly ventilated, hydraulic oil heats up with frequent use. Hot oil thins, performance drifts and the controller may trip on thermal protection. Specify adequate machine space ventilation and, for higher duty installations, an oil cooler. This is the most common complaint on hydraulic lifts that have been installed without thought for the room they sit in.',
      },
    ],
    specs: {
      caption: 'Hydraulic configuration',
      rows: [
        ['Stops', 'Best suited to 2 – 5'],
        ['Capacity', 'Wide range; well suited to heavy loads at low rise'],
        ['Speed', 'Typically up to 0.6 m/s'],
        ['Headroom', 'Lower requirement than traction'],
        ['Pit', 'Required; depth depends on ram arrangement'],
        ['Machine space', 'Power pack location flexible; needs ventilation'],
      ],
    },
    faqs: [
      {
        q: 'Is hydraulic cheaper than traction?',
        a: 'Often lower to purchase at two or three stops, and higher to run because there is no counterweight. Compare over ten years including electricity, not on the quotation alone.',
      },
      {
        q: 'How many floors can a hydraulic lift serve?',
        a: 'Practically, up to about four or five stops. Beyond that, speed and running cost make traction the better choice.',
      },
      {
        q: 'Does it need a machine room?',
        a: 'It needs a space for the power pack, which is more flexible in location than a traction machine room, but it must be ventilated.',
      },
      {
        q: 'Does the oil need changing?',
        a: 'Oil condition and level are checked as part of maintenance, with seals and the ram inspected for weeping. This is routine on a maintained lift and a failure point on an unmaintained one.',
      },
    ],
    related: ['home-lifts', 'goods-lifts', 'elevator-amc'],
  },

  {
    slug: 'wheelchair-lifts',
    title: 'Wheelchair Accessible Lifts in Kerala',
    metaTitle: 'Wheelchair Accessible Lifts in Kerala',
    metaDescription:
      'Accessible lifts for wheelchair users and elderly family members in Kerala — car sizes, controls, door timing and handrails that make a lift genuinely usable.',
    h1: 'Wheelchair Accessible Lifts in Kerala',
    intent: 'wheelchair lift, elevator for elderly, accessible lift, disabled lift',
    lede:
      'Many lifts are technically accessible and practically not. A car a wheelchair can enter but not turn in, a control panel mounted at standing height, or doors that close too quickly for someone using a walker all defeat the purpose. These are specification choices, and they cost very little if they are made before the order.',
    sections: [
      {
        heading: 'Turning, not just entering',
        body:
          'If the user cannot turn inside the car they must reverse out, which on a landing with a staircase behind them is both difficult and unsafe. Where the car cannot be made deep enough to turn, a through-car arrangement with doors on opposite sides solves it — the user enters at one face and leaves at the other without reversing.',
      },
      {
        heading: 'Controls within reach',
        body:
          'A seated user cannot reach a panel set for someone standing. Mount the car panel low enough to be used from a wheelchair, with large tactile buttons and braille marking. A horizontal panel layout is easier to reach along than a tall vertical one. Landing call buttons need the same treatment.',
      },
      {
        heading: 'Door timing and handrails',
        body:
          'Default door dwell times are set for able-bodied passengers. They can and should be extended where the lift serves elderly or disabled users. Add a handrail on at least one side at a height that is useful when seated or unsteady, and a mirror on the rear wall so a user reversing out can see the landing behind them.',
      },
      {
        heading: 'Getting out when the power fails',
        body:
          'An automatic rescue device matters most for exactly these users, who are least able to deal with being stranded. Pair it with a two-way emergency intercom that reaches someone who will actually answer, not just an alarm bell.',
      },
    ],
    specs: {
      caption: 'Accessibility specification',
      rows: [
        ['Car size', 'Sized to allow a wheelchair to turn, or through-car doors'],
        ['Clear door opening', 'Wide enough for a powered wheelchair with clearance'],
        ['Car controls', 'Low-mounted, tactile, braille marked, horizontal layout'],
        ['Door dwell', 'Extended timing for slower boarding'],
        ['Fittings', 'Handrail, rear mirror, non-slip floor'],
        ['Signals', 'Audible arrival and voice announcement'],
        ['Emergency', 'Automatic rescue device and two-way intercom'],
      ],
    },
    faqs: [
      {
        q: 'How big does the car need to be for a wheelchair?',
        a: 'Big enough to turn in, not merely to enter. Where depth is limited, a through-car with doors on opposite faces lets the user drive in one side and out the other without reversing.',
      },
      {
        q: 'Can an existing lift be made more accessible?',
        a: 'Often, yes — relocating the car panel, extending door dwell time, adding a handrail, mirror and voice announcements are all retrofittable. Changing the car size is not.',
      },
      {
        q: 'Is this useful for elderly parents who are not wheelchair users?',
        a: 'Very. Extended door timing, a handrail, a low panel and a seat are what make a lift comfortable for someone unsteady on their feet, which is the far more common case in Kerala homes.',
      },
    ],
    related: ['home-lifts', 'elevator-modernization', 'elevator-amc'],
  },

  {
    slug: 'elevator-amc',
    title: 'Elevator AMC in Kerala — All Brands',
    metaTitle: 'Elevator AMC in Kerala — All Brands',
    metaDescription:
      'Annual maintenance contracts for elevators of any make in Kerala. What Standard and Comprehensive cover, how to compare AMC quotes, and response times.',
    h1: 'Elevator AMC in Kerala',
    intent: 'lift amc, elevator amc, lift maintenance, amc charges',
    lede:
      'Capricorn services elevators regardless of who installed them. If your original supplier has become slow, expensive or unreachable, an AMC does not require replacing the lift — it requires someone willing to maintain the equipment you already own.',
    sections: [
      {
        heading: 'Standard versus Comprehensive',
        body:
          'The Standard package covers scheduled preventive visits, inspection, lubrication, adjustment and safety checks, with parts billed separately as they are needed. The Comprehensive package includes parts within the agreed scope, which converts an unpredictable repair bill into a fixed annual figure. For apartment associations and facility managers working to a budget, comprehensive is usually easier to defend even when the headline number is higher.',
      },
      {
        heading: 'How to compare two AMC quotations',
        body:
          'Ask each provider the same five questions. How many preventive visits per year, and are they scheduled or on request? What is the committed response time for a breakdown, and separately for a passenger entrapment? Which parts are included and which are excluded by name — rope, door operator, controller board, ARD battery? Is labour for repairs included or billed? And is there a surcharge for calls outside working hours? The cheapest contract is usually the one that excludes the expensive parts.',
      },
      {
        heading: 'What preventive maintenance actually involves',
        body:
          'Ropes and terminations inspected for wear and tension. Brake operation and lining checked. Door operator, gibs and safety edge adjusted — door faults cause the majority of breakdown calls. Guide shoes and rails lubricated. Levelling verified at each landing. Safety gear, overspeed governor and buffers checked. Emergency alarm, intercom and ARD battery tested. Controller inspected for heat and loose terminations.',
      },
      {
        heading: 'Entrapment response is the number that matters',
        body:
          'Breakdowns are an inconvenience; someone trapped in a car is an emergency. Ask what the committed attendance time is for an entrapment, who holds the keys, and what happens at night and on Sundays. A contract that is silent on this is not a maintenance contract, it is a discount on parts.',
      },
    ],
    specs: {
      caption: 'AMC packages',
      rows: [
        ['Standard', 'Preventive visits, inspection, lubrication, adjustment; parts billed separately'],
        ['Comprehensive', 'Preventive visits plus parts within the agreed scope'],
        ['Brands serviced', 'All makes, including lifts installed by other suppliers'],
        ['Routine visits', 'Scheduled technical visits; frequency set in the contract'],
        ['Breakdown support', 'Attendance committed in the contract — confirm entrapment response separately'],
        ['Records', 'Visit reports and a maintenance log per lift'],
      ],
    },
    faqs: [
      {
        q: 'Will you service a lift installed by another company?',
        a: 'Yes. Capricorn provides AMC for all elevator brands, including lifts installed by other suppliers.',
      },
      {
        q: 'What does an AMC cost?',
        a: 'It depends on the make, capacity, number of floors, age and how hard the lift works. A site inspection establishes condition first — quoting an AMC without seeing the lift either overprices it or hides exclusions.',
      },
      {
        q: 'How often should a lift be serviced?',
        a: 'Scheduled preventive visits through the year, with frequency set by usage. A lift in a busy commercial building needs attention more often than one in a private house.',
      },
      {
        q: 'What is the difference between Standard and Comprehensive?',
        a: 'Standard covers the visits and labour with parts billed as used. Comprehensive includes parts within the agreed scope, so the annual cost is predictable.',
      },
      {
        q: 'Can we switch providers mid-contract?',
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
      'Modernize an ageing lift in Kerala — what to replace, what to keep, typical scope, downtime, and when modernization beats full replacement.',
    h1: 'Elevator Modernization in Kerala',
    intent: 'elevator modernization, lift upgrade, elevator retrofit',
    lede:
      'A lift that is twenty years old is rarely worn out everywhere. Guide rails, the shaft and often the structure have decades left, while the controller, drive and doors are the parts causing the complaints. Modernization replaces what has aged and keeps what has not.',
    sections: [
      {
        heading: 'When to modernize instead of replace',
        body:
          'Modernize when the rails and shaft are sound, spares for the controller are getting hard to find, ride quality and levelling have deteriorated, energy consumption is high, or the doors are the recurring fault. Replace entirely when the shaft no longer suits the building, when capacity is fundamentally inadequate, or when corrosion has reached the structure. The site survey settles this — and an honest surveyor will sometimes tell you to replace.',
      },
      {
        heading: 'Typical scope',
        body:
          'Controller and drive to a modern VVVF system, which is where most of the ride quality and energy saving comes from. Door operator and landing door equipment, since doors cause most breakdowns. Car interior, lighting, and fixtures. Safety systems brought up to current expectation — ARD, door detection, intercom. Guide shoes and ropes if worn. Rails and the structure usually stay.',
      },
      {
        heading: 'Downtime',
        body:
          'The lift is out of service during the work, which matters enormously in an apartment block with elderly residents. Phase the programme, agree the outage window in writing before starting, and in buildings with two lifts do them one at a time so the building is never without.',
      },
      {
        heading: 'What you actually get back',
        body:
          'Noticeably better ride and levelling, fewer door faults, lower electricity consumption from the VVVF drive and regenerative options, parts that will still be available in ten years, and a lift that stops embarrassing the building. For a residential association, the drop in breakdown calls is usually the change residents notice first.',
      },
    ],
    specs: {
      caption: 'Modernization scope',
      rows: [
        ['Controller', 'Replace with modern microprocessor control'],
        ['Drive', 'VVVF; gearless where the machine is being replaced'],
        ['Doors', 'New operator, safety edge, landing door equipment'],
        ['Car', 'Interior, lighting, fixtures, handrail, flooring'],
        ['Safety', 'ARD, door detection, intercom, alarm'],
        ['Usually retained', 'Guide rails, shaft, structure, car frame'],
      ],
    },
    faqs: [
      {
        q: 'How long is the lift out of service?',
        a: 'It depends on scope. Agree the outage window in writing before work starts, and in buildings with two lifts phase them so one is always running.',
      },
      {
        q: 'Can you modernize a lift from a different manufacturer?',
        a: 'Yes. Modernization frequently involves replacing another maker\'s controller and drive while keeping the existing rails and structure.',
      },
      {
        q: 'Will it reduce the electricity bill?',
        a: 'A VVVF drive replacing older control usually reduces consumption measurably, and the saving is larger on a lift that runs constantly.',
      },
      {
        q: 'Is modernization cheaper than a new lift?',
        a: 'Normally, because the rails, shaft and structure are retained and the civil work is minimal. Where the shaft itself is the problem, replacement can be the better value.',
      },
    ],
    related: ['elevator-amc', 'passenger-lifts', 'wheelchair-lifts'],
  },
];

export const LANDER_SLUGS = LANDERS.map((l) => l.slug);

export function getLander(slug) {
  return LANDERS.find((l) => l.slug === slug) ?? null;
}
