const places = [
    "100 Giggles Poundbury",
    "1610 Changing Places Toilet",
    "1610 Dorchester Sports Centre",
    "1610 Sports Centre",
    "A Country Practice Dental Clinic",
    "A Dorchester Trundle with the Town Crier",
    "A Walk Around Thomas Hardy Country",
    "A-Line Taxis",
    "Acland Road Car Park",
    "Al Molo – Dorchester",
    "Alacrify Ltd",
    "Alan & Thomas Insurance",
    "Alcohol Education Trust",
    "Allum & Sidaway",
    "Allure of Poundbury",
    "Amplifon",
    "Angel Cake Company",
    "Anglotown Lettings & Management",
    "Anytime Fitness",
    "Aquila Heights Guest House",
    "Arias Barber",
    "Aspects",
    "Aspley Associates LLP",
    "Athelhampton House and Gardens",
    "Avenue Interiors",
    "Balti Express",
    "Barclays Bank",
    "Barrow Circle Walk – 5.5 miles",
    "Basilico",
    "Battens Solicitors",
    "Bay Tree House",
    "Bean On The Green",
    "Beaus Beauty & Aesthetics",
    "Beauty Within",
    "Beds Are Uzzz",
    "Belle Vere Beauty Salon",
    "Bells Hair Salon",
    "Blackburn & Co Solicitors",
    "Blue Wizard Tattoo",
    "Blueberry Wealth Management",
    "Bombay Nights",
    "Bonjour Cafe",
    "Boots",
    "Boots Opticians & Hearing Care",
    "Boo’s Toy Shop",
    "Borough Gardens",
    "Box of Porcelain",
    "Brace of Butchers",
    "Bramlies",
    "Brewery Square",
    "Brewery Square Management",
    "Brewhouse & Kitchen",
    "Bridal Reloved",
    "British Heart Foundation Charity Shop",
    "Budmouth Walk – 19th Century Weymouth",
    "Butterfly Brides",
    "byFoke",
    "Callaway’s Fish & Chips",
    "Campbellwicks Interiors",
    "Capelli of Poundbury",
    "Car Radios Dorchester",
    "Card Factory",
    "Case and Brewer",
    "Castle Park Play Area",
    "CG Fry & Son",
    "Chasing Tails Bicycle Repairs",
    "Cherryade Life Store",
    "China Express",
    "Chiropody Clinic",
    "Christmas & Brugge",
    "Citizen’s Advice Bureau",
    "Classic Beauty",
    "Cloud Accountancy Services",
    "coffee#1",
    "Colliton Park Car Park",
    "Combens",
    "Connells",
    "Consol Tanning Studio",
    "Convivial Rabbit Micropub",
    "Cook",
    "Copper Street Brewery",
    "Corn Exchange",
    "Costa Coffee",
    "Costa Coffee Cornhill",
    "Cote Brasserie",
    "County Cleaners",
    "County Hall",
    "Crafty Cuppa – Craft Cafe",
    "Cranbornes of Dorchester",
    "Creams Café",
    "Crickmay Stark Architects",
    "Crystals",
    "Cygnus Instruments",
    "Damo’s Taxis",
    "David Upshall Insurance Services",
    "DBID Office",
    "Defibrillator – 1610 Sports Centre",
    "Defibrillator – Aspects",
    "Defibrillator – Brewery Square Concierge",
    "Defibrillator – Bupa Dental",
    "Defibrillator – Corn Exchange",
    "Defibrillator – County Hall",
    "Defibrillator – Crown Square",
    "Defibrillator – Dorchester Community Church",
    "Defibrillator – Dorchester Cricket Club",
    "Defibrillator – Dorchester Football Club",
    "Defibrillator – Dorchester Physiotherapy",
    "Defibrillator – Dorchester Post Office",
    "Defibrillator – Dorchester Tennis and Squash Club",
    "Defibrillator – Dorchester United Church",
    "Defibrillator – Dorford Baptist Church",
    "Defibrillator – Goulds",
    "Defibrillator – Masonic Hall",
    "Defibrillator – Pavilion in the Park (PiPs)",
    "Defibrillator – Premiere Inn",
    "Defibrillator – Prince of Wales School",
    "Defibrillator – Royal Oak Wetherspoons",
    "Defibrillator – South Walks House",
    "Defibrillator – St Marys Catholic First School",
    "Defibrillator – St Osmunds",
    "Defibrillator – Tesco",
    "Defibrillator – The Brownsword Hall",
    "Defibrillator – The Duchess of Cornwall",
    "Defibrillator – The Poet Laureate Pub",
    "Defibrillator – Thomas Hardye School",
    "Defibrillator – Veck Fasteners",
    "Defibrillator – Wessex Royale Hotel",
    "Defibrillator – Whetstones Alms House",
    "Dewflock Farm Camping",
    "Dickinson Bowden Estate Agents",
    "Discover Historical Dorchester walk",
    "Divine Ink Tattoos",
    "Dodgsons of Dorchester",
    "Doggie Wash",
    "DOMVS Estate Agents",
    "Dorchester Aesthetics Centre",
    "Dorchester Ambassadors",
    "Dorchester Arts",
    "Dorchester Community Church",
    "Dorchester Ghost Walks",
    "Dorchester Hair Studio",
    "Dorchester Hidden Histories Walk",
    "Dorchester Jewellers",
    "Dorchester Library and Learning Centre",
    "Dorchester Market",
    "Dorchester Market Cafe",
    "Dorchester Mobility",
    "Dorchester Podiatry",
    "Dorchester Post Office",
    "Dorchester Prison",
    "Dorchester Property Lettings",
    "Dorchester Roman Tours",
    "Dorchester Showground",
    "Dorchester South Train Station",
    "Dorchester Tackle & Guns",
    "Dorchester Town Council",
    "Dorchester Town Trail Walk – 2 miles",
    "Dorchester Travel",
    "Dorchester West Train Station",
    "Dorchester Yoga & Therapy Centre",
    "Dorchester’s Historic Cornhill Market",
    "Dorset Carers Hub",
    "Dorset County Hospital",
    "Dorset County Hospital EV Charge Point",
    "Dorset Craft Workshops",
    "Dorset Hideaways",
    "Dorset History Centre",
    "Dorset Museum & Art Gallery",
    "Dorset Museum Changing Places Toilet",
    "Dorset Property",
    "Double D Computers",
    "Down to Earth",
    "DRC Fairfield Car Park EV Charge Point",
    "Drgnfly",
    "Dukes Auctions",
    "Duke’s Parade, Poundbury",
    "Durngate Street Car Park",
    "Eastern Dorchester and Fordington",
    "Edward Road Play Area",
    "Edwards and Keeping",
    "Elizabeth Frink’s Martyrs statue",
    "Elizabeth Place Play Area",
    "Empire Kebabs",
    "Every Cloud",
    "Everycare Wessex",
    "F.I.T.T Chiropractic",
    "Fables and Food",
    "Fairfield Car Park Long Stay",
    "Fairfield Car Park Short Stay",
    "FatFace",
    "Feed the Soul",
    "Finca at Great Western Road",
    "Finca at the Buttercross",
    "Fisher Design Studio",
    "FoneWorld",
    "Fordington",
    "Fordington Deli",
    "Fordington: a short walk",
    "Forever Ink tattoo studio",
    "Forfit Fitness Wellness Centre",
    "Frank Herring & Sons",
    "Frederick L. Mabb",
    "Frith Opticians & Audiologists",
    "Frome Valley Trail – Cycling",
    "Fudges Wool",
    "Gallery on the Square Poundbury",
    "Gentz Barber Shop",
    "Globalmart Dorchester",
    "Goldcrest Jewellers",
    "Goldies Public House",
    "Goulds Fashion Store",
    "Goulds Household Store",
    "Grassby Funeral Services",
    "Great Field Toilets",
    "Great Western Camping",
    "Greenslade Taylor Hunt Estate Agents",
    "Greenwood Grange",
    "Halo Fine Art",
    "Hangman’s Cottage",
    "Hardcore Ink Tattoo Studio",
    "Hardys Monument",
    "Hardy’s",
    "Hardy’s Cottage",
    "Harmony Music",
    "Head 2 Head",
    "Heather Hair Salon",
    "Hepworth Blinds",
    "High East Street",
    "High West Street",
    "Higher Bockhampton",
    "Hobbs",
    "Holmead Walk Play Area",
    "Holy Trinity Catholic Church",
    "Home Instead Senior Care",
    "Honey Bee Cafe",
    "Hotter Shoes",
    "House of Tweed",
    "HSBC Bank",
    "Hub Box",
    "Humphries Kirk Solicitors",
    "Hussey & Briggs",
    "iBuy & Sell Jewellers",
    "Insight Opticians",
    "Isha Body Jewellery",
    "Istanbul Grill",
    "Jacqueline’s Pre-Loved Boutique",
    "Jennysis Crafts",
    "Joey’s",
    "John Edwards",
    "JoJo Maman Bebe",
    "Jordans Jewellers",
    "Joy Lane & Co.",
    "Jubilee Hall",
    "Judge Jeffreys",
    "Julia’s House",
    "Just Dance",
    "Kaaboom Marketing",
    "Kao San Thai Restaurant",
    "KeeP 106",
    "Kensington Walk Play Area",
    "Key Digital Agency Ltd",
    "Kings Nails",
    "Kingston Maurward Animal Park & Gardens",
    "Kingston Maurward College",
    "Kingston Maurward to Hardy’s Cottage walk",
    "Kingston Maurward to Max Gate",
    "King’s Park Play Area",
    "King’s Road Play Area",
    "Kiosk on the Green",
    "Kirsten Sare Makeup Artist",
    "Kitchen Style",
    "Kooky Bloom",
    "Kwik Fit",
    "Ladbrokes",
    "Langham Wine Estate",
    "Lee Garden",
    "Lilly Staffing Solutions",
    "LilyPups Dog Boutique",
    "Little Court",
    "Lloyds Bank",
    "Loco Loves",
    "Loving By Nature",
    "Lower Bockhampton",
    "Mac 3 Barbers",
    "Made in Italy",
    "Magpie",
    "Maiden Castle",
    "Maiden Castle & Clandon Barrow walk",
    "Maiden Castle Farm",
    "Maiden Newton to Dorchester",
    "Martin Green Interiors",
    "Matthew Lucas Funeral Directors",
    "Maumbury Rings",
    "Max Gate",
    "Maxgate Properties",
    "Mayfair Town & Country",
    "MCS Laundry",
    "Mega pizza",
    "Mellstock Avenue Play Area",
    "Mellstock Poems Walk",
    "Memory Lane",
    "MeraKi Poundbury",
    "Merchant House",
    "Michael Quinn’s Traditional Family Butcher",
    "Mid Dorset Mencap Ltd.",
    "Milton Abbas and the chalk downs – Dorset Pedal",
    "Mina’s Deli",
    "Mirari Lingerie",
    "Mobile Phone Solutions",
    "Monart Spa Poundbury",
    "Moorland Express",
    "Moreton Walled Garden",
    "Mortgage Advice Bureau",
    "Mummies Exhibition",
    "Myra’s Korean and Japanese Restaurant",
    "Nana’s Loaded Wedges",
    "Nando’s",
    "Nangle Rare Books",
    "Nantes Solicitors",
    "Nationwide Building Society",
    "Naturalife Wholefoods",
    "NatWest Bank",
    "Neuropsychology Dorset",
    "New Look",
    "Nicoll World Travel",
    "No.36 Gifts & Lifestyle",
    "Notarianni Glass",
    "Odeon Cinema",
    "Old Market Car Park",
    "Oxfam",
    "Oxfords Bakery",
    "P J Aiken Insurance Services",
    "Panemorfii Nail Boutique",
    "Parkers Property Consultants & Valuers",
    "Partners in Design Ltd",
    "Partners in Wellbeing",
    "Pavillion in the Park Cafe",
    "Peacocks",
    "Pennywise",
    "Peppina Sicillian Bakery",
    "Peter Gunning & Partners LLP",
    "Phase Eight",
    "Pizza Express",
    "Plaza Cinema",
    "Pods & Pavilions",
    "Poppins Cafe",
    "Porter Dodson Solicitors & Advisors",
    "Posh Partridge",
    "Potters Cafe",
    "Poundbury",
    "Poundbury Antiques",
    "Poundbury Buttermarket EV Charge Point",
    "Poundbury Crescent Play Area",
    "Poundbury Garden Centre",
    "Poundbury Gardens",
    "Poundbury Hill Fort",
    "Poundbury Wealth Management",
    "Poundland",
    "Premier Inn",
    "Public Toilets – Borough Gardens",
    "Public Toilets – Charles Street",
    "Public Toilets – Top o’ Town",
    "Public Toilets – Trinity Street",
    "Puddletown Forest",
    "Punica",
    "Pure Beauty Salon",
    "Purple Office",
    "Rajpoot Restaurant",
    "Ratty’s Trail",
    "Redefine",
    "Relate Dorset & South Wiltshire",
    "Return of the Native Walk – Egdon Heath",
    "Robert Dyas",
    "Robin James AVEDA",
    "Roman Town House",
    "S&A Treasure Jewellery",
    "Sage and Fern Florist",
    "Salisbury Field Play Area",
    "Salvation Army Charity Shop",
    "San Telmo",
    "Sandringham Sports Centre Play Area",
    "Sarah Dale Aesthetics",
    "Sculpture By the Lakes",
    "Seasalt Cornwall",
    "Serenity Nail & Beauty",
    "Seventh Seal",
    "SGM Hair",
    "Shire Hall Cafe",
    "Shire Hall Museum",
    "Shoetrees",
    "Silva’s Barbershop",
    "Simply Stylish",
    "Skate Park",
    "SKJ Watches @ the Mews",
    "Snappy Tomato Pizza",
    "South Street",
    "South Walks",
    "Southfield Veterinary Centre",
    "Specsavers Opticians and Audiologists",
    "Sportarm",
    "Sproston & Bowden Opticians",
    "St Georges Church",
    "St Jude’s Care",
    "St Marys Church",
    "St Peters Church",
    "Stems Florist",
    "Steve Bane Fabrics",
    "Stinsford",
    "Stones & Circles walk – 7 miles",
    "Subway",
    "Sugar Shack",
    "Sunninghill Prep School",
    "SUPER TIP – Shire Hall Museum",
    "Superdrug",
    "Symonds & Sampson",
    "Symonds & Sampson Poundbury",
    "Syward Close Play Area",
    "Taste Café at Dorset Museum",
    "Teddy Bear Museum",
    "Temple Wealth Management",
    "TempleHill Property Management",
    "Terracotta Warriors Museum",
    "Tesco Superstore Dorchester EV Charge Point",
    "The Atrium Health Centre",
    "The Blue Raddle",
    "The Brownsword Hall",
    "The Casterbridge",
    "The Cellar at Kingston Maurward",
    "The Chi Zone",
    "The Co-Op",
    "The Colliton Club",
    "The Colliton Park Car Park EV Charge Point",
    "The Commercial Law Practice",
    "The Dinosaur Museum",
    "The Dorchester Artisan Market",
    "The Dorchester Physiotherapy & Sports Injury Clinic",
    "The Dorford Centre",
    "The Dorset Walk – Maiden Castle and Martinstown",
    "The Dorset Wine Company",
    "The Drawing Office",
    "The Duchess of Cornwall Inn",
    "The Florist of Poundbury",
    "The Fridge",
    "The Frome Valley Cycle Ride",
    "The Great Big Escape",
    "The Great Field",
    "The Great Park on The Great Field",
    "The Hair Depot",
    "The Hair Gallery",
    "The Hardy Way",
    "The Highbrow Skin and Laser Clinic",
    "The Horse with the Red Umbrella",
    "The Jedi Archives",
    "The Jewel House",
    "The Junction Hotel",
    "The Keep Military Museum",
    "The King and Thai",
    "The King’s Arms",
    "The Land of Bone & Stone Cycle Ride",
    "The Old Ship Inn",
    "The Old Tea House",
    "The Pet Shop",
    "The Pig Shed Cafe",
    "The Poet Laureate",
    "The Poppy Trail",
    "The Potting Shed",
    "The Rhubarb Candle Company",
    "The Rooms Poundbury",
    "The Royal Oak",
    "The Secret Garden Café",
    "The Soap Coach",
    "The Square Bistro",
    "The Sun Inn",
    "The Thomas Hardye School",
    "The Treves Trail",
    "The Trumpet Major & The Melancholy Hussar",
    "The Wooden Floor Specialists",
    "The Works",
    "Thomas Hardy",
    "Thomas Hardy Statue",
    "Thomas Hardy walk",
    "Thomas J William Hair and Beauty Design",
    "Thorncombe Wood",
    "Thorncombe Wood Walkabout 1",
    "Thorncombe Wood Walkabout 2",
    "TIP – A-Line Taxi",
    "TIP – Basili.co",
    "TIP – Box of Porcelain",
    "TIP – Brewery Square Concierge",
    "TIP – Jordans Jewellers",
    "TIP – Posh Partridge",
    "TIP – Potters Café",
    "TIP – Shoetrees",
    "TIP – The Horse with the Red Umbrella",
    "TIP – The Jewel House",
    "TIP – The Keep Military Museum",
    "TIP – The Olde Tea House",
    "TIP – Westwood House",
    "Tom Browns",
    "Toni & Guy",
    "Top o’ Town",
    "Top O’ Town Car Park (Short & Long stay)",
    "Top O’Town Barbers",
    "Tout’s Pharmacy",
    "Town Pump & Cornhill",
    "Toymaster",
    "Trinity Club",
    "Trinity corner convenience store",
    "Trinity Street",
    "Trinity Street Car Park (Southern section)",
    "Trinity Street Car Park EV Charge Point",
    "Trumpet Major",
    "Tutankhamun Exhibition",
    "U-Drive",
    "United Artisans Ltd",
    "United Church Dorchester",
    "Vibes",
    "Vinyl Van",
    "Vision Express",
    "Vivo Lounge",
    "Vodafone",
    "Voyager Cleaning",
    "Wagamama",
    "Waitrose",
    "Waitrose Poundbury",
    "Walk to Hardys Cottage",
    "Walnut Grove",
    "Warmer Home Improvements",
    "Water Refill Point",
    "Waterstones",
    "Wedding Time Bridal Salon and Men’s Formalwear",
    "Weldmar Hospicecare Charity Book shop",
    "Weldmar Hospicecare Charity Shop",
    "Wessex Photo",
    "Wessex Royale Hotel",
    "West Dorset Walks – Cerne Valley Walk",
    "West Dorset Walks – Dorchester to Weymouth Trail",
    "West Stafford",
    "Westwood House",
    "WH Smith",
    "White Stuff",
    "William Barnes",
    "Wise Owl Toys",
    "Wollaston Field Car Park",
    "Wollaston Field EV Charge Point",
    "Woodlanders Walk",
    "Woodlands Crescent Play Area",
    "Woods Furniture",
    "Woods Furniture Brewery Square",
    "Yalbury Cottage",
    "YARD",
    "YC’S Cafe Wine Bar",
    "Zizi"
]

export default places;
