// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      heroTitle: 'Plan Every Part of Your Journey',
      heroSubtitle: 'Book flights, houseboats, hotels, transportation and experiences all in one place. Your complete travel solution for seamless trip planning.',
      houseboats: 'Houseboats',
      shikara: 'Shikara Boats',
      flights: 'Flights',
      hotels: 'Hotels',
      trains: 'Trains',
      buses: 'Buses',
      cars: 'Car Rentals',
      tours: 'Tours',
      cruises: 'Cruises',
      activities: 'Activities',
      packages: 'Holiday Packages',
      weekend: 'Weekend Getaways',
      beaches: 'Beach Stays',
      mountains: 'Mountain Trips',
      adventure: 'Adventure',
      citybreaks: 'City Breaks',
      photography: 'Photo Tours',
      insurance: 'Travel Insurance',
      passes: 'City Passes',
      budget: 'Budget Stays',
      bikes: 'Bike Rentals',
      villas: 'Villas & Home Stays',
      todaysDeals: "Today's Hot Deals For Your Budget",
      exploreDestinations: 'Explore Destinations',      
      food: 'Food Order Online',
      seaFishRestaurants: 'Sea Fish Restaurants',
      backwaterVillageStay: 'Backwater Village Stay',
      keralaChipsAndSpices: 'Kerala Chips & Spices',
      keralaHandlooms: 'Kerala Handlooms',      
      honeymoonBoatHouse: 'Honeymoon Boat House',
      houseboats: 'Houseboats',
      noHouseboatsFound: 'No houseboats found matching your search.',

      budgetTravelDeals: 'Budget Travel Deals For You',
      offerHotels: 'Hotels',
      offerHouseboatsDayNightCruise: 'Houseboats in Alleppey day and night cruise',
      offerHouseboatsDayNight1Bedroom: 'Houseboats in Alleppey day and night 1 bedroom',
      offerHouseboatsDayCruise1BedroomUpperDeck: 'Houseboats in Alappuzha day cruise 1 bedroom upper deck private',
      offerKeralaHoneymoonHouseboat: 'Kerala honeymoon houseboat',
      offerHouseboatDayNight1BedroomUpperDeck: 'Houseboat in Alleppey day and night 1 bedroom upper deck private houseboat',
      offerHouseboatsAlleppeyDayTripUpperDeck: 'Houseboats in Alleppey day trip upper deck houseboat',
      offerHouseboatsB2BPrice1Bedroom: 'Houseboats in Alleppey b2b price for 1 bedroom',
      offerSharingHouseboats2People: 'Sharing houseboats in Alleppey 2 people price',
      offerUltraPremiumHouseboats: 'Ultra premium houseboats in Alleppey',
      offerKeralaTourBudgetPackages: 'Kerala tour budget packages',
      offerKeralaBoating: 'Kerala Boating',
      offerB2BTravelDealsKeralaHouseboat: 'B2B price travel deals for - kerala house boat packages',
      offerPetalsFlowers: "Petals flower's",
      offerOrchidForSale: 'Orchid for sale - orchid flowering plants',
      offerOxidisedOrnaments: 'Oxidised Ornaments',
      offerKeralaHandloomsSarees: 'Kerala Handlooms - kerala kasavu sarees',
      offerKeralaHandicrafts: 'Kerala handicrafts',
      offerKeralaChips: 'kerala chips - kerala banana chips',
      offerKeralaSpices: 'Kerala Spices',
      offerDriedFish: 'Dried fish',
      offerKeralaRealEstate: 'Kerala Real Estate',
      offerKeralaLottery: 'Kerala lottery tickets - kerala bumper lottery tickets',
      offerKeralaHomeDecor: 'Kerala Home Decor',
      offerTransportationInKerala: 'Transportation in Kerala',
      offerKeralaCoirProducts: 'Kerala Coir Products',
      whyChooseTitle: 'Why Choose Tourism Paradise',
      whyChooseSubtitle: 'We make travel planning effortless with our comprehensive services and expert guidance',
      showLess: 'Show Less',
      showMore: 'Show More'
      
    },
    featureList: {
      pilgrimPackages: 'Best Pilgrim Packages',
      pilgrimDescription: 'Thoughtfully curated pilgrimage tours to sacred destinations for a serene spiritual journey.',
      industrialTitle: "Industrial consultancy service & labour's supplier",
      industrialShortDesc: 'From project reports and financial guidance to supplying skilled labour like engineers, technicians, and construction contractors, we cover all your industrial and business needs.',
      industrialFullDesc: "Project report preparing, financial guidence, construction supervising , plan and estimate preparing, industry and hotels machineries , construction labours and contractors, electric, plumbing, airconditioner, construction, home appliances, fridge, washing machine, air conditioner, automobile , automotive, computer, mobile phone, cellular phone, lift operator, home decor, jewellery and ornaments, coffee and snacks maker, maison, carpenter, welder, machinery installation, painter, cleaning, hotels, driver, aluminium fabrication, steel fabrications, house servants, gardening work, hevi vehicles & machineries operators , Website design and hosting, solar power system installation home services, lab technicians, engineers and doctors, teachers, loundry, house keeping Etc",
      educationTitle: 'Education consultancy service',
      educationDescription: 'Engineering, medical College, agriculture, computer AI, LLB, MBA, BBA, MCA, LAB Technicians, Physiotherapy, Dental, Ayurvedic Etc',
      legalTitle: 'Advocate & lawyers',
      legalDescription: 'Access to professional legal advice and services from experienced advocates and lawyers.',
    },
    testimonials: {
      "sectionTitle": "What Our Travelers Say",
      "sectionSubtitle": "Real experiences from thousands of satisfied customers",
      "quoteOpen": "\"",
      "indicatorAria": "Show testimonial {{index}}",

      "person1": {
        "name": "Sarah Johnson",
        "location": "New York, USA",
        "text": "Absolutely amazing experience! The team at Tourism Paradise planned our honeymoon perfectly. Every detail was taken care of, and we had the most romantic trip to the backwaters of Kerala.",
        "trip": "Kerala Backwaters Honeymoon"
      },

      "person2": {
        "name": "Michael Chen",
        "location": "Toronto, Canada",
        "text": "Professional service and incredible attention to detail. Our family trip to Kerala was flawless thanks to their expert planning and local knowledge of the region, including the beaches and hill stations.",
        "trip": "Kerala Family Adventure"
      },

      "person3": {
        "name": "Emily Rodriguez",
        "location": "Barcelona, Spain",
        "text": "I travel frequently for work, but this leisure trip organized by Tourism Paradise was exceptional. The personalized itinerary and support for my Ayurveda retreat in Kerala made it stress-free.",
        "trip": "Kerala Solo Retreat"
      }
    },
    houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: 'Houseboats Hotels In Alleppey Alappuzha Kerala',
      houseboatsHotelsInMunnar: 'Houseboats Hotels In Munnar',
      houseboatsHotelsInCochin: 'Houseboats hotels In Cochin',
      houseboatsHotelsInKumarakomLake: 'Houseboats Hotels In Kumarakom Lake',
      houseboatsHotelsInKottayam: 'Houseboats Hotels In Kottayam',
      houseboatsHotelsInAlleppey: 'Houseboats Hotels In Alleppey',
      houseboatsHotelsInChottanikara: 'Houseboats Hotels In Chottanikara',
      houseboatsHotelsInThiruvananthapuram: 'Houseboats Hotels In Thiruvananthapuram',
      houseboatsHotelsInKovalamBeach: 'Houseboats Hotels In Kovalam Beach',
      houseboatsHotelsInThekkady: 'Houseboats Hotels In Thekkady',
      houseboatsHotelsInWayanad: 'Houseboats Hotels In wayanad',
      houseboatsHotelsInAlappuzha: 'Houseboats Hotels In Alappuzha',
      houseboatsHotelsInGuruvayur: 'Houseboats Hotels In Guruvayur',
      houseboatsHotelsInVagamon: 'Houseboats Hotels In Vagamon',
      houseboatsHotelsInAthirapillyWaterFalls: 'Houseboats Hotels In Athirapilly Water Falls',
      houseboatsHotelsInMarariBeach: 'Houseboats Hotels In Marari Beach',
      houseboatsHotelsInPoovarBeach: 'Houseboats Hotels In Poovar Beach',
      houseboatsHotelsInVarkalaBeach: 'Houseboats Hotels In Varkala Beach',
      houseboatsHotelsInAshtamudiLake: 'Houseboats Hotels In Ashtamudi Lake',
      houseboatsHotelsInKanyakumariBeach: 'Houseboats Hotels In Kanyakumari Beach',
      houseboatsHotelsInAlleppeyBeach: 'Houseboats Hotels In Alleppey Beach',
      houseboatsHotelsInAlappuzhaLake: 'Houseboats Hotels In Alappuzha Lake',
      houseboatsHotelsInIndia: 'Houseboats Hotels In india',
      houseboatsHotelsInKerala: 'Houseboats Hotels In Kerala',
      houseBoatHotelsInAlleppey: 'House Boat Hotels In Alleppey',
      boatHouseHotelsInIndia: 'Boat House Hotels In India',
      boatHouseHotelsInKerala: 'Boat House Hotels In Kerala',
      sharingHouseboatsHotelsInAlleppey: 'Sharing Houseboats Hotels In Alleppey',
      sharingBoatHouseHotelsInKerala: 'Sharing Boat House Hotels In Kerala',
      dayTripHouseboatsHotelsInAlleppey: 'Day Trip Houseboats Hotels In Alleppey',
      dayCruiseHouseboatsHotelsInAlleppey: 'Day Cruise Houseboats Hotels In Alleppey',
      fiveStarHouseboatsHotelsInAlleppey: '5 Star Houseboats Hotels In Alleppey',
      fourStarHouseboatsHotelsInAlleppey: '4 Star Houseboats Hotels In Alleppey',
      threeStarHouseboatsHotelsInAlleppey: '3 Star Houseboats Hotels In Alleppey',
      twoStarHouseboatsHotelsInAlleppey: '2 Star Houseboats Hotels In Alleppey',
      budgetHouseboatsHotelsInAlleppey: 'Budget Houseboats Hotels In Alleppey',
      standardBoatHouseHotelsInAlleppey: 'Standard Boat House Hotels In Alleppey'
    }
    ,
    destinationOffers: {
      1: {
        title: "Hotels",
        description: "Wildlife/Forest Areas & Related Activities:  • Periyar Wildlife Sanctuary (or Periyar Tiger Reserve) • Kerala Forest Areas • Trekking Areas • Mountain Areas • Elephant Interaction/Viewing (Commonly offered as Elephant Safari, Elephant Ride, or seen in the wild/sanctuaries. In festivals, it's an Elephant Procession or Gajamela)."
      },

      2: {
        title: "Houseboats in Alleppey day and night cruise",
        description: "Houseboats Hotels in Alleppey, 1/2/3...22 bedroom houseboats in Alappuzha, one/two/three...twenty two bed rooms Boathouse in Alleppey, premium and luxury day and night stay houseboats in Kerala, budget Boathouse in Alleppey, muhama boat jetty, nehru trophy boat race, starting point Alappuzha, finishing point Alleppey, house boat route area, kannankara boat tour area. 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 bedroom houseboats in Alappuzha, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen nineteen, twenty one, twenty two bed rooms Boathouse in Alleppey, premium and luxury day and night stay houseboats in Kerala."
      },

      3: {
        title: "Houseboats in Alleppey day and night 1 bedroom",
        description: "homestay in Alleppey backwater, Alappuzha village stay, apartments in pallathuruthi, Villa in Alleppey town, jungle tree house, island backwaters resorts in Kerala, Lake frontage properties, beach frontage property. 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 bedroom houseboats in Alappuzha, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen nineteen, twenty one, twenty two bed rooms Boathouse in Alleppey, premium and luxury day and night stay houseboats in Kerala."
      },

      4: {
        title: "Houseboats in Alappuzha day cruise 1 bedroom upper deck private",
        description: "Houseboats Hotels in Alleppey, 1/2/3...22 bedroom houseboats in Alappuzha, one/two/three...twenty two bed rooms Boathouse in Alleppey, premium and luxury day and night stay houseboats in Kerala, budget Boathouse in Alleppey, muhama boat jetty, nehru trophy boat race, starting point Alappuzha, finishing point Alleppey, house boat route area, kannankara boat tour area 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 bedroom houseboats in Alappuzha, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen nineteen, twenty one, twenty two bed rooms Boathouse in Alleppey, premium and luxury day and night stay houseboats in Kerala."
      },

      5: {
        title: "Kerala honeymoon houseboat",
        description: "A honeymoon cottage on an Alappuzha houseboat is a private, romantically decorated boat with luxury amenities like air-conditioned bedrooms, private bathrooms, and scenic decks. It typically includes onboard meals, often with special arrangements like candlelit dinners and flower-decorated beds, and offers a secluded and exclusive experience for couples traveling through Kerala's backwaters."
      },

      6: {
        title: "Houseboat in Alleppey day and night 1 bedroom upper deck private houseboat",
        description: "homestay in Alleppey backwater, Alappuzha village stay, apartments in pallathuruthi, Villa in Alleppey town, jungle tree house, island backwaters resorts in Kerala, Lake frontage properties, beach frontage property. 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 bedroom houseboats in Alappuzha, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen nineteen, twenty one, twenty two bed rooms Boathouse in Alleppey, premium and luxury day and night stay houseboats in Kerala."
      },

      7: {
        title: "Houseboats in Alleppey day and night 1 bedroom upper deck private houseboat",
        description: "Alleppey (Alappuzha), kumarakom, kollam, Ashtamudi Lake, kovalam, Varkala, cherai beach, marari Beach, Kainakari village area, Punnamada, aryad village area, kerala backwaters area. 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 bedroom houseboats in Alappuzha, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen nineteen, twenty one, twenty two bed rooms Boathouse in Alleppey, premium and luxury day and night stay houseboats in Kerala."
      },

      8: {
        title: "Houseboats in Alleppey day trip upper deck houseboat",
        description: "Kainakari village area, Punnamada, aryad village area, apartments in pallathuruthi, muhama boat jetty 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 bedroom houseboats in Alappuzha, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen nineteen, twenty one, twenty two bed rooms Boathouse in Alleppey, premium and luxury day and night stay houseboats in Kerala."
      },

      9: {
        title: "Houseboats in Alleppey b2b price for 1 bedroom",
        description: "We avail them in deluxe, premium and luxury categories  There are 2 types of 1 Bedroom houseboats in Alleppey  with upper deck and without upper deck. There are advantages to both. The former type, with an upper deck , offers you a better view of the route through which it cruises."
      },

      10: {
        title: "Sharing houseboats in Alleppey 2 people price",
        description: "Discover the magic of Kerala’s backwaters with our budget-friendly shared houseboat in Alleppey. Ideal for couples or travel buddies, this 1-night cruise includes cozy accommodation, authentic Kerala meals, and scenic views. Enjoy the tranquil waters, lush landscapes, and warm hospitality without breaking the bank. Advance booking recommended for best rates!"
      },

      11: {
        title: "Ultra premium houseboats in Alleppey",
        description: "Ultra premium houseboats in Alleppey. •  Types: Houseboats are generally categorized as Deluxe, Premium, Luxury, and Ultra Luxury.•  Bedrooms: Houseboats are available from 1 to over 22 bedrooms (e.g., 1, 2, 3, 4, 5, 6-bedroom houseboats), accommodating couples, families, and large groups. Finding houseboats with 22 bedrooms might require booking multiple large boats or a very specific, rare vessel, as typical large boats range up to 10-12 bedrooms.•  Stay: They offer both Day Cruises and Day and Night (Overnight) stays.•  Budget: Budget/Cheapest Houseboats (often Deluxe or shared boats) (prices can vary greatly based on season, availability, and category). Premium and Luxury houseboats are significantly higher.•  Backwater Areas: Popular locations include Alleppey Backwaters, Punnamada, Kainakari village, Aryad village, and Muhama boat jetty."
      },

      12: {
        title: "Kerala tour budget packages",
        description: "munnar, thekkady, periyar wildlife, wayanad, vagamon, ponmudi, Idukki, devikulam, kuttikanam, vattavada, kanthalloor, mountain area, kerala forest area, elefent Walk in Kerala, trekking area."
      },

      13: {
        title: "Kerala Boating",
        description: "Embark on a serene boating journey through Kerala’s enchanting backwaters. Whether you're gliding past lush paddy fields or drifting through tranquil village canals, our Kerala boating packages offer a peaceful retreat into nature. Perfect for couples, families, or solo travelers, enjoy traditional wooden boats, authentic Kerala meals, and the gentle rhythm of life on water. Starting at just ₹1,999 per person!"
      },

      14: {
        title: "B2B price travel deals for - kerala house boat packages",
        description: "Houseboats Hotels in Alleppey, 1/2/3...22 bedroom houseboats in Alappuzha, one/two/three...twenty two bed rooms Boathouse in Alleppey, premium and luxury day and night stay houseboats in Kerala, budget Boathouse in Alleppey, muhama boat jetty, nehru trophy boat race, starting point Alappuzha, finishing point Alleppey, house boat route area, kannankara boat tour area."
      },

      15: {
        title: "Petals flower's",
        description: "Welcome to Petals Flowers, your trusted destination for premium flowering plants in Kerala. Specializing in exotic orchids, we offer a vibrant selection perfect for home décor, gifting, and garden enthusiasts. Each plant is carefully nurtured to ensure healthy blooms and lasting beauty. Whether you're looking for a single orchid or bulk floral arrangements, Petals Flowers brings nature’s elegance to your doorstep."
      },

      16: {
        title: "Orchid for sale - orchid flowering plants",
        description: "Bring home the elegance of tropical blooms with our vibrant orchid flowering plants. Available in stunning varieties like Phalaenopsis and Vanda, these orchids feature vivid colors, unique patterns, and long-lasting flowers. Perfect for indoor décor, gifting, or garden display, each plant is easy to care for and thrives in indirect light. Starting at just ₹399, elevate your space with nature’s finest artistry."
      },

      17: {
        title: "Oxidised Ornaments",
        description: "Kerala's oxidized jewelry is characterized by its dark, antique-like finish, achieved by intentionally oxidizing metals like silver or brass. These pieces, which are popular for their unique aesthetic and affordability, come in both traditional Kerala designs and more contemporary styles. They are often used with ethnic wear like sarees, but also pair well with modern outfits due to their versatility. Common styles include intricate necklaces, statement earrings, and matching jewelry sets."
      },

      18: {
        title: "Kerala Handlooms - kerala kasavu sarees",
        description: "Kerala Handloom Silk, Kerala Kasavu Sarees, Kasavu Churidar meterials in Kerala, Kerala Handloom Shirts."
      },

      19: {
        title: "Kerala handicrafts",
        description: "Kerala's handicrafts are diverse, reflecting the state's rich culture and artistic tradition through items made from materials like wood, metal, coir, and coconut shell. Key examples include intricate wood carvings, bell metal products, decorative coir mats, and products made from coconut shells like bowls and toys. Other notable crafts are vibrant Kathakali masks, the elaborate elephant headgear called Nettipattam, and unique Aranmula metal mirrors."
      },

      20: {
        title: "kerala chips - kerala banana chips",
        description: "Kerala chips, nendran chips in Kerala, jackfruit chips in Kerala."
      },

      21: {
        title: "Kerala Spices",
        description: "Premium quality Kerala spices including cardamom, black pepper, cinnamon, cloves, and nutmeg sourced directly from organic farms in the Western Ghats."
      },

      22: {
        title: "Dried fish",
        description: "Premium export-quality dried freshwater prawns from Ashtamudi Lake, hygienically sun-dried without salt. Medium-large sized shrimps perfect for masala, gravy, and chutney."
      },

      23: {
        title: "Kerala Real Estate",
        description: "4 BHK independent house (3200 sq.ft) in prime location. Buy, sell, and rent properties including villas, land, houses, and flats across Kerala."
      },

      24: {
        title: "Kerala lottery tickets - kerala bumper lottery tickets",
        description: "Official Kerala State Lottery tickets with weekly draws. Win Win, Sthree Sakthi, Fifty Fifty, and Karunya lotteries. First prizes up to ₹1 Crore."
      },

      25: {
        title: "Kerala Home Decor",
        description: "Kerala Home Decor, Kerala Coir Products"
      },

      26: {
        title: "Transportation in Kerala",
        description: "Guruvayur, Athirapilly Water Falls, vazhachal water falls, arthunkal Basilica, fort Cochin, neeleswaram, thenmala Eco spot.Guruvayur, Padmanabhaswami temple, chottanikara temple, arthunkal Basilica, Sabarimala temple, nilackal to pampa kanyakumari, Ooty, kodaikanal, Kuttalam (Kutralam/courtalam water falls), palani, Goa, Maharashtra tourism, karnataka tourism area, bangalore, tamilnadu, chennai, madurai, ramesvaram, coimbatore, Valparai, thakala Kainakari village area, Punnamada, aryad village area, apartments in pallathuruthi, muhama boat jetty"
      },

      27: {
        title: "Kerala Coir Products",
        description: "The eco-friendly and biodegradable nature of coir makes it suitable for sustainable development initiatives, aligning with Kerala’s vision for an environmentally responsible economy. Overall, Kerala coir products combine natural utility, cultural heritage, and commercial viability, making them prominent in both local and international markets."
      },

      28: {
        title: "Food Order Online",
        description: "Experience the convenience of ordering food online in Kerala. From authentic local Kerala cuisine to international dishes, satisfy your cravings with just a few clicks. Whether you are in Cochin, Trivandrum, Kozhikode, or anywhere else in Kerala, your favorite meals are now just a doorstep away."
      }
    }

    ,
    destinationFeed: {
      loadingMore: 'Loading more offers...',
      inquiryTitle: 'Have Questions? Get in Touch!',
      inquirySubtitle: 'Send us your inquiry and our team will get back to you within 24 hours',
      yourName: 'Your Name *',
      yourEmail: 'Your Email *',
      phoneNumber: 'Phone Number',
      subject: 'Subject',
      yourMessage: 'Your Message *',
      sendInquiry: 'Send Inquiry',
      scrollToInquiryAria: 'Scroll to inquiry form',
      "bookViaWhatsapp": "Enquiry via WhatsApp"
    },
    footer: {
      description: 'Your trusted travel companion for unforgettable journeys. Creating memories that last a lifetime.',
      destinations: {
        title: 'Destinations',
        keralaBudgetHouseboat: 'Kerala Budget Houseboat',
        luxuryTopEndHouseboat: 'Luxury Top End Houseboat',
        b2bPriceKeralaHouseboats: 'B2b Price Kerala Houseboats',
        houseboatsInAlappuzha: 'Houseboats in Alappuzha',
        budgetBoatHouseAllepey: 'Budget Boat House Allepey',
        budgetBoatHouseAlappuzha: 'Budget Boat House Alappuzha',
        budgetHouseboatAllepey: 'Budget Houseboat Allepey',
        budgetHouseboatAlappuzha: 'Budget Houseboat Alappuzha',
        budgetAlleppeyBoatHouse: 'Budget Alleppey Boat House',
        spotBookingBoatHouse: 'Spot Booking Boat House',
        prepaidTaxiCochinAirport: 'Prepaid Taxi Service in Cochin Airport',
        budgetAlappuzhaHouseboats: 'Budget Alappuzha Houseboats',
        budgetAlleppeyHouseboats: 'Budget Alleppey Houseboats',
        b2bAlleppeyHouseboats: 'B2b Alleppey Houseboats',
        privateAlleppeyHouseboats: 'Private Alleppey Houseboats',
        houseboatsInIndia: 'Houseboats in India',
        sharedHouseboatsInAlleppey: 'Shared houseboats In Alleppey',
        sharingHouseboatsInAlleppey: 'Sharing Houseboats In Alleppey',
        sharingBoathouseInAlleppey: 'Sharing Boathouse In Alleppey',
        clubbingHouseboatsInAlleppey: 'Clubbing Houseboats In Alleppey',
        clubbingBoathouseInAlleppey: 'Clubbing Boathouse In Alleppey',
        luxuryHouseboatsInAlleppey: 'Luxury Houseboats In Alleppey',
        premiumHouseboatsInAlleppey: 'Premium Houseboats In Alleppey',
        deluxeHouseboatsInAlleppey: 'Deluxe Houseboats In Alleppey',
        standardHouseboatsInAlleppey: 'Standard Houseboats In Alleppey',
        ultraLuxuryHouseboatsInAlleppey: 'Ultra Luxury Houseboats In Alleppey',
        ultraLuxurySharingHouseboatsInAlleppey: 'Ultra Luxury Sharing Houseboats In Alleppey',
        bestHouseboatsInAlleppey: 'Best Houseboats In Alleppey',
        bestLuxuryHouseboatsInAlleppey: 'Best Luxury Houseboats In Alleppey',
        bestPremiumHouseboatsInAlleppey: 'Best Premium Houseboats In Alleppey',
        bestDeluxeHouseboatsInAlleppey: 'Best Deluxe Houseboats In Alleppey',
        bestStandardHouseboatsInAlleppey: 'Best Standard Houseboats In Alleppey',
        bestAlappuzhaHouseboatPackages: 'Best Alappuzha Houseboat Packages',
        bestAlappuzhaBoatHousePackages: 'Best Alappuzha Boat House Packages'
      },
      services: { title: 'Services', flightBooking: 'Flight Booking', hotelReservation: 'Hotel Reservation', tourPackages: 'Tour Packages' },
      company: { title: 'Company', aboutUs: 'About Us', contact: 'Contact' },
      support: { title: 'Support', helpCenter: 'Help Center', terms: 'Terms of Service', privacy: 'Privacy Policy', refund: 'Refund Policy', faq: 'FAQ' },
      copyright: '© {{year}} Tourism Paradise. All rights reserved.'
    }
    ,
    popularDestinations: {
      title: 'Explore more destinations in India',
      subtitle: 'Find things to do in cities across different states',
      thingsToDo: 'things to do',
      comingSoonTitle: 'Coming Soon!',
      comingSoonDescription: "We're adding amazing destinations in {{continent}}. Check back soon!",
      northIndia: 'North Indian Destinations',
      southIndia: 'South Indian Destinations',
      eastIndia: 'East & Northeast Indian Destinations',
      centralIndia: 'Central Indian Destinations',
      delhi: {
        name: 'Delhi',
        country: 'Delhi',
        history: 'Delhi, the capital of India, has a rich history spanning over 2,000 years. The city is dotted with spellbinding mosques, forts, and monuments left over from the Mughal rulers. From the majestic Red Fort to the iconic India Gate, Delhi blends ancient heritage with modern infrastructure, making it a must-visit destination.'
      },
      jaipur: {
        name: 'Jaipur',
        country: 'Rajasthan',
        history: "Known as the Pink City, Jaipur is the capital of Rajasthan and part of India's Golden Triangle. Founded in 1727, the city is famous for its royal palaces, magnificent forts like Amber Fort, Hawa Mahal, and vibrant bazaars. Jaipur showcases the grandeur of Rajput architecture and culture."
      },
      agra: {
        name: 'Agra',
        country: 'Uttar Pradesh',
        history: "Home to the magnificent Taj Mahal, one of the Seven Wonders of the World, Agra was the capital of the Mughal Empire from 1556 to 1658. The city features stunning Mughal architecture including Agra Fort and Fatehpur Sikri, showcasing the zenith of Mughal artistic achievement."
      },
      varanasi: {
        name: 'Varanasi',
        country: 'Uttar Pradesh',
        history: 'One of the oldest continuously inhabited cities in the world, Varanasi is a major religious hub for Hindus. Located on the banks of the sacred Ganges River, the city is known for its ghats, ancient temples, and spiritual significance. Mark Twain once said, "Benares is older than history, older than tradition, older even than legend."'
      },
      amritsar: {
        name: 'Amritsar',
        country: 'Punjab',
        history: "Founded in 1577 by Guru Ram Das, Amritsar is home to the Golden Temple, the holiest shrine of Sikhism. The city witnessed the tragic Jallianwala Bagh massacre in 1919 and stands as a symbol of Sikh heritage, spirituality, and resilience. The Wagah Border ceremony is a major attraction."
      },
      manali: {
        name: 'Manali',
        country: 'Himachal Pradesh',
        history: "Nestled in the Himalayas at an altitude of 2,050 meters, Manali is a popular hill station known for its scenic beauty, adventure sports, and ancient Hadimba Temple. The valley offers breathtaking views of snow-capped peaks, apple orchards, and serves as a gateway to Rohtang Pass and Solang Valley."
      },
      leh: {
        name: 'Leh',
        country: 'Ladakh',
        history: "The capital of Ladakh, Leh sits at 3,500 meters and was once a major stop on the ancient Silk Route. Known for its stark, dramatic landscapes, Buddhist monasteries, and high-altitude lakes like Pangong Tso, Leh offers a unique blend of Tibetan culture and breathtaking Himalayan scenery."
      },
      rishikesh: {
        name: 'Rishikesh',
        country: 'Uttarakhand',
        history: "Known as the Yoga Capital of the World, Rishikesh is a spiritual town on the banks of the Ganges. Famous for its ashrams, yoga centers, and the iconic Laxman Jhula bridge, the city attracts spiritual seekers and adventure enthusiasts alike. The Beatles' 1968 visit made it internationally famous."
      },
      udaipur: {
        name: 'Udaipur',
        country: 'Rajasthan',
        history: "Called the City of Lakes and the Venice of the East, Udaipur was founded in 1559 by Maharana Udai Singh II. The city features stunning palaces like the City Palace and Lake Palace, beautiful lakes like Pichola and Fateh Sagar, and exemplifies romantic Rajasthani architecture."
      },
      shimla: {
        name: 'Shimla',
        country: 'Himachal Pradesh',
        history: "The former summer capital of British India, Shimla retains colonial charm with Victorian architecture, including the Viceregal Lodge and Christ Church. Located in the foothills of the Himalayas, it offers panoramic mountain views, the famous Mall Road, and the UNESCO-listed Kalka-Shimla Railway."
      },
      mussoorie: {
        name: 'Mussoorie',
        country: 'Uttarakhand',
        history: "Known as the Queen of Hills, Mussoorie is a charming hill station established by the British in 1826. Situated at 2,005 meters, it offers views of the Doon Valley and Himalayan ranges. Gun Hill, Kempty Falls, and Camel's Back Road are popular attractions in this colonial-era retreat."
      },
      srinagar: {
        name: 'Srinagar',
        country: 'Jammu & Kashmir',
        history: 'The summer capital of Jammu and Kashmir, Srinagar is famous for its Dal Lake, Mughal gardens like Shalimar Bagh and Nishat Bagh, and traditional houseboats. The city\'s beauty has inspired poets and travelers for centuries, earning it the title "Paradise on Earth."'
      },
      jaisalmer: {
        name: 'Jaisalmer',
        country: 'Rajasthan',
        history: "The Golden City rises from the Thar Desert with its yellow sandstone fort and havelis. Founded in 1156, Jaisalmer was a major trade center on the camel caravan routes. The living Jaisalmer Fort, Sam Sand Dunes, and intricately carved havelis showcase Rajput architecture at its finest."
      },
      nainital: {
        name: 'Nainital',
        country: 'Uttarakhand',
        history: "Built around the beautiful Naini Lake at 2,084 meters, Nainital was developed as a hill station by the British in 1841. The pear-shaped lake, surrounded by seven hills, creates a serene atmosphere. Naina Devi Temple, Snow View Point, and boating on the lake are major attractions."
      },
      vrindavan: {
        name: 'Vrindavan',
        country: 'Uttar Pradesh',
        history: "One of the holiest cities in Hinduism, Vrindavan is where Lord Krishna is believed to have spent his childhood. With over 5,000 temples including the famous Banke Bihari Temple and ISKCON Temple, the city is a major pilgrimage site and celebrates Holi with unmatched fervor."
      },
      haridwar: {
        name: 'Haridwar',
        country: 'Uttarakhand',
        history: "One of the seven holiest places in Hinduism, Haridwar is where the Ganges River enters the plains. The city hosts the Kumbh Mela every 12 years, attracting millions of pilgrims. The evening Ganga Aarti at Har Ki Pauri ghat is a mesmerizing spiritual experience that has been performed for centuries."
      },
      mumbai: {
        name: 'Mumbai',
        country: 'Maharashtra',
        history: "India's financial capital and the city of dreams, Mumbai was originally seven islands given to Britain as part of Catherine of Braganza's dowry in 1661. The city houses the Gateway of India, Marine Drive, Bollywood film industry, and reflects a unique blend of colonial architecture and modern skyscrapers."
      },
      bengaluru: {
        name: 'Bengaluru',
        country: 'Karnataka',
        history: "Known as the Silicon Valley of India and the Garden City, Bengaluru was founded by Kempe Gowda in 1537. The city combines IT prowess with heritage sites like Bangalore Palace, Tipu Sultan's Summer Palace, and beautiful parks including Lalbagh Botanical Garden and Cubbon Park."
      },
      goa: {
        name: 'Goa',
        country: 'Goa',
        history: "A former Portuguese colony until 1961, Goa is India's smallest state known for stunning beaches, vibrant nightlife, and colonial architecture. The Basilica of Bom Jesus, Se Cathedral, and Fort Aguada showcase Portuguese heritage, while beaches like Baga and Palolem attract tourists worldwide."
      },
      kerala: {
        name: 'Kerala',
        country: 'Kerala',
        history: 'Called "God\'s Own Country," Kerala is famous for its backwaters, Ayurvedic treatments, and lush green landscapes. The state has a rich history of trade with Romans, Arabs, and Europeans. Kerala\'s unique culture includes Kathakali dance, snake boat races, and traditional cuisine featuring coconut and spices.'
      },
      hyderabad: {
        name: 'Hyderabad',
        country: 'Telangana',
        history: "Founded in 1591 by Muhammad Quli Qutb Shah, Hyderabad is known for its rich history, biryani, and pearl trade. The iconic Charminar, Golconda Fort, and Qutb Shahi tombs represent the city's Nizami heritage. Now a major IT hub, it beautifully balances tradition and modernity."
      },
      chennai: {
        name: 'Chennai',
        country: 'Tamil Nadu',
        history: "Formerly Madras, Chennai is the capital of Tamil Nadu and gateway to South Indian culture. Founded by the British in 1639, the city features Marina Beach (world's second-longest urban beach), Kapaleeshwarar Temple, Fort St. George, and is renowned for classical Carnatic music and Bharatanatyam dance."
      },
      kochi: {
        name: 'Kochi',
        country: 'Kerala',
        history: "The Queen of the Arabian Sea, Kochi (Cochin) has been a major spice trading center since ancient times. The city showcases a blend of Portuguese, Dutch, and British colonial influences with attractions like Fort Kochi, Chinese fishing nets, Mattancherry Palace, and the oldest European church in India."
      },
    mysuru: {
      name: 'Mysuru',
      history: 'The cultural capital of Karnataka, Mysuru (Mysore) served as the capital of the Wodeyar dynasty. The magnificent Mysore Palace, illuminated with 100,000 lights during Dasara festival, showcases Indo-Saracenic architecture. The city is famous for silk sarees, sandalwood products, and yoga.'
    },
    madurai: {
      name: 'Madurai',
      history: "One of India's oldest cities, Madurai dates back to 3rd century BCE. The Meenakshi Amman Temple, with its towering gopurams covered in thousands of colorful sculptures, is an architectural marvel. The city was a major center of Tamil learning and culture during the Sangam period."
    },
    alleppey: {
      name: 'Alleppey',
      history: "Known as the Venice of the East, Alappuzha (Alleppey) is famous for its network of backwaters, canals, and lagoons. The traditional houseboat cruises through palm-fringed waterways offer a unique glimpse into Kerala village life. The Nehru Trophy Boat Race held annually is a spectacular event."
    },
    ooty: {
      name: 'Ooty',
      history: 'The Queen of Hill Stations, Udhagamandalam (Ooty) was established by the British as a summer retreat. Located in the Nilgiri Hills at 2,240 meters, it features colonial architecture, the UNESCO heritage Nilgiri Mountain Railway, botanical gardens, and tea plantations with stunning valley views.'
    },
    coorg: {
      name: 'Coorg',
      history: "Known as the Scotland of India, Kodagu (Coorg) is a hill district famous for coffee plantations, misty mountains, and unique Kodava culture. The region has a martial tradition and was ruled by the Kodava chieftains before British annexation in 1834. Abbey Falls and Raja's Seat are popular attractions."
    },
    hampi: {
      name: 'Hampi',
      history: 'A UNESCO World Heritage Site, Hampi was the capital of the Vijayanagara Empire (1336-1565), one of the greatest Hindu kingdoms. The ruins spread over 4,100 hectares include temples, royal structures, and marketplaces, showcasing stunning Dravidian architecture amidst a surreal boulder-strewn landscape.'
    },
    pondicherry: {
      name: 'Pondicherry',
      history: 'A former French colony until 1954, Pondicherry retains strong Gallic influences in its architecture, cuisine, and culture. The French Quarter with its colonial buildings, tree-lined boulevards, Aurobindo Ashram, and Auroville (experimental township) make it a unique blend of East and West.'
    },
    visakhapatnam: {
      name: 'Visakhapatnam',
      history: "The City of Destiny and Jewel of the East Coast, Visakhapatnam (Vizag) is a major port city with pristine beaches, hills, and valleys. The ancient Simhachalam Temple, Borra Caves (million-year-old stalactite formations), and INS Kursura Submarine Museum showcase the city's diverse attractions."
    },
    tirupati: {
      name: 'Tirupati',
      history: "Home to the sacred Tirumala Venkateswara Temple, one of the world's most visited pilgrimage sites, Tirupati receives millions of devotees annually. The temple's origins date back to ancient times, with architecture spanning several dynasties. The deity Lord Venkateswara is believed to grant wishes to devotees."
    },
    kolkata: {
      name: 'Kolkata',
      history: 'The City of Joy and former capital of British India, Kolkata is a cultural and intellectual hub. Founded in 1690, it features colonial architecture like Victoria Memorial and Howrah Bridge, while being the birthplace of modern Indian literature, art, and the Bengali Renaissance. Durga Puja is celebrated with unmatched grandeur.'
    },
    gangtok: {
      name: 'Gangtok',
      history: "The capital of Sikkim at 1,650 meters, Gangtok offers stunning views of Kanchenjunga, the world's third-highest peak. The city blends Tibetan Buddhist culture with modernity, featuring monasteries like Rumtek and Enchey, the MG Marg pedestrian zone, and serves as a gateway to North Sikkim's pristine valleys."
    },
    shillong: {
      name: 'Shillong',
      history: 'The Scotland of the East, Shillong was the capital of Assam until 1972 and now serves as Meghalaya\'s capital. At 1,496 meters, it features pine-covered hills, waterfalls like Elephant Falls, scenic lakes, and a vibrant music culture that earned it the title "Rock Capital of India."'
    },
    darjeeling: {
      name: 'Darjeeling',
      history: 'The Queen of the Hills, Darjeeling is world-famous for its tea plantations and the UNESCO-listed Darjeeling Himalayan Railway (Toy Train). At 2,042 meters, it offers sunrise views of Kanchenjunga from Tiger Hill, colonial-era architecture, Tibetan Buddhist monasteries, and adventure activities.'
    },
    puri: {
      name: 'Puri',
      history: 'One of the four sacred Hindu pilgrimage sites (Char Dham), Puri is home to the 12th-century Jagannath Temple. The annual Rath Yatra (chariot festival) attracts millions of devotees. Puri Beach and Konark Sun Temple (UNESCO site) nearby make it a significant spiritual and tourist destination.'
    },
    guwahati: {
      name: 'Guwahati',
      history: "The Gateway to Northeast India, Guwahati is Assam's largest city situated on the banks of the Brahmaputra River. The ancient Kamakhya Temple (Shakti Peetha) atop Nilachal Hill is a major pilgrimage site. The city serves as the commercial and educational hub of the region, ranked 4 by New York Times for 2025 destinations."
    },
    kohima: {
      name: 'Kohima',
      history: 'The capital of Nagaland at 1,444 meters, Kohima is known for the Battle of Kohima in 1944, a turning point in World War II. The Kohima War Cemetery commemorates this history. The Hornbill Festival in December showcases Naga tribal culture, traditional arts, dances, and cuisine.'
    },
    itanagar: {
      name: 'Itanagar',
      history: 'The capital of Arunachal Pradesh, Itanagar means "Fort of Bricks." The 14th-15th century Ita Fort ruins showcase historical significance. The city features the beautiful Gompa Buddha Vihar monastery, Polo Park, and serves as a gateway to explore Arunachal\'s pristine valleys, tribal villages, and monasteries.'
    },
    bhubaneswar: {
      name: 'Bhubaneswar',
      history: "The Temple City of India, Bhubaneswar has over 500 temples dating from the 6th to 13th centuries, showcasing Kalinga architecture. The Lingaraja Temple, Mukteshwar Temple, and Rajarani Temple are architectural marvels. The city balances ancient heritage with modern urban planning as Odisha's capital."
    },
    portblair: {
      name: 'Port Blair',
      history: "The capital of Andaman and Nicobar Islands, Port Blair is the gateway to India's tropical paradise. The historic Cellular Jail, used by British to exile political prisoners, now serves as a national memorial. The islands offer pristine beaches, coral reefs, and rich marine biodiversity."
    },
    pelling: {
      name: 'Pelling',
      history: "A picturesque town in West Sikkim at 2,150 meters, Pelling offers breathtaking views of Kanchenjunga. The ancient Pemayangtse Monastery and Rabdentse ruins (former Sikkim capital) showcase the region's Buddhist heritage. Skywalk and Chenrezig Statue are modern attractions complementing natural beauty."
    },
    tawang: {
      name: 'Tawang',
      history: "At 3,048 meters, Tawang is home to India's largest monastery (Tawang Monastery), founded in 1680, housing 450 monks. The birthplace of the 6th Dalai Lama, it reflects strong Tibetan Buddhist culture. Sela Pass, Madhuri Lake, and the 1962 War Memorial attract visitors to this scenic border town."
    },
    cherrapunji: {
      name: 'Cherrapunji',
      history: 'Once the wettest place on Earth, Cherrapunji (Sohra) receives heavy monsoon rainfall creating stunning waterfalls like Nohkalikai and Seven Sisters Falls. The unique living root bridges, created by the Khasi tribe using rubber tree roots, are UNESCO-listed. Mawsmai Cave offers spelunking adventures.'
    },
    imphal: {
      name: 'Imphal',
      history: "The capital of Manipur at 790 meters, Imphal played a crucial role in World War II. The Kangla Fort was the seat of Manipur's rulers for centuries. Loktak Lake, the largest freshwater lake in Northeast India with unique floating phumdis (islands), and Keibul Lamjao National Park are major attractions."
    },
    aizawl: {
      name: 'Aizawl',
      history: "The capital of Mizoram, Aizawl is perched on ridges at 1,132 meters, offering panoramic views. The city reflects Mizo culture with bamboo houses, handloom textiles, and vibrant festivals. Solomon's Temple, Mizoram State Museum, and Durtlang Hills provide insights into the region's Christian heritage and tribal traditions."
    },
    agartala: {
      name: 'Agartala',
      history: "The capital of Tripura, Agartala features the magnificent Ujjayanta Palace (now a museum) built in 1901, showcasing royal heritage. Neermahal water palace on Rudrasagar Lake and the ancient Tripura Sundari Temple reflect the region's history. The city blends Bengali and tribal cultures."
    },
    khajuraho: {
      name: 'Khajuraho',
      history: 'A UNESCO World Heritage Site, Khajuraho is renowned for its stunning medieval Hindu and Jain temples built between 950-1050 CE by the Chandela dynasty. The temples feature intricate carvings depicting various aspects of life, including erotic sculptures representing tantric traditions, showcasing exceptional artistic achievement.'
    },
    bhopal: {
      name: 'Bhopal',
      history: "The City of Lakes and capital of Madhya Pradesh, Bhopal was founded in the 11th century. It uniquely blends ancient and modern architecture, featuring Taj-ul-Masjid (one of Asia's largest mosques), Sanchi Stupa (UNESCO site), and the tragic 1984 gas tragedy memorial, while maintaining its distinctive cultural identity."
    },
    gwalior: {
      name: 'Gwalior',
      history: 'Known for its imposing hilltop fort described as "the pearl amongst fortresses in India," Gwalior has a rich history dating back to 8th century. The fort complex includes palaces, temples with intricate carvings, and Teli Ka Mandir. The city is also renowned for its contribution to Hindustani classical music.'
    },
    indore: {
      name: 'Indore',
      history: "The commercial capital of Madhya Pradesh and India's cleanest city, Indore was established by the Holkar dynasty in 1715. Rajwada Palace, Lal Bagh Palace, and the towering statue of Ahilyabai Holkar celebrate the city's royal heritage. It's famous for street food culture and vibrant markets."
    },
    orchha: {
      name: 'Orchha',
      history: 'A hidden gem founded in 1531, Orchha was the capital of the Bundela Rajput chiefs. The town features stunning palaces and temples on an island on the Betwa River. The Jahangir Mahal, Raj Mahal, and Ram Raja Temple showcase magnificent Bundela architecture frozen in time.'
    },
    ujjain: {
      name: 'Ujjain',
      history: "One of Hinduism's seven sacred cities (Sapta Puri), Ujjain hosts the Kumbh Mela every 12 years. The ancient Mahakaleshwar Temple, one of the twelve Jyotirlingas, features the only south-facing Shiva idol. Ujjain was a major mathematical and astronomical center in ancient India, home to scholars like Brahmagupta."
    },
    ranchi: {
      name: 'Ranchi',
      history: "The capital of Jharkhand, Ranchi was a summer capital during British India due to its pleasant climate. Known as the City of Waterfalls, it features Hundru, Jonha, and Dassam Falls. The city is surrounded by hills and forests, home to tribal cultures, and birthplace of legendary cricketer MS Dhoni."
    },
    daman: {
      name: 'Daman',
      history: 'A former Portuguese colony until 1961, Daman retains colonial charm with forts, churches, and beaches. The Moti Daman Fort, St. Jerome Fort, and Portuguese-style architecture reflect 450 years of Lusitanian influence. The coastal town offers a relaxed atmosphere different from mainland India.'
    },
    silvassa: {
      name: 'Silvassa',
      history: 'The capital of Dadra and Nagar Haveli, Silvassa is nestled among forests and hills. Freed from Portuguese rule in 1954, it features tribal museums showcasing Warli art, Vanganga Lake Garden, and natural parks. The town maintains tribal heritage while developing as an industrial hub.'
    },
    nagpur: {
      name: 'Nagpur',
      history: 'The Orange City and winter capital of Maharashtra, Nagpur is geographically located at the center of India. The city features Deekshabhoomi, a major Buddhist pilgrimage site where Dr. B.R. Ambedkar converted to Buddhism. Nagpur is also known for Vidarbha culture and proximity to tiger reserves.'
    },
    raipur: {
      name: 'Raipur',
      history: 'The capital of Chhattisgarh, Raipur has roots dating to 9th century CE. The city serves as the gateway to numerous ancient temples, Buddhist sites at Sirpur, and tribal villages. The Mahant Ghasidas Memorial Museum houses tribal artifacts, while modern Raipur is emerging as an educational and commercial hub.'
    },
    jabalpur: {
      name: 'Jabalpur',
      history: "Located on the banks of the Narmada River, Jabalpur is famous for the stunning Marble Rocks at Bhedaghat, where the river flows through a gorge with 100-foot-high marble cliffs. Dhuandhar Falls and ancient Gond forts reflect the city's natural beauty and historical significance as a cultural center."
    },
    pachmarhi: {
      name: 'Pachmarhi',
      history: 'The only hill station in Madhya Pradesh, Pachmarhi sits at 1,067 meters in the Satpura Range. Discovered by Captain James Forsyth in 1857, it features colonial-era architecture, ancient rock shelters with prehistoric cave paintings at Pandav Caves, waterfalls, and scenic viewpoints amidst dense forests.'
    },
    amarkantak: {
      name: 'Amarkantak',
      history: 'A sacred pilgrimage site at 1,065 meters, Amarkantak is the source of the holy Narmada and Sone rivers. The ancient Narmada Kund temple and Mai ki Bagiya botanical garden attract pilgrims and nature lovers. The region holds spiritual significance in Hindu tradition and offers serene natural beauty.'
    },
    chitrakoot: {
      name: 'Chitrakoot',
      history: 'A town of immense religious significance, Chitrakoot is where Lord Rama, Sita, and Lakshmana spent 11 years of their 14-year exile according to the Ramayana. The Kamadgiri temple, Ramghat on the Mandakini River, and numerous ashrams make it a major pilgrimage destination for Hindus.'
    },
    bhimbetka: {
      name: 'Bhimbetka',
      history: 'A UNESCO World Heritage Site, Bhimbetka rock shelters contain over 500 caves with prehistoric rock paintings dating from 30,000 years ago to the medieval period. These paintings depict hunting, dancing, animal fights, and daily life, providing insights into the Stone Age through early historical periods.'
    }
  },
  destinationNotFound: {
    title: "Destination not found",
    description: "Sorry, we couldn't find the destination you're looking for."
  },
  goBack: "Go Back to Destinations",
  thingsToDo: "things to do",
  aboutDestination: "About",
  getInTouch: "Get in Touch",
  chatOnWhatsApp: "Chat on WhatsApp",
  instantResponse: "Instant Response",
  sendEmail: "Send Email",
  emailAddress: "info@tourismparadise.com",
  houseboatShort: "Houseboat in Alleppey day and night 1 bedroom upper deck private houseboat.",
  exploreNow: "Explore Now",
  planYourVisitTitle: "Plan Your Visit",
  planYourVisitSubtitle: "Fill out the form and we'll get back to you within 24 hours",
  labelFullName: "Full Name *",
  placeholderFullName: "Enter your full name",
  labelEmail: "Email Address *",
  placeholderEmail: "your.email@example.com",
  labelPhone: "Phone Number",
  placeholderPhone: "+91 98765 43210",
  labelMessage: "Your Message *",
  placeholderMessage: "Tell us about your travel plans, preferences, and any specific questions...",
  sending: "Sending...",
  sendInquiry: "Send Inquiry",
  successMessage: "✓ Message sent successfully! We'll contact you soon.",
  whatsappMessage: "Hi! I'm interested in visiting {{name}}, {{country}}. Can you provide more information?",
  emailSubject: "Inquiry about {{destinationName}}",
  emailBodyTemplate: "Hello,\n\nI am interested in learning more about {{destination}}.\n\nThank you!"
  },
  hi: {
    translation: {
      heroTitle: 'अपनी यात्रा का हर हिस्सा योजना बनाएं',
      heroSubtitle: 'एक ही जगह पर उड़ानें, होटल, परिवहन और अनुभव बुक करें। सहज यात्रा योजना के लिए आपका पूर्ण यात्रा समाधान।',
      houseboats: 'हाउस बोट',
      shikara: 'शिकारा राइड्स',
      flights: 'उड़ानें',
      hotels: 'होटल',
      trains: 'ट्रेनें',
      buses: 'बसें',
      cars: 'कार किराया',
      tours: 'टूर',
      cruises: 'क्रूज',
      activities: 'गतिविधियां',
      packages: 'हॉलिडे पैकेज',
      weekend: 'वीकेंड गेटअवे',
      beaches: 'बीच स्टे',
      mountains: 'माउंटेन ट्रिप्स',
      adventure: 'एडवेंचर',
      citybreaks: 'सिटी ब्रेक्स',
      photography: 'फोटो टूर',
      insurance: 'ट्रैवल इंश्योरेंस',
      passes: 'सिटी पास',
      budget: 'बजट स्टे',
      bikes: 'बाइक रेंटल',
      villas: 'विला और घर',
      todaysDeals: 'आज की हॉट डील्स',
      exploreDestinations: 'गंतव्यों का अन्वेषण करें',
      seaFishRestaurants: 'समुद्री मछली रेस्तरां',
      backwaterVillageStay: 'बैकवाटर विलेज स्टे',
      keralaChipsAndSpices: 'केरल चिप्स और मसाले',
      keralaHandlooms: 'केरल हथकरघा',
      honeymoonBoatHouse: 'हनीमून बोट हाउस',
      houseboats: 'हाउस बोट',
      food: "ऑनलाइन भोजन ऑर्डर करें",
      noHouseboatsFound: 'आपकी खोज से मिलते-जुलते कोई हाउस बोट नहीं मिले।',

      budgetTravelDeals: 'आपके लिए बजट यात्रा सौदे',
      offerHotels: 'होटल',
      offerHouseboatsDayNightCruise: 'अल्लेप्पी में दिन और रात क्रूज हाउसबोट',
      offerHouseboatsDayNight1Bedroom: 'अल्लेप्पी में दिन और रात 1 बेडरूम हाउसबोट',
      offerHouseboatsDayCruise1BedroomUpperDeck: 'अलाप्पुझा में दिन क्रूज 1 बेडरूम ऊपरी डेक निजी हाउसबोट',
      offerKeralaHoneymoonHouseboat: 'केरल हनीमून हाउसबोट',
      offerHouseboatDayNight1BedroomUpperDeck: 'अल्लेप्पी में दिन और रात 1 बेडरूम ऊपरी डेक निजी हाउसबोट',
      offerHouseboatsAlleppeyDayTripUpperDeck: 'अल्लेप्पी में दिन यात्रा ऊपरी डेک हाउसबोट',
      offerHouseboatsB2BPrice1Bedroom: 'अल्लेप्पी में 1 बेडरूम के लिए बी2बी मूल्य हाउसबोट',
      offerSharingHouseboats2People: 'अल्लेप्पी में 2 लोगों के लिए साझा हाउसबोट मूल्य',
      offerUltraPremiumHouseboats: 'अल्लेप्पी में अल्ट्रा प्रीमियम हाउसबोट',
      offerKeralaTourBudgetPackages: 'केरल टूर बजट पैकेज',
      offerKeralaBoating: 'केरल बोटिंग',
      offerB2BTravelDealsKeralaHouseboat: 'केरल हाउस बोट पैकेज के लिए बी2बी मूल्य यात्रा सौदे',
      offerPetalsFlowers: 'पंखुड़ियाँ फूल',
      offerOrchidForSale: 'बिक्री के लिए ऑर्किड - ऑर्किड फूल वाले पौधे',
      offerOxidisedOrnaments: 'ऑक्सीडाइज्ड गहने',
      offerKeralaHandloomsSarees: 'केरल हथकरघा - केरल कसावु साड़ी',
      offerKeralaHandicrafts: 'केरल हस्तशिल्प',
      offerKeralaChips: 'केरल चिप्स - केरल केले के चिप्स',
      offerKeralaSpices: 'केरल मसाले',
      offerDriedFish: 'सूखी मछली',
      offerKeralaRealEstate: 'केरल रियल एस्टेट',
      offerKeralaLottery: 'केरल लॉटरी टिकट - केरल बम्पर लॉटरी टिकट',
      offerKeralaHomeDecor: 'केरल गृह सज्जा',
      offerTransportationInKerala: 'केरल में परिवहन',
      offerKeralaCoirProducts: 'केरल कॉयर उत्पाद',
      whyChooseTitle: 'पर्यटन स्वर्ग क्यों चुनें',
      whyChooseSubtitle: 'हम अपनी व्यापक सेवाओं और विशेषज्ञ मार्गदर्शन के साथ यात्रा योजना को सहज बनाते हैं',
      showLess: 'कम दिखाएं',
      showMore: 'और दिखाएं',
      
      destinationNotFound: {
        title: "गंतव्य नहीं मिला",
        description: "क्षमा करें, हम वह गंतव्य नहीं ढूंढ पाए जिसे आप खोज रहे हैं।"
      },
      goBack: "गंतव्यों पर वापस जाएँ",
      thingsToDo: "करने योग्य चीज़ें",
      aboutDestination: "परिचय",
      getInTouch: "संपर्क करें",
      chatOnWhatsApp: "व्हाट्सऐप पर चैट करें",
      instantResponse: "तुरंत उत्तर",
      sendEmail: "ईमेल भेजें",
      emailAddress: "info@tourismparadise.com",
      houseboatShort: "अलप्पी में डे और नाइट 1 बेडरूम अपर डेक प्राइवेट हाउसबोट।",
      exploreNow: "अभी देखें",
      planYourVisitTitle: "अपनी यात्रा की योजना बनाएं",
      planYourVisitSubtitle: "फॉर्म भरें और हम 24 घंटे के भीतर आपसे संपर्क करेंगे",
      labelFullName: "पूरा नाम *",
      placeholderFullName: "अपना पूरा नाम दर्ज करें",
      labelEmail: "ईमेल पता *",
      placeholderEmail: "your.email@example.com",
      labelPhone: "फ़ोन नंबर",
      placeholderPhone: "+91 98765 43210",
      labelMessage: "आपका संदेश *",
      placeholderMessage: "अपनी यात्रा, पसंद और प्रश्नों के बारे में बताएं...",
      sending: "भेजा जा रहा है...",
      sendInquiry: "अनुरोध भेजें",
      successMessage: "✓ संदेश सफलतापूर्वक भेजा गया! हम जल्द ही संपर्क करेंगे।",
      whatsappMessage: "नमस्ते! मैं {{name}}, {{country}} की यात्रा करना चाहता हूँ। कृपया अधिक जानकारी दें।",
      emailSubject: "{{destinationName}} के बारे में पूछताछ",
      emailBodyTemplate: "नमस्ते,\n\nमैं {{destination}} के बारे में अधिक जानना चाहता हूँ।\n\nधन्यवाद!"
    }, houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: 'केरल के एलेप्पी अलप्पुझा में हाउसबोट होटल',
      houseboatsHotelsInMunnar: 'मुन्नार में हाउसबोट होटल',
      houseboatsHotelsInCochin: 'कोचीन में हाउसबोट होटल',
      houseboatsHotelsInKumarakomLake: 'कुमारकोम झील में हाउसबोट होटल',
      houseboatsHotelsInKottayam: 'कोट्टायम में हाउसबोट होटल',
      houseboatsHotelsInAlleppey: 'एलेप्पी में हाउसबोट होटल',
      houseboatsHotelsInChottanikara: 'चोट्टानिक्करा में हाउसबोट होटल',
      houseboatsHotelsInThiruvananthapuram: 'तिरुवनंतपुरम में हाउसबोट होटल',
      houseboatsHotelsInKovalamBeach: 'कोवलम बीच में हाउसबोट होटल',
      houseboatsHotelsInThekkady: 'थेक्कडी में हाउसबोट होटल',
      houseboatsHotelsInWayanad: 'वायनाड में हाउसबोट होटल',
      houseboatsHotelsInAlappuzha: 'अलप्पुझा में हाउसबोट होटल',
      houseboatsHotelsInGuruvayur: 'गुरुवायूर में हाउसबोट होटल',
      houseboatsHotelsInVagamon: 'वागामोन में हाउसबोट होटल',
      houseboatsHotelsInAthirapillyWaterFalls: 'अथिराप्पिल्ली झरने में हाउसबोट होटल',
      houseboatsHotelsInMarariBeach: 'मरारी बीच में हाउसबोट होटल',
      houseboatsHotelsInPoovarBeach: 'पूवर बीच में हाउसबोट होटल',
      houseboatsHotelsInVarkalaBeach: 'वर्कला बीच में हाउसबोट होटल',
      houseboatsHotelsInAshtamudiLake: 'अष्टमुडी झील में हाउसबोट होटल',
      houseboatsHotelsInKanyakumariBeach: 'कन्याकुमारी बीच में हाउसबोट होटल',
      houseboatsHotelsInAlleppeyBeach: 'एलेप्पी बीच में हाउसबोट होटल',
      houseboatsHotelsInAlappuzhaLake: 'अलप्पुझा झील में हाउसबोट होटल',
      houseboatsHotelsInIndia: 'भारत में हाउसबोट होटल',
      houseboatsHotelsInKerala: 'केरल में हाउसबोट होटल',
      houseBoatHotelsInAlleppey: 'एलेप्पी में हाउस बोट होटल',
      boatHouseHotelsInIndia: 'भारत में बोट हाउस होटल',
      boatHouseHotelsInKerala: 'केरल में बोट हाउस होटल',
      sharingHouseboatsHotelsInAlleppey: 'एलेप्पी में शेयरिंग हाउसबोट होटल',
      sharingBoatHouseHotelsInKerala: 'केरल में शेयरिंग बोट हाउस होटल',
      dayTripHouseboatsHotelsInAlleppey: 'एलेप्पी में डे ट्रिप हाउसबोट होटल',
      dayCruiseHouseboatsHotelsInAlleppey: 'एलेप्पी में डे क्रूज हाउसबोट होटल',
      fiveStarHouseboatsHotelsInAlleppey: 'एलेप्पी में 5 सितारा हाउसबोट होटल',
      fourStarHouseboatsHotelsInAlleppey: 'एleppy में 4 सितारा हाउसबोट होटल',
      threeStarHouseboatsHotelsInAlleppey: 'एलेप्पी में 3 सितारा हाउसबोट होटल',
      twoStarHouseboatsHotelsInAlleppey: 'एलेप्पी में 2 सितारा हाउसबोट होटल',
      budgetHouseboatsHotelsInAlleppey: 'एलेप्पी में बजट हाउसबोट होटल',
      standardBoatHouseHotelsInAlleppey: 'एलेप्पी में स्टैंडर्ड बोट हाउस होटल'
    },
    testimonials: {
      "sectionTitle": "हमारे यात्रियों के अनुभव",
  "sectionSubtitle": "हजारों संतुष्ट ग्राहकों के वास्तविक अनुभव",
  "quoteOpen": "\"",
  "indicatorAria": "टेस्टिमोनियल दिखाएँ {{index}}",

  "person1": {
    "name": "सारा जॉनसन",
    "location": "न्यूयॉर्क, यूएसए",
    "text": "बिल्कुल अद्भुत अनुभव! Tourism Paradise की टीम ने हमारे हनीमून की परफेक्ट योजना बनाई। हर छोटे से छोटे विवरण का ध्यान रखा गया और हमें केरल के बैकवाटर पर सबसे रोमांटिक यात्रा का अनुभव मिला।",
    "trip": "केरल बैकवाटर्स हनीमून"
  },

  "person2": {
    "name": "माइकल चेन",
    "location": "टोरंटो, कनाडा",
    "text": "प्रोफेशनल सर्विस और बेहतरीन विवरण पर ध्यान। हमारे परिवार की केरल यात्रा उनकी स्थानीय जानकारी और विशेषज्ञ योजना के कारण बेदाग रही।",
    "trip": "केरल फैमिली एडवेंचर"
  },

  "person3": {
    "name": "एमिली रोड्रिगेज",
    "location": "बार्सिलोना, स्पेन",
    "text": "मैं अक्सर काम के लिए यात्रा करती हूँ, पर Tourism Paradise द्वारा आयोजित यह अवकाश यात्रा असाधारण रही। व्यक्तिगत इटिनरेरी और मेरे आयुर्वेद रिट्रीट के समर्थन ने सब कुछ तनावमुक्त बना दिया।",
    "trip": "केरल सोलो रिट्रीट"
  }
    },
    destinationOffers: {
        1: {
          title: "होटल",
          description: "वन्यजीव/जंगल क्षेत्र और संबंधित गतिविधियाँ: • पेरियार वन्यजीव अभयारण्य (या पेरियार टाइगर रिज़र्व) • केरल के वन क्षेत्र • ट्रेकिंग क्षेत्र • पर्वतीय क्षेत्र • हाथी इंटरैक्शन/दर्शन (सामान्यतः हाथी सफारी, हाथी सवारी या जंगल/अभयारण्यों में देखे जाते हैं। त्योहारों में यह हाथी जुलूस या गजमेला के रूप में दिखाई देता है)।"
        },

        2: {
          title: "अलप्पी हाउसबोट — दिन और रात क्रूज",
          description: "अलप्पी हाउसबोट होटल — 1/2/3 से 22 बेडरूम वाली हाउसबोट उपलब्ध। एक, दो, तीन… बाईस बेडरूम हाउसबोट। प्रीमियम और लग्ज़री दिन और रात ठहराव वाली हाउसबोट, बजट हाउसबोट, मुहम्मा बोट जेट्टी, नेहरू ट्रॉफी बोट रेस, अलप्पी प्रारंभिक बिंदु, अलप्पी समापन बिंदु, हाउसबोट रूट एरिया, कन्ननकारा बोट टूर क्षेत्र।"
        },

        3: {
          title: "अलप्पी हाउसबोट — दिन और रात (1 बेडरूम)",
          description: "अलप्पी बैकवॉटर होमस्टे, अलप्पुझा गाँव अनुभव, पल्लथुरुथी के अपार्टमेंट, अलप्पी टाउन के विला, जंगल ट्री हाउस, द्वीप बैकवॉटर रिसॉर्ट, लेक फ्रंट और बीच फ्रंट प्रॉपर्टी। 1 से 22 बेडरूम वाली हाउसबोट — प्रीमियम और लग्ज़री दिन और रात ठहराव विकल्प।"
        },

        4: {
          title: "अलप्पुझा डे क्रूज़ — 1 बेडरूम ऊपरी डेक निजी हाउसबोट",
          description: "अलप्पी की 1–22 बेडरूम हाउसबोट—प्रीमियम/लक्जरी ठहराव—मुहम्मा जेट्टी, नेहरू ट्रॉफी बोट रेस, अलप्पी–कन्ननकारा मार्ग, बजट हाउसबोट आदि प्रसिद्ध मार्ग।"
        },

        5: {
          title: "केरल हनीमून हाउसबोट",
          description: "अलप्पुझा हाउसबोट में हनीमून कॉटेज—रोमांटिक सजावट, एसी बेडरूम, निजी बाथरूम, सुंदर डेक व्यू, ऑनबोर्ड भोजन, कैंडललाइट डिनर, फूलों से सजी सजावट—केरल बैकवॉटर में जोड़ों के लिए एक शांत और निजी अनुभव।"
        },

        6: {
          title: "अलप्पी हाउसबोट (1 बेडरूम ऊपरी डेक निजी)",
          description: "अलप्पी बैकवॉटर होमस्टे, गाँव अनुभव, पल्लथुरुथी अपार्टमेंट, अलप्पी टाउन विला, जंगल ट्री हाउस, द्वीप रिसॉर्ट्स, लेक फ्रंट और बीच फ्रंट प्रॉपर्टी। 1–22 बेडरूम प्रीमियम/लक्ज़री हाउसबोट।"
        },

        7: {
          title: "अलप्पी हाउसबोट — दिन और रात (ऊपरी डेक निजी)",
          description: "अलप्पी, कुमारकोम, कोल्लम, अष्टमुडी झील, कोवलम, वर्कला, चेरई बीच, मरारी बीच, कयनकारी गाँव, पन्नमाडा, अरयड गाँव, केरल के बैकवॉटर क्षेत्र। 1–22 बेडरूम लक्ज़री हाउसबोट।"
        },

        8: {
          title: "अलप्पी डे ट्रिप — ऊपरी डेक हाउसबोट",
          description: "कयनकारी गाँव, पन्नमाडा, अरयड गाँव, पल्लथुरुथी अपार्टमेंट, मुहम्मा जेट्टी सहित सुंदर बैकवॉटर क्षेत्र—प्रीमियम/लक्ज़री डे ट्रिप हाउसबोट अनुभव।"
        },

        9: {
          title: "अलप्पी B2B कीमत — 1 बेडरूम हाउसबोट",
          description: "डीलक्स, प्रीमियम और लक्ज़री श्रेणी उपलब्ध। 1 बेडरूम हाउसबोट—ऊपरी डेक और बिना ऊपरी डेक दोनों प्रकार। ऊपरी डेक वाले हाउसबोट से मार्ग का बेहतर दृश्य मिलता है।"
        },

        10: {
          title: "अलप्पी शेयरिंग हाउसबोट — 2 व्यक्ति",
          description: "केरल बैकवॉटर का बजट साझा हाउसबोट—युगल और यात्रा साथी के लिए उपयुक्त। 1 रात का क्रूज़—आरामदायक ठहराव, असली केरल भोजन और सुंदर दृश्य। सर्वोत्तम दरों के लिए अग्रिम बुकिंग आवश्यक।"
        },

        11: {
          title: "अल्ट्रा प्रीमियम हाउसबोट — अलप्पी",
          description: "डीलक्स, प्रीमियम, लक्ज़री और अल्ट्रा लक्ज़री श्रेणियाँ। 1 से 22+ बेडरूम हाउसबोट—परिवार, समूहों और युगल हेतु। दिन क्रूज़ और रात ठहराव। बजट/डीलक्स/साझा बोट विकल्प। लोकप्रिय क्षेत्र—अलप्पी बैकवॉटर, पन्नमाडा, कयनकारी, अरयड, मुहम्मा जेट्टी।"
        },

        12: {
          title: "केरल टूर बजट पैकेज",
          description: "मुन्नार, थेक्कडी, पेरियार वाइल्डलाइफ, वायनाड, वागामोन, पोनमूडी, इडुक्की, देविकुलम, कुट्टिक्कानम, वट्टावाडा, कनथल्लूर, पर्वतीय क्षेत्र, केरल वन क्षेत्र, एलीफेंट वॉक, ट्रेकिंग क्षेत्र।"
        },

        13: {
          title: "केरल बोटिंग",
          description: "केरल बैकवॉटर की शांत यात्रा—हरी धान के खेत, गाँव की नहरें, लकड़ी की पारंपरिक नावें, असली केरल भोजन, पानी पर जीवन की धीमी लय। युगल, परिवार और एकल यात्रियों के लिए परफेक्ट। ₹1,999 प्रति व्यक्ति से शुरू।"
        },

        14: {
          title: "B2B ट्रैवल डील — केरल हाउसबोट पैकेज",
          description: "अलप्पी 1/2/3 से 22 बेडरूम हाउसबोट—प्रीमियम/लक्ज़री रात ठहराव, बजट विकल्प, मुहम्मा जेट्टी, नहरू ट्रॉफी रूट, कन्ननकारा क्रूज़।"
        },

        15: {
          title: "पेटल्स फ्लावर्स",
          description: "केरल के प्रीमियम फूलदार पौधों के लिए विश्वसनीय स्थान—विशेष रूप से ऑर्किड। घर सजावट, गिफ्टिंग और गार्डन प्रेमियों के लिए उपयुक्त। हर पौधा स्वस्थ फूलों और सुंदरता के लिए देखभाल से उगाया गया है।"
        },

        16: {
          title: "ऑर्किड पौधे बिक्री हेतु",
          description: "Phalaenopsis, Vanda जैसी प्रजातियों वाले चमकीले, पैटर्नयुक्त, लंबे समय तक खिलने वाले ऑर्किड पौधे। घर सजावट, उपहार या गार्डन डिस्प्ले के लिए उत्तम। आसान देखभाल। ₹399 से शुरू।"
        },

        17: {
          title: "ऑक्सीडाइज्ड आभूषण",
          description: "केरल के ऑक्सीडाइज्ड आभूषण—गहरे, प्राचीन फिनिश वाले सिल्वर/ब्रास धातु। पारंपरिक और आधुनिक दोनों डिज़ाइन। साड़ी और आधुनिक पोशाकों के साथ उपयुक्त। हार, ईयररिंग और सेट उपलब्ध।"
        },

        18: {
          title: "केरल हैंडलूम — कासावु साड़ी",
          description: "केरल हैंडलूम सिल्क, कासावु साड़ियाँ, कासावु चूड़ीदार मटेरियल, और केरल हैंडलूम शर्ट—सफेद-स्वर्ण बॉर्डर वाली पारंपरिक केरल पहचान।"
        },

        19: {
          title: "केरल हस्तशिल्प",
          description: "केरल के हस्तशिल्प—लकड़ी की नक्काशी, पीतल धातु उत्पाद, नारियल की रस्सी (कोयर) से बने उत्पाद, नारियल के खोल से बने बर्तन/खिलौने, कथकली मुखौटे, नेट्टिपट्टम, अरनमुला मिरर और अधिक।"
        },

        20: {
          title: "केरल चिप्स — केला चिप्स",
          description: "केरल के नेंद्रन केला चिप्स, जैकफ्रूट चिप्स और पारंपरिक स्नैक्स।"
        },

        21: {
          title: "केरल मसाले",
          description: "कार्डमम, काली मिर्च, दालचीनी, लौंग और जायफल—पश्चिमी घाट के जैविक खेतों से प्रीमियम गुणवत्ता वाले केरल मसाले।"
        },

        22: {
          title: "सूखी मछली",
          description: "अष्टमुड़ी झील की एक्सपोर्ट-क्वालिटी सूखी झींगा—बिना नमक के स्वच्छ सूर्य-सूखे हुए। मसाला, ग्रेवी, चटनी के लिए आदर्श।"
        },

        23: {
          title: "केरल रियल एस्टेट",
          description: "मुख्य स्थान में 4 BHK स्वतंत्र घर (3200 वर्ग फुट)। केरल में विला, जमीन, घर और फ्लैट खरीद/बिक्री/किराया।"
        },

        24: {
          title: "केरल लॉटरी — बंपर लॉटरी टिकट",
          description: "केरल राज्य की आधिकारिक लॉटरी—Win Win, Sthree Sakthi, Fifty Fifty, Karunya। प्रथम पुरस्कार ₹1 करोड़ तक।"
        },

        25: {
          title: "केरल होम डेकोर",
          description: "केरल होम डेकोर और कोयर उत्पाद—प्राकृतिक फाइबर आधारित पर्यावरण-अनुकूल सजावट।"
        },

        26: {
          title: "केरल परिवहन सेवा",
          description: "गुरुवायूर, अथिराप्पल्ली, वझाचल, आर्थुंकल चर्च, कोच्चि फोर्ट, नेल्लेसवरम, थेनमला, सबरीमला, कूटालम/कोर्टालम, ऊटी, कोडैकनाल, गोवा, तमिलनाडु, कर्नाटक क्षेत्रों के सभी प्रमुख पर्यटन मार्ग।"
        },

        27: {
          title: "केरल कोयर उत्पाद",
          description: "कोयर पर्यावरण-अनुकूल और बायोडिग्रेडेबल—मैट, रस्सियां, ब्रश, बैग और सजावटी उत्पाद। स्थानीय व अंतरराष्ट्रीय बाजारों में लोकप्रिय।"
        },

        28: {
          title: "ऑनलाइन फूड ऑर्डर",
          description: "केरल में ऑनलाइन भोजन ऑर्डर—स्थानीय पारंपरिक भोजन से लेकर अंतरराष्ट्रीय व्यंजन तक। कोच्चि, तिरुवनंतपुरम, कोझिकोड सहित सभी शहरों में उपलब्ध।"
        }
      },

    destinationFeed: {
      loadingMore: 'और ऑफ़र लोड हो रहे हैं...',
      inquiryTitle: 'कोई प्रश्न हैं? संपर्क करें!',
      inquirySubtitle: 'हमें अपनी पूछताछ भेजें और हमारी टीम 24 घंटे के भीतर आपसे संपर्क करेगी',
      yourName: 'आपका नाम *',
      yourEmail: 'आपका ईमेल *',
      phoneNumber: 'फ़ोन नंबर',
      subject: 'विषय',
      yourMessage: 'आपका संदेश *',
      sendInquiry: 'पूछताछ भेजें',
      scrollToInquiryAria: 'पूछताछ फ़ॉर्म पर स्क्रॉल करें',
      "bookViaWhatsapp": "व्हाट्सऐप के माध्यम से बुक करें"
    },
    footer: {
      description: 'अविस्मरणीय यात्राओं के लिए आपका विश्वसनीय यात्रा साथी। जीवन भर याद रहने वाली यादें बनाना।',
      destinations: {
        title: 'गंतव्य',
        keralaBudgetHouseboat: 'केरल बजट हाउसबोट',
        luxuryTopEndHouseboat: 'लक्जरी टॉप एंड हाउसबोट',
        b2bPriceKeralaHouseboats: 'बी2बी मूल्य केरल हाउसबोट',
        houseboatsInAlappuzha: 'अलाप्पुझा में हाउसबोट',
        budgetBoatHouseAllepey: 'बजट बोट हाउस एलेप्पी',
        budgetBoatHouseAlappuzha: 'बजट बोट हाउस अलाप्पुझा',
        budgetHouseboatAllepey: 'बजट हाउसबोट एलेप्पी',
        budgetHouseboatAlappuzha: 'बजट हाउसबोट अलाप्पुझा',
        budgetAlleppeyBoatHouse: 'बजट एलेप्पी बोट हाउस',
        spotBookingBoatHouse: 'स्पॉट बुकिंग बोट हाउस',
        prepaidTaxiCochinAirport: 'कोचीन हवाई अड्डे में प्रीपेड टैक्सी सेवा',
        budgetAlappuzhaHouseboats: 'बजट अलाप्पुझा हाउसबोट',
        budgetAlleppeyHouseboats: 'बजट एलेप्पी हाउसबोट',
        b2bAlleppeyHouseboats: 'बी2बी एलेप्पी हाउसबोट',
        privateAlleppeyHouseboats: 'निजी एलेप्पी हाउसबोट',
        houseboatsInIndia: 'भारत में हाउसबोट',
        sharedHouseboatsInAlleppey: 'एलेप्पी में साझा हाउसबोट',
        sharingHouseboatsInAlleppey: 'एलेप्पी में साझा हाउसबोट',
        sharingBoathouseInAlleppey: 'एलेप्पी में साझा बोटहाउस',
        clubbingHouseboatsInAlleppey: 'एलेप्पी में क्लबिंग हाउसबोट',
        clubbingBoathouseInAlleppey: 'एलेप्पी में क्लबिंग बोटहाउस',
        luxuryHouseboatsInAlleppey: 'एलेप्पी में लक्जरी हाउसबोट',
        premiumHouseboatsInAlleppey: 'एलेप्पी में प्रीमियम हाउसबोट',
        deluxeHouseboatsInAlleppey: 'एलेप्पी में डीलक्स हाउसबोट',
        standardHouseboatsInAlleppey: 'एलेप्पी में स्टैंडर्ड हाउसबोट',
        ultraLuxuryHouseboatsInAlleppey: 'एलेप्पी में अल्ट्रा लक्जरी हाउसबोट',
        ultraLuxurySharingHouseboatsInAlleppey: 'एलेप्पी में अल्ट्रा लक्जरी साझा हाउसबोट',
        bestHouseboatsInAlleppey: 'एलेप्पी में सर्वश्रेष्ठ हाउसबोट',
        bestLuxuryHouseboatsInAlleppey: 'एलेप्पी में सर्वश्रेष्ठ लक्जरी हाउसबोट',
        bestPremiumHouseboatsInAlleppey: 'एलेप्पी में सर्वश्रेष्ठ प्रीमियम हाउसबोट',
        bestDeluxeHouseboatsInAlleppey: 'एलेप्पी में सर्वश्रेष्ठ डीलक्स हाउसबोट',
        bestStandardHouseboatsInAlleppey: 'एलेप्पी में सर्वश्रेष्ठ स्टैंडर्ड हाउसबोट',
        bestAlappuzhaHouseboatPackages: 'सर्वश्रेष्ठ अलाप्पुझा हाउसबोट पैकेज',
        bestAlappuzhaBoatHousePackages: 'सर्वश्रेष्ठ अलाप्पुझा बोट हाउस पैकेज'
      },
      services: { title: 'सेवाएं', flightBooking: 'उड़ान बुकिंग', hotelReservation: 'होटल आरक्षण', tourPackages: 'टूर पैकेज' },
      company: { title: 'कंपनी', aboutUs: 'हमारे बारे में', contact: 'संपर्क करें' },
      support: { title: 'सहायता', helpCenter: 'सहायता केंद्र', terms: 'सेवा की शर्तें', privacy: 'गोपनीयता नीति', refund: 'धनवापसी नीति', faq: 'सामान्य प्रश्न' },
      copyright: '© {{year}} पर्यटन स्वर्ग। सर्वाधिकार सुरक्षित।'
    },
    featureList: {
      pilgrimPackages: 'सर्वश्रेष्ठ तीर्थयात्रा पैकेज',
      pilgrimDescription: 'शांत आध्यात्मिक यात्रा के लिए पवित्र स्थलों के लिए सोच-समझकर तैयार किए गए तीर्थयात्रा टूर।',
      industrialTitle: 'औद्योगिक परामर्श सेवा और श्रमिक आपूर्तिकर्ता',
      industrialShortDesc: 'प्रोजेक्ट रिपोर्ट और वित्तीय मार्गदर्शन से लेकर इंजीनियरों, तकनीशियनों और निर्माण ठेकेदारों जैसे कुशल श्रमिकों की आपूर्ति तक, हम आपकी सभी औद्योगिक और व्यावसायिक ज़रूरतों को पूरा करते हैं।',
      industrialFullDesc: 'प्रोजेक्ट रिपोर्ट तैयार करना, वित्तीय मार्गदर्शन, निर्माण पर्यवेक्षण, योजना और अनुमान तैयार करना, उद्योग और होटल मशीनरी, निर्माण श्रमिक और ठेकेदार, बिजली, प्लंबिंग, एयर कंडीशनर, निर्माण, घरेलू उपकरण, फ्रिज, वॉशिंग मशीन, एयर कंडीशनर, ऑटोमोबाइल, मोटर वाहन, कंप्यूटर, मोबाइल फोन, सेलुलर फोन, लिफ्ट ऑपरेटर, घर की सजावट, आभूषण और गहने, कॉफी और स्नैक्स बनाने वाला, राजमिस्त्री, बढ़ई, वेल्डर, मशीनरी स्थापना, पेंटर, सफाई, होटल, ड्राइवर, एल्यूमीनियम फैब्रिकेशन, स्टील फैब्रिकेशन, घरेलू नौकर, बागवानी कार्य, भारी वाहन और मशीनरी ऑपरेटर, वेबसाइट डिजाइन और होस्टिंग, सौर ऊर्जा प्रणाली स्थापना गृह सेवाएँ, लैब तकनीशियन, इंजीनियर और डॉक्टर, शिक्षक, लॉन्ड्री, हाउस कीपिंग आदि।',
      educationTitle: 'शिक्षा परामर्श सेवा',
      educationDescription: 'इंजीनियरिंग, मेडिकल कॉलेज, कृषि, कंप्यूटर एआई, एलएलबी, एमबीए, बीबीए, एमसीए, लैब तकनीशियन, फिजियोथेरेपी, डेंटल, आयुर्वेदिक आदि।',
      legalTitle: 'अधिवक्ता और वकील',
      legalDescription: 'अनुभवी अधिवक्ताओं और वकीलों से पेशेवर कानूनी सलाह और सेवाओं तक पहुँच।',
    },
    popularDestinations: {
      
        title: "भारत में और अधिक गंतव्यों का अन्वेषण करें",
        subtitle: "विभिन्न राज्यों के शहरों में करने लायक चीज़ें खोजें",
        thingsToDo: "करने लायक चीज़ें",
        comingSoonTitle: "जल्द आ रहा है!",
        comingSoonDescription: "हम {{continent}} में अद्भुत गंतव्य जोड़ रहे हैं। जल्द ही वापस जाँच करें!",
        northIndia: "उत्तर भारतीय गंतव्य",
        southIndia: "दक्षिण भारतीय गंतव्य",
        eastIndia: "पूर्वी और पूर्वोत्तर भारतीय गंतव्य",
        centralIndia: "मध्य भारतीय गंतव्य",
        delhi: {
          name: "दिल्ली",
          country: "दिल्ली",
          history: "भारत की राजधानी, दिल्ली, का समृद्ध इतिहास 2,000 वर्षों से अधिक पुराना है। यह शहर मुगल शासकों द्वारा छोड़ी गई मंत्रमुग्ध कर देने वाली मस्जिदों, किलों और स्मारकों से भरा पड़ा है। राजसी लाल किला से लेकर प्रतिष्ठित इंडिया गेट तक, दिल्ली प्राचीन विरासत को आधुनिक बुनियादी ढांचे के साथ मिश्रित करती है, जो इसे एक अवश्य घूमने लायक गंतव्य बनाती है।"
        },
        jaipur: {
          name: "जयपुर",
          country: "राजस्थान",
          history: "पिंक सिटी के नाम से मशहूर, जयपुर, राजस्थान की राजधानी है और भारत के गोल्डन ट्रायंगल का हिस्सा है। 1727 में स्थापित, यह शहर अपने शाही महलों, आमेर किला और हवा महल जैसे शानदार किलों और जीवंत बाज़ारों के लिए प्रसिद्ध है। जयपुर राजपूत वास्तुकला और संस्कृति की भव्यता को दर्शाता है।"
        },
        agra: {
          name: "आगरा",
          country: "उत्तर प्रदेश",
          history: "दुनिया के सात अजूबों में से एक, शानदार ताजमहल का घर, आगरा 1556 से 1658 तक मुगल साम्राज्य की राजधानी था। इस शहर में आगरा किला और फतेहपुर सीकरी सहित अद्भुत मुगल वास्तुकला है, जो मुगल कलात्मक उपलब्धि के शिखर को प्रदर्शित करती है।"
        },
        varanasi: {
          name: "वाराणसी",
          country: "उत्तर प्रदेश",
          history: "दुनिया के सबसे पुराने लगातार बसे शहरों में से एक, वाराणसी हिंदुओं के लिए एक प्रमुख धार्मिक केंद्र है। पवित्र गंगा नदी के तट पर स्थित, यह शहर अपने घाटों, प्राचीन मंदिरों और आध्यात्मिक महत्व के लिए जाना जाता है। मार्क ट्वेन ने एक बार कहा था, \"बनारस इतिहास से पुराना है, परंपरा से पुराना है, किंवदंती से भी पुराना है।\""
        },
        amritsar: {
          name: "अमृतसर",
          country: "पंजाब",
          history: "गुरु राम दास द्वारा 1577 में स्थापित, अमृतसर सिखों के सबसे पवित्र तीर्थ स्वर्ण मंदिर का घर है। यह शहर 1919 में हुए दुखद जलियांवाला बाग नरसंहार का गवाह रहा और सिख विरासत, आध्यात्मिकता और लचीलेपन के प्रतीक के रूप में खड़ा है। वाघा बॉर्डर समारोह एक प्रमुख आकर्षण है।"
        },
        manali: {
          name: "मनाली",
          country: "हिमाचल प्रदेश",
          history: "2,050 मीटर की ऊंचाई पर हिमालय की गोद में बसा, मनाली अपनी प्राकृतिक सुंदरता, साहसिक खेलों और प्राचीन हिडिम्बा मंदिर के लिए जाना जाने वाला एक लोकप्रिय हिल स्टेशन है। यह घाटी बर्फ से ढकी चोटियों, सेब के बागों के लुभावने दृश्य प्रस्तुत करती है, और रोहतांग पास और सोलंग घाटी का प्रवेश द्वार है।"
        },
        leh: {
          name: "लेह",
          country: "लद्दाख",
          history: "लद्दाख की राजधानी, लेह 3,500 मीटर की ऊंचाई पर स्थित है और कभी प्राचीन रेशम मार्ग पर एक प्रमुख पड़ाव था। अपने कठोर, नाटकीय परिदृश्य, बौद्ध मठों और पैंगोंग त्सो जैसी ऊंचाई वाली झीलों के लिए जाना जाने वाला लेह, तिब्बती संस्कृति और लुभावनी हिमालयी दृश्यों का एक अनूठा मिश्रण प्रदान करता है।"
        },
        rishikesh: {
          name: "ऋषिकेश",
          country: "उत्तराखंड",
          history: "योग की विश्व राजधानी के रूप में जाना जाने वाला, ऋषिकेश गंगा के तट पर स्थित एक आध्यात्मिक शहर है। अपने आश्रमों, योग केंद्रों और प्रतिष्ठित लक्ष्मण झूला पुल के लिए प्रसिद्ध, यह शहर आध्यात्मिक साधकों और साहसिक उत्साही दोनों को आकर्षित करता है। बीटल्स की 1968 की यात्रा ने इसे अंतरराष्ट्रीय स्तर पर प्रसिद्ध कर दिया।"
        },
        udaipur: {
          name: "उदयपुर",
          country: "राजस्थान",
          history: "झीलों का शहर और पूर्व का वेनिस कहा जाने वाला, उदयपुर की स्थापना 1559 में महाराणा उदय सिंह द्वितीय ने की थी। इस शहर में सिटी पैलेस और लेक पैलेस जैसे शानदार महल, पिछोला और फतेह सागर जैसी सुंदर झीलें हैं, और यह रोमांटिक राजस्थानी वास्तुकला का उदाहरण है।"
        },
        shimla: {
          name: "शिमला",
          country: "हिमाचल प्रदेश",
          history: "ब्रिटिश भारत की पूर्व ग्रीष्मकालीन राजधानी, शिमला वाइसरीगल लॉज और क्राइस्ट चर्च सहित विक्टोरियन वास्तुकला के साथ औपनिवेशिक आकर्षण को बरकरार रखती है। हिमालय की तलहटी में स्थित, यह मनोरम पर्वतीय दृश्य, प्रसिद्ध मॉल रोड और यूनेस्को-सूचीबद्ध कालका-शिमला रेलवे प्रदान करता है।"
        },
        mussoorie: {
          name: "मसूरी",
          country: "उत्तराखंड",
          history: "पहाड़ियों की रानी के नाम से मशहूर, मसूरी एक आकर्षक हिल स्टेशन है जिसे अंग्रेजों ने 1826 में स्थापित किया था। 2,005 मीटर पर स्थित, यह दून घाटी और हिमालयी श्रेणियों के दृश्य प्रस्तुत करता है। गन हिल, केम्प्टी फॉल्स, और कैमल बैक रोड इस औपनिवेशिक काल के ठिकाने में लोकप्रिय आकर्षण हैं।"
        },
        srinagar: {
          name: "श्रीनगर",
          country: "जम्मू और कश्मीर",
          history: "जम्मू और कश्मीर की ग्रीष्मकालीन राजधानी, श्रीनगर अपनी डल झील, मुगल उद्यानों जैसे शालीमार बाग और निशात बाग, और पारंपरिक हाउसबोट्स के लिए प्रसिद्ध है। इस शहर की सुंदरता ने सदियों से कवियों और यात्रियों को प्रेरित किया है, जिससे इसे \"धरती पर स्वर्ग\" का खिताब मिला है।"
        },
        jaisalmer: {
          name: "जैसलमेर",
          country: "राजस्थान",
          history: "स्वर्ण नगरी अपने पीले बलुआ पत्थर के किले और हवेलियों के साथ थार रेगिस्तान से उभरती है। 1156 में स्थापित, जैसलमेर ऊंट कारवां मार्गों पर एक प्रमुख व्यापार केंद्र था। जैसलमेर का किला, सैम सैंड ड्यून्स, और बारीकी से नक्काशीदार हवेलियां राजपूत वास्तुकला को बेहतरीन रूप में प्रदर्शित करती हैं।"
        },
        nainital: {
          name: "नैनीताल",
          country: "उत्तराखंड",
          history: "2,084 मीटर पर खूबसूरत नैनी झील के चारों ओर निर्मित, नैनीताल को अंग्रेजों ने 1841 में एक हिल स्टेशन के रूप में विकसित किया था। सात पहाड़ियों से घिरी नाशपाती के आकार की झील एक शांत वातावरण बनाती है। नैना देवी मंदिर, स्नो व्यू प्वाइंट, और झील में नौका विहार प्रमुख आकर्षण हैं।"
        },
        vrindavan: {
          name: "वृंदावन",
          country: "उत्तर प्रदेश",
          history: "हिंदू धर्म के सबसे पवित्र शहरों में से एक, वृंदावन वह जगह है जहां माना जाता है कि भगवान कृष्ण ने अपना बचपन बिताया था। प्रसिद्ध बांके बिहारी मंदिर और इस्कॉन मंदिर सहित 5,000 से अधिक मंदिरों के साथ, यह शहर एक प्रमुख तीर्थ स्थल है और होली को बेजोड़ उत्साह के साथ मनाता है।"
        },
        haridwar: {
          name: "हरिद्वार",
          country: "उत्तराखंड",
          history: "हिंदू धर्म के सात सबसे पवित्र स्थानों में से एक, हरिद्वार वह जगह है जहां गंगा नदी मैदानों में प्रवेश करती है। यह शहर हर 12 साल में कुंभ मेले की मेजबानी करता है, जो लाखों तीर्थयात्रियों को आकर्षित करता है। हर की पौड़ी घाट पर शाम की गंगा आरती एक मंत्रमुग्ध कर देने वाला आध्यात्मिक अनुभव है जो सदियों से किया जाता रहा है।"
        },
        mumbai: {
          name: "मुंबई",
          country: "महाराष्ट्र",
          history: "भारत की वित्तीय राजधानी और सपनों का शहर, मुंबई मूल रूप से सात द्वीप थे जो 1661 में कैथरीन ऑफ ब्रगेंजा के दहेज के हिस्से के रूप में ब्रिटेन को दिए गए थे। यह शहर गेटवे ऑफ इंडिया, मरीन ड्राइव, बॉलीवुड फिल्म उद्योग का घर है, और औपनिवेशिक वास्तुकला और आधुनिक गगनचुंबी इमारतों के एक अद्वितीय मिश्रण को दर्शाता है।"
        },
        bengaluru: {
          name: "बेंगलुरु",
          country: "कर्नाटक",
          history: "भारत की सिलिकॉन वैली और गार्डन सिटी के रूप में जाना जाने वाला, बेंगलुरु की स्थापना 1537 में केम्पे गौड़ा ने की थी। यह शहर बैंगलोर पैलेस, टीपू सुल्तान के ग्रीष्मकालीन महल जैसे विरासत स्थलों और लालबाग बॉटनिकल गार्डन तथा क्यूबोन पार्क सहित सुंदर पार्कों के साथ आईटी कौशल को जोड़ता है।"
        },
        goa: {
          name: "गोवा",
          country: "गोवा",
          history: "1961 तक एक पूर्व पुर्तगाली कॉलोनी, गोवा भारत का सबसे छोटा राज्य है जो आश्चर्यजनक समुद्र तटों, जीवंत नाइटलाइफ़ और औपनिवेशिक वास्तुकला के लिए जाना जाता है। बेसिलिका ऑफ बॉम जीसस, से कैथेड्रल, और फोर्ट अगुआडा पुर्तगाली विरासत को दर्शाते हैं, जबकि बागा और पालोलेम जैसे समुद्र तट दुनिया भर से पर्यटकों को आकर्षित करते हैं।"
        },
        kerala: {
          name: "केरल",
          country: "केरल",
          history: "\"ईश्वर का अपना देश\" कहा जाने वाला, केरल अपने बैकवाटर, आयुर्वेदिक उपचारों और हरे-भरे परिदृश्यों के लिए प्रसिद्ध है। राज्य का रोमनों, अरबों और यूरोपीय लोगों के साथ व्यापार का एक समृद्ध इतिहास रहा है। केरल की अनूठी संस्कृति में कथकली नृत्य, स्नेक बोट रेस और नारियल और मसालों वाली पारंपरिक व्यंजन शामिल हैं।"
        },
        hyderabad: {
          name: "हैदराबाद",
          country: "तेलंगाना",
          history: "1591 में मुहम्मद कुली कुतुब शाह द्वारा स्थापित, हैदराबाद अपने समृद्ध इतिहास, बिरयानी और मोती व्यापार के लिए जाना जाता है। प्रतिष्ठित चारमीनार, गोलकोंडा किला, और कुतुब शाही मकबरे शहर की निजामी विरासत का प्रतिनिधित्व करते हैं। अब एक प्रमुख आईटी हब, यह परंपरा और आधुनिकता को खूबसूरती से संतुलित करता है।"
        },
        chennai: {
          name: "चेन्नई",
          country: "तमिलनाडु",
          history: "पूर्व में मद्रास, चेन्नई तमिलनाडु की राजधानी है और दक्षिण भारतीय संस्कृति का प्रवेश द्वार है। 1639 में अंग्रेजों द्वारा स्थापित, इस शहर में मरीना बीच (दुनिया का दूसरा सबसे लंबा शहरी समुद्र तट), कपालेश्वर मंदिर, फोर्ट सेंट जॉर्ज है, और यह शास्त्रीय कर्नाटक संगीत और भरतनाट्यम नृत्य के लिए प्रसिद्ध है।"
        },
        kochi: {
          name: "कोच्चि",
          country: "केरल",
          history: "अरब सागर की रानी, कोच्चि (कोचीन) प्राचीन काल से ही एक प्रमुख मसाला व्यापार केंद्र रहा है। यह शहर फोर्ट कोच्चि, चीनी मछली पकड़ने के जाल, मट्टनचेरी पैलेस, और भारत के सबसे पुराने यूरोपीय चर्च जैसे आकर्षणों के साथ पुर्तगाली, डच और ब्रिटिश औपनिवेशिक प्रभावों का मिश्रण प्रदर्शित करता है।"
        },
        mysuru: {
          name: "मैसूरु",
          history: "कर्नाटक की सांस्कृतिक राजधानी, मैसूरु (मैसूर) वाडियार राजवंश की राजधानी के रूप में कार्य करता था। दशहरा त्योहार के दौरान 100,000 रोशनी से जगमगाता शानदार मैसूर पैलेस, इंडो-सारासेनिक वास्तुकला को प्रदर्शित करता है। यह शहर रेशम की साड़ियों, चंदन उत्पादों और योग के लिए प्रसिद्ध है।"
        },
        madurai: {
          name: "मदुरै",
          history: "भारत के सबसे पुराने शहरों में से एक, मदुरै 3 शताब्दी ईसा पूर्व का है। मीनाक्षी अम्मन मंदिर, हजारों रंगीन मूर्तियों से ढके अपने ऊंचे गोपुरमों के साथ, एक वास्तुशिल्प चमत्कार है। यह शहर संगम काल के दौरान तमिल शिक्षा और संस्कृति का एक प्रमुख केंद्र था।"
        },
        alleppey: {
          name: "अल्लेप्पी",
          history: "पूर्व का वेनिस के रूप में जाना जाने वाला, अल्लेप्पी (अलाप्पुझा) बैकवाटर, नहरों और लैगून के अपने नेटवर्क के लिए प्रसिद्ध है। खजूर के पेड़ों से घिरे जलमार्गों के माध्यम से पारंपरिक हाउसबोट क्रूज केरल के गांव के जीवन की एक अनूठी झलक पेश करते हैं। सालाना आयोजित होने वाली नेहरू ट्रॉफी बोट रेस एक शानदार आयोजन है।"
        },
        ooty: {
          name: "ऊटी",
          history: "पहाड़ी स्टेशनों की रानी, ऊटी (उधगमंडलम) को अंग्रेजों ने एक ग्रीष्मकालीन विश्राम स्थल के रूप में स्थापित किया था। नीलगिरि पहाड़ियों में 2,240 मीटर पर स्थित, इसमें औपनिवेशिक वास्तुकला, यूनेस्को विरासत नीलगिरि माउंटेन रेलवे, बॉटनिकल गार्डन, और घाटी के अद्भुत दृश्यों के साथ चाय बागान हैं।"
        },
        coorg: {
          name: "कूर्ग",
          history: "भारत के स्कॉटलैंड के रूप में जाना जाने वाला, कूर्ग (कोडागु) कॉफी बागानों, धुंध भरी पहाड़ियों और अद्वितीय कोडवा संस्कृति के लिए प्रसिद्ध एक पहाड़ी जिला है। इस क्षेत्र की एक मार्शल परंपरा है और 1834 में ब्रिटिश कब्ज़े से पहले कोडवा सरदारों द्वारा शासित था। एब्बे फॉल्स और राजा की सीट लोकप्रिय आकर्षण हैं।"
        },
        hampi: {
          name: "हम्पी",
          history: "एक यूनेस्को विश्व धरोहर स्थल, हम्पी विजयनगर साम्राज्य (1336-1565), सबसे महान हिंदू राज्यों में से एक की राजधानी थी। 4,100 हेक्टेयर से अधिक क्षेत्र में फैले खंडहरों में मंदिर, शाही संरचनाएं और बाज़ार शामिल हैं, जो एक अतिवास्तविक बोल्डर-बिखरे हुए परिदृश्य के बीच अद्भुत द्रविड़ वास्तुकला को प्रदर्शित करते हैं।"
        },
        pondicherry: {
          name: "पुडुचेरी",
          history: "1954 तक एक पूर्व फ्रांसीसी कॉलोनी, पुडुचेरी अपनी वास्तुकला, व्यंजन और संस्कृति में मजबूत गैलिक (फ्रांसीसी) प्रभावों को बरकरार रखती है। औपनिवेशिक इमारतों, पेड़-कतार वाली सड़कों, अरबिंदो आश्रम, और ऑरोविल (प्रयोगात्मक टाउनशिप) के साथ फ्रेंच क्वार्टर इसे पूर्व और पश्चिम का एक अनूठा मिश्रण बनाते हैं।"
        },
        visakhapatnam: {
          name: "विशाखापत्तनम",
          history: "भाग्य का शहर और पूर्वी तट का गहना, विशाखापत्तनम (विजाग) एक प्रमुख बंदरगाह शहर है जिसमें प्राचीन समुद्र तट, पहाड़ियाँ और घाटियाँ हैं। प्राचीन सिम्हाचलम मंदिर, बोरा गुफाएं (दस लाख साल पुरानी स्टैलेक्टाइट संरचनाएं), और आईएनएस कुरुसुरा पनडुब्बी संग्रहालय शहर के विविध आकर्षणों को प्रदर्शित करते हैं।"
        },
        tirupati: {
          name: "तिरुपति",
          history: "दुनिया के सबसे अधिक देखे जाने वाले तीर्थ स्थलों में से एक, पवित्र तिरुपति वेंकटेश्वर मंदिर का घर, तिरुपति सालाना लाखों भक्तों को प्राप्त करता है। मंदिर की उत्पत्ति प्राचीन काल की है, जिसमें वास्तुकला कई राजवंशों तक फैली हुई है। माना जाता है कि देवता भगवान वेंकटेश्वर भक्तों की इच्छाएं पूरी करते हैं।"
        },
        kolkata: {
          name: "कोलकाता",
          history: "सिटी ऑफ जॉय और ब्रिटिश भारत की पूर्व राजधानी, कोलकाता एक सांस्कृतिक और बौद्धिक केंद्र है। 1690 में स्थापित, इसमें विक्टोरिया मेमोरियल और हावड़ा ब्रिज जैसी औपनिवेशिक वास्तुकला है, जबकि यह आधुनिक भारतीय साहित्य, कला और बंगाल पुनर्जागरण का जन्मस्थान भी है। दुर्गा पूजा बेजोड़ भव्यता के साथ मनाई जाती है।"
        },
        gangtok: {
          name: "गंगटोक",
          history: "1,650 मीटर पर सिक्किम की राजधानी, गंगटोक दुनिया की तीसरी सबसे ऊंची चोटी कंचनजंगा के शानदार दृश्य प्रस्तुत करता है। यह शहर रुमटेक और एंचेय जैसे मठों, एमजी मार्ग पैदल क्षेत्र की विशेषता के साथ तिब्बती बौद्ध संस्कृति को आधुनिकता के साथ मिश्रित करता है, और उत्तरी सिक्किम की प्राचीन घाटियों के लिए एक प्रवेश द्वार के रूप में कार्य करता है।"
        },
        shillong: {
          name: "शिलांग",
          history: "पूर्व का स्कॉटलैंड, शिलांग 1972 तक असम की राजधानी था और अब मेघालय की राजधानी के रूप में कार्य करता है। 1,496 मीटर पर, इसमें चीड़ से ढकी पहाड़ियाँ, एलिफेंट फॉल्स जैसे झरने, सुंदर झीलें और एक जीवंत संगीत संस्कृति है जिसने इसे \"भारत की रॉक राजधानी\" का खिताब दिलाया।"
        },
        darjeeling: {
          name: "दार्जिलिंग",
          history: "पहाड़ियों की रानी, दार्जिलिंग अपने चाय बागानों और यूनेस्को-सूचीबद्ध दार्जिलिंग हिमालयन रेलवे (टॉय ट्रेन) के लिए विश्व प्रसिद्ध है। 2,042 मीटर पर, यह टाइगर हिल से कंचनजंगा के सूर्योदय के दृश्य, औपनिवेशिक युग की वास्तुकला, तिब्बती बौद्ध मठों और साहसिक गतिविधियों की पेशकश करता है।"
        },
        puri: {
          name: "पुरी",
          history: "चार पवित्र हिंदू तीर्थ स्थलों (चार धाम) में से एक, पुरी 12वीं शताब्दी के जगन्नाथ मंदिर का घर है। वार्षिक रथ यात्रा लाखों भक्तों को आकर्षित करती है। पुरी बीच और पास का कोणार्क सूर्य मंदिर (यूनेस्को साइट) इसे एक महत्वपूर्ण आध्यात्मिक और पर्यटन स्थल बनाते हैं।"
        },
        guwahati: {
          name: "गुवाहाटी",
          history: "पूर्वोत्तर भारत का प्रवेश द्वार, गुवाहाटी असम का सबसे बड़ा शहर है जो ब्रह्मपुत्र नदी के तट पर स्थित है। नीलाचल पहाड़ी के ऊपर स्थित प्राचीन कामाख्या मंदिर (शक्ति पीठ) एक प्रमुख तीर्थ स्थल है। यह शहर इस क्षेत्र के वाणिज्यिक और शैक्षिक केंद्र के रूप में कार्य करता है, जिसे न्यूयॉर्क टाइम्स द्वारा 2025 के गंतव्यों के लिए 4वां स्थान दिया गया है।"
        },
        kohima: {
          name: "कोहिमा",
          history: "1,444 मीटर पर नागालैंड की राजधानी, कोहिमा 1944 में कोहिमा की लड़ाई के लिए जाना जाता है, जो द्वितीय विश्व युद्ध में एक महत्वपूर्ण मोड़ था। कोहिमा युद्ध कब्रिस्तान इस इतिहास की याद दिलाता है। दिसंबर में हॉर्नबिल महोत्सव नागा आदिवासी संस्कृति, पारंपरिक कलाओं, नृत्यों और व्यंजनों को प्रदर्शित करता है।"
        },
        itanagar: {
          name: "ईटानगर",
          history: "अरुणाचल प्रदेश की राजधानी, ईटानगर का अर्थ है \"ईंटों का किला\"। 14वीं-15वीं शताब्दी के इटा किला के खंडहर ऐतिहासिक महत्व को दर्शाते हैं। इस शहर में सुंदर गोम्पा बुद्ध विहार मठ, पोलो पार्क है, और यह अरुणाचल की प्राचीन घाटियों, आदिवासी गांवों और मठों का पता लगाने के लिए एक प्रवेश द्वार के रूप में कार्य करता है।"
        },
        bhubaneswar: {
          name: "भुवनेश्वर",
          history: "भारत का मंदिर शहर, भुवनेश्वर में 6वीं से 13वीं शताब्दी के 500 से अधिक मंदिर हैं, जो कलिंग वास्तुकला को प्रदर्शित करते हैं। लिंगराज मंदिर, मुक्तेश्वर मंदिर, और राजाराणी मंदिर वास्तुशिल्प चमत्कार हैं। यह शहर ओडिशा की राजधानी के रूप में आधुनिक शहरी नियोजन के साथ प्राचीन विरासत को संतुलित करता है।"
        },
        portblair: {
          name: "पोर्ट ब्लेयर",
          history: "अंडमान और निकोबार द्वीप समूह की राजधानी, पोर्ट ब्लेयर भारत के उष्णकटिबंधीय स्वर्ग का प्रवेश द्वार है। राजनीतिक कैदियों को निर्वासित करने के लिए अंग्रेजों द्वारा इस्तेमाल की जाने वाली ऐतिहासिक सेलुलर जेल, अब एक राष्ट्रीय स्मारक के रूप में कार्य करती है। ये द्वीप प्राचीन समुद्र तटों, कोरल रीफ्स और समृद्ध समुद्री जैव विविधता की पेशकश करते हैं।"
        },
        pelling: {
          name: "पेलिंग",
          history: "2,150 मीटर पर पश्चिम सिक्किम का एक सुरम्य शहर, पेलिंग कंचनजंगा के लुभावने दृश्य प्रस्तुत करता है। प्राचीन पेमायंगत्से मठ और रबदेंत्से खंडहर (पूर्व सिक्किम राजधानी) इस क्षेत्र की बौद्ध विरासत को प्रदर्शित करते हैं। स्काईवॉक और चेनरेज़िग प्रतिमा प्राकृतिक सुंदरता के पूरक आधुनिक आकर्षण हैं।"
        },
        tawang: {
          name: "तवांग",
          history: "3,048 मीटर पर, तवांग भारत के सबसे बड़े मठ (तवांग मठ) का घर है, जिसकी स्थापना 1680 में हुई थी, जिसमें 450 भिक्षु रहते हैं। 6वें दलाई लामा का जन्मस्थान, यह मजबूत तिब्बती बौद्ध संस्कृति को दर्शाता है। सेला पास, माधुरी झील, और 1962 युद्ध स्मारक इस सुंदर सीमावर्ती शहर में आगंतुकों को आकर्षित करते हैं।"
        },
        cherrapunji: {
          name: "चेरापूंजी",
          history: "कभी पृथ्वी पर सबसे नम स्थान, चेरापूंजी (सोहरा) भारी मानसूनी वर्षा प्राप्त करता है जिससे नोहकालिकाई और सेवन सिस्टर्स फॉल्स जैसे आश्चर्यजनक झरने बनते हैं। खासी जनजाति द्वारा रबर के पेड़ की जड़ों का उपयोग करके बनाए गए अद्वितीय लिविंग रूट ब्रिज, यूनेस्को-सूचीबद्ध हैं। मावसमाइ गुफा स्पेलंकिंग (गुफा की खोज) रोमांच प्रदान करती है।"
        },
        imphal: {
          name: "इंफाल",
          history: "790 मीटर पर मणिपुर की राजधानी, इंफाल ने द्वितीय विश्व युद्ध में एक महत्वपूर्ण भूमिका निभाई। कांगला किला सदियों से मणिपुर के शासकों की सीट रहा है। लोकटक झील, अद्वितीय तैरते फुमडिस (द्वीप) के साथ पूर्वोत्तर भारत की सबसे बड़ी मीठे पानी की झील, और केइबुल लामजाओ राष्ट्रीय उद्यान प्रमुख आकर्षण हैं।"
        },
        aizawl: {
          name: "आइजोल",
          history: "मिजोरम की राजधानी, आइजोल 1,132 मीटर पर लकीरों पर स्थित है, जो मनोरम दृश्य प्रस्तुत करती है। यह शहर बांस के घरों, हथकरघा वस्त्रों और जीवंत त्योहारों के साथ मिज़ो संस्कृति को दर्शाता है। सोलोमन मंदिर, मिजोरम स्टेट म्यूजियम, और डर्टलांग हिल्स इस क्षेत्र की ईसाई विरासत और आदिवासी परंपराओं में अंतर्दृष्टि प्रदान करते हैं।"
        },
        agartala: {
          name: "अगरतला",
          history: "त्रिपुरा की राजधानी, अगरतला में 1901 में निर्मित शानदार उज्जयंता पैलेस (अब एक संग्रहालय) है, जो शाही विरासत को प्रदर्शित करता है। रुद्रसागर झील पर नीरमहल जल महल और प्राचीन त्रिपुरा सुंदरी मंदिर इस क्षेत्र के इतिहास को दर्शाते हैं। यह शहर बंगाली और आदिवासी संस्कृतियों का मिश्रण है।"
        },
        khajuraho: {
          name: "खजुराहो",
          history: "एक यूनेस्को विश्व धरोहर स्थल, खजुराहो 950-1050 ईस्वी के बीच चंदेल राजवंश द्वारा निर्मित अपने आश्चर्यजनक मध्यकालीन हिंदू और जैन मंदिरों के लिए प्रसिद्ध है। इन मंदिरों में जीवन के विभिन्न पहलुओं को दर्शाती जटिल नक्काशी है, जिसमें तांत्रिक परंपराओं का प्रतिनिधित्व करने वाली कामुक मूर्तियां शामिल हैं, जो असाधारण कलात्मक उपलब्धि को प्रदर्शित करती हैं।"
        },
        bhopal: {
          name: "भोपाल",
          history: "झीलों का शहर और मध्य प्रदेश की राजधानी, भोपाल की स्थापना 11वीं शताब्दी में हुई थी। यह विशिष्ट रूप से प्राचीन और आधुनिक वास्तुकला को मिश्रित करता है, जिसमें ताज-उल-मस्जिद (एशिया की सबसे बड़ी मस्जिदों में से एक), सांची स्तूप (यूनेस्को साइट), और दुखद 1984 गैस त्रासदी स्मारक शामिल है, जबकि अपनी विशिष्ट सांस्कृतिक पहचान बनाए रखता है।"
        },
        gwalior: {
          name: "ग्वालियर",
          history: "\"भारत के किलों के बीच मोती\" के रूप में वर्णित, अपने विशाल पहाड़ी किले के लिए जाना जाने वाला, ग्वालियर का 8वीं शताब्दी तक का समृद्ध इतिहास है। किला परिसर में महल, जटिल नक्काशी वाले मंदिर और तेली का मंदिर शामिल हैं। यह शहर हिंदुस्तानी शास्त्रीय संगीत में अपने योगदान के लिए भी प्रसिद्ध है।"
        },
        indore: {
          name: "इंदौर",
          history: "मध्य प्रदेश की वाणिज्यिक राजधानी और भारत का सबसे स्वच्छ शहर, इंदौर की स्थापना होल्कर राजवंश ने 1715 में की थी। राजवाड़ा पैलेस, लाल बाग पैलेस, और अहिल्याबाई होल्कर की ऊंची प्रतिमा शहर की शाही विरासत का जश्न मनाती है। यह स्ट्रीट फूड संस्कृति और जीवंत बाजारों के लिए प्रसिद्ध है।"
        },
        orchha: {
          name: "ओरछा",
          history: "1531 में स्थापित एक छिपा हुआ रत्न, ओरछा बुंदेला राजपूत प्रमुखों की राजधानी थी। यह शहर बेतवा नदी पर एक द्वीप पर आश्चर्यजनक महलों और मंदिरों को प्रदर्शित करता है। जहांगीर महल, राज महल, और राम राजा मंदिर समय में जमी हुई शानदार बुंदेला वास्तुकला को प्रदर्शित करते हैं।"
        },
        ujjain: {
          name: "उज्जैन",
          history: "हिंदू धर्म के सात पवित्र शहरों (सप्त पुरी) में से एक, उज्जैन हर 12 साल में कुंभ मेले की मेजबानी करता है। प्राचीन महाकालेश्वर मंदिर, बारह ज्योतिर्लिंगों में से एक, एकमात्र दक्षिण मुखी शिव मूर्ति को दर्शाता है। उज्जैन प्राचीन भारत में एक प्रमुख गणितीय और खगोलीय केंद्र था, जो ब्रह्मगुप्त जैसे विद्वानों का घर था।"
        },
        ranchi: {
          name: "रांची",
          history: "झारखंड की राजधानी, रांची अपने सुखद मौसम के कारण ब्रिटिश भारत के दौरान एक ग्रीष्मकालीन राजधानी थी। \"झरनों के शहर\" के रूप में जाना जाने वाला, इसमें हुंडरू, जोन्हा, और दसम फॉल्स हैं। यह शहर पहाड़ियों और जंगलों से घिरा हुआ है, आदिवासी संस्कृतियों का घर है, और महान क्रिकेटर एम.एस. धोनी का जन्मस्थान है।"
        },
        daman: {
          name: "दमन",
          history: "1961 तक एक पूर्व पुर्तगाली कॉलोनी, दमन किलों, चर्चों और समुद्र तटों के साथ औपनिवेशिक आकर्षण को बरकरार रखता है। मोती दमन किला, सेंट जेरोम किला, और पुर्तगाली शैली की वास्तुकला 450 वर्षों के पुर्तगाली प्रभाव को दर्शाती है। यह तटीय शहर मुख्य भूमि भारत से अलग एक आरामदेह माहौल प्रदान करता है।"
        },
        silvassa: {
          name: "सिल्वासा",
          history: "दादरा और नगर हवेली की राजधानी, सिल्वासा जंगलों और पहाड़ियों के बीच बसा हुआ है। 1954 में पुर्तगाली शासन से मुक्त, इसमें वारली कला, वनगंगा लेक गार्डन, और प्राकृतिक पार्क प्रदर्शित करने वाले आदिवासी संग्रहालय हैं। यह शहर एक औद्योगिक केंद्र के रूप में विकसित होते हुए आदिवासी विरासत को बनाए रखता है।"
        },
        nagpur: {
          name: "नागपुर",
          history: "ऑरेंज सिटी और महाराष्ट्र की शीतकालीन राजधानी, नागपुर भौगोलिक रूप से भारत के केंद्र में स्थित है। इस शहर में दीक्षाभूमि है, जो एक प्रमुख बौद्ध तीर्थ स्थल है जहाँ डॉ. बी.आर. अंबेडकर ने बौद्ध धर्म अपनाया था। नागपुर विदर्भ संस्कृति और बाघ अभयारण्यों के निकटता के लिए भी जाना जाता है।"
        },
        raipur: {
          name: "रायपुर",
          history: "छत्तीसगढ़ की राजधानी, रायपुर की जड़ें 9वीं शताब्दी ईस्वी तक जाती हैं। यह शहर सिरपुर में कई प्राचीन मंदिरों, बौद्ध स्थलों और आदिवासी गांवों के लिए प्रवेश द्वार के रूप में कार्य करता है। महंत घासीदास मेमोरियल म्यूजियम में आदिवासी कलाकृतियाँ हैं, जबकि आधुनिक रायपुर एक शैक्षिक और वाणिज्यिक केंद्र के रूप में उभर रहा है।"
        },
        jabalpur: {
          name: "जबलपुर",
          history: "नर्मदा नदी के तट पर स्थित, जबलपुर भेड़ाघाट में आश्चर्यजनक मार्बल रॉक्स के लिए प्रसिद्ध है, जहां नदी 100 फुट ऊंची संगमरमर की चट्टानों वाली एक कण्ठ से होकर बहती है। धुआंधार फॉल्स और प्राचीन गोंड किले शहर की प्राकृतिक सुंदरता और एक सांस्कृतिक केंद्र के रूप में ऐतिहासिक महत्व को दर्शाते हैं।"
        },
        pachmarhi: {
          name: "पचमढ़ी",
          history: "मध्य प्रदेश का एकमात्र हिल स्टेशन, पचमढ़ी सतपुड़ा रेंज में 1,067 मीटर पर स्थित है। 1857 में कैप्टन जेम्स फोर्ब्स द्वारा खोजा गया, इसमें औपनिवेशिक युग की वास्तुकला, पांडव गुफाओं में प्रागैतिहासिक गुफा चित्रों के साथ प्राचीन रॉक शेल्टर, झरने और घने जंगलों के बीच सुंदर दृष्टिकोण हैं।"
        },
        amarkantak: {
          name: "अमरकंटक",
          history: "1,065 मीटर पर एक पवित्र तीर्थ स्थल, अमरकंटक पवित्र नर्मदा और सोन नदियों का स्रोत है। प्राचीन नर्मदा कुंड मंदिर और माई की बगिया बॉटनिकल गार्डन तीर्थयात्रियों और प्रकृति प्रेमियों को आकर्षित करते हैं। यह क्षेत्र हिंदू परंपरा में आध्यात्मिक महत्व रखता है और शांत प्राकृतिक सुंदरता प्रदान करता है।"
        },
        chitrakoot: {
          name: "चित्रकूट",
          history: "अपार धार्मिक महत्व का एक शहर, चित्रकूट वह जगह है जहां रामायण के अनुसार भगवान राम, सीता और लक्ष्मण ने अपने 14 साल के वनवास के 11 साल बिताए थे। कामदगिरि मंदिर, मंदाकिनी नदी पर रामघाट, और कई आश्रम इसे हिंदुओं के लिए एक प्रमुख तीर्थ स्थल बनाते हैं।"
        },
        bhimbetka: {
          name: "भीमबेटका",
          history: "एक यूनेस्को विश्व धरोहर स्थल, भीमबेटका रॉक शेल्टर में 30,000 साल पहले से लेकर मध्यकाल तक के 500 से अधिक गुफाएं हैं जिनमें प्रागैतिहासिक रॉक पेंटिंग हैं। ये पेंटिंग शिकार, नृत्य, पशु लड़ाई और दैनिक जीवन को दर्शाती हैं, जो पाषाण युग से लेकर शुरुआती ऐतिहासिक काल तक अंतर्दृष्टि प्रदान करती हैं।"
        }
      },
      
  },    
  ta: {
    translation: {
      heroTitle: 'உங்கள் பயணத்தின் ஒவ்வொரு பகுதியையும் திட்டமிடுங்கள்',
      heroSubtitle: 'விமானங்கள், ஹோட்டல்கள், போக்குவரத்து மற்றும் அனுபவங்கள் அனைத்தையும் ஒரே இடத்தில் முன்பதிவு செய்யுங்கள். தடையற்ற பயண திட்டமிடலுக்கான உங்கள் முழுமையான பயண தீர்வு.',
      houseboats: 'படகு வீடுகள்',
      shikara: 'ஷிகாரா சவாரிகள்',
      flights: 'விமானங்கள்',
      hotels: 'ஹோட்டல்கள்',
      trains: 'ரயில்கள்',
      buses: 'பேருந்துகள்',
      cars: 'கார் வாடகை',
      tours: 'சுற்றுலாக்கள்',
      cruises: 'கப்பல் பயணங்கள்',
      activities: 'நடவடிக்கைகள்',
      packages: 'விடுமுறை தொகுப்புகள்',
      weekend: 'வார இறுதி விடுமுறைகள்',
      beaches: 'கடற்கரை தங்குமிடங்கள்',
      mountains: 'மலைப் பயணங்கள்',
      adventure: 'சாகசம்',
      citybreaks: 'நகரப் பயணங்கள்',
      photography: 'புகைப்பட சுற்றுப்பயணங்கள்',
      insurance: 'பயண காப்பீடு',
      passes: 'நகர அனுமதிச்சீட்டு',
      budget: 'குறைந்த விலை தங்குமிடங்கள்',
      bikes: 'பைக் வாடகை',
      villas: 'வில்லாக்கள் & வீடுகள்',
      todaysDeals: 'இன்றைய சூடான சலுகைகள்',
      exploreDestinations: 'இடங்களை ஆராயுங்கள்',
      seaFishRestaurants: 'கடல் மீன் உணவகங்கள்',
      backwaterVillageStay: 'காயல் கிராமத்தில் தங்குமிடம்',
      keralaChipsAndSpices: 'கேரளா சிப்ஸ் & மசாலா',
      keralaHandlooms: 'கேரள கைத்தறி',
      honeymoonBoatHouse: 'தேன்நிலவு படகு வீடு',
      houseboats: 'படகு வீடுகள்',
      food: "ஆன்லைனில் உணவு ஆர்டர் செய்யவும்",
      noHouseboatsFound: 'உங்கள் தேடலுக்குப் பொருந்தும் படகு வீடுகள் எதுவும் இல்லை.',

      budgetTravelDeals: 'உங்களுக்கான பட்ஜெட் பயண ஒப்பந்தங்கள்',
      offerHotels: 'ஹோட்டல்கள்',
      offerHouseboatsDayNightCruise: 'ஆலப்புழாவில் பகல் மற்றும் இரவு பயண படகு வீடுகள்',
      offerHouseboatsDayNight1Bedroom: 'ஆலப்புழாவில் பகல் மற்றும் இரவு 1 படுக்கையறை படகு வீடு',
      offerHouseboatsDayCruise1BedroomUpperDeck: 'ஆலப்புழாவில் பகல் பயண 1 படுக்கையறை மேல் தள riêng படகு வீடு',
      offerKeralaHoneymoonHouseboat: 'கேரள தேனிலவு படகு வீடு',
      offerHouseboatDayNight1BedroomUpperDeck: 'ஆலப்புழாவில் பகல் மற்றும் இரவு 1 படுக்கையறை மேல் தள riêng படகு வீடு',
      offerHouseboatsAlleppeyDayTripUpperDeck: 'ஆலப்புழாவில் பகல் பயண மேல் தள படகு வீடு',
      offerHouseboatsB2BPrice1Bedroom: 'ஆலப்புழாவில் 1 படுக்கையறைக்கான B2B விலை படகு வீடுகள்',
      offerSharingHouseboats2People: 'ஆலப்புழாவில் 2 பேருக்கான பகிர்வு படகு வீடு விலை',
      offerUltraPremiumHouseboats: 'ஆலப்புழாவில் அல்ட்ரா பிரீமியம் படகு வீடுகள்',
      offerKeralaTourBudgetPackages: 'கேரள சுற்றுலா பட்ஜெட் தொகுப்புகள்',
      offerKeralaBoating: 'கேரள படகு саവാരി',
      offerB2BTravelDealsKeralaHouseboat: 'கேரள படகு வீடு தொகுப்புகளுக்கான B2B விலை பயண ஒப்பந்தங்கள்',
      offerPetalsFlowers: 'இதழ்கள் பூக்கள்',
      offerOrchidForSale: 'விற்பனைக்கு ஆர்க்கிட் - ஆர்க்கிட் பூக்கும் தாவரங்கள்',
      offerOxidisedOrnaments: 'ஆக்ஸிஜனேற்றப்பட்ட ஆபரணங்கள்',
      offerKeralaHandloomsSarees: 'கேரள கைத்தறி - கேரள காசவு புடவைகள்',
      offerKeralaHandicrafts: 'கேரள கைவினைப்பொருட்கள்',
      offerKeralaChips: 'கேரள சிப்ஸ் - கேரள வாழை சிப்ஸ்',
      offerKeralaSpices: 'கேரள மசாலாப் பொருட்கள்',
      offerDriedFish: 'உலர்ந்த மீன்',
      offerKeralaRealEstate: 'கேரள ரியல் எஸ்டேட்',
      offerKeralaLottery: 'கேரள லாட்டரி டிக்கெட்டுகள் - கேரள பம்பர் லாட்டரி டிக்கெட்டுகள்',
      offerKeralaHomeDecor: 'கேரள வீட்டு அலங்காரம்',
      offerTransportationInKerala: 'கேரளாவில் போக்குவரத்து',
      offerKeralaCoirProducts: 'கேரள தேங்காய் நார் பொருட்கள்',
      whyChooseTitle: 'சுற்றுலா சொர்க்கத்தை ஏன் தேர்வு செய்ய வேண்டும்',
      whyChooseSubtitle: 'எங்கள் விரிவான சேவைகள் மற்றும் நிபுணர் வழிகாட்டுதலுடன் பயண திட்டமிடலை எளிதாக்குகிறோம்',
      showLess: 'குறைவாக காட்டு',
      showMore: 'மேலும் காட்டு',
      destinationNotFound: {
        title: "இலக்கு கிடைக்கவில்லை",
        description: "மன்னிக்கவும், நீங்கள் தேடும் இடத்தை கண்டுபிடிக்க முடியவில்லை."
      },
      goBack: "இலக்குகளுக்கு திரும்பச் செல்லவும்",
      thingsToDo: "செய்ய வேண்டியவை",
      aboutDestination: "இலக்கைப் பற்றி",
      getInTouch: "தொடர்பு கொள்ளுங்கள்",
      chatOnWhatsApp: "வாட்சாப்பில் உரையாடவும்",
      instantResponse: "உடனடி பதில்",
      sendEmail: "மின்னஞ்சல் அனுப்புக",
      emailAddress: "info@tourismparadise.com",
      houseboatShort: "அலப்புழையில் நாள் மற்றும் இரவு 1 படுக்கையறை மேல்தளம் தனியார் ஹவுஸ்போட்.",
      exploreNow: "இப்போது பார்க்கவும்",
      planYourVisitTitle: "உங்கள் பயணத்தை திட்டமிடுங்கள்",
      planYourVisitSubtitle: "படிவத்தை நிரப்புங்கள், நாங்கள் 24 மணிநேரத்திற்குள் தொடர்பு கொள்கிறோம்",
      labelFullName: "முழு பெயர் *",
      placeholderFullName: "உங்கள் முழு பெயரை உள்ளிடவும்",
      labelEmail: "மின்னஞ்சல் முகவரி *",
      placeholderEmail: "your.email@example.com",
      labelPhone: "தொலைபேசி எண்",
      placeholderPhone: "+91 98765 43210",
      labelMessage: "உங்கள் செய்தி *",
      placeholderMessage: "உங்கள் பயணம், விருப்பங்கள் மற்றும் கேள்விகள் பற்றி சொல்லுங்கள்...",
      sending: "அனுப்பப்படுகிறது...",
      sendInquiry: "விண்ணப்பத்தை அனுப்பவும்",
      successMessage: "✓ செய்தி வெற்றிகரமாக அனுப்பப்பட்டது! நாங்கள் விரைவில் தொடர்பு கொள்கிறோம்.",
      whatsappMessage: "வணக்கம்! நான் {{name}}, {{country}} செல்ல விரும்புகிறேன். மேலும் தகவல் தர முடியுமா?",
      emailSubject: "{{destinationName}} குறித்து விசாரணை",
      emailBodyTemplate: "வணக்கம்,\n\nநான் {{destination}} பற்றி மேலும் அறிய விரும்புகிறேன்.\n\nநன்றி!"
        },featureList: {
      pilgrimPackages: 'சிறந்த புனித யாத்திரை தொகுப்புகள்',
      pilgrimDescription: 'அமைதியான ஆன்மீகப் பயணத்திற்காக புனிதத் தலங்களுக்கு கவனமாகத் தொகுக்கப்பட்ட யாத்திரைச் சுற்றுப்பயணங்கள்.',
      industrialTitle: 'தொழில்துறை ஆலோசனை சேவை மற்றும் தொழிலாளர் சப்ளையர்',
      industrialShortDesc: 'திட்ட அறிக்கைகள் மற்றும் நிதி வழிகாட்டுதல் முதல் பொறியாளர்கள், தொழில்நுட்ப வல்லுநர்கள் மற்றும் கட்டுமான ஒப்பந்தக்காரர்கள் போன்ற திறமையான தொழிலாளர்களை வழங்குவது வரை, உங்கள் அனைத்து தொழில் மற்றும் வணிகத் தேவைகளையும் நாங்கள் பூர்த்தி செய்கிறோம்.',
      industrialFullDesc: 'திட்ட அறிக்கை தயாரித்தல், நிதி வழிகாட்டுதல், கட்டுமான மேற்பார்வை, திட்டம் மற்றும் மதிப்பீடு தயாரித்தல், தொழில் மற்றும் ஹோட்டல் இயந்திரங்கள், கட்டுமானத் தொழிலாளர்கள் மற்றும் ஒப்பந்தக்காரர்கள், மின்சாரம், பிளம்பிங், ஏர் கண்டிஷனர், கட்டுமானம், வீட்டு உபகரணங்கள், பிரிட்ஜ், சலவை இயந்திரம், ஏர் கண்டிஷனர், ஆட்டோமொபைல், வாகன, கணினி, மொபைல் போன், செல்லுலார் போன், லிப்ட் ஆபரேட்டர், வீட்டு அலங்காரம், நகைகள் மற்றும் ஆபரணங்கள், காபி மற்றும் சிற்றுண்டி தயாரிப்பவர், கொத்தனார், தச்சன், வெல்டர், இயந்திரங்கள் நிறுவுதல், பெயிண்டர், சுத்தம் செய்தல், ஹோட்டல்கள், ஓட்டுநர், அலுமினிய புனைவு, எஃகு புனைவுகள், வீட்டு வேலைக்காரர்கள், தோட்ட வேலை, கனரக வாகனங்கள் மற்றும் இயந்திர ஆபரேட்டர்கள், இணையதள வடிவமைப்பு மற்றும் ஹோஸ்டிங், சூரிய சக்தி அமைப்பு நிறுவல் வீட்டு சேவைகள், ஆய்வக தொழில்நுட்ப வல்லுநர்கள், பொறியாளர்கள் மற்றும் மருத்துவர்கள், ஆசிரியர்கள், சலவை, வீட்டு பராமரிப்பு போன்றவை.',
      educationTitle: 'கல்வி ஆலோசனை சேவை',
      educationDescription: 'பொறியியல், மருத்துவக் கல்லூரி, விவசாயம், கணினி AI, LLB, MBA, BBA, MCA, ஆய்வக தொழில்நுட்ப வல்லுநர்கள், பிசியோதெரபி, பல் மருத்துவம், ஆயுர்வேத போன்றவை.',
      legalTitle: 'வக்கீல் மற்றும் வழக்கறிஞர்கள்',
      legalDescription: 'அனுபவம் வாய்ந்த வக்கீல்கள் மற்றும் வழக்கறிஞர்களிடமிருந்து தொழில்முறை சட்ட ஆலோசனை மற்றும் சேவைகளுக்கான அணுகல்.',
    },
    popularDestinations: {
  title: "இந்தியாவில் மேலும் குறிக்கோள்களை ஆராயுங்கள்",
  subtitle: "விவிதமான மாநிலங்களில் உள்ள நகரங்களில் செய்வதற்கான விஷயங்களை கண்டறியவும்",
  thingsToDo: "செய்வேண்டியவை",
  comingSoonTitle: "விரைவில் வருகிறது!",
  comingSoonDescription: "நாம் {{continent}} இல் அற்புதமான இடங்களைச் சேர்க்கிறோம். உடனே திரும்பி சரிபார்க்கவும்!",
  northIndia: "வட இந்தியா பயண இலக்குகள்",
  southIndia: "தெற்கு இந்தியா பயண இலக்குகள்",
  eastIndia: "கிழக்கு மற்றும் வடகிழக்கு இந்தியா இலக்குகள்",
  centralIndia: "மத்திய இந்தியா இலக்குகள்",
  delhi: {
    name: "தேலி",
    country: "தேலி",
    history: "இந்தியாவின் தலைநகரான தேலிகூட 2,000 ஆண்டுகளுக்கும் மேலான வளமையான வரலாற்றைப் பொறுத்துள்ளது. மொகல் ஆட்சியாளர்களால் உருவாக்கப்பட்ட தாக்கமளிக்கும் பள்ளத்தாக்குகள், கோட்டைகள் மற்றும் சின்னங்கள் இந்த நகரத்தை நிரப்புகின்றன. அதி மிகப்பெரிய செவ்வாய் கோட்டை முதல் பிரபலமான இண்டியா கேட் வரை, தேலி பழமையான பாரம்பரியத்தையும் நவீன அடித்தள அமைப்புகளையும் இணைத்து, ஒன்று பார்வைதர வேண்டிய இடமாக இருக்கிறது."
  },
  jaipur: {
    name: "ஜெய்ப்பூர்",
    country: "ராட்சஸ்தான்",
    history: "பிங்க் நகராக பிரசித்தியான ஜெய்ப்பூர் ராட்சஸ்தானின் தலைநகராகும் மற்றும் இந்தியாவின் கலந்துரையாடல் த்ரையங்கிலின் ஒரு பகுதி. இது 1727 ஆம் ஆண்டில் நிறுவப்பட்டது. இத்தகம் சாம்ராஜ்ய அரண்மனைகள், அமெர்கோட்டை மற்றும் ஹவா மஹால் போன்ற சிறப்பு கோட்டைகள் மற்றும் சுறுசுறுப்பு சந்தைகளுக்காகப் புகழ்பெற்றது. ஜெய்ப்பூர் ராஜ்புத் கட்டிடக்கலை மற்றும் பண்பாட்டின் பரிசுத்தையை பிரதிபலிக்கிறது."
  },
  agra: {
    name: "அக்ரா",
    country: "உத்தர் பிரதேசம்",
    history: "உலகின் ஏழு அதிசயங்களில் ஒன்றான மறக்க முடியாத தாஜ்மஹால் இங்கு அமைந்துள்ளது. அக்ரா 1556–1658 காலத்தில் மொகல் பேரரசின் தலைநகரமாக இருந்தது. அக்ரா கோட்டை மற்றும் பாதேபூர் சிக்ரி போன்ற வளிமான மொகல் கட்டிடக்கலையின் அதிர்ஷ்டமான உதাহரணைகள் இங்கு காணப்படுகின்றன."
  },
  varanasi: {
    name: "வராதநதி (வராணசி)",
    country: "உத்தர் பிரதேசம்",
    history: "உலகில் தொடர்ந்து குடியேற்றிக் கொண்டிருக்கும் பழமையான நகரங்களில் ஒன்றான வராணசி இந்து மதத்திற்கான முக்கிய ஆன்மீக மையமாகும். புனித கங்கை ஆற்றின் கரையில் அமைந்தது; அதன் காடுகள், பழமையான கோயில்கள் மற்றும் ஆன்மீக முக்கியத்துவம் புகழ்பெற்றவை. மார்க் ட்வேன் ஒருபோதும் கூறியதுபோல், 'பேனரஸ் வரலாற்றைவிட பழமையானது, பாரம்பரியத்தைவிட பழமையானது, புராணங்களைவிடவும் பழமையானது.'"
  },
  amritsar: {
    name: "அம்ரித்சர்",
    country: "பஞ்சாப்",
    history: "1577 இல் குரு ராம் தாஸ் நிறுவிய அம்ரித்சர் சிக்குத் தர்மத்தின் புனிதமான தங்க கோவிலான ஸ்வர்ண மந்திரத்திற்கு வீடு. 1919 இல் ஜல்லியான் வாலா பாக் வதம் நிகழ்ந்தது. இது சிக் மரபு, ஆன்மீகத்தன்மை மற்றும் பொறுமையின் சின்னமாக நிற்கிறது. வாகா எல்லை விழா ஒரு முக்கிய ஈர்ப்பு பொழுது."
  },
  manali: {
    name: "மானாலி",
    country: "கிமாச்சல் பிரதேசம்",
    history: "ஹிமாலயத்தின் அர்ப்பணிப்பில் சுமார் 2,050 மீட்டர் உயரத்தில் அமைந்த மானாலி தனது இயற்கை அழகு, சாகச விளையாட்டுகள் மற்றும் பழமையான ஹிடிம்பா கோவிலுக்காகப் பிரபலமான ஒரு மலையிருப்பு நகரம். மலைச்சிகரங்கள், ஆப்பிள் தோட்டங்கள் மற்றும் ரோஹ்டாங் பாஸ்ஸுக்கு, சொலங் பள்ளத்தாக்கிற்கு வாயிலாக இங்கு உண்மையான இயற்கை அனுபவம் கிடைக்கிறது."
  },
  leh: {
    name: "லே (லடாக்)",
    country: "லடாக்",
    history: "லடாக் மாநிலத்தின் தலைநகரான லே சுமார் 3,500 மீட்டர் உயரத்தில் அமைந்துள்ளது மற்றும் பழமையான காட்டுப்பாதை (சில்க் ரோட்) வழிகளில் முக்கிய நிறுத்தமாக இருந்தது. காடுமில்லாத, மிக அழகான நிலக்கரங்கள், பௌத்த மாதங்களும், பாங்காங் ஏரி போன்ற உயரமான ஏரிகளும் இங்கு காணப்படுகின்றன. லே திபெத்திய கலாச்சாரம் மற்றும் அரிய ஹிமாலயக் காட்சிகளை வழங்குகிறது."
  },
  rishikesh: {
    name: "ரிஷிகேஷ்",
    country: "உத்தரகாண்ட்",
    history: "யோகத்தின் உலக தலைநகராகக் கருதப்படும் ரிஷிகேஷ் கங்கையின் கரையில் அமைந்த ஒரு ஆன்மீக நகரமாகும். ஆசிரம்கள், யோக மையங்கள் மற்றும் பிரபலமான லக்ஷ்மண் ஜூலா கம்பி பாலம் இங்கு உள்ளன. ஆன்மீக தேடல்களுக்கும் சாகச ஆர்வலர்களுக்கும் இதுவொன்று ஈர்ப்பைப் படுத்துகிறது. 1968 இல் பீட்ல்ஸ் குழுவின் பயணம் இதனை உலகளாவிய புகழ் கொண்டதாக்கியது."
  },
  udaipur: {
    name: "உதயபுரம் (உடைபூர்)",
    country: "ராட்சஸ்தான்",
    history: "ஏரிகளின் நகராக அழைக்கப்படும் உதயபுரம் 'கிழக்கின் வேனிஸ்' என்று அழைக்கப்படுகிறது. 1559 இல் மஹாரானா உதய் சிங் II நிறுவனம்செய்த இந்த நகரம் சிட்டி பேலஸ் மற்றும் லேக் பேலஸ் போன்ற பெரிய அரண்மனைகளால் நிரம்பியுள்ளது. பிச்சோலா மற்றும் படேத் வாழ்க்கை போன்ற அழகான ஏரிகள் இங்கு காணப்படும்."
  },
  shimla: {
    name: "ஷிம்லா",
    country: "கிமாச்சல பிரதேசம்",
    history: "பிரிட்டிஷ் இந்தியாவின் முன்னாள் கோடையில் ஓய்விடமாக இருந்த ஷிம்லா விக்டோரியன் கட்டிடக்கலை மற்றும் அழகான மலைப்பகுதிகளைக் கொண்டுள்ளது. விகேிரியல் லொட்ஜ் மற்றும் கிரிஸ்ட் சர்ச் போன்ற இடங்கள் இங்கே காணப்படுகின்றன. யானை மலைகள், புகழ்பெற்ற மால் ரோடு மற்றும் கல்கா-ஷிம்லா ரயில்வே (UNESCO) இவை முக்கிய ஈர்ப்புகள்."
  },
  mussoorie: {
    name: "மசூரி",
    country: "உத்தரகாண்ட்",
    history: "மலையாட்சியின் ராணி என்று அழைக்கப்படும் மசூரி 1826 இல் பிரிட்டிஷ் காலத்தில் நிறுவப்பட்டது. சுமார் 2,005 மீட்டர் உயரத்தில் அமைந்துள்ள இது டூன் பள்ளத்தாக்கின் மற்றும் ஹிமாலய வரிசைகளின் அழகான காட்சிகளை வழங்குகிறது. கண் ஹில், கெம்ப்டி நீர்வீழ்ச்சி மற்றும் கேமல் பேக் ரோடு போன்ற இடங்கள் பிரபலமானவை."
  },
  srinagar: {
    name: "ஸ்ரீநகர்",
    country: "ஜம்மு & காஷ்மீர்",
    history: "ஜம்மு & காஷ்மீரின் கோடைமுகத் தலைநகரான ஸ்ரீநகர் தால் ஏரி, சாலிமார் பான் மற்றும் நிசாத் பான் போன்ற முசலான பயங்கரவாக்கிய பூங்காக்களால் புகழ்பெற்றது. பாரம்பரிய ஹவுஸ்போடுகள் மற்றும் தீவிர அழகு இதனை 'பூமிப்பரப்பில் சொர்கம்' என்று அழைக்கவைக்கிறது."
  },
  jaisalmer: {
    name: "ஜைசல்மர்",
    country: "ராட்சஸ்தான்",
    history: "தாரின் மணற்பாறைகளில் எழும் பொன் நிற நகரமான ஜைசல்மர் அதன் மஞ்சள் மணல்கற் கோட்டை மற்றும் நகைப் படுகைகள் மூலம் பிரசித்தி பெற்றது. 1156 இல் நிறுவப்பட்ட இந்த நகரம் ஊட்டுப்பயண வழிகளில் முக்கிய வர்த்தக மையமாக இருந்தது. கோட்டை, சமா மணல்பளுக்கள் மற்றும் நறுமணமான சீனிவட்ட நம்பிகள் இங்கு காணப்படுகின்றன."
  },
  nainital: {
    name: "நைனிடால்",
    country: "உத்தரகாண்ட்",
    history: "2,084 மீட்டர் உயரத்தில் அமைந்த அழகான நைனி ஏரி இந்த நகரத்தின் மையமாக அமைந்துள்ளது. 1841 இல் பிரிட்டிஷ் காலத்தில் ஒரு ஹில் ஸ்டேஷனாக முதன்முதலில் வளர்க்கப்பட்டது. ஏழு மலைகள் சுற்றியுள்ள இந்த ஏரி அமைதியாய் உலா செல்லும் சூழலை உருவாக்குகிறது. நைனா தேவியின் கோயில், ஸ்னோ வியூ பாயிண்ட் மற்றும் ஏரியில் படகθηிப்பு ஆகியவை முக்கிய ஈர்ப்புகள்."
  },
  vrindavan: {
    name: "விரிந்தாவன்",
    country: "உத்தர பிரதேசம்",
    history: "இந்துமதத்தின் மிகவும் புனிதமான நகரங்களில் ஒன்றான விரிந்தாவன் கர்ஷ்ணரின் குழந்தைத்திற்கான நினைவிடம் என நம்பப்படுகிறது. 5,000 க்கும் மேற்பட்ட கோயில்கள் உட்பட, பிரபலமான பாங்கே பிகாரி மற்றும் ISKCON கோயில்கள் இங்கு உள்ளன. இந்த ஊர் வழிபாட்டிற்கு முக்கியமானது மற்றும் அர்ப்பணிப்பு நிறைந்த ஹோலி திருவிழாவிற்கு பெயர்ப் பெற்றது."
  },
  haridwar: {
    name: "ஹரித்வார்",
    country: "உத்தரகாண்ட்",
    history: "இந்துக்களின் ஏழு புனித நகரங்களில் ஒன்றான ஹரித்வார் கங்கை நதி சமவெளிக்கு அறிமுகப்படுத்தும் இடமாக அமைந்துள்ளது. ஒவ்வொரு 12 ஆண்டிலும் நடைபெறும் கும்பா மேளின் மூலம் லட்சக்கணக்கான யாத்திராளர்கள் இங்கு கூடி வருகின்றனர். ஹரின் பொடியிலுள்ள மாலை நேர கங்கை ஆர்தி ஒரு மந்திரமயமான ஆன்மீக அனுபவமாகும்."
  },
  mumbai: {
    name: "மும்பை",
    country: "மகாராஷ்டிரா",
    history: "இந்தியாவின் நிதி தலைநகரான மும்பை கனவுகளின் நகரமாக அழைக்கப்படுகிறது. முதற்கட்டமாக ஏழு தீவுகள் கொண்டது; 1661 இல் அது பிரிட்டிஷ்களுக்கு ஒப்படைக்கப்பட்டது. கேட் ஆஃப் இந்தியா, மரைன் டிரைவ் மற்றும் பாலிவுட் திரைப்படத் துறையைக் கொண்டு இது மிகப் பிரபலமானது. காலனியக் கட்டிடக்கலை மற்றும் நவீன வான்களைக் கலந்துள்ள நகரம் இது."
  },
  bengaluru: {
    name: "பெங்களூர்",
    country: "கர்நாடகா",
    history: "இந்தியாவின் சிலிகான் பள்ளிவயல் என்றும் தோட்ட நகரமாகவும் அறியப்படும் பெங்களூர் 1537 ஆம் ஆண்டு கெம்பே கவுடா நிறுவினார். பெங்களூர் அரண்மனை, திபு சுல்தான் கோட்டையை போன்ற பாரம்பரிய இடங்கள் மற்றும் லால் பாக் மற்றும் கியூபன் பார்க் போன்ற அழகான பூங்காக்களை இணைத்துள்ளது; இதன் ஐடி வலையமைப்பு மிகவும் அதிகம்."
  },
  goa: {
    name: "கவா",
    country: "கவா",
    history: "1961 வரை போர்த்துகீசிய ஆலயமாக இருந்த கவா இந்தியாவின் மிகவும் சிறிய மாநிலமாகும்; அதின் அழகான கடற்கரைகள், உள்நாட்டு இரவு வாழ்வு மற்றும் காலனிய கட்டிடக்கலைக்காகப் புகழ்பெற்றது. பாசிலிகா ஆஃப் பாம் ஜிசஸ் மற்றும் ஃபோர்ட் அகுவாதா போன்றவை போர்த்துகீசிய பாரம்பரியத்தை பிரதிபலிக்கின்றன; பாகா மற்றும் பாலோலம் போன்ற கடற்கரைகள் உலகம் முழுவதும் சுற்றுலாப்பயணிகளை ஈர்க்கின்றன."
  },
  kerala: {
    name: "கேரளம்",
    country: "கேரளம்",
    history: " 'தெய்வத்தின் சொந்தப் நாட்டாக' அழைக்கப்படும் கேரளம் தனது பேக்வாட்டர்கள், ஆயுர்வேத சிகிச்சைகள் மற்றும் பசுமையான பயிர்களாலு புகழ்பெற்றது. ரோமர், அரபு மற்றும் ஐரோப்பியர்களுடன் வர்த்தகத்தில் சமூகம் வளர்ந்தது. கதகலி நடனம், ஸ்நேக் பாரம்பரிய படகப்போராட்டங்கள் மற்றும் தேங்காய் மற்றும் மசாலா கலந்த பாரம்பரிய உணவு இதன் பண்பாட்டு அம்சங்களாகும்."
  },
  hyderabad: {
    name: "ஹைதராபாத்",
    country: "தெலுங்கانہ",
    history: "1591 இல் முகமது குலி குட்ப் ஷா நிறுவிய ஹைதராபாத் அதன் செழிப்பான வரலாறு, பிரபல பிரியாணி மற்றும் முத்து வர்த்தகத்துக்காக பெயர்பெற்றது. குட்டும்நார் – சுகொண்டா கோட்டை மற்றும் குட்ப் ஷாஹி கதிரிகள் ஆகியவை நகரத்தின் நிசாமி மரபை பிரதிபலிக்கின்றன. இப்போது இது ஒரு முக்கிய ஐடி மையமாக மாறியுள்ளது."
  },
  chennai: {
    name: "சென்னை",
    country: "தமிழ்நாடு",
    history: "முன்பு மத்ராஸ் என்றும் அழைக்கப்பட்ட சென்னை தமிழ்நாட்டின் தலைநகராகவும் தென் இந்திய கலாச்சாரம் வாயிலாக அறியப்படுகின்றது. 1639 இல் பிரிட்டிஷ் காலத்தில் நிறுவப்பெற்ற இது மெரினா கடற்கரை (உலகின் நீண்ட நகர கடற்கரைகளில் ஒன்று), கபாலீஸ்வரர் கோயில் மற்றும் ஃபோர்ட் சென்ட் ஜார்ஜ் உடையவை போன்ற முக்கிய இடங்களை கொண்டுள்ளது. இதன் கர்னாடிக் இசை மற்றும் பரதநாட்டிய நடனக்கலைப் புகழ் பெற்றது."
  },
  kochi: {
    name: "கொச்சி",
    country: "கேரளம்",
    history: "அரபுக் கடலின் ராணி என்று அழைக்கப்படும் கொச்சி (கொசின்) பழமையாகவே ஒரு முக்கிய மசாலை வர்த்தக மையமாக இருந்தது. ஃபோர்ட் கொச்சி, சீன மீன் பிடியல்த் தாக்கங்கள், மட்டன்சேரி அரண்மனை மற்றும் மிகப் பழமையான ஐரோப்பிய கோ churches போன்றவை போர்த்துகீசிய, டச்சு மற்றும் பிரிட்டிஷ் செவ்வியல் தாக்கங்களை பிரதிபலிக்கின்றன."
  },
  mysuru: {
    name: "மைசூர்",
    country: "கர்நாடகா",
    history: "கர்நாடகாவின் பண்பாட்டு தலைநகரான மைசூர் (மைசூர்) வாச்யார் அரசரசின் தலைமையகம் ஆக இருந்தது. தசரா திருவிழா காலத்தில் மைசோர் அரண்மனை அலங்கரிக்கப்படும் ஒளியால் பிரகாசிப்பதைக் காணலாம். செந்துநீர் மற்றும் சந்நிதி கைவினைகள் மற்றும் யோகத்திற்கும் பிரபலமானது."
  },
  madurai: {
    name: "மதுரை",
    country: "தமிழ்நாடு",
    history: "இந்தியாவின் மிக பழமையான நகரங்களில் ஒன்றான மதுரை மூன்றாவது நூற்றாண்டு கி.மு. காலத்திற்குச் சுட்டுண்டது. மீனாட்சி அம்மன் கோயில் அதன் உயரமான கோபுரங்கள் மற்றும் ஆயிரக்கணக்கான வண்ணமயமான சிற்பங்களால் ஒரு கட்டிடக்கலை அதிசயமாகும். சங்க காலத்தில் தமிழ்ப் கல்வி மற்றும் பண்பாட்டிற்கான முக்கிய மையமாக மதுரை இருக்கிறது."
  },
  alleppey: {
    name: "அல்லேப்பி (அலப்புஜா)",
    country: "கேரளம்",
    history: "கிழக்கின் வெனிஸ் என அழைக்கப்படும் அல்லேப்பி (அலப்புஜா) அதன் பேக்வாட்டர்கள், காலவுந்தல்கள் மற்றும் லாகூன்களின் நெடுவரிசைக்காக பிரசித்தி பெற்றது. பாரம்பரிய ஹவுஸ்போட் படகுல் பயணங்கள் கிராமப்புற வாழ்க்கையின் தனித்துவமான காட்சியைக் கொடுக்கும். ஆண்டு நினைவில் நெஹ்ரு ட்ரொபி படகப்போட்டி ஒரு பெரிய நிகழ்ச்சி."
  },
  ooty: {
    name: "உட்டி (உதகமண்டலம்)",
    country: "தமிழ்நாடு",
    history: "ஹில் ஸ்டேஷன்களின் ராணி என்று அழைக்கப்படும் உட்டி (உதகமண்டலம்) பிரிட்டிஷ் காலத்தில் ஒரு கோடை ஓய்வு இடமாக நிறுவப்பட்டது. நீலகிரி மலைகளில் சுமார் 2,240 மீட்டர் உயரத்தில் அமைந்த இந்த இடம் காலனியல் கட்டிடக்கலை, யுனெஸ்கோ பட்டியலிடப்பட்ட நீலகிரி மலை ரயில்வே, பூங்காக்கள் மற்றும் தேயிலை தோட்டங்களுடன் பிரமாண்டமான பள்ளத்தாக்குக் காட்சிகளை வழங்குகிறது."
  },
  coorg: {
    name: "கூर्ग் (கொடகு)",
    country: "கர்நாடகா",
    history: "இந்தியாவின் ஸ்காட்லாந்தாக அழைக்கப்படும் கூட, கூर्गு (கொடகு) காப்பி தோட்டங்கள், முத்திரை மலைகள் மற்றும் தனித்துவமான கொடகா பண்பாட்டுக்காக புகழ்பெற்றது. இந்தப் பிரதேசத்துக்கு ஒரு சைய விடுதி மரபு உள்ளது; 1834 முதல் பிரிட்டிஷ் ஆட்சிக்கு முன்பு உள்ளூர் கொடகு தலைவர்களால் ஆட்சியாயிருந்தது. ஆபி பல்ஸும் ராஜாவின் இருக்கையும் பிரபலமான இடங்களாக உள்ளன."
  },
  hampi: {
    name: "ஹாம்பி",
    country: "கர்நாடகா",
    history: "யுனெஸ்கோ உலக பாரம்பரிய தளமாகிய ஹாம்பி விஜயநகர் பேரரசின் (1336–1565) தலைநகரமாக இருந்தது. 4,100 ஹெக்டேர் மேலான பரப்பில் பரவி இருக்கும் தாழ்வுநிலைக் கொழும்புகளால் சூழப்பட்ட சிதைந்த கட்டிடங்கள், கோயில்கள் மற்றும் சந்தைகள் துவாரிநீக்கம் கொண்ட தனிமையான கல்லாப் பரிசுப்பரப்பில் அரியவகை திவங்கள் போன்ற வித்தியாசமான கண்டுபிடிப்புகளை வழங்குகின்றன."
  },
  pondicherry: {
    name: "புதுச்சேரி (பாண்டிச்சேரி)",
    country: "புதுச்சேரி",
    history: "1954 வரை ஒரு பிரெஞ்சு காலனியாக இருந்த புதுச்சேரி அதன் கட்டிடக்கலை, சமையல் மற்றும் கலாச்சாரத்தில் பல பரிமாணமான பறவைகளை தக்க வைத்துள்ளது. பிரெஞ்சு குவார்டர், மரத்தடிகள் கொண்ட சாலைகள், அரவிந்தோ ஆசிரமம் மற்றும் ஆரோவிலின் பயோஸ் (ஆரோவிலின் экспериментல் டவுன்ஷிப்) இத்தாலையை மேற்கு-கிழக்கின் தனித்துவமான கலவையை உருவாக்குகின்றன."
  },
  visakhapatnam: {
    name: "விசாகப்பட்டினம் (விசாக்)",
    country: "ஆந்திரப்பிரதேசம்",
    history: "உதவிக்குரிய நகரம் மற்றும் கனுத்திருவெலின் கன்னாலையை கொண்ட வடகிழக்கு கடற்கரையின் ஒளிரும் ரত்னம், விசாகப்பட்டினம் (விசாக்) முக்கிய துறைமுக நகரமாகும். பழமையான சிம்ஹச்சலம் கோயில், போரா குகைகள் மற்றும் INS குருசுரா கப்பல் அருங்காட்சியகம் நகரத்தின் பரவலான ஈர்ப்புகளை காட்டுகின்றன."
  },
  tirupati: {
    name: "திருப்பதி",
    country: "ஆந்திரப்பிரதேசம்",
    history: "புனித திருமலை வெங்கடேஸ்வர் கோயிலின் இல்லமான திருப்பதி உலகில் மிகவும் பார்வையிடப்படும் தரிசனத் தளங்களில் ஒன்றாகும்; ஆண்டு தோறும் லட்சக்கணக்கான பக்தர்களைப் பெறுகிறது. கோயிலின் தொடக்கம் பழமையானது; பல அரசவம்சங்கள் இங்கு கட்டிட பங்களிப்புகளைச் செய்துள்ளன. பக்தர்கள் இங்கே தங்கள் ஆசைகளை நிறைவேற்றும் என நம்புகிறார்கள்."
  },
  kolkata: {
    name: "கோல்கத்தா (கோல்கத்தா)",
    country: "மேற்கு வங்காளம்",
    history: "சந்தோஷத்தின் நகரம் மற்றும் பிரிட்டிஷ் இந்தியாவின் முன்னாள் தலைநகரான கோல்கத்தா ஒரு பண்பாட்டு மற்றும் அறிவியல் மையமாகும். 1690 சுமார் ஆண்டு தொடக்கமாகும்; விக்டோரியா நினைவிடம் மற்றும் ஹவ்ரா பாலம் போன்ற காலனியல் கட்டிடக்கலையும் இங்கே காணப்படுகின்றன. புதுமையான இந்திய இலக்கியம், கலை மற்றும் வங்காள எழுச்சி இத்திரைப்படத்தின் ஊற்று."
  },
  gangtok: {
    name: "காங்க்டோக்",
    country: "சிக்கிம்",
    history: "1,650 மீட்டர் உயரத்தில் அமைந்த காங்க்டோக் சிச்சிமின் தலைநகராகும்; உலகின் மூன்றாம் உயரமான காஞ்சன்ஜஙா மலையின் அற்புதமான காட்சிகளை வழங்குகிறது. ருமேட்டெக் மற்றும் எஞ்சே என்ற மாதங்கள் போன்ற பௌத்த மடங்கள் மற்றும் எம்.ஜி. ரோட் நடைபாதை இங்கு கலாச்சாரத்தை நவீனவுடன் இணைக்கின்றன. இது வடக்கு சிக்கிம் பள்ளத்தாக்குகளுக்கான வாயில் ஆகும்."
  },
  shillong: {
    name: "ஷிலாங்",
    country: "மேகாலயா",
    history: "கிழக்கின் ஸ்காட்லாந்தாக அழைக்கப்படும் ஷிலாங் 1972 வரை அசாமின் பகுதியாக இருந்தது; இப்போது மேகாலயாவின் தலைநகராகும். 1,496 மீட்டர் உயரத்தில் அமைந்துள்ள இது சோளமரம் மலைகள், எலிபன்ட் நீர்வீழ்ச்சிகள் போன்ற காவலர்கள் மற்றும் சங்கீத கலாச்சாரத்தால் பிரசித்திபெற்றது; \"இந்தியாவின் ராக் தலைநகரம்\" என்று புகழ் பெற்றது."
  },
  darjeeling: {
    name: "தர்ஜிலிங்",
    country: "மேற்கு வங்காளம்",
    history: "தேயிலை தோட்டங்களுக்காகவும் யுனெஸ்கோ பட்டியலிடப்பட்ட தர்ஜிலிங் ஹிமாலயன் ரயில்வே (டோய் ரயில்) இற்காக உலகப்புகழ் பெற்றது. 2,042 மீட்டர் சுற்றிலும் அமைந்துள்ளது; டைகர் ஹிலிலிருந்து காஞ்சன்ஜங்கா உதயம் காட்சி பிரபலமுள்ளது. காலனியல் கால கட்டிடக்கலை, திபெத்திய பௌத்த மடங்கள் மற்றும் சாகச செயல்பாடுகள் இங்கு கிடைக்கின்றன."
  },
  puri: {
    name: "புஸரி (புரி)",
    country: "ஒடிசா",
    history: "நான்கு புனித தலங்களில் ஒன்றான புரி பண்டைய 12 ஆம் நூற்றாண்டு ஜகந்நாதர் கோயிலின் இல்லமாகும். ஆண்டு தோறும் நடைபெறும் ரத யாத்திரை லட்சக்கணக்கான பக்தர்களை ஈர்க்கிறது. புரி கடற்கரை மற்றும் அருகிலுள்ள கோணார்க் சூரிய கோயில் (யுனெஸ்கோ தளமானது) இதனை ஆன்மீகமும் சுற்றுலாவுலகத்தையும் ஒருங்கிணைக்கின்றன."
  },
  guwahati: {
    name: "குவாஹட்டி",
    country: "அசாம்",
    history: "வடகிழக்கு இந்தியாவுக்கான நுழைவு துவக்கம் எனக் கருதப்படும் குவாஹட்டி அசாமின் மிகப்பெரிய நகரமாகும்; இது பிரம்மபுத்திர நதியின் கரையின் மீது அமைந்துள்ளது. நிலாசல்மலையில் உள்ளபழைய காமாக்ஷியா கோயில் முக்கிய யாத்திரை இடமாகும். (குறிப்பு: நியூயார்க் டைம்ஸ் 2025 இல் இதில் முக்கியமான பயண இலக்குகளாக குறிப்பிடியுள்ளது.)"
  },
  kohima: {
    name: "கோகிமா",
    country: "நாகாலாந்து",
    history: "1,444 மீட்டர் உயரத்தில் அமைந்த கோகிமா நாகாலாந்தின் தலைநகராகும்; 1944 இல் நடைபெற்ற கோகிமா போர் இரண்டாம் உலகப் போரின் முக்கிய திருப்பத்தை நினைவூட்டுகிறது. கோகிமா போர் மனிமண்டபம் அந்த வரலாற்றை நினைவூட்டி நிற்கிறது. டிசம்பர் மாதம் நடைபெறும் ஹார்ன்பில் விழா இங்குள்ள பழங்குடி பண்பாடு, பாரம்பரிய கலைகள், நடனங்கள் மற்றும் சமையலின் சிறப்பு நிகழ்ச்சியை வெளிப்படுத்துகிறது."
  },
  itanagar: {
    name: "ஈட்டாநகர் (இட்டனகர்)",
    country: "அருணாசல பிரதேசம்",
    history: "அருணாசல பிரதேசத்தின் தலைநகரான இதானகர் என்ற பெயர் 'இட்டு கோட்டை' என்று பொருள். 14–15 ஆம் நூற்றாண்டின் இட்டா கோட்டை சுருங்கல்கள் இங்கே உள்ளன; அவை பொருந்திய வரலாற்று முக்கியத்துவத்தைக் காட்டுகின்றன. இதானகர் கோம்பா மற்றும் பௌத்த விகாச மையங்களைக் கொண்டுள்ளது மற்றும் மாநிலத்தின் பழமையான பள்ளத்தாக்குகள், பழங்குடி கிராமங்கள் மற்றும் மடங்களுக்கு நுழைவாயல் ஆக இருக்கிறது."
  },
  bhubaneswar: {
    name: "புபனேஸ்வர்",
    country: "ஒடிசா",
    history: "இந்தியாவின் கோயில் நகராக அழைக்கப்படும் புபனேஸ்வரில் 6ஆம் முதல் 13ஆம் நூற்றாண்டுவரைத் தொடர்புடைய 500க்கும் மேற்பட்ட கோயில்கள் உள்ளன, இவை கலிங்க கட்டிடக்கலைவை பிரதிபலிக்கின்றன. லிங்கராஜ் கோயில், முக்தேஸ்வர் கோயில் மற்றும் ராஜராணி கோயில்கள் கட்டிடக் கலைச் சுவாரஸ்யமாக உள்ளன. இந்த நகரம் பண்டைய பாரம்பரியத்தையும் நவீன நகரத் திட்டமிடலையும் சமநிலைப்படுத்துகிறது."
  },
  portblair: {
    name: "போர்ட் ப்ளையர்",
    country: "அண்டமான் மற்றும் நிக்கோபார் தீவுகள்",
    history: "அண்டமான் மற்றும் நிக்கோபார் தீவு ஒன்றுகளின் தலைநகரான போர்ட் ப்ளையர் இந்தியாவின் உஷ்ணமண்டல சொர்க்கத்திற்கு நுழைவு துவக்கம். பிரிட்டிஷ் காலத்தில் அரசியல் கைதிகளை தண்டித்த இடமாக பயன்பட்ட செல்யுலர் ஜெயில் இப்போது தேசிய நினைவுக்கூடமாக உள்ளது. இந்த தீவுகள் தூய்மையான கடற்கரைகள், கொரல் பிரமாணங்கள் மற்றும் செறிவு மிக்க கடல் உயிரினங்கள் ஆகியவற்றை வழங்குகின்றன."
  },
  pelling: {
    name: "பெல்லிங்",
    country: "சிக்கிம்",
    history: "மேற்கு சிக்கிம் பகுதியில் சுமார் 2,150 மீட்டர் உயரத்தில் அமைந்துள்ள பெல்லிங் காஞ்சன்ஜஙாவின் அழகான காட்சிகளை வழங்குகிறது. பழமையான பெமாயங்க்ட்ஸே மடமும் ராப்டென்சி சுருங்கல்கள் (முந்தைய சிக்கிம் தலைநகரம்) பௌத்த பாரம்பரியத்தைக் காட்டுகின்றன. ஸ்கைவாக் மற்றும் செனரெசிக் சிற்பம் போன்ற நவீன ஈர்ப்புகள் இயற்கை அழகோடு இணைக்கப்படுகின்றன."
  },
  tawang: {
    name: "தவாங்",
    country: "அருணாசல பிரதேசம்",
    history: "3,048 மீட்டர் சுமாரான உயரத்தில் அமைந்த தவாங் இந்தியாவின் பெரிய மடமான தவாங் மடத்திற்கு வீடு; இது 1680 ஆம் ஆண்டு நிறுவப்பட்டு சுமார் 450 ஆத்மிகர்கள் வாழ்கின்றனர். ஆறாவது துலை லாமாவின் பிறந்த ஊர்; இது திபெத்திய பௌத்த கலாச்சாரத்தை வலுப்படுத்துகிறது. செல்லா பாஸ், மாதுரி ஏரி மற்றும் 1962 போர் நினைவிடம் போன்ற இடங்கள் அதிக எண்ணிக்கையிலான பயணிகளைக் கவர்கின்றன."
  },
  cherrapunji: {
    name: "செர்ராபூஞ்சி (சோக்ரா)",
    country: "மேகாலயா",
    history: "ஒரு காலத்தில் உலகின் மிக அதிகமழை பெய்யும் இடமாகிய செர்ராபூஞ்சி (சோஹ்ரா) பெருமளவில் மழைக்காலத்தில் மிதக்கும்; இதனால் நோஹ்கலிகாய் மற்றும் சேவன் சிஸ்டர்ஸ் போன்ற அற்புதமான நீர்வீழ்ச்சிகள் உருவாகின்றன. காசி பழங்குடிகளால் கையாளப்பட்ட வாழும் வேர் பாலங்கள் யுனெஸ்கோவில் பட்டியலிடப்பட்டுள்ளன. மவ்ஸ்மை மற்றும் மவ்ஸ்மால் குகை கரைஞ் கண்காட்சிகள் சாகசத்தை வழங்குகின்றன."
  },
  imphal: {
    name: "இம்ஃபால்",
    country: "மணிப்பூர்",
    history: "790 மீட்டர் உயரத்தில் அமைந்துள்ள இம்ஃபால் மணிப்பூரின் தலைநகராகும்; இது இரண்டாம் உலகப் போரில் முக்கியப் பங்கு வகித்தது. காங்க்லா கோட்டை பல நூற்றாண்டுகளாக மणிப்பூர் அரசர்களின் மாளிகையாக இருந்தது. லோக்டாக் ஏரி — வடகிழக்கு இந்தியாவின் மிகப்பெரிய உப்பில்லா நீர்வேதம் — அசாதாரணம் தாவரமான பும்டிஸ் (ஊங்கல் தீவுகள்) கொண்டுள்ளது; கேயிபுல் லம்ஜாவோ தேசிய பூங்கா ஒரு பிரதான ஈர்ப்பு."
  },
  aizawl: {
    name: "ஐஸால்வ் (ஐசோல்)",
    country: "மிசோரம்",
    history: "மிசோராமின் தலைநகரான அய்ஸால்வ் சுமார் 1,132 மீட்டர் உயரத்தில் அமைந்துள்ளது; இது அழகான பழமலைகள் மற்றும் விரிவான காட்சிகளை வழங்குகிறது. இங்கு இலைமீன் வீடுகள், கைத்தறி ஆடைகள் மற்றும் மகிழ்ச்சியான திருவிழாக்கள் மிசோ கலாச்சாரத்தை பிரதிபலிக்கின்றன. சாலமன் கோயில், மிசோரம் மாநில அருங்காட்சியகம் மற்றும் டர்ட்லாங் மலைகள் இந்தப் பிரதேசத்தின் கிறிஸ்துவ பாரம்பரியத்திற்கு உள்ளன."
  },
  agartala: {
    name: "அகார்டாலா",
    country: "திரிபுரா",
    history: "திரிபுராவின் தலைநகரான அகார்டாலா 1901 இல் கட்டப்பட்ட அழகான உஜ்ஜயந்தா அரண்மனை (இப்போது அருங்காட்சியகமாக உள்ளது) போன்றவை அரச குடும்ப மரபுகளை காட்டுகின்றன. ருத்ராசாகர் ஏரியில் உள்ள நீர்மஹல் மற்றும் பண்டைய திரிபுரா ਸੁந்தரி கோயில் இங்குள்ள வரலாற்றைக் காட்டுகின்றன. அகார்டாலா பல்பக்க கலாச்சாரங்களையும் பழங்குடி மரபுகளையும் ஒன்றிணைக்கும் நகரமாக உள்ளது."
  },
  khajuraho: {
    name: "கஜுராகோ (காஜுராகோ)",
    country: "மத்திய பிரதேசம்",
    history: "யுனெஸ்கோ உலக பாரம்பரிய தளமான கஜுராகோ 950–1050 CE காலத்துக்கிடையில் சாண்டேலா வம்சத்தால் கட்டப்பட்ட நட்புறவு மற்றும் ஜெய்ன் கோயில்களுக்காக பிரபலமானது. இந்த கோயில்கள் வாழ்க்கையின் பல்வேறு அம்சங்களை விவரிக்கும் நுணுக்கமான சிற்பங்களால் குறிப்பிடப்படுகின்றன; உணர்ச்சிமிக்க மற்றும் தாந்த்ரிக பாரம்பரியத்தின் சின்னங்களாக சில கட்டுரைகள் உள்ளன."
  },
  bhopal: {
    name: "போபல (போபால்)",
    country: "மத்திய பிரதேசம்",
    history: "ஏரிகளின் நகராக அறியப்படும் போபால் மத்திய பிரதேசத்தின் தலைநகராகும்; அதன் நிறுவல் 11ஆம் நூற்றாண்டுக்கு செல்கிறது. தாஜ் உல் மெஸ்ஜித் (ஆசியாவின் மிகப்பெரிய பிராங்குகளில் ஒன்றாகும்), அருகிலுள்ள சாஞ்சி ஸ்டூபா (யுனெஸ்கோ தளம்) மற்றும் 1984 வாயுபாதுகாப்பு பேரண்டும் நினைவுகூரப்படுகின்றன; ஆனாலும் நகரம் தனித்துவமான பண்பாட்டைத் தக்க வைத்துக் கொண்டுள்ளது."
  },
  gwalior: {
    name: "கவாலியோர் (க்வாலியோர்)",
    country: "மத்திய பிரதேசம்",
    history: " 'இந்தியக் கோட்டைகளின் முத்து' என்று செயல்படுகின்ற காவலியோர் அதன் பெரும் மலைக்கேற்ற கோட்டைக்கு புகழ்பெற்றது. 8ஆம் நூற்றாண்டிற்கும் முன்பிருந்து இருந்து வரலாறு பதிவாக உள்ளது. கோட்டை வளாகத்தின் உள்ளே அரண்மனைகள், நுணுக்கமான சிற்ப கோயில்கள் மற்றும் தெளிவான 'தெலிகா கா மந்திர்' போன்றவை உள்ளன. இது இந்து சாஸ்திரிய இசையில் தனது பங்களிப்பிற்காகவும் புகழ்பெற்றது."
  },
  indore: {
    name: "இந்தூர்",
    country: "மத்திய பிரதேசம்",
    history: "மத்திய பிரதேசத்தின் வர்த்தக தலைநகரும் இந்தியாவின் தூய்மையான நகரங்களில் ஒன்றாகச் சொல்லப்படுகிறது. இந்தூர் 1715 இல் ஹோல்கார் வம்சத்தால் நிறுவப்பட்டது. ராஜ்வாடா அரண்மனை, லால் பாக் அரண்மனை மற்றும் சந்தைகள் நகரத்தின் ராஜ்ய பாரம்பரியத்தை கொண்டாடுகின்றன. இந்தூர் தெரு உணவு கலாச்சாரம் மற்றும் துடுப்பான சந்தைகளுக்காக பிரசித்தி பெற்றது."
  },
  orchha: {
    name: "ஒர்ச்சா",
    country: "மத்திய பிரதேசம்",
    history: "1531 இல் நிறுவப்பட்ட ஒரு மறைந்த முத்து, ஒர்ச்சா புந்தேலா ராஜ்புத் தலைமையின் தலைநகராக இருந்தது. இது பெத்வா நதியின் மீது ஒரு தீவில் அமைந்துள்ள அற்புதமான அரண்மனைகள் மற்றும் கோயில்களை கொண்டுள்ளது. ஜஹாங்கீர் மஹால், ராஜ் மஹால் மற்றும் ராம் ராஜா கோயில் போன்றவை கட்டிடக்கலைக்கு நேர்மையான சாட்சி."
  },
  ujjain: {
    name: "உஜ்ஜெயின்",
    country: "மத்திய பிரதேசம்",
    history: "இந்துக்களின் ஏழு புனித நகரங்களில் ஒன்றாகிய உஜ்ஜெயின் ஒவ்வொரு 12 ஆண்டுகளிலும் ஒரு பெரிய கும்பா மेला நடத்துகிறது. மஹாகாலேஸ்வர் கோயில் — பன்னிரண்டு ஜ்யோதிர்லிங்க்களில் ஒன்றாகும் — இதில் ஒரு பிரத்தியேக தெற்கு-முகப்பான சிவ லிங்கம் உள்ளது. பழமையான அழகிய நூற்றாண்டுகளில், உஜ்ஜெயின் கணக்கியல் மற்றும் அஸ்திரோனாமி மையமாக இருந்தது; இது ப்ரஹ்மகுப்தா போன்ற விஞ்ஞானிகளுக்கு வீடு."
  },
  ranchi: {
    name: "ரான்சி",
    country: "ஜார்க்ஹாண்ட்",
    history: "ரான்சி ஜார்க்ஹாண்டின் தலைநகராகும்; பிரிட்டிஷ் இந்தியா காலத்தில் இதன் சூரியமான காலநிலை காரணமாக அது ஒரு கோடை தலைநகராக இருந்தது. 'நீர்வீழ்ச்சி நகரம்' என்று அழைக்கப்படுகிற இந்த நகரில் ஹூண்ட்ரூ, ஜொந்நா மற்றும் தசம் நீர்வீழ்ச்சிகள் உள்ளன. இது மலைகள் மற்றும் காடுகளால் சூழப்பட்டுள்ளது; பிராந்திய பழங்குடி பண்பாடுகளுக்குத் தலைமை இடமாகும். கிரிக்கெட் வீரர் M.S. தோனி இங்கு பிறந்தவர்."
  },
  daman: {
    name: "தாமன்",
    country: "தாமன் மற்றும் தீவுகள்",
    history: "1961 வரை போர்த்துகீசிய காலனியாக இருந்த தாமன் கோட்டைகள், தேவாலயங்கள் மற்றும் கடற்கரைகளுடன் காலனிய நினைவுகளை தக்க வைத்துள்ளது. மோதி தாமன் கோட்டை, சென்ட் ஜெரோமி கோட்டை மற்றும் போர்த்துகீசிய பாணி கட்டிடக்கலை 450 ஆண்டுகளுக்கு மேலான போர்த்துகீசிய தாக்கத்தை பிரதிபலிக்கின்றன. இந்த கடலறை நகரம் முதன்மை நிலையான அமைதியான வான்ஸாகும்."
  },
  silvassa: {
    name: "சில்வாஸா",
    country: "தாத்ரா & நகர ஹாவேலி",
    history: "பகுதிகளில் காடுகள் மற்றும் மலைகளுக்கு இடையில் அமைந்த சில்வாஸா 1954 இல் போர்த்துகீசிய ஆட்சியிலிருந்து விடுதலை பெற்றது. இது வர்லி கலை, வங்கங்கா ஏரி தோட்டம் மற்றும் பழங்குடி கலையை நோக்கி அருங்காட்சியகங்களை கொண்டுள்ளது. தொழில்துறை மையமாகும் போதிலும் பழங்குடி பாரம்பரியத்தைக் காக்கிறது."
  },
  nagpur: {
    name: "நாக்பூர்",
    country: "மகாராஷ்டிரா",
    history: "ஆரஞ்சு நகராகவும் மகாராஷ்டிராவின் குளிர்காலத் தலைநகராகவும் அறியப்படும் நாக்பூர் இந்தியாவின் மையப் பகுதியில் அமைந்துள்ளது. இது டீக்ஷாபூமி என்ற முக்கிய பௌத்த யாத்திரைப் பிரதேசத்திற்கும் வீடு; இங்கு டாக்டர் B.R. அம்பேட்கர் புத்த மதத்தை அண்மித்தார். நாக்பூர் விடார்பா பண்பாட்டுக்கும் சிறுநீர் உயிர்க் காப்பகங்களுக்கும் பேரியல்பட்டது."
  },
  raipur: {
    name: "ராய்ப்பூர்",
    country: "சத்தீஸ்கர்",
    history: "ராய்ப்பூர் சத்தீஸ்கரின் தலைநகராகும்; இதன் வேர்கள் 9ம் நூற்றாண்டு வரை செல்கின்றன. இது சிர்புரின் பழமையான கோயில்கள், பௌத்த தளங்கள் மற்றும் பழங்குடி கிராமங்களுக்கு நுழைவாயிலாக செயல்படுகிறது. மகந்த் காஸிதாஸ் நினைவகம் பழங்குடி கலைகளை அரங்கேற்றுகிறது; அதேசமயம் நவீன ராய்ப்பூர் கல்வி மற்றும் வர்த்தக மையமாக உருவெடுக்கிறது."
  },
  jabalpur: {
    name: "ஜபல்பூர்",
    country: "மத்திய பிரதேசம்",
    history: "நர்மதா ஆற்றின் கரையில் அமைந்த ஜபல்பூர் பீடாக் பகுதியில் உள்ள அரிசிக் கற்கள் (Marble Rocks) மூலம் பிரபலமானது; அங்கு ஆறு சுமார் 100 அடி உயரமான மண்ணரைப் பாறைகளின் வாயிலாக ஓடுகிறது. துவான்தர் நீர்வீழ்ச்சி மற்றும் பழமையான கொண்ட் கோட்டைகள் நகரத்தின் இயற்கை அழகையும் பண்பாட்டுக் மரபையும் பிரதிபலிக்கின்றன."
  },
  pachmarhi: {
    name: "பச் மேரி (பச்ச்மர்ஹி)",
    country: "மத்திய பிரதேசம்",
    history: "மத்திய பிரதேசத்தின் ஒரே ஹில் ஸ்டேஷன் ஆகும் பச்ச்மர்ஹி சத்புரா வரிசையில் சுமார் 1,067 மீட்டர் உயரத்தில் உள்ளது. 1857 இல் கேப்டன் ஜேம்ஸ் ஃபோர்ப்ஸ் கண்டுபிடித்த இந்த இடம் காலனியல் யுக கட்டிடக்கலை, பாண்டவக் குகைகள் மற்றும் முன்நிகழ்கால ஓவியங்கள், நீர்வீழ்ச்சிகள் மற்றும் அடர்ந்த காடுகளுடன் அழகான முன்னோக்கு காட்சிகளை வழங்குகிறது."
  },
  amarkantak: {
    name: "அமரகண்டக்",
    country: "மத்திய பிரதேசம்",
    history: "சுமார் 1,065 மீட்டர் உயரத்தில் அமைந்த ஒரு புனித யாத்திரை நகரமான அமரகண்டக் நர்மதா மற்றும் சோன் நதிகளின் மூலமாகப் புகழ்பெற்றது. பழமையான நர்மதா குண்ட் கோயில் மற்றும் மாய் கி பாகியா பூங்கா யாத்திராளர்களையும் இயற்கை நேசிகளையும் ஈர்க்குகின்றன. இந்தப் பகுதி இந்து பரம்பரை இல் ஆன்மீக முக்கியத்துவத்தை கொண்டுள்ளது."
  },
  chitrakoot: {
    name: "चित्रகूट (சித்ரகூட்)",
    country: "மத்திய பிரதேசம் / உத்திர பிரதேசம் (மண்டலம்)",
    history: "மிகவும் பெரிய ஆன்மீக முக்கியத்துவம் கொண்ட இடமான चित्रகூட் ராமாயணத்தின் படி இராமர், சீதா மற்றும் லக்ஷ்மணர் தங்கள் 14 ஆண்டுள்ளனமான வனவாசத்தின் 11 ஆண்டுகளை இங்கு கழித்ததாக நம்பப்படுகிறது. காமத்கிரி கோயில், சந்தகினி நதியின் ராம்கத் மற்றும் பல ஆசிரமங்கள் இதனை முக்கிய யாத்திரைத்தளமாக ஆக்குகின்றன."
  },
  bhimbetka: {
    name: "பீம்பேட்கா (பீம்பேட்கா)",
    country: "மத்திய பிரதேசம்",
    history: "யுனெஸ்கோ உலக பாரம்பரிய தளமாக உள்ள பீம்பேட்கா கல் சரங்குகள் 30,000 ஆண்டுகளுக்கு முன்பிருந்த காலமிருந்து நடுக்காலத்துக்கு வரை 500க்கும் மேற்பட்ட நிலைகோபுரங்களில் முன்நிகழ்கால கல் ஓவியங்களை கொண்டுள்ளன. இவைகள் வேட்டை, நடனம், விலங்கு போராட்டங்கள் மற்றும் நாளாந்த வாழ்கையை பிரதிபலிக்கின்றன, இது கல் யுகத்திலிருந்து ஆரம்பக்கால வரலாற்றுக் காலத்திற்கு வரை உள்ள தகவல்களை வழங்குகின்றன."
  },
},  
  destinationOffers: {
      1: {
        title: "ஹோட்டல்கள்",
        description: "க நாட்டுப்பயண/ஜன்னல் பகுதிகள் மற்றும் தொடர்புடைய நடவடிக்கைகள்: • பீரியார் வனியங்கி (அல்லது பீரியார் டைகர் ரிசர்வு) • கேரளாவின் வன மண்டலங்கள் • டிரெக்கிங் பகுதிகள் • மலைப் பகுதிகள் • யானை தொடர்பு/காணுதல் (சாதாரணமாக யானை சபாரி, யானை சவாரி அல்லது காடுகளில்/அரண்மனைகளில் காணப்படும்). திருவிழாக்களில் இது யானை பேரணி அல்லது கஜமேலா ஆக இருக்கலாம்."
      },

      2: {
        title: "அலப்புழை ஹவுஸ்போட்கள் — தினமும் மற்றும் இரவிலும் கப்பலைச் சவாரி",
        description: "அலப்பழத்தில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள் — 1/2/3...22 படுக்கையறைகள் கொண்ட ஹவுஸ்போட்கள் (அலப்பழு/அலப்புஜா), ஒரோ/இரண்டு/மூன்று... இருபத்தி இரண்டு படுக்கையறைகள் கொண்ட இரு நிலை வோத்‌ஹவுஸ், கேரளாவில் பிரீமியம் மற்றும் இலக்ஸுரி நாள் மற்றும் இரவு தங்கும் ஹவுஸ்போட்கள், பட்ஜெட் வோத்‌ஹவுஸ், முஹம்மா படகு ஜெட்டி, நெஹ்ரு டிரோபி படகுப் போட்டி, தொடக்க இடம் — அலப்பழு, இறுதி இடம் — அலப்பழு, ஹவுஸ்போட் பயண வழிகள் மற்றும் கண்ணங்கரா படகு சுற்றுச்சூழல் பகுதிகள். 1 2 3 ...22 படுக்கையறைகள் வரை உள்ள ஹவுஸ்போட்கள் மற்றும் பிரீமியம்/இலக்ஸுரி விருப்பங்கள்."
      },

      3: {
        title: "அலப்புழை ஹவுஸ்போட்கள் — தினமும் மற்றும் இரவிலும் (1 படுக்கையறை)",
        description: "அலப்புஜா பின்வரிசை (backwater) ஹோம்ஸ்டே அனுபவம், அலப்புஜா கிராம வாழ்வு, பல்லத்துருத்தியில் உள்ள அபார்ட்மெண்ட்ஸ், அலப்புஜா நகரில் உள்ள விடிலா (வில்லா), Jungle/tree-house வகைகள், தீவு பின்வரிசை மலர்கள் மற்றும் ஏற்றுமதி ஓட்டல்கள். 1 முதல் 22 படுக்கையறைகள் வரை என்னும் வகை பிரிவுகள்—ப்ரீமியம் மற்றும் இலக்ஸுரி பகுப்புகள், நாள் மற்றும் இரவு தங்கும் விருப்பங்கள்."
      },

      4: {
        title: "அலப்புஜா நாள் யாத்திரை — 1 படுக்கையறை மேல்தளம் தனியார் ஹவுஸ்போட்",
        description: "அலப்பழு பகுதியில் 1–22 படுக்கையறைகள் கொண்ட ஹவுஸ்போட்கள்; பிரீமியம் மற்றும் இலக்ஸுரி வகைகள்; பட்ஜெட் விருப்பங்கள்; முஹம்மா ஜெட்டி, நெஹ்ரு டிரோபி படகுப் பிரதேசம் மற்றும் கண்ணங்கரா பாதை போன்ற பிரபல வழித்தடங்கள் கொண்டு பயணிக்கும்."
      },

      5: {
        title: "கேரளா ஹனிமூன் ஹவுஸ்போட்",
        description: "அலப்புஜா ஹவுஸ்போட்டில் இருக்கும் ஹனிமூன் கிளெட்டேஜ் என்பது தனியுரிமையான, நெகிழ்வான முறையில் அலங்காரம் செய்யப்பட்ட படகு; ஏர்-கண்டிஷண்ட் படுக்கையறைகள், தனியார் குளியலறைகள் மற்றும் அழகான டெக் பார்வைகள் போன்ற உயர்தர வசதிகள் கொண்டது. சாதாரணமாக படகில் உணவுகள் வழங்கப்படுகின்றன; கை-ஒளி விருந்து (candlelit dinner) மற்றும் மலர்கள் அலங்காரம் போன்ற சிறப்பு ஏற்பாடுகளும் உட்படுகின்றன. ஜோடிகளுக்கான தனிமையான மற்றும் பிரத்தியேக அனுபவத்தைக் கொடுக்கும்."
      },

      6: {
        title: "அலப்புழை ஹவுஸ்போட் — தினமும் மற்றும் இரவிலும் (1 படுக்கையறை, மேல்தளம் தனியார்)",
        description: "அலப்புஜா பின்வரிசை ஹோம்ஸ்டே, கிராம வாழ்க்கை அனுபவங்கள், பல்லத்துருத்தி உள்ள அபார்ட்மெண்ட்ஸ், அலப்புஜா நகரில் உள்ள வில்லாக்கள், காட்டுப்பிள்ளைப் பெரிய வீடுகள் மற்றும் தீவு பின்வரிசை விடுதிகள். கடலோர முகப்பு சொத்துக்கள் மற்றும் கடற்கரை முகப்பு சொத்துகள் ஆகியவையும் காணப்படுகின்றன. 1–22 படுக்கையறைகள் வரை பிரிவுகள் மற்றும் பிரீமியம்/இலக்ஸுரி விருப்பங்கள்."
      },

      7: {
        title: "அலப்புழை ஹவுஸ்போட் — தினமும் மற்றும் இரவிலும் (1 படுக்கையறை, மேல்தளம் தனியார்)",
        description: "அலப்பழு (அலப்புஜா), குமரகோம், கொல்லம், அஷ்டமுடி ஏரி, கோவளம், வேர்கலா, சேரை கடற்கரம், மாராற்றி கடற்கரை, கெயினகரி கிராமப் பகுதி, புன்னமடா, அர்யாடு கிராமப் பகுதி ஆகிய பகுதிகளை கொண்டுள்ள கேரளா பின்வரிசை மண்டலத்திலிருந்துப் பயணங்கள். 1–22 படுக்கையறைகள் வரை ஹவுஸ்போட்கள் மற்றும் பிரீமியம்/இலக்ஸுரி வசதிகள்."
      },

      8: {
        title: "அலப்புழை நாள் பயணம் — மேல்தளம் ஹவுஸ்போட்",
        description: "கெயினகரி கிராம பகுதி, புன்னமடா, அர்யாடு கிராமப் பகுதி, பல்லத்துருத்தி அபார்ட்மெண்ட்ஸ் மற்றும் முஹம்மா படகு ஜெட்டி போன்ற அழகான பின்வரிசை பகுதிகளில் மூலம் பயணிக்கும் நாள் பயணம்; பிரீமியம் மற்றும் இலக்ஸுரி ஹவுஸ்போட்களில் நாள் முழுவதும் அனுபவம்."
      },

      9: {
        title: "அலப்புஜா 1 படுக்கையறை — B2B விலை",
        description: "நாம் இதை டீலக்ஸ், பிரீமியம் மற்றும் இலக்ஸுரி வகைகளில் வழங்குகிறோம். ஆலப்புஜாவில் 1-படுக்கையறை ஹவுஸ்போட்களுக்கு இரண்டு வகைகள் உள்ளன — மேல்தளம் உடையவை மற்றும் மேல்தளம் இல்லாதவை. இரண்டுக்கும் விதிவிலக்கான நன்மைகள் உள்ளன. மேல்தளம் கொண்ட வகை பயணத்திற்கான பார்வையை சிறப்பாகத் தரும்."
      },

      10: {
        title: "பகிரப்பட்ட ஹவுஸ்போட் — 2 பேர் சலுகை",
        description: "கேரளாவின் பின்வரிசை மகுதியை எங்கள் பட்ஜெட் நட்பான பகிரப்பட்ட ஹவுஸ்போட்டுடன் கண்டறியுங்கள். ஜோடிகளுக்கும் பயண தோழர்களுக்கும் மிகச் சிறந்தது; இந்த 1-இரவு குரூஸ் வசதியான தங்குமிடம், உணவுகள் மற்றும் சுவாரஸ்யமான காட்சிகளை வழங்குகிறது. நிதியச் சலுகை பெற முன்பதிவு பரிந்துரைக்கப்படுகிறது!"
      },

      11: {
        title: "அலப்புஜா அல்ட்ரா பிரீமியம் ஹவுஸ்போட்கள்",
        description: "அலப்புஜாவில் அல்ட்ரா பிரீமியம் ஹவுஸ்போட்கள். • வகைகள்: ஹவுஸ்போட்கள் சாதாரணமாக டீலக்ஸ், பிரீமியம், இலக்ஸுரி மற்றும் அல்ட்ரா இலக்ஸுரியாக வகைப்படுத்தப்படுகின்றன. • படுக்கையறைகள்: 1 முதல் 22+ படுக்கையறைகள் (1,2,3,...6 படுக்கையறைகள்) வரை கிடைக்கின்றன; ஜோடிகள், குடும்பங்கள் மற்றும் பெரிய குழுக்களை ஏற்ற முன்னேற்பாடுகள். 22 படுக்கையறைகள் கொண்ட ஒரு படகு கிடைக்க வேண்டுமானால் பல பெரிய கப்பல்களை முன்பதிவுசெய்யவேண்டும் அல்லது அரிதான, குறிப்பிட்ட வெசسل்களை தேடவேண்டும், ஏனெனில் சாதாரண பெரிய படகுகள் 10-12 படுக்கையறைகள் வரை இருக்கும். • தங்கும் வகை: நாள் குச்சிகள் மற்றும் நாள்+இரவு (ஓவர்நைப்) தங்கும் விருப்பங்கள் இரண்டும் உள்ளன. • பட்ஜெட்: பட்ஜெட்/சிறந்த விலை ஹவுஸ்போட்கள் (பெரும்பாலும் டீலக்ஸ் அல்லது பகிரப்பட்ட படகுகள்) வெளியாகும்; பருவம் மற்றும் கிடைக்கும் தரம் போன்ற காரணிகளால் விலைகள் மாறுபடும். பிரீமியம் மற்றும் இலக்ஸுரி வகைகள் மிக அதிக விலையாக இருக்கும். • பின்வரிசை பகுதிகள்: பிரபல இடங்கள்: அலப்புஜா பின்வரிசை, புன்னமடா, கெயினகரி கிராமம், அர்யாடு கிராமம் மற்றும் முஹம்மா படகு ஜெட்டி."
      },

      12: {
        title: "கேரளா பயண பட்ஜெட் பக்கேஜ்கள்",
        description: "முன்நார் (Munnar), திக்கடி (Thekkady), பீரியார் வனவிலங்கு, வையாநாட் (Wayanad), வாகமோன், பொன்முடி, இடுக்கி, தேவிகுளம், குத்திகனம், வட்டவாடா, கந்தள்ளூர் போன்ற மலைப்பகுதிகள் மற்றும் கேரளா வன மண்டலங்கள், யானை நடைபயணம் மற்றும் டிரெக்கிங் பகுதிகள் ஆகியவற்றைக் கொண்ட பயண திட்டங்கள்."
      },

      13: {
        title: "கேரளா படகு பயணம் (Boating)",
        description: "கேரளாவின் மாயமான பின்வரிசையில் அமைதியான படகு பயணத்தை அனுபவியுங்கள். புல் வயல்கள் அருகில் மிதந்து செல்கிறீர்களோ அல்லது அமைதியான கிராமக் கால்வாய்களில் ஓடுகிறீர்களோ, எங்கள் கேரளா படகு பக்கேஜ்கள் இயற்கையில் அமைதியான ஓய்வு தரும். ஜோடிகள், குடும்பங்கள் அல்லது தனی பயணிகளுக்கு பொருத்தமாக, பாரம்பரிய மரப்படை படகுகள், உண்மையான கேரளா உணவுகள் மற்றும் நீரில் வாழும் வாழ்க்கையின் மெத்தையான ரிதம் ஆகியவற்றை அனுபவியுங்கள். ஒருவருக்கு ₹1,999 முதல் தொடங்குகிறது!"
      },

      14: {
        title: "B2B விலை டிராவல் டீல்ஸ் — கேரளா ஹவுஸ்போட் பக்கேஜ்கள்",
        description: "அலப்புஜாவில் உள்ள ஹவுஸ்போட்கள் — 1/2/3...22 படுக்கையறைகள் வரை உள்ள ஹவுஸ்போட்கள். பிரீமியம் மற்றும் இலக்ஸுரி நாள் மற்றும் இரவு தங்கும் பக்கேஜ்கள், பட்ஜெட் விருப்பங்கள், முஹம்மா ஜெட்டி, நெஹ்ரு டிரோபி படகு போட்டி மற்றும் கண்ணங்கரா சுற்றுப் பாதை போன்ற பிரபல பின்வரிசை வழித்தடங்கள்."
      },

      15: {
        title: "பெடல்ஸ் பூக்கள் (Petals Flowers)",
        description: "Petals Flowers—கேரளாவில் உயர் தர மலர்களுக்கான உங்கள் நம்பகமான இடம். விசித்திரமான ஆர்க்கிட்ஸ் போன்ற வகைகளில் சிறப்புக் கவனம் செலுத்தி, வீட்டு அலங்காரம், பரிசளிப்பு மற்றும் தோட்ட ஆர்வலர்களுக்கான முன்னோடிகளான வண்ணமயமான தேர்வுகளை வழங்குகிறது. ஒவ்வொரு செடியும் ஆரோக்கியமான பூக்களுக்கு பராமரிக்கப்பட்டு நீண்ட ஆயுள் கொண்ட அழகைக் கொடுக்கப்படுகின்றது. தனி ஆர்க்கிட் தேவைப்பட்டாலும் அல்லது தொகுப்பாக மலர் ஏற்பாடுகள் தேவைப்பட்டாலும், Petals Flowers இயற்கையின் அழகை உங்களுக்குத் தரும்."
      },

      16: {
        title: "விற்பனைக்கு அர்க்கிட் — அர்க்கிட் பூக்கும் செடிகள்",
        description: "உஷ்ணமண்டல பூக்களின் அழகை உங்கள் வீட்டிற்கு கொண்டு வாருங்கள்; Phalaenopsis, Vanda போன்ற அரிய வகைகள் கொண்ட வேடங்கள். இவை தீவிர வண்ணங்கள், தனித்துவமான படிமங்கள் மற்றும் நீண்ட காலம் மலர்கள் கொடுக்கும். உள் அலங்காரம், பரிசளிப்பு அல்லது தோட்ட காட்சி ஆகியவற்றுக்கு பொருத்தமானவை. ஒவ்வொன்றும் பராமரிக்க எளிதாகவும் மறைமுக வெளிச்சத்தில் சிறப்பாக வளரும். ₹399 முதல் துவங்குகின்றன—உங்கள் இடத்தை இயற்கையின் சிறந்த கலைத்திறனால் உயர்த்துங்கள்."
      },

      17: {
        title: "ஆக்சீடைஸ் செய்யப்பட்ட அழகுக் பொருட்கள் (Oxidised Ornaments)",
        description: "கேரளாவின் ஆக்சீடைஸ் செய்யப்பட்ட நகைகள் அதன் இருண்ட, பழமையான தோற்றத்தால் சிறப்பாக இருக்கின்றன; இது வெள்ளி அல்லது ப்ராஸ் போன்ற உலோகங்களை நோக்கியாக ஆக்சீடைஸ் செய்து ஏற்படுத்தப்படுகிறது. இந்த துண்டுகள் தனித்துவமான அஸ்தீதிகமும் மலிவான விலையில் கிடைக்கும். பாரம்பரிய கேரளா வடிவங்கள் மற்றும் நவீன வடிவமைப்புகளிலும் கிடைக்கின்றன. சாடிகள் போல் பாரம்பரிய அணிவகுப்பு உடைய துணிகளுடன் கூட பொருத்தமாக இருக்கும். பொதுவாக நெகல்ஸ், வாய் அணிகலன்கள் மற்றும் ஜோடியான நகை தொகுப்புகள் போன்றவை காணப்படுகின்றன."
      },

      18: {
        title: "கேரளா ஹேண்ட்லூம்ஸ் — கேரளா கசாவு சாட்டைகள் (Kerala Handlooms)",
        description: "கேரளா ஹேண்ட்லூம் சில்க், கசாவு சாடைகள், கசாவு சுராட் பொருட்கள் மற்றும் கேரளா ஹேண்ட்லூம்ஸ் ஷர்ட்ஸ். பாரம்பரிய வெள்ளை-தங்க எல்லை கொண்ட கசாவு சாடை கேரளாவின் பண்பாட்டு அடையாளமாக இருக்கின்றது."
      },

      19: {
        title: "கேரளா ஹேண்டிக்ராஃப்ட்ஸ் (Kerala handicrafts)",
        description: "கேரளாவின் கைச்சிலைகளின் வெவ்வேறு வடிவங்கள் மாநிலத்தின் செழிப்பான கலாச்சாரம் மற்றும் கலைப் பாரம்பரியத்தை பிரதிபலிக்கின்றன—மர நகைச்சுவைகள், உபகரண உலோகப் பொருட்கள், அலங்கார கயிர் புடவை உருவாக்கங்கள் மற்றும் தேங்காய் தேக்குத் தயாரிப்புகள் போன்றவைகள். முக்கிய உதாரணங்கள்: நுட்பமான மரக் கலாப் பொருட்கள், பெல் மெட்டல் தயாரிப்புகள், அலங்கார கோயிர் யார்மாட்கள் மற்றும் தேங்காய் ஓடுகளைப் பயன்படுத்தி செய்யப்பட்ட பாத்திரங்கள் மற்றும் விளையாட்டுப் பொம்மைகள். மற்ற குறிப்பிடத்தக்க கைவினைகளில் வண்ணமயமான கதகாளி முகங்களுக்கு ஏற்படும் முகமூடிகள், நெட்டிப்பட்டம் மற்றும் அரண்முலா உலோக கண்ணாடிகள் உள்ளன."
      },

      20: {
        title: "கேரளா சிப்ஸ் — நென்றன் (Kerala banana chips)",
        description: "கேரளா சிப்ஸ், நென்றன் (Nendran) பலகார சிப்ஸ் மற்றும் பலகாய் (jackfruit) சிப்ஸ் போன்ற பிரபல உள்ளூர் ஸ்நாக்ஸ்."
      },

      21: {
        title: "கேரளா மசாலாக்கள் (Kerala Spices)",
        description: "பீட்றிக்கம்பெ (cardamom), மிளகு (black pepper), இலவங்கப்பட்டை (cinnamon), கிராம்பு (cloves) மற்றும் ஜாய் ஃப்ராக் (nutmeg) போன்ற உயர் தர கேரளா மசாலாக்கள்; மேற்கு ஊழிய நிலங்களில் இருந்து நேரடியாக பெறப்பட்டுள்ள சிறந்த உயிரியல் பள்ளத்தாக்கு வளங்களிலிருந்து."
      },

      22: {
        title: "உலர்ந்த மீன்கள் (Dried fish)",
        description: "அஷ்டமுடி ஏரியில் இருந்து ஏற்றுமதி தரமான உலர்ந்த இனப்பெருக்க நதித் தேൾ (freshwater prawns) — உப்பில்லாமல் சுத்தமாக நாடகமாக சூரியலோகத்தில் உலர்த்தப்பட்டவை. மிதமான முதல் பெரிய அளவிலான இறால்கள் மசாலா, கிரேவி மற்றும் சட்னி போன்ற உணவுகளுக்காக மிகச் சிறந்தவை."
      },

      23: {
        title: "கேரளா ரியல் எஸ்டேட் (Kerala Real Estate)",
        description: "முக்கிய இடத்தில் 4 BHK சுயமான வீடு (3200 சதுர அடி). வில்லாக்கள், நிலங்கள், வீடுகள் மற்றும் பல்பிளாட் போன்ற சொத்துகளை கேரளா முழுவதிலும் வாங்கவும், விற்கவும் மற்றும் வாடகைக்கு விடவும் சேவைகள்."
      },

      24: {
        title: "கேரளா லாட்டரி டிக்கெட்டுகள் — கேரளா பம்பர் லாட்டரி",
        description: "வாரம் وارாந்து (weekly) டிராக்ஸ் உடன் அதிகாரபூர்வ கேரளா மாநில லாட்டரி டிக்கெட்டுகள். Win Win, Sthree Sakthi, Fifty Fifty மற்றும் Karunya லாட்டரிகள். முதல் பரிசுகள் ₹1 கோடிக்கு வரை."
      },

      25: {
        title: "கேரளா ஹோம் டெகோர்",
        description: "கேரளா ஹோம் டெகோர் மற்றும் கேரளா கோயிர் (coir) தயாரிப்புகள்."
      },

      26: {
        title: "கேரளா போக்குவரத்து (Transportation in Kerala)",
        description: "குருவாயூர், அதிரப்பிள்ளி நீர்வீழ்ச்சி, வாச்சச்சல் நீர்வீழ்ச்சி, ஆர்த்துன்கல் பாசிலிகா, கோச்சி கோட்டை, நீலேஸ்வரம், தென்மலா ஈக்கோ ஸ்பாட், பத்மநாப சுவாமி கோயில், சோத்தானிகரா கோயில், சபரிமலை, நிலக்கல் முதல் பாம்பா வரை கன்னியாகுமரிக்கு, ஊட்டி, கொடைக்கானல், குட்டலம் (குட்றளம்), பாலனி, கோவா மற்றும் மஹாராஷ்டிரா/கர்நாடகா பல பகுதிகள் மற்றும் தென்னிந்திய சுற்றுலா இடங்களுக்கு போக்குவரத்து சேவைகள்."
      },

      27: {
        title: "கேரளா கோயிர் தயாரிப்புகள் (Kerala Coir Products)",
        description: "கோயிரின் சுற்றுச்சூழல் நட்புத் தன்மை மற்றும் உயிர்விரிவு குறித்து ஓர் நன்மை: இது சுயமாகவே உயிர்வியல் முறையில் நம்மை ஏற்றதாகவே பயன்படுகிறது. கோயிர் தயாரிப்புகள் இயற்கை பயன்பாடு, பண்பாட்டு பாரம்பரியம் மற்றும் வணிகத் திறனை இணைத்து உள்ளடக்கப்பட்டு உள்ளூர் மற்றும் சர்வதேச சந்தைகளில் பிரபலமாக உள்ளன."
      },

      28: {
        title: "ஆன்லைன் உணவு ஆர்டர் (Food Order Online)",
        description: "கேரளாவில் ஆன்லைனில் உணவு ஆர்டர் செய்வதன் வசதியை அனுபவிக்கவும். உள்ளூர் அசல் கேரளா சமையல் முதல் சர்வதேச உணவுகள் வரை, உங்கள் சுவைகளை சில கிளிக்குகளிலேயே பூர்த்தி செய்யுங்கள். நீங்கள் கோச்சியில், திருவனந்தபுரத்தில், கொழிக்கோடு அல்லது கேரளாவின் வேறு எந்த பகுதியில் இருந்தாலும், உங்கள் பிடித்த உணவுகள் இப்போது உங்கள் வீட்டு முனையில் கிடைக்கும்."
      }
    },
    testimonials: {
      "sectionTitle": "எங்கள் பயணிகள் கூறுகிறார்கள்",
  "sectionSubtitle": "ஆயிரக்கணக்கான திருப்தியான பயணிகளின் உண்மை அனுபவங்கள்",
  "quoteOpen": "\"",
  "indicatorAria": "சாட்சியத்தை காட்டு {{index}}",

  "person1": {
    "name": "சாரா ஜான்சன்",
    "location": "நியூயார்க், அமெரிக்கா",
    "text": "மிக அதிசயமான அனுபவம்! Tourism Paradise குழுவினர் எங்கள் மலையாளக் கல்யாணப் பயணத்தைக் கொண்டாட சிறப்பாக திட்டமிட்டனர். ஒவ்வொரு விபரத்தையும் கவனித்தனர்; கேரளாவின் பேக்வாடர்களுக்கு மிகக் காதலான பயணம் அனுபவித்தோம்.",
    "trip": "கேரளா பேக் வாடர்ஸ் ஹனிமூன்"
  },

  "person2": {
    "name": "மைக்கேல் சென்",
    "location": "டொரொண்டோ, கனடா",
    "text": "தொழில்முறை சேவை மற்றும் விவரங்களில் அற்புதமான கவனம். எங்கள் குடும்பத்தின் கேரளா பயணம் அவர்களின் நிபுணத்துவ திட்டமிடலும் உள்ளூர்த் தகவலாலும் எளிமையாக நடைபெற்றது.",
    "trip": "கேரளா குடும்ப சாகசம்"
  },

  "person3": {
    "name": "எமிலி ரொட்ரிகெஸ்",
    "location": "பார்ஸலோனா, ஸ்பெயின்",
    "text": "நான் வேலைக்காக அடிக்கடி பயணிக்கிறேன்; ஆனாலும் Tourism Paradise ஏற்பாடு செய்த இந்த ஓய்வு பயணம் சிறப்பாக இருந்தது. தனிப்பயன் திட்டம் மற்றும் என் ஆயுர்வேத ரிட்ரீட்டுக்கான ஆதரவு அனைத்தைப் பலமாக செய்து-stress ஆகாமல் வைத்தது.",
    "trip": "கேரளா தனிநபர் ரிட்ரீட்"
  }
    },
     houseboatList: {
          "houseboatsHotelsInAlleppeyAlappuzhaKerala": "ஆலப்புழா, கேரளாவில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInMunnar": "மூணாறில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInCochin": "கொச்சியில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInKumarakomLake": "குமரகம் ஏரியில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInKottayam": "கோட்டயத்தில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInAlleppey": "ஆலப்புழாவில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInChottanikara": "சோட்டாணிக்கரையில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInThiruvananthapuram": "திருவனந்தபுரத்தில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInKovalamBeach": "கோவளம் கடற்கரையில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInThekkady": "தேக்கடியில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInWayanad": "வயநாட்டில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInAlappuzha": "ஆலப்புழாவில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInGuruvayur": "குருவாயூரில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInVagamon": "வாகமண்ணில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInAthirapillyWaterFalls": "அதிரப்பள்ளி நீர்வீழ்ச்சியில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInMarariBeach": "மாராரி கடற்கரையில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInPoovarBeach": "பூவார் கடற்கரையில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInVarkalaBeach": "வர்கலா கடற்கரையில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInAshtamudiLake": "அஷ்டமுடி ஏரியில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInKanyakumariBeach": "கன்னியாகுமரி கடற்கரையில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInAlleppeyBeach": "ஆலப்புழா கடற்கரையில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInAlappuzhaLake": "ஆலப்புழா ஏரியில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInIndia": "இந்தியாவில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseboatsHotelsInKerala": "கேரளாவில் உள்ள ஹவுஸ்போட் ஹோட்டல்கள்",
          "houseBoatHotelsInAlleppey": "ஆலப்புழாவில் உள்ள ஹவுஸ் போட் ஹோட்டல்கள்",
          "boatHouseHotelsInIndia": "இந்தியாவில் உள்ள போட் ஹவுஸ் ஹோட்டல்கள்",
          "boatHouseHotelsInKerala": "கேரளாவில் உள்ள போட் ஹவுஸ் ஹோட்டல்கள்",
          "sharingHouseboatsHotelsInAlleppey": "ஆலப்புழாவில் உள்ள ஷேரிங் ஹவுஸ்போட் ஹோட்டல்கள்",
          "sharingBoatHouseHotelsInKerala": "கேரளாவில் உள்ள ஷேரிங் போட் ஹவுஸ் ஹோட்டல்கள்",
          "dayTripHouseboatsHotelsInAlleppey": "ஆலப்புழாவில் உள்ள ஒரு நாள் பயண ஹவுஸ்போட் ஹோட்டல்கள்",
          "dayCruiseHouseboatsHotelsInAlleppey": "ஆலப்புழாவில் உள்ள பகல் நேர க்ரூஸ் ஹவுஸ்போட் ஹோட்டல்கள்",
          "fiveStarHouseboatsHotelsInAlleppey": "ஆலப்புழாவில் உள்ள ஐந்து நட்சத்திர ஹவுஸ்போட் ஹோட்டல்கள்",
          "fourStarHouseboatsHotelsInAlleppey": "ஆலப்புழாவில் உள்ள நான்கு நட்சத்திர ஹவுஸ்போட் ஹோட்டல்கள்",
          "threeStarHouseboatsHotelsInAlleppey": "ஆலப்புழாவில் உள்ள மூன்று நட்சத்திர ஹவுஸ்போட் ஹோட்டல்கள்",
          "twoStarHouseboatsHotelsInAlleppey": "ஆலப்புழாவில் உள்ள இரண்டு நட்சத்திர ஹவுஸ்போட் ஹோட்டல்கள்",
          "budgetHouseboatsHotelsInAlleppey": "ஆலப்புழாவில் உள்ள பட்ஜெட் ஹவுஸ்போட் ஹோட்டல்கள்",
          "standardBoatHouseHotelsInAlleppey": "ஆலப்புழாவில் உள்ள ஸ்டாண்டர்ட் போட் ஹவுஸ் ஹோட்டல்கள்"
        }
    ,
    destinationFeed: {
      loadingMore: 'மேலும் சலுகைகள் ஏற்றப்படுகின்றன...',
      inquiryTitle: 'கேள்விகள் உள்ளதா? தொடர்பு கொள்ளுங்கள்!',
      inquirySubtitle: 'உங்கள் விசாரணையை எங்களுக்கு அனுப்புங்கள், எங்கள் குழு 24 மணி நேரத்திற்குள் உங்களைத் தொடர்பு கொள்ளும்',
      yourName: 'உங்கள் பெயர் *',
      yourEmail: 'உங்கள் மின்னஞ்சல் *',
      phoneNumber: 'தொலைபேசி எண்',
      subject: 'பொருள்',
      yourMessage: 'உங்கள் செய்தி *',
      sendInquiry: 'விசாரணையை அனுப்பு',
      bookViaWhatsapp: "வாட்ஸ்அப் மூலம் பதிவு செய்யவும்",
      scrollToInquiryAria: 'விசாரணை படிவத்திற்கு உருட்டவும்'
    },
    footer: {
      description: 'மறக்க முடியாத பயணங்களுக்கான உங்கள் நம்பகமான பயணத் துணை. வாழ்நாள் முழுவதும் நீடிக்கும் நினைவுகளை உருவாக்குதல்.',
      destinations: {
        title: 'இலக்குகள்',
        keralaBudgetHouseboat: 'கேரள பட்ஜெட் படகு இல்லம்',
        luxuryTopEndHouseboat: 'சொகுசு டாப் எண்ட் படகு இல்லம்',
        b2bPriceKeralaHouseboats: 'B2b விலை கேரள படகு இல்லங்கள்',
        houseboatsInAlappuzha: 'ஆலப்புழாவில் உள்ள படகு இல்லங்கள்',
        budgetBoatHouseAllepey: 'பட்ஜெட் படகு இல்லம் ஆலப்பி',
        budgetBoatHouseAlappuzha: 'பட்ஜெட் படகு இல்லம் ஆலப்புழா',
        budgetHouseboatAllepey: 'பட்ஜெட் படகு இல்லம் ஆலப்பி',
        budgetHouseboatAlappuzha: 'பட்ஜெட் படகு இல்லம் ஆலப்புழா',
        budgetAlleppeyBoatHouse: 'பட்ஜெட் ஆலப்பி படகு இல்லம்',
        spotBookingBoatHouse: 'ஸ்பாட் புக்கிங் படகு இல்லம்',
        prepaidTaxiCochinAirport: 'கொச்சி விமான நிலையத்தில் ப்ரீபெய்ட் டாக்ஸி சேவை',
        budgetAlappuzhaHouseboats: 'பட்ஜெட் ஆலப்புழா படகு இல்லங்கள்',
        budgetAlleppeyHouseboats: 'பட்ஜெட் ஆலப்பி படகு இல்லங்கள்',
        b2bAlleppeyHouseboats: 'B2b ஆலப்பி படகு இல்லங்கள்',
        privateAlleppeyHouseboats: 'தனியார் ஆலப்பி படகு இல்லங்கள்',
        houseboatsInIndia: 'இந்தியாவில் உள்ள படகு இல்லங்கள்',
        sharedHouseboatsInAlleppey: 'ஆலப்புழாவில் பகிரப்பட்ட படகு இல்லங்கள்',
        sharingHouseboatsInAlleppey: 'ஆலப்புழாவில் பகிரப்படும் படகு இல்லங்கள்',
        sharingBoathouseInAlleppey: 'ஆலப்புழாவில் பகிரப்படும் படகு இல்லம்',
        clubbingHouseboatsInAlleppey: 'ஆலப்புழாவில் கிளப்பிங் படகு இல்லங்கள்',
        clubbingBoathouseInAlleppey: 'ஆலப்புழாவில் கிளப்பிங் படகு இல்லம்',
        luxuryHouseboatsInAlleppey: 'ஆலப்புழாவில் சொகுசு படகு இல்லங்கள்',
        premiumHouseboatsInAlleppey: 'ஆலப்புழாவில் பிரீமியம் படகு இல்லங்கள்',
        deluxeHouseboatsInAlleppey: 'ஆலப்புழாவில் டீலக்ஸ் படகு இல்லங்கள்',
        standardHouseboatsInAlleppey: 'ஆலப்புழாவில் ஸ்டாண்டர்ட் படகு இல்லங்கள்',
        ultraLuxuryHouseboatsInAlleppey: 'ஆலப்புழாவில் அல்ட்ரா சொகுசு படகு இல்லங்கள்',
        ultraLuxurySharingHouseboatsInAlleppey: 'ஆலப்புழாவில் அல்ட்ரா சொகுசு பகிரப்படும் படகு இல்லங்கள்',
        bestHouseboatsInAlleppey: 'ஆலப்புழாவில் சிறந்த படகு இல்லங்கள்',
        bestLuxuryHouseboatsInAlleppey: 'ஆலப்புழாவில் சிறந்த சொகுசு படகு இல்லங்கள்',
        bestPremiumHouseboatsInAlleppey: 'ஆலப்புழாவில் சிறந்த பிரீமियम படகு இல்லங்கள்',
        bestDeluxeHouseboatsInAlleppey: 'ஆலப்புழாவில் சிறந்த டீலக்ஸ் படகு இல்லங்கள்',
        bestStandardHouseboatsInAlleppey: 'ஆலப்புழாவில் சிறந்த ஸ்டாண்டர்ட் படகு இல்லங்கள்',
        bestAlappuzhaHouseboatPackages: 'சிறந்த ஆலப்புழா படகு இல்ல தொகுப்புகள்',
        bestAlappuzhaBoatHousePackages: 'சிறந்த ஆலப்புழா படகு இல்ல தொகுப்புகள்'
      },
      services: { title: 'சேவைகள்', flightBooking: 'விமான முன்பதிவு', hotelReservation: 'ஹோட்டல் முன்பதிவு', tourPackages: 'சுற்றுலா தொகுப்புகள்' },
      company: { title: 'நிறுவனம்', aboutUs: 'எங்களைப் பற்றி', contact: 'தொடர்பு' },
      support: { title: 'ஆதரவு', helpCenter: 'உதவி மையம்', terms: 'சேவை விதிமுறைகள்', privacy: 'தனியுரிமைக் கொள்கை', refund: 'பணம் திரும்பப்பெறும் கொள்கை', faq: 'அடிக்கடி கேட்கப்படும் கேள்விகள்' },
      copyright: '© {{year}} சுற்றுலா சொர்க்கம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
    }
  },
  te: {
    translation: {
        destinationNotFound: {
        title: "గమ్యం కనబడలేదు",
        description: "క్షమించండి, మీరు వెతుకుతున్న గమ్యాన్ని మేము కనుగొనలేకపోయాము."
      },
      goBack: "గమ్యాలకి తిరిగి వెళ్లండి",
      thingsToDo: "చేయవలసినవి",
      aboutDestination: "గమ్యం గురించి",
      getInTouch: "సంప్రదించండి",
      chatOnWhatsApp: "వాట్సాప్‌లో చాట్ చేయండి",
      instantResponse: "తక్షణ స్పందన",
      sendEmail: "ఇమెయిల్ పంపండి",
      emailAddress: "info@tourismparadise.com",
      houseboatShort: "అలప్పుజా డే & నైట్ 1 బెడ్‌రూం ప్రైవేట్ అప్‌పర్ డెక్ హౌస్‌బోట్.",
      exploreNow: "ఇప్పుడే చూడండి",
      planYourVisitTitle: "మీ ప్రయాణాన్ని ప్లాన్ చేయండి",
      planYourVisitSubtitle: "ఫారమ్ పూర్తి చేయండి, 24 గంటల్లో మేము మీరు సంప్రదిస్తాము",
      labelFullName: "పూర్తి పేరు *",
      placeholderFullName: "మీ పూర్తి పేరు నమోదు చేయండి",
      labelEmail: "ఇమెయిల్ చిరునామా *",
      placeholderEmail: "your.email@example.com",
      labelPhone: "ఫోన్ నంబర్",
      placeholderPhone: "+91 98765 43210",
      labelMessage: "మీ సందేశం *",
      food: "ఆన్‌లైన్‌లో భోజనం ఆర్డర్ చేయండి",
      placeholderMessage: "మీ ప్రయాణం, అభిరుచులు, ప్రశ్నలు వివరించండి...",
      sending: "పంపుతున్నాము...",
      sendInquiry: "విచారణ పంపండి",
      successMessage: "✓ సందేశం విజయవంతంగా పంపబడింది! త్వరలో మేము సంప్రదిస్తాము.",
      whatsappMessage: "హలో! నేను {{name}}, {{country}} సందర్శించడానికి ఆసక్తి ఉన్నాను. మరింత సమాచారం ఇవ్వగలరా?",
      emailSubject: "{{destinationName}} గురించి విచారణ",
      emailBodyTemplate: "హలో,\n\nనేను {{destination}} గురించి మరింత తెలుసుకోవాలనుకుంటున్నాను.\n\nధన్యవాదాలు!",
      heroTitle: 'మీ ప్రయాణంలోని ప్రతి భాగాన్ని ప్లాన్ చేయండి',
      heroSubtitle: 'విమానాలు, హోటళ్లు, రవాణా మరియు అనుభవాలను ఒకే చోట బుక్ చేసుకోండి. అతుకులు లేని ప్రయాణ ప్రణాళిక కోసం మీ పూర్తి ప్రయాణ పరిష్కారం.',
      houseboats: 'హౌస్ బోట్లు',
      shikara: 'షికారా రైడ్‌లు',
      flights: 'విమానాలు',
      hotels: 'హోటళ్లు',
      trains: 'రైళ్లు',
      buses: 'బస్సులు',
      cars: 'కారు అద్దె',
      tours: 'టూర్లు',
      cruises: 'క్రూజ్‌లు',
      activities: 'కార్యకలాపాలు',
      packages: 'హాలిడే ప్యాకేజీలు',
      weekend: 'వీకెండ్ గెట్‌అవేస్',
      beaches: 'బీచ్ స్టేలు',
      mountains: 'పర్వత యాత్రలు',
      adventure: 'సాహసం',
      citybreaks: 'సిటీ బ్రేక్‌లు',
      photography: 'ఫోటో టూర్లు',
      insurance: 'ట్రావెల్ ఇన్సూరెన్స్',
      passes: 'సిటీ పాస్‌లు',
      budget: 'బడ్జెట్ స్టేలు',
      bikes: 'బైక్ అద్దెలు',
      villas: 'విల్లాలు & గృహాలు',
      todaysDeals: 'ఈరోజు హాట్ డీల్స్',
      exploreDestinations: 'గమ్యస్థానాలను అన్వేషించండి',
      seaFishRestaurants: 'సముద్రపు చేపల రెస్టారెంట్లు',
      backwaterVillageStay: 'బ్యాక్ వాటర్ విలేజ్ స్టే',
      keralaChipsAndSpices: 'కేరళ చిప్స్ & మసాలాలు',
      keralaHandlooms: 'కేరళ చేనేత వస్త్రాలు',
      honeymoonBoatHouse: 'హనీమూన్ బోట్ హౌస్',
      houseboats: 'హౌస్ బోట్లు',
      noHouseboatsFound: 'మీ శోధనకు సరిపోయే హౌస్‌బోట్‌లు కనుగొనబడలేదు.',

      budgetTravelDeals: 'మీ కోసం బడ్జెట్ ప్రయాణ ఒప్పందాలు',
      offerHotels: 'హోటళ్ళు',
      offerHouseboatsDayNightCruise: 'అలెప్పీలో పగలు మరియు రాత్రి క్రూయిజ్ హౌస్‌బోట్లు',
      offerHouseboatsDayNight1Bedroom: 'అలెప్పీలో పగలు మరియు రాత్రి 1 బెడ్‌రూమ్ హౌస్‌బోట్',
      offerHouseboatsDayCruise1BedroomUpperDeck: 'అలప్పుజాలో పగటి క్రూయిజ్ 1 బెడ్‌రూమ్ అప్పర్ డెక్ ప్రైవేట్ హౌస్‌బోట్',
      offerKeralaHoneymoonHouseboat: 'కేరళ హనీమూన్ హౌస్‌బోట్',
      offerHouseboatDayNight1BedroomUpperDeck: 'అలెప్పీలో పగలు మరియు రాత్రి 1 బెడ్‌రూమ్ అప్పర్ డెక్ ప్రైవేట్ హౌస్‌బోట్',
      offerHouseboatsAlleppeyDayTripUpperDeck: 'అలెప్పీలో పగటి పర్యటన అప్పర్ డెక్ హౌస్‌బోట్',
      offerHouseboatsB2BPrice1Bedroom: 'అలెప్పీలో 1 బెడ్‌రూమ్ కోసం బి2బి ధర హౌస్‌బోట్లు',
      offerSharingHouseboats2People: 'అలెప్పీలో 2 వ్యక్తుల కోసం షేరింగ్ హౌస్‌బోట్ల ధర',
      offerUltraPremiumHouseboats: 'అలెప్పీలో అల్ట్రా ప్రీమియం హౌస్‌బోట్లు',
      offerKeralaTourBudgetPackages: 'కేరళ టూర్ బడ్జెట్ ప్యాకేజీలు',
      offerKeralaBoating: 'కేరళ బోటింగ్',
      offerB2BTravelDealsKeralaHouseboat: 'కేరళ హౌస్ బోట్ ప్యాకేజీల కోసం బి2బి ధర ప్రయాణ ఒప్పందాలు',
      offerPetalsFlowers: 'రేకుల పువ్వులు',
      offerOrchidForSale: 'అమ్మకానికి ఆర్కిడ్ - ఆర్కిడ్ పూల మొక్కలు',
      offerOxidisedOrnaments: 'ఆక్సీకరణ ఆభరణాలు',
      offerKeralaHandloomsSarees: 'కేరళ చేనేత - కేరళ కసావు చీరలు',
      offerKeralaHandicrafts: 'కేరళ హస్తకళలు',
      offerKeralaChips: 'కేరళ చిప్స్ - కేరళ అరటి చిప్స్',
      offerKeralaSpices: 'కేరళ మసాలాలు',
      offerDriedFish: 'ఎండిన చేపలు',
      offerKeralaRealEstate: 'కేరళ రియల్ ఎస్టేట్',
      offerKeralaLottery: 'కేరళ లాటరీ టిక్కెట్లు - కేరళ బంపర్ లాటరీ టిక్కెట్లు',
      offerKeralaHomeDecor: 'కేరళ గృహాలంకరణ',
      offerTransportationInKerala: 'కేరళలో రవాణా',
      offerKeralaCoirProducts: 'కేరళ కొబ్బరి పీచు ఉత్పత్తులు',
      whyChooseTitle: 'టూరిజం ప్యారడైజ్‌ను ఎందుకు ఎంచుకోవాలి',
      whyChooseSubtitle: 'మా సమగ్ర సేవలు మరియు నిపుణుల మార్గదర్శకత్వంతో ప్రయాణ ప్రణాళికను సులభతరం చేస్తాము',
      showLess: 'తక్కువ చూపించు',
      showMore: 'మరింత చూపించు'
    }, 
    testimonials:{
  "sectionTitle": "మా ప్రయాణీకులు ఏమంటున్నారు",
  "sectionSubtitle": "వేలాది సంతృప్తి చెందిన ప్రయాణికుల నిజమైన అనుభవాలు",
  "quoteOpen": "\"",
  "indicatorAria": "టెస్టిమోనియల్ చూపించండి {{index}}",

  "person1": {
    "name": "సారా జాన్సన్",
    "location": "న్యూయార్క్, అమెరికా",
    "text": "అద్భుతమైన అనుభవం! Tourism Paradise బృందం మా హనీమూన్‌ను పూర్తిగా ప్రణాళికబద్ధం చేసింది. ప్రతి చిన్న విషయాన్ని జాగ్రత్తగా చూసారు, మరియు కేరళ బ్యాక్‌వాటర్లలో మాకు అత్యంత రొమాంటిక్ యాత్ర అనుభవమైంది.",
    "trip": "కేరళ బ్యాక్‌వాటర్స్ హనీమూన్"
  },

  "person2": {
    "name": "మైకేల్ చెన్",
    "location": "టొరంటో, కెనడా",
    "text": "ప్రొఫెషనల్ సర్వీస్ మరియు అద్భుతమైన వివరాలపై శ్రద్ధ. స్థానిక ప్రదేశాలపై వారి పరిజ్ఞానం మరియు నిపుణుల ప్రణాళికతో మా కుటుంబ యాత్ర కేరళలో సంపూర్ణంగా సాగింది.",
    "trip": "కేరళ ఫ్యామిలీ అడ్వెంచర్"
  },

  "person3": {
    "name": "ఎమిలీ రోడ్రిగ్జ్",
    "location": "బార్సిలోనా, స్పెయిన్",
    "text": "నేను తరచూ పనిమీద ప్రయాణిస్తాను, కానీ Tourism Paradise ఏర్పాటు చేసిన ఈ సెలవు ప్రయాణం అసాధారణంగా అనిపించింది. వ్యక్తిగతీకరించిన షెడ్యూల్ మరియు కేరళలో నా ఆయుర్వేద రిట్రీట్‌కు ఇచ్చిన సహాయం యాత్రను పూర్తిగా స్ట్రెస్-ఫ్రీగా చేసింది.",
    "trip": "కేరళ సోలో రిట్రీట్"
  }
}
,
    featureList: {
      pilgrimPackages: "ఉత్తమ యాత్ర ప్యాకేజీలు",
      pilgrimDescription: "పవిత్ర స్థలాలకు శాంతియుతమైన ఆధ్యాత్మిక ప్రయాణం కోసం ప్రత్యేకంగా రూపకల్పన చేసిన తీర్థయాత్ర టూర్‌లు.",

      industrialTitle: "పారిశ్రామిక కన్సల్టెన్సీ సేవలు & కార్మికుల సరఫరా",
      industrialShortDesc: "ప్రాజెక్ట్ రిపోర్టులు, ఆర్థిక మార్గదర్శకత్వం నుండి ఇంజినీర్లు, టెక్నీషియన్లు, నిర్మాణ కాంట్రాక్టర్లు వంటి నైపుణ్య కార్మికుల సరఫరా వరకు — మీ అన్ని పారిశ్రామిక & వ్యాపార అవసరాలను మేము తీర్చుతాము.",

      industrialFullDesc: "ప్రాజెక్ట్ రిపోర్ట్ తయారీ, ఫైనాన్స్ గైడెన్స్, కన్‌స్ట్రక్షన్ సూపర్వైజింగ్, ప్లాన్ & ఎస్టిమేట్ తయారీ, పరిశ్రమలు & హోటల్ యంత్రాలు, నిర్మాణ కార్మికులు & కాంట్రాక్టర్లు, ఎలక్ట్రిక్, ప్లంబింగ్, ఎయిర్ కండిషనింగ్, కన్‌స్ట్రక్షన్, హోమ్ అప్లయెన్సెస్ (ఫ్రిజ్, వాషింగ్ మెషీన్, AC), ఆటోమొబైల్, కంప్యూటర్, మొబైల్ ఫోన్, లిఫ్ట్ ఆపరేటర్, హోమ్ డెకర్, జువెలరీ & ఆభరణాలు, కాఫీ & స్నాక్స్ మేకర్, మేసన్, కార్పెంటర్, వెల్డర్, మెషినరీ ఇన్‌స్టాలేషన్, పెయింటర్, క్లీనింగ్, హోటల్ స్టాఫ్, డ్రైవర్, అల్యూమినియం & స్టీల్ ఫ్యాబ్రికేషన్, హౌస్ సర్వెంట్స్, గార్డెనింగ్ వర్క్, హెవీ వెహికల్స్ & మెషినరి ఆపరేటర్స్, వెబ్‌సైట్ డిజైన్ & హోస్టింగ్, సోలార్ పవర్ సిస్టమ్ ఇన్‌స్టాలేషన్, హోమ్ సర్వీసెస్, ల్యాబ్ టెక్నీషియన్లు, ఇంజినీర్లు & డాక్టర్లు, టీచర్లు, లాండ్రీ, హౌస్‌కీపింగ్ మొదలైనవి.",

      educationTitle: "విద్యా కన్సల్టెన్సీ సేవలు",
      educationDescription: "ఇంజినీరింగ్, మెడికల్, అగ్రికల్చర్, కంప్యూటర్ AI, LLB, MBA, BBA, MCA, ల్యాబ్ టెక్నీషియన్లు, ఫిజియోథెరపీ, డెంటల్, ఆయుర్వేద మరియు మరెన్నో.",

      legalTitle: "న్యాయవాదులు & లాయర్లు",
      legalDescription: "అనుభవజ్ఞులైన న్యాయవాదుల నుండి వృత్తిపరమైన న్యాయ సహాయం మరియు సేవలను పొందండి.",
    },
houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: 'అలెప్పి అళప్పుజ కేరళలో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInMunnar: 'మున్నార్‌లో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInCochin: 'కొచ్చిన్‌లో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInKumarakomLake: 'కుమరకోమ్ సరస్సులో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInKottayam: 'కొట్టాయంలో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInAlleppey: 'అలెప్పీలో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInChottanikara: 'చోറ്റାନിക്കരలో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInThiruvananthapuram: 'తిరువనంతపురంలో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInKovalamBeach: 'కోవలం బీచ్‌లో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInThekkady: 'ತೆಕ್ಕಡಿಯಲ್ಲಿ ಹೌಸ್‌ಬೋಟ್ ಹೋಟೆಲ್‌ಗಳು',
      houseboatsHotelsInWayanad: 'వయనాడ్‌లో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInAlappuzha: 'అలప్పుజాలో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInGuruvayur: 'గురువాయూర్‌లో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInVagamon: 'ವಾಗಮನ್‌ನಲ್ಲಿ ಹౌస్‌ಬोट್ హోటల్స్',
      houseboatsHotelsInAthirapillyWaterFalls: 'అతిరप्पള്ളി జలపాతంలో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInMarariBeach: 'మరారి బీచ్‌లో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInPoovarBeach: 'पूవర్ బీచ్‌లో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInVarkalaBeach: 'వర్కళ బీచ్‌లో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInAshtamudiLake: 'అష్టముడి సరస్సులో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInKanyakumariBeach: 'కన్యాకుమారి బీచ్‌లో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInAlleppeyBeach: 'అలెప్పి బీచ్‌లో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInAlappuzhaLake: 'అలప్పుజా సరస్సులో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInIndia: 'భారతదేశంలో హౌస్‌బోట్స్ హోటల్స్',
      houseboatsHotelsInKerala: 'కేరళలో హౌస్‌బోట్స్ హోటల్స్',
      houseBoatHotelsInAlleppey: 'అలెప్పీలో హౌస్ బోట్ హోటల్స్',
      boatHouseHotelsInIndia: 'భారతదేశంలో బోట్ హౌస్ హోటల్స్',
      boatHouseHotelsInKerala: 'కేరళలో బోట్ హౌస్ హోటల్స్',
      sharingHouseboatsHotelsInAlleppey: 'అలెప్పీలో షేరింగ్ హౌస్‌బోట్స్ హోటల్స్',
      sharingBoatHouseHotelsInKerala: 'కేరళలో షేరింగ్ బోట్ హౌస్ హోటల్స్',
      dayTripHouseboatsHotelsInAlleppey: 'అలెప్పీలో డే ట్రిప్ హౌస్‌బోట్స్ హోటల్స్',
      dayCruiseHouseboatsHotelsInAlleppey: 'అలెప్పీలో డే క్రూయిజ్ హౌస్‌బోట్స్ హోటల్స్',
      fiveStarHouseboatsHotelsInAlleppey: 'అలెప్పీలో 5 స్టార్ హౌస్‌బోట్స్ హోటల్స్',
      fourStarHouseboatsHotelsInAlleppey: 'అలెప్పీలో 4 స్టార్ హౌస్‌బోట్స్ హోటల్స్',
      threeStarHouseboatsHotelsInAlleppey: 'అలెప్పీలో 3 స్టార్ హౌస్‌బోట్స్ హోటల్స్',
      twoStarHouseboatsHotelsInAlleppey: 'అలెప్పీలో 2 స్టార్ హౌస్‌బోట్స్ హోటల్స్',
      budgetHouseboatsHotelsInAlleppey: 'అలెప్పీలో బడ్జెట్ హౌస్‌బోట్స్ హోటల్స్',
      standardBoatHouseHotelsInAlleppey: 'అలెప్పీలో స్టాండర్డ్ బోట్ హౌస్ హోటల్స్'
    }
    ,
    destinationOffers: {
      1: {
        title: "హోటళ్లు",
        description: "వన్యప్రాణి/అడవి ప్రాంతాలు & సంబంధిత కార్యకలాపాలు: • పేరియార్ వన్యప్రాణి అభయారణ్యం (లేదా పేరియార్ టైగర్ రిజర్వ్) • కేరళ అడవి ప్రాంతాలు • ట్రెక్కింగ్ ప్రాంతాలు • పర్వత ప్రాంతాలు • ఏనుగు ఇంటరాక్షన్/వ్యూయింగ్ (సాధారణంగా ఏనుగు సఫారి, ఏనుగు سواری లేదా అడవులు/అభయారణ్యాలలో కనిపిస్తాయి. పండుగలలో ఇది ఏనుగు ఊరేగింపు లేదా గజమేళాగా ఉంటుంది)."
      },

      2: {
        title: "అలప్పీ హౌస్‌బోట్లు – డే & నైట్ క్రూయిజ్",
        description: "అలప్పీ హౌస్‌బోట్లు — 1/2/3 నుండి 22 బెడ్రూమ్‌ల హౌస్‌బోట్లు. ప్రీమియం & లగ్జరీ డే/నైట్ స్టే, బడ్జెట్ బోట్, ముహమ్మా బోటు జెట్టీ, నెహ్రూ ట్రోఫీ బోటు రేస్ మార్గం, కున్నంకరా టూర్ ప్రాంతం. 1 నుంచి 22 బెడ్రూమ్ బోట్‌లు—అలప్పుజా ప్రసిద్ధ హౌస్‌బోట్ మార్గాలు."
      },

      3: {
        title: "అలప్పీ డే & నైట్ హౌస్‌బోట్ (1 బెడ్రూమ్)",
        description: "అలప్పీ బ్యాక్‌వాటర్ హోమ్‌స్టే, అలప్పుజా గ్రామ జీవితం, పల్లత్తురుత్తి అపార్ట్‌మెంట్లు, అలప్పీ టౌన్ విల్లాలు, జంగిల్ ట్రీహౌస్, దీవి రిసార్ట్‌లు, లేకు/బీచ్ ఫ్రంట్ ప్రాపర్టీలు. 1–22 బెడ్రూమ్‌ల ప్రీమియం/లగ్జరీ హౌస్‌బోట్లు."
      },

      4: {
        title: "అలప్పుజా డే క్రూయిజ్ – 1 బెడ్రూమ్ అప్‌పర్ డెక్ ప్రైవేట్ హౌస్‌బోట్",
        description: "అలప్పీ 1–22 బెడ్రూమ్ హౌస్‌బోట్లు—ప్రీమియం/లగ్జరీ డే & నైట్ స్టే, ముహమ్మా జెట్టీ, నెహ్రూ ట్రోఫీ మార్గం, కున్నంకరా మార్గంలో క్రూయిజింగ్ అనుభవం."
      },

      5: {
        title: "కేరళ హనీమూన్ హౌస్‌బోట్",
        description: "అలప్పుజా హౌస్‌బోట్‌లో హనీమూన్ కాటేజ్ — రొమాంటిక్ డెకరేషన్, AC బెడ్రూమ్, వ్యక్తిగత బాత్రూమ్, సుందరమైన డెక్ వ్యూ, కాండిల్‌లైట్ డిన్నర్, పూల అలంకరణ — జంటల కోసం ప్రత్యేకమైన బ్యాక్‌వాటర్ అనుభవం."
      },

      6: {
        title: "అలప్పీ హౌస్‌బోట్ — అప్‌పర్ డెక్ ప్రైవేట్ (1 బెడ్రూమ్)",
        description: "అలప్పీ బ్యాక్‌వాటర్ హోమ్‌స్టే, గ్రామ అనుభవం, పల్లత్తురుత్తి అపార్ట్‌మెంట్లు, అలప్పీ విల్లాలు, జంగిల్ ట్రీహౌస్, దీవి రిసార్ట్స్, లేకు/బీచ్ ఫ్రంట్ ప్రాపర్టీలు. 1–22 బెడ్రూమ్ ప్రీమియం/లగ్జరీ హౌస్‌బోట్లు."
      },

      7: {
        title: "అలప్పీ 1 బెడ్రూమ్ అప్‌పర్ డెక్ ప్రైవేట్ హౌస్‌బోట్",
        description: "అలప్పీ, కుమరకోం, కొల్లం, అష్టముడి సరస్సు, కోవలం, వర్కల, చెరై బీచ్, మరారి బీచ్, కైనకారి, పున్నమడ, ఆర్యడ్ గ్రామ ప్రాంతాలు — 1 నుంచి 22 బెడ్రూమ్ లగ్జరీ హౌస్‌బోట్లు."
      },

      8: {
        title: "అలప్పీ డే ట్రిప్ — అప్‌పర్ డెక్ హౌస్‌బోట్",
        description: "కైనకారి గ్రామం, పున్నమడ, ఆర్యడ్, పల్లత్తురుత్తి అపార్ట్‌మెంట్లు, ముహమ్మా జెట్టీ — ప్రీమియం డే క్రూయిజ్ హౌస్‌బోట్ అనుభవం."
      },

      9: {
        title: "అలప్పీ B2B రేట్ — 1 బెడ్రూమ్ హౌస్‌బోట్",
        description: "డీలక్స్, ప్రీమియం, లగ్జరీ విభాగాలు. 1 బెడ్రూమ్ హౌస్‌బోట్లు — అప్‌పర్ డెక్ / నాన్-అప్‌పర్ డెక్. అప్‌పర్ డెక్ రకాలు క్రూజింగ్ మార్గానికి మంచి వ్యూ ఇస్తాయి."
      },

      10: {
        title: "అలప్పీ షేరింగ్ హౌస్‌బోట్ — 2 మందికి",
        description: "కేరళ బ్యాక్‌వాటర్ షేర్డ్ హౌస్‌బోట్ — జంటలు, ఫ్రెండ్స్‌కు బడ్జెట్ ఎంపిక. 1 రాత్రి క్రూయిజ్, రుచికరమైన కేరళ భోజనం, అద్భుత దృశ్యాలు. బెస్ట్ రేట్ల కోసం అడ్వాన్స్ బుకింగ్ సూచించబడుతుంది."
      },

      11: {
        title: "అల్ట్రా ప్రీమియం హౌస్‌బోట్లు — అలప్పీ",
        description: "డీలక్స్, ప్రీమియం, లగ్జరీ మరియు అల్ట్రా లగ్జరీ క్లాస్‌లు. 1–22+ బెడ్రూమ్ ఎంపికలు. డే క్రూజ్ & ఓవర్‌నైట్ స్టే. ప్రసిద్ధ బ్యాక్‌వాటర్ ప్రాంతాలు — అలప్పీ, పున్నమడ, కైనకారి, ఆర్యడ్, ముహమ్మా జెట్టీ."
      },

      12: {
        title: "కేరళ టూర్ బడ్జెట్ ప్యాకేజీలు",
        description: "మున్నార్, తేక్కడీ, పేరియార్ వన్యప్రాణి అభయారణ్యం, వయనాడు, వాగమోన్, పొన్ముడి, ఇడుక్కి, దేవికുളം, కుట్టిక్కనమ్, వట్టవాడ, కన్తల్లోర్, పర్వతాలు, అడవి ప్రాంతాలు, ఏనుగు నడక, ట్రెక్కింగ్ మార్గాలు."
      },

      13: {
        title: "కేరళ బోటింగ్",
        description: "కేరళ బ్యాక్‌వాటర్లలో శాంతియుతమైన బోటింగ్ అనుభవం — పచ్చని వరి పంటలు, గ్రామ నదులు, సంప్రదాయ ఉడకపెళ్లి పడవలు, అసలు కేరళ భోజనం. జంటలు, కుటుంబాలు, సింగిల్ ట్రావెలర్లకు సరైన ఎంపిక. ₹1,999 నుండి ప్రారంభం."
      },

      14: {
        title: "B2B ట్రావెల్ డీల్స్ — కేరళ హౌస్‌బోట్లు",
        description: "అలప్పీ 1/2/3–22 బెడ్రూమ్ హౌస్‌బోట్లు, ప్రీమియం/లగ్జరీ స్టే, బడ్జెట్ ఎంపికలు, ముహమ్మా జెట్టీ, నెహ్రూ ట్రోఫీ బోటు రేస్ మార్గాలు."
      },

      15: {
        title: "పెటల్స్ ఫ్లవర్స్",
        description: "కేరళలో ప్రీమియం పూల మొక్కలకు విశ్వసనీయ స్థలం — ప్రత్యేకంగా ఆర్కిడ్స్. హోం డెకర్, గిఫ్టింగ్ మరియు గార్డెన్ ప్రేమికులకు అనువైనవి. ప్రతి మొక్కను ఆరోగ్యకరమైన పువ్వులు వచ్చేలా జాగ్రత్తగా పెంచబడుతుంది."
      },

      16: {
        title: "ఆర్కిడ్ విక్రయం — పుష్పించే ఆర్కిడ్ మొక్కలు",
        description: "ఫాలేనాప్సిస్, వాండా వంటి అద్భుత రంగులు, నమూనాలు, ఎక్కువ రోజులు నిలిచే పువ్వులతో ఆర్కిడ్ మొక్కలు. ఇంటి అలంకరణ, గిఫ్ట్, గార్డెన్ డిస్‌ప్లేకు బాగా సరిపోతాయి. సులభంగా సంరక్షించవచ్చు. ₹399 నుండి ప్రారంభం."
      },

      17: {
        title: "ఆక్సిడైజ్డ్ ఆభరణాలు",
        description: "కేరళ ఆక్సిడైజ్డ్ జువెలరీ — వెండి/బ్రాస్ వంటి లోహాలను ఆక్సిడైజ్ చేయడం ద్వారా వచ్చే పురాతన రూపం. సంప్రదాయ మరియు ఆధునిక డిజైన్‌లు. సారీ కానీ మోడ్రన్ డ్రెస్సులకు సరిపోతాయి. హారాలు, చెవిపోగులు, సెట్లు అందుబాటులో ఉన్నాయి."
      },

      18: {
        title: "కేరళ హ్యాండ్‌లూమ్ — కసవు చీరలు",
        description: "కేరళ హ్యాండ్‌లూమ్ సిల్క్, కసవు చీరలు, కసవు చూరిదార్ మెటీరియల్, కేరళ హ్యాండ్‌లూమ్ షర్ట్లు — తెలుపు/బంగారు బోర్డర్‌తో కేరళ సంప్రదాయ చిహ్నం."
      },

      19: {
        title: "కేరళ హస్తకళలు",
        description: "కేరళ హస్తకళలు — చెక్క పనులు, కంచు వస్తువులు, కొయిర్ మ్యాట్‌లు, కొబ్బరి శెంఖులతో తయారు చేసిన బౌల్స్, ఆటవస్తువులు, కథకళి మాస్కులు, నెత్తిపట్టం, అరన్ముల లోహ అద్దం మొదలైనవి."
      },

      20: {
        title: "కేరళ చిప్స్ — అరటి చిప్స్",
        description: "కేరళ నేంద్రన్ అరటి చిప్స్, జాక్‌ఫ్రూట్ చిప్స్ మరియు సంప్రదాయ స్నాక్స్."
      },

      21: {
        title: "కేరళ సుగంధ ద్రవ్యాలు",
        description: "ఏలకులు, నల్ల మిరియాలు, దాల్చిన చెక్క, లవంగాలు, జాజికాయ — పశ్చిమ ఘాట్‌లలోని ఆర్గానిక్ ఫార్మ్‌ల నుండి నేరుగా పొందిన ప్రీమియం నాణ్యత."
      },

      22: {
        title: "ఉప్పులేని ఎండిన చేపలు",
        description: "అష్టముడి సరస్సు నుండి ప్రీమియం ఎగుమతి నాణ్యత గల ఎండిన రొయ్యలు — శుభ్రంగా, ఉప్పు లేకుండా ఎండబెట్టబడినవి. మసాలా, కూర, చట్నీకి అనువైనవి."
      },

      23: {
        title: "కేరళ రియల్ ఎస్టేట్",
        description: "ప్రైం లొకేషన్‌లో 4 BHK స్వతంత్ర ఇల్లు (3200 చదరపు అడుగులు). కేరళలో విల్లాలు, భూమి, ఇళ్లు, ఫ్లాట్‌లు—కొనడం, అమ్మడం, అద్దె సేవలు అందుబాటులో ఉన్నాయి."
      },

      24: {
        title: "కేరళ లాటరీ టికెట్లు — బంపర్ లాటరీ",
        description: "కేరళ ప్రభుత్వ అధికారిక లాటరీ — Win Win, Sthree Sakthi, Fifty Fifty, Karunya. మొదటి బహుమతి ₹1 కోటి వరకు."
      },

      25: {
        title: "కేరళ హోమ్ డెకర్",
        description: "కేరళ హోమ్ డెకర్ మరియు కొయిర్ ఉత్పత్తులు — సహజ నారలతో తయారైన పర్యావరణ స్నేహపూర్వక అలంకరణ వస్తువులు."
      },

      26: {
        title: "కేరళ రవాణా సేవ",
        description: "గురువాయూరు, అథిరప్పిల్లి, వాజాచాల్, ఆర్తుంకల్ బసిలికా, ఫోర్ట్ కొచ్చి, నెల్లేశ్వరం, తెన్నమల, గురువాయూర్, పద్మనాభస్వామి ఆలయం, చొట్టానిక్కర, శబరిమల, నీలక్కల్–పంపా, కన్యాకుమారి, ఊటీ, కొడైకెనాల్, కుట్టాలం, పలని, గోవా, కర్ణాటక, తమిళనాడు ప్రాంతాలకు రవాణా సేవలు."
      },

      27: {
        title: "కేరళ కొయిర్ ఉత్పత్తులు",
        description: "కొయిర్ — పర్యావరణ స్నేహపూర్వక, బయోడిగ్రేడబుల్. మ్యాట్‌లు, తాడు, బ్రష్‌లు, బ్యాగ్‌లు మరియు అలంకరణ వస్తువులు. కేరళ వారసత్వంతో పాటు ప్రపంచ మార్కెట్లలో మంచి డిమాండ్ ఉంది."
      },

      28: {
        title: "ఆన్‌లైన్ ఫుడ్ ఆర్డర్",
        description: "కేరళలో ఆన్‌లైన్ భోజనం — స్థానిక కేరళ వంటకాల నుండి అంతర్జాతీయ వంటకాల వరకు. కోచి, తిరువనంతపురం, కోళికోడ్ సహా అన్ని ప్రాంతాల్లో అందుబాటులో ఉంది."
      }
    }
    ,
    popularDestinations: {
      title: "భారతదేశంలో మరిన్ని గమ్యస్థలాలను అన్వేషించండి",
  subtitle: "వివిధ రాష్ట్రాల నగరాల్లో చేయదగిన విషయాలను కనుగొనండి",
  thingsToDo: "చేయవలసినవి",
  comingSoonTitle: "తర్వాత వస్తోంది!",
  comingSoonDescription: "మేము {{continent}}లో అద్భుతమైన గమ్యస్థలాలను జోడిస్తున్నాము. త్వరలో తిరిగి చూడండి!",
  northIndia: "ఉత్తర భారత గమ్యస్థలాలు",
  southIndia: "దక్షిణ భారత గమ్యస్థలాలు",
  eastIndia: "తూర్పు & ఉత్తర-తూర్పు గమ్యస్థలాలు",
  centralIndia: "మధ్య భారత గమ్యస్థలాలు",
      delhi: {
    name: "దిల్లీ",
    country: "ఢిల్లీ",
    history: "భారత్ రాజధాని దిల్లీకి 2,000 సంవత్సరాలకంటే ఎక్కువ సంపూర్ణమైన చరిత్ర ఉంది. నగరం మొఘల్ పాలనకారీల్లచే నిర్మించిన ఆకర్షణీయమైన మసీదు, కోటలు మరియు స్మారకాలతో నిండి ఉంది. రెడ్ ఫోర్ట్ నుండి ఐకానిక్ ఇండియా గేట్ వరకూ, దిల్లీ ప్రాచీన వారసత్వాన్ని ఆధునిక మౌలిక సదుపాయాలతో కలిపి, తప్పనిసరిగా సందర్శించదగ్గ నగరంగా నిలుస్తుంది."
  },
  jaipur: {
    name: "జైపూర్",
    country: "రాజస్థాన్",
    history: "పింక్ సిటీగా ప్రసిద్ధి గాంచిన జైపూర్ రాజస్థాన్ రాజధాని మరియు ఇండియా గోల్డెన్ ట్రయాంగిల్‌లో ఒక భాగం. 1727లో స్థాపించబడిన ఈ నగరం రాజసిక ప్యాలసులు, అమెర్ కోట, హవా మహాల్ వంటి అద్భుత కోటలు మరియు జీవంతమైన బజార్లతో ప్రసిద్ధి చెందింది. జైపూర్ రాజపుత్ వాస్తవకళ మరియు సంస్కృతిని ప్రతిబింబిస్తుంది."
  },
  agra: {
    name: "ఆగ్రా",
    country: "ఉత్తర్ప్రదేశ్",
    history: "ప్రపంచంలోని ఏడు అద్భుతాలలో ఒకటైన తాజ్ మహల్ ఇక్కడ ఉన్న ఆగ్రా 1556–1658 మధ్య మొఘల్ సామ్రాజ్య రాజధానిగా ఉండింది. ఆగ్రా కోట మరియు ఫతేహ్‌పూర్ సిక్రి వంటి అద్భుత మొఘల్ వాస్తవకళా نمూనాలు నగరాన్ని ప్రత్యేకంగా నిలిపాయి."
  },
  varanasi: {
    name: "వారాణసీ",
    country: "ఉత్తర్ ∙ ప్రదేశ్",
    history: "ప్రతి కాలంలో నిరంతరంగా బస చేస్తున్న పురాతన నగరాలలో ఒకటైన వారాణసీ (బెనారస్) హిందువుల కోసం కీలక ఆధ్యాత్మిక కేంద్రం. పవిత్ర గంగా నది ఒడ్డున ఉన్న ఈ నగరం ఘాట్‌లు, పురాతన మందిరాలు మరియు ఆధ్యాత్మిక ప్రాధాన్యత కారణంగా ప్రసిద్ధి చెందింది."
  },
  amritsar: {
    name: "అమృత్‌సర్",
    country: "పంజాబ్",
    history: "1577లో గురు రామ్ దాస్ కల్పించిన అమృత్‌సర్ సిక్కు ప్రధాన ప్రసిద్ధ దేవస్థానం గోల్డెన్ టెంపుల్‌కు(home). 1919లో జరిగిన జల్లియా వాలా బాగ్ ఘోర ఘటన ఇందులో చోటు చేసుకుంది—ఇది సిక్కు వారసత్వం, ఆధ్యాత్మికత మరియు ధైర్యానికి హెచ్చరిక."
  },
  manali: {
    name: "మనాలి",
    country: "హిమాచల్ ∙ ప్రదేశ్",
    history: "సుమారు 2,050 మీటర్ల ఎత్తులో ఉన్న హిమాలయాల మనాలలో ప్రకృతి సౌందర్యం, సాహస క్రీడలు మరియు పురాతన హిడింబా మందిరం ప్రసిద్ధి చెందాయి. రోహతాంగ్ పాస్ మరియు సొలాంగ్ వాలీకి ఇది ద్వారం."
  },
  leh: {
    name: "లే",
    country: "లదాఖ్",
    history: "లదాఖ్ రాజధాని లే సుమారు 3,500 మీటర్ల ఎత్తులో ఉంది మరియు ఒకప్పుడు పురాతన సిల్క్ రూట్‌లో ముఖ్య నిలయంగా ఉండింది. ద్రామాటిక్ ల్యాండ్‌స్కేప్స్, బౌద్ధ మఠాలు, పాంగోంగ్ త్సో వంటి హై-అల్టిట్యూడ్ సరస్సుల వల్ల లే ప్రత్యేకంగా ఉంటుంది."
  },
  rishikesh: {
    name: "రిషికేశ్",
    country: "ఉత్తరాఖండ్",
    history: "యోగ ప్రపంచ రాజధానిగా వ్యవహరిస్తున్న రిషికేశ్ గంగ తీరంలో ఉన్న ఆధ్యాత్మిక నగరం. ఆశ్రమాలు, యోగా కేంద్రాలు మరియు లక్ష్మణ్ జూలా వంటి ప్రసిద్ధి కలిగిన ఆకర్షణలతో పాటు బీట్ల్స్ 1968లో చేసిన చూడటం దీనికి అంతర్జాతీయ పేరు తెచ్చింది."
  },
  udaipur: {
    name: "ఉదయపూర్",
    country: "రాజస్థాన్",
    history: "ఎర్రకా పల్లపు సరస్సుల నగరంగా పిలవబడే ఉదయపూర్ 1559లో స్థాపితమయ్యింది. సిటీ ప్యాలెస్, లేక్ ప్యాలెస్, పిచోలా మరియు ఫతేహ్ సాగర్ సరస్సులు నగరాన్ని రొమాంటిక్ రాజస్థానీ వాస్తవకళకు ప్రతీకగా చేస్తాయి."
  },
  shimla: {
    name: "షిమ్లా",
    country: "హిమాచల్ ∙ ప్రదేశ్",
    history: "బ్రిటిష్ ఇండియాలోని గ్రీష్మ కాలపు రాజధాని అయిన షిమ్లా విక్టోరియన్ శైలి నిర్మాణాలు, మాల్ రోడ్ మరియు కల్కా-షిమ్లా రైలు మార్గం వంటి ఆకర్షణలతో ప్రసిద్ధి చెందింది."
  },
  mussoorie: {
    name: "మసూరీ",
    country: "ఉత్తరాఖండ్",
    history: "హిల్స్ ది క్వీన్ అని పిలువబడే మసూరీ 1826లో బ్రిటిష్ వారు స్థాపించారు. గన్ హిల్, కెంప్టీ ఫాల్స్ మరియు కెమెల్ బ్యాక్ రోడ్ వంటి ఆకర్షణలు ఉన్నాయి."
  },
  srinagar: {
    name: "శ్రీనగర్",
    country: "జమ్మూ & కాశ్మీర్",
    history: "దాల్ సరస్సు, మఘల్ తోటలు (శలిమార్, నిషాత్) మరియు సంప్రదాయ హౌస్‌బోట్‌లతో శ్రీనగర్ \"భూమిపై స్వర్గం\"గా ప్రసిద్ధి చెందింది."
  },
  jaisalmer: {
    name: "జైసల్మర్",
    country: "రాజస్థాన్",
    history: "థార్ মরুভూమిలోని బంగారు నగరం; పసుపు బరువైన ఇసుక రాళ్ళ కోట, సమ్ సాండ్ డ్యూన్స్ మరియు నాజుకైన హవేలీలు ఈ నగరాన్ని ప్రసిద్ధి పరుస్తాయి."
  },
  nainital: {
    name: "నెయినీటాల్",
    country: "ఉత్తరాఖండ్",
    history: "సుందర నెయిని సరస్సు చుట్టూ ఏర్పడిన నెయినీటాల్ 1841లో బ్రిటిష్‌లచే హిల్ స్టేషన్‌గా అభివృద్ధయ్యింది. నేనైదేవి దేవాలయం మరియు స్నో వీల్ పాయింట్ ముఖ్య ఆకర్షణలు."
  },
  vrindavan: {
    name: "వ్రిందావన్",
    country: "ఉత్తర్ ∙ ప్రదేశ్",
    history: "ఈ ప్రదేశాన్ని శ్రీకృష్ణుని బాల్య జీవిత సంగతులైన స్థలం గా భావిస్తారు; బ్యాంగ్కే బిహారి మరియు ISKCON వంటి లక్షల మందిరాలతో ఇది ప్రముఖ పుణ్య స్థలం."
  },
  haridwar: {
    name: "హరిద్వార్",
    country: "ఉత్తరాఖండ్",
    history: "గంగా నది లో ప్రవేశించే ప్రదేశం; ప్రతి 12 సంవత్సరాలక 한번 కుంభ మేళా ఇక్కడ నిర్వహించబడుతుంది. హర్ కీ పౌఢీలో సాయంత్ర Գంగా ఆర్తి ప్రసిద్ధి."
  },
  mumbai: {
    name: "ముంబై",
    country: "మహారాష్ట్రా",
    history: "భారత ఆర్థిక రాజధాని, బాలీవుడ్ పరిశ్రమకు నివాసం. గేట్ ఆఫ్ ఇండియా, మरीन డ్రైవ్ వంటి చిహ్‍్నాలతో ప్రధాన నగరం."
  },
  bengaluru: {
    name: "బెంగళూరు",
    country: "కర్ణాటక",
    history: "ఇండియాకు 'సిలికాన్ వ్యాలీ'గా পরিচితం—ఆధునిక IT హబ్; లాల్ బాగ్ మరియు కుబ్బన్ పార్క్ వంటి గార్డెన్లతో కూడి ఉంది."
  },
  goa: {
    name: "గోవా",
    country: "గోవా",
    history: "పోర్చుగీసు వారసత్వం కలిగిన కనిష్ట రాష్ట్రం; బీచ్‌లు, నైట్‌లైఫ్ మరియు కాలనియల్ బిల్డింగ్‌లు ప్రసిద్ధి."
  },
  kerala: {
    name: "కేరళ",
    country: "కేరళ",
    history: " 'గాడ్స్ ఓన్ కంట్రీ' — బ్యాక్‌వాటర్‌లు, ఆయుర్వేద చికిత్సలు, కలచిన పచ్చపన్యాలు, కథకళి మరియు స్నేక్ బోటు పోటీలతో ప్రసిద్ధి."
  },
  hyderabad: {
    name: "హైదరాబాద్",
    country: "తెలంగాణ",
    history: "చార్మినార్, గోలకొండ కోట వంటి చరిత్రాత్మక స్థలాలతో పాటు బిర్యానీ మరియు ముత్యాల వర్తకం కోసం ప్రసిద్ధి; ఇప్పటి IT హబ్."
  },
  chennai: {
    name: "చెన్నై",
    country: "తమిళనాడు",
    history: "పూర్వ మద్ద్రాస్; మారిన బీచ్, కపాలేశ్వర ఆలయం, ఫోర్ట్ సెయింట్ జార్జ్ వంటి ఆకర్షణలతో దక్షిణ భారతీయ సంస్కృతికి ద్వారము."
  },
  kochi: {
    name: "కొచ్చి",
    country: "కేరళ",
    history: "ఫోర్ట్ కొచ్చి, చైనీస్ ఫిషింగ్ నెట్లు, మట్టంచెరి ప్యాలెస్ వంటి ప్రాంతీయ-కాలనియల్ ప్రభావాలతో మసాలా వాణిజ్య కేంద్రం."
  },
  mysuru: {
    name: "మైసూర్",
    country: "కర్ణాటక",
    history: "వాడియర్ రాజవంశపు రాజధాని; దసరా వేడుకల్లో మైసూర్ ప్యాలెస్ ప్రకాశిస్తుంది; రేష్మా సారీస్ మరియు సంప్రదాయ కళలకు ప్రసిద్ధి."
  },
  madurai: {
    name: "మదురై",
    country: "తమిళనాడు",
    history: "మీనాక్షి అల్లారు కీ పెద్ద గోపురాలతో ఉన్న పురాతన నగరం; சங்கకాలంలో విద్యార్ధి & సాంస్కృతిక కేంద్రంగా ఉన్నది."
  },
  alleppey: {
    name: "అల్లెప్పి",
    country: "కేరళ",
    history: "బ్యాక్‌వాటర్‌లు మరియు హౌస్‌బోట్‌లు తో 'ఈస్ట్ వెనిస్'గా పిలవబడుతుంది; నెహ్రూ ట్రోఫీ బోట్ రేస్ ప్రసిద్ధి."
  },
  ooty: {
    name: "ఉటీ",
    country: "తమిళనాడు",
    history: "నీலகిరి హిల్స్‌లో గల హిల్ స్టేషన్; నీలగిరి మౌంటైన్ రైల్వే (UNESCO) మరియు టీ తోటలు ప్రసిద్ధి."
  },
  coorg: {
    name: "కూగర్ (కొడగు)",
    country: "కర్ణాటక",
    history: " 'భారత్ యొక్క స్కాట్లాండ్'గా పిలవబడే కోర్గ్ కాఫీ తోటలు, మేఘాలతో నిండిన కొండలు మరియు ప్రత్యేక కోడవ సంస్కృతికి ప్రసిద్ధి."
  },
  hampi: {
    name: "హంపి",
    country: "కర్ణాటక",
    history: "యునెస్కో వరల్డ్ హెరిటేజ్ సైట్; విజయనగర స్వరాజ్య సమయపు విరిగిపోయిన నిర్మాణాలతో ప్రసిద్ధి."
  },
  pondicherry: {
    name: "పూడుచ్చేరి (పూడుచ్చేరిలో పూడుచ్చేరి)",
    country: "పూడుచ్చేరిలో",
    history: "ఫ్రెంచ్ కాలనీవారస్యం, ఫ్రెంచ్ క్వార్టర్, అరవిందో ఆశ్రమం & సభ్యత ఉపనివేశం."
  },
  visakhapatnam: {
    name: "విశాఖపట్నం",
    country: "ఆంధ్రప్రదేశ్",
    history: "ఈస్ట్ కోస్ట్ నగరం—స్మిహాచలం ఆలయం, బోరా గుహలు మరియు INS కురుసురా అండర్‌సీ మ్యూజియం వంటి ఆకర్షణలు."
  },
  tirupati: {
    name: "తిరుపతి",
    country: "ఆంధ్రప్రదేశ్",
    history: "తిరుమల వెంకటేశ్వర ఆలయం ఉన్న ప్రముఖ పుణ్యస్థలం; సంవత్సరానికి లక్షలాది భక్తులు కలుస్తారు."
  },
  kolkata: {
    name: "కొలకత్తా",
    country: "పశ్చిమ బెంగాల్",
    history: "సిటీ ఆఫ్ జాయ్; విక్టోరియా మెమోరియల్ & హవడా బ్రిడ్జ్ వంటి కాలనీయ చిహ్నాలతో కూడి ఉంది; దుర్గాపూజ గొప్పగా జరుపుకుంటారు."
  },
  gangtok: {
    name: "గంగ్టోక్",
    country: "సిక్కిం",
    history: "కంచన్జంగా దృశ్యాలతో 1,650 మీటర్ల ఎత్తులో ఉన్న రాజధాని; రూమ్‌టెక్ & ఎంచే మఠాలతో బౌద్ధ సంస్కృతి."
  },
  shillong: {
    name: "శిల్లాంగ్",
    country: "మెఘాలయ",
    history: "తూర్పు స్కాట్లాండ్ గా పిలవబడే; ఎలిఫెంట్ ఫాల్‌లు, సరస్సులు మరియు సుగంధ సంగీత సంస్కృతి ప్రసిద్ధి."
  },
  darjeeling: {
    name: "దార్జిలింగ్",
    country: "పశ్చిమ బెంగాల్",
    history: "టాయ్ ట్రైన్ (హిమాలయన్ రైల్వే), టీ తోటలు మరియు టైగర్ హిల్ నుంచి కన్ఛన్జంగా సూర్యోదయం ప్రసిద్ధి."
  },
  puri: {
    name: "పూరి",
    country: "ఒడిశా",
    history: "జగన్నాధ్ దేవాలయం అస్తిత్వంతో, రథోత్సవం లక్షలాది భక్తులను ఆకర్షిస్తుంది; కొణార్క్ సూర్య మందిరం సన్నిహితంగా ఉంది."
  },
  guwahati: {
    name: "గువాహాటి",
    country: "అసామ్",
    history: "వెడక-తూర్పు భారతానికి ప్రవేశ ద్వారం; కమఖ్యా ఆలయం & బ్రహ్మపుత్ర తీరంతో ప్రసిద్ధి."
  },
  kohima: {
    name: "కోహిమా",
    country: "నాగాలాండ్",
    history: "1944లో జరిగిన కోహిమా యుద్ధం స్మృతికి కోహిమా వార్ సెమెటరీ ఉంది; హార్న్‌బిల్ ఉత్సవం డిసెంబరులో ప్రసిద్ధి."
  },
  itanagar: {
    name: "ఇటానగర్",
    country: "అరుణాచల్ ∙ ప్రదేశ్",
    history: "ఇటానగర్ అంటే 'ఇటం కోట' — 14వ–15వ శతాబ్దపు ఇటా కోట ఉట్కృష్టంగా ఉంది; గోంపాలు మరియు పోలో పార్క్ ఉన్నాయి."
  },
  bhubaneswar: {
    name: "భువనేశ్వర్",
    country: "ఒడిశా",
    history: "500కంటే ఎక్కువ ఆలయాలున్న 'టెంపుల్ సిటీ' — లింగరాజ్, ముఖ్తేశ్వర & రాజరాణి ఆలయాలతో ప్రసిద్ధి."
  },
  portblair: {
    name: "పోర్ట్ బ్లేర్",
    country: "అండమాన్ & నికొබార్ ఐలాండ్స్",
    history: "సెల్యులర్ జైలు (నేషనల్ మెమోరియల్) మరియు ఒడిరిగిన బీచ్‌లు, కొరల్ రీఫ్స్ తో ప్రసిద్ధి."
  },
  pelling: {
    name: "పెల్లింగ్",
    country: "సిక్కిం",
    history: "కంచన్జంగా అద్భుత దృశ్యాలతో పశ్చిమ సిక్కిం చిన్న పట్టణం; పేమాయంగ్త్సే మఠం & రాబ్డెంట్సే అయ్యాయి."
  },
  tawang: {
    name: "తావాంగ్",
    country: "అరుణాచల్ ∙ ప్రదేశ్",
    history: "తావాంగ్ మఠం (1680 స్థాపన) భారతదేశంలో అతిపెద్ద మఠం; సెలా పాస్ & మధురి సరస్సు ఇక్కడి ప్రధాన ఆకర్షణలు."
  },
  cherrapunji: {
    name: "చెర్రాపుంజి (సోహ్రా)",
    country: "మెఘాలయ",
    history: "గతంలో 'భూమిపై అత్యధిక వర్షపాతం' గల ప్రదేశం; జీవించే రూట్ బ్రిడ్జ్‌లు & అద్భుత జలపాతాలు ఉన్నాయి."
  },
  imphal: {
    name: "ఇమ్ఫాల్",
    country: "మణిపూర్",
    history: "రెండవ ప్రపంచ యుద్ధంలో కీలక పాత్ర వహించిన ఇమ్ఫాల్—లోక్తాక్ సరస్సు, కాంగ్లా కోట మరియు ఫుమ్డీస్ ప్రత్యేక ఆకర్షణలు."
  },
  aizawl: {
    name: "ఐజోల్ (ఐజోల్ / ఐజావల్)",
    country: "మిజోరం",
    history: "బాంబూ ఇల్లు సంస్కృతి, చేతి నైపుణ్యాలు మరియు పండుగలకు ప్రసిద్ధి; మిజోరం స్టేట్ మ్యూజియం మరియు డర్ట్‌లాంగ్ హిల్స్ ఉన్నాయి."
  },
  agartala: {
    name: "అగర్తల",
    country: "త్రిపుర",
    history: "ఉజ్జయింత ప్యాలెస్ (1901) వంటి రాజవంశ వారసత్వం; నీర్మహల్ వాటర్ ప్యాలెస్ మరియు త్రిపురా సుందరీ ఆలయం వంటి చారిత్రక ఆకర్షణలు."
  },
  khajuraho: {
    name: "ఖజురాహో",
    country: "మధ్య ∙ ప్రదేశ్",
    history: "950–1050 CE మధ్య చంద్రేల వంశం నిర్మించిన అద్భుత మద్యయుగ ఆలయాలు — జైన & హిందూ ఆలయాల సంక్లిష్ట శిల్పాల కోసం యునెస్కో ప్రపంచ వారసత్వ స్థలం."
  },
  bhopal: {
    name: "భోపాల్",
    country: "మధ్య ∙ ప్రదేశ్",
    history: "ఎర్రకాళ్లతో కూడిన సరస్సుల నగరం; తాజ్ ఉల్ మస్జిద్ మరియు సమీపంలోని శాంచి స్తూప వంటి చారిత్రకత్వంతో పాటు 1984 గ్యాస్ ట్రాజడీకి కూడా గుర్తుగా ఉంటుంది."
  },
  gwalior: {
    name: "గ్వాలియోర్",
    country: "మధ్య ∙ ప్రదేశ్",
    history: "గోపాల కోట మరియు శిల్పాల, తేలికపాటి సంగీత సంప్రదాయంతో ప్రముఖ నగరం; 8వ శతాబ్దపు చరిత్ర ఉంది."
  },
  indore: {
    name: "ఇంద్రోర్ (ఇందోర్)",
    country: "మధ్య ∙ ప్రదేశ్",
    history: "హోల్కర్ వంశం ఆధ్వర్యంలో 1715లో స్థాపించబడిన వాణిజ్య కేంద్రం; రాజవాడా ప్యాలెస్, లాల్ బాగ్ మరియు బజార్లు ప్రసిద్ధి."
  },
  orchha: {
    name: "ఒర్చా",
    country: "మధ్య ∙ ప్రదేశ్",
    history: "1531లో స్థాపించిన బుండాేలా రాజపుత్ రాజధాని; బేత్వా నది ద్వీపంపై అద్భుత ప్యాలెస్‌లు మరియు మందిరాలూ ఉన్నాయి."
  },
  ujjain: {
    name: "ఉజ్జైన్",
    country: "మధ్య ∙ ప్రదేశ్",
    history: "సప్త పురులలో ఒకటి; ప్రతి 12 సంవత్సరాలు జరిగే కుంభమేళాకు ప్రసిద్ధి—మహాకాలేశ్వర ఆలయం అత్యంత ప్రముఖం."
  },
  ranchi: {
    name: "రాంచీ",
    country: "జార్ఖండ్",
    history: "నీరవீழ్చుల నగరంగా ప్రసిద్ధి; హండ్రూ, జోన్హా మరియు దసామ్ ఫాల్స్ వంటి ప్రకృతి అందాలు మరియు MS ధోనీ జన్మస్థలం."
  },
  daman: {
    name: "దమన",
    country: "దమన & ద్వీపాలు",
    history: "పోర్చుగీస్ కాలనీవారస్యం; కోటలు, చర్చి‌లు మరియు సముద్రతీర ఆకర్షణలు ఉన్నాయి."
  },
  silvassa: {
    name: "సిల్వాస్సా",
    country: "దాద్రా & నగర్ హవేలీ",
    history: "వార్లీ కళలతో, ప్రకృతి పార్కుల మరియు పారిశ్రామిక అభివృద్ధితో కూడిన నగరం."
  },
  nagpur: {
    name: "నాగ్‌పూర్",
    country: "మహారాష్ట్రా",
    history: "ఆరెంజ్ సిటీ; దేశ కేంద్ర భాగంలో ఉన్న నగరం; దీక్షాభూమి మరియు దగ్గర పొదువుల అడవులకి ప్రాచుర్యం."
  },
  raipur: {
    name: "రాయ్‌పూర్",
    country: "ఛత్తీస్‌గఢ్",
    history: "ప్రగతిశీల నగరం; శైల్పాలయాలు మరియు పురాతన ధార్మిక స్థలాలకి ద్వారం."
  },
  jabalpur: {
    name: "జబల్పూర్",
    country: "మధ్య ∙ ప్రదేశ్",
    history: "నర్మదా నది ఒడ్డునున్న మార్బల్ రాక్స్ (భేదఘాట్) తో ప్రసిద్ధి; ధువంధార్ జలపాతం మరియు గోండ్ కోటలు ఆకర్షణీయాలు."
  },
  pachmarhi: {
    name: "పచ్మర్‍హి (పచ్మర్హి)",
    country: "మధ్య ∙ ప్రదేశ్",
    history: "సత్‌పురా పరిధిలో ఉన్న ఏకైక హిల్ స్టేషన్; పండవ గుహలు మరియు వర్ష జలపాతాలతో ప్రసిద్ధి."
  },
  amarkantak: {
    name: "అమర్‍కంటక్",
    country: "మధ్య ∙ ప్రదేశ్",
    history: "నర్మదా మరియు సోన్ నదుల మూల ప్రదేశం; పుణ్యస్ధలం మరియు ప్రకృతిజన్య శ్రేయోభవాలకే ప్రసిద్ధి."
  },
  chitrakoot: {
    name: "చిత్రకూట్",
    country: "మధ్య ∙ ప్రదేశ్ / ఉత్తర ∙ ప్రదేశ్ (ప్రాంతం)",
    history: "రామాయణానుసారం రాముడు, సీత మరియు లక్ష్మణులు వనవాస సమయంలో గడిపిన స్థానంగా నమ్మబడుతుంది; ఇది ముఖ్య యాత్రా స్థలం."
  },
  bhimbetka: {
    name: "భీంబెట్ట్కా",
    country: "మధ్య ∙ ప్రదేశ్",
    history: "యునెస్కో వరల్డ్ హెరిటేజ్ సైట్ - ప్రాచీన రాక్ షెల్టర్స్ మరియు 30,000 సంవత్సరాల ముందు నుండి ఉన్న రాక్ పెయింటింగ్స్ కలిగి ఉంది."
  }
    },
    destinationFeed: {
      loadingMore: 'మరిన్ని ఆఫర్‌లు లోడ్ అవుతున్నాయి...',
      inquiryTitle: 'ప్రశ్నలు ఉన్నాయా? మమ్మల్ని సంప్రదించండి!',
      inquirySubtitle: 'మీ విచారణను మాకు పంపండి మరియు మా బృందం 24 గంటల్లో మిమ్మల్ని సంప్రదిస్తుంది',
      yourName: 'మీ పేరు *',
      yourEmail: 'మీ ఇమెయిల్ *',
      phoneNumber: 'ఫోను నంబరు',
      subject: 'విషయం',
      yourMessage: 'మీ సందేశం *',
      sendInquiry: 'విచారణ పంపండి',
      scrollToInquiryAria: 'విచారణ ఫారమ్‌కు స్క్రోల్ చేయండి',
      bookViaWhatsapp: "వాట్సాప్ ద్వారా బుక్ చేయండి"

    },
    footer: {
      description: 'మరపురాని ప్రయాణాల కోసం మీ విశ్వసనీయ ప్రయాణ సహచరుడు. జీవితకాలం నిలిచిపోయే జ్ఞాపకాలను సృష్టించడం.',
      destinations: {
        title: 'గమ్యస్థానాలు',
        keralaBudgetHouseboat: 'కేరళ బడ్జెట్ హౌస్‌బోట్',
        luxuryTopEndHouseboat: 'లగ్జరీ టాప్ ఎండ్ హౌస్‌బోట్',
        b2bPriceKeralaHouseboats: 'B2b ధర కేరళ హౌస్‌బోట్లు',
        houseboatsInAlappuzha: 'అలప్పుజాలో హౌస్‌బోట్లు',
        budgetBoatHouseAllepey: 'బడ్జెట్ బోట్ హౌస్ అలెప్పి',
        budgetBoatHouseAlappuzha: 'బడ్జెట్ బోట్ హౌస్ అలప్పుజా',
        budgetHouseboatAllepey: 'బడ్జెట్ హౌస్‌బోట్ అలెప్పి',
        budgetHouseboatAlappuzha: 'బడ్జెట్ హౌస్‌బోట్ అలప్పుజా',
        budgetAlleppeyBoatHouse: 'బడ్జెట్ అలెప్పి బోట్ హౌస్',
        spotBookingBoatHouse: 'స్పాట్ బుకింగ్ బోట్ హౌస్',
        prepaidTaxiCochinAirport: 'కొచ్చిన్ విమానాశ్రయంలో ప్రీపెయిడ్ టాక్సీ సర్వీస్',
        budgetAlappuzhaHouseboats: 'బడ్జెట్ అలప్పుజా హౌస్‌బోట్లు',
        budgetAlleppeyHouseboats: 'బడ్జెట్ అలెప్పి హౌస్‌బోట్లు',
        b2bAlleppeyHouseboats: 'B2b అలెప్పి హౌస్‌బోట్లు',
        privateAlleppeyHouseboats: 'ప్రైవేట్ అలెప్పి హౌస్‌బోట్లు',
        houseboatsInIndia: 'భారతదేశంలో హౌస్‌బోట్లు',
        sharedHouseboatsInAlleppey: 'అలెప్పీలో షేర్డ్ హౌస్‌బోట్లు',
        sharingHouseboatsInAlleppey: 'అలెప్పీలో షేరింగ్ హౌస్‌బోట్లు',
        sharingBoathouseInAlleppey: 'అలెప్పీలో షేరింగ్ బోట్‌హౌస్',
        clubbingHouseboatsInAlleppey: 'అలెప్పీలో క్లబ్బింగ్ హౌస్‌బోట్లు',
        clubbingBoathouseInAlleppey: 'అలెప్పీలో క్లబ్బింగ్ బోట్‌హౌస్',
        luxuryHouseboatsInAlleppey: 'అలెప్పీలో లగ్జరీ హౌస్‌బోట్లు',
        premiumHouseboatsInAlleppey: 'అలెప్పీలో ప్రీమియం హౌస్‌బోట్లు',
        deluxeHouseboatsInAlleppey: 'అలెప్పీలో డీలక్స్ హౌస్‌బోట్లు',
        standardHouseboatsInAlleppey: 'అలెప్పీలో స్టాండర్డ్ హౌస్‌బోట్లు',
        ultraLuxuryHouseboatsInAlleppey: 'అలెప్పీలో అల్ట్రా లగ్జరీ హౌస్‌బోట్లు',
        ultraLuxurySharingHouseboatsInAlleppey: 'అలెప్పీలో అల్ట్రా లగ్జరీ షేరింగ్ హౌస్‌బోట్లు',
        bestHouseboatsInAlleppey: 'అలెప్పీలో ఉత్తమ హౌస్‌బోట్లు',
        bestLuxuryHouseboatsInAlleppey: 'అలెప్పీలో ఉత్తమ లగ్జరీ హౌస్‌బోట్లు',
        bestPremiumHouseboatsInAlleppey: 'అలెప్పీలో ఉత్తమ ప్రీమియం హౌస్‌బోట్లు',
        bestDeluxeHouseboatsInAlleppey: 'అలెప్పీలో ఉత్తమ డీలక్స్ హౌస్‌బోట్లు',
        bestStandardHouseboatsInAlleppey: 'అలెప్పీలో ఉత్తమ స్టాండర్డ్ హౌస్‌బోట్లు',
        bestAlappuzhaHouseboatPackages: 'ఉత్తమ అలప్పుజా హౌస్‌బోట్ ప్యాకేజీలు',
        bestAlappuzhaBoatHousePackages: 'ఉత్తమ అలప్పుజా బోట్ హౌస్ ప్యాకేజీలు'
      },
      services: { title: 'సేవలు', flightBooking: 'విమాన బుకింగ్', hotelReservation: 'హోటల్ రిజర్వేషన్', tourPackages: 'టూర్ ప్యాకేజీలు' },
      company: { title: 'కంపెనీ', aboutUs: 'మా గురించి', contact: 'సంప్రదించండి' },
      support: { title: 'మద్దతు', helpCenter: 'సహాయ కేంద్రం', terms: 'సేవా నిబంధనలు', privacy: 'గోప్యతా విధానం', refund: 'వాపసు విధానం', faq: 'తరచుగా అడిగే ప్రశ్నలు' },
      copyright: '© {{year}} టూరిజం ప్యారడైజ్. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.'
    }
  },
  es: {
    translation: {
      destinationNotFound: {
      title: "Destino no encontrado",
      description: "Lo sentimos, no pudimos encontrar el destino que buscas."
    },
    goBack: "Volver a los destinos",
    thingsToDo: "cosas para hacer",
    aboutDestination: "Acerca del destino",
    getInTouch: "Ponte en contacto",
    chatOnWhatsApp: "Chatear en WhatsApp",
    instantResponse: "Respuesta inmediata",
    sendEmail: "Enviar correo electrónico",
    emailAddress: "info@tourismparadise.com",
    food: "Pedir comida en línea",
    houseboatShort: "Casa flotante en Alleppey día y noche, 1 dormitorio, cubierta superior privada.",
    exploreNow: "Explorar ahora",
    planYourVisitTitle: "Planifica tu visita",
    planYourVisitSubtitle: "Completa el formulario y te contactaremos en 24 horas",
    labelFullName: "Nombre completo *",
    placeholderFullName: "Introduce tu nombre completo",
    labelEmail: "Correo electrónico *",
    placeholderEmail: "your.email@example.com",
    labelPhone: "Número de teléfono",
    placeholderPhone: "+91 98765 43210",
    labelMessage: "Tu mensaje *",
    placeholderMessage: "Cuéntanos sobre tus planes de viaje, preferencias y preguntas...",
    sending: "Enviando...",
    sendInquiry: "Enviar consulta",
    successMessage: "✓ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
    whatsappMessage: "¡Hola! Estoy interesado en visitar {{name}}, {{country}}. ¿Puedes darme más información?",
    emailSubject: "Consulta sobre {{destinationName}}",
    emailBodyTemplate: "Hola,\n\nEstoy interesado en saber más sobre {{destination}}.\n\n¡Gracias!",
      heroTitle: 'Planifica Cada Parte de Tu Viaje',
      heroSubtitle: 'Reserva vuelos, hoteles, transporte y experiencias, todo en un solo lugar. Tu solución de viaje completa para una planificación sin interrupciones.',
      houseboats: 'Casas flotantes',
      shikara: 'Paseos en Shikara',
      flights: 'Vuelos',
      hotels: 'Hoteles',
      trains: 'Trenes',
      buses: 'Autobuses',
      cars: 'Alquiler de coches',
      tours: 'Tours',
      cruises: 'Cruceros',
      activities: 'Actividades',
      packages: 'Paquetes de vacaciones',
      weekend: 'Escapadas de fin de semana',
      beaches: 'Estancias en la playa',
      mountains: 'Viajes a la montaña',
      adventure: 'Aventura',
      citybreaks: 'Escapadas a la ciudad',
      photography: 'Tours de fotografía',
      insurance: 'Seguro de viaje',
      passes: 'Pases de ciudad',
      budget: 'Estancias económicas',
      bikes: 'Alquiler de bicicletas',
      villas: 'Villas y casas',
      todaysDeals: 'Ofertas de Hoy',
      exploreDestinations: 'Explorar destinos',
      seaFishRestaurants: 'Restaurantes de pescado de mar',
      backwaterVillageStay: 'Estancia en un pueblo de remansos',
      keralaChipsAndSpices: 'Patatas fritas y especias de Kerala',
      keralaHandlooms: 'Telares manuales de Kerala',
      honeymoonBoatHouse: 'Casa flotante para luna de miel',
      houseboats: 'Casas flotantes',
      noHouseboatsFound: 'No se encontraron casas flotantes que coincidan con su búsqueda.',

      budgetTravelDeals: 'Ofertas de viajes económicas para ti',
      offerHotels: 'Hoteles',
      offerHouseboatsDayNightCruise: 'Casas flotantes en Alleppey crucero diurno y nocturno',
      offerHouseboatsDayNight1Bedroom: 'Casas flotantes en Alleppey de 1 dormitorio día y noche',
      offerHouseboatsDayCruise1BedroomUpperDeck: 'Casa flotante privada de 1 dormitorio con cubierta superior y crucero diurno en Alappuzha',
      offerKeralaHoneymoonHouseboat: 'Casa flotante para luna de miel en Kerala',
      offerHouseboatDayNight1BedroomUpperDeck: 'Casa flotante privada de 1 dormitorio con cubierta superior día y noche en Alleppey',
      offerHouseboatsAlleppeyDayTripUpperDeck: 'Excursión de un día en casa flotante con cubierta superior en Alleppey',
      offerHouseboatsB2BPrice1Bedroom: 'Precio B2B para casas flotantes de 1 dormitorio en Alleppey',
      offerSharingHouseboats2People: 'Precio de casas flotantes compartidas para 2 personas en Alleppey',
      offerUltraPremiumHouseboats: 'Casas flotantes de ultra lujo en Alleppey',
      offerKeralaTourBudgetPackages: 'Paquetes económicos de tours por Kerala',
      offerKeralaBoating: 'Navegación en Kerala',
      offerB2BTravelDealsKeralaHouseboat: 'Ofertas de viaje B2B para paquetes de casas flotantes en Kerala',
      offerPetalsFlowers: 'Flores de pétalos',
      offerOrchidForSale: 'Orquídea en venta - plantas de orquídeas en flor',
      offerOxidisedOrnaments: 'Adornos oxidados',
      offerKeralaHandloomsSarees: 'Telares manuales de Kerala - saris kasavu de Kerala',
      offerKeralaHandicrafts: 'Artesanías de Kerala',
      offerKeralaChips: 'Patatas fritas de Kerala - patatas fritas de plátano de Kerala',
      offerKeralaSpices: 'Especias de Kerala',
      offerDriedFish: 'Pescado seco',
      offerKeralaRealEstate: 'Bienes raíces en Kerala',
      offerKeralaLottery: 'Billetes de lotería de Kerala - billetes de lotería de parachoques de Kerala',
      offerKeralaHomeDecor: 'Decoración del hogar de Kerala',
      offerTransportationInKerala: 'Transporte en Kerala',
      offerKeralaCoirProducts: 'Productos de fibra de coco de Kerala',
      whyChooseTitle: 'Por qué elegir Tourism Paradise',
      whyChooseSubtitle: 'Hacemos que la planificación de viajes sea sencilla con nuestros servicios integrales y orientación experta',
      showLess: 'Mostrar menos',
      showMore: 'Mostrar más'
    },featureList: {
      pilgrimPackages: 'Mejores Paquetes de Peregrinación',
      pilgrimDescription: 'Tours de peregrinación cuidadosamente seleccionados a destinos sagrados para un viaje espiritual sereno.',
      industrialTitle: 'Servicio de consultoría industrial y proveedor de mano de obra',
      industrialShortDesc: 'Desde informes de proyectos y orientación financiera hasta el suministro de mano de obra especializada como ingenieros, técnicos y contratistas de construcción, cubrimos todas sus necesidades industriales y empresariales.',
      industrialFullDesc: 'Preparación de informes de proyectos, orientación financiera, supervisión de la construcción, preparación de planos y presupuestos, maquinaria para la industria y hoteles, mano de obra y contratistas de construcción, electricidad, plomería, aire acondicionado, construcción, electrodomésticos, nevera, lavadora, aire acondicionado, automóvil, automotriz, computadora, teléfono móvil, teléfono celular, operador de ascensores, decoración del hogar, joyería y adornos, cafetera y preparador de aperitivos, albañil, carpintero, soldador, instalación de maquinaria, pintor, limpieza, hoteles, conductor, fabricación de aluminio, fabricaciones de acero, servicio doméstico, trabajo de jardinería, operadores de vehículos y maquinaria pesada, diseño y alojamiento de sitios web, instalación de sistemas de energía solar, servicios a domicilio, técnicos de laboratorio, ingenieros y médicos, maestros, lavandería, servicio de limpieza, etc.',
      educationTitle: 'Servicio de consultoría educativa',
      educationDescription: 'Ingeniería, Facultad de medicina, agricultura, informática con IA, LLB, MBA, BBA, MCA, técnicos de laboratorio, fisioterapia, dental, ayurvédica, etc.',
      legalTitle: 'Abogados y letrados',
      legalDescription: 'Acceso a asesoramiento y servicios legales profesionales de abogados y letrados con experiencia.',
    },
    destinationOffers: {
      1: {
        title: "Hoteles",
        description: "Áreas de vida silvestre/bosques y actividades relacionadas: • Santuario de Vida Silvestre de Periyar (o Reserva de Tigres de Periyar) • Zonas forestales de Kerala • Zonas de senderismo • Zonas montañosas • Interacción/observación de elefantes (generalmente ofrecida como safari en elefante, paseo en elefante o avistamientos en bosques/santuarios. En festivales aparece como procesiones de elefantes o Gajamela)."
      },

      2: {
        title: "Houseboats en Alleppey — Crucero día y noche",
        description: "Hoteles houseboat en Alleppey, houseboats de 1/2/3 hasta 22 habitaciones en Alappuzha. Houseboats premium y de lujo para estancias de día y noche, houseboats económicos, muelle de Muhamma, carrera de botes Nehru Trophy, punto de inicio en Alappuzha, punto final en Alleppey, rutas de houseboat, área turística de Kannankara. Houseboats de 1 a 22 habitaciones disponibles en categorías premium y de lujo."
      },

      3: {
        title: "Houseboats en Alleppey — Día y noche (1 habitación)",
        description: "Homestays en los backwaters de Alleppey, estancias en aldeas de Alappuzha, apartamentos en Pallathuruthi, villas en Alleppey, casas en los árboles, resorts en islas de Kerala, propiedades frente al lago y la playa. Houseboats de 1 a 22 habitaciones, premium y de lujo, para estancias de día y noche."
      },

      4: {
        title: "Alappuzha — Crucero de día en houseboat privado (1 habitación, cubierta superior)",
        description: "Houseboats de 1 a 22 habitaciones en Alleppey, estancias premium y de lujo, muelle de Muhamma, carrera Nehru Trophy, ruta Alappuzha–Kannankara. Houseboats económicos y de lujo para cruceros diarios."
      },

      5: {
        title: "Houseboat romántico para luna de miel en Kerala",
        description: "Una cabaña de luna de miel en un houseboat de Alappuzha incluye decoración romántica, habitaciones con aire acondicionado, baños privados y cubiertas panorámicas. Comidas a bordo, cenas a la luz de las velas y camas decoradas con flores. Una experiencia íntima y exclusiva para parejas navegando por los backwaters de Kerala."
      },

      6: {
        title: "Houseboat en Alleppey — Día y noche (1 habitación, cubierta superior privada)",
        description: "Homestays en backwaters de Alleppey, aldeas de Alappuzha, apartamentos en Pallathuruthi, villas en la ciudad de Alleppey, casas en los árboles, resorts en islas, propiedades frente al lago y la playa. Houseboats premium y de lujo de 1 a 22 habitaciones."
      },

      7: {
        title: "Houseboats en Alleppey (1 habitación, cubierta superior privada)",
        description: "Alleppey, Kumarakom, Kollam, Lago Ashtamudi, Kovalam, Varkala, Playa Cherai, Playa Marari, aldeas como Kainakari, Punnamada, Aryad. Houseboats lujosos de 1 a 22 habitaciones para cruceros día y noche."
      },

      8: {
        title: "Alleppey — Crucero de día en houseboat con cubierta superior",
        description: "Áreas de Kainakari, Punnamada, Aryad, apartamentos de Pallathuruthi, muelle de Muhamma — houseboat premium para recorridos de día completos."
      },

      9: {
        title: "Houseboats en Alleppey — Tarifas B2B para 1 habitación",
        description: "Disponibles en categorías deluxe, premium y lujo. Dos tipos de houseboats de 1 habitación: con cubierta superior y sin cubierta superior. Los de cubierta superior ofrecen mejores vistas del recorrido."
      },

      10: {
        title: "Houseboats compartidos en Alleppey — Precio para 2 personas",
        description: "Experiencia económica para explorar los backwaters de Kerala. Ideal para parejas o amigos. Crucero de 1 noche con alojamiento acogedor, comida tradicional de Kerala y paisajes tranquilos. Se recomienda reservar con anticipación."
      },

      11: {
        title: "Houseboats ultra premium en Alleppey",
        description: "Tipos: Deluxe, Premium, Lujo y Ultra Lujo. Houseboats de 1 a más de 22 habitaciones para parejas, familias y grupos grandes. Estancias de día y noche. Áreas populares: backwaters de Alleppey, Punnamada, Kainakari, Aryad y muelle de Muhamma."
      },

      12: {
        title: "Paquetes turísticos económicos en Kerala",
        description: "Munnar, Thekkady, vida silvestre de Periyar, Wayanad, Vagamon, Ponmudi, Idukki, Devikulam, Kuttikkanam, Vattavada, Kanthalloor, zonas montañosas, bosques de Kerala, caminatas con elefantes, rutas de senderismo."
      },

      13: {
        title: "Boating en Kerala",
        description: "Navega tranquilamente por los backwaters de Kerala: campos de arroz, canales rurales, botes tradicionales de madera, comida típica de Kerala. Perfecto para parejas, familias y viajeros solitarios. Desde solo ₹1,999 por persona."
      },

      14: {
        title: "Ofertas B2B — Paquetes de houseboats en Kerala",
        description: "Houseboats de 1 a 22 habitaciones en Alleppey, estancias premium/lujo, opciones económicas, muelle de Muhamma, rutas de la carrera Nehru Trophy, recorridos por Kannankara."
      },

      15: {
        title: "Petals Flowers",
        description: "Tu destino confiable para plantas ornamentales premium en Kerala. Especialistas en orquídeas exóticas, perfectas para decoración del hogar, regalos y jardinería. Plantas cuidadas para garantizar flores sanas y duraderas."
      },

      16: {
        title: "Orquídeas en venta — Plantas de orquídeas con flores",
        description: "Orquídeas tropicales en variedades como Phalaenopsis y Vanda. Colores vibrantes, patrones únicos, flores duraderas. Perfectas para decoración interior, regalos o jardines. Fácil cuidado. Desde ₹399."
      },

      17: {
        title: "Joyas oxidada de Kerala",
        description: "Joyas oxidadas de Kerala — acabado oscuro y antiguo logrado mediante oxidación de plata o latón. Diseños tradicionales y modernos. Combinan bien con saris y atuendos contemporáneos. Collares, aretes y sets disponibles."
      },

      18: {
        title: "Handloom de Kerala — Saris Kasavu",
        description: "Seda handloom de Kerala, saris Kasavu, materiales Kasavu para churidar, camisas handloom de Kerala. Icono tradicional blanco con borde dorado."
      },

      19: {
        title: "Artesanías de Kerala",
        description: "Artesanías tradicionales de Kerala — tallado en madera, productos de metal, tapetes de fibra de coco, artículos hechos con cáscara de coco como cuencos y juguetes, máscaras de Kathakali, Nettipattam, espejos metálicos de Aranmula."
      },

      20: {
        title: "Chips de Kerala — Chips de plátano",
        description: "Chips de plátano Nendran de Kerala, chips de yaca y otros snacks tradicionales."
      },

      21: {
        title: "Especias de Kerala",
        description: "Especias premium: cardamomo, pimienta negra, canela, clavo y nuez moscada — obtenidas directamente de granjas orgánicas en los Ghats Occidentales."
      },

      22: {
        title: "Pescado seco",
        description: "Camarones de agua dulce de alta calidad exportable del lago Ashtamudi, secados higiénicamente al sol sin sal. Tamaño mediano–grande, perfecto para masala, curry y chutney."
      },

      23: {
        title: "Bienes raíces en Kerala",
        description: "Casa independiente de 4 habitaciones (3200 sq.ft) en zona prime. Compra, venta y alquiler de villas, terrenos, casas y pisos en todo Kerala."
      },

      24: {
        title: "Boletos de lotería de Kerala — Bumper Lottery",
        description: "Lotería oficial del Estado de Kerala: Win Win, Sthree Sakthi, Fifty-Fifty, Karunya. Premios mayores de hasta ₹1 crore."
      },

      25: {
        title: "Decoración del hogar de Kerala",
        description: "Decoración del hogar y productos de fibra de coco de Kerala — artículos ecológicos hechos con materiales naturales."
      },

      26: {
        title: "Transporte en Kerala",
        description: "Guruvayoor, Cataratas Athirapilly, Vazhachal, Basílica Arthunkal, Fuerte Cochin, Neeleswaram, Thenmala, Sree Padmanabhaswamy, Chottanikkara, Sabarimala, Kuttalam, Ooty, Kodaikanal, Goa, Karnataka, Tamil Nadu, Chennai, Madurai, Rameswaram, Coimbatore, Valparai, rutas de backwater como Kainakari, Punnamada, Aryad, Pallathuruthi, Muhamma."
      },

      27: {
        title: "Productos de fibra de coco de Kerala",
        description: "Productos ecológicos y biodegradables de fibra de coco — alfombras, cuerdas, cepillos, bolsos y artículos decorativos. Famosos en mercados locales e internacionales."
      },

      28: {
        title: "Pedido de comida online",
        description: "Comida online en Kerala — desde gastronomía tradicional local hasta platos internacionales. Disponible en Cochin, Trivandrum, Kozhikode y otras ciudades."
      }
    }
    , 
    houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: 'Hoteles de casas flotantes en Alleppey Alappuzha Kerala',
      houseboatsHotelsInMunnar: 'Hoteles de casas flotantes en Munnar',
      houseboatsHotelsInCochin: 'Hoteles de casas flotantes en Cochin',
      houseboatsHotelsInKumarakomLake: 'Hoteles de casas flotantes en el lago Kumarakom',
      houseboatsHotelsInKottayam: 'Hoteles de casas flotantes en Kottayam',
      houseboatsHotelsInAlleppey: 'Hoteles de casas flotantes en Alleppey',
      houseboatsHotelsInChottanikara: 'Hoteles de casas flotantes en Chottanikara',
      houseboatsHotelsInThiruvananthapuram: 'Hoteles de casas flotantes en Thiruvananthapuram',
      houseboatsHotelsInKovalamBeach: 'Hoteles de casas flotantes en la playa de Kovalam',
      houseboatsHotelsInThekkady: 'Hoteles de casas flotantes en Thekkady',
      houseboatsHotelsInWayanad: 'Hoteles de casas flotantes en Wayanad',
      houseboatsHotelsInAlappuzha: 'Hoteles de casas flotantes en Alappuzha',
      houseboatsHotelsInGuruvayur: 'Hoteles de casas flotantes en Guruvayur',
      houseboatsHotelsInVagamon: 'Hoteles de casas flotantes en Vagamon',
      houseboatsHotelsInAthirapillyWaterFalls: 'Hoteles de casas flotantes en las cataratas de Athirapilly',
      houseboatsHotelsInMarariBeach: 'Hoteles de casas flotantes en la playa de Marari',
      houseboatsHotelsInPoovarBeach: 'Hoteles de casas flotantes en la playa de Poovar',
      houseboatsHotelsInVarkalaBeach: 'Hoteles de casas flotantes en la playa de Varkala',
      houseboatsHotelsInAshtamudiLake: 'Hoteles de casas flotantes en el lago Ashtamudi',
      houseboatsHotelsInKanyakumariBeach: 'Hoteles de casas flotantes en la playa de Kanyakumari',
      houseboatsHotelsInAlleppeyBeach: 'Hoteles de casas flotantes en la playa de Alleppey',
      houseboatsHotelsInAlappuzhaLake: 'Hoteles de casas flotantes en el lago Alappuzha',
      houseboatsHotelsInIndia: 'Hoteles de casas flotantes en la India',
      houseboatsHotelsInKerala: 'Hoteles de casas flotantes en Kerala',
      houseBoatHotelsInAlleppey: 'Hoteles de casas flotantes en Alleppey',
      boatHouseHotelsInIndia: 'Hoteles de casas flotantes en la India',
      boatHouseHotelsInKerala: 'Hoteles de casas flotantes en Kerala',
      sharingHouseboatsHotelsInAlleppey: 'Hoteles de casas flotantes compartidas en Alleppey',
      sharingBoatHouseHotelsInKerala: 'Hoteles de casas flotantes compartidas en Kerala',
      dayTripHouseboatsHotelsInAlleppey: 'Hoteles de casas flotantes para excursiones de un día en Alleppey',
      dayCruiseHouseboatsHotelsInAlleppey: 'Hoteles de casas flotantes para cruceros de un día en Alleppey',
      fiveStarHouseboatsHotelsInAlleppey: 'Hoteles de casas flotantes de 5 estrellas en Alleppey',
      fourStarHouseboatsHotelsInAlleppey: 'Hoteles de casas flotantes de 4 estrellas en Alleppey',
      threeStarHouseboatsHotelsInAlleppey: 'Hoteles de casas flotantes de 3 estrellas en Alleppey',
      twoStarHouseboatsHotelsInAlleppey: 'Hoteles de casas flotantes de 2 estrellas en Alleppey',
      budgetHouseboatsHotelsInAlleppey: 'Hoteles de casas flotantes económicos en Alleppey',
      standardBoatHouseHotelsInAlleppey: 'Hoteles de casas flotantes estándar en Alleppey'
    }
    ,
    testimonials:{

  "sectionTitle": "Lo que dicen nuestros viajeros",
  "sectionSubtitle": "Experiencias reales de miles de clientes satisfechos",
  "quoteOpen": "\"",
  "indicatorAria": "Mostrar testimonio {{index}}",

  "person1": {
    "name": "Sarah Johnson",
    "location": "Nueva York, EE.UU.",
    "text": "¡Una experiencia absolutamente increíble! El equipo de Tourism Paradise organizó nuestra luna de miel perfectamente. Cuidaron cada detalle y tuvimos el viaje más romántico a los remansos de Kerala.",
    "trip": "Luna de miel en los remansos de Kerala"
  },

  "person2": {
    "name": "Michael Chen",
    "location": "Toronto, Canadá",
    "text": "Servicio profesional y una atención al detalle increíble. Nuestro viaje familiar a Kerala fue impecable gracias a su planificación experta y conocimiento local.",
    "trip": "Aventura familiar en Kerala"
  },

  "person3": {
    "name": "Emily Rodríguez",
    "location": "Barcelona, España",
    "text": "Viajo frecuentemente por trabajo, pero este viaje organizado por Tourism Paradise fue excepcional. El itinerario personalizado y el apoyo durante mi retiro ayurvédico hicieron todo sin estrés.",
    "trip": "Retiro personal en Kerala"
  }
    },
    popularDestinationsList: {
       title: "Explora más destinos en la India",
      subtitle: "Descubre cosas que hacer en ciudades de diferentes estados",
      thingsToDo: "Cosas para hacer",
      comingSoonTitle: "¡Próximamente!",
      comingSoonDescription: "Estamos agregando destinos increíbles en {{continent}}. ¡Vuelve pronto!",
      northIndia: "Destinos del Norte de la India",
      southIndia: "Destinos del Sur de la India",
      eastIndia: "Destinos del Este y Noreste de la India",
      centralIndia: "Destinos del Centro de la India",

      delhi: {
        name: "Delhi",
        country: "Delhi",
        history:
          "La capital de la India, Delhi, tiene una rica historia de más de 2,000 años. La ciudad está llena de mezquitas, fuertes y monumentos construidos por los emperadores mogoles. Desde el majestuoso Fuerte Rojo hasta el icónico India Gate, Delhi combina la herencia antigua con la infraestructura moderna, lo que la convierte en un destino imperdible."
      },

      jaipur: {
        name: "Jaipur",
        country: "Rajastán",
        history:
          "Conocida como la Ciudad Rosa, Jaipur es la capital de Rajastán y parte del Triángulo Dorado de la India. Fundada en 1727, la ciudad es famosa por sus palacios reales, la fortaleza de Amber, el Hawa Mahal y sus bulliciosos bazares. Jaipur representa la grandeza de la arquitectura y cultura Rajput."
      },

      agra: {
        name: "Agra",
        country: "Uttar Pradesh",
        history:
          "Hogar del magnífico Taj Mahal, una de las siete maravillas del mundo, Agra fue la capital del Imperio Mogol entre 1556 y 1658. La ciudad incluye arquitectura mogola excepcional como el Fuerte de Agra y Fatehpur Sikri, que muestran el esplendor artístico del período."
      },

      varanasi: {
        name: "Varanasi",
        country: "Uttar Pradesh",
        history:
          "Una de las ciudades continuamente habitadas más antiguas del mundo, Varanasi es un importante centro religioso para los hindúes. Ubicada a orillas del sagrado río Ganges, la ciudad es conocida por sus ghats, templos antiguos y profunda espiritualidad."
      },

      amritsar: {
        name: "Amritsar",
        country: "Punjab",
        history:
          "Fundada por el Guru Ram Das en 1577, Amritsar es hogar del Templo Dorado, el santuario más sagrado del sijismo. La ciudad también fue escenario de la trágica masacre de Jallianwala Bagh en 1919. Hoy simboliza la herencia, espiritualidad y resiliencia sij."
      },

      manali: {
        name: "Manali",
        country: "Himachal Pradesh",
        history:
          "Ubicada en el Himalaya a unos 2,050 metros, Manali es una estación de montaña popular conocida por su belleza natural, deportes de aventura y el antiguo templo de Hidimba. Es la puerta de entrada al Paso Rohtang y al Valle Solang."
      },

      leh: {
        name: "Leh",
        country: "Ladakh",
        history:
          "La capital de Ladakh, Leh, se encuentra a unos 3,500 metros y fue un punto importante en la antigua Ruta de la Seda. Famosa por su paisaje árido, monasterios budistas y lagos de gran altitud como Pangong Tso."
      },

      rishikesh: {
        name: "Rishikesh",
        country: "Uttarakhand",
        history:
          "Conocida como la capital mundial del yoga, Rishikesh es una ciudad espiritual a orillas del Ganges. Es famosa por sus ashrams, centros de yoga y el icónico puente Lakshman Jhula. La visita de los Beatles en 1968 la hizo famosa internacionalmente."
      },

      udaipur: {
        name: "Udaipur",
        country: "Rajastán",
        history:
          "Conocida como la Ciudad de los Lagos y la Venecia del Este, Udaipur fue fundada en 1559 por Maharana Udai Singh II. Sus palacios —como el City Palace y el Lake Palace— y sus lagos escénicos la convierten en uno de los destinos más románticos de la India."
      },

      shimla: {
        name: "Shimla",
        country: "Himachal Pradesh",
        history:
          "Antigua capital de verano de la India británica, Shimla conserva su encanto colonial con arquitectura victoriana como el Viceregal Lodge y la Christ Church. También ofrece vistas panorámicas del Himalaya y la famosa línea ferroviaria Kalka-Shimla (UNESCO)."
      },

      mussoorie: {
        name: "Mussoorie",
        country: "Uttarakhand",
        history:
          "Llamada la Reina de las Colinas, Mussoorie fue establecida por los británicos en 1826. A 2,005 metros de altitud, ofrece vistas del valle Doon y de las cordilleras del Himalaya. Gun Hill, Kempty Falls y Camel’s Back Road son atracciones populares."
      },

      srinagar: {
        name: "Srinagar",
        country: "Jammu y Cachemira",
        history:
          "Capital de verano de Jammu y Cachemira, Srinagar es famosa por el lago Dal, los jardines mogoles como Shalimar Bagh y Nishat Bagh, y sus tradicionales houseboats. Conocida como 'el paraíso en la tierra'."
      },

      jaisalmer: {
        name: "Jaisalmer",
        country: "Rajastán",
        history:
          "La Ciudad Dorada emerge del desierto de Thar con su fortaleza de arenisca amarilla y havelis exquisitamente talladas. Fundada en 1156, Jaisalmer fue un importante centro comercial en las rutas de caravanas."
      },

      nainital: {
        name: "Nainital",
        country: "Uttarakhand",
        history:
          "Desarrollada en 1841 alrededor del hermoso lago Naini, Nainital está rodeada de siete colinas. El ambiente sereno y lugares como el templo Naina Devi y Snow View Point la convierten en un destino popular."
      },

      vrindavan: {
        name: "Vrindavan",
        country: "Uttar Pradesh",
        history:
          "Uno de los lugares más sagrados del hinduismo, Vrindavan es considerado el lugar donde Krishna pasó su infancia. Con más de 5,000 templos —incluyendo Banke Bihari e ISKCON— es un importante destino de peregrinación."
      },

      haridwar: {
        name: "Haridwar",
        country: "Uttarakhand",
        history:
          "Una de las siete ciudades más sagradas del hinduismo, Haridwar marca la entrada del río Ganges a las llanuras. Sede del Kumbh Mela cada 12 años. La ceremonia de Ganga Aarti en Har Ki Pauri es una experiencia espiritual inolvidable."
      },

      mumbai: {
        name: "Mumbai",
        country: "Maharashtra",
        history:
          "La capital financiera de la India y la ciudad de los sueños. Mumbai fue originalmente un conjunto de siete islas. Es sede de Bollywood, el Gateway of India, Marine Drive y una mezcla de arquitectura colonial y rascacielos modernos."
      },

      bengaluru: {
        name: "Bengaluru",
        country: "Karnataka",
        history:
          "Conocida como el Silicon Valley de la India, Bengaluru fue fundada en 1537. La ciudad combina sitios históricos como Bangalore Palace con jardines como Lalbagh y Cubbon Park y su floreciente industria tecnológica."
      },

      goa: {
        name: "Goa",
        country: "Goa",
        history:
          "Antigua colonia portuguesa hasta 1961, Goa es famosa por sus playas, vida nocturna y arquitectura colonial. La Basílica del Buen Jesús, Sé Catedral y playas como Baga y Palolem atraen a viajeros de todo el mundo."
      },

      kerala: {
        name: "Kerala",
        country: "Kerala",
        history:
          "Conocido como 'El propio país de Dios', Kerala es famosa por sus backwaters, tratamientos ayurvédicos y paisajes exuberantes. Su cultura incluye Kathakali, regatas de botes serpiente y una rica tradición gastronómica."
      },
        hyderabad: {
        name: "Hyderabad",
        country: "Telangana",
        history:
          "Fundada en 1591 por Muhammad Quli Qutb Shah, Hyderabad es conocida por su rica historia, su biryani y el comercio de perlas. El icónico Charminar, la fortaleza de Golconda y las tumbas Qutb Shahi representan el legado nizami. Hoy es un importante centro de TI que equilibra tradición y modernidad."
      },

      chennai: {
        name: "Chennai",
        country: "Tamil Nadu",
        history:
          "Antiguamente conocida como Madrás, Chennai es la capital de Tamil Nadu y la puerta de entrada a la cultura del sur de la India. Fundada por los británicos en 1639, alberga Marina Beach, el templo Kapaleeshwarar, Fort St. George y tiene una tradición rica en música carnática y danza bharatanatyam."
      },

      kochi: {
        name: "Cochín",
        country: "Kerala",
        history:
          "Conocida como la Reina del Mar Arábigo, Kochi ha sido un importante centro de comercio de especias desde la antigüedad. Lugares como Fort Kochi, las redes de pesca chinas, el Palacio Mattancherry y las iglesias coloniales reflejan influencias portuguesas, holandesas y británicas."
      },

      mysuru: {
        name: "Mysuru",
        country: "Karnataka",
        history:
          "La capital cultural de Karnataka, Mysuru, fue la sede de la dinastía Wadiyar. El Palacio de Mysore iluminado durante el festival de Dasara es un espectáculo impresionante. La ciudad es famosa por sus saris de seda, productos de sándalo y su legado histórico."
      },

      madurai: {
        name: "Madurai",
        country: "Tamil Nadu",
        history:
          "Una de las ciudades más antiguas de la India, Madurai data del siglo III a. C. El Templo Meenakshi Amman, con sus enormes gopurams cubiertos de miles de esculturas coloridas, es una maravilla arquitectónica. Fue un importante centro cultural durante la época Sangam."
      },

      alleppey: {
        name: "Alleppey",
        country: "Kerala",
        history:
          "Conocida como la Venecia del Este, Alleppey (Alappuzha) es famosa por sus backwaters, canales y lagunas. Los paseos en houseboat ofrecen una experiencia única de la vida rural de Kerala. La carrera de botes Nehru Trophy es un evento espectacular."
      },

      ooty: {
        name: "Ooty",
        country: "Tamil Nadu",
        history:
          "Llamada la Reina de las Colinas, Ooty (Udhagamandalam) fue establecida por los británicos como un refugio de verano. Situada en los Nilgiris a 2,240 metros, cuenta con arquitectura colonial, el ferrocarril de montaña Nilgiri (UNESCO) y hermosos jardines y plantaciones de té."
      },

      coorg: {
        name: "Coorg",
        country: "Karnataka",
        history:
          "Conocida como la Escocia de la India, Coorg (Kodagu) es famosa por sus plantaciones de café, colinas cubiertas de niebla y la cultura Kodava. Tiene una fuerte tradición marcial y atractivos como Abbey Falls y Raja’s Seat."
      },

      hampi: {
        name: "Hampi",
        country: "Karnataka",
        history:
          "Patrimonio Mundial de la UNESCO, Hampi fue la capital del Imperio Vijayanagara (1336–1565). Sus ruinas, esparcidas en más de 4,100 hectáreas, incluyen templos, palacios y mercados, rodeados de paisajes rocosos surrealistas."
      },

      pondicherry: {
        name: "Pondicherry",
        country: "Puducherry",
        history:
          "Antigua colonia francesa hasta 1954, Pondicherry destaca por su arquitectura, gastronomía y cultura con un fuerte toque galo. El Barrio Francés, el Ashram de Sri Aurobindo y Auroville le dan un encanto único que mezcla Oriente y Occidente."
      },
        visakhapatnam: {
        name: "Visakhapatnam",
        country: "Andhra Pradesh",
        history:
          "Conocida como la Ciudad del Destino y la Joya de la Costa Este, Visakhapatnam (Vizag) es una importante ciudad portuaria con playas, colinas y valles. El antiguo templo de Simhachalam, las cuevas de Borra y el museo-submarino INS Kurusura destacan su diversidad cultural y natural."
      },

      tirupati: {
        name: "Tirupati",
        country: "Andhra Pradesh",
        history:
          "Hogar del sagrado Templo de Tirumala Venkateswara, Tirupati es uno de los sitios de peregrinación más visitados del mundo, recibiendo millones de devotos cada año. El templo tiene orígenes antiguos y una arquitectura influenciada por diferentes dinastías."
      },

      kolkata: {
        name: "Kolkata",
        country: "Bengala Occidental",
        history:
          "Conocida como la Ciudad de la Alegría y antigua capital de la India británica, Kolkata es un centro cultural e intelectual. Fundada en 1690, cuenta con arquitectura colonial como el Victoria Memorial y el Puente Howrah. Es también el corazón del Renacimiento Bengalí y famosa por sus celebraciones del Durga Puja."
      },

      gangtok: {
        name: "Gangtok",
        country: "Sikkim",
        history:
          "Capital de Sikkim situada a 1,650 metros, Gangtok ofrece impresionantes vistas del Kanchenjunga. Combina cultura budista tibetana—con monasterios como Rumtek y Enchey—con una ciudad moderna y vibrante. Es la puerta hacia los valles del norte de Sikkim."
      },

      shillong: {
        name: "Shillong",
        country: "Meghalaya",
        history:
          "Llamada la Escocia del Este, Shillong fue capital de Assam hasta 1972 y ahora es la capital de Meghalaya. Rodeada de colinas de pino y famosa por sus cascadas como Elephant Falls, la ciudad también es conocida como la Capital del Rock de la India."
      },

      darjeeling: {
        name: "Darjeeling",
        country: "Bengala Occidental",
        history:
          "Conocida como la Reina de las Colinas, Darjeeling es famosa por sus plantaciones de té y el ferrocarril del Himalaya Darjeeling (Patrimonio UNESCO). A 2,042 metros de altura, ofrece vistas espectaculares del Kanchenjunga desde Tiger Hill y cuenta con arquitectura colonial y monasterios budistas."
      },
        puri: {
        name: "Puri",
        country: "Odisha",
        history:
          "Uno de los cuatro sitios sagrados del Char Dham, Puri es hogar del Templo de Jagannath del siglo XII. Su famoso festival Rath Yatra atrae a millones de devotos. La playa de Puri y el cercano Templo del Sol de Konark (UNESCO) lo convierten en un importante destino espiritual y turístico."
      },

      guwahati: {
        name: "Guwahati",
        country: "Assam",
        history:
          "La puerta de entrada al noreste de la India, Guwahati es la ciudad más grande de Assam y se encuentra a orillas del río Brahmaputra. El antiguo Templo Kamakhya, situado sobre la colina Nilachal, es un importante centro de peregrinación. La ciudad es un centro educativo y comercial en rápida expansión."
      },

      kohima: {
        name: "Kohima",
        country: "Nagaland",
        history:
          "Situada a 1,444 metros, Kohima es la capital de Nagaland y famosa por la Batalla de Kohima de 1944, un evento crucial de la Segunda Guerra Mundial. El Cementerio de Guerra de Kohima conmemora a los soldados caídos. El Festival Hornbill, celebrado en diciembre, muestra la cultura tribal naga."
      },

      itanagar: {
        name: "Itanagar",
        country: "Arunachal Pradesh",
        history:
          "La capital de Arunachal Pradesh, Itanagar, cuyo nombre significa 'fortaleza de ladrillos', alberga las ruinas del Ita Fort de los siglos XIV–XV. También cuenta con el monasterio Buddha Vihar, el Polo Park y sirve como punto de acceso a los valles y aldeas tribales del estado."
      },

      bhubaneswar: {
        name: "Bhubaneswar",
        country: "Odisha",
        history:
          "Conocida como la Ciudad de los Templos, Bhubaneswar tiene más de 500 templos que datan del siglo VI al XIII, mostrando la arquitectura Kalinga. Destacan el Templo Lingaraj, el Templo Mukteshwar y el Templo Rajarani. La ciudad equilibra la herencia antigua con la planificación urbana moderna."
      },

      portblair: {
        name: "Port Blair",
        country: "Islas Andamán y Nicobar",
        history:
          "La capital de las Islas Andamán y Nicobar, Port Blair es la puerta de entrada a este paraíso tropical. La histórica Prisión Celular, usada por los británicos para exiliar prisioneros políticos, ahora es un monumento nacional. Las islas ofrecen playas prístinas, arrecifes de coral y una rica biodiversidad marina."
      },

      pelling: {
        name: "Pelling",
        country: "Sikkim",
        history:
          "Ciudad pintoresca ubicada a 2,150 metros en el oeste de Sikkim, Pelling ofrece vistas impresionantes del Kanchenjunga. Alberga el antiguo Monasterio Pemayangtse y las ruinas de Rabdentse, la antigua capital de Sikkim. El skywalk y la estatua de Chenrezig son atracciones modernas destacadas."
      },

      tawang: {
        name: "Tawang",
        country: "Arunachal Pradesh",
        history:
          "Situada a 3,048 metros, Tawang alberga el monasterio más grande de la India, fundado en 1680 y hogar de más de 450 monjes. Es el lugar de nacimiento del sexto Dalái Lama. El paso Sela, el lago Madhuri y el memorial de la guerra de 1962 son importantes sitios turísticos."
      },

      cherrapunji: {
        name: "Cherrapunji",
        country: "Meghalaya",
        history:
          "Conocida antiguamente como el lugar más lluvioso de la Tierra, Cherrapunji (Sohra) recibe intensas lluvias monzónicas que crean espectaculares cascadas como Nohkalikai y Seven Sisters. Los famosos puentes vivientes de raíces, creados por la tribu Khasi, están reconocidos por la UNESCO."
      },
        imphal: {
        name: "Imphal",
        country: "Manipur",
        history:
          "La capital de Manipur, situada a 790 metros, desempeñó un papel importante durante la Segunda Guerra Mundial. El Fuerte Kangla fue la sede de los gobernantes de Manipur durante siglos. El lago Loktak, el mayor lago de agua dulce del noreste de la India, es famoso por sus islas flotantes llamadas phumdis. El Parque Nacional Keibul Lamjao es hogar del raro ciervo sangai."
      },

      aizawl: {
        name: "Aizawl",
        country: "Mizoram",
        history:
          "Capital de Mizoram, Aizawl está situada a 1,132 metros y ofrece hermosas vistas desde sus colinas. La ciudad destaca por la cultura tribal mizo, casas de bambú, textiles artesanales y vibrantes festivales. El Templo de Solomon, el Museo Estatal de Mizoram y las colinas de Durtlang son atracciones importantes."
      },

      agartala: {
        name: "Agartala",
        country: "Tripura",
        history:
          "Capital de Tripura, Agartala alberga el magnífico Palacio Ujjayanta, construido en 1901 y ahora convertido en museo. El palacio de agua Neermahal, situado en el lago Rudrasagar, y el templo Tripura Sundari son otros símbolos de su rica herencia cultural."
      },

      khajuraho: {
        name: "Khajuraho",
        country: "Madhya Pradesh",
        history:
          "Patrimonio Mundial de la UNESCO, Khajuraho es famoso por sus templos hindúes y jainistas medievales construidos entre los años 950 y 1050 por la dinastía Chandela. Los templos son conocidos por sus esculturas detalladas que representan diversas expresiones de la vida, incluyendo sus famosas figuras eróticas."
      },

      bhopal: {
        name: "Bhopal",
        country: "Madhya Pradesh",
        history:
          "Conocida como la Ciudad de los Lagos y la capital de Madhya Pradesh, Bhopal combina arquitectura antigua y moderna. Destacan la mezquita Taj-ul-Masajid, una de las más grandes de Asia, y el cercano Stupa de Sanchi (UNESCO). La ciudad también recuerda la trágica fuga de gas de 1984."
      },

      gwalior: {
        name: "Gwalior",
        country: "Madhya Pradesh",
        history:
          "Conocida como 'la perla de los fuertes indios', Gwalior es famosa por su imponente fuerte situado en una colina, que alberga palacios, templos tallados y el famoso Templo Teli Ka Mandir. Es también un importante centro para la música clásica hindustani."
      },

      indore: {
        name: "Indore",
        country: "Madhya Pradesh",
        history:
          "La capital comercial de Madhya Pradesh y una de las ciudades más limpias de la India, Indore fue establecida por la dinastía Holkar en 1715. Destacan el Palacio Rajwada, el Palacio Lal Bagh y su vibrante cultura gastronómica callejera."
      },

      orchha: {
        name: "Orchha",
        country: "Madhya Pradesh",
        history:
          "Una joya oculta fundada en 1531, Orchha fue la capital de los jefes rajputs Bundela. Está situada en una isla del río Betwa y alberga impresionantes palacios y templos como Jahangir Mahal, Raj Mahal y el Templo Ram Raja."
      },

      ujjain: {
        name: "Ujjain",
        country: "Madhya Pradesh",
        history:
          "Una de las siete ciudades sagradas (Sapta Puri) del hinduismo, Ujjain alberga el famoso templo Mahakaleshwar, uno de los doce jyotirlingas. Es sede del Kumbh Mela cada 12 años y fue un destacado centro de astronomía y matemáticas en la India antigua."
      },

      ranchi: {
        name: "Ranchi",
        country: "Jharkhand",
        history:
          "Capital de Jharkhand, Ranchi fue un refugio veraniego durante el periodo británico debido a su clima agradable. Conocida como la 'Ciudad de las Cascadas', cuenta con Hundru, Jonha y Dassam Falls. Es también la ciudad natal del célebre jugador de críquet M. S. Dhoni."
      },

      daman: {
        name: "Daman",
        country: "Daman y Diu",
        history:
          "Antigua colonia portuguesa hasta 1961, Daman conserva su encanto colonial a través de sus fuertes, iglesias y playas. El Fuerte de Moti Daman y el Fuerte de San Jerónimo son algunos de sus principales atractivos."
      },

      silvassa: {
        name: "Silvassa",
        country: "Dadra y Nagar Haveli",
        history:
          "Capital de Dadra y Nagar Haveli, Silvassa está rodeada de bosques y colinas. Famosa por el arte Warli, lagos y parques naturales. Se ha desarrollado como un centro industrial, manteniendo al mismo tiempo sus tradiciones tribales."
      },

      nagpur: {
        name: "Nagpur",
        country: "Maharashtra",
        history:
          "Conocida como la Ciudad Naranja y capital de invierno de Maharashtra, Nagpur se ubica en el centro geográfico de la India. La ciudad alberga Deekshabhoomi, importante sitio budista donde B. R. Ambedkar adoptó el budismo. También es famosa por su cercanía a reservas de tigres."
      },

      raipur: {
        name: "Raipur",
        country: "Chhattisgarh",
        history:
          "Capital de Chhattisgarh, Raipur tiene raíces que datan del siglo IX. Es la puerta de entrada a templos antiguos, sitios budistas y aldeas tribales en Sirpur. El Museo Mahant Ghasi Das conserva importantes artefactos culturales."
      },

      jabalpur: {
        name: "Jabalpur",
        country: "Madhya Pradesh",
        history:
          "Situada a orillas del río Narmada, Jabalpur es conocida por las Rocas de Mármol en Bhedaghat, donde el río fluye entre acantilados de mármol de 100 pies de altura. Las cataratas Dhuandhar y antiguos fuertes Gondi enriquecen su atractivo histórico y natural."
      },

      pachmarhi: {
        name: "Pachmarhi",
        country: "Madhya Pradesh",
        history:
          "La única estación de montaña de Madhya Pradesh, Pachmarhi está ubicada a 1,067 metros en la cordillera Satpura. Descubierta en 1857, cuenta con edificios coloniales, las Cuevas de los Pandava, bellas cascadas y densos bosques."
      },

      amarkantak: {
        name: "Amarkantak",
        country: "Madhya Pradesh",
        history:
          "Lugar sagrado ubicado a 1,065 metros, Amarkantak es la fuente de los ríos Narmada y Son. El recinto del Narmada Kund y los jardines Mai Ki Bagiya atraen tanto a peregrinos como a amantes de la naturaleza."
      },
        bhimbetka: {
        name: "Bhimbetka",
        country: "Madhya Pradesh",
        history:
          "Sitio del Patrimonio Mundial de la UNESCO, Bhimbetka alberga más de 500 refugios rocosos con pinturas prehistóricas que datan de hace hasta 30,000 años. Las ilustraciones muestran escenas de caza, danza, rituales y vida cotidiana, ofreciendo una visión invaluable de la evolución humana desde la Edad de Piedra."
      },
      chitrakoot: {
        name: "Chitrakoot",
        country: "Madhya Pradesh / Uttar Pradesh",
        history:
          "Ciudad de gran importancia religiosa, Chitrakoot es considerada el lugar donde Rama, Sita y Lakshmana pasaron 11 años de su exilio según el Ramayana. Destacan el Templo Kamadgiri y el Ramghat a orillas del río Mandakini."
      },
    },
    destinationFeed: {
      loadingMore: 'Cargando más ofertas...',
      inquiryTitle: '¿Tiene preguntas? ¡Póngase en contacto!',
      inquirySubtitle: 'Envíenos su consulta y nuestro equipo se pondrá en contacto con usted en 24 horas',
      yourName: 'Su nombre *',
      yourEmail: 'Su correo electrónico *',
      phoneNumber: 'Número de teléfono',
      subject: 'Asunto',
      yourMessage: 'Su mensaje *',
      sendInquiry: 'Enviar consulta',
      "bookViaWhatsapp": "Reservar por WhatsApp",
      scrollToInquiryAria: 'Desplazarse al formulario de consulta'
    },
    popularDestinations: {
    title: 'Explora más destinos en India',
    subtitle: 'Encuentra cosas que hacer en ciudades de diferentes estados',
    thingsToDo: 'cosas que hacer',
    comingSoonTitle: '¡Próximamente!',
    comingSoonDescription: "Estamos añadiendo destinos increíbles en {{continent}}. ¡Vuelve pronto!",
    northIndia: 'Destinos del Norte de India',
    southIndia: 'Destinos del Sur de India',
    eastIndia: 'Destinos del Este y Noreste de India',
    centralIndia: 'Destinos del Centro de India',
    delhi: {
      name: 'Delhi',
      country: 'Delhi',
      history: 'Delhi, la capital de la India, tiene una rica historia que abarca más de 2,000 años. La ciudad está salpicada de mezquitas, fuertes y monumentos fascinantes dejados por los gobernantes mogoles. Desde el majestuoso Fuerte Rojo hasta la icónica Puerta de la India, Delhi combina el patrimonio antiguo con la infraestructura moderna, lo que lo convierte en un destino de visita obligada.'
    },
    jaipur: {
      name: 'Jaipur',
      country: 'Rajasthan',
      history: "Conocida como la Ciudad Rosa, Jaipur es la capital de Rajasthan y parte del Triángulo de Oro de la India. Fundada en 1727, la ciudad es famosa por sus palacios reales, magníficos fuertes como el Fuerte Amber, Hawa Mahal y vibrantes bazares. Jaipur muestra la grandeza de la arquitectura y cultura Rajput."
    },
    agra: {
      name: 'Agra',
      country: 'Uttar Pradesh',
      history: "Hogar del magnífico Taj Mahal, una de las Siete Maravillas del Mundo, Agra fue la capital del Imperio Mogol de 1556 a 1658. La ciudad presenta una impresionante arquitectura mogol, incluyendo el Fuerte de Agra y Fatehpur Sikri, mostrando el cenit del logro artístico mogol."
    },
    varanasi: {
      name: 'Varanasi',
      country: 'Uttar Pradesh',
      history: 'Una de las ciudades habitadas continuamente más antiguas del mundo, Varanasi es un importante centro religioso para los hindúes. Ubicada a orillas del sagrado río Ganges, la ciudad es conocida por sus ghats, templos antiguos y significado espiritual. Mark Twain dijo una vez: "Benares es más antigua que la historia, más antigua que la tradición, incluso más antigua que la leyenda."'
    },
    amritsar: {
      name: 'Amritsar',
      country: 'Punjab',
      history: "Fundada en 1577 por Guru Ram Das, Amritsar es el hogar del Templo Dorado, el santuario más sagrado del sijismo. La ciudad fue testigo de la trágica masacre de Jallianwala Bagh en 1919 y se erige como un símbolo del patrimonio, la espiritualidad y la resiliencia sij. La ceremonia de la frontera de Wagah es una atracción importante."
    },
    manali: {
      name: 'Manali',
      country: 'Himachal Pradesh',
      history: "Ubicada en el Himalaya a una altitud de 2.050 metros, Manali es una popular estación de montaña conocida por su belleza escénica, deportes de aventura y el antiguo Templo Hadimba. El valle ofrece vistas impresionantes de picos nevados, huertos de manzanas y sirve como puerta de entrada al Paso Rohtang y al Valle Solang."
    },
    leh: {
      name: 'Leh',
      country: 'Ladakh',
      history: "La capital de Ladakh, Leh, se encuentra a 3.500 metros y fue una parada importante en la antigua Ruta de la Seda. Conocida por sus paisajes áridos y dramáticos, monasterios budistas y lagos de gran altitud como Pangong Tso, Leh ofrece una mezcla única de cultura tibetana y un impresionante paisaje himalayo."
    },
    rishikesh: {
      name: 'Rishikesh',
      country: 'Uttarakhand',
      history: "Conocida como la Capital Mundial del Yoga, Rishikesh es una ciudad espiritual a orillas del Ganges. Famosa por sus ashrams, centros de yoga y el icónico puente Laxman Jhula, la ciudad atrae tanto a buscadores espirituales como a entusiastas de la aventura. La visita de Los Beatles en 1968 la hizo famosa internacionalmente."
    },
    udaipur: {
      name: 'Udaipur',
      country: 'Rajasthan',
      history: "Llamada la Ciudad de los Lagos y la Venecia del Este, Udaipur fue fundada en 1559 por Maharana Udai Singh II. La ciudad presenta impresionantes palacios como el Palacio de la Ciudad y el Palacio del Lago, hermosos lagos como Pichola y Fateh Sagar, y ejemplifica la arquitectura romántica de Rajasthan."
    },
    shimla: {
      name: 'Shimla',
      country: 'Himachal Pradesh',
      history: "La antigua capital de verano de la India británica, Shimla conserva el encanto colonial con arquitectura victoriana, incluyendo el Viceregal Lodge y la Christ Church. Ubicada en las estribaciones del Himalaya, ofrece vistas panorámicas de la montaña, la famosa Mall Road y el Ferrocarril Kalka-Shimla, catalogado por la UNESCO."
    },
    mussoorie: {
      name: 'Mussoorie',
      country: 'Uttarakhand',
      history: "Conocida como la Reina de las Colinas, Mussoorie es una encantadora estación de montaña establecida por los británicos en 1826. Situada a 2.005 metros, ofrece vistas del Valle Doon y las cordilleras del Himalaya. Gun Hill, las Cataratas Kempty y Camel's Back Road son atracciones populares en este retiro de la era colonial."
    },
    srinagar: {
      name: 'Srinagar',
      country: 'Jammu & Kashmir',
      history: 'La capital de verano de Jammu y Cachemira, Srinagar es famosa por su lago Dal, jardines mogoles como Shalimar Bagh y Nishat Bagh, y casas flotantes tradicionales. La belleza de la ciudad ha inspirado a poetas y viajeros durante siglos, ganándose el título de "Paraíso en la Tierra."'
    },
    jaisalmer: {
      name: 'Jaisalmer',
      country: 'Rajasthan',
      history: "La Ciudad Dorada se eleva desde el desierto de Thar con su fuerte de arenisca amarilla y havelis. Fundada en 1156, Jaisalmer fue un importante centro comercial en las rutas de las caravanas de camellos. El Fuerte Jaisalmer, las Dunas de Arena Sam y los havelis intrincadamente tallados muestran la arquitectura Rajput en su máxima expresión."
    },
    nainital: {
      name: 'Nainital',
      country: 'Uttarakhand',
      history: "Construido alrededor del hermoso lago Naini a 2.084 metros, Nainital fue desarrollado como una estación de montaña por los británicos en 1841. El lago en forma de pera, rodeado por siete colinas, crea una atmósfera serena. El Templo Naina Devi, Snow View Point y los paseos en bote por el lago son las principales atracciones."
    },
    vrindavan: {
      name: 'Vrindavan',
      country: 'Uttar Pradesh',
      history: "Una de las ciudades más sagradas del hinduismo, Vrindavan es donde se cree que el Señor Krishna pasó su infancia. Con más de 5,000 templos, incluidos el famoso Templo Banke Bihari y el Templo ISKCON, la ciudad es un importante lugar de peregrinación y celebra Holi con un fervor inigualable."
    },
    haridwar: {
      name: 'Haridwar',
      country: 'Uttarakhand',
      history: "Uno de los siete lugares más sagrados del hinduismo, Haridwar es donde el río Ganges entra en las llanuras. La ciudad alberga el Kumbh Mela cada 12 años, atrayendo a millones de peregrinos. La ceremonia vespertina Ganga Aarti en el ghat Har Ki Pauri es una fascinante experiencia espiritual que se ha realizado durante siglos."
    },
    mumbai: {
      name: 'Mumbai',
      country: 'Maharashtra',
      history: "La capital financiera de la India y la ciudad de los sueños, Mumbai fue originalmente siete islas entregadas a Gran Bretaña como parte de la dote de Catalina de Braganza en 1661. La ciudad alberga la Puerta de la India, Marine Drive, la industria cinematográfica de Bollywood y refleja una mezcla única de arquitectura colonial y rascacielos modernos."
    },
    bengaluru: {
      name: 'Bengaluru',
      country: 'Karnataka',
      history: "Conocida como el Valle del Silicio de la India y la Ciudad Jardín, Bengaluru fue fundada por Kempe Gowda en 1537. La ciudad combina la destreza en TI con sitios patrimoniales como el Palacio de Bangalore, el Palacio de Verano de Tipu Sultan y hermosos parques, incluidos el Jardín Botánico Lalbagh y Cubbon Park."
    },
    goa: {
      name: 'Goa',
      country: 'Goa',
      history: "Antigua colonia portuguesa hasta 1961, Goa es el estado más pequeño de la India conocido por sus impresionantes playas, vibrante vida nocturna y arquitectura colonial. La Basílica de Bom Jesus, la Catedral Sé y el Fuerte Aguada muestran el patrimonio portugués, mientras que playas como Baga y Palolem atraen a turistas de todo el mundo."
    },
    kerala: {
      name: 'Kerala',
      country: 'Kerala',
      history: 'Llamado "El Propio País de Dios", Kerala es famoso por sus remansos, tratamientos ayurvédicos y exuberantes paisajes verdes. El estado tiene una rica historia de comercio con romanos, árabes y europeos. La cultura única de Kerala incluye la danza Kathakali, las carreras de botes serpiente y la cocina tradicional con coco y especias.'
    },
    hyderabad: {
      name: 'Hyderabad',
      country: 'Telangana',
      history: "Fundada en 1591 por Muhammad Quli Qutb Shah, Hyderabad es conocida por su rica historia, biryani y comercio de perlas. El icónico Charminar, el Fuerte Golconda y las tumbas Qutb Shahi representan el patrimonio Nizami de la ciudad. Ahora un importante centro de TI, equilibra maravillosamente la tradición y la modernidad."
    },
    chennai: {
      name: 'Chennai',
      country: 'Tamil Nadu',
      history: "Anteriormente Madras, Chennai es la capital de Tamil Nadu y la puerta de entrada a la cultura del sur de la India. Fundada por los británicos en 1639, la ciudad cuenta con la Playa Marina (la segunda playa urbana más larga del mundo), el Templo Kapaleeshwarar, el Fuerte St. George, y es famosa por la música carnática clásica y la danza Bharatanatyam."
    },
    kochi: {
      name: 'Kochi',
      country: 'Kerala',
      history: "La Reina del Mar Arábigo, Kochi (Cochín) ha sido un importante centro de comercio de especias desde la antigüedad. La ciudad muestra una mezcla de influencias coloniales portuguesas, holandesas y británicas con atracciones como Fort Kochi, redes de pesca chinas, el Palacio Mattancherry y la iglesia europea más antigua de la India."
    },
    mysuru: {
      name: 'Mysuru',
      history: 'La capital cultural de Karnataka, Mysuru (Mysore) sirvió como capital de la dinastía Wodeyar. El magnífico Palacio de Mysore, iluminado con 100.000 luces durante el festival Dasara, muestra la arquitectura Indo-Sarracena. La ciudad es famosa por los saris de seda, los productos de sándalo y el yoga.'
    },
    madurai: {
      name: 'Madurai',
      history: "Una de las ciudades más antiguas de la India, Madurai data del siglo III a. C. El Templo Meenakshi Amman, con sus imponentes gopurams cubiertos de miles de coloridas esculturas, es una maravilla arquitectónica. La ciudad fue un importante centro de aprendizaje y cultura tamil durante el período Sangam."
    },
    alleppey: {
      name: 'Alleppey',
      history: "Conocida como la Venecia del Este, Alappuzha (Alleppey) es famosa por su red de remansos, canales y lagunas. Los cruceros tradicionales en casas flotantes a través de vías fluviales bordeadas de palmeras ofrecen una visión única de la vida de la aldea de Kerala. La Carrera de Barcos del Trofeo Nehru, que se celebra anualmente, es un evento espectacular."
    },
    ooty: {
      name: 'Ooty',
      history: 'La Reina de las Estaciones de Montaña, Udhagamandalam (Ooty) fue establecida por los británicos como un retiro de verano. Ubicada en las Colinas Nilgiri a 2.240 metros, presenta arquitectura colonial, el Ferrocarril de Montaña Nilgiri, patrimonio de la UNESCO, jardines botánicos y plantaciones de té con impresionantes vistas del valle.'
    },
    coorg: {
      name: 'Coorg',
      history: "Conocido como la Escocia de la India, Kodagu (Coorg) es un distrito montañoso famoso por las plantaciones de café, las montañas brumosas y la cultura única Kodava. La región tiene una tradición marcial y fue gobernada por los jefes Kodava antes de la anexión británica en 1834. Las Cataratas Abbey y Raja's Seat son atracciones populares."
    },
    hampi: {
      name: 'Hampi',
      history: 'Un sitio del Patrimonio Mundial de la UNESCO, Hampi fue la capital del Imperio Vijayanagara (1336-1565), uno de los reinos hindúes más grandes. Las ruinas repartidas en 4.100 hectáreas incluyen templos, estructuras reales y mercados, mostrando una impresionante arquitectura dravídica en medio de un paisaje surrealista salpicado de rocas.'
    },
    pondicherry: {
      name: 'Pondicherry',
      history: 'Antigua colonia francesa hasta 1954, Pondicherry conserva fuertes influencias galas en su arquitectura, cocina y cultura. El Barrio Francés con sus edificios coloniales, bulevares arbolados, el Ashram de Aurobindo y Auroville (municipio experimental) lo convierten en una mezcla única de Oriente y Occidente.'
    },
    visakhapatnam: {
      name: 'Visakhapatnam',
      history: "La Ciudad del Destino y Joya de la Costa Este, Visakhapatnam (Vizag) es una importante ciudad portuaria con playas vírgenes, colinas y valles. El antiguo Templo Simhachalam, las Cuevas Borra (formaciones de estalactitas de un millón de años) y el Museo Submarino INS Kursura muestran las diversas atracciones de la ciudad."
    },
    tirupati: {
      name: 'Tirupati',
      history: "Hogar del sagrado Templo Tirumala Venkateswara, uno de los sitios de peregrinación más visitados del mundo, Tirupati recibe millones de devotos anualmente. Los orígenes del templo se remontan a la antigüedad, con arquitectura que abarca varias dinastías. Se cree que la deidad Lord Venkateswara concede deseos a los devotos."
    },
    kolkata: {
      name: 'Kolkata',
      history: 'La Ciudad de la Alegría y antigua capital de la India británica, Kolkata es un centro cultural e intelectual. Fundada en 1690, presenta arquitectura colonial como el Victoria Memorial y el Puente Howrah, mientras que es el lugar de nacimiento de la literatura, el arte y el Renacimiento bengalí modernos. Durga Puja se celebra con una grandeza inigualable.'
    },
    gangtok: {
      name: 'Gangtok',
      history: "La capital de Sikkim a 1.650 metros, Gangtok ofrece impresionantes vistas de Kanchenjunga, el tercer pico más alto del mundo. La ciudad combina la cultura budista tibetana con la modernidad, con monasterios como Rumtek y Enchey, la zona peatonal MG Marg, y sirve como puerta de entrada a los valles vírgenes del norte de Sikkim."
    },
    shillong: {
      name: 'Shillong',
      history: 'La Escocia del Este, Shillong fue la capital de Assam hasta 1972 y ahora sirve como capital de Meghalaya. A 1.496 metros, presenta colinas cubiertas de pinos, cascadas como Elephant Falls, lagos escénicos y una vibrante cultura musical que le valió el título de "Capital del Rock de la India."'
    },
    darjeeling: {
      name: 'Darjeeling',
      history: 'La Reina de las Colinas, Darjeeling es mundialmente famosa por sus plantaciones de té y el Ferrocarril del Himalaya de Darjeeling (Tren de Juguete), catalogado por la UNESCO. A 2.042 metros, ofrece vistas del amanecer de Kanchenjunga desde Tiger Hill, arquitectura de la era colonial, monasterios budistas tibetanos y actividades de aventura.'
    },
    puri: {
      name: 'Puri',
      history: 'Uno de los cuatro sitios sagrados de peregrinación hindú (Char Dham), Puri es el hogar del Templo Jagannath del siglo XII. El Rath Yatra (festival de carros) anual atrae a millones de devotos. Puri Beach y el Templo Konark Sun (sitio de la UNESCO) cercano lo convierten en un importante destino espiritual y turístico.'
    },
    guwahati: {
      name: 'Guwahati',
      history: "La Puerta de Entrada al Noreste de la India, Guwahati es la ciudad más grande de Assam situada a orillas del río Brahmaputra. El antiguo Templo Kamakhya (Shakti Peetha) en la colina Nilachal es un importante sitio de peregrinación. La ciudad sirve como centro comercial y educativo de la región, clasificada en el puesto 4 por el New York Times para los destinos de 2025."
    },
    kohima: {
      name: 'Kohima',
      history: 'La capital de Nagaland a 1.444 metros, Kohima es conocida por la Batalla de Kohima en 1944, un punto de inflexión en la Segunda Guerra Mundial. El Cementerio de Guerra de Kohima conmemora esta historia. El Festival Hornbill en diciembre muestra la cultura tribal Naga, las artes tradicionales, las danzas y la cocina.'
    },
    itanagar: {
      name: 'Itanagar',
      history: 'La capital de Arunachal Pradesh, Itanagar significa "Fuerte de Ladrillos." Las ruinas del Fuerte Ita de los siglos XIV-XV muestran importancia histórica. La ciudad cuenta con el hermoso monasterio Gompa Buddha Vihar, Polo Park, y sirve como puerta de entrada para explorar los valles vírgenes de Arunachal, las aldeas tribales y los monasterios.'
    },
    bhubaneswar: {
      name: 'Bhubaneswar',
      history: "La Ciudad de los Templos de la India, Bhubaneswar tiene más de 500 templos que datan de los siglos VI al XIII, mostrando la arquitectura Kalinga. El Templo Lingaraja, el Templo Mukteshwar y el Templo Rajarani son maravillas arquitectónicas. La ciudad equilibra el patrimonio antiguo con la planificación urbana moderna como capital de Odisha."
    },
    portblair: {
      name: 'Port Blair',
      history: "La capital de las Islas Andamán y Nicobar, Port Blair es la puerta de entrada al paraíso tropical de la India. La histórica Cárcel Celular, utilizada por los británicos para exiliar a prisioneros políticos, ahora sirve como monumento nacional. Las islas ofrecen playas vírgenes, arrecifes de coral y una rica biodiversidad marina."
    },
    pelling: {
      name: 'Pelling',
      history: "Una pintoresca ciudad en Sikkim Occidental a 2.150 metros, Pelling ofrece vistas impresionantes de Kanchenjunga. El antiguo Monasterio Pemayangtse y las ruinas de Rabdentse (antigua capital de Sikkim) muestran el patrimonio budista de la región. Skywalk y la Estatua Chenrezig son atracciones modernas que complementan la belleza natural."
    },
    tawang: {
      name: 'Tawang',
      history: "A 3.048 metros, Tawang es el hogar del monasterio más grande de la India (Monasterio Tawang), fundado en 1680, que alberga a 450 monjes. El lugar de nacimiento del 6º Dalai Lama, refleja una fuerte cultura budista tibetana. El Paso Sela, el Lago Madhuri y el Monumento a la Guerra de 1962 atraen a visitantes a esta pintoresca ciudad fronteriza."
    },
    cherrapunji: {
      name: 'Cherrapunji',
      history: 'Una vez el lugar más húmedo de la Tierra, Cherrapunji (Sohra) recibe fuertes lluvias monzónicas creando impresionantes cascadas como Nohkalikai y Seven Sisters Falls. Los puentes de raíz viva únicos, creados por la tribu Khasi utilizando raíces de árboles de caucho, están catalogados por la UNESCO. La Cueva Mawsmai ofrece aventuras de espeleología.'
    },
    imphal: {
      name: 'Imphal',
      history: "La capital de Manipur a 790 metros, Imphal jugó un papel crucial en la Segunda Guerra Mundial. El Fuerte Kangla fue la sede de los gobernantes de Manipur durante siglos. El Lago Loktak, el lago de agua dulce más grande del noreste de la India con únicos phumdis flotantes (islas), y el Parque Nacional Keibul Lamjao son las principales atracciones."
    },
    aizawl: {
      name: 'Aizawl',
      history: "La capital de Mizoram, Aizawl está encaramada en crestas a 1.132 metros, ofreciendo vistas panorámicas. La ciudad refleja la cultura Mizo con casas de bambú, textiles de telar manual y festivales vibrantes. El Templo de Salomón, el Museo Estatal de Mizoram y las Colinas Durtlang brindan información sobre el patrimonio cristiano y las tradiciones tribales de la región."
    },
    agartala: {
      name: 'Agartala',
      history: "La capital de Tripura, Agartala presenta el magnífico Palacio Ujjayanta (ahora un museo) construido en 1901, que muestra el patrimonio real. El palacio acuático Neermahal en el lago Rudrasagar y el antiguo Templo Tripura Sundari reflejan la historia de la región. La ciudad combina las culturas bengalí y tribal."
    },
    khajuraho: {
      name: 'Khajuraho',
      history: 'Un sitio del Patrimonio Mundial de la UNESCO, Khajuraho es conocido por sus impresionantes templos medievales hindúes y jainistas construidos entre 950-1050 EC por la dinastía Chandela. Los templos presentan intrincadas tallas que representan varios aspectos de la vida, incluidas esculturas eróticas que representan tradiciones tántricas, mostrando un logro artístico excepcional.'
    },
    bhopal: {
      name: 'Bhopal',
      history: "La Ciudad de los Lagos y capital de Madhya Pradesh, Bhopal fue fundada en el siglo XI. Combina de manera única arquitectura antigua y moderna, con Taj-ul-Masjid (una de las mezquitas más grandes de Asia), la Stupa de Sanchi (sitio de la UNESCO) y el trágico memorial de la catástrofe del gas de 1984, manteniendo su distintiva identidad cultural."
    },
    gwalior: {
      name: 'Gwalior',
      history: 'Conocido por su imponente fuerte en la cima de una colina descrito como "la perla entre las fortalezas de la India", Gwalior tiene una rica historia que se remonta al siglo VIII. El complejo del fuerte incluye palacios, templos con intrincadas tallas y Teli Ka Mandir. La ciudad también es famosa por su contribución a la música clásica indostaní.'
    },
    indore: {
      name: 'Indore',
      history: "La capital comercial de Madhya Pradesh y la ciudad más limpia de la India, Indore fue establecida por la dinastía Holkar en 1715. El Palacio Rajwada, el Palacio Lal Bagh y la imponente estatua de Ahilyabai Holkar celebran el patrimonio real de la ciudad. Es famosa por su cultura de comida callejera y vibrantes mercados."
    },
    orchha: {
      name: 'Orchha',
      history: 'Una joya escondida fundada en 1531, Orchha fue la capital de los jefes Rajput de Bundela. La ciudad cuenta con impresionantes palacios y templos en una isla en el río Betwa. El Jahangir Mahal, el Raj Mahal y el Templo Ram Raja muestran una magnífica arquitectura Bundela congelada en el tiempo.'
    },
    ujjain: {
      name: 'Ujjain',
      history: "Una de las siete ciudades sagradas del hinduismo (Sapta Puri), Ujjain alberga el Kumbh Mela cada 12 años. El antiguo Templo Mahakaleshwar, uno de los doce Jyotirlingas, presenta el único ídolo de Shiva orientado al sur. Ujjain fue un importante centro matemático y astronómico en la antigua India, hogar de eruditos como Brahmagupta."
    },
    ranchi: {
      name: 'Ranchi',
      history: "La capital de Jharkhand, Ranchi fue una capital de verano durante la India británica debido a su clima agradable. Conocida como la Ciudad de las Cascadas, presenta las Cascadas Hundru, Jonha y Dassam. La ciudad está rodeada de colinas y bosques, hogar de culturas tribales y lugar de nacimiento del legendario jugador de críquet MS Dhoni."
    },
    daman: {
      name: 'Daman',
      history: 'Antigua colonia portuguesa hasta 1961, Daman conserva el encanto colonial con fuertes, iglesias y playas. El Fuerte Moti Daman, el Fuerte San Jerónimo y la arquitectura de estilo portugués reflejan 450 años de influencia lusitana. El pueblo costero ofrece una atmósfera relajada diferente a la de la India continental.'
    },
    silvassa: {
      name: 'Silvassa',
      history: 'La capital de Dadra y Nagar Haveli, Silvassa está enclavada entre bosques y colinas. Liberada del dominio portugués en 1954, presenta museos tribales que exhiben arte Warli, el Jardín del Lago Vanganga y parques naturales. La ciudad mantiene el patrimonio tribal mientras se desarrolla como un centro industrial.'
    },
    nagpur: {
      name: 'Nagpur',
      history: 'La Ciudad Naranja y capital de invierno de Maharashtra, Nagpur se encuentra geográficamente en el centro de la India. La ciudad cuenta con Deekshabhoomi, un importante sitio de peregrinación budista donde el Dr. B.R. Ambedkar se convirtió al budismo. Nagpur también es conocida por la cultura Vidarbha y la proximidad a las reservas de tigres.'
    },
    raipur: {
      name: 'Raipur',
      history: 'La capital de Chhattisgarh, Raipur tiene raíces que se remontan al siglo IX EC. La ciudad sirve como puerta de entrada a numerosos templos antiguos, sitios budistas en Sirpur y aldeas tribales. El Museo Conmemorativo Mahant Ghasidas alberga artefactos tribales, mientras que el Raipur moderno está emergiendo como un centro educativo y comercial.'
    },
    jabalpur: {
      name: 'Jabalpur',
      history: "Ubicada a orillas del río Narmada, Jabalpur es famosa por las impresionantes Rocas de Mármol en Bhedaghat, donde el río fluye a través de un desfiladero con acantilados de mármol de 100 pies de altura. Las Cataratas Dhuandhar y los antiguos fuertes Gond reflejan la belleza natural y el significado histórico de la ciudad como centro cultural."
    },
    pachmarhi: {
      name: 'Pachmarhi',
      history: 'La única estación de montaña en Madhya Pradesh, Pachmarhi se encuentra a 1.067 metros en la Cordillera Satpura. Descubierta por el Capitán James Forsyth en 1857, presenta arquitectura de la era colonial, antiguos refugios rocosos con pinturas rupestres prehistóricas en las Cuevas Pandav, cascadas y miradores escénicos en medio de densos bosques.'
    },
    amarkantak: {
      name: 'Amarkantak',
      history: 'Un sitio sagrado de peregrinación a 1.065 metros, Amarkantak es la fuente de los sagrados ríos Narmada y Sone. El antiguo templo Narmada Kund y el jardín botánico Mai ki Bagiya atraen a peregrinos y amantes de la naturaleza. La región tiene un significado espiritual en la tradición hindú y ofrece una serena belleza natural.'
    },
    chitrakoot: {
      name: 'Chitrakoot',
      history: 'Una ciudad de inmenso significado religioso, Chitrakoot es donde el Señor Rama, Sita y Lakshmana pasaron 11 años de su exilio de 14 años según el Ramayana. El templo Kamadgiri, Ramghat en el río Mandakini y numerosos ashrams lo convierten en un importante destino de peregrinación para los hindúes.'
    },
    bhimbetka: {
      name: 'Bhimbetka',
      history: 'Un sitio del Patrimonio Mundial de la UNESCO, los refugios rocosos de Bhimbetka contienen más de 500 cuevas con pinturas rupestres prehistóricas que datan de hace 30.000 años hasta el período medieval. Estas pinturas representan la caza, el baile, las peleas de animales y la vida diaria, proporcionando información sobre la Edad de Piedra hasta los períodos históricos tempranos.'
    }
  },
    footer: {
      description: 'Su compañero de viaje de confianza para viajes inolvidables. Creando recuerdos que duran toda la vida.',
      destinations: {
        title: 'Destinos',
        keralaBudgetHouseboat: 'Casa flotante económica de Kerala',
        luxuryTopEndHouseboat: 'Casa flotante de lujo de gama alta',
        b2bPriceKeralaHouseboats: 'Precio B2B de casas flotantes de Kerala',
        houseboatsInAlappuzha: 'Casas flotantes en Alappuzha',
        budgetBoatHouseAllepey: 'Casa flotante económica de Alleppey',
        budgetBoatHouseAlappuzha: 'Casa flotante económica de Alappuzha',
        budgetHouseboatAllepey: 'Casa flotante económica de Alleppey',
        budgetHouseboatAlappuzha: 'Casa flotante económica de Alappuzha',
        budgetAlleppeyBoatHouse: 'Casa flotante económica de Alleppey',
        spotBookingBoatHouse: 'Reserva de casa flotante en el lugar',
        prepaidTaxiCochinAirport: 'Servicio de taxi prepago en el aeropuerto de Cochin',
        budgetAlappuzhaHouseboats: 'Casas flotantes económicas de Alappuzha',
        budgetAlleppeyHouseboats: 'Casas flotantes económicas de Alleppey',
        b2bAlleppeyHouseboats: 'Casas flotantes B2B de Alleppey',
        privateAlleppeyHouseboats: 'Casas flotantes privadas de Alleppey',
        houseboatsInIndia: 'Casas flotantes en la India',
        sharedHouseboatsInAlleppey: 'Casas flotantes compartidas en Alleppey',
        sharingHouseboatsInAlleppey: 'Casas flotantes compartidas en Alleppey',
        sharingBoathouseInAlleppey: 'Casa flotante compartida en Alleppey',
        clubbingHouseboatsInAlleppey: 'Casas flotantes para fiestas en Alleppey',
        clubbingBoathouseInAlleppey: 'Casa flotante para fiestas en Alleppey',
        luxuryHouseboatsInAlleppey: 'Casas flotantes de lujo en Alleppey',
        premiumHouseboatsInAlleppey: 'Casas flotantes premium en Alleppey',
        deluxeHouseboatsInAlleppey: 'Casas flotantes de lujo en Alleppey',
        standardHouseboatsInAlleppey: 'Casas flotantes estándar en Alleppey',
        ultraLuxuryHouseboatsInAlleppey: 'Casas flotantes de ultra lujo en Alleppey',
        ultraLuxurySharingHouseboatsInAlleppey: 'Casas flotantes compartidas de ultra lujo en Alleppey',
        bestHouseboatsInAlleppey: 'Las mejores casas flotantes en Alleppey',
        bestLuxuryHouseboatsInAlleppey: 'Las mejores casas flotantes de lujo en Alleppey',
        bestPremiumHouseboatsInAlleppey: 'Las mejores casas flotantes premium en Alleppey',
        bestDeluxeHouseboatsInAlleppey: 'Las mejores casas flotantes de lujo en Alleppey',
        bestStandardHouseboatsInAlleppey: 'Las mejores casas flotantes estándar en Alleppey',
        bestAlappuzhaHouseboatPackages: 'Los mejores paquetes de casas flotantes en Alappuzha',
        bestAlappuzhaBoatHousePackages: 'Los mejores paquetes de casas flotantes en Alappuzha'
      },
      services: { title: 'Servicios', flightBooking: 'Reserva de vuelos', hotelReservation: 'Reserva de hotel', tourPackages: 'Paquetes turísticos' },
      company: { title: 'Empresa', aboutUs: 'Sobre nosotros', contact: 'Contacto' },
      support: { title: 'Soporte', helpCenter: 'Centro de ayuda', terms: 'Términos de servicio', privacy: 'Política de privacidad', refund: 'Política de reembolso', faq: 'Preguntas frecuentes' },
      copyright: '© {{year}} Tourism Paradise. Todos los derechos reservados.'
    }
  },
  fr: {
    translation: {

      destinationNotFound: {
        title: "Destination introuvable",
        description: "Désolé, nous n'avons pas trouvé la destination que vous recherchez."
      },
      goBack: "Retour aux destinations",
      thingsToDo: "choses à faire",
      aboutDestination: "À propos",
      getInTouch: "Contactez-nous",
      food: "Commander de la nourriture en ligne",
      chatOnWhatsApp: "Discuter sur WhatsApp",
      instantResponse: "Réponse immédiate",
      sendEmail: "Envoyer un e-mail",
      emailAddress: "info@tourismparadise.com",
      houseboatShort: "Houseboat à Alleppey, jour et nuit, une chambre, pont supérieur privé.",
      exploreNow: "Explorer maintenant",
      planYourVisitTitle: "Planifiez votre visite",
      planYourVisitSubtitle: "Remplissez le formulaire et nous vous répondrons sous 24 heures",
      labelFullName: "Nom complet *",
      placeholderFullName: "Entrez votre nom complet",
      labelEmail: "Adresse e-mail *",
      placeholderEmail: "your.email@example.com",
      labelPhone: "Numéro de téléphone",
      placeholderPhone: "+91 98765 43210",
      labelMessage: "Votre message *",
      placeholderMessage: "Parlez-nous de votre voyage, de vos préférences et de vos questions...",
      sending: "Envoi...",
      sendInquiry: "Envoyer la demande",
      successMessage: "✓ Message envoyé avec succès ! Nous vous contacterons bientôt.",
      whatsappMessage: "Bonjour ! Je souhaite visiter {{name}}, {{country}}. Pouvez-vous m'envoyer plus d'informations ?",
      emailSubject: "Demande concernant {{destinationName}}",
      emailBodyTemplate: "Bonjour,\n\nJe souhaite en savoir plus sur {{destination}}.\n\nMerci !",
      heroTitle: 'Planifiez Chaque Partie de Votre Voyage',
      heroSubtitle: 'Réservez vols, hôtels, transports et expériences en un seul endroit. Votre solution de voyage complète pour une planification sans faille.',
      houseboats: 'Bateaux-maisons',
      shikara: 'Balades en Shikara',
      flights: 'Vols',
      hotels: 'Hôtels',
      trains: 'Trains',
      buses: 'Bus',
      cars: 'Location de Voitures',
      tours: 'Visites',
      cruises: 'Croisières',
      activities: 'Activités',
      packages: 'Forfaits Vacances',
      weekend: 'Escapades de Week-end',
      beaches: 'Séjours à la Plage',
      mountains: 'Voyages en Montagne',
      adventure: 'Aventure',
      citybreaks: 'Escapades Urbaines',
      photography: 'Tours Photo',
      insurance: 'Assurance Voyage',
      passes: 'Pass Ville',
      budget: 'Séjours Budget',
      bikes: 'Location de Vélos',
      villas: 'Villas & Maisons',
      todaysDeals: "Offres Chaudes d'Aujourd'hui",
      exploreDestinations: 'Explorer les Destinations',
      seaFishRestaurants: 'Restaurants de fruits de mer',
      backwaterVillageStay: 'Séjour dans un village des backwaters',
      keralaChipsAndSpices: 'Chips et épices du Kerala',
      keralaHandlooms: 'Tissages manuels du Kerala',
      honeymoonBoatHouse: 'Péniche pour lune de miel',
      houseboats: 'Péniches',
      noHouseboatsFound: 'Aucune péniche ne correspond à votre recherche.',

      budgetTravelDeals: 'Offres de voyage économiques pour vous',
      offerHotels: 'Hôtels',
      offerHouseboatsDayNightCruise: 'Péniches à Alleppey pour croisière de jour et de nuit',
      offerHouseboatsDayNight1Bedroom: 'Péniches à Alleppey 1 chambre jour et nuit',
      offerHouseboatsDayCruise1BedroomUpperDeck: 'Péniche privée avec 1 chambre et pont supérieur pour croisière de jour à Alappuzha',
      offerKeralaHoneymoonHouseboat: 'Péniche pour lune de miel au Kerala',
      offerHouseboatDayNight1BedroomUpperDeck: 'Péniche privée avec 1 chambre et pont supérieur jour et nuit à Alleppey',
      offerHouseboatsAlleppeyDayTripUpperDeck: 'Excursion d\'une journée en péniche avec pont supérieur à Alleppey',
      offerHouseboatsB2BPrice1Bedroom: 'Prix B2B pour péniches 1 chambre à Alleppey',
      offerSharingHouseboats2People: 'Prix pour péniches partagées pour 2 personnes à Alleppey',
      offerUltraPremiumHouseboats: 'Péniches ultra premium à Alleppey',
      offerKeralaTourBudgetPackages: 'Forfaits touristiques économiques au Kerala',
      offerKeralaBoating: 'Navigation de plaisance au Kerala',
      offerB2BTravelDealsKeralaHouseboat: 'Offres de voyage B2B pour forfaits de péniches au Kerala',
      offerPetalsFlowers: 'Fleurs de pétales',
      offerOrchidForSale: 'Orchidée à vendre - plantes d\'orchidées en fleurs',
      offerOxidisedOrnaments: 'Ornements oxydés',
      offerKeralaHandloomsSarees: 'Tissages manuels du Kerala - saris kasavu du Kerala',
      offerKeralaHandicrafts: 'Artisanat du Kerala',
      offerKeralaChips: 'Chips du Kerala - chips de banane du Kerala',
      offerKeralaSpices: 'Épices du Kerala',
      offerDriedFish: 'Poisson séché',
      offerKeralaRealEstate: 'Immobilier au Kerala',
      offerKeralaLottery: 'Billets de loterie du Kerala - billets de loterie bumper du Kerala',
      offerKeralaHomeDecor: 'Décoration d\'intérieur du Kerala',
      offerTransportationInKerala: 'Transport au Kerala',
      offerKeralaCoirProducts: 'Produits en fibre de coco du Kerala',
      whyChooseTitle: 'Pourquoi choisir Tourism Paradise',
      whyChooseSubtitle: 'Nous facilitons la planification de voyages grâce à nos services complets et à nos conseils d\'experts',
      showLess: 'Afficher moins',
      showMore: 'Afficher plus'
    },featureList: {
      pilgrimPackages: 'Meilleurs Forfaits Pèlerinage',
      pilgrimDescription: 'Voyages de pèlerinage soigneusement élaborés vers des destinations sacrées pour un voyage spirituel serein.',
      industrialTitle: 'Service de conseil industriel et fournisseur de main-d’œuvre',
      industrialShortDesc: 'Des rapports de projet et de l\'orientation financière à la fourniture de main-d\'œuvre qualifiée comme des ingénieurs, des techniciens et des entrepreneurs en construction, nous couvrons tous vos besoins industriels et commerciaux.',
      industrialFullDesc: 'Préparation de rapports de projet, conseils financiers, supervision de la construction, préparation de plans et devis, machines pour l\'industrie et les hôtels, main-d\'œuvre et entrepreneurs en construction, électricité, plomberie, climatisation, construction, appareils électroménagers, réfrigérateur, machine à laver, climatiseur, automobile, informatique, téléphone portable, opérateur d\'ascenseur, décoration intérieure, bijoux et ornements, machine à café et à collations, maçon, charpentier, soudeur, installation de machines, peintre, nettoyage, hôtels, chauffeur, fabrication d\'aluminium, fabrications d\'acier, personnel de maison, travaux de jardinage, opérateurs de véhicules lourds et de machines, conception et hébergement de sites Web, installation de systèmes d\'énergie solaire services à domicile, techniciens de laboratoire, ingénieurs et médecins, enseignants, blanchisserie, entretien ménager, etc.',
      educationTitle: 'Service de conseil en éducation',
      educationDescription: 'Ingénierie, Collège médical, agriculture, informatique IA, LLB, MBA, BBA, MCA, techniciens de laboratoire, physiothérapie, dentaire, ayurvédique, etc.',
      legalTitle: 'Avocats et juristes',
      legalDescription: 'Accès à des conseils et services juridiques professionnels d\'avocats et de juristes expérimentés.',
    },
    destinationOffers: {
      1: {
        title: "Hôtels",
        description: "Zones de faune/forêt et activités associées : • Sanctuaire de la faune de Periyar (ou Réserve de tigres de Periyar) • Zones forestières du Kerala • Zones de trekking • Zones montagneuses • Interaction/observation des éléphants (souvent proposée comme safari à dos d’éléphant, promenade à dos d’éléphant ou observation en forêt/sanctuaires. Lors des festivals, cela apparaît sous forme de procession d’éléphants ou Gajamela)."
      },

      2: {
        title: "Houseboats à Alleppey — Croisière jour et nuit",
        description: "Hôtels houseboats à Alleppey, houseboats de 1/2/3 jusqu’à 22 chambres à Alappuzha. Houseboats premium et luxe pour séjours jour/nuit, houseboats économiques, jetée de Muhamma, course de bateaux Nehru Trophy, départ Alappuzha, arrivée Alleppey, itinéraires de houseboat, région touristique de Kannankara. Houseboats de 1 à 22 chambres disponibles en catégories premium et luxe."
      },

      3: {
        title: "Houseboats à Alleppey — Jour et nuit (1 chambre)",
        description: "Séjours chez l’habitant dans les backwaters d’Alleppey, villages d’Alappuzha, appartements à Pallathuruthi, villas à Alleppey, maisons dans les arbres, resorts insulaires du Kerala, propriétés en bord de lac ou de plage. Houseboats de 1 à 22 chambres, premium et luxe pour séjours jour et nuit."
      },

      4: {
        title: "Alappuzha — Croisière de jour en houseboat privé (1 chambre, pont supérieur)",
        description: "Houseboats de 1 à 22 chambres à Alleppey, séjours premium et luxe, jetée de Muhamma, course Nehru Trophy, route Alappuzha–Kannankara. Houseboats économiques et de luxe pour croisières journalières."
      },

      5: {
        title: "Houseboat de lune de miel au Kerala",
        description: "Un cottage de lune de miel sur un houseboat d’Alappuzha comprend une décoration romantique, des chambres climatisées, des salles de bain privées et des ponts panoramiques. Repas à bord, dîners aux chandelles, lits décorés de fleurs. Une expérience intime et exclusive pour couples naviguant sur les backwaters du Kerala."
      },

      6: {
        title: "Houseboat à Alleppey — Jour et nuit (1 chambre, pont supérieur privé)",
        description: "Séjours chez l’habitant dans les backwaters d’Alleppey, villages d’Alappuzha, appartements à Pallathuruthi, villas de la ville d’Alleppey, maisons dans les arbres, resorts insulaires, propriétés en bord de lac et de plage. Houseboats premium/luxe de 1 à 22 chambres."
      },

      7: {
        title: "Houseboats à Alleppey (1 chambre, pont supérieur privé)",
        description: "Alleppey, Kumarakom, Kollam, lac Ashtamudi, Kovalam, Varkala, plage de Cherai, plage de Marari, villages comme Kainakari, Punnamada, Aryad. Houseboats luxueux de 1 à 22 chambres pour croisières jour et nuit."
      },

      8: {
        title: "Alleppey — Croisière de jour en houseboat (pont supérieur)",
        description: "Zones de Kainakari, Punnamada, Aryad, appartements de Pallathuruthi, jetée de Muhamma — houseboats premium pour croisières journalières complètes."
      },

      9: {
        title: "Houseboats à Alleppey — Tarifs B2B pour 1 chambre",
        description: "Catégories disponibles : deluxe, premium, luxe. Deux types de houseboats 1 chambre : avec pont supérieur et sans pont. Ceux avec pont offrent une meilleure vue."
      },

      10: {
        title: "Houseboats partagés à Alleppey — Prix pour 2 personnes",
        description: "Expérience économique pour découvrir les backwaters du Kerala. Idéal pour couples ou amis. Croisière d’une nuit avec hébergement confortable, repas authentiques du Kerala et vues sereines. Réservation à l’avance recommandée."
      },

      11: {
        title: "Houseboats ultra premium à Alleppey",
        description: "Types : Deluxe, Premium, Luxe et Ultra Luxe. Houseboats de 1 à plus de 22 chambres pour couples, familles et groupes. Séjours jour/nuit. Zones populaires : backwaters d’Alleppey, Punnamada, Kainakari, Aryad, jetée de Muhamma."
      },

      12: {
        title: "Forfaits économiques de voyage au Kerala",
        description: "Munnar, Thekkady, faune de Periyar, Wayanad, Vagamon, Ponmudi, Idukki, Devikulam, Kuttikanam, Vattavada, Kanthalloor, zones montagneuses, forêts du Kerala, marche avec éléphants, trekking."
      },

      13: {
        title: "Balade en bateau au Kerala",
        description: "Voyage paisible sur les backwaters du Kerala : rizières, canaux villageois, bateaux traditionnels en bois, repas typiques du Kerala. Parfait pour couples, familles et voyageurs solos. À partir de ₹1 999 par personne."
      },

      14: {
        title: "Offres B2B — Forfaits houseboats Kerala",
        description: "Houseboats de 1 à 22 chambres à Alleppey, séjours premium/luxe, options économiques, jetée de Muhamma, courses Nehru Trophy, itinéraires Kannankara."
      },

      15: {
        title: "Petals Flowers",
        description: "Votre destination de confiance pour plantes fleuries premium au Kerala. Spécialisés en orchidées exotiques, parfaites pour décoration, cadeaux et jardins. Plantes soignées pour une floraison saine et durable."
      },

      16: {
        title: "Orchidées en vente — Plantes d’orchidées fleuries",
        description: "Orchidées tropicales comme Phalaenopsis et Vanda. Couleurs vives, motifs uniques, fleurs durables. Idéales pour décoration intérieure, gifting, ou jardins. Faciles à entretenir. À partir de ₹399."
      },

      17: {
        title: "Bijoux oxydés du Kerala",
        description: "Bijoux oxydés du Kerala — finition sombre et antique obtenue par oxydation de l’argent ou du laiton. Styles traditionnels et modernes. S’accorde avec saris et tenues contemporaines. Colliers, boucles d’oreilles et ensembles disponibles."
      },

      18: {
        title: "Tissus handloom du Kerala — Saris Kasavu",
        description: "Soie handloom du Kerala, saris Kasavu, matériaux Kasavu pour churidar, chemises handloom. Blanc traditionnel avec bordure dorée."
      },

      19: {
        title: "Artisanat du Kerala",
        description: "Artisanat traditionnel : sculptures en bois, objets en métal, tapis de fibre de coco, objets en coquille de coco comme bols et jouets, masques Kathakali, Nettipattam, miroirs métalliques d’Aranmula."
      },

      20: {
        title: "Chips du Kerala — Chips de banane",
        description: "Chips de banane Nendran du Kerala, chips de jacquier et autres snacks traditionnels."
      },

      21: {
        title: "Épices du Kerala",
        description: "Épices premium : cardamome, poivre noir, cannelle, clou de girofle, muscade — provenant de fermes biologiques des Ghâts Occidentaux."
      },

      22: {
        title: "Poisson séché",
        description: "Crevettes d’eau douce de qualité export du lac Ashtamudi, séchées au soleil sans sel. Taille moyenne à grande, parfaites pour masala, curry et chutney."
      },

      23: {
        title: "Immobilier au Kerala",
        description: "Maison indépendante 4 chambres (3200 sq.ft) en emplacement premium. Achat, vente et location de villas, terrains, maisons et appartements à travers le Kerala."
      },

      24: {
        title: "Billets de loterie du Kerala — Bumper Lottery",
        description: "Loterie officielle de l’État du Kerala : Win Win, Sthree Sakthi, Fifty-Fifty, Karunya. Premiers prix jusqu’à ₹1 crore."
      },

      25: {
        title: "Décoration intérieure du Kerala",
        description: "Décoration de maison et produits en fibre de coco du Kerala — articles naturels et écologiques."
      },

      26: {
        title: "Transport au Kerala",
        description: "Guruvayur, chutes Athirapilly, Vazhachal, basilique Arthunkal, Fort Cochin, Neeleswaram, Thenmala, temple Padmanabhaswamy, Chottanikkara, Sabarimala, Kuttalam, Ooty, Kodaikanal, Goa, Karnataka, Tamil Nadu, Chennai, Madurai, Rameswaram, Coimbatore, Valparai, zones backwaters comme Kainakari, Punnamada, Aryad, Pallathuruthi, Muhamma."
      },

      27: {
        title: "Produits en fibre de coco du Kerala",
        description: "Produits écologiques et biodégradables : tapis, cordes, brosses, sacs, décoration. Très demandés aux marchés locaux et internationaux."
      },

      28: {
        title: "Commande de nourriture en ligne",
        description: "Service de commande de nourriture au Kerala — cuisine locale authentique et plats internationaux. Disponible à Cochin, Trivandrum, Kozhikode et autres villes."
      }
    },
    testimonials:// public/locales/fr/testimonials.json
{
  "sectionTitle": "Ce que disent nos voyageurs",
  "sectionSubtitle": "Expériences réelles de milliers de clients satisfaits",
  "quoteOpen": "\"",
  "indicatorAria": "Afficher le témoignage {{index}}",

  "person1": {
    "name": "Sarah Johnson",
    "location": "New York, États-Unis",
    "text": "Expérience absolument incroyable ! L'équipe de Tourism Paradise a parfaitement planifié notre lune de miel. Chaque détail a été pris en charge, et nous avons vécu le voyage le plus romantique dans les backwaters du Kerala.",
    "trip": "Lune de miel dans les backwaters du Kerala"
  },

  "person2": {
    "name": "Michael Chen",
    "location": "Toronto, Canada",
    "text": "Service professionnel et une attention incroyable aux détails. Notre voyage familial au Kerala s'est déroulé parfaitement grâce à leur planification experte et à leur connaissance locale des plages et des stations de montagne.",
    "trip": "Aventure familiale au Kerala"
  },

  "person3": {
    "name": "Emily Rodriguez",
    "location": "Barcelone, Espagne",
    "text": "Je voyage souvent pour le travail, mais ce voyage de loisirs organisé par Tourism Paradise était exceptionnel. L'itinéraire personnalisé et le soutien pour ma retraite ayurvédique au Kerala ont rendu le séjour sans stress.",
    "trip": "Retraite en solo au Kerala"
  }
},
    popularDestinations:{
      title: "Explorez plus de destinations en Inde",
      subtitle: "Découvrez des activités dans les villes de différents États",
      thingsToDo: "Choses à faire",
      comingSoonTitle: "Bientôt disponible !",
      comingSoonDescription: "Nous ajoutons des destinations incroyables en {{continent}}. Revenez bientôt !",
      northIndia: "Destinations du nord de l’Inde",
      southIndia: "Destinations du sud de l’Inde",
      eastIndia: "Destinations de l’est et du nord-est de l’Inde",
      centralIndia: "Destinations du centre de l’Inde",

      delhi: {
        name: "Delhi",
        country: "Delhi",
        history:
          "Capitale de l’Inde, Delhi possède plus de 2 000 ans d’histoire. La ville regorge de mosquées, forts et monuments laissés par les empereurs moghols. Du majestueux Fort Rouge à l’emblématique India Gate, Delhi associe patrimoine ancien et infrastructures modernes, en faisant une destination incontournable."
      },

      jaipur: {
        name: "Jaipur",
        country: "Rajasthan",
        history:
          "Surnommée la Ville Rose, Jaipur est la capitale du Rajasthan et fait partie du Triangle d’Or. Fondée en 1727, elle est célèbre pour ses palais royaux, le Fort d’Amber, le Hawa Mahal et ses bazars animés. Jaipur reflète la grandeur de l’architecture et de la culture rajpoutes."
      },

      agra: {
        name: "Agra",
        country: "Uttar Pradesh",
        history:
          "Ville du célèbre Taj Mahal, l’une des sept merveilles du monde, Agra fut la capitale de l’Empire moghol de 1556 à 1658. On y trouve également le Fort d’Agra et Fatehpur Sikri, deux joyaux de l’architecture moghole."
      },

      varanasi: {
        name: "Varanasi",
        country: "Uttar Pradesh",
        history:
          "L’une des plus anciennes villes continuellement habitées au monde, Varanasi est un centre religieux majeur pour les hindous. Située au bord du Gange sacré, elle est connue pour ses ghats, ses anciens temples et sa profonde spiritualité."
      },

      amritsar: {
        name: "Amritsar",
        country: "Pendjab",
        history:
          "Fondée en 1577 par Guru Ram Das, Amritsar abrite le Temple d’Or, le sanctuaire le plus sacré du sikhisme. La ville a également été le témoin du tragique massacre de Jallianwala Bagh en 1919. Aujourd’hui, elle symbolise l’héritage, la spiritualité et la résilience sikh."
      },

      manali: {
        name: "Manali",
        country: "Himachal Pradesh",
        history:
          "Située à 2 050 mètres dans l’Himalaya, Manali est une station de montagne populaire pour sa beauté naturelle, ses sports d’aventure et son ancien temple Hidimba. Elle constitue la porte d’accès au col de Rohtang et à la vallée de Solang."
      },

      leh: {
        name: "Leh",
        country: "Ladakh",
        history:
          "Capitale du Ladakh, Leh se situe à environ 3 500 mètres d’altitude et fut autrefois une étape majeure sur la Route de la Soie. Connue pour ses paysages arides, ses monastères bouddhistes et ses lacs d’altitude comme Pangong Tso."
      },

      rishikesh: {
        name: "Rishikesh",
        country: "Uttarakhand",
        history:
          "Connue comme la capitale mondiale du yoga, Rishikesh se trouve au bord du Gange. La ville est célèbre pour ses ashrams, ses centres de yoga et le célèbre pont Lakshman Jhula. La visite des Beatles en 1968 l’a rendue mondialement célèbre."
      },

      udaipur: {
        name: "Udaipur",
        country: "Rajasthan",
        history:
          "Surnommée la Ville des Lacs et la Venise de l’Est, Udaipur fut fondée en 1559 par Maharana Udai Singh II. Ses palais — comme le City Palace et le Lake Palace — et ses lacs pittoresques en font l’une des destinations les plus romantiques d’Inde."
      },

      shimla: {
        name: "Shimla",
        country: "Himachal Pradesh",
        history:
          "Ancienne capitale d’été de l’Inde britannique, Shimla conserve son charme colonial grâce à son architecture victorienne telle que le Viceregal Lodge et la Christ Church. Elle offre également des vues magnifiques sur l’Himalaya et possède la ligne de chemin de fer Kalka-Shimla, classée à l’UNESCO."
      },

      mussoorie: {
        name: "Mussoorie",
        country: "Uttarakhand",
        history:
          "Surnommée la Reine des Collines, Mussoorie fut établie par les Britanniques en 1826. Située à 2 005 mètres, elle offre des vues splendides sur la vallée de Doon et les chaînes himalayennes. Gun Hill, Kempty Falls et Camel’s Back Road sont des attractions majeures."
      },

      srinagar: {
        name: "Srinagar",
        country: "Jammu-et-Cachemire",
        history:
          "Capitale d’été du Jammu-et-Cachemire, Srinagar est célèbre pour le lac Dal, les jardins moghols tels que Shalimar Bagh et Nishat Bagh, ainsi que ses houseboats traditionnels. Connue comme « le paradis sur Terre »."
      },

      jaisalmer: {
        name: "Jaisalmer",
        country: "Rajasthan",
        history:
          "Surnommée la Ville Dorée, Jaisalmer surgit du désert du Thar avec sa forteresse en grès jaune et ses havelis finement sculptées. Fondée en 1156, elle fut un centre commercial important sur les routes caravanières."
      },

      nainital: {
        name: "Nainital",
        country: "Uttarakhand",
        history:
          "Développée en 1841 autour du lac Naini, Nainital est entourée de sept collines. Son ambiance paisible et ses sites tels que le temple Naina Devi et Snow View Point attirent de nombreux visiteurs."
      },

      vrindavan: {
        name: "Vrindavan",
        country: "Uttar Pradesh",
        history:
          "L’un des lieux les plus sacrés de l’hindouisme, considéré comme le lieu d’enfance de Krishna. Avec plus de 5 000 temples, dont Banke Bihari et ISKCON, Vrindavan est une destination majeure de pèlerinage."
      },

      haridwar: {
        name: "Haridwar",
        country: "Uttarakhand",
        history:
          "L’une des sept villes les plus sacrées de l’hindouisme, Haridwar marque l’endroit où le Gange entre dans les plaines. Hôte du Kumbh Mela tous les 12 ans, Haridwar est célèbre pour l’Aarti du Gange à Har Ki Pauri."
      },
        mumbai: {
        name: "Mumbai",
        country: "Maharashtra",
        history:
          "Capitale financière de l’Inde et ville des rêves, Mumbai était à l’origine un ensemble de sept îles. Elle abrite Bollywood, la Porte de l’Inde, Marine Drive et un mélange unique d’architecture coloniale et de gratte-ciel modernes."
      },

      bengaluru: {
        name: "Bengaluru",
        country: "Karnataka",
        history:
          "Surnommée la Silicon Valley de l’Inde, Bengaluru fut fondée en 1537 par Kempe Gowda. La ville associe des sites historiques tels que le Palais de Bangalore et le Palais d’Été de Tipu Sultan à de magnifiques parcs comme Lalbagh et Cubbon Park, tout en étant un centre technologique majeur."
      },

      goa: {
        name: "Goa",
        country: "Goa",
        history:
          "Ancienne colonie portugaise jusqu’en 1961, Goa est le plus petit État de l’Inde et est célèbre pour ses plages magnifiques, sa vie nocturne vibrante et son architecture coloniale. La Basilique du Bon Jésus, la Cathédrale Sainte-Catherine et le Fort Aguada mettent en valeur l’héritage portugais."
      },

      kerala: {
        name: "Kerala",
        country: "Kerala",
        history:
          "Surnommé « Le pays de Dieu », le Kerala est connu pour ses backwaters, ses traitements ayurvédiques et ses paysages verdoyants. Sa culture unique comprend la danse kathakali, les courses de bateaux serpent et une riche cuisine à base de noix de coco et d’épices."
      },

      hyderabad: {
        name: "Hyderabad",
        country: "Telangana",
        history:
          "Fondée en 1591 par Muhammad Quli Qutb Shah, Hyderabad est réputée pour son histoire riche, son biryani et son commerce de perles. Le Charminar, le Fort de Golconde et les tombes Qutb Shahi représentent l’héritage nizami. Aujourd’hui, la ville est un centre informatique majeur."
      },

      chennai: {
        name: "Chennai",
        country: "Tamil Nadu",
        history:
          "Autrefois appelée Madras, Chennai est la capitale du Tamil Nadu et la porte d’entrée de la culture sud-indienne. Fondée par les Britanniques en 1639, elle abrite Marina Beach (l’une des plus longues plages urbaines du monde), le temple Kapaleeshwarar et Fort St. George."
      },

      kochi: {
        name: "Kochi",
        country: "Kerala",
        history:
          "Surnommée la Reine de la mer d’Arabie, Kochi est un ancien centre du commerce des épices. Elle présente un mélange d’influences portugaises, néerlandaises et britanniques visibles à Fort Kochi, aux filets de pêche chinois, au Palais Mattancherry et aux plus anciennes églises européennes d’Inde."
      },

      mysuru: {
        name: "Mysuru",
        country: "Karnataka",
        history:
          "Capitale culturelle du Karnataka, Mysuru fut autrefois la cité royale de la dynastie Wodeyar. Le Palais de Mysore, illuminé par 100 000 lumières pendant le festival Dasara, est un chef-d’œuvre indo-sarrasin. La ville est connue pour ses saris en soie, son santal et son héritage yogique."
      },

      madurai: {
        name: "Madurai",
        country: "Tamil Nadu",
        history:
          "L’une des plus anciennes villes de l’Inde, Madurai remonte au IIIᵉ siècle av. J.-C. Le Temple Meenakshi Amman, avec ses gopurams recouverts de milliers de statues colorées, est un chef-d’œuvre architectural. La ville fut un centre majeur de la culture tamoule durant l’ère Sangam."
      },

      alleppey: {
        name: "Alleppey",
        country: "Kerala",
        history:
          "Surnommée la Venise de l’Est, Alleppey (Alappuzha) est célèbre pour ses backwaters, canaux et lagunes. Les croisières en houseboat offrent un aperçu unique de la vie rurale du Kerala. La course de bateaux Nehru Trophy est un spectacle impressionnant."
      },

      ooty: {
        name: "Ooty",
        country: "Tamil Nadu",
        history:
          "Appelée la Reine des Collines, Ooty (Udhagamandalam) fut développée par les Britanniques comme station d’été. Située à 2 240 mètres dans les Nilgiris, elle est connue pour son architecture coloniale, le chemin de fer de montagne Nilgiri (UNESCO), ses jardins et ses plantations de thé."
      },

      coorg: {
        name: "Coorg",
        country: "Karnataka",
        history:
          "Surnommée l’Écosse de l’Inde, Coorg (Kodagu) est célèbre pour ses plantations de café, ses collines brumeuses et sa culture kodava unique. Avant la domination britannique en 1834, la région était gouvernée par des chefs kodavas. Abbey Falls et Raja’s Seat sont des attractions populaires."
      },

      hampi: {
        name: "Hampi",
        country: "Karnataka",
        history:
          "Site du patrimoine mondial de l’UNESCO, Hampi fut la capitale de l’Empire Vijayanagara (1336-1565). Ses ruines spectaculaires couvrent plus de 4 100 hectares et comprennent des temples, des structures royales et des marchés entourés d’un paysage rocheux unique."
      },

      pondicherry: {
        name: "Pondichéry",
        country: "Puducherry",
        history:
          "Ancienne colonie française jusqu’en 1954, Pondichéry conserve une forte influence gauloise dans son architecture, sa cuisine et sa culture. Le Quartier Français, l’Ashram de Sri Aurobindo et Auroville en font une fusion harmonieuse de l’Orient et de l’Occident."
      },
        visakhapatnam: {
        name: "Visakhapatnam",
        country: "Andhra Pradesh",
        history:
          "Surnommée la Ville de la Destinée et le Joyau de la côte est, Visakhapatnam (Vizag) est une grande ville portuaire dotée de plages, de collines et de vallées. Le temple ancien de Simhachalam, les grottes de Borra et le musée sous-marin INS Kurusura témoignent de sa richesse naturelle et culturelle."
      },

      tirupati: {
        name: "Tirupati",
        country: "Andhra Pradesh",
        history:
          "Abritant le sacré temple de Tirumala Venkateswara, Tirupati est l’un des lieux de pèlerinage les plus visités au monde. Le temple possède des origines anciennes et une architecture reflétant diverses dynasties qui ont marqué la région."
      },

      kolkata: {
        name: "Kolkata",
        country: "Bengale-Occidental",
        history:
          "Surnommée la Ville de la Joie et ancienne capitale de l’Inde britannique, Kolkata est un centre culturel et intellectuel majeur. Fondée en 1690, la ville abrite des monuments coloniaux tels que le Victoria Memorial et le pont Howrah. Elle fut également le cœur de la Renaissance bengalie."
      },

      gangtok: {
        name: "Gangtok",
        country: "Sikkim",
        history:
          "Située à 1 650 mètres d’altitude, Gangtok est la capitale du Sikkim et offre des vues impressionnantes sur le Kangchenjunga. Elle combine culture bouddhiste tibétaine — avec des monastères comme Rumtek et Enchey — et modernité. Elle sert de porte d’entrée vers les vallées du nord du Sikkim."
      },

      shillong: {
        name: "Shillong",
        country: "Meghalaya",
        history:
          "Appelée l’Écosse de l’Est, Shillong fut la capitale de l’Assam jusqu’en 1972 et est aujourd’hui celle du Meghalaya. Située à 1 496 mètres, elle est entourée de collines de pins, de cascades comme Elephant Falls et possède une scène musicale dynamique qui lui vaut le titre de « capitale du rock en Inde »."
      },

      darjeeling: {
        name: "Darjeeling",
        country: "Bengale-Occidental",
        history:
          "Surnommée la Reine des Collines, Darjeeling est mondialement connue pour ses plantations de thé et le Chemin de fer himalayen de Darjeeling (classé UNESCO). Située à 2 042 mètres, elle offre une vue spectaculaire du Kangchenjunga depuis Tiger Hill, ainsi qu'une architecture coloniale et des monastères tibétains."
      },
        puri: {
        name: "Puri",
        country: "Odisha",
        history:
          "L’un des quatre sites sacrés du Char Dham, Puri abrite le temple de Jagannath datant du XIIe siècle. Son célèbre festival Rath Yatra attire des millions de fidèles. La plage de Puri et le temple du Soleil de Konark (UNESCO) en font un important centre spirituel et touristique."
      },

      guwahati: {
        name: "Guwahati",
        country: "Assam",
        history:
          "Porte d’entrée du nord-est de l’Inde, Guwahati est la plus grande ville de l’Assam, située sur les rives du Brahmapoutre. L’ancien temple de Kamakhya, perché sur la colline Nilachal, est un haut lieu de pèlerinage. La ville est également un centre éducatif et commercial en plein développement."
      },

      kohima: {
        name: "Kohima",
        country: "Nagaland",
        history:
          "Située à 1 444 mètres d’altitude, Kohima est la capitale du Nagaland et célèbre pour la bataille de Kohima de 1944, un événement crucial de la Seconde Guerre mondiale. Le cimetière militaire de Kohima rend hommage aux soldats tombés. Le festival Hornbill de décembre met en valeur la culture des tribus naga."
      },

      itanagar: {
        name: "Itanagar",
        country: "Arunachal Pradesh",
        history:
          "Capitale de l’Arunachal Pradesh, Itanagar — qui signifie « fort de briques » — possède les ruines du fort Ita datant du XIVᵉ-XVᵉ siècle. La ville abrite également le monastère Buddha Vihar, le parc Polo et est la porte d’accès aux vallées tribales de l’État."
      },

      bhubaneswar: {
        name: "Bhubaneswar",
        country: "Odisha",
        history:
          "Connue comme la Ville des Temples, Bhubaneswar possède plus de 500 temples construits entre le VIe et le XIIIe siècle, représentant l’architecture Kalinga. Parmi les plus célèbres figurent les temples Lingaraj, Mukteshwar et Rajarani. La ville combine harmonieusement héritage ancien et urbanisme moderne."
      },

      portblair: {
        name: "Port Blair",
        country: "Îles Andaman-et-Nicobar",
        history:
          "Capitale des îles Andaman-et-Nicobar, Port Blair est la porte d’entrée de ce paradis tropical. La prison cellulaire historique, autrefois utilisée par les Britanniques pour exiler les prisonniers politiques, est aujourd’hui un monument national. Les îles offrent des plages immaculées, des récifs coralliens et une riche biodiversité marine."
      },

      pelling: {
        name: "Pelling",
        country: "Sikkim",
        history:
          "Ville pittoresque située à 2 150 mètres dans l’ouest du Sikkim, Pelling offre des vues extraordinaires sur le Kangchenjunga. Elle abrite l'ancien monastère Pemayangtse et les ruines de Rabdentse, ancienne capitale du Sikkim. Le skywalk et la statue de Chenrezig comptent parmi les nouvelles attractions."
      },

      tawang: {
        name: "Tawang",
        country: "Arunachal Pradesh",
        history:
          "Située à 3 048 mètres d'altitude, Tawang abrite le plus grand monastère de l'Inde, fondé en 1680 et abritant plus de 450 moines. C'est aussi le lieu de naissance du sixième Dalaï-Lama. Le col de Sela, le lac Madhuri et le mémorial de la guerre de 1962 sont des attractions majeures."
      },

      cherrapunji: {
        name: "Cherrapunji",
        country: "Meghalaya",
        history:
          "Autrefois l'endroit le plus humide de la planète, Cherrapunji (Sohra) reçoit de très fortes pluies de mousson qui créent des cascades spectaculaires comme Nohkalikai et Seven Sisters. Les ponts vivants en racines d’arbres, créés par la tribu Khasi, sont reconnus par l’UNESCO."
      },
        imphal: {
        name: "Imphal",
        country: "Manipur",
        history:
          "Capitale du Manipur située à 790 mètres d’altitude, Imphal a joué un rôle important durant la Seconde Guerre mondiale. Le fort Kangla fut pendant des siècles la résidence des souverains du Manipur. Le lac Loktak, le plus grand lac d’eau douce du nord-est de l’Inde, est célèbre pour ses îles flottantes appelées phumdis. Le parc national de Keibul Lamjao abrite le rare cerf sangai."
      },

      aizawl: {
        name: "Aizawl",
        country: "Mizoram",
        history:
          "Capitale du Mizoram, Aizawl est perchée à 1 132 mètres et offre de magnifiques vues sur les collines environnantes. La ville reflète la culture mizo à travers ses maisons en bambou, ses textiles artisanaux et ses festivals vivants. Le Temple de Solomon, le Musée d’État du Mizoram et les collines de Durtlang sont des attractions majeures."
      },

      agartala: {
        name: "Agartala",
        country: "Tripura",
        history:
          "Capitale du Tripura, Agartala abrite le splendide palais Ujjayanta, construit en 1901 et aujourd’hui transformé en musée. Le palais aquatique Neermahal, situé au milieu du lac Rudrasagar, et le temple Tripura Sundari témoignent de la richesse culturelle de la région."
      },

      khajuraho: {
        name: "Khajuraho",
        country: "Madhya Pradesh",
        history:
          "Site du patrimoine mondial de l’UNESCO, Khajuraho est célèbre pour ses temples hindous et jaïns médiévaux construits entre 950 et 1050 par la dynastie Chandela. Les temples sont connus pour leurs sculptures détaillées représentant divers aspects de la vie, y compris des scènes érotiques emblématiques."
      },

      bhopal: {
        name: "Bhopal",
        country: "Madhya Pradesh",
        history:
          "Connue comme la Ville des Lacs et capitale du Madhya Pradesh, Bhopal associe architecture ancienne et moderne. Parmi ses sites remarquables figurent la mosquée Taj-ul-Masajid, l’une des plus grandes d’Asie, et le stupa de Sanchi (UNESCO). La ville porte également la mémoire du tragique désastre industriel de 1984."
      },

      gwalior: {
        name: "Gwalior",
        country: "Madhya Pradesh",
        history:
          "Surnommée « la perle des forts indiens », Gwalior est célèbre pour son immense fort perché sur une colline, abritant palais, temples sculptés et le célèbre Temple Teli Ka Mandir. La ville est également réputée pour son importante contribution à la musique classique hindoustanie."
      },

      indore: {
        name: "Indore",
        country: "Madhya Pradesh",
        history:
          "Capitale commerciale du Madhya Pradesh et considérée comme la ville la plus propre de l’Inde, Indore fut fondée par la dynastie Holkar en 1715. Le palais Rajwada, le palais Lal Bagh et les marchés animés reflètent son riche patrimoine. La ville est aussi célèbre pour sa culture gastronomique."
      },

      orchha: {
        name: "Orchha",
        country: "Madhya Pradesh",
        history:
          "Fondée en 1531, Orchha est une perle cachée qui servait de capitale aux chefs rajputs Bundela. Située sur une île de la rivière Betwa, elle abrite des palais et temples magnifiques tels que Jahangir Mahal, Raj Mahal et le Temple Ram Raja."
      },

      ujjain: {
        name: "Ujjain",
        country: "Madhya Pradesh",
        history:
          "L’une des sept villes sacrées (Sapta Puri) de l’hindouisme, Ujjain accueille le Kumbh Mela tous les 12 ans. Le temple Mahakaleshwar, l’un des douze jyotirlingas, abrite une statue unique de Shiva orientée vers le sud. Ujjain fut aussi un centre majeur d’astronomie et de mathématiques dans l’Inde ancienne."
      },

      ranchi: {
        name: "Ranchi",
        country: "Jharkhand",
        history:
          "Capitale du Jharkhand, Ranchi servit de station estivale durant l’époque britannique grâce à son climat agréable. Surnommée la « Ville des Cascades », elle possède des chutes telles que Hundru, Jonha et Dassam. C’est aussi la ville natale du célèbre joueur de cricket M. S. Dhoni."
      },

      daman: {
        name: "Daman",
        country: "Daman et Diu",
        history:
          "Ancienne colonie portugaise jusqu’en 1961, Daman conserve un charme colonial avec ses forts, ses églises et ses plages tranquilles. Le fort de Moti Daman et le fort de Saint Jérôme sont des points d’intérêt majeurs."
      },

      silvassa: {
        name: "Silvassa",
        country: "Dadra et Nagar Haveli",
        history:
          "Capitale de Dadra et Nagar Haveli, Silvassa est entourée de collines et de forêts. Elle est connue pour l’art warli, le lac Vanganga et ses parcs naturels. Aujourd’hui, c’est un centre industriel en plein essor qui conserve son patrimoine tribal."
      },

      nagpur: {
        name: "Nagpur",
        country: "Maharashtra",
        history:
          "Surnommée la Ville des Oranges et capitale d’hiver du Maharashtra, Nagpur est située au centre géographique de l’Inde. Elle abrite Deekshabhoomi, un important centre bouddhiste où B. R. Ambedkar adopta le bouddhisme. La ville est également réputée pour sa proximité avec des réserves de tigres."
      },

      raipur: {
        name: "Raipur",
        country: "Chhattisgarh",
        history:
          "Capitale du Chhattisgarh, Raipur possède des racines remontant au IXe siècle. Elle est la porte d’entrée vers des temples anciens, des sites bouddhistes et des villages tribaux de la région de Sirpur. Le musée Mahant Ghasi Das abrite des artefacts importants."
      },

      jabalpur: {
        name: "Jabalpur",
        country: "Madhya Pradesh",
        history:
          "Située sur les rives de la Narmada, Jabalpur est célèbre pour les Roches de Marbre de Bhedaghat, où la rivière traverse des falaises de marbre de 30 mètres. Les chutes Dhuandhar et les anciens forts gondi mettent en valeur son importance historique et naturelle."
      },

      pachmarhi: {
        name: "Pachmarhi",
        country: "Madhya Pradesh",
        history:
          "Unique station de montagne du Madhya Pradesh, Pachmarhi est perchée à 1 067 mètres dans la chaîne des Satpura. Découverte en 1857, elle possède une architecture coloniale, des grottes préhistoriques avec des peintures rupestres et de nombreuses cascades."
      },

      amarkantak: {
        name: "Amarkantak",
        country: "Madhya Pradesh",
        history:
          "Lieu sacré situé à 1 065 mètres d’altitude, Amarkantak est la source des rivières Narmada et Son. Le bassin sacré Narmada Kund et les jardins Mai Ki Bagiya attirent pèlerins et amoureux de la nature."
      },

      chitrakoot: {
        name: "Chitrakoot",
        country: "Madhya Pradesh / Uttar Pradesh",
        history:
          "Ville d’une grande importance religieuse, Chitrakoot est considérée comme le lieu où Rama, Sita et Lakshmana ont passé 11 années de leur exil selon le Ramayana. Le temple Kamadgiri, Ramghat et les nombreux ashrams en font un site majeur de pèlerinage."
      },
        bhimbetka: {
        name: "Bhimbetka",
        country: "Madhya Pradesh",
        history:
          "Site classé au patrimoine mondial de l’UNESCO, Bhimbetka abrite plus de 500 abris rocheux ornés de peintures préhistoriques datant d’il y a jusqu’à 30 000 ans. Ces peintures illustrent des scènes de chasse, de danse, de rituels et de vie quotidienne, offrant un aperçu unique de l’évolution humaine depuis l’âge de pierre."
      }
    },
     houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: 'Hôtels-péniches à Alleppey Alappuzha Kerala',
      houseboatsHotelsInMunnar: 'Hôtels-péniches à Munnar',
      houseboatsHotelsInCochin: 'Hôtels-péniches à Cochin',
      houseboatsHotelsInKumarakomLake: 'Hôtels-péniches au lac Kumarakom',
      houseboatsHotelsInKottayam: 'Hôtels-péniches à Kottayam',
      houseboatsHotelsInAlleppey: 'Hôtels-péniches à Alleppey',
      houseboatsHotelsInChottanikara: 'Hôtels-péniches à Chottanikara',
      houseboatsHotelsInThiruvananthapuram: 'Hôtels-péniches à Thiruvananthapuram',
      houseboatsHotelsInKovalamBeach: 'Hôtels-péniches à la plage de Kovalam',
      houseboatsHotelsInThekkady: 'Hôtels-péniches à Thekkady',
      houseboatsHotelsInWayanad: 'Hôtels-péniches à Wayanad',
      houseboatsHotelsInAlappuzha: 'Hôtels-péniches à Alappuzha',
      houseboatsHotelsInGuruvayur: 'Hôtels-péniches à Guruvayur',
      houseboatsHotelsInVagamon: 'Hôtels-péniches à Vagamon',
      houseboatsHotelsInAthirapillyWaterFalls: 'Hôtels-péniches aux chutes d\'Athirapilly',
      houseboatsHotelsInMarariBeach: 'Hôtels-péniches à la plage de Marari',
      houseboatsHotelsInPoovarBeach: 'Hôtels-péniches à la plage de Poovar',
      houseboatsHotelsInVarkalaBeach: 'Hôtels-péniches à la plage de Varkala',
      houseboatsHotelsInAshtamudiLake: 'Hôtels-péniches au lac Ashtamudi',
      houseboatsHotelsInKanyakumariBeach: 'Hôtels-péniches à la plage de Kanyakumari',
      houseboatsHotelsInAlleppeyBeach: 'Hôtels-péniches à la plage d\'Alleppey',
      houseboatsHotelsInAlappuzhaLake: 'Hôtels-péniches au lac d\'Alappuzha',
      houseboatsHotelsInIndia: 'Hôtels-péniches en Inde',
      houseboatsHotelsInKerala: 'Hôtels-péniches au Kerala',
      houseBoatHotelsInAlleppey: 'Hôtels-péniches à Alleppey',
      boatHouseHotelsInIndia: 'Hôtels-péniches en Inde',
      boatHouseHotelsInKerala: 'Hôtels-péniches au Kerala',
      sharingHouseboatsHotelsInAlleppey: 'Hôtels-péniches partagés à Alleppey',
      sharingBoatHouseHotelsInKerala: 'Hôtels-péniches partagés au Kerala',
      dayTripHouseboatsHotelsInAlleppey: 'Hôtels-péniches pour excursion d\'une journée à Alleppey',
      dayCruiseHouseboatsHotelsInAlleppey: 'Hôtels-péniches pour croisière d\'une journée à Alleppey',
      fiveStarHouseboatsHotelsInAlleppey: 'Hôtels-péniches 5 étoiles à Alleppey',
      fourStarHouseboatsHotelsInAlleppey: 'Hôtels-péniches 4 étoiles à Alleppey',
      threeStarHouseboatsHotelsInAlleppey: 'Hôtels-péniches 3 étoiles à Alleppey',
      twoStarHouseboatsHotelsInAlleppey: 'Hôtels-péniches 2 étoiles à Alleppey',
      budgetHouseboatsHotelsInAlleppey: 'Hôtels-péniches économiques à Alleppey',
      standardBoatHouseHotelsInAlleppey: 'Hôtels-péniches standard à Alleppey'
    }
    ,
    destinationFeed: {
      loadingMore: 'Chargement de plus d\'offres...',
      inquiryTitle: 'Avez-vous des questions? Contactez-nous!',
      inquirySubtitle: 'Envoyez-nous votre demande et notre équipe vous répondra dans les 24 heures',
      yourName: 'Votre nom *',
      yourEmail: 'Votre e-mail *',
      phoneNumber: 'Numéro de téléphone',
      subject: 'Sujet',
      yourMessage: 'Votre message *',
      sendInquiry: 'Envoyer la demande',
      "bookViaWhatsapp": "Réserver via WhatsApp",
      scrollToInquiryAria: 'Faire défiler jusqu\'au formulaire de demande'
    },
  popularDestinations: {
    title: 'Explorez plus de destinations en Inde',
    subtitle: 'Trouvez des choses à faire dans les villes de différents États',
    thingsToDo: 'choses à faire',
    comingSoonTitle: 'Bientôt disponible !',
    comingSoonDescription: "Nous ajoutons des destinations incroyables à {{continent}}. Revenez bientôt!",
    northIndia: 'Destinations de l\'Inde du Nord',
    southIndia: 'Destinations de l\'Inde du Sud',
    eastIndia: 'Destinations de l\'Inde de l\'Est et du Nord-Est',
    centralIndia: 'Destinations de l\'Inde Centrale',
    delhi: {
      name: 'Delhi',
      country: 'Delhi',
      history: 'Delhi, la capitale de l\'Inde, possède une histoire riche s\'étendant sur plus de 2 000 ans. La ville est parsemée de mosquées, de forts et de monuments envoûtants laissés par les dirigeants moghols. Du majestueux Fort Rouge à l\'emblématique Porte de l\'Inde, Delhi mêle patrimoine ancien et infrastructures modernes, ce qui en fait une destination incontournable.'
    },
    jaipur: {
      name: 'Jaipur',
      country: 'Rajasthan',
      history: "Connue sous le nom de Ville Rose, Jaipur est la capitale du Rajasthan et fait partie du Triangle d\'Or de l\'Inde. Fondée en 1727, la ville est célèbre pour ses palais royaux, ses magnifiques forts comme le Fort d\'Amber, Hawa Mahal, et ses bazars animés. Jaipur met en valeur la grandeur de l\'architecture et de la culture Rajput."
    },
    agra: {
      name: 'Agra',
      country: 'Uttar Pradesh',
      history: "Abritant le magnifique Taj Mahal, l\'une des Sept Merveilles du Monde, Agra fut la capitale de l\'Empire Moghol de 1556 à 1658. La ville présente une architecture moghole époustouflante, notamment le Fort d\'Agra et Fatehpur Sikri, témoignant de l\'apogée de la réalisation artistique moghole."
    },
    varanasi: {
      name: 'Varanasi',
      country: 'Uttar Pradesh',
      history: 'L\'une des plus anciennes villes continuellement habitées au monde, Varanasi est un centre religieux majeur pour les hindous. Située sur les rives du fleuve sacré Gange, la ville est connue pour ses ghats, ses temples anciens et sa signification spirituelle. Mark Twain a dit un jour : "Bénarès est plus vieille que l\'histoire, plus vieille que la tradition, plus vieille même que la légende."'
    },
    amritsar: {
      name: 'Amritsar',
      country: 'Punjab',
      history: "Fondée en 1577 par Guru Ram Das, Amritsar abrite le Temple d\'Or, le sanctuaire le plus sacré du sikhisme. La ville a été le théâtre du tragique massacre de Jallianwala Bagh en 1919 et se dresse comme un symbole du patrimoine, de la spiritualité et de la résilience sikhs. La cérémonie de la frontière de Wagah est une attraction majeure."
    },
    manali: {
      name: 'Manali',
      country: 'Himachal Pradesh',
      history: "Niché dans l\'Himalaya à une altitude de 2 050 mètres, Manali est une station de montagne populaire connue pour sa beauté pittoresque, ses sports d\'aventure et son ancien temple Hadimba. La vallée offre des vues à couper le souffle sur les sommets enneigés, les vergers de pommiers, et sert de porte d\'entrée au col de Rohtang et à la vallée de Solang."
    },
    leh: {
      name: 'Leh',
      country: 'Ladakh',
      history: "Capitale du Ladakh, Leh se trouve à 3 500 mètres et était autrefois une étape majeure sur l\'ancienne Route de la Soie. Connue pour ses paysages austères et dramatiques, ses monastères bouddhistes et ses lacs de haute altitude comme Pangong Tso, Leh offre un mélange unique de culture tibétaine et de paysages himalayens à couper le souffle."
    },
    rishikesh: {
      name: 'Rishikesh',
      country: 'Uttarakhand',
      history: "Surnommée la Capitale Mondiale du Yoga, Rishikesh est une ville spirituelle sur les rives du Gange. Célèbre pour ses ashrams, ses centres de yoga et l\'emblématique pont Laxman Jhula, la ville attire aussi bien les chercheurs spirituels que les amateurs d\'aventure. La visite des Beatles en 1968 l\'a rendue célèbre internationalement."
    },
    udaipur: {
      name: 'Udaipur',
      country: 'Rajasthan',
      history: "Appelée la Ville des Lacs et la Venise de l\'Est, Udaipur a été fondée en 1559 par Maharana Udai Singh II. La ville présente des palais magnifiques comme le City Palace et le Lake Palace, de beaux lacs comme Pichola et Fateh Sagar, et illustre l\'architecture romantique du Rajasthan."
    },
    shimla: {
      name: 'Shimla',
      country: 'Himachal Pradesh',
      history: "Ancienne capitale d\'été de l\'Inde britannique, Shimla conserve un charme colonial avec son architecture victorienne, notamment le Viceregal Lodge et la Christ Church. Située au pied de l\'Himalaya, elle offre des vues panoramiques sur la montagne, la célèbre Mall Road et le chemin de fer Kalka-Shimla, classé au patrimoine mondial de l\'UNESCO."
    },
    mussoorie: {
      name: 'Mussoorie',
      country: 'Uttarakhand',
      history: "Connue sous le nom de Reine des Collines, Mussoorie est une charmante station de montagne établie par les Britanniques en 1826. Située à 2 005 mètres, elle offre des vues sur la vallée de Doon et les chaînes de l\'Himalaya. Gun Hill, les chutes Kempty et la route Camel\'s Back Road sont des attractions populaires dans cette retraite de l\'ère coloniale."
    },
    srinagar: {
      name: 'Srinagar',
      country: 'Jammu & Kashmir',
      history: 'Capitale d\'été du Jammu-et-Cachemire, Srinagar est célèbre pour son lac Dal, ses jardins moghols comme Shalimar Bagh et Nishat Bagh, et ses péniches traditionnelles. La beauté de la ville a inspiré poètes et voyageurs pendant des siècles, lui valant le titre de "Paradis sur Terre."'
    },
    jaisalmer: {
      name: 'Jaisalmer',
      country: 'Rajasthan',
      history: "La Ville d\'Or s\'élève du désert du Thar avec son fort en grès jaune et ses havelis. Fondée en 1156, Jaisalmer était un important centre commercial sur les routes des caravanes de chameaux. Le Fort de Jaisalmer, les Dunes de Sable de Sam et les havelis aux sculptures complexes mettent en valeur l\'architecture Rajput à son meilleur."
    },
    nainital: {
      name: 'Nainital',
      country: 'Uttarakhand',
      history: "Construite autour du magnifique lac Naini à 2 084 mètres, Nainital a été développée comme station de montagne par les Britanniques en 1841. Le lac en forme de poire, entouré de sept collines, crée une atmosphère sereine. Le Temple Naina Devi, Snow View Point et les promenades en bateau sur le lac sont des attractions majeures."
    },
    vrindavan: {
      name: 'Vrindavan',
      country: 'Uttar Pradesh',
      history: "L\'une des villes les plus sacrées de l\'hindouisme, Vrindavan est l\'endroit où le Seigneur Krishna est censé avoir passé son enfance. Avec plus de 5 000 temples, dont le célèbre Temple Banke Bihari et le Temple ISKCON, la ville est un lieu de pèlerinage majeur et célèbre Holi avec une ferveur inégalée."
    },
    haridwar: {
      name: 'Haridwar',
      country: 'Uttarakhand',
      history: "L\'un des sept lieux les plus sacrés de l\'hindouisme, Haridwar est l\'endroit où le fleuve Gange entre dans les plaines. La ville accueille le Kumbh Mela tous les 12 ans, attirant des millions de pèlerins. La cérémonie du soir Ganga Aarti au ghat Har Ki Pauri est une expérience spirituelle fascinante qui est pratiquée depuis des siècles."
    },
    mumbai: {
      name: 'Mumbai',
      country: 'Maharashtra',
      history: "Capitale financière de l\'Inde et ville des rêves, Mumbai était à l\'origine sept îles données à la Grande-Bretagne dans le cadre de la dot de Catherine de Bragance en 1661. La ville abrite la Porte de l\'Inde, Marine Drive, l\'industrie cinématographique de Bollywood et reflète un mélange unique d\'architecture coloniale et de gratte-ciel modernes."
    },
    bengaluru: {
      name: 'Bengaluru',
      country: 'Karnataka',
      history: "Surnommée la Silicon Valley de l\'Inde et la Ville Jardin, Bengaluru a été fondée par Kempe Gowda en 1537. La ville allie prouesses informatiques et sites patrimoniaux comme le Palais de Bangalore, le Palais d\'Été de Tipu Sultan et de beaux parcs, notamment le Jardin Botanique Lalbagh et Cubbon Park."
    },
    goa: {
      name: 'Goa',
      country: 'Goa',
      history: "Ancienne colonie portugaise jusqu\'en 1961, Goa est le plus petit État de l\'Inde, connu pour ses superbes plages, sa vie nocturne animée et son architecture coloniale. La Basilique de Bom Jesus, la Cathédrale Sé et le Fort Aguada mettent en valeur le patrimoine portugais, tandis que des plages comme Baga et Palolem attirent des touristes du monde entier."
    },
    kerala: {
      name: 'Kerala',
      country: 'Kerala',
      history: 'Appelé "Le Propre Pays de Dieu", le Kerala est célèbre pour ses backwaters, ses traitements ayurvédiques et ses paysages verdoyants luxuriants. L\'État a une riche histoire de commerce avec les Romains, les Arabes et les Européens. La culture unique du Kerala comprend la danse Kathakali, les courses de bateaux serpents et la cuisine traditionnelle à base de noix de coco et d\'épices.'
    },
    hyderabad: {
      name: 'Hyderabad',
      country: 'Telangana',
      history: "Fondée en 1591 par Muhammad Quli Qutb Shah, Hyderabad est connue pour sa riche histoire, son biryani et son commerce de perles. L\'emblématique Charminar, le Fort de Golconda et les tombeaux de Qutb Shahi représentent le patrimoine Nizami de la ville. Désormais un centre informatique majeur, elle équilibre magnifiquement tradition et modernité."
    },
    chennai: {
      name: 'Chennai',
      country: 'Tamil Nadu',
      history: "Anciennement Madras, Chennai est la capitale du Tamil Nadu et la porte d\'entrée de la culture de l\'Inde du Sud. Fondée par les Britanniques en 1639, la ville présente la plage de Marina (la deuxième plus longue plage urbaine du monde), le temple Kapaleeshwarar, le Fort St. George, et est réputée pour la musique carnatique classique et la danse Bharatanatyam."
    },
    kochi: {
      name: 'Kochi',
      country: 'Kerala',
      history: "La Reine de la Mer d\'Arabie, Kochi (Cochin) a été un centre commercial d\'épices majeur depuis l\'Antiquité. La ville présente un mélange d\'influences coloniales portugaises, néerlandaises et britanniques avec des attractions comme Fort Kochi, les filets de pêche chinois, le Palais Mattancherry et la plus ancienne église européenne en Inde."
    },
    mysuru: {
      name: 'Mysuru',
      history: 'Capitale culturelle du Karnataka, Mysuru (Mysore) a été la capitale de la dynastie Wodeyar. Le magnifique Palais de Mysore, illuminé par 100 000 lumières pendant le festival de Dasara, met en valeur l\'architecture indo-sarrasine. La ville est célèbre pour ses saris de soie, ses produits en bois de santal et le yoga.'
    },
    madurai: {
      name: 'Madurai',
      history: "L\'une des plus anciennes villes de l\'Inde, Madurai remonte au IIIe siècle avant notre ère. Le Temple Meenakshi Amman, avec ses imposants gopurams recouverts de milliers de sculptures colorées, est une merveille architecturale. La ville était un centre majeur d\'apprentissage et de culture tamouls pendant la période Sangam."
    },
    alleppey: {
      name: 'Alleppey',
      history: "Connue comme la Venise de l\'Est, Alappuzha (Alleppey) est célèbre pour son réseau de backwaters, de canaux et de lagons. Les croisières traditionnelles en péniche à travers des voies navigables bordées de palmiers offrent un aperçu unique de la vie villageoise du Kerala. La course de bateaux du Trophée Nehru, qui se tient chaque année, est un événement spectaculaire."
    },
    ooty: {
      name: 'Ooty',
      history: 'La Reine des Stations de Montagne, Udhagamandalam (Ooty) a été établie par les Britanniques comme une retraite d\'été. Située dans les collines de Nilgiri à 2 240 mètres, elle présente une architecture coloniale, le chemin de fer de montagne Nilgiri classé au patrimoine mondial de l\'UNESCO, des jardins botaniques et des plantations de thé avec des vues imprenables sur la vallée.'
    },
    coorg: {
      name: 'Coorg',
      history: "Surnommé l\'Écosse de l\'Inde, Kodagu (Coorg) est un district montagneux célèbre pour ses plantations de café, ses montagnes brumeuses et sa culture Kodava unique. La région a une tradition martiale et était gouvernée par les chefs Kodava avant l\'annexion britannique en 1834. Les chutes Abbey et Raja\'s Seat sont des attractions populaires."
    },
    hampi: {
      name: 'Hampi',
      history: 'Site du patrimoine mondial de l\'UNESCO, Hampi était la capitale de l\'Empire Vijayanagara (1336-1565), l\'un des plus grands royaumes hindous. Les ruines réparties sur 4 100 hectares comprennent des temples, des structures royales et des marchés, mettant en valeur une architecture dravidienne époustouflante au milieu d\'un paysage surréaliste parsemé de rochers.'
    },
    pondicherry: {
      name: 'Pondicherry',
      history: 'Ancienne colonie française jusqu\'en 1954, Pondichéry conserve de fortes influences gauloises dans son architecture, sa cuisine et sa culture. Le Quartier Français avec ses bâtiments coloniaux, ses boulevards bordés d\'arbres, l\'Ashram d\'Aurobindo et Auroville (ville expérimentale) en font un mélange unique d\'Orient et d\'Occident.'
    },
    visakhapatnam: {
      name: 'Visakhapatnam',
      history: "La Ville du Destin et Joyau de la Côte Est, Visakhapatnam (Vizag) est une ville portuaire majeure avec des plages immaculées, des collines et des vallées. L\'ancien temple Simhachalam, les grottes de Borra (formations de stalactites vieilles d\'un million d\'années) et le musée sous-marin INS Kursura présentent les diverses attractions de la ville."
    },
    tirupati: {
      name: 'Tirupati',
      history: "Abritant le temple sacré de Tirumala Venkateswara, l\'un des sites de pèlerinage les plus visités au monde, Tirupati reçoit des millions de fidèles chaque année. Les origines du temple remontent à l\'Antiquité, avec une architecture couvrant plusieurs dynasties. On croit que la divinité Lord Venkateswara exauce les vœux des fidèles."
    },
    kolkata: {
      name: 'Kolkata',
      history: 'La Ville de la Joie et ancienne capitale de l\'Inde britannique, Kolkata est un centre culturel et intellectuel. Fondée en 1690, elle présente une architecture coloniale comme le Victoria Memorial et le pont Howrah, tout en étant le berceau de la littérature, de l\'art et de la Renaissance bengalis modernes. Durga Puja est célébrée avec une grandeur inégalée.'
    },
    gangtok: {
      name: 'Gangtok',
      country: 'Sikkim',
      history: "La capitale du Sikkim à 1 650 mètres, Gangtok offre des vues imprenables sur le Kanchenjunga, le troisième plus haut sommet du monde. La ville mélange la culture bouddhiste tibétaine avec la modernité, avec des monastères comme Rumtek et Enchey, la zone piétonne MG Marg, et sert de porte d\'entrée vers les vallées immaculées du Nord Sikkim."
    },
    shillong: {
      name: 'Shillong',
      country: 'Meghalaya',
      history: 'L\'Écosse de l\'Est, Shillong fut la capitale de l\'Assam jusqu\'en 1972 et sert maintenant de capitale du Meghalaya. À 1 496 mètres, elle présente des collines couvertes de pins, des cascades comme Elephant Falls, des lacs pittoresques et une culture musicale vibrante qui lui a valu le titre de "Capitale du Rock de l\'Inde."'
    },
    darjeeling: {
      name: 'Darjeeling',
      country: 'West Bengal',
      history: 'La Reine des Collines, Darjeeling est mondialement célèbre pour ses plantations de thé et le Chemin de fer de l\'Himalaya de Darjeeling (Train Jouet), classé au patrimoine mondial de l\'UNESCO. À 2 042 mètres, il offre des vues du lever du soleil sur le Kanchenjunga depuis Tiger Hill, une architecture de l\'ère coloniale, des monastères bouddhistes tibétains et des activités d\'aventure.'
    },
    puri: {
      name: 'Puri',
      country: 'Odisha',
      history: 'L\'un des quatre sites sacrés de pèlerinage hindou (Char Dham), Puri abrite le Temple Jagannath du XIIe siècle. Le Rath Yatra (festival du char) annuel attire des millions de fidèles. La Plage de Puri et le Temple du Soleil de Konark (site de l\'UNESCO) à proximité en font une destination spirituelle et touristique importante.'
    },
    guwahati: {
      name: 'Guwahati',
      country: 'Assam',
      history: "La Porte d\'Entrée du Nord-Est de l\'Inde, Guwahati est la plus grande ville de l\'Assam située sur les rives du fleuve Brahmapoutre. L\'ancien Temple Kamakhya (Shakti Peetha) au sommet de la colline Nilachal est un important lieu de pèlerinage. La ville sert de centre commercial et éducatif de la région, classée 4e par le New York Times pour les destinations 2025."
    },
    kohima: {
      name: 'Kohima',
      country: 'Nagaland',
      history: 'La capitale du Nagaland à 1 444 mètres, Kohima est connue pour la Bataille de Kohima en 1944, un tournant de la Seconde Guerre mondiale. Le Cimetière de Guerre de Kohima commémore cette histoire. Le Festival Hornbill en décembre présente la culture tribale Naga, les arts traditionnels, les danses et la cuisine.'
    },
    itanagar: {
      name: 'Itanagar',
      country: 'Arunachal Pradesh',
      history: 'La capitale de l\'Arunachal Pradesh, Itanagar signifie "Fort de Briques". Les ruines du Fort Ita des XIVe-XVe siècles montrent une importance historique. La ville présente le magnifique monastère Gompa Buddha Vihar, Polo Park, et sert de porte d\'entrée pour explorer les vallées immaculées, les villages tribaux et les monastères de l\'Arunachal.'
    },
    bhubaneswar: {
      name: 'Bhubaneswar',
      country: 'Odisha',
      history: "La Ville des Temples de l\'Inde, Bhubaneswar possède plus de 500 temples datant du VIe au XIIIe siècle, mettant en valeur l\'architecture Kalinga. Le Temple Lingaraja, le Temple Mukteshwar et le Temple Rajarani sont des merveilles architecturales. La ville équilibre le patrimoine ancien avec la planification urbaine moderne en tant que capitale de l\'Odisha."
    },
    portblair: {
      name: 'Port Blair',
      country: 'Andaman and Nicobar Islands',
      history: "Capitale des îles Andaman et Nicobar, Port Blair est la porte d\'entrée du paradis tropical de l\'Inde. La prison cellulaire historique, utilisée par les Britanniques pour exiler des prisonniers politiques, sert maintenant de mémorial national. Les îles offrent des plages immaculées, des récifs coralliens et une riche biodiversité marine."
    },
    pelling: {
      name: 'Pelling',
      country: 'Sikkim',
      history: "Ville pittoresque du Sikkim occidental à 2 150 mètres, Pelling offre des vues à couper le souffle sur le Kanchenjunga. L\'ancien monastère de Pemayangtse et les ruines de Rabdentse (ancienne capitale du Sikkim) mettent en valeur le patrimoine bouddhiste de la région. Skywalk et la statue de Chenrezig sont des attractions modernes qui complètent la beauté naturelle."
    },
    tawang: {
      name: 'Tawang',
      country: 'Arunachal Pradesh',
      history: "À 3 048 mètres, Tawang abrite le plus grand monastère de l\'Inde (Monastère de Tawang), fondé en 1680, accueillant 450 moines. Lieu de naissance du 6e Dalaï-Lama, il reflète une forte culture bouddhiste tibétaine. Le col de Sela, le lac Madhuri et le Mémorial de la guerre de 1962 attirent les visiteurs dans cette pittoresque ville frontalière."
    },
    cherrapunji: {
      name: 'Cherrapunji',
      country: 'Meghalaya',
      history: 'Autrefois l\'endroit le plus humide de la Terre, Cherrapunji (Sohra) reçoit de fortes pluies de mousson créant des cascades impressionnantes comme Nohkalikai et Seven Sisters Falls. Les ponts de racines vivantes uniques, créés par la tribu Khasi à l\'aide de racines d\'hévéa, sont classés à l\'UNESCO. La Grotte de Mawsmai offre des aventures de spéléologie.'
    },
    imphal: {
      name: 'Imphal',
      country: 'Manipur',
      history: "Capitale du Manipur à 790 mètres, Imphal a joué un rôle crucial dans la Seconde Guerre mondiale. Le Fort de Kangla a été le siège des dirigeants du Manipur pendant des siècles. Le lac Loktak, le plus grand lac d\'eau douce du nord-est de l\'Inde avec des phumdis flottants uniques (îles), et le parc national de Keibul Lamjao sont des attractions majeures."
    },
    aizawl: {
      name: 'Aizawl',
      country: 'Mizoram',
      history: "Capitale du Mizoram, Aizawl est perchée sur des crêtes à 1 132 mètres, offrant des vues panoramiques. La ville reflète la culture Mizo avec ses maisons en bambou, ses textiles tissés à la main et ses festivals animés. Le Temple de Salomon, le Musée d\'État du Mizoram et les collines de Durtlang donnent un aperçu du patrimoine chrétien et des traditions tribales de la région."
    },
    agartala: {
      name: 'Agartala',
      country: 'Tripura',
      history: "Capitale du Tripura, Agartala présente le magnifique Palais Ujjayanta (maintenant un musée) construit en 1901, qui met en valeur le patrimoine royal. Le palais aquatique Neermahal sur le lac Rudrasagar et l\'ancien Temple Tripura Sundari reflètent l\'histoire de la région. La ville mélange les cultures bengalie et tribale."
    },
    khajuraho: {
      name: 'Khajuraho',
      country: 'Madhya Pradesh',
      history: 'Site du patrimoine mondial de l\'UNESCO, Khajuraho est réputé pour ses impressionnants temples médiévaux hindous et jaïns construits entre 950 et 1050 de notre ère par la dynastie Chandela. Les temples présentent des sculptures complexes représentant divers aspects de la vie, y compris des sculptures érotiques représentant des traditions tantriques, témoignant d\'une réalisation artistique exceptionnelle.'
    },
    bhopal: {
      name: 'Bhopal',
      country: 'Madhya Pradesh',
      history: "La Ville des Lacs et capitale du Madhya Pradesh, Bhopal fut fondée au XIe siècle. Elle mélange de manière unique l\'architecture ancienne et moderne, avec Taj-ul-Masjid (l\'une des plus grandes mosquées d\'Asie), la Stupa de Sanchi (site de l\'UNESCO) et le tragique mémorial de la catastrophe du gaz de 1984, tout en conservant son identité culturelle distinctive."
    },
    gwalior: {
      name: 'Gwalior',
      country: 'Madhya Pradesh',
      history: 'Connue pour son imposant fort au sommet d\'une colline décrit comme "la perle parmi les forteresses de l\'Inde", Gwalior a une histoire riche remontant au VIIIe siècle. Le complexe du fort comprend des palais, des temples avec des sculptures complexes et Teli Ka Mandir. La ville est également réputée pour sa contribution à la musique classique hindoustanie.'
    },
    indore: {
      name: 'Indore',
      country: 'Madhya Pradesh',
      history: "Capitale commerciale du Madhya Pradesh et ville la plus propre de l\'Inde, Indore a été établie par la dynastie Holkar en 1715. Le Palais Rajwada, le Palais Lal Bagh et l\'imposante statue d\'Ahilyabai Holkar célèbrent le patrimoine royal de la ville. Elle est célèbre pour sa culture de la nourriture de rue et ses marchés animés."
    },
    orchha: {
      name: 'Orchha',
      country: 'Madhya Pradesh',
      history: 'Un joyau caché fondé en 1531, Orchha fut la capitale des chefs Rajput de Bundela. La ville présente des palais et des temples magnifiques sur une île sur la rivière Betwa. Le Jahangir Mahal, le Raj Mahal et le Temple Ram Raja mettent en valeur une architecture Bundela magnifique figée dans le temps.'
    },
    ujjain: {
      name: 'Ujjain',
      country: 'Madhya Pradesh',
      history: "L\'une des sept villes sacrées de l\'hindouisme (Sapta Puri), Ujjain accueille le Kumbh Mela tous les 12 ans. L\'ancien Temple Mahakaleshwar, l\'un des douze Jyotirlingas, présente la seule idole de Shiva orientée au sud. Ujjain était un centre mathématique et astronomique majeur dans l\'Inde ancienne, abritant des érudits comme Brahmagupta."
    },
    ranchi: {
      name: 'Ranchi',
      country: 'Jharkhand',
      history: "Capitale du Jharkhand, Ranchi était une capitale d\'été pendant l\'Inde britannique en raison de son climat agréable. Connue sous le nom de Ville des Cascades, elle présente les Cascades Hundru, Jonha et Dassam. La ville est entourée de collines et de forêts, abrite des cultures tribales et est le lieu de naissance du légendaire joueur de cricket MS Dhoni."
    },
    daman: {
      name: 'Daman',
      country: 'Daman & Diu',
      history: 'Ancienne colonie portugaise jusqu\'en 1961, Daman conserve un charme colonial avec des forts, des églises et des plages. Le Fort Moti Daman, le Fort Saint Jérôme et l\'architecture de style portugais reflètent 450 ans d\'influence lusitanienne. La ville côtière offre une atmosphère détendue différente de celle de l\'Inde continentale.'
    },
    silvassa: {
      name: 'Silvassa',
      country: 'Dadra and Nagar Haveli',
      history: 'Capitale de Dadra et Nagar Haveli, Silvassa est nichée entre des forêts et des collines. Libérée de la domination portugaise en 1954, elle présente des musées tribaux exposant l\'art Warli, le jardin du lac Vanganga et des parcs naturels. La ville maintient le patrimoine tribal tout en se développant en tant que centre industriel.'
    },
    nagpur: {
      name: 'Nagpur',
      country: 'Maharashtra',
      history: 'La Ville Orange et capitale d\'hiver du Maharashtra, Nagpur est géographiquement située au centre de l\'Inde. La ville présente Deekshabhoomi, un site de pèlerinage bouddhiste majeur où le Dr B.R. Ambedkar s\'est converti au bouddhisme. Nagpur est également connue pour la culture Vidarbha et la proximité des réserves de tigres.'
    },
    raipur: {
      name: 'Raipur',
      country: 'Chhattisgarh',
      history: 'Capitale du Chhattisgarh, Raipur a des racines remontant au IXe siècle de notre ère. La ville sert de porte d\'entrée à de nombreux temples anciens, sites bouddhistes à Sirpur et villages tribaux. Le Musée Mémorial Mahant Ghasidas abrite des artefacts tribaux, tandis que le Raipur moderne émerge comme un centre éducatif et commercial.'
    },
    jabalpur: {
      name: 'Jabalpur',
      country: 'Madhya Pradesh',
      history: "Située sur les rives du fleuve Narmada, Jabalpur est célèbre pour les impressionnantes Roches de Marbre à Bhedaghat, où le fleuve coule à travers une gorge avec des falaises de marbre de 100 pieds de haut. Les chutes Dhuandhar et les anciens forts Gond reflètent la beauté naturelle et la signification historique de la ville en tant que centre culturel."
    },
    pachmarhi: {
      name: 'Pachmarhi',
      country: 'Madhya Pradesh',
      history: 'La seule station de montagne du Madhya Pradesh, Pachmarhi se trouve à 1 067 mètres dans la chaîne Satpura. Découverte par le capitaine James Forsyth en 1857, elle présente une architecture de l\'ère coloniale, d\'anciens abris sous roche avec des peintures rupestres préhistoriques aux Grottes de Pandav, des cascades et des points de vue pittoresques au milieu de forêts denses.'
    },
    amarkantak: {
      name: 'Amarkantak',
      country: 'Madhya Pradesh',
      history: 'Un site de pèlerinage sacré à 1 065 mètres, Amarkantak est la source des fleuves sacrés Narmada et Sone. L\'ancien temple Narmada Kund et le jardin botanique Mai ki Bagiya attirent les pèlerins et les amoureux de la nature. La région revêt une signification spirituelle dans la tradition hindoue et offre une beauté naturelle sereine.'
    },
    chitrakoot: {
      name: 'Chitrakoot',
      country: 'Uttar Pradesh/Madhya Pradesh',
      history: 'Ville d\'une immense signification religieuse, Chitrakoot est l\'endroit où le Seigneur Rama, Sita et Lakshmana ont passé 11 ans de leur exil de 14 ans selon le Ramayana. Le temple Kamadgiri, Ramghat sur la rivière Mandakini et de nombreux ashrams en font une destination de pèlerinage majeure pour les hindous.'
    },
    bhimbetka: {
      name: 'Bhimbetka',
      country: 'Madhya Pradesh',
      history: 'Site du patrimoine mondial de l\'UNESCO, les abris sous roche de Bhimbetka contiennent plus de 500 grottes avec des peintures rupestres préhistoriques datant d\'il y a 30 000 ans jusqu\'à la période médiévale. Ces peintures représentent la chasse, la danse, les combats d\'animaux et la vie quotidienne, fournissant un aperçu de l\'âge de pierre jusqu\'aux premières périodes historiques.'
    }
  },
    footer: {
      description: 'Votre compagnon de voyage de confiance pour des voyages inoubliables. Créer des souvenirs qui durent toute une vie.',
      destinations: {
        title: 'Destinations',
        keralaBudgetHouseboat: 'Péniche économique au Kerala',
        luxuryTopEndHouseboat: 'Péniche de luxe haut de gamme',
        b2bPriceKeralaHouseboats: 'Prix B2B des péniches du Kerala',
        houseboatsInAlappuzha: 'Péniches à Alappuzha',
        budgetBoatHouseAllepey: 'Péniche économique à Alleppey',
        budgetBoatHouseAlappuzha: 'Péniche économique à Alappuzha',
        budgetHouseboatAllepey: 'Péniche économique à Alleppey',
        budgetHouseboatAlappuzha: 'Péniche économique à Alappuzha',
        budgetAlleppeyBoatHouse: 'Péniche économique à Alleppey',
        spotBookingBoatHouse: 'Réservation sur place de péniche',
        prepaidTaxiCochinAirport: 'Service de taxi prépayé à l\'aéroport de Cochin',
        budgetAlappuzhaHouseboats: 'Péniches économiques à Alappuzha',
        budgetAlleppeyHouseboats: 'Péniches économiques à Alleppey',
        b2bAlleppeyHouseboats: 'Péniches B2B à Alleppey',
        privateAlleppeyHouseboats: 'Péniches privées à Alleppey',
        houseboatsInIndia: 'Péniches en Inde',
        sharedHouseboatsInAlleppey: 'Péniches partagées à Alleppey',
        sharingHouseboatsInAlleppey: 'Péniches partagées à Alleppey',
        sharingBoathouseInAlleppey: 'Péniche partagée à Alleppey',
        clubbingHouseboatsInAlleppey: 'Péniches de fête à Alleppey',
        clubbingBoathouseInAlleppey: 'Péniche de fête à Alleppey',
        luxuryHouseboatsInAlleppey: 'Péniches de luxe à Alleppey',
        premiumHouseboatsInAlleppey: 'Péniches premium à Alleppey',
        deluxeHouseboatsInAlleppey: 'Péniches de luxe à Alleppey',
        standardHouseboatsInAlleppey: 'Péniches standard à Alleppey',
        ultraLuxuryHouseboatsInAlleppey: 'Péniches ultra-luxueuses à Alleppey',
        ultraLuxurySharingHouseboatsInAlleppey: 'Péniches partagées ultra-luxueuses à Alleppey',
        bestHouseboatsInAlleppey: 'Meilleures péniches à Alleppey',
        bestLuxuryHouseboatsInAlleppey: 'Meilleures péniches de luxe à Alleppey',
        bestPremiumHouseboatsInAlleppey: 'Meilleures péniches premium à Alleppey',
        bestDeluxeHouseboatsInAlleppey: 'Meilleures péniches de luxe à Alleppey',
        bestStandardHouseboatsInAlleppey: 'Meilleures péniches standard à Alleppey',
        bestAlappuzhaHouseboatPackages: 'Meilleurs forfaits de péniches à Alappuzha',
        bestAlappuzhaBoatHousePackages: 'Meilleurs forfaits de péniches à Alappuzha'
      },
      services: { title: 'Services', flightBooking: 'Réservation de vols', hotelReservation: 'Réservation d\'hôtel', tourPackages: 'Forfaits touristiques' },
      company: { title: 'Entreprise', aboutUs: 'À propos de nous', contact: 'Contact' },
      support: { title: 'Support', helpCenter: 'Centre d\'aide', terms: 'Conditions d\'utilisation', privacy: 'Politique de confidentialité', refund: 'Politique de remboursement', faq: 'FAQ' },
      copyright: '© {{year}} Tourism Paradise. Tous droits réservés.'
    }
  },
  de: {
    translation: {
      destinationNotFound: {
        title: "Reiseziel nicht gefunden",
        description: "Entschuldigung, wir konnten das gesuchte Reiseziel nicht finden."
      },
      goBack: "Zurück zu den Reisezielen",
      food: "Essen online bestellen",
      thingsToDo: "Aktivitäten",
      aboutDestination: "Über das Reiseziel",
      getInTouch: "Kontakt aufnehmen",
      chatOnWhatsApp: "Auf WhatsApp chatten",
      instantResponse: "Sofortige Antwort",
      sendEmail: "E-Mail senden",
      emailAddress: "info@tourismparadise.com",
      houseboatShort: "Hausboot in Alleppey – Tag & Nacht, 1 Schlafzimmer, privates Oberdeck.",
      exploreNow: "Jetzt entdecken",
      planYourVisitTitle: "Planen Sie Ihren Besuch",
      planYourVisitSubtitle: "Füllen Sie das Formular aus, und wir melden uns innerhalb von 24 Stunden",
      labelFullName: "Vollständiger Name *",
      placeholderFullName: "Geben Sie Ihren vollständigen Namen ein",
      labelEmail: "E-Mail-Adresse *",
      placeholderEmail: "your.email@example.com",
      labelPhone: "Telefonnummer",
      placeholderPhone: "+91 98765 43210",
      labelMessage: "Ihre Nachricht *",
      placeholderMessage: "Erzählen Sie uns von Ihren Reiseplänen, Vorlieben und Fragen...",
      sending: "Senden...",
      sendInquiry: "Anfrage senden",
      successMessage: "✓ Nachricht erfolgreich gesendet! Wir melden uns bald.",
      whatsappMessage: "Hallo! Ich möchte {{name}}, {{country}} besuchen. Können Sie mir weitere Informationen senden?",
      emailSubject: "Anfrage zu {{destinationName}}",
      emailBodyTemplate: "Hallo,\n\nich möchte mehr über {{destination}} erfahren.\n\nDanke!",
      heroTitle: 'Planen Sie jeden Teil Ihrer Reise',
      heroSubtitle: 'Buchen Sie Flüge, Hotels, Transport und Erlebnisse an einem Ort. Ihre komplette Reiselösung für eine nahtlose Reiseplanung.',
      houseboats: 'Hausboote',
      shikara: 'Shikara-Fahrten',
      flights: 'Flüge',
      hotels: 'Hotels',
      trains: 'Züge',
      buses: 'Busse',
      cars: 'Mietwagen',
      tours: 'Touren',
      cruises: 'Kreuzfahrten',
      activities: 'Aktivitäten',
      packages: 'Pauschalreisen',
      weekend: 'Wochenendausflüge',
      beaches: 'Strandaufenthalte',
      mountains: 'Bergtouren',
      adventure: 'Abenteuer',
      citybreaks: 'Städtetrips',
      photography: 'Fototouren',
      insurance: 'Reiseversicherung',
      passes: 'Stadtpässe',
      budget: 'Budgetunterkünfte',
      bikes: 'Fahrradverleih',
      villas: 'Villen & Häuser',
      todaysDeals: 'Die besten Angebote von heute',
      exploreDestinations: 'Reiseziele erkunden',
      seaFishRestaurants: 'Seefischrestaurants',
      backwaterVillageStay: 'Aufenthalt im Backwater-Dorf',
      keralaChipsAndSpices: 'Kerala Chips & Gewürze',
      keralaHandlooms: 'Kerala Handwebstühle',
      honeymoonBoatHouse: 'Flitterwochen-Hausboot',
      houseboats: 'Hausboote',
      noHouseboatsFound: 'Keine Hausboote gefunden, die Ihrer Suche entsprechen.',

      budgetTravelDeals: 'Günstige Reiseangebote für Sie',
      offerHotels: 'Hotels',
      offerHouseboatsDayNightCruise: 'Hausboote in Alleppey für Tag- und Nachtfahrten',
      offerHouseboatsDayNight1Bedroom: 'Hausboote in Alleppey mit 1 Schlafzimmer für Tag und Nacht',
      offerHouseboatsDayCruise1BedroomUpperDeck: 'Hausboot in Alappuzha für Tagesfahrt mit 1 Schlafzimmer und privatem Oberdeck',
      offerKeralaHoneymoonHouseboat: 'Kerala Flitterwochen-Hausboot',
      offerHouseboatDayNight1BedroomUpperDeck: 'Hausboot in Alleppey für Tag und Nacht mit 1 Schlafzimmer und privatem Oberdeck',
      offerHouseboatsAlleppeyDayTripUpperDeck: 'Tagesausflug mit dem Hausboot mit Oberdeck in Alleppey',
      offerHouseboatsB2BPrice1Bedroom: 'B2B-Preis für Hausboote mit 1 Schlafzimmer in Alleppey',
      offerSharingHouseboats2People: 'Preis für geteilte Hausboote für 2 Personen in Alleppey',
      offerUltraPremiumHouseboats: 'Ultra-Premium-Hausboote in Alleppey',
      offerKeralaTourBudgetPackages: 'Günstige Tour-Pakete für Kerala',
      offerKeralaBoating: 'Bootfahren in Kerala',
      offerB2BTravelDealsKeralaHouseboat: 'B2B-Reiseangebote für Kerala-Hausboot-Pakete',
      offerPetalsFlowers: 'Blütenblätter',
      offerOrchidForSale: 'Orchidee zu verkaufen - blühende Orchideenpflanzen',
      offerOxidisedOrnaments: 'Oxidierter Schmuck',
      offerKeralaHandloomsSarees: 'Handwebstühle aus Kerala - Kasavu-Saris aus Kerala',
      offerKeralaHandicrafts: 'Kunsthandwerk aus Kerala',
      offerKeralaChips: 'Kerala-Chips - Bananenchips aus Kerala',
      offerKeralaSpices: 'Gewürze aus Kerala',
      offerDriedFish: 'Trockenfisch',
      offerKeralaRealEstate: 'Immobilien in Kerala',
      offerKeralaLottery: 'Kerala-Lotterielose - Kerala-Bumper-Lotterielose',
      offerKeralaHomeDecor: 'Wohnkultur aus Kerala',
      offerTransportationInKerala: 'Transport in Kerala',
      offerKeralaCoirProducts: 'Kokosfaserprodukte aus Kerala',
      whyChooseTitle: 'Warum Tourism Paradise wählen',
      whyChooseSubtitle: 'Wir machen die Reiseplanung mühelos mit unseren umfassenden Dienstleistungen und fachkundiger Beratung',
      showLess: 'Weniger anzeigen',
      showMore: 'Mehr anzeigen'
    },testimonials:// public/locales/de/testimonials.json
{
  "sectionTitle": "Was unsere Reisenden sagen",
  "sectionSubtitle": "Echte Erlebnisse von Tausenden zufriedenen Kunden",
  "quoteOpen": "\"",
  "indicatorAria": "Zeige Testimonial {{index}}",

  "person1": {
    "name": "Sarah Johnson",
    "location": "New York, USA",
    "text": "Absolut erstaunliches Erlebnis! Das Team von Tourism Paradise hat unsere Flitterwochen perfekt geplant. Jedes Detail wurde berücksichtigt und wir hatten die romantischste Reise durch die Backwaters von Kerala.",
    "trip": "Flitterwochen in den Backwaters von Kerala"
  },

  "person2": {
    "name": "Michael Chen",
    "location": "Toronto, Kanada",
    "text": "Professioneller Service und unglaubliche Liebe zum Detail. Unsere Familienreise nach Kerala verlief dank ihrer fachkundigen Planung und lokalen Kenntnisse der Strände und Bergstationen makellos.",
    "trip": "Familienabenteuer in Kerala"
  },

  "person3": {
    "name": "Emily Rodriguez",
    "location": "Barcelona, Spanien",
    "text": "Ich reise häufig beruflich, aber diese Freizeitreise, organisiert von Tourism Paradise, war außergewöhnlich. Die personalisierte Reiseroute und die Unterstützung für mein Ayurveda-Retreat in Kerala machten alles stressfrei.",
    "trip": "Solo-Retreat in Kerala"
  }
},
    featureList: {
      pilgrimPackages: 'Beste Pilgerpakete',
      pilgrimDescription: 'Durchdacht zusammengestellte Pilgerreisen zu heiligen Zielen für eine friedliche spirituelle Reise.',
      industrialTitle: 'Industrielle Beratungsdienstleistung & Lieferant von Arbeitskräften',
      industrialShortDesc: 'Von Projektberichten und Finanzberatung bis zur Bereitstellung qualifizierter Arbeitskräfte wie Ingenieure, Techniker und Bauunternehmer decken wir alle Ihre industriellen und geschäftlichen Bedürfnisse ab.',
      industrialFullDesc: 'Erstellung von Projektberichten, Finanzberatung, Bauüberwachung, Erstellung von Plänen und Kostenschätzungen, Maschinen für Industrie und Hotels, Bauarbeiter und Bauunternehmer, Elektrik, Sanitär, Klimaanlagen, Bauwesen, Haushaltsgeräte, Kühlschrank, Waschmaschine, Klimaanlage, Automobil, Computer, Mobiltelefon, Aufzugsbediener, Heimdekoration, Schmuck und Ornamente, Kaffee- und Snackzubereiter, Maurer, Schreiner, Schweißer, Maschineninstallation, Maler, Reinigung, Hotels, Fahrer, Aluminiumfertigung, Stahlfertigung, Hauspersonal, Gartenarbeit, Bediener von Schwertransporten und Maschinen, Website-Design und Hosting, Installation von Solaranlagen, Haushaltsdienste, Labortechniker, Ingenieure und Ärzte, Lehrer, Wäscherei, Hauswirtschaft usw.',
      educationTitle: 'Bildungsberatungsdienstleistung',
      educationDescription: 'Ingenieurwesen, Medizinhochschule, Landwirtschaft, Computer-KI, LLB, MBA, BBA, MCA, Labortechniker, Physiotherapie, Zahnmedizin, Ayurvedisch usw.',
      legalTitle: 'Rechtsanwälte und Juristen',
      legalDescription: 'Zugang zu professioneller Rechtsberatung und Dienstleistungen von erfahrenen Rechtsanwälten und Juristen.',
    }, 
    destinationOffers: {
      1: {
        title: "Hotels",
        description: "Wildtier-/Waldgebiete und verwandte Aktivitäten: • Periyar Wildlife Sanctuary (Periyar Tiger Reserve) • Waldgebiete in Kerala • Trekkinggebiete • Bergregionen • Elefantenbeobachtung/Interaktion (häufig als Elefantensafari oder Elefantenritt angeboten oder in freier Wildbahn/schutzgebieten zu sehen. Bei Festivals treten sie als Elefantenprozession oder Gajamela auf)."
      },

      2: {
        title: "Hausboote in Alleppey – Tages- und Nachtkreuzfahrt",
        description: "Houseboat-Hotels in Alleppey, 1–22 Schlafzimmer-Boote in Alappuzha. Premium- und Luxus-Hausboote für Tages- und Übernachtungsfahrten, Budget-Hausboote, Muhamma Jetty, Nehru Trophy Boat Race, Startpunkt Alappuzha, Endpunkt Alleppey, Hausbootroute Kannankara. Houseboats in Kategorien Deluxe, Premium und Luxus."
      },

      3: {
        title: "Hausboote in Alleppey – Tag und Nacht (1 Schlafzimmer)",
        description: "Homestays in den Backwaters von Alleppey, Dorfunterkünfte in Alappuzha, Apartments in Pallathuruthi, Villen in Alleppey, Baumhäuser, Insel-Backwater-Resorts, Seeufer- und Strandimmobilien. Houseboats mit 1–22 Schlafzimmern in Premium- und Luxusausführungen."
      },

      4: {
        title: "Alappuzha – Tageskreuzfahrt im privaten Hausboot (1 Schlafzimmer, Oberdeck)",
        description: "Houseboats mit 1–22 Schlafzimmern in Alappuzha, Premium-/Luxusaufenthalte, Muhamma Jetty, Nehru Trophy Race, Kannankara-Route. Budget- und Luxushouseboats für Tagesfahrten."
      },

      5: {
        title: "Kerala Honeymoon-Hausboot",
        description: "Ein romantisch dekoriertes Honeymoon-Hausboot mit klimatisierten Schlafzimmern, privaten Badezimmern und offenen Decks. Inklusive Mahlzeiten an Bord, Candlelight-Dinner und Blumendekoration. Perfekt für Paare, die die Backwaters von Kerala erkunden möchten."
      },

      6: {
        title: "Hausboot in Alleppey – Tag und Nacht (1 Schlafzimmer, privates Oberdeck)",
        description: "Backwater-Homestays in Alleppey, Dorfunterkünfte Alappuzha, Apartments in Pallathuruthi, Villen in der Stadt Alleppey, Baumhäuser, Inselresorts, See- und Strandfront. Premium-/Luxus-Houseboats mit 1–22 Schlafzimmern."
      },

      7: {
        title: "Hausboote in Alleppey – 1 Schlafzimmer, privates Oberdeck",
        description: "Alleppey, Kumarakom, Kollam, Ashtamudi-See, Kovalam, Varkala, Cherai Beach, Marari Beach, Dörfer wie Kainakari, Punnamada, Aryad. Houseboats von 1–22 Schlafzimmern, Premium-/Luxus-Kategorie."
      },

      8: {
        title: "Tagesausflug – Oberdeck-Hausboot in Alleppey",
        description: "Gebiete: Kainakari, Punnamada, Aryad, Apartments in Pallathuruthi, Muhamma Jetty. Premium-Houseboats für ganztägige Kreuzfahrten."
      },

      9: {
        title: "Hausboote in Alleppey – B2B-Preis für 1 Schlafzimmer",
        description: "Erhältlich in Deluxe-, Premium- und Luxus-Kategorien. Zwei Typen: mit Oberdeck und ohne. Das Oberdeck bietet bessere Aussicht während der Fahrt."
      },

      10: {
        title: "Geteilte Hausboote in Alleppey – Preis für 2 Personen",
        description: "Erleben Sie die Backwaters von Kerala günstig. Ideal für Paare oder Freunde. Kreuzfahrt über Nacht, authentische Kerala-Mahlzeiten, ruhige Landschaften. Frühbuchung empfohlen."
      },

      11: {
        title: "Ultra-Premium-Hausboote in Alleppey",
        description: "Kategorien: Deluxe, Premium, Luxus, Ultra-Luxus. Houseboats von 1–22 Schlafzimmern, geeignet für Paare, Familien und Gruppen. Tages- und Übernachtungsfahrten. Beliebte Orte: Alleppey Backwaters, Punnamada, Kainakari, Aryad, Muhamma Jetty."
      },

      12: {
        title: "Kerala Budget-Reisepakete",
        description: "Munnar, Thekkady, Periyar Wildlife, Wayanad, Vagamon, Ponmudi, Idukki, Devikulam, Kuttikanam, Vattavada, Kanthalloor, Berg- und Waldregionen, Elefantenwanderungen, Trekking."
      },

      13: {
        title: "Bootsfahrt in Kerala",
        description: "Erkunden Sie die ruhigen Backwaters von Kerala – Reisfelder, Dorfkanäle, traditionelle Holzboote, authentisches Kerala-Essen. Ideal für Paare, Familien und Alleinreisende. Ab ₹1.999 pro Person."
      },

      14: {
        title: "B2B-Angebote – Kerala Hausboot-Pakete",
        description: "Houseboats von 1–22 Schlafzimmern, Premium-/Luxusaufenthalte, Budgetoptionen, Muhamma Jetty, Nehru Trophy Race, Kannankara-Route."
      },

      15: {
        title: "Petals Flowers",
        description: "Ihr zuverlässiges Ziel für hochwertige Blütenpflanzen in Kerala. Spezialisiert auf exotische Orchideen. Perfekt für Dekoration, Geschenke und Gartenliebhaber. Sorgfältig gepflegte Pflanzen für langanhaltende Blüten."
      },

      16: {
        title: "Orchideen im Verkauf – Blühende Orchideenpflanzen",
        description: "Tropische Orchideen wie Phalaenopsis und Vanda. Lebendige Farben, einzigartige Muster, langanhaltende Blüten. Einfach zu pflegen, ideal für Dekor, Geschenke oder Gärten. Ab ₹399."
      },

      17: {
        title: "Oxidierter Schmuck aus Kerala",
        description: "Charakteristischer dunkler Antik-Look durch Oxidation von Silber oder Messing. Beliebt für traditionellen und modernen Stil. Passt zu Saris und moderner Kleidung. Halsketten, Ohrringe, Schmucksets."
      },

      18: {
        title: "Kerala Handloom – Kasavu Sarees",
        description: "Handloom-Seide aus Kerala, Kasavu-Saris, Kasavu-Materialien für Churidar, Handloom-Hemden. Traditionelles Weiß mit goldener Bordüre."
      },

      19: {
        title: "Kerala-Handwerkskunst",
        description: "Holzschnitzereien, Metallarbeiten, Kokosfasermatten, Dekoartikel aus Kokosnussschale, Kathakali-Masken, Nettipattam, Aranmula-Metallspiegel."
      },

      20: {
        title: "Kerala Chips – Bananenchips",
        description: "Nendran-Bananenchips, Jackfruit-Chips und traditionelle Snacks aus Kerala."
      },

      21: {
        title: "Gewürze aus Kerala",
        description: "Premium-Gewürze: Kardamom, schwarzer Pfeffer, Zimt, Nelken, Muskat – direkt von Biohöfen in den Westghats."
      },

      22: {
        title: "Getrockneter Fisch",
        description: "Exportqualität, getrocknete Süßwassergarnelen aus dem Ashtamudi-See. Hygienisch sonnengetrocknet, ohne Salz. Perfekt für Curry, Masala und Chutney."
      },

      23: {
        title: "Immobilien in Kerala",
        description: "Unabhängiges 4-BHK-Haus (3200 sq.ft) in Toplage. Kauf, Verkauf und Vermietung von Villen, Grundstücken, Häusern und Wohnungen in ganz Kerala."
      },

      24: {
        title: "Kerala Lotterietickets – Bumper Lottery",
        description: "Offizielle Kerala-Staatslotterie: Win Win, Sthree Sakthi, Fifty Fifty, Karunya. Hauptpreise bis ₹1 Crore."
      },

      25: {
        title: "Kerala Wohnkultur",
        description: "Kerala Home Decor und Kokosfaserprodukte — natürliche, umweltfreundliche Wohnaccessoires."
      },

      26: {
        title: "Transport in Kerala",
        description: "Guruvayur, Athirapilly-Wasserfälle, Vazhachal, Arthunkal Basilica, Fort Kochi, Neeleswaram, Thenmala Eco-Spot, Padmanabhaswamy-Tempel, Chottanikkara, Sabarimala, Kuttalam, Ooty, Kodaikanal, Goa, Karnataka, Tamil Nadu, Chennai, Madurai, Rameswaram, Coimbatore, Valparai, Kainakari, Punnamada, Aryad, Pallathuruthi, Muhamma."
      },

      27: {
        title: "Kerala Kokosfaserprodukte",
        description: "Umweltfreundliche und biologisch abbaubare Produkte: Matten, Seile, Bürsten, Taschen, Dekoration. Sehr gefragt in lokalen und internationalen Märkten."
      },

      28: {
        title: "Online-Essensbestellung",
        description: "Bestellen Sie Essen online in Kerala — authentische Kerala-Küche und internationale Gerichte. Verfügbar in Cochin, Trivandrum, Kozhikode und weiteren Städten."
      }
    },
    houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: 'Hausboote Hotels in Alleppey Alappuzha Kerala',
      houseboatsHotelsInMunnar: 'Hausboote Hotels in Munnar',
      houseboatsHotelsInCochin: 'Hausboote Hotels in Cochin',
      houseboatsHotelsInKumarakomLake: 'Hausboote Hotels am Kumarakom See',
      houseboatsHotelsInKottayam: 'Hausboote Hotels in Kottayam',
      houseboatsHotelsInAlleppey: 'Hausboote Hotels in Alleppey',
      houseboatsHotelsInChottanikara: 'Hausboote Hotels in Chottanikara',
      houseboatsHotelsInThiruvananthapuram: 'Hausboote Hotels in Thiruvananthapuram',
      houseboatsHotelsInKovalamBeach: 'Hausboote Hotels am Kovalam Strand',
      houseboatsHotelsInThekkady: 'Hausboote Hotels in Thekkady',
      houseboatsHotelsInWayanad: 'Hausboote Hotels in Wayanad',
      houseboatsHotelsInAlappuzha: 'Hausboote Hotels in Alappuzha',
      houseboatsHotelsInGuruvayur: 'Hausboote Hotels in Guruvayur',
      houseboatsHotelsInVagamon: 'Hausboote Hotels in Vagamon',
      houseboatsHotelsInAthirapillyWaterFalls: 'Hausboote Hotels an den Athirapilly Wasserfällen',
      houseboatsHotelsInMarariBeach: 'Hausboote Hotels am Marari Strand',
      houseboatsHotelsInPoovarBeach: 'Hausboote Hotels am Poovar Strand',
      houseboatsHotelsInVarkalaBeach: 'Hausboote Hotels am Varkala Strand',
      houseboatsHotelsInAshtamudiLake: 'Hausboote Hotels am Ashtamudi See',
      houseboatsHotelsInKanyakumariBeach: 'Hausboote Hotels am Kanyakumari Strand',
      houseboatsHotelsInAlleppeyBeach: 'Hausboote Hotels am Alleppey Strand',
      houseboatsHotelsInAlappuzhaLake: 'Hausboote Hotels am Alappuzha See',
      houseboatsHotelsInIndia: 'Hausboote Hotels in Indien',
      houseboatsHotelsInKerala: 'Hausboote Hotels in Kerala',
      houseBoatHotelsInAlleppey: 'Hausboot Hotels in Alleppey',
      boatHouseHotelsInIndia: 'Bootshaus Hotels in Indien',
      boatHouseHotelsInKerala: 'Bootshaus Hotels in Kerala',
      sharingHouseboatsHotelsInAlleppey: 'Sharing Hausboote Hotels in Alleppey',
      sharingBoatHouseHotelsInKerala: 'Sharing Bootshaus Hotels in Kerala',
      dayTripHouseboatsHotelsInAlleppey: 'Tagesausflug Hausboote Hotels in Alleppey',
      dayCruiseHouseboatsHotelsInAlleppey: 'Tageskreuzfahrt Hausboote Hotels in Alleppey',
      fiveStarHouseboatsHotelsInAlleppey: '5-Sterne-Hausboote Hotels in Alleppey',
      fourStarHouseboatsHotelsInAlleppey: '4-Sterne-Hausboote Hotels in Alleppey',
      threeStarHouseboatsHotelsInAlleppey: '3-Sterne-Hausboote Hotels in Alleppey',
      twoStarHouseboatsHotelsInAlleppey: '2-Sterne-Hausboote Hotels in Alleppey',
      budgetHouseboatsHotelsInAlleppey: 'Budget Hausboote Hotels in Alleppey',
      standardBoatHouseHotelsInAlleppey: 'Standard Bootshaus Hotels in Alleppey'
    }
    ,
    destinationFeed: {
      loadingMore: 'Weitere Angebote werden geladen...',
      inquiryTitle: 'Haben Sie Fragen? Kontaktieren Sie uns!',
      inquirySubtitle: 'Senden Sie uns Ihre Anfrage und unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden',
      yourName: 'Ihr Name *',
      yourEmail: 'Ihre E-Mail *',
      phoneNumber: 'Telefonnummer',
      subject: 'Betreff',
      yourMessage: 'Ihre Nachricht *',
      sendInquiry: 'Anfrage senden',
      scrollToInquiryAria: 'Zum Anfrageformular scrollen',
      "bookViaWhatsapp": "Über WhatsApp buchen"
    },
    popularDestinations: {
      title: "Entdecken Sie mehr Reiseziele in Indien",
      subtitle: "Erkunden Sie Aktivitäten in Städten verschiedener Bundesstaaten",
      thingsToDo: "Aktivitäten",
      comingSoonTitle: "Kommt bald!",
      comingSoonDescription: "Wir fügen fantastische Reiseziele in {{continent}} hinzu. Schauen Sie bald wieder vorbei!",
      northIndia: "Reiseziele in Nordindien",
      southIndia: "Reiseziele in Südindien",
      eastIndia: "Reiseziele in Ost- und Nordostindien",
      centralIndia: "Reiseziele in Zentralindien",

      delhi: {
        name: "Delhi",
        country: "Delhi",
        history:
          "Die Hauptstadt Indiens, Delhi, verfügt über eine mehr als 2.000 Jahre alte Geschichte. Die Stadt ist voller Moscheen, Festungen und Denkmäler der Mogulherrscher. Vom majestätischen Roten Fort bis zum ikonischen India Gate verbindet Delhi antikes Erbe mit moderner Infrastruktur und ist ein absolutes Muss für Reisende."
      },

      jaipur: {
        name: "Jaipur",
        country: "Rajasthan",
        history:
          "Jaipur, die berühmte Pink City, ist die Hauptstadt von Rajasthan und Teil des Goldenen Dreiecks Indiens. Sie wurde 1727 gegründet und ist berühmt für ihre königlichen Paläste, das Amber Fort, den Hawa Mahal und lebhafte Märkte. Jaipur zeigt die prachtvolle Architektur und Kultur der Rajputen."
      },

      agra: {
        name: "Agra",
        country: "Uttar Pradesh",
        history:
          "Die Stadt des weltberühmten Taj Mahal, eines der sieben Weltwunder, war von 1556 bis 1658 die Hauptstadt des Mogulreichs. Agra beherbergt außerdem das Agra Fort und Fatehpur Sikri – herausragende Beispiele mogulischer Architektur."
      },

      varanasi: {
        name: "Varanasi",
        country: "Uttar Pradesh",
        history:
          "Varanasi ist eine der ältesten ununterbrochen bewohnten Städte der Welt und ein bedeutendes religiöses Zentrum für Hindus. Direkt am heiligen Fluss Ganges gelegen, ist die Stadt bekannt für ihre Ghats, alten Tempel und tiefe spirituelle Bedeutung."
      },

      amritsar: {
        name: "Amritsar",
        country: "Punjab",
        history:
          "Amritsar wurde 1577 von Guru Ram Das gegründet und beherbergt den Goldenen Tempel, das heiligste Heiligtum des Sikhismus. Die Stadt war auch Schauplatz des tragischen Massakers von Jallianwala Bagh im Jahr 1919 und symbolisiert heute das spirituelle und kulturelle Erbe der Sikhs."
      },

      manali: {
        name: "Manali",
        country: "Himachal Pradesh",
        history:
          "Manali liegt auf etwa 2.050 Metern Höhe im Himalaya und ist ein beliebter Bergort, bekannt für seine natürliche Schönheit, Abenteueraktivitäten und den antiken Hidimba-Tempel. Es ist das Tor zum Rohtang-Pass und zum Solang-Tal."
      },

      leh: {
        name: "Leh",
        country: "Ladakh",
        history:
          "Leh, die Hauptstadt von Ladakh, liegt auf ca. 3.500 Metern Höhe und war einst ein wichtiger Stützpunkt der alten Seidenstraße. Die Region ist bekannt für ihre karge Landschaft, buddhistischen Klöster und hochgelegenen Seen wie den Pangong Tso."
      },

      rishikesh: {
        name: "Rishikesh",
        country: "Uttarakhand",
        history:
          "Rishikesh, als Welthauptstadt des Yoga bekannt, liegt am heiligen Fluss Ganges. Die Stadt ist berühmt für ihre Ashrams, Yoga-Zentren und die berühmte Lakshman-Jhula-Brücke. Der Besuch der Beatles im Jahr 1968 machte Rishikesh weltweit bekannt."
      },

      udaipur: {
        name: "Udaipur",
        country: "Rajasthan",
        history:
          "Udaipur, die Stadt der Seen und das Venedig des Ostens, wurde 1559 von Maharana Udai Singh II. gegründet. Die prachtvollen Paläste – darunter der City Palace und der Lake Palace – sowie die malerischen Seen machen Udaipur zu einem der romantischsten Reiseziele Indiens."
      },

      shimla: {
        name: "Shimla",
        country: "Himachal Pradesh",
        history:
          "Shimla war die Sommerhauptstadt Britisch-Indiens und bewahrt bis heute ihren kolonialen Charme mit viktorianischer Architektur wie dem Viceregal Lodge und der Christ Church. Die Stadt bietet beeindruckende Ausblicke auf den Himalaya und verfügt über die UNESCO-gelistete Kalka-Shimla-Eisenbahn."
      },

      mussoorie: {
        name: "Mussoorie",
        country: "Uttarakhand",
        history:
          "Mussoorie, die Königin der Hügel, wurde 1826 von den Briten gegründet. Auf 2.005 Metern Höhe bietet die Stadt Panoramablicke auf das Doon-Tal und die Himalaya-Ketten. Zu den Attraktionen gehören Gun Hill, Kempty Falls und der Camel’s Back Road."
      },

      srinagar: {
        name: "Srinagar",
        country: "Jammu und Kashmir",
        history:
          "Srinagar, die Sommerhauptstadt von Jammu und Kashmir, ist berühmt für den Dal-See, die Mughal-Gärten wie Shalimar Bagh und Nishat Bagh sowie traditionelle Hausboote. Die Stadt wird seit Jahrhunderten als „Paradies auf Erden“ bezeichnet."
      },

      jaisalmer: {
        name: "Jaisalmer",
        country: "Rajasthan",
        history:
          "Die goldene Stadt Jaisalmer erhebt sich aus der Thar-Wüste mit ihrer gelben Sandsteinfestung und kunstvoll verzierten Havelis. Sie wurde 1156 gegründet und war ein bedeutendes Handelszentrum an den Karawanenrouten."
      },

      nainital: {
        name: "Nainital",
        country: "Uttarakhand",
        history:
          "Nainital wurde 1841 um den ruhigen Naini-See entwickelt und ist von sieben Hügeln umgeben. Der birnenförmige See, der Tempel Naina Devi und der Aussichtspunkt Snow View machen die Stadt zu einem beliebten Reiseziel."
      },

      vrindavan: {
        name: "Vrindavan",
        country: "Uttar Pradesh",
        history:
          "Vrindavan gehört zu den heiligsten Städten des Hinduismus und gilt als der Ort, an dem Krishna seine Kindheit verbrachte. Mit über 5.000 Tempeln, darunter der Banke Bihari-Tempel und der ISKCON-Tempel, ist Vrindavan ein bedeutender Pilgerort."
      },

      haridwar: {
        name: "Haridwar",
        country: "Uttarakhand",
        history:
          "Haridwar ist eine der sieben heiligsten Städte des Hinduismus und markiert den Punkt, an dem der Ganges in die Ebenen eintritt. Sie ist Gastgeber des Kumbh Mela alle 12 Jahre. Die abendliche Ganga Aarti an den Har Ki Pauri-Ghats ist ein unvergessliches spirituelles Erlebnis."
      },
        mumbai: {
        name: "Mumbai",
        country: "Maharashtra",
        history:
          "Mumbai, die Finanzhauptstadt Indiens und die Stadt der Träume, bestand ursprünglich aus sieben Inseln. Die Stadt beherbergt Bollywood, das Gateway of India, Marine Drive und eine einzigartige Mischung aus kolonialer Architektur und modernen Wolkenkratzern."
      },

      bengaluru: {
        name: "Bengaluru",
        country: "Karnataka",
        history:
          "Bengaluru, bekannt als das Silicon Valley Indiens und als Gartenstadt, wurde 1537 von Kempe Gowda gegründet. Die Stadt verbindet historische Orte wie den Bangalore Palace und den Sommerpalast von Tipu Sultan mit wunderschönen Parks wie Lalbagh und Cubbon Park."
      },

      goa: {
        name: "Goa",
        country: "Goa",
        history:
          "Goa war bis 1961 eine portugiesische Kolonie und ist bekannt für seine wunderschönen Strände, sein lebendiges Nachtleben und seine koloniale Architektur. Die Basilika Bom Jesus, die Se-Kathedrale und Fort Aguada zeigen das portugiesische Erbe, während Strände wie Baga und Palolem Touristen aus aller Welt anziehen."
      },

      kerala: {
        name: "Kerala",
        country: "Kerala",
        history:
          "Kerala, bekannt als „Gottes eigenes Land“, ist berühmt für seine Backwaters, ayurvedischen Behandlungen und üppigen Landschaften. Es besitzt eine reiche Kultur mit Kathakali-Tanz, Bootrennen und einer traditionellen Küche, die Kokosnuss und Gewürze hervorhebt."
      },

      hyderabad: {
        name: "Hyderabad",
        country: "Telangana",
        history:
          "Hyderabad wurde 1591 von Muhammad Quli Qutb Shah gegründet und ist bekannt für seine reiche Geschichte, sein Biryani und den Perlenhandel. Das Charminar, das Golconda-Fort und die Qutb-Shahi-Gräber zeigen sein nizames Erbe. Heute ist die Stadt ein bedeutendes IT-Zentrum."
      },

      chennai: {
        name: "Chennai",
        country: "Tamil Nadu",
        history:
          "Chennai, früher Madras, ist die Hauptstadt von Tamil Nadu und das Tor zur südindischen Kultur. Gegründet 1639 von den Briten, beherbergt die Stadt Marina Beach (den zweitlängsten Stadtstrand der Welt), den Kapaleeshwarar-Tempel und Fort St. George."
      },

      kochi: {
        name: "Kochi",
        country: "Kerala",
        history:
          "Kochi, die Königin des Arabischen Meeres, war seit der Antike ein wichtiges Zentrum des Gewürzhandels. Die Stadt zeigt portugiesische, niederländische und britische Einflüsse, die man in Fort Kochi, den chinesischen Fischernetzen, dem Mattancherry-Palast und alten europäischen Kirchen erkennen kann."
      },

      mysuru: {
        name: "Mysuru",
        country: "Karnataka",
        history:
          "Mysuru, die Kulturhauptstadt Karnatakas, war die königliche Hauptstadt der Wodeyar-Dynastie. Der prächtige Mysore-Palast, der während des Dasara-Festes mit 100.000 Lichtern beleuchtet wird, ist ein Meisterwerk indo-sarazenischer Architektur."
      },

      madurai: {
        name: "Madurai",
        country: "Tamil Nadu",
        history:
          "Madurai ist eine der ältesten Städte Indiens und reicht bis ins 3. Jahrhundert v. Chr. zurück. Der Meenakshi-Tempel mit seinen farbenfrohen, mit Tausenden Skulpturen verzierten Gopurams ist ein architektonisches Wunder. Die Stadt war ein wichtiges Zentrum der Tamil-Kultur während der Sangam-Ära."
      },

      alleppey: {
        name: "Alleppey",
        country: "Kerala",
        history:
          "Alleppey (Alappuzha), bekannt als das Venedig des Ostens, ist berühmt für seine Backwaters, Kanäle und Lagunen. Hausbootfahrten bieten einen einzigartigen Einblick in das Dorfleben von Kerala. Das Nehru Trophy Boat Race ist ein spektakuläres Ereignis."
      },

      ooty: {
        name: "Ooty",
        country: "Tamil Nadu",
        history:
          "Ooty (Udhagamandalam), die Königin der Hügelstationen, wurde von den Briten gegründet. Auf 2.240 Metern in den Nilgiri-Hügeln gelegen, ist die Stadt bekannt für ihre koloniale Architektur, die UNESCO-gelistete Nilgiri-Bergbahn, botanische Gärten und Teeplantagen."
      },

      coorg: {
        name: "Coorg",
        country: "Karnataka",
        history:
          "Coorg (Kodagu), bekannt als das Schottland Indiens, ist berühmt für seine Kaffeeplantagen, nebelverhangenen Hügel und die einzigartige Kodava-Kultur. Die Region hat eine militärische Tradition und wurde vor der britischen Herrschaft von Kodava-Häuptlingen regiert."
      },

      hampi: {
        name: "Hampi",
        country: "Karnataka",
        history:
          "Hampi, ein UNESCO-Weltkulturerbe, war die Hauptstadt des Vijayanagara-Reiches (1336–1565). Die weitläufigen Ruinen umfassen Tempel, königliche Bauwerke und Basare, eingebettet in eine Landschaft aus gewaltigen Felsbrocken."
      },

      pondicherry: {
        name: "Pondicherry",
        country: "Puducherry",
        history:
          "Pondicherry war bis 1954 eine französische Kolonie und bewahrt bis heute einen starken französischen Einfluss in Architektur, Küche und Kultur. Das französische Viertel, der Sri-Aurobindo-Ashram und Auroville machen die Stadt zu einer einzigartigen Mischung aus Ost und West."
      },
        visakhapatnam: {
        name: "Visakhapatnam",
        country: "Andhra Pradesh",
        history:
          "Visakhapatnam (Vizag), bekannt als die Stadt des Schicksals und das Juwel der Ostküste, ist eine wichtige Hafenstadt mit Stränden, Hügeln und Tälern. Der alte Simhachalam-Tempel, die Borra-Höhlen und das U-Boot-Museum INS Kurusura zeigen die Vielfalt der Region."
      },

      tirupati: {
        name: "Tirupati",
        country: "Andhra Pradesh",
        history:
          "Tirupati beherbergt den heiligen Tirumala-Venkateswara-Tempel, einen der meistbesuchten Pilgerorte der Welt. Der Tempel hat uralte Ursprünge und zeigt Architektur aus mehreren indischen Dynastien."
      },

      kolkata: {
        name: "Kolkata",
        country: "Westbengalen",
        history:
          "Kolkata, die Stadt der Freude und ehemalige Hauptstadt Britisch-Indiens, ist ein kulturelles und intellektuelles Zentrum. Die 1690 gegründete Stadt beherbergt Kolonialbauten wie das Victoria Memorial und die Howrah-Brücke. Kolkata spielte eine zentrale Rolle in der Bengalischen Renaissance."
      },

      gangtok: {
        name: "Gangtok",
        country: "Sikkim",
        history:
          "Gangtok, auf 1.650 Metern Höhe gelegen, bietet atemberaubende Ausblicke auf den Kangchendzönga. Die Stadt vereint tibetisch-buddhistische Kultur — mit Klöstern wie Rumtek und Enchey — mit moderner Urbanität."
      },

      shillong: {
        name: "Shillong",
        country: "Meghalaya",
        history:
          "Shillong, bekannt als das Schottland des Ostens, war bis 1972 die Hauptstadt von Assam und ist heute die Hauptstadt von Meghalaya. Die Stadt ist berühmt für Pinienhänge, Wasserfälle wie die Elephant Falls und eine lebendige Rockmusikszene."
      },

      darjeeling: {
        name: "Darjeeling",
        country: "Westbengalen",
        history:
          "Darjeeling, die Königin der Hügel, ist weltweit berühmt für ihren Tee und die Darjeeling Himalayan Railway (UNESCO). Die Stadt bietet atemberaubende Sonnenaufgänge über dem Kangchendzönga von Tiger Hill sowie koloniale Architektur und buddhistische Klöster."
      },
        puri: {
        name: "Puri",
        country: "Odisha",
        history:
          "Puri ist einer der vier heiligen Orte des Char Dham und beherbergt den Jagannath-Tempel aus dem 12. Jahrhundert. Das jährliche Rath-Yatra-Fest zieht Millionen Pilger an. Der Strand von Puri und der nahegelegene Sonnentempel von Konark (UNESCO) sind ebenfalls wichtige Attraktionen."
      },

      guwahati: {
        name: "Guwahati",
        country: "Assam",
        history:
          "Guwahati, das Tor zum Nordosten Indiens, ist die größte Stadt in Assam und liegt am Brahmaputra. Der alte Kamakhya-Tempel auf dem Nilachal-Hügel ist ein bedeutendes Pilgerziel. Die Stadt ist ein schnell wachsendes Bildungs- und Handelszentrum."
      },

      kohima: {
        name: "Kohima",
        country: "Nagaland",
        history:
          "Kohima, auf 1.444 Metern Höhe, ist die Hauptstadt von Nagaland und berühmt für die Schlacht von Kohima (1944), einen entscheidenden Moment im Zweiten Weltkrieg. Der Kriegsfriedhof von Kohima ist eine wichtige Gedenkstätte. Das Hornbill Festival zeigt die Kultur der Naga-Stämme."
      },

      itanagar: {
        name: "Itanagar",
        country: "Arunachal Pradesh",
        history:
          "Itanagar, die Hauptstadt von Arunachal Pradesh, bedeutet „Backsteinfestung“. Die Ruinen des Ita-Forts aus dem 14.–15. Jahrhundert zeugen von der Geschichte der Region. Die Stadt ist auch die Basis für die Erkundung der Täler und Dörfer des Staates."
      },

      bhubaneswar: {
        name: "Bhubaneswar",
        country: "Odisha",
        history:
          "Bhubaneswar, die Stadt der Tempel, beherbergt mehr als 500 Tempel aus dem 6. bis 13. Jahrhundert und zeigt die Kalinga-Architektur. Zu den bekanntesten gehören die Tempel Lingaraj, Mukteshwar und Rajarani."
      },

      portblair: {
        name: "Port Blair",
        country: "Andamanen und Nikobaren",
        history:
          "Port Blair ist die Hauptstadt der Andamanen- und Nikobarinseln und das Tor zu diesem tropischen Paradies. Das historische Cellular Jail, einst von den Briten zur Verbannung politischer Gefangener genutzt, ist heute ein nationales Denkmal."
      },

      pelling: {
        name: "Pelling",
        country: "Sikkim",
        history:
          "Pelling liegt auf 2.150 Metern im westlichen Sikkim und bietet atemberaubende Ausblicke auf den Kangchendzönga. Die Stadt beherbergt das alte Pemayangtse-Kloster und die Ruinen von Rabdentse, der ehemaligen Hauptstadt von Sikkim."
      },

      tawang: {
        name: "Tawang",
        country: "Arunachal Pradesh",
        history:
          "Tawang liegt auf 3.048 Metern Höhe und beherbergt das größte Kloster Indiens, das 1680 gegründet wurde. Es ist auch der Geburtsort des 6. Dalai Lama. Der Sela-Pass, der Madhuri-See und das Kriegsdenkmal von 1962 sind wichtige Sehenswürdigkeiten."
      },

      cherrapunji: {
        name: "Cherrapunji",
        country: "Meghalaya",
        history:
          "Cherrapunji (Sohra) war einst der regenreichste Ort der Erde. Die schweren Monsunregen schaffen spektakuläre Wasserfälle wie Nohkalikai und Seven Sisters. Die lebenden Wurzelbrücken der Khasi-Stämme sind UNESCO-anerkannt."
      },
        imphal: {
        name: "Imphal",
        country: "Manipur",
        history:
          "Imphal, die Hauptstadt von Manipur, liegt auf 790 Metern und spielte eine bedeutende Rolle im Zweiten Weltkrieg. Der historische Kangla-Fort-Komplex diente jahrhundertelang als Sitz der Manipuri-Herrscher. Der Loktak-See mit seinen schwimmenden Phumdis und der Sangai-Hirsch im Keibul-Lamjao-Nationalpark sind große Attraktionen."
      },

      aizawl: {
        name: "Aizawl",
        country: "Mizoram",
        history:
          "Aizawl, die Hauptstadt von Mizoram, liegt auf 1.132 Metern Höhe und bietet beeindruckende Ausblicke. Die Stadt ist bekannt für die Mizo-Kultur, Bambushäuser, Handwebereien und christliche Traditionen. Sehenswürdigkeiten sind der Solomon-Tempel, das Mizoram State Museum und die Durtlang-Hügel."
      },

      agartala: {
        name: "Agartala",
        country: "Tripura",
        history:
          "Agartala ist die Hauptstadt von Tripura und Heimat des prächtigen Ujjayanta-Palastes, der 1901 erbaut wurde. Der Wasserpalast Neermahal im Rudrasagar-See und der Tripura-Sundari-Tempel zeigen das kulturelle Erbe der Region."
      },

      khajuraho: {
        name: "Khajuraho",
        country: "Madhya Pradesh",
        history:
          "Khajuraho ist ein UNESCO-Weltkulturerbe und berühmt für seine hinduistischen und jainistischen Tempel, die zwischen 950 und 1050 von der Chandela-Dynastie erbaut wurden. Die Tempel sind bekannt für ihre detaillierten Skulpturen, einschließlich ikonischer erotischer Darstellungen."
      },

      bhopal: {
        name: "Bhopal",
        country: "Madhya Pradesh",
        history:
          "Bhopal, die Stadt der Seen, kombiniert antike und moderne Architektur. Bedeutende Sehenswürdigkeiten sind die Taj-ul-Masajid-Moschee, einer der größten Asiens, und der nahe gelegene Sanchi-Stupa (UNESCO). Die Stadt erinnert auch an die tragische Gaskatastrophe von 1984."
      },

      gwalior: {
        name: "Gwalior",
        country: "Madhya Pradesh",
        history:
          "Gwalior, bekannt als die „Perle der indischen Forts“, verfügt über eine monumentale Festung, die Paläste, kunstvolle Tempel und den berühmten Teli-ka-Mandir beherbergt. Die Stadt hat eine lange Tradition in der klassischen indischen Musik."
      },

      indore: {
        name: "Indore",
        country: "Madhya Pradesh",
        history:
          "Indore ist die kommerzielle Hauptstadt von Madhya Pradesh und die sauberste Stadt Indiens. Die Stadt wurde 1715 von der Holkar-Dynastie gegründet. Zu den Attraktionen gehören der Rajwada-Palast, der Lal-Bagh-Palast und eine einzigartige Streetfood-Kultur."
      },

      orchha: {
        name: "Orchha",
        country: "Madhya Pradesh",
        history:
          "Orchha, gegründet im Jahr 1531, war die Hauptstadt der Bundela-Rajputen. Die Stadt liegt auf einer Insel im Betwa-Fluss und beherbergt beeindruckende Paläste und Tempel wie Jahangir Mahal, Raj Mahal und den Ram-Raja-Tempel."
      },

      ujjain: {
        name: "Ujjain",
        country: "Madhya Pradesh",
        history:
          "Ujjain ist eine der sieben heiligen Städte (Sapta Puri) des Hinduismus und Gastgeber des Kumbh Mela alle 12 Jahre. Der Mahakaleshwar-Tempel ist einer der zwölf Jyotirlingas. Ujjain war ein bedeutendes Zentrum für Mathematik und Astronomie im alten Indien."
      },

      ranchi: {
        name: "Ranchi",
        country: "Jharkhand",
        history:
          "Ranchi, die Hauptstadt von Jharkhand, war aufgrund ihres angenehmen Klimas eine Sommerhauptstadt während der britischen Zeit. Sie ist bekannt als die „Stadt der Wasserfälle“ mit Hundru, Jonha und Dassam Falls und ist die Heimat des berühmten Cricketspielers M. S. Dhoni."
      },

      daman: {
        name: "Daman",
        country: "Daman und Diu",
        history:
          "Daman war bis 1961 eine portugiesische Kolonie und bewahrt bis heute kolonialen Charme mit Festungen, Kirchen und Stränden. Die wichtigsten Sehenswürdigkeiten sind das Moti-Daman-Fort und das St.-Jerome-Fort."
      },

      silvassa: {
        name: "Silvassa",
        country: "Dadra und Nagar Haveli",
        history:
          "Silvassa, die Hauptstadt von Dadra und Nagar Haveli, ist von Wäldern und Hügeln umgeben. Die Stadt ist bekannt für Warli-Kunst, den Vanganga-See und Naturparks und hat sich zu einem wichtigen Industriezentrum entwickelt."
      },

      nagpur: {
        name: "Nagpur",
        country: "Maharashtra",
        history:
          "Nagpur, die Orangenstadt und Winterhauptstadt von Maharashtra, liegt geografisch im Zentrum Indiens. Sie beherbergt Deekshabhoomi, einen bedeutenden buddhistischen Pilgerort, an dem B. R. Ambedkar zum Buddhismus übertrat."
      },

      raipur: {
        name: "Raipur",
        country: "Chhattisgarh",
        history:
          "Raipur, die Hauptstadt von Chhattisgarh, hat historische Wurzeln aus dem 9. Jahrhundert. Die Stadt dient als Tor zu antiken Tempeln, buddhistischen Stätten und Tribal-Dörfern in Sirpur."
      },

      jabalpur: {
        name: "Jabalpur",
        country: "Madhya Pradesh",
        history:
          "Jabalpur liegt am Narmada-Fluss und ist berühmt für die Marmorfelsen von Bhedaghat, wo der Fluss durch 30 Meter hohe Marmorschluchten fließt. Der Dhuandhar-Wasserfall ist ebenfalls eine Hauptattraktion."
      },

      pachmarhi: {
        name: "Pachmarhi",
        country: "Madhya Pradesh",
        history:
          "Pachmarhi ist die einzige Hillstation in Madhya Pradesh, gelegen auf 1.067 Metern in der Satpura-Kette. Koloniale Architektur, prähistorische Höhlenmalereien und zahlreiche Wasserfälle machen den Ort besonders."
      },

      amarkantak: {
        name: "Amarkantak",
        country: "Madhya Pradesh",
        history:
          "Amarkantak liegt auf 1.065 Metern und ist eine heilige Pilgerstätte, da hier die Flüsse Narmada und Son entspringen. Der Narmada-Kund-Tempelkomplex und die Mai-Ki-Bagiya-Gärten sind wichtige Attraktionen."
      },

      chitrakoot: {
        name: "Chitrakoot",
        country: "Madhya Pradesh / Uttar Pradesh",
        history:
          "Chitrakoot ist von großer religiöser Bedeutung und gilt als der Ort, an dem Rama, Sita und Lakshmana laut Ramayana 11 Jahre ihres Exils verbrachten. Der Kamadgiri-Tempel und der Ramghat sind bedeutende Pilgerstätten."
      },
        bhimbetka: {
        name: "Bhimbetka",
        country: "Madhya Pradesh",
        history:
          "Bhimbetka ist ein UNESCO-Weltkulturerbe mit über 500 Felsunterkünften und Felsmalereien, die bis zu 30.000 Jahre alt sind. Die Kunst zeigt Jagd, Tanz, Tiere und Szenen des täglichen Lebens und gibt wertvolle Einblicke in die prähistorische Menschheitsgeschichte."
      }
    },  
    footer: {
      description: 'Ihr vertrauenswürdiger Reisebegleiter für unvergessliche Reisen. Erinnerungen schaffen, die ein Leben lang halten.',
      destinations: {
        title: 'Reiseziele',
        keralaBudgetHouseboat: 'Kerala Budget Hausboot',
        luxuryTopEndHouseboat: 'Luxus-Top-End-Hausboot',
        b2bPriceKeralaHouseboats: 'B2B-Preis Kerala Hausboote',
        houseboatsInAlappuzha: 'Hausboote in Alappuzha',
        budgetBoatHouseAllepey: 'Budget-Bootshaus Alleppey',
        budgetBoatHouseAlappuzha: 'Budget-Bootshaus Alappuzha',
        budgetHouseboatAllepey: 'Budget-Hausboot Alleppey',
        budgetHouseboatAlappuzha: 'Budget-Hausboot Alappuzha',
        budgetAlleppeyBoatHouse: 'Budget Alleppey Bootshaus',
        spotBookingBoatHouse: 'Spot-Buchung Bootshaus',
        prepaidTaxiCochinAirport: 'Prepaid-Taxiservice am Flughafen Cochin',
        budgetAlappuzhaHouseboats: 'Budget Alappuzha Hausboote',
        budgetAlleppeyHouseboats: 'Budget Alleppey Hausboote',
        b2bAlleppeyHouseboats: 'B2B Alleppey Hausboote',
        privateAlleppeyHouseboats: 'Private Alleppey Hausboote',
        houseboatsInIndia: 'Hausboote in Indien',
        sharedHouseboatsInAlleppey: 'Geteilte Hausboote in Alleppey',
        sharingHouseboatsInAlleppey: 'Sharing-Hausboote in Alleppey',
        sharingBoathouseInAlleppey: 'Sharing-Bootshaus in Alleppey',
        clubbingHouseboatsInAlleppey: 'Clubbing-Hausboote in Alleppey',
        clubbingBoathouseInAlleppey: 'Clubbing-Bootshaus in Alleppey',
        luxuryHouseboatsInAlleppey: 'Luxus-Hausboote in Alleppey',
        premiumHouseboatsInAlleppey: 'Premium-Hausboote in Alleppey',
        deluxeHouseboatsInAlleppey: 'Deluxe-Hausboote in Alleppey',
        standardHouseboatsInAlleppey: 'Standard-Hausboote in Alleppey',
        ultraLuxuryHouseboatsInAlleppey: 'Ultra-Luxus-Hausboote in Alleppey',
        ultraLuxurySharingHouseboatsInAlleppey: 'Ultra-Luxus-Sharing-Hausboote in Alleppey',
        bestHouseboatsInAlleppey: 'Beste Hausboote in Alleppey',
        bestLuxuryHouseboatsInAlleppey: 'Beste Luxus-Hausboote in Alleppey',
        bestPremiumHouseboatsInAlleppey: 'Beste Premium-Hausboote in Alleppey',
        bestDeluxeHouseboatsInAlleppey: 'Beste Deluxe-Hausboote in Alleppey',
        bestStandardHouseboatsInAlleppey: 'Beste Standard-Hausboote in Alleppey',
        bestAlappuzhaHouseboatPackages: 'Beste Alappuzha-Hausboot-Pakete',
        bestAlappuzhaBoatHousePackages: 'Beste Alappuzha-Bootshaus-Pakete'
      },
      services: { title: 'Dienstleistungen', flightBooking: 'Flugbuchung', hotelReservation: 'Hotelreservierung', tourPackages: 'Tour-Pakete' },
      company: { title: 'Unternehmen', aboutUs: 'Über uns', contact: 'Kontakt' },
      support: { title: 'Unterstützung', helpCenter: 'Hilfezentrum', terms: 'Nutzungsbedingungen', privacy: 'Datenschutzrichtlinie', refund: 'Rückerstattungsrichtlinie', faq: 'FAQ' },
      copyright: '© {{year}} Tourism Paradise. Alle Rechte vorbehalten.'
    }
  },
  pt: {
    translation: {
      destinationNotFound: {
        title: "Destino não encontrado",
        description: "Desculpe, não conseguimos encontrar o destino que você procura."
      },
      goBack: "Voltar aos destinos",
      food: "Pedir comida online",
      thingsToDo: "coisas para fazer",
      aboutDestination: "Sobre o destino",
      getInTouch: "Entre em contato",
      chatOnWhatsApp: "Conversar no WhatsApp",
      instantResponse: "Resposta imediata",
      sendEmail: "Enviar e-mail",
      emailAddress: "info@tourismparadise.com",
      houseboatShort: "Houseboat em Alleppey, dia e noite, 1 quarto com deck superior privado.",
      exploreNow: "Explorar agora",
      planYourVisitTitle: "Planeje sua visita",
      planYourVisitSubtitle: "Preencha o formulário e retornaremos em até 24 horas",
      labelFullName: "Nome completo *",
      placeholderFullName: "Digite seu nome completo",
      labelEmail: "Endereço de e-mail *",
      placeholderEmail: "your.email@example.com",
      labelPhone: "Número de telefone",
      placeholderPhone: "+91 98765 43210",
      labelMessage: "Sua mensagem *",
      placeholderMessage: "Conte-nos sobre seus planos de viagem, preferências e dúvidas...",
      sending: "Enviando...",
      sendInquiry: "Enviar consulta",
      successMessage: "✓ Mensagem enviada com sucesso! Entraremos em contato em breve.",
      whatsappMessage: "Olá! Tenho interesse em visitar {{name}}, {{country}}. Pode me enviar mais informações?",
      emailSubject: "Consulta sobre {{destinationName}}",
      emailBodyTemplate: "Olá,\n\nGostaria de saber mais sobre {{destination}}.\n\nObrigado!",
      heroTitle: 'Planeje Cada Parte da Sua Viagem',
      heroSubtitle: 'Reserve voos, hotéis, transporte e experiências em um só lugar. Sua solução de viagem completa para um planejamento perfeito.',
      houseboats: 'Casas flutuantes',
      shikara: 'Passeios de Shikara',
      flights: 'Voos',
      hotels: 'Hotéis',
      trains: 'Trens',
      buses: 'Ônibus',
      cars: 'Aluguel de carros',
      tours: 'Passeios',
      cruises: 'Cruzeiros',
      activities: 'Atividades',
      packages: 'Pacotes de férias',
      weekend: 'Fugas de fim de semana',
      beaches: 'Estadias na praia',
      mountains: 'Viagens de montanha',
      adventure: 'Aventura',
      citybreaks: 'Escapadelas na cidade',
      photography: 'Passeios fotográficos',
      insurance: 'Seguro de viagem',
      passes: 'Passe da cidade',
      budget: 'Estadias econômicas',
      bikes: 'Aluguel de bicicletas',
      villas: 'Villas & Casas',
      todaysDeals: 'Ofertas quentes de hoje',
      exploreDestinations: 'Explorar destinos',
      seaFishRestaurants: 'Restaurantes de peixe do mar',
      backwaterVillageStay: 'Estadia na aldeia de remanso',
      keralaChipsAndSpices: 'Batatas fritas e especiarias de Kerala',
      keralaHandlooms: 'Teares manuais de Kerala',
      honeymoonBoatHouse: 'Casa-barco de lua de mel',
      houseboats: 'Casas flutuantes',
      noHouseboatsFound: 'Nenhuma casa flutuante encontrada que corresponda à sua pesquisa.',

      budgetTravelDeals: 'Ofertas de viagens econômicas para você',
      offerHotels: 'Hotéis',
      offerHouseboatsDayNightCruise: 'Casas-barco em Alleppey para cruzeiro diurno e noturno',
      offerHouseboatsDayNight1Bedroom: 'Casas-barco de 1 quarto em Alleppey para dia e noite',
      offerHouseboatsDayCruise1BedroomUpperDeck: 'Casa-barco privada de 1 quarto com deck superior para cruzeiro diurno em Alappuzha',
      offerKeralaHoneymoonHouseboat: 'Casa-barco de lua de mel em Kerala',
      offerHouseboatDayNight1BedroomUpperDeck: 'Casa-barco privada de 1 quarto com deck superior para dia e noite em Alleppey',
      offerHouseboatsAlleppeyDayTripUpperDeck: 'Passeio de um dia em casa-barco com deck superior em Alleppey',
      offerHouseboatsB2BPrice1Bedroom: 'Preço B2B para casas-barco de 1 quarto em Alleppey',
      offerSharingHouseboats2People: 'Preço de casas-barco compartilhadas para 2 pessoas em Alleppey',
      offerUltraPremiumHouseboats: 'Casas-barco ultra premium em Alleppey',
      offerKeralaTourBudgetPackages: 'Pacotes turísticos econômicos em Kerala',
      offerKeralaBoating: 'Passeios de barco em Kerala',
      offerB2BTravelDealsKeralaHouseboat: 'Ofertas de viagens B2B para pacotes de casas-barco em Kerala',
      offerPetalsFlowers: 'Flores de pétalas',
      offerOrchidForSale: 'Orquídea à venda - plantas de orquídeas com flores',
      offerOxidisedOrnaments: 'Ornamentos oxidados',
      offerKeralaHandloomsSarees: 'Teares manuais de Kerala - saris kasavu de Kerala',
      offerKeralaHandicrafts: 'Artesanato de Kerala',
      offerKeralaChips: 'Batatas fritas de Kerala - batatas fritas de banana de Kerala',
      offerKeralaSpices: 'Especiarias de Kerala',
      offerDriedFish: 'Peixe seco',
      offerKeralaRealEstate: 'Imóveis em Kerala',
      offerKeralaLottery: 'Bilhetes de loteria de Kerala - bilhetes de loteria de pára-choques de Kerala',
      offerKeralaHomeDecor: 'Decoração de casa de Kerala',
      offerTransportationInKerala: 'Transporte em Kerala',
      offerKeralaCoirProducts: 'Produtos de fibra de coco de Kerala',
      whyChooseTitle: 'Por que escolher Tourism Paradise',
      whyChooseSubtitle: 'Tornamos o planejamento de viagens fácil com nossos serviços abrangentes e orientação especializada',
      showLess: 'Mostrar menos',
      showMore: 'Mostrar mais'
    },
    testimonials:// public/locales/pt/testimonials.json
{
  "sectionTitle": "O que nossos viajantes dizem",
  "sectionSubtitle": "Experiências reais de milhares de clientes satisfeitos",
  "quoteOpen": "\"",
  "indicatorAria": "Mostrar depoimento {{index}}",

  "person1": {
    "name": "Sarah Johnson",
    "location": "Nova Iorque, EUA",
    "text": "Experiência absolutamente incrível! A equipe da Tourism Paradise planejou perfeitamente nossa lua de mel. Cada detalhe foi cuidado e tivemos a viagem mais romântica pelos backwaters de Kerala.",
    "trip": "Lua de mel nos backwaters de Kerala"
  },

  "person2": {
    "name": "Michael Chen",
    "location": "Toronto, Canadá",
    "text": "Serviço profissional e atenção incrível aos detalhes. Nossa viagem em família a Kerala foi impecável graças ao planeamento especializado e ao conhecimento local da região.",
    "trip": "Aventura familiar em Kerala"
  },

  "person3": {
    "name": "Emily Rodriguez",
    "location": "Barcelona, Espanha",
    "text": "Viajo frequentemente a trabalho, mas esta viagem de lazer organizada pela Tourism Paradise foi excepcional. O itinerário personalizado e o apoio para meu retiro de Ayurveda em Kerala tornaram tudo sem stress.",
    "trip": "Retiro solo em Kerala"
  }
}
,
    featureList: {
      pilgrimPackages: 'Melhores Pacotes de Peregrinação',
      pilgrimDescription: 'Passeios de peregrinação cuidadosamente selecionados para destinos sagrados para uma jornada espiritual serena.',
      industrialTitle: 'Serviço de consultoria industrial e fornecedor de mão-de-obra',
      industrialShortDesc: 'Desde relatórios de projetos e orientação financeira até o fornecimento de mão-de-obra qualificada, como engenheiros, técnicos e empreiteiros de construção, cobrimos todas as suas necessidades industriais e empresariais.',
      industrialFullDesc: 'Preparação de relatórios de projetos, orientação financeira, supervisão de construção, preparação de planos e orçamentos, máquinas para a indústria e hotéis, trabalhadores da construção e empreiteiros, eletricidade, canalização, ar condicionado, construção, eletrodomésticos, frigorífico, máquina de lavar, ar condicionado, automóvel, automotivo, computador, telemóvel, operador de elevadores, decoração para casa, joias e ornamentos, máquina de café e lanches, pedreiro, carpinteiro, soldador, instalação de máquinas, pintor, limpeza, hotéis, motorista, fabricação de alumínio, fabricações de aço, empregados domésticos, jardinagem, operadores de veículos e máquinas pesadas, design e alojamento de websites, instalação de sistemas de energia solar serviços domésticos, técnicos de laboratório, engenheiros e médicos, professores, lavandaria, limpeza, etc.',
      educationTitle: 'Serviço de consultoria educacional',
      educationDescription: 'Engenharia, Faculdade de medicina, agricultura, informática com IA, LLB, MBA, BBA, MCA, técnicos de laboratório, fisioterapia, dentária, ayurvédica, etc.',
      legalTitle: 'Advogados e juristas',
      legalDescription: 'Acesso a aconselhamento e serviços jurídicos profissionais de advogados e juristas experientes.',
    }, 
    destinationOffers: {
      1: {
        title: "Hotéis",
        description: "Áreas de vida selvagem/florestas e atividades relacionadas: • Santuário de Vida Selvagem de Periyar (ou Reserva de Tigres de Periyar) • Áreas de florestas de Kerala • Áreas de trekking • Regiões montanhosas • Interação/observação de elefantes (comumente oferecida como safari de elefante, passeio ou observação em santuários. Em festivais, ocorre como procissão de elefantes – Gajamela)."
      },

      2: {
        title: "Houseboats em Alleppey — Cruzeiro de dia e noite",
        description: "Hotéis houseboat em Alleppey, houseboats de 1 a 22 quartos em Alappuzha. Houseboats premium e de luxo para estadias de dia e noite, opções econômicas, jetty de Muhamma, corrida Nehru Trophy, ponto de partida Alappuzha, ponto final Alleppey, rota de Kannankara."
      },

      3: {
        title: "Houseboats em Alleppey — Dia e noite (1 quarto)",
        description: "Homestays nos backwaters de Alleppey, aldeias de Alappuzha, apartamentos em Pallathuruthi, vilas na cidade, casas na árvore, resorts em ilhas, propriedades à beira do lago e da praia. Houseboats premium/luxo de 1 a 22 quartos."
      },

      4: {
        title: "Alappuzha — Cruzeiro de dia em houseboat privado (1 quarto, deck superior)",
        description: "Houseboats de 1 a 22 quartos, opções premium/luxo, jetty de Muhamma, corrida Nehru Trophy, área de Kannankara. Opções econômicas e de luxo para passeios de dia."
      },

      5: {
        title: "Houseboat de lua de mel em Kerala",
        description: "Um houseboat de lua de mel decorado romanticamente com quarto climatizado, banheiro privativo, deck panorâmico e refeições especiais, incluindo jantar à luz de velas. Uma experiência íntima e exclusiva para casais nos backwaters de Kerala."
      },

      6: {
        title: "Houseboat em Alleppey — Dia e noite (1 quarto, deck superior privado)",
        description: "Homestays nos backwaters, aldeias de Alappuzha, apartamentos em Pallathuruthi, vilas, casas na árvore, resorts de ilha, propriedades à beira do lago e da praia. Houseboats premium/luxo de 1 a 22 quartos."
      },

      7: {
        title: "Houseboats em Alleppey — 1 quarto, deck superior privado",
        description: "Alleppey, Kumarakom, Kollam, lago Ashtamudi, Kovalam, Varkala, praias de Cherai e Marari, aldeias Kainakari, Punnamada, Aryad. Houseboats premium/luxo de 1 a 22 quartos."
      },

      8: {
        title: "Passeio de dia — Houseboat com deck superior em Alleppey",
        description: "Regiões de Kainakari, Punnamada, Aryad, apartamentos em Pallathuruthi, jetty de Muhamma. Houseboats premium para cruzeiros de dia."
      },

      9: {
        title: "Houseboats em Alleppey — Preço B2B para 1 quarto",
        description: "Disponível nas categorias deluxe, premium e luxo. Dois tipos: com deck superior e sem deck. O deck superior oferece melhor vista durante o cruzeiro."
      },

      10: {
        title: "Houseboats compartilhados em Alleppey — Preço para 2 pessoas",
        description: "Experiência acessível para explorar os backwaters de Kerala. Ideal para casais ou amigos. Cruzeiro de 1 noite com refeições tradicionais e belas paisagens. Recomendado reservar com antecedência."
      },

      11: {
        title: "Houseboats ultra premium em Alleppey",
        description: "Categorias: Deluxe, Premium, Luxo e Ultra Luxo. Houseboats de 1 a mais de 22 quartos. Passeios de dia e estadias noturnas. Locais famosos: Punnamada, Kainakari, Aryad, jetty de Muhamma."
      },

      12: {
        title: "Pacotes econômicos de turismo em Kerala",
        description: "Munnar, Thekkady, vida selvagem de Periyar, Wayanad, Vagamon, Ponmudi, Idukki, Devikulam, Kuttikanam, Vattavada, Kanthalloor, áreas montanhosas, florestas, caminhada com elefantes, trekking."
      },

      13: {
        title: "Passeio de barco em Kerala",
        description: "Navegue pelos tranquilos backwaters de Kerala — arrozais, canais rurais, barcos tradicionais de madeira, comidas típicas. Perfeito para casais, famílias e viajantes solo. A partir de ₹1.999."
      },

      14: {
        title: "Ofertas B2B — Pacotes de houseboats em Kerala",
        description: "Houseboats de 1 a 22 quartos, opções premium/luxo, jetty de Muhamma, corrida Nehru Trophy, rota Kannankara."
      },

      15: {
        title: "Petals Flowers",
        description: "Seu destino confiável para plantas floridas premium em Kerala. Especializados em orquídeas exóticas — perfeitas para decoração, presentes e jardins. Plantas saudáveis e bem cuidadas."
      },

      16: {
        title: "Orquídeas à venda — Plantas de orquídeas floridas",
        description: "Orquídeas tropicais como Phalaenopsis e Vanda. Cores vibrantes, padrões únicos, flores duradouras. Fáceis de cuidar. A partir de ₹399."
      },

      17: {
        title: "Joias oxidadas de Kerala",
        description: "Joias com acabamento escurecido e antigo, obtido por oxidação de prata ou latão. Estilos tradicionais e modernos. Combina com sarees e roupas modernas."
      },

      18: {
        title: "Tecidos handloom de Kerala — Sarees Kasavu",
        description: "Seda handloom de Kerala, sarees Kasavu, materiais Kasavu para churidar, camisas handloom. Branco tradicional com borda dourada."
      },

      19: {
        title: "Artesanato de Kerala",
        description: "Esculturas em madeira, artigos de metal, tapetes de fibra de coco, itens de casca de coco, máscaras de Kathakali, Nettipattam, espelhos metálicos de Aranmula."
      },

      20: {
        title: "Chips de Kerala — Chips de banana",
        description: "Chips de banana Nendran, chips de jaca e outros petiscos tradicionais."
      },

      21: {
        title: "Especiarias de Kerala",
        description: "Especiarias premium: cardamomo, pimenta-do-reino, canela, cravo, noz-moscada — direto de fazendas orgânicas dos Gates Ocidentais."
      },

      22: {
        title: "Peixe seco",
        description: "Camarões de água doce de qualidade para exportação provenientes do lago Ashtamudi. Secos ao sol sem sal, perfeitos para curry, masala e chutney."
      },

      23: {
        title: "Imóveis em Kerala",
        description: "Casa independente de 4 quartos (3200 sq.ft) em área privilegiada. Compra, venda e aluguel de vilas, terrenos, casas e apartamentos em todo Kerala."
      },

      24: {
        title: "Bilhetes de loteria de Kerala — Loteria Bumper",
        description: "Loteria oficial do estado de Kerala: Win Win, Sthree Sakthi, Fifty Fifty, Karunya. Prêmios de até ₹1 crore."
      },

      25: {
        title: "Decoração de casa de Kerala",
        description: "Decoração de casa e produtos de fibra de coco — naturais, sustentáveis e artesanais."
      },

      26: {
        title: "Transporte em Kerala",
        description: "Guruvayur, Cachoeiras Athirapilly e Vazhachal, Basílica Arthunkal, Fort Kochi, Neeleswaram, Thenmala, templo Padmanabhaswamy, Chottanikkara, Sabarimala, Kuttalam, Ooty, Kodaikanal, Goa, Karnataka, Tamil Nadu, Chennai, Madurai, Rameswaram, Coimbatore, Valparai, Kainakari, Punnamada, Aryad, Pallathuruthi, Muhamma."
      },

      27: {
        title: "Produtos de fibra de coco de Kerala",
        description: "Produtos ecológicos e biodegradáveis: tapetes, cordas, escovas, bolsas e decoração. Populares em mercados locais e internacionais."
      },

      28: {
        title: "Pedido de comida online",
        description: "Peça comida online em Kerala — culinária local autêntica e pratos internacionais. Disponível em Cochin, Trivandrum, Kozhikode e outras cidades."
      }
    },
    houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: 'Hotéis de casas-barco em Alleppey Alappuzha Kerala',
      houseboatsHotelsInMunnar: 'Hotéis de casas-barco em Munnar',
      houseboatsHotelsInCochin: 'Hotéis de casas-barco em Cochin',
      houseboatsHotelsInKumarakomLake: 'Hotéis de casas-barco no Lago Kumarakom',
      houseboatsHotelsInKottayam: 'Hotéis de casas-barco em Kottayam',
      houseboatsHotelsInAlleppey: 'Hotéis de casas-barco em Alleppey',
      houseboatsHotelsInChottanikara: 'Hotéis de casas-barco em Chottanikara',
      houseboatsHotelsInThiruvananthapuram: 'Hotéis de casas-barco em Thiruvananthapuram',
      houseboatsHotelsInKovalamBeach: 'Hotéis de casas-barco na Praia de Kovalam',
      houseboatsHotelsInThekkady: 'Hotéis de casas-barco em Thekkady',
      houseboatsHotelsInWayanad: 'Hotéis de casas-barco em Wayanad',
      houseboatsHotelsInAlappuzha: 'Hotéis de casas-barco em Alappuzha',
      houseboatsHotelsInGuruvayur: 'Hotéis de casas-barco em Guruvayur',
      houseboatsHotelsInVagamon: 'Hotéis de casas-barco em Vagamon',
      houseboatsHotelsInAthirapillyWaterFalls: 'Hotéis de casas-barco nas Cataratas de Athirapilly',
      houseboatsHotelsInMarariBeach: 'Hotéis de casas-barco na Praia de Marari',
      houseboatsHotelsInPoovarBeach: 'Hotéis de casas-barco na Praia de Poovar',
      houseboatsHotelsInVarkalaBeach: 'Hotéis de casas-barco na Praia de Varkala',
      houseboatsHotelsInAshtamudiLake: 'Hotéis de casas-barco no Lago Ashtamudi',
      houseboatsHotelsInKanyakumariBeach: 'Hotéis de casas-barco na Praia de Kanyakumari',
      houseboatsHotelsInAlleppeyBeach: 'Hotéis de casas-barco na Praia de Alleppey',
      houseboatsHotelsInAlappuzhaLake: 'Hotéis de casas-barco no Lago Alappuzha',
      houseboatsHotelsInIndia: 'Hotéis de casas-barco na Índia',
      houseboatsHotelsInKerala: 'Hotéis de casas-barco em Kerala',
      houseBoatHotelsInAlleppey: 'Hotéis de casas-barco em Alleppey',
      boatHouseHotelsInIndia: 'Hotéis de casas-barco na Índia',
      boatHouseHotelsInKerala: 'Hotéis de casas-barco em Kerala',
      sharingHouseboatsHotelsInAlleppey: 'Hotéis de casas-barco compartilhadas em Alleppey',
      sharingBoatHouseHotelsInKerala: 'Hotéis de casas-barco compartilhadas em Kerala',
      dayTripHouseboatsHotelsInAlleppey: 'Hotéis de casas-barco para passeios de um dia em Alleppey',
      dayCruiseHouseboatsHotelsInAlleppey: 'Hotéis de casas-barco para cruzeiros de um dia em Alleppey',
      fiveStarHouseboatsHotelsInAlleppey: 'Hotéis de casas-barco de 5 estrelas em Alleppey',
      fourStarHouseboatsHotelsInAlleppey: 'Hotéis de casas-barco de 4 estrelas em Alleppey',
      threeStarHouseboatsHotelsInAlleppey: 'Hotéis de casas-barco de 3 estrelas em Alleppey',
      twoStarHouseboatsHotelsInAlleppey: 'Hotéis de casas-barco de 2 estrelas em Alleppey',
      budgetHouseboatsHotelsInAlleppey: 'Hotéis de casas-barco econômicos em Alleppey',
      standardBoatHouseHotelsInAlleppey: 'Hotéis de casas-barco padrão em Alleppey'
    }
    ,
    destinationFeed: {
      loadingMore: 'Carregando mais ofertas...',
      inquiryTitle: 'Tem perguntas? Entre em contato!',
      inquirySubtitle: 'Envie-nos sua consulta e nossa equipe entrará em contato com você em 24 horas',
      yourName: 'Seu nome *',
      yourEmail: 'Seu e-mail *',
      phoneNumber: 'Número de telefone',
      subject: 'Assunto',
      yourMessage: 'Sua mensagem *',
      sendInquiry: 'Enviar consulta',
      "bookViaWhatsapp": "Reservar via WhatsApp",
      scrollToInquiryAria: 'Rolar para o formulário de consulta'
    },
    popularDestinations: {
        title: "Explore mais destinos na Índia",
        subtitle: "Descubra coisas para fazer em cidades de diferentes estados",
        thingsToDo: "Coisas para fazer",
        comingSoonTitle: "Em breve!",
        comingSoonDescription: "Estamos adicionando destinos incríveis em {{continent}}. Volte para conferir!",
        northIndia: "Destinos do Norte da Índia",
        southIndia: "Destinos do Sul da Índia",
        eastIndia: "Destinos do Leste e Nordeste da Índia",
        centralIndia: "Destinos da Índia Central",

        delhi: {
          name: "Delhi",
          country: "Delhi",
          history:
            "A capital da Índia, Delhi, possui uma história rica de mais de 2.000 anos. A cidade está repleta de mesquitas, fortes e monumentos deixados pelos governantes mogóis. Do majestoso Forte Vermelho ao icônico India Gate, Delhi combina patrimônio antigo com infraestrutura moderna."
        },

        jaipur: {
          name: "Jaipur",
          country: "Rajasthan",
          history:
            "Conhecida como a Cidade Rosa, Jaipur é a capital do Rajasthan e parte do Triângulo Dourado da Índia. Fundada em 1727, é famosa por seus palácios reais, fortes magníficos como o Forte Amber, o Hawa Mahal e seus mercados vibrantes."
        },

        agra: {
          name: "Agra",
          country: "Uttar Pradesh",
          history:
            "Lar do mundialmente famoso Taj Mahal, uma das Sete Maravilhas do Mundo, Agra foi a capital do Império Mogol entre 1556 e 1658. Possui também o Forte de Agra e Fatehpur Sikri, exemplos impressionantes da arquitetura mogol."
        },

        varanasi: {
          name: "Varanasi",
          country: "Uttar Pradesh",
          history:
            "Uma das cidades continuamente habitadas mais antigas do mundo, Varanasi é um dos principais centros espirituais do hinduísmo. Situada às margens do sagrado Rio Ganges, é famosa por seus ghats, templos antigos e atmosfera espiritual profunda."
        },

        amritsar: {
          name: "Amritsar",
          country: "Punjab",
          history:
            "Fundada por Guru Ram Das em 1577, Amritsar abriga o Templo Dourado, o local mais sagrado do Sikhismo. A cidade também testemunhou o trágico massacre de Jallianwala Bagh em 1919 e representa a resiliência cultural e espiritual dos sikhs."
        },

        manali: {
          name: "Manali",
          country: "Himachal Pradesh",
          history:
            "Localizada a 2.050 metros no Himalaia, Manali é uma estação de montanha famosa por sua beleza natural, esportes de aventura e o antigo templo de Hidimba. É o portão de entrada para o Passo Rohtang e o Vale Solang."
        },

        leh: {
          name: "Leh",
          country: "Ladakh",
          history:
            "Leh, capital de Ladakh, está situada a cerca de 3.500 metros de altitude e foi um importante ponto da antiga Rota da Seda. É conhecida por suas paisagens áridas, mosteiros budistas e lagos de alta altitude como o Pangong Tso."
        },

        rishikesh: {
          name: "Rishikesh",
          country: "Uttarakhand",
          history:
            "Conhecida como a Capital Mundial do Yoga, Rishikesh fica às margens do Rio Ganges. Sua fama cresceu após a visita dos Beatles em 1968. A cidade é repleta de ashrams, centros de yoga e a famosa ponte Lakshman Jhula."
        },

        udaipur: {
          name: "Udaipur",
          country: "Rajasthan",
          history:
            "Udaipur, a Cidade dos Lagos e o 'Veneza do Oriente', foi fundada em 1559 por Maharana Udai Singh II. É famosa por seus palácios magníficos, incluindo o City Palace e o Lake Palace, além de lagos pitorescos como Pichola e Fateh Sagar."
        },

        shimla: {
          name: "Shimla",
          country: "Himachal Pradesh",
          history:
            "Shimla foi a capital de verão da Índia Britânica e conserva sua arquitetura colonial vitoriana, como o Viceregal Lodge e a Christ Church. A cidade fica entre montanhas deslumbrantes e possui a ferrovia Kalka-Shimla, reconhecida pela UNESCO."
        },

        mussoorie: {
          name: "Mussoorie",
          country: "Uttarakhand",
          history:
            "Conhecida como a Rainha das Colinas, Mussoorie foi fundada em 1826 pelos britânicos. Com 2.005 metros de altitude, oferece vistas incríveis do Vale Doon e do Himalaia. Gun Hill, Kempty Falls e Camel’s Back Road são atrações populares."
        },

        srinagar: {
          name: "Srinagar",
          country: "Jammu e Caxemira",
          history:
            "Srinagar, capital de verão de Jammu e Caxemira, é famosa pelo Lago Dal, pelos jardins mogóis como Shalimar Bagh e Nishat Bagh, e pelas tradicionais casas flutuantes. Conhecida como o 'Paraíso na Terra'."
        },

        jaisalmer: {
          name: "Jaisalmer",
          country: "Rajasthan",
          history:
            "A Cidade Dourada emerge do Deserto de Thar com seu forte de arenito amarelo e havelis esculpidas. Fundada em 1156, foi um importante centro comercial das rotas de caravanas."
        },

        nainital: {
          name: "Nainital",
          country: "Uttarakhand",
          history:
            "Construída ao redor do Lago Naini, Nainital foi desenvolvida pelos britânicos em 1841. O lago em formato de pera, os mirantes Snow View Point e o templo Naina Devi são atrações importantes."
        },

        vrindavan: {
          name: "Vrindavan",
          country: "Uttar Pradesh",
          history:
            "Vrindavan é um dos locais mais sagrados do Hinduísmo e acredita-se ser onde Krishna passou sua infância. Com mais de 5.000 templos, incluindo o templo Banke Bihari e o templo ISKCON, é um destino espiritual de grande importância."
        },

        haridwar: {
          name: "Haridwar",
          country: "Uttarakhand",
          history:
            "Haridwar é uma das sete cidades mais sagradas do Hinduísmo. É o local onde o Rio Ganges entra nas planícies indianas. A cidade recebe o Kumbh Mela a cada 12 anos. A cerimônia Ganga Aarti em Har Ki Pauri é uma experiência espiritual inesquecível."
        },
          mumbai: {
          name: "Mumbai",
          country: "Maharashtra",
          history:
            "Mumbai, a capital financeira da Índia e a Cidade dos Sonhos, originalmente era formada por sete ilhas. Hoje abriga Bollywood, o Gateway of India, Marine Drive e uma mistura única de arquitetura colonial e arranha-céus modernos."
        },

        bengaluru: {
          name: "Bengaluru",
          country: "Karnataka",
          history:
            "Bengaluru, conhecida como o Vale do Silício da Índia e a Cidade Jardim, foi fundada em 1537 por Kempe Gowda. Combina locais históricos como o Palácio de Bangalore e o Palácio de Verão de Tipu Sultan com parques exuberantes como Lalbagh e Cubbon Park."
        },

        goa: {
          name: "Goa",
          country: "Goa",
          history:
            "Goa foi uma colônia portuguesa até 1961 e é famosa por suas praias deslumbrantes, vida noturna vibrante e arquitetura colonial. A Basílica do Bom Jesus, a Sé Catedral e o Forte Aguada refletem sua herança portuguesa."
        },

        kerala: {
          name: "Kerala",
          country: "Kerala",
          history:
            "Conhecido como o 'País de Deus', Kerala é famoso pelos backwaters, tratamentos ayurvédicos e paisagens exuberantes. Tem uma rica cultura com danças Kathakali, corridas de barcos e culinária tradicional com coco e especiarias."
        },

        hyderabad: {
          name: "Hyderabad",
          country: "Telangana",
          history:
            "Fundada em 1591 por Muhammad Quli Qutb Shah, Hyderabad é conhecida por sua história, culinária biryani e comércio de pérolas. O Charminar, o Forte Golconda e os túmulos Qutb Shahi representam sua herança nizâmia."
        },

        chennai: {
          name: "Chennai",
          country: "Tamil Nadu",
          history:
            "Chennai, anteriormente Madras, é a capital de Tamil Nadu e porta de entrada para a cultura do sul da Índia. Fundada pelos britânicos em 1639, abriga a Marina Beach, o Templo Kapaleeshwarar e o Forte St. George."
        },

        kochi: {
          name: "Cochim",
          country: "Kerala",
          history:
            "Cochim, conhecida como a Rainha do Mar Arábico, foi um importante centro do comércio de especiarias. A cidade mostra influências portuguesas, holandesas e britânicas, visíveis em Fort Kochi, as redes de pesca chinesas e o Palácio Mattancherry."
        },

        mysuru: {
          name: "Mysuru",
          country: "Karnataka",
          history:
            "Mysuru, a capital cultural de Karnataka, foi a capital da dinastia Wodeyar. O majestoso Palácio de Mysore, iluminado com 100.000 luzes durante o festival Dasara, é um destaque arquitetônico."
        },

        madurai: {
          name: "Madurai",
          country: "Tamil Nadu",
          history:
            "Uma das cidades mais antigas da Índia, Madurai remonta ao século III a.C. O templo Meenakshi Amman, com seus gopurams coloridos repletos de esculturas, é uma maravilha arquitetônica."
        },

        alleppey: {
          name: "Alleppey",
          country: "Kerala",
          history:
            "Conhecida como a Veneza do Oriente, Alleppey é famosa por seus backwaters, canais e lagoas. As tradicionais viagens de houseboat mostram o estilo de vida rural de Kerala."
        },

        ooty: {
          name: "Ooty",
          country: "Tamil Nadu",
          history:
            "Ooty, a Rainha das Montanhas, foi fundada pelos britânicos como retiro de verão. Localizada nos Montes Nilgiri, abriga arquitetura colonial, a ferrovia Nilgiri Mountain (UNESCO) e plantações de chá."
        },

        coorg: {
          name: "Coorg",
          country: "Karnataka",
          history:
            "Conhecida como a Escócia da Índia, Coorg é famosa por suas plantações de café, colinas com neblina e a cultura Kodava. A região possui fortes tradições marciais."
        },

        hampi: {
          name: "Hampi",
          country: "Karnataka",
          history:
            "Um Patrimônio Mundial da UNESCO, Hampi foi a capital do Império Vijayanagara. Suas ruínas incluem templos, estruturas reais e mercados em meio a uma paisagem única de rochas gigantes."
        },

        pondicherry: {
          name: "Pondicherry",
          country: "Puducherry",
          history:
            "Pondicherry foi uma colônia francesa até 1954 e preserva forte influência francesa em sua arquitetura, culinária e cultura. O French Quarter, o Ashram Sri Aurobindo e Auroville tornam a cidade única."
        },
          visakhapatnam: {
          name: "Visakhapatnam",
          country: "Andhra Pradesh",
          history:
            "Visakhapatnam (Vizag), conhecida como a Cidade do Destino e a Joia da Costa Leste, é uma importante cidade portuária com praias, colinas e vales. O antigo templo Simhachalam, as cavernas Borra e o museu-submarino INS Kurusura destacam sua diversidade."
        },

        tirupati: {
          name: "Tirupati",
          country: "Andhra Pradesh",
          history:
            "Tirupati abriga o sagrado Templo Tirumala Venkateswara, um dos locais de peregrinação mais visitados do mundo. O templo possui origens antigas e arquitetura influenciada por várias dinastias."
        },

        kolkata: {
          name: "Calcutá",
          country: "Bengala Ocidental",
          history:
            "Calcutá, a Cidade da Alegria e antiga capital da Índia Britânica, é um centro cultural e intelectual. Fundada em 1690, possui arquitetura colonial como o Victoria Memorial e a Ponte Howrah."
        },

        gangtok: {
          name: "Gangtok",
          country: "Sikkim",
          history:
            "Localizada a 1.650 metros, Gangtok oferece vistas impressionantes do Monte Kanchenjunga. Combina cultura budista tibetana — com monastérios como Rumtek e Enchey — com modernidade."
        },

        shillong: {
          name: "Shillong",
          country: "Meghalaya",
          history:
            "Conhecida como a Escócia do Oriente, Shillong possui colinas de pinheiros, cachoeiras como Elephant Falls e uma famosa cena musical que lhe rendeu o título de 'Capital do Rock da Índia'."
        },

        darjeeling: {
          name: "Darjeeling",
          country: "Bengala Ocidental",
          history:
            "A Rainha das Montanhas, Darjeeling é famosa por seus chás e pela ferrovia Himalayan Railway (UNESCO). Oferece vistas incríveis do Kanchenjunga a partir de Tiger Hill."
        },
          puri: {
          name: "Puri",
          country: "Odisha",
          history:
            "Puri é um dos quatro locais sagrados do Char Dham e abriga o Templo Jagannath do século XII. A famosa Rath Yatra atrai milhões de fiéis todos os anos."
        },

        guwahati: {
          name: "Guwahati",
          country: "Assam",
          history:
            "Guwahati é a porta de entrada do Nordeste da Índia, situada às margens do Rio Brahmaputra. O templo Kamakhya é um dos principais locais de peregrinação do país."
        },

        kohima: {
          name: "Kohima",
          country: "Nagaland",
          history:
            "Kohima, localizada a 1.444 metros, é famosa pela Batalha de Kohima de 1944. O Cemitério de Guerra e o Festival Hornbill são destaques culturais."
        },

        itanagar: {
          name: "Itanagar",
          country: "Arunachal Pradesh",
          history:
            "Itanagar, capital de Arunachal Pradesh, é conhecida pelas ruínas do Forte Ita (séculos XIV–XV) e pelo monastério Buddha Vihar."
        },

        bhubaneswar: {
          name: "Bhubaneswar",
          country: "Odisha",
          history:
            "Bhubaneswar é a Cidade dos Templos, com mais de 500 templos de estilos arquitetônicos Kalinga. O Templo Lingaraj é o mais famoso."
        },

        portblair: {
          name: "Port Blair",
          country: "Andaman e Nicobar",
          history:
            "Port Blair é a porta de entrada para as ilhas Andaman e Nicobar. A histórica prisão Cellular Jail é um marco importante."
        },

        pelling: {
          name: "Pelling",
          country: "Sikkim",
          history:
            "Pelling oferece vistas magníficas do Kanchenjunga e abriga o monastério Pemayangtse e as ruínas da antiga capital Rabdentse."
        },

        tawang: {
          name: "Tawang",
          country: "Arunachal Pradesh",
          history:
            "Tawang, a 3.048 metros, abriga o maior mosteiro da Índia, fundado em 1680. É também o local de nascimento do 6º Dalai Lama."
        },

        cherrapunji: {
          name: "Cherrapunji",
          country: "Meghalaya",
          history:
            "Cherrapunji (Sohra) já foi o lugar mais chuvoso da Terra. Suas pontes vivas de raízes, criadas pelos Khasi, são reconhecidas pela UNESCO."
        },
          imphal: {
          name: "Imphal",
          country: "Manipur",
          history:
            "Imphal desempenhou um papel importante durante a Segunda Guerra Mundial. Abriga o histórico Forte Kangla e o Lago Loktak, famoso por suas ilhas flutuantes chamadas phumdis."
        },

        aizawl: {
          name: "Aizawl",
          country: "Mizoram",
          history:
            "Aizawl está situada a 1.132 metros e reflete a cultura Mizo com suas casas de bambu, artesanato e festivais vibrantes."
        },

        agartala: {
          name: "Agartala",
          country: "Tripura",
          history:
            "Agartala abriga o magnífico Palácio Ujjayanta e o palácio aquático Neermahal, além do templo Tripura Sundari."
        },

        khajuraho: {
          name: "Khajuraho",
          country: "Madhya Pradesh",
          history:
            "Khajuraho, Patrimônio Mundial da UNESCO, é famoso por seus templos hindus e jainistas com esculturas detalhadas, incluindo figuras eróticas."
        },

        bhopal: {
          name: "Bhopal",
          country: "Madhya Pradesh",
          history:
            "Bhopal, a Cidade dos Lagos, combina arquitetura antiga e moderna. Destaca-se o Taj-ul-Masajid e o Estupa de Sanchi (UNESCO)."
        },

        gwalior: {
          name: "Gwalior",
          country: "Madhya Pradesh",
          history:
            "Gwalior é famosa por sua enorme fortaleza que abriga palácios e templos esculpidos. A cidade tem um legado importante na música clássica."
        },

        indore: {
          name: "Indore",
          country: "Madhya Pradesh",
          history:
            "Indore é a capital comercial de Madhya Pradesh e conhecida por sua culinária. Possui o Palácio Rajwada, Lal Bagh e mercados vibrantes."
        },

        orchha: {
          name: "Orchha",
          country: "Madhya Pradesh",
          history:
            "Orchha foi fundada em 1531 e abriga palácios belíssimos como Jahangir Mahal e Raj Mahal."
        },

        ujjain: {
          name: "Ujjain",
          country: "Madhya Pradesh",
          history:
            "Ujjain é um dos sete locais sagrados do Hinduísmo e abriga o templo Mahakaleshwar, um dos doze jyotirlingas."
        },

        ranchi: {
          name: "Ranchi",
          country: "Jharkhand",
          history:
            "Ranchi, a Cidade das Cachoeiras, abriga quedas como Hundru e Jonha. É também a cidade natal do jogador M. S. Dhoni."
        },

        daman: {
          name: "Daman",
          country: "Daman e Diu",
          history:
            "Daman foi uma colônia portuguesa até 1961 e conserva arquitetura colonial, fortes e belas praias."
        },

        silvassa: {
          name: "Silvassa",
          country: "Dadra e Nagar Haveli",
          history:
            "Silvassa é conhecida por sua arte Warli, parques naturais e lagos pitorescos, além de ser um importante centro industrial."
        },

        nagpur: {
          name: "Nagpur",
          country: "Maharashtra",
          history:
            "Conhecida como a Cidade das Laranjas, Nagpur está no centro geográfico da Índia e abriga o importante local budista Deekshabhoomi."
        },

        raipur: {
          name: "Raipur",
          country: "Chhattisgarh",
          history:
            "Raipur tem origem no século IX e é o portão de entrada para locais antigos e aldeias tribais, especialmente em Sirpur."
        },

        jabalpur: {
          name: "Jabalpur",
          country: "Madhya Pradesh",
          history:
            "Jabalpur é famosa pelas Rochas de Mármore de Bhedaghat e pelas quedas Dhuandhar."
        },

        pachmarhi: {
          name: "Pachmarhi",
          country: "Madhya Pradesh",
          history:
            "A única estação de montanha em Madhya Pradesh, Pachmarhi possui arquitetura colonial, cavernas pré-históricas e cachoeiras."
        },

        amarkantak: {
          name: "Amarkantak",
          country: "Madhya Pradesh",
          history:
            "Amarkantak é o local de origem dos rios Narmada e Son, e um importante centro espiritual."
        },

        chitrakoot: {
          name: "Chitrakoot",
          country: "Madhya Pradesh / Uttar Pradesh",
          history:
            "Chitrakoot é um local sagrado onde, segundo o Ramayana, Rama, Sita e Lakshmana viveram por 11 anos."
        },
          bhimbetka: {
          name: "Bhimbetka",
          country: "Madhya Pradesh",
          history:
            "Bhimbetka é um Patrimônio Mundial da UNESCO com mais de 500 abrigos rochosos contendo pinturas rupestres de até 30.000 anos. As artes representam caça, dança, vida diária e a evolução humana na pré-história."
        }
    },
    footer: {
      description: 'Seu companheiro de viagem confiável para jornadas inesquecíveis. Criando memórias que duram a vida toda.',
      destinations: {
        title: 'Destinos',
        keralaBudgetHouseboat: 'Casa-barco econômica em Kerala',
        luxuryTopEndHouseboat: 'Casa-barco de luxo de primeira linha',
        b2bPriceKeralaHouseboats: 'Preço B2B de casas-barco em Kerala',
        houseboatsInAlappuzha: 'Casas-barco em Alappuzha',
        budgetBoatHouseAllepey: 'Casa-barco econômica em Alleppey',
        budgetBoatHouseAlappuzha: 'Casa-barco econômica em Alappuzha',
        budgetHouseboatAllepey: 'Casa-barco econômica em Alleppey',
        budgetHouseboatAlappuzha: 'Casa-barco econômica em Alappuzha',
        budgetAlleppeyBoatHouse: 'Casa-barco econômica em Alleppey',
        spotBookingBoatHouse: 'Reserva de casa-barco no local',
        prepaidTaxiCochinAirport: 'Serviço de táxi pré-pago no aeroporto de Cochin',
        budgetAlappuzhaHouseboats: 'Casas-barco econômicas em Alappuzha',
        budgetAlleppeyHouseboats: 'Casas-barco econômicas em Alleppey',
        b2bAlleppeyHouseboats: 'Casas-barco B2B em Alleppey',
        privateAlleppeyHouseboats: 'Casas-barco privadas em Alleppey',
        houseboatsInIndia: 'Casas-barco na Índia',
        sharedHouseboatsInAlleppey: 'Casas-barco compartilhadas em Alleppey',
        sharingHouseboatsInAlleppey: 'Casas-barco compartilhadas em Alleppey',
        sharingBoathouseInAlleppey: 'Casa-barco compartilhada em Alleppey',
        clubbingHouseboatsInAlleppey: 'Casas-barco para festas em Alleppey',
        clubbingBoathouseInAlleppey: 'Casa-barco para festas em Alleppey',
        luxuryHouseboatsInAlleppey: 'Casas-barco de luxo em Alleppey',
        premiumHouseboatsInAlleppey: 'Casas-barco premium em Alleppey',
        deluxeHouseboatsInAlleppey: 'Casas-barco de luxo em Alleppey',
        standardHouseboatsInAlleppey: 'Casas-barco padrão em Alleppey',
        ultraLuxuryHouseboatsInAlleppey: 'Casas-barco de ultra luxo em Alleppey',
        ultraLuxurySharingHouseboatsInAlleppey: 'Casas-barco compartilhadas de ultra luxo em Alleppey',
        bestHouseboatsInAlleppey: 'Melhores casas-barco em Alleppey',
        bestLuxuryHouseboatsInAlleppey: 'Melhores casas-barco de luxo em Alleppey',
        bestPremiumHouseboatsInAlleppey: 'Melhores casas-barco premium em Alleppey',
        bestDeluxeHouseboatsInAlleppey: 'Melhores casas-barco de luxo em Alleppey',
        bestStandardHouseboatsInAlleppey: 'Melhores casas-barco padrão em Alleppey',
        bestAlappuzhaHouseboatPackages: 'Melhores pacotes de casas-barco em Alappuzha',
        bestAlappuzhaBoatHousePackages: 'Melhores pacotes de casas-barco em Alappuzha'
      },
      services: { title: 'Serviços', flightBooking: 'Reserva de voos', hotelReservation: 'Reserva de hotel', tourPackages: 'Pacotes turísticos' },
      company: { title: 'Empresa', aboutUs: 'Sobre nós', contact: 'Contato' },
      support: { title: 'Suporte', helpCenter: 'Central de ajuda', terms: 'Termos de serviço', privacy: 'Política de privacidade', refund: 'Política de reembolso', faq: 'Perguntas frequentes' },
      copyright: '© {{year}} Tourism Paradise. Todos os direitos reservados.'
    }
  },
  it: {
    translation: {
      destinationNotFound: {
        title: "Destinazione non trovata",
        description: "Spiacenti, non siamo riusciti a trovare la destinazione che stai cercando."
      },
      goBack: "Torna alle destinazioni",
      food: "Ordina cibo online",
      thingsToDo: "cose da fare",
      aboutDestination: "Informazioni",
      getInTouch: "Contattaci",
      chatOnWhatsApp: "Chatta su WhatsApp",
      instantResponse: "Risposta immediata",
      sendEmail: "Invia email",
      emailAddress: "info@tourismparadise.com",
      houseboatShort: "Houseboat ad Alleppey, giorno e notte, 1 camera privata sul ponte superiore.",
      exploreNow: "Esplora ora",
      planYourVisitTitle: "Pianifica la tua visita",
      planYourVisitSubtitle: "Compila il modulo e ti risponderemo entro 24 ore",
      labelFullName: "Nome completo *",
      placeholderFullName: "Inserisci il tuo nome completo",
      labelEmail: "Indirizzo email *",
      placeholderEmail: "your.email@example.com",
      labelPhone: "Numero di telefono",
      placeholderPhone: "+91 98765 43210",
      labelMessage: "Il tuo messaggio *",
      placeholderMessage: "Parlaci dei tuoi piani di viaggio, preferenze e domande...",
      sending: "Invio...",
      sendInquiry: "Invia richiesta",
      successMessage: "✓ Messaggio inviato con successo! Ti contatteremo presto.",
      whatsappMessage: "Ciao! Vorrei visitare {{name}}, {{country}}. Puoi inviarmi maggiori informazioni?",
      emailSubject: "Richiesta su {{destinationName}}",
      emailBodyTemplate: "Ciao,\n\nVorrei sapere di più su {{destination}}.\n\nGrazie!",
      heroTitle: 'Pianifica Ogni Parte del Tuo Viaggio',
      heroSubtitle: 'Prenota voli, hotel, trasporti ed esperienze in un unico posto. La tua soluzione di viaggio completa per una pianificazione senza interruzioni.',
      houseboats: 'Case galleggianti',
      shikara: 'Giri in Shikara',
      flights: 'Voli',
      hotels: 'Hotel',
      trains: 'Treni',
      buses: 'Autobus',
      cars: 'Noleggio auto',
      tours: 'Tour',
      cruises: 'Crociere',
      activities: 'Attività',
      packages: 'Pacchetti vacanza',
      weekend: 'Fughe nel fine settimana',
      beaches: 'Soggiorni in spiaggia',
      mountains: 'Viaggi in montagna',
      adventure: 'Avventura',
      citybreaks: 'Brevi viaggi in città',
      photography: 'Tour fotografici',
      insurance: 'Assicurazione di viaggio',
      passes: 'City Pass',
      budget: 'Soggiorni economici',
      bikes: 'Noleggio bici',
      villas: 'Ville & Case',
      todaysDeals: 'Offerte speciali di oggi',
      exploreDestinations: 'Esplora destinazioni',
      seaFishRestaurants: 'Ristoranti di pesce di mare',
      backwaterVillageStay: 'Soggiorno in un villaggio di backwater',
      keralaChipsAndSpices: 'Patatine e spezie del Kerala',
      keralaHandlooms: 'Telai a mano del Kerala',
      honeymoonBoatHouse: 'Casa galleggiante per la luna di miele',
      houseboats: 'Case galleggianti',
      noHouseboatsFound: 'Nessuna casa galleggiante trovata corrispondente alla tua ricerca.',

      budgetTravelDeals: 'Offerte di viaggio economiche per te',
      offerHotels: 'Hotel',
      offerHouseboatsDayNightCruise: 'Case galleggianti ad Alleppey per crociere diurne e notturne',
      offerHouseboatsDayNight1Bedroom: 'Case galleggianti con 1 camera da letto ad Alleppey per giorno e notte',
      offerHouseboatsDayCruise1BedroomUpperDeck: 'Casa galleggiante privata con 1 camera da letto e ponte superiore per crociera diurna ad Alappuzha',
      offerKeralaHoneymoonHouseboat: 'Casa galleggiante per luna di miele in Kerala',
      offerHouseboatDayNight1BedroomUpperDeck: 'Casa galleggiante privata con 1 camera da letto e ponte superiore per giorno e notte ad Alleppey',
      offerHouseboatsAlleppeyDayTripUpperDeck: 'Gita di un giorno in casa galleggiante con ponte superiore ad Alleppey',
      offerHouseboatsB2BPrice1Bedroom: 'Prezzo B2B per case galleggianti con 1 camera da letto ad Alleppey',
      offerSharingHouseboats2People: 'Prezzo per case galleggianti condivise per 2 persone ad Alleppey',
      offerUltraPremiumHouseboats: 'Case galleggianti ultra premium ad Alleppey',
      offerKeralaTourBudgetPackages: 'Pacchetti turistici economici per il Kerala',
      offerKeralaBoating: 'Nautica in Kerala',
      offerB2BTravelDealsKeralaHouseboat: 'Offerte di viaggio B2B per pacchetti di case galleggianti in Kerala',
      offerPetalsFlowers: 'Fiori di petali',
      offerOrchidForSale: 'Orchidea in vendita - piante di orchidee in fiore',
      offerOxidisedOrnaments: 'Ornamenti ossidati',
      offerKeralaHandloomsSarees: 'Telai a mano del Kerala - sari kasavu del Kerala',
      offerKeralaHandicrafts: 'Artigianato del Kerala',
      offerKeralaChips: 'Patatine del Kerala - patatine di banana del Kerala',
      offerKeralaSpices: 'Spezie del Kerala',
      offerDriedFish: 'Pesce essiccato',
      offerKeralaRealEstate: 'Immobiliare in Kerala',
      offerKeralaLottery: 'Biglietti della lotteria del Kerala - biglietti della lotteria paraurti del Kerala',
      offerKeralaHomeDecor: 'Arredamento per la casa del Kerala',
      offerTransportationInKerala: 'Trasporti in Kerala',
      offerKeralaCoirProducts: 'Prodotti in fibra di cocco del Kerala',
      whyChooseTitle: 'Perché scegliere Tourism Paradise',
      whyChooseSubtitle: 'Rendiamo la pianificazione dei viaggi semplice con i nostri servizi completi e la guida esperta',
      showLess: 'Mostra meno',
      showMore: 'Mostra altro'
    },featureList: {
      pilgrimPackages: 'Migliori Pacchetti di Pellegrinaggio',
      pilgrimDescription: 'Tour di pellegrinaggio curati con attenzione verso destinazioni sacre per un sereno viaggio spirituale.',
      industrialTitle: 'Servizio di consulenza industriale e fornitore di manodopera',
      industrialShortDesc: 'Dalla preparazione di rapporti di progetto e orientamento finanziario alla fornitura di manodopera qualificata come ingegneri, tecnici e appaltatori edili, copriamo tutte le vostre esigenze industriali e commerciali.',
      industrialFullDesc: 'Preparazione di rapporti di progetto, orientamento finanziario, supervisione della costruzione, preparazione di piani e preventivi, macchinari per l\'industria e hotel, manodopera e appaltatori edili, elettricità, idraulica, aria condizionata, costruzione, elettrodomestici, frigorifero, lavatrice, aria condizionata, automobile, automotive, computer, telefono cellulare, operatore di ascensore, decorazioni per la casa, gioielli e ornamenti, macchina per caffè e snack, muratore, falegname, saldatore, installazione di macchinari, pittore, pulizie, hotel, autista, fabbricazione di alluminio, fabbricazioni in acciaio, personale domestico, lavori di giardinaggio, operatori di veicoli pesanti e macchinari, progettazione e hosting di siti web, installazione di sistemi solari servizi a domicilio, tecnici di laboratorio, ingegneri e medici, insegnanti, lavanderia, pulizia della casa, ecc.',
      educationTitle: 'Servizio di consulenza educativa',
      educationDescription: 'Ingegneria, Collegio medico, agricoltura, informatica IA, LLB, MBA, BBA, MCA, tecnici di laboratorio, fisioterapia, odontoiatria, ayurvedico, ecc.',
      legalTitle: 'Avvocati e legali',
      legalDescription: 'Accesso a consulenza e servizi legali professionali da avvocati e legali esperti.',
    },
    testimonials:// public/locales/it/testimonials.json
{
  "sectionTitle": "Cosa dicono i nostri viaggiatori",
  "sectionSubtitle": "Esperienze reali di migliaia di clienti soddisfatti",
  "quoteOpen": "\"",
  "indicatorAria": "Mostra testimonianza {{index}}",

  "person1": {
    "name": "Sarah Johnson",
    "location": "New York, USA",
    "text": "Esperienza assolutamente incredibile! Il team di Tourism Paradise ha pianificato perfettamente la nostra luna di miele. Ogni dettaglio è stato curato e abbiamo vissuto il viaggio più romantico nei backwaters del Kerala.",
    "trip": "Luna di miele nei backwaters del Kerala"
  },

  "person2": {
    "name": "Michael Chen",
    "location": "Toronto, Canada",
    "text": "Servizio professionale e incredibile attenzione ai dettagli. Il nostro viaggio in famiglia in Kerala è stato perfetto grazie alla loro pianificazione esperta e alla conoscenza locale della zona.",
    "trip": "Avventura in famiglia in Kerala"
  },

  "person3": {
    "name": "Emily Rodriguez",
    "location": "Barcellona, Spagna",
    "text": "Viaggio spesso per lavoro, ma questo viaggio di piacere organizzato da Tourism Paradise è stato eccezionale. L'itinerario personalizzato e il supporto per il mio ritiro ayurvedico in Kerala lo hanno reso senza stress.",
    "trip": "Ritiro in solitaria in Kerala"
  }
}
,
     houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: 'Hotel case galleggianti ad Alleppey Alappuzha Kerala',
      houseboatsHotelsInMunnar: 'Hotel case galleggianti a Munnar',
      houseboatsHotelsInCochin: 'Hotel case galleggianti a Cochin',
      houseboatsHotelsInKumarakomLake: 'Hotel case galleggianti nel lago Kumarakom',
      houseboatsHotelsInKottayam: 'Hotel case galleggianti a Kottayam',
      houseboatsHotelsInAlleppey: 'Hotel case galleggianti ad Alleppey',
      houseboatsHotelsInChottanikara: 'Hotel case galleggianti a Chottanikara',
      houseboatsHotelsInThiruvananthapuram: 'Hotel case galleggianti a Thiruvananthapuram',
      houseboatsHotelsInKovalamBeach: 'Hotel case galleggianti sulla spiaggia di Kovalam',
      houseboatsHotelsInThekkady: 'Hotel case galleggianti a Thekkady',
      houseboatsHotelsInWayanad: 'Hotel case galleggianti a Wayanad',
      houseboatsHotelsInAlappuzha: 'Hotel case galleggianti ad Alappuzha',
      houseboatsHotelsInGuruvayur: 'Hotel case galleggianti a Guruvayur',
      houseboatsHotelsInVagamon: 'Hotel case galleggianti a Vagamon',
      houseboatsHotelsInAthirapillyWaterFalls: 'Hotel case galleggianti alle cascate di Athirapilly',
      houseboatsHotelsInMarariBeach: 'Hotel case galleggianti sulla spiaggia di Marari',
      houseboatsHotelsInPoovarBeach: 'Hotel case galleggianti sulla spiaggia di Poovar',
      houseboatsHotelsInVarkalaBeach: 'Hotel case galleggianti sulla spiaggia di Varkala',
      houseboatsHotelsInAshtamudiLake: 'Hotel case galleggianti nel lago Ashtamudi',
      houseboatsHotelsInKanyakumariBeach: 'Hotel case galleggianti sulla spiaggia di Kanyakumari',
      houseboatsHotelsInAlleppeyBeach: 'Hotel case galleggianti sulla spiaggia di Alleppey',
      houseboatsHotelsInAlappuzhaLake: 'Hotel case galleggianti nel lago di Alappuzha',
      houseboatsHotelsInIndia: 'Hotel case galleggianti in India',
      houseboatsHotelsInKerala: 'Hotel case galleggianti in Kerala',
      houseBoatHotelsInAlleppey: 'Hotel case galleggianti ad Alleppey',
      boatHouseHotelsInIndia: 'Hotel case galleggianti in India',
      boatHouseHotelsInKerala: 'Hotel case galleggianti in Kerala',
      sharingHouseboatsHotelsInAlleppey: 'Hotel case galleggianti condivise ad Alleppey',
      sharingBoatHouseHotelsInKerala: 'Hotel case galleggianti condivise in Kerala',
      dayTripHouseboatsHotelsInAlleppey: 'Hotel case galleggianti per gite di un giorno ad Alleppey',
      dayCruiseHouseboatsHotelsInAlleppey: 'Hotel case galleggianti per crociere di un giorno ad Alleppey',
      fiveStarHouseboatsHotelsInAlleppey: 'Hotel case galleggianti a 5 stelle ad Alleppey',
      fourStarHouseboatsHotelsInAlleppey: 'Hotel case galleggianti a 4 stelle ad Alleppey',
      threeStarHouseboatsHotelsInAlleppey: 'Hotel case galleggianti a 3 stelle ad Alleppey',
      twoStarHouseboatsHotelsInAlleppey: 'Hotel case galleggianti a 2 stelle ad Alleppey',
      budgetHouseboatsHotelsInAlleppey: 'Hotel case galleggianti economici ad Alleppey',
      standardBoatHouseHotelsInAlleppey: 'Hotel case galleggianti standard ad Alleppey'
    }
    ,
    destinationFeed: {
      loadingMore: 'Caricamento di altre offerte...',
      inquiryTitle: 'Hai domande? Mettiti in contatto!',
      inquirySubtitle: 'Inviaci la tua richiesta e il nostro team ti risponderà entro 24 ore',
      yourName: 'Il tuo nome *',
      yourEmail: 'La tua email *',
      phoneNumber: 'Numero di telefono',
      subject: 'Oggetto',
      yourMessage: 'Il tuo messaggio *',
      sendInquiry: 'Invia richiesta',
      "bookViaWhatsapp": "Prenota tramite WhatsApp",
      scrollToInquiryAria: 'Scorri fino al modulo di richiesta'
    },
        destinationOffers: {
      1: {
        title: "Hotel",
        description: "Aree di fauna selvatica/foreste e attività correlate: • Periyar Wildlife Sanctuary (o Periyar Tiger Reserve) • Aree forestali del Kerala • Zone di trekking • Regioni montuose • Interazione/osservazione degli elefanti (offerta comunemente come safari, passeggiata o osservazione nei santuari. Durante i festival appare come processione di elefanti – Gajamela)."
      },

      2: {
        title: "Houseboat ad Alleppey — Crociera di giorno e notte",
        description: "Hotel houseboat ad Alleppey, houseboat da 1 a 22 camere ad Alappuzha. Houseboat premium e di lusso per crociere diurne e notturne, opzioni economiche, jetty di Muhamma, gara Nehru Trophy, punto di partenza Alappuzha, arrivo Alleppey, itinerario Kannankara."
      },

      3: {
        title: "Houseboat ad Alleppey — Giorno e notte (1 camera)",
        description: "Homestay nei backwaters di Alleppey, villaggi di Alappuzha, appartamenti a Pallathuruthi, ville nella città, case sugli alberi, resort su isola, proprietà fronte lago e fronte mare. Houseboat premium/lusso da 1 a 22 camere."
      },

      4: {
        title: "Alappuzha — Crociera diurna in houseboat privata (1 camera, ponte superiore)",
        description: "Houseboat da 1 a 22 camere, categorie premium/lusso, jetty di Muhamma, gara Nehru Trophy, area Kannankara. Opzioni economiche e di lusso per crociere diurne."
      },

      5: {
        title: "Houseboat per luna di miele in Kerala",
        description: "Una houseboat romantica con camera climatizzata, bagno privato, ponte panoramico, pasti a bordo, cena a lume di candela e decorazioni floreali. Un’esperienza esclusiva per coppie nei backwaters del Kerala."
      },

      6: {
        title: "Houseboat ad Alleppey — Giorno e notte (1 camera, ponte superiore privato)",
        description: "Homestay nei backwaters, villaggi di Alappuzha, appartamenti a Pallathuruthi, ville, case sugli alberi, resort su isola, proprietà fronte lago e mare. Houseboat premium/lusso da 1 a 22 camere."
      },

      7: {
        title: "Houseboat ad Alleppey — 1 camera, ponte superiore privato",
        description: "Alleppey, Kumarakom, Kollam, lago Ashtamudi, Kovalam, Varkala, spiagge di Cherai e Marari, villaggi Kainakari, Punnamada, Aryad. Houseboat da 1 a 22 camere."
      },

      8: {
        title: "Crociera diurna — Houseboat con ponte superiore ad Alleppey",
        description: "Zone: Kainakari, Punnamada, Aryad, appartamenti di Pallathuruthi, jetty di Muhamma. Houseboat premium per crociere giornaliere."
      },

      9: {
        title: "Houseboat ad Alleppey — Prezzo B2B per 1 camera",
        description: "Disponibile nelle categorie deluxe, premium e lusso. Due tipi: con ponte superiore e senza ponte. Il ponte superiore offre una vista migliore durante la crociera."
      },

      10: {
        title: "Houseboat condivise ad Alleppey — Prezzo per 2 persone",
        description: "Esperienza conveniente nei backwaters del Kerala. Ideale per coppie o amici. Crociera di una notte con pasti tradizionali, viste tranquille e ospitalità. Consigliata la prenotazione anticipata."
      },

      11: {
        title: "Houseboat ultra premium ad Alleppey",
        description: "Categorie: Deluxe, Premium, Lusso, Ultra Lusso. Houseboat da 1 a oltre 22 camere. Crociere diurne e pernottamenti. Zone popolari: Punnamada, Kainakari, Aryad, jetty di Muhamma."
      },

      12: {
        title: "Pacchetti turistici economici in Kerala",
        description: "Munnar, Thekkady, fauna di Periyar, Wayanad, Vagamon, Ponmudi, Idukki, Devikulam, Kuttikanam, Vattavada, Kanthalloor, aree montuose, foreste del Kerala, camminate con elefanti, trekking."
      },

      13: {
        title: "Giro in barca in Kerala",
        description: "Esplora i tranquilli backwaters del Kerala: risaie, canali rurali, barche tradizionali in legno, cibo autentico del Kerala. Perfetto per coppie, famiglie e viaggiatori soli. A partire da ₹1.999."
      },

      14: {
        title: "Offerte B2B — Pacchetti houseboat in Kerala",
        description: "Houseboat da 1 a 22 camere, categorie premium/lusso, jetty di Muhamma, gara Nehru Trophy, itinerario Kannankara."
      },

      15: {
        title: "Petals Flowers",
        description: "La tua destinazione affidabile per piante floreali premium in Kerala. Specializzati in orchidee esotiche — perfette per decorazione, regali e giardini. Piante curate con fioritura duratura."
      },

      16: {
        title: "Orchidee in vendita — Piante di orchidee fiorite",
        description: "Orchidee tropicali come Phalaenopsis e Vanda. Colori vivaci, pattern unici, fioriture durature. Facili da curare. A partire da ₹399."
      },

      17: {
        title: "Gioielli ossidati del Kerala",
        description: "Gioielli con finitura scura antica ottenuta tramite ossidazione di argento o ottone. Stili tradizionali e moderni. Perfetti con saree o abiti moderni."
      },

      18: {
        title: "Tessuti handloom del Kerala — Saree Kasavu",
        description: "Seta handloom del Kerala, saree Kasavu, materiali Kasavu per churidar, camicie handloom. Bianco tradizionale con bordo dorato."
      },

      19: {
        title: "Artigianato del Kerala",
        description: "Sculture in legno, oggetti in metallo, tappeti di fibra di cocco, prodotti in guscio di cocco, maschere Kathakali, Nettipattam, specchi metallici Aranmula."
      },

      20: {
        title: "Chips del Kerala — Banana chips",
        description: "Banana chips Nendran, chips di jackfruit e snack tradizionali del Kerala."
      },

      21: {
        title: "Spezie del Kerala",
        description: "Spezie premium: cardamomo, pepe nero, cannella, chiodi di garofano, noce moscata — provenienti da fattorie biologiche dei Western Ghats."
      },

      22: {
        title: "Pesce essiccato",
        description: "Gamberetti d'acqua dolce di qualità da esportazione dal lago Ashtamudi. Essiccati al sole senza sale. Perfetti per masala, curry e chutney."
      },

      23: {
        title: "Immobiliare in Kerala",
        description: "Casa indipendente con 4 camere (3200 sq.ft) in zona privilegiata. Acquisto, vendita e affitto di ville, terreni, case e appartamenti in tutto il Kerala."
      },

      24: {
        title: "Biglietti della lotteria del Kerala — Bumper Lottery",
        description: "Lotteria ufficiale dello Stato del Kerala: Win Win, Sthree Sakthi, Fifty Fifty, Karunya. Premi fino a ₹1 crore."
      },

      25: {
        title: "Arredamento casa del Kerala",
        description: "Decorazioni per la casa e prodotti in fibra di cocco — naturali, ecologici e artigianali."
      },

      26: {
        title: "Trasporti in Kerala",
        description: "Guruvayur, cascate Athirapilly e Vazhachal, Basilica Arthunkal, Fort Kochi, Neeleswaram, Thenmala, tempio Padmanabhaswamy, Chottanikkara, Sabarimala, Kuttalam, Ooty, Kodaikanal, Goa, Karnataka, Tamil Nadu, Chennai, Madurai, Rameswaram, Coimbatore, Valparai, Kainakari, Punnamada, Aryad, Pallathuruthi, Muhamma."
      },

      27: {
        title: "Prodotti in fibra di cocco del Kerala",
        description: "Prodotti ecologici e biodegradabili: tappeti, corde, spazzole, borse e decorazioni. Popolari nei mercati locali e internazionali."
      },

      28: {
        title: "Ordina cibo online",
        description: "Ordina cibo online in Kerala — cucina locale autentica e piatti internazionali. Disponibile a Cochin, Trivandrum, Kozhikode e altre città."
      }
    },
    popularDestinations: {
      title: "Esplora più destinazioni in India",
      subtitle: "Scopri cosa fare nelle città di diversi stati",
      thingsToDo: "Cose da fare",
      comingSoonTitle: "In arrivo!",
      comingSoonDescription: "Stiamo aggiungendo destinazioni incredibili in {{continent}}. Torna presto a controllare!",
      northIndia: "Destinazioni dell'India del Nord",
      southIndia: "Destinazioni dell'India del Sud",
      eastIndia: "Destinazioni dell'India dell'Est e del Nord-Est",
      centralIndia: "Destinazioni dell'India Centrale",

      delhi: {
        name: "Delhi",
        country: "Delhi",
        history:
          "La capitale dell'India, Delhi, ha una storia ricca di oltre 2.000 anni. La città è piena di moschee, fortezze e monumenti lasciati dai sovrani Mughal. Dal maestoso Forte Rosso all'iconica India Gate, Delhi combina patrimonio antico e infrastrutture moderne."
      },

      jaipur: {
        name: "Jaipur",
        country: "Rajasthan",
        history:
          "Conosciuta come la Città Rosa, Jaipur è la capitale del Rajasthan ed è parte del Triangolo d’Oro dell’India. Fondata nel 1727, è famosa per i suoi palazzi reali, il Forte Amber, l’Hawa Mahal e i suoi mercati vivaci."
      },

      agra: {
        name: "Agra",
        country: "Uttar Pradesh",
        history:
          "Città del celebre Taj Mahal, una delle Sette Meraviglie del Mondo, Agra fu la capitale dell’Impero Mughal dal 1556 al 1658. Ospita anche il Forte di Agra e Fatehpur Sikri."
      },

      varanasi: {
        name: "Varanasi",
        country: "Uttar Pradesh",
        history:
          "Una delle città più antiche continuamente abitate al mondo, Varanasi è un importante centro spirituale per gli induisti. Situata sulle rive del sacro Gange, è nota per i suoi ghats, i templi antichi e la profonda atmosfera spirituale."
      },

      amritsar: {
        name: "Amritsar",
        country: "Punjab",
        history:
          "Fondata da Guru Ram Das nel 1577, Amritsar ospita il Tempio d’Oro, il luogo più sacro del Sikhismo. La città è anche nota per il tragico massacro di Jallianwala Bagh del 1919."
      },

      manali: {
        name: "Manali",
        country: "Himachal Pradesh",
        history:
          "Situata a 2.050 metri nell’Himalaya, Manali è una famosa località di montagna nota per la sua bellezza naturale, gli sport d’avventura e l’antico tempio di Hidimba. È la porta per il passo Rohtang e la valle di Solang."
      },

      leh: {
        name: "Leh",
        country: "Ladakh",
        history:
          "Leh, capitale del Ladakh, si trova a circa 3.500 metri ed era un importante punto lungo l’antica Via della Seta. Conosciuta per i suoi paesaggi brulli, monasteri buddisti e laghi d’alta quota come il Pangong Tso."
      },

      rishikesh: {
        name: "Rishikesh",
        country: "Uttarakhand",
        history:
          "Conosciuta come la Capitale Mondiale dello Yoga, Rishikesh si trova sulle rive del Gange. La sua fama internazionale crebbe dopo la visita dei Beatles nel 1968. La città ospita numerosi ashram, centri yoga e il celebre ponte Lakshman Jhula."
      },

      udaipur: {
        name: "Udaipur",
        country: "Rajasthan",
        history:
          "Udaipur, la Città dei Laghi e la 'Venezia d’Oriente', fu fondata nel 1559 da Maharana Udai Singh II. È famosa per i suoi splendidi palazzi come il City Palace e il Lake Palace, oltre ai laghi Pichola e Fateh Sagar."
      },

      shimla: {
        name: "Shimla",
        country: "Himachal Pradesh",
        history:
          "Shimla fu la capitale estiva dell’India Britannica e conserva ancora il fascino coloniale con edifici vittoriani come il Viceregal Lodge e la Christ Church. La ferrovia Kalka-Shimla è patrimonio UNESCO."
      },

      mussoorie: {
        name: "Mussoorie",
        country: "Uttarakhand",
        history:
          "Conosciuta come la Regina delle Colline, Mussoorie fu fondata nel 1826. Situata a 2.005 metri, offre viste spettacolari sulla valle di Doon e sulle montagne himalayane."
      },

      srinagar: {
        name: "Srinagar",
        country: "Jammu e Kashmir",
        history:
          "Srinagar è famosa per il Lago Dal, i giardini Mughal come Shalimar Bagh e Nishat Bagh, e le tradizionali houseboat. La città è spesso descritta come il 'Paradiso in Terra'."
      },

      jaisalmer: {
        name: "Jaisalmer",
        country: "Rajasthan",
        history:
          "Conosciuta come la Città d’Oro, Jaisalmer emerge dal Deserto del Thar con il suo forte in arenaria gialla e le havelis finemente scolpite."
      },

      nainital: {
        name: "Nainital",
        country: "Uttarakhand",
        history:
          "Costruita attorno al lago Naini, Nainital fu sviluppata dagli inglesi nel 1841. Il tempio Naina Devi e il punto panoramico Snow View sono attrazioni principali."
      },

      vrindavan: {
        name: "Vrindavan",
        country: "Uttar Pradesh",
        history:
          "Vrindavan è uno dei luoghi più sacri dell’Induismo e si ritiene che sia il luogo dell’infanzia di Krishna. Ospita oltre 5.000 templi."
      },

      haridwar: {
        name: "Haridwar",
        country: "Uttarakhand",
        history:
          "Haridwar è una delle sette città sacre del Hinduismo. È qui che il Gange entra nelle pianure indiane. Ospita il Kumbh Mela ogni 12 anni."
      },
        mumbai: {
        name: "Mumbai",
        country: "Maharashtra",
        history:
          "Mumbai, la capitale finanziaria dell'India e la Città dei Sogni, era originariamente composta da sette isole. Oggi ospita Bollywood, il Gateway of India, Marine Drive e un mix di architettura coloniale e grattacieli moderni."
      },

      bengaluru: {
        name: "Bengaluru",
        country: "Karnataka",
        history:
          "Bengaluru, conosciuta come la Silicon Valley dell'India e la Città Giardino, fu fondata nel 1537 da Kempe Gowda. Combina storia, tecnologia moderna, palazzi reali come Bangalore Palace e parchi verdi."
      },

      goa: {
        name: "Goa",
        country: "Goa",
        history:
          "Goa fu una colonia portoghese fino al 1961. È famosa per le sue splendide spiagge, la vivace vita notturna e l'architettura coloniale come la Basilica del Bom Jesus e la Sé Cathedral."
      },

      kerala: {
        name: "Kerala",
        country: "Kerala",
        history:
          "Conosciuto come il 'Paese di Dio', il Kerala è famoso per i suoi backwaters, trattamenti ayurvedici e paesaggi verdi. La cultura locale include Kathakali, gare di barche e cucina ricca di cocco e spezie."
      },

      hyderabad: {
        name: "Hyderabad",
        country: "Telangana",
        history:
          "Fondata nel 1591 da Muhammad Quli Qutb Shah, Hyderabad è nota per la sua storia, il biryani e il commercio di perle. Il Charminar, il Forte Golconda e le Tombe Qutb Shahi mostrano la sua eredità nizama."
      },

      chennai: {
        name: "Chennai",
        country: "Tamil Nadu",
        history:
          "Chennai, precedentemente Madras, è la capitale del Tamil Nadu e la porta d’ingresso della cultura dell’India meridionale. Possiede Marina Beach, il Tempio Kapaleeshwarar e il Forte St. George."
      },

      kochi: {
        name: "Kochi",
        country: "Kerala",
        history:
          "Kochi, la Regina del Mar Arabico, fu un importante centro commerciale delle spezie. Mostra influenze portoghesi, olandesi e britanniche, visibili nelle reti da pesca cinesi e nella zona coloniale di Fort Kochi."
      },

      mysuru: {
        name: "Mysuru",
        country: "Karnataka",
        history:
          "Mysuru, la capitale culturale del Karnataka, fu la residenza reale della dinastia Wodeyar. Il Palazzo di Mysore illuminato durante il Dasara è un capolavoro architettonico."
      },

      madurai: {
        name: "Madurai",
        country: "Tamil Nadu",
        history:
          "Una delle città più antiche dell’India, Madurai ospita il magnifico Tempio Meenakshi, famoso per i suoi colorati gopuram ricoperti da migliaia di sculture."
      },

      alleppey: {
        name: "Alleppey",
        country: "Kerala",
        history:
          "Conosciuta come la Venezia d’Oriente, Alleppey è famosa per i backwaters, le houseboat e il celebre Nehru Trophy Boat Race."
      },

      ooty: {
        name: "Ooty",
        country: "Tamil Nadu",
        history:
          "Ooty, la Regina delle Montagne, fu fondata come rifugio britannico. Offre architettura coloniale, la ferrovia Nilgiri Mountain (UNESCO) e piantagioni di tè."
      },

      coorg: {
        name: "Coorg",
        country: "Karnataka",
        history:
          "Conosciuta come la Scozia dell'India, Coorg è famosa per le piantagioni di caffè, colline nebbiose e tradizioni Kodava."
      },

      hampi: {
        name: "Hampi",
        country: "Karnataka",
        history:
          "Patrimonio UNESCO, Hampi fu la capitale dell'Impero Vijayanagara. Le sue rovine includono templi, mercati e palazzi reali tra enormi massi."
      },

      pondicherry: {
        name: "Pondicherry",
        country: "Puducherry",
        history:
          "Pondicherry fu una colonia francese fino al 1954 e conserva forti influenze francesi nell’architettura e nella cultura. Il French Quarter e Auroville sono i punti principali."
      },
        visakhapatnam: {
        name: "Visakhapatnam",
        country: "Andhra Pradesh",
        history:
          "Visakhapatnam (Vizag), nota come la Città del Destino e la Gemma della Costa Orientale, è una città portuale con spiagge, colline e valli. Il tempio Simhachalam, le grotte di Borra e il sottomarino-museo INS Kurusura sono attrazioni principali."
      },

      tirupati: {
        name: "Tirupati",
        country: "Andhra Pradesh",
        history:
          "Tirupati ospita il sacro Tempio Tirumala Venkateswara, uno dei siti di pellegrinaggio più visitati al mondo. La sua architettura riflette l'eredità di varie dinastie."
      },

      kolkata: {
        name: "Kolkata",
        country: "Bengala Occidentale",
        history:
          "Kolkata, la Città della Gioia e ex capitale dell'India Britannica, è un centro culturale e intellettuale con monumenti coloniali come il Victoria Memorial e il Ponte Howrah."
      },

      gangtok: {
        name: "Gangtok",
        country: "Sikkim",
        history:
          "Gangtok, situata a 1.650 metri, offre viste spettacolari sul Kanchenjunga. Combina cultura buddista tibetana, monasteri storici e una moderna zona pedonale."
      },

      shillong: {
        name: "Shillong",
        country: "Meghalaya",
        history:
          "Conosciuta come la Scozia dell'Oriente, Shillong è famosa per le sue colline di pini, cascate come Elephant Falls e la scena musicale vibrante."
      },

      darjeeling: {
        name: "Darjeeling",
        country: "Bengala Occidentale",
        history:
          "La Regina delle Colline, Darjeeling è famosa per il tè e la ferrovia himalayana (UNESCO). Tiger Hill offre splendidi panorami sull'Himalaya."
      },
        puri: {
        name: "Puri",
        country: "Odisha",
        history:
          "Puri è una delle quattro destinazioni sacre del Char Dham e ospita il Tempio di Jagannath del XII secolo. La famosa Rath Yatra attira milioni di devoti."
      },

      guwahati: {
        name: "Guwahati",
        country: "Assam",
        history:
          "Guwahati è la porta del Nord-Est dell'India, situata sulle rive del Brahmaputra. Il tempio Kamakhya è un importante centro spirituale."
      },

      kohima: {
        name: "Kohima",
        country: "Nagaland",
        history:
          "Kohima, a 1.444 metri di altitudine, è conosciuta per la Battaglia di Kohima del 1944. Ospita il Cimitero di Guerra e il Festival Hornbill."
      },

      itanagar: {
        name: "Itanagar",
        country: "Arunachal Pradesh",
        history:
          "Itanagar, capitale di Arunachal Pradesh, ospita le rovine del Forte Ita (XIV–XV secolo) e il monastero Buddha Vihar."
      },

      bhubaneswar: {
        name: "Bhubaneswar",
        country: "Odisha",
        history:
          "Bhubaneswar, la Città dei Templi, ospita oltre 500 templi antichi in stile Kalinga. Il Tempio Lingaraj è il più importante."
      },

      portblair: {
        name: "Port Blair",
        country: "Isole Andamane e Nicobare",
        history:
          "Port Blair è la porta d'accesso alle isole Andamane e Nicobare. La prigione storica Cellular Jail è un monumento nazionale."
      },

      pelling: {
        name: "Pelling",
        country: "Sikkim",
        history:
          "Pelling offre viste impressionanti sul Kanchenjunga e ospita il monastero Pemayangtse e le rovine di Rabdentse."
      },

      tawang: {
        name: "Tawang",
        country: "Arunachal Pradesh",
        history:
          "Situata a 3.048 metri, Tawang ospita il più grande monastero dell’India, fondato nel 1680. È anche il luogo di nascita del 6º Dalai Lama."
      },

      cherrapunji: {
        name: "Cherrapunji",
        country: "Meghalaya",
        history:
          "Cherrapunji (Sohra) è famosa per le sue forti piogge, le cascate spettacolari e i ponti viventi creati con radici di alberi."
      },
        imphal: {
        name: "Imphal",
        country: "Manipur",
        history:
          "Imphal è famosa per aver giocato un ruolo importante durante la Seconda Guerra Mondiale. Il Forte Kangla e il Lago Loktak con le sue isole galleggianti sono attrazioni principali."
      },

      aizawl: {
        name: "Aizawl",
        country: "Mizoram",
        history:
          "Aizawl, situata a 1.132 metri, riflette la cultura Mizo con case in bambù, tessuti artigianali e festival vivaci."
      },

      agartala: {
        name: "Agartala",
        country: "Tripura",
        history:
          "Agartala ospita il magnifico Palazzo Ujjayanta, il palazzo acquatico Neermahal e il Tempio Tripura Sundari."
      },

      khajuraho: {
        name: "Khajuraho",
        country: "Madhya Pradesh",
        history:
          "Khajuraho, patrimonio UNESCO, è famoso per i templi hindù e jainisti con sculture intricatissime, incluse quelle erotiche."
      },

      bhopal: {
        name: "Bhopal",
        country: "Madhya Pradesh",
        history:
          "Bhopal, la Città dei Laghi, combina antico e moderno. È famosa per la moschea Taj-ul-Masajid e lo Stupa di Sanchi (UNESCO)."
      },

      gwalior: {
        name: "Gwalior",
        country: "Madhya Pradesh",
        history:
          "Gwalior è nota per la sua imponente fortezza collinare, i templi scolpiti e la ricca tradizione musicale."
      },

      indore: {
        name: "Indore",
        country: "Madhya Pradesh",
        history:
          "Indore è la capitale commerciale dello stato e famosa per i suoi mercati e la cucina di strada. Ospita il Rajwada e il Palazzo Lal Bagh."
      },

      orchha: {
        name: "Orchha",
        country: "Madhya Pradesh",
        history:
          "Orchha, fondata nel 1531, ospita splendidi palazzi come Jahangir Mahal e Raj Mahal."
      },

      ujjain: {
        name: "Ujjain",
        country: "Madhya Pradesh",
        history:
          "Ujjain è una delle sette città sacre dell’Induismo e ospita il Tempio Mahakaleshwar, uno dei dodici jyotirlinga."
      },

      ranchi: {
        name: "Ranchi",
        country: "Jharkhand",
        history:
          "Ranchi è famosa per le sue cascate e come città natale del famoso giocatore di cricket M. S. Dhoni."
      },

      daman: {
        name: "Daman",
        country: "Daman e Diu",
        history:
          "Daman fu una colonia portoghese fino al 1961 e presenta fortezze coloniali, chiese e spiagge tranquille."
      },

      silvassa: {
        name: "Silvassa",
        country: "Dadra e Nagar Haveli",
        history:
          "Silvassa è conosciuta per l’arte Warli, i laghi e la natura, oltre a essere un crescente centro industriale."
      },

      nagpur: {
        name: "Nagpur",
        country: "Maharashtra",
        history:
          "Nagpur, la Città delle Arance, è il centro geografico dell’India e ospita Deekshabhoomi, un importante sito buddista."
      },

      raipur: {
        name: "Raipur",
        country: "Chhattisgarh",
        history:
          "Raipur ha radici storiche del IX secolo ed è il punto d’accesso a siti antichi e villaggi tribali."
      },

      jabalpur: {
        name: "Jabalpur",
        country: "Madhya Pradesh",
        history:
          "Jabalpur è famosa per le rocce di marmo di Bhedaghat e la cascata Dhuandhar."
      },

      pachmarhi: {
        name: "Pachmarhi",
        country: "Madhya Pradesh",
        history:
          "Pachmarhi è una località di montagna con architettura coloniale, pitture rupestri e cascate."
      },

      amarkantak: {
        name: "Amarkantak",
        country: "Madhya Pradesh",
        history:
          "Amarkantak è un luogo sacro dove nascono i fiumi Narmada e Son."
      },

      chitrakoot: {
        name: "Chitrakoot",
        country: "Madhya Pradesh / Uttar Pradesh",
        history:
          "Chitrakoot è il luogo in cui Rama, Sita e Lakshmana trascorsero 11 anni del loro esilio secondo il Ramayana."
      },
      bhimbetka: {
        name: "Bhimbetka",
        country: "Madhya Pradesh",
        history:
          "Bhimbetka, patrimonio UNESCO, contiene oltre 500 rifugi rocciosi con pitture rupestri di fino a 30.000 anni, che raffigurano caccia, danza e vita quotidiana."
      }
    },
    footer: {
      description: 'Il tuo compagno di viaggio di fiducia per viaggi indimenticabili. Creare ricordi che durano una vita.',
      destinations: {
        title: 'Destinazioni',
        keralaBudgetHouseboat: 'Casa galleggiante economica del Kerala',
        luxuryTopEndHouseboat: 'Casa galleggiante di lusso di alta gamma',
        b2bPriceKeralaHouseboats: 'Prezzo B2B case galleggianti del Kerala',
        houseboatsInAlappuzha: 'Case galleggianti ad Alappuzha',
        budgetBoatHouseAllepey: 'Casa galleggiante economica di Alleppey',
        budgetBoatHouseAlappuzha: 'Casa galleggiante economica di Alappuzha',
        budgetHouseboatAllepey: 'Casa galleggiante economica di Alleppey',
        budgetHouseboatAlappuzha: 'Casa galleggiante economica di Alappuzha',
        budgetAlleppeyBoatHouse: 'Casa galleggiante economica di Alleppey',
        spotBookingBoatHouse: 'Prenotazione in loco di case galleggianti',
        prepaidTaxiCochinAirport: 'Servizio taxi prepagato all\'aeroporto di Cochin',
        budgetAlappuzhaHouseboats: 'Case galleggianti economiche di Alappuzha',
        budgetAlleppeyHouseboats: 'Case galleggianti economiche di Alleppey',
        b2bAlleppeyHouseboats: 'Case galleggianti B2B di Alleppey',
        privateAlleppeyHouseboats: 'Case galleggianti private di Alleppey',
        houseboatsInIndia: 'Case galleggianti in India',
        sharedHouseboatsInAlleppey: 'Case galleggianti condivise ad Alleppey',
        sharingHouseboatsInAlleppey: 'Case galleggianti condivise ad Alleppey',
        sharingBoathouseInAlleppey: 'Casa galleggiante condivisa ad Alleppey',
        clubbingHouseboatsInAlleppey: 'Case galleggianti per feste ad Alleppey',
        clubbingBoathouseInAlleppey: 'Casa galleggiante per feste ad Alleppey',
        luxuryHouseboatsInAlleppey: 'Case galleggianti di lusso ad Alleppey',
        premiumHouseboatsInAlleppey: 'Case galleggianti premium ad Alleppey',
        deluxeHouseboatsInAlleppey: 'Case galleggianti di lusso ad Alleppey',
        standardHouseboatsInAlleppey: 'Case galleggianti standard ad Alleppey',
        ultraLuxuryHouseboatsInAlleppey: 'Case galleggianti di ultra lusso ad Alleppey',
        ultraLuxurySharingHouseboatsInAlleppey: 'Case galleggianti condivise di ultra lusso ad Alleppey',
        bestHouseboatsInAlleppey: 'Le migliori case galleggianti ad Alleppey',
        bestLuxuryHouseboatsInAlleppey: 'Le migliori case galleggianti di lusso ad Alleppey',
        bestPremiumHouseboatsInAlleppey: 'Le migliori case galleggianti premium ad Alleppey',
        bestDeluxeHouseboatsInAlleppey: 'Le migliori case galleggianti di lusso ad Alleppey',
        bestStandardHouseboatsInAlleppey: 'Le migliori case galleggianti standard ad Alleppey',
        bestAlappuzhaHouseboatPackages: 'I migliori pacchetti di case galleggianti ad Alappuzha',
        bestAlappuzhaBoatHousePackages: 'I migliori pacchetti di case galleggianti ad Alappuzha'
      },
      services: { title: 'Servizi', flightBooking: 'Prenotazione voli', hotelReservation: 'Prenotazione hotel', tourPackages: 'Pacchetti turistici' },
      company: { title: 'Azienda', aboutUs: 'Chi siamo', contact: 'Contatti' },
      support: { title: 'Supporto', helpCenter: 'Centro assistenza', terms: 'Termini di servizio', privacy: 'Informativa sulla privacy', refund: 'Politica di rimborso', faq: 'Domande frequenti' },
      copyright: '© {{year}} Tourism Paradise. Tutti i diritti riservati.'
    }
  },
  ja: {
    translation: {
      destinationNotFound: {
        title: "目的地が見つかりません",
        description: "申し訳ありません。お探しの目的地が見つかりませんでした。"
      },
      goBack: "目的地一覧に戻る",
      thingsToDo: "できること",
      aboutDestination: "概要",
      food: "オンラインで食べ物を注文する",
      getInTouch: "お問い合わせ",
      chatOnWhatsApp: "WhatsAppでチャット",
      instantResponse: "即時返信",
      sendEmail: "メールを送る",
      emailAddress: "info@tourismparadise.com",
      houseboatShort: "アレッピーの1ベッドルーム個室アッパーデッキ付きハウスボート（昼夜）。",
      exploreNow: "今すぐ見る",
      planYourVisitTitle: "訪問計画を立てる",
      planYourVisitSubtitle: "フォームに入力すると、24時間以内にご連絡します",
      labelFullName: "氏名 *",
      placeholderFullName: "氏名を入力してください",
      labelEmail: "メールアドレス *",
      placeholderEmail: "your.email@example.com",
      labelPhone: "電話番号",
      placeholderPhone: "+91 98765 43210",
      labelMessage: "メッセージ *",
      placeholderMessage: "旅行の計画や質問について教えてください...",
      sending: "送信中...",
      sendInquiry: "問い合わせを送信",
      successMessage: "✓ メッセージは正常に送信されました！近日中にご連絡いたします。",
      whatsappMessage: "こんにちは！ {{name}}（{{country}}）への訪問に興味があります。詳しい情報をいただけますか？",
      emailSubject: "{{destinationName}} についての問い合わせ",
      emailBodyTemplate: "こんにちは、\n\n{{destination}} についてもっと知りたいです。\n\nよろしくお願いします。",
      heroTitle: '旅のあらゆる部分を計画しよう',
      heroSubtitle: 'フライト、ホテル、交通手段、体験をすべて1か所で予約。シームレスな旅行計画のための完全なソリューションです。',
      houseboats: 'ハウスボート',
      shikara: 'シカラライド',
      flights: 'フライト',
      hotels: 'ホテル',
      trains: '電車',
      buses: 'バス',
      cars: 'レンタカー',
      tours: 'ツアー',
      cruises: 'クルーズ',
      activities: 'アクティビティ',
      packages: 'ホリデーパッケージ',
      weekend: '週末の旅行',
      beaches: 'ビーチステイ',
      mountains: '山への旅行',
      adventure: 'アドベンチャー',
      citybreaks: '市内観光',
      photography: 'フォトツアー',
      insurance: '旅行保険',
      passes: 'シティパス',
      budget: '格安ホテル',
      bikes: '自転車レンタル',
      villas: 'ヴィラ＆ホーム',
      todaysDeals: '今日のお得な情報',
      exploreDestinations: '目的地を探す',
      seaFishRestaurants: 'シーフードレストラン',
      backwaterVillageStay: 'バックウォーターの村での滞在',
      keralaChipsAndSpices: 'ケララチップス＆スパイス',
      keralaHandlooms: 'ケララの手織り',
      honeymoonBoatHouse: 'ハネムーンボートハウス',
      houseboats: 'ハウスボート',
      noHouseboatsFound: '検索に一致するハウスボートは見つかりませんでした。',

      budgetTravelDeals: 'お得な旅行情報',
      offerHotels: 'ホテル',
      offerHouseboatsDayNightCruise: 'アレッピーの昼夜クルーズハウスボート',
      offerHouseboatsDayNight1Bedroom: 'アレッピーの昼夜1ベッドルームハウスボート',
      offerHouseboatsDayCruise1BedroomUpperDeck: 'アラップーザのデイクルーズ1ベッドルームアッパーデッキプライベートハウスボート',
      offerKeralaHoneymoonHouseboat: 'ケララハネムーンハウスボート',
      offerHouseboatDayNight1BedroomUpperDeck: 'アレッピーの昼夜1ベッドルームアッパーデッキプライベートハウスボート',
      offerHouseboatsAlleppeyDayTripUpperDeck: 'アレッピーの日帰りアッパーデッキハウスボート',
      offerHouseboatsB2BPrice1Bedroom: 'アレッピーの1ベッドルームハウスボートのB2B価格',
      offerSharingHouseboats2People: 'アレッピーの2名様向け共有ハウスボート価格',
      offerUltraPremiumHouseboats: 'アレッピーのウルトラプレミアムハウスボート',
      offerKeralaTourBudgetPackages: 'ケララツアー格安パッケージ',
      offerKeralaBoating: 'ケララでのボート遊び',
      offerB2BTravelDealsKeralaHouseboat: 'ケララハウスボートパッケージのB2B旅行割引',
      offerPetalsFlowers: '花びらの花',
      offerOrchidForSale: '蘭の販売 - 開花蘭植物',
      offerOxidisedOrnaments: '酸化装飾品',
      offerKeralaHandloomsSarees: 'ケララの手織り - ケララカサブサリー',
      offerKeralaHandicrafts: 'ケララの工芸品',
      offerKeralaChips: 'ケララチップス - ケララバナナチップス',
      offerKeralaSpices: 'ケララのスパイス',
      offerDriedFish: '干物',
      offerKeralaRealEstate: 'ケララの不動産',
      offerKeralaLottery: 'ケララの宝くじ - ケララのバンパー宝くじ',
      offerKeralaHomeDecor: 'ケララの室内装飾',
      offerTransportationInKerala: 'ケララの交通機関',
      offerKeralaCoirProducts: 'ケララのコイア製品',
      whyChooseTitle: 'なぜツーリズムパラダイスを選ぶのか',
      whyChooseSubtitle: '包括的なサービスと専門家の指導により、旅行計画を簡単に行えます',
      showLess: '少なく表示',
      showMore: 'さらに表示'
    },testimonials:// public/locales/ja/testimonials.json
{
  "sectionTitle": "旅行者の声",
  "sectionSubtitle": "数千人の満足したお客様からの実際の体験談",
  "quoteOpen": "\"",
  "indicatorAria": "口コミを表示 {{index}}",

  "person1": {
    "name": "サラ・ジョンソン",
    "location": "ニューヨーク, アメリカ合衆国",
    "text": "本当に素晴らしい体験でした！Tourism Paradiseのチームは私たちのハネムーンを完璧に計画してくれました。細部に至るまで配慮され、ケララのバックウォーターで最もロマンチックな旅を楽しめました。",
    "trip": "ケララ バックウォーターズ ハネムーン"
  },

  "person2": {
    "name": "マイケル・チェン",
    "location": "トロント, カナダ",
    "text": "プロフェッショナルなサービスと素晴らしい細部へのこだわり。ビーチや高原地の地域知識を活かした専門的なプランニングのおかげで、家族旅行は完璧に進みました。",
    "trip": "ケララ ファミリー アドベンチャー"
  },

  "person3": {
    "name": "エミリー・ロドリゲス",
    "location": "バルセロナ, スペイン",
    "text": "仕事で頻繁に旅行しますが、Tourism Paradiseが手配したこのレジャー旅行は特別でした。パーソナライズされた旅程とケララでのアーユルヴェーダリトリートのサポートで、ストレスなく過ごせました。",
    "trip": "ケララ ソロ リトリート"
  }
}
,
    featureList: {
      pilgrimPackages: '最高の巡礼パッケージ',
      pilgrimDescription: '静かな精神的な旅のための、聖地への思慮深く企画された巡礼ツアー。',
      industrialTitle: '産業コンサルタントサービスおよび労働者供給業者',
      industrialShortDesc: 'プロジェクトレポートと財務指導から、エンジニア、技術者、建設請負業者などの熟練労働者の供給まで、あらゆる産業およびビジネスのニーズに対応します。',
      industrialFullDesc: 'プロジェクトレポート作成、財務指導、建設監督、計画と見積もり作成、産業およびホテル機械、建設労働者と請負業者、電気、配管、エアコン、建設、家電、冷蔵庫、洗濯機、エアコン、自動車、オートモーティブ、コンピューター、携帯電話、セルラーフォン、エレベーターオペレーター、ホームデコレーション、ジュエリーおよび装飾品、コーヒーおよびスナックメーカー、左官、大工、溶接工、機械設置、塗装業者、清掃、ホテル、運転手、アルミニウム加工、鉄骨加工、ハウスサーヴァント、ガーデニング作業、重車両および機械オペレーター、ウェブサイトデザインおよびホスティング、太陽光発電システム設置ホームサービス、検査技師、エンジニアおよび医師、教師、ランドリー、ハウスキーピングなど',
      educationTitle: '教育コンサルタントサービス',
      educationDescription: '工学、医科大学、農業、コンピューターAI、LLB、MBA、BBA、MCA、検査技師、理学療法、歯科、アーユルヴェーダなど',
      legalTitle: '弁護士と法律家',
      legalDescription: '経験豊富な弁護士と法律家による専門的な法律相談とサービスへのアクセス。',
    },destinationOffers: {
        1: {
          title: "ホテル",
          description: "野生動物／森林エリアと関連アクティビティ：• ペリヤール野生動物保護区（ペリヤール・トラ保護区）• ケララ森林地帯 • トレッキングエリア • 山岳地帯 • 象との交流／観察（象サファリ、象ライド、野生や保護区での観察として提供。祭りでは象のパレード＝ガジャメラとして登場）。"
        },

        2: {
          title: "アレッピーのハウスボート — 日帰り＆宿泊クルーズ",
          description: "アレッピーのハウスボートホテル、1〜22部屋までのハウスボート。プレミアム／ラグジュアリー宿泊、予算型ハウスボート、ムハンマ桟橋、ネール・トロフィー・ボートレース、アラップザ出発〜アレッピー到着、カンナンカラ航路。"
        },

        3: {
          title: "アレッピーのハウスボート — 日夜ステイ（1ベッドルーム）",
          description: "アレッピーのバックウォーター民宿、アラップザの村、パラットゥルティのアパート、アレッピー市内のヴィラ、ツリーハウス、島リゾート、湖畔・ビーチ沿いの物件。1〜22部屋のプレミアム／ラグジュアリーハウスボート。"
        },

        4: {
          title: "アラップザ — ハウスボート日帰りクルーズ（1ベッドルーム・上部デッキ付き）",
          description: "1〜22部屋のハウスボート、プレミアム／ラグジュアリー宿泊、ムハンマ桟橋、ネールトロフィー、カンナンカラ航路。日帰りクルーズ向けの経済・高級ボート。"
        },

        5: {
          title: "ケララ・ハネムーン・ハウスボート",
          description: "ロマンチック装飾、エアコン付き寝室、専用バスルーム、眺望デッキ、キャンドルライトディナー、花飾りベッドなどを備えたプライベート・ハネムーンハウスボート。ケララのバックウォーターでの特別なカップル体験。"
        },

        6: {
          title: "アレッピー・ハウスボート — 日夜ステイ（1ベッドルーム・専用上部デッキ）",
          description: "バックウォーター民宿、アラップザ村、パラットゥルティのアパート、アレッピー市内のヴィラ、ツリーハウス、島リゾート、湖畔・海辺の物件。1〜22部屋ボート。"
        },

        7: {
          title: "アレッピーのハウスボート（1ベッドルーム・専用上部デッキ）",
          description: "アレッピー、クマラコム、コッラム、アシュタムディ湖、コバラム、ヴァルカラ、チェライビーチ、マラリビーチ、カイナカリ村、プンナマダ、アリヤド地域など。1〜22部屋のハウスボート。"
        },

        8: {
          title: "アレッピー日帰り — 上部デッキ付きハウスボート",
          description: "カイナカリ、プンナマダ、アリヤド、パラットゥルティ、ムハンマ桟橋などの地域を巡る一日クルーズ。"
        },

        9: {
          title: "アレッピーのハウスボート — 1ベッドルーム B2B料金",
          description: "カテゴリ：デラックス、プレミアム、ラグジュアリー。タイプ：上部デッキ付き／なし。上部デッキはより良い眺望を提供。"
        },

        10: {
          title: "アレッピー共有ハウスボート — 2名料金",
          description: "ケララのバックウォーターを低価格で体験。カップルや友人向け。1泊クルーズ、ケララ料理、穏やかな風景。事前予約推奨。"
        },

        11: {
          title: "アレッピー超高級ハウスボート",
          description: "デラックス、プレミアム、ラグジュアリー、ウルトララグジュアリー。1〜22部屋以上。日帰り／宿泊クルーズ。人気エリア：プンナマダ、カイナカリ、アリヤド、ムハンマ桟橋。"
        },

        12: {
          title: "ケララ格安ツアーパッケージ",
          description: "ムンナル、テッカディ、ペリヤール野生動物、ワヤナード、ヴァガモン、ポンムディ、イドゥッキ、デヴィクラム、クッティカナム、ヴァッタヴァダ、カンタッロール、山岳エリア、森林、象ウォーク、トレッキング。"
        },

        13: {
          title: "ケララ・ボートツアー",
          description: "ケララの静かなバックウォーターを巡る旅。稲田、村の運河、木造伝統ボート、本格ケララ料理。カップル・家族・一人旅に最適。₹1,999〜。"
        },

        14: {
          title: "B2B旅行特価 — ケララ・ハウスボートパッケージ",
          description: "1〜22部屋ハウスボート、プレミアム／ラグジュアリー、ムハンマ桟橋、ネールトロフィー、カンナンカラ航路。"
        },

        15: {
          title: "Petals Flowers",
          description: "ケララの高品質な花植物専門店。特にエキゾチックなランが人気。インテリア、ギフト、ガーデニングに最適。丁寧に育てられた健康な植物を提供。"
        },

        16: {
          title: "ラン販売 — 開花ランの植物",
          description: "ファレノプシス、バンダなどの熱帯ラン。鮮やかな色、独特の模様、長持ちする花。室内装飾にも最適。₹399〜。"
        },

        17: {
          title: "ケララの酸化仕上げアクセサリー",
          description: "銀や真鍮を酸化させたアンティーク風の黒仕上げアクセサリー。伝統的デザインからモダンスタイルまで幅広く、サリーにも現代服にも合う。"
        },

        18: {
          title: "ケララ手織り布 — カサヴサリー",
          description: "ケララ手織りシルク、カサヴサリー、カサヴ素材のチュリダー生地、手織りシャツ。白地に金縁の伝統スタイル。"
        },

        19: {
          title: "ケララのハンドクラフト",
          description: "木彫り、金属製品、ココナツ繊維マット、ココナツ殻製品（ボウル、玩具）、カタカリ仮面、ネッティパッタム、アランムラ金属鏡など。"
        },

        20: {
          title: "ケララチップス — バナナチップス",
          description: "ケララ名物ネンドランバナナチップス、ジャックフルーツチップス、伝統スナック類。"
        },

        21: {
          title: "ケララスパイス",
          description: "高品質スパイス：カルダモン、ブラックペッパー、シナモン、クローブ、ナツメグ。西ガーツの有機農場から直送。"
        },

        22: {
          title: "干し魚",
          description: "アシュタムディ湖産の高品質淡水エビ。塩不使用で衛生的に天日干し。マサラ、カレー、チャトニに最適。"
        },

        23: {
          title: "ケララ不動産",
          description: "好立地の4BHK一戸建て（3200 sq.ft）。ヴィラ、土地、家、アパートの売買・賃貸サービスをケララ全域で提供。"
        },

        24: {
          title: "ケララ宝くじ — バンパー宝くじ",
          description: "ケララ州公式宝くじ：Win Win、Sthree Sakthi、Fifty Fifty、Karunya。最高賞金 ₹1クロール。"
        },

        25: {
          title: "ケララ・ホームデコ",
          description: "ケララの家庭用装飾品、ココナツ繊維製品。自然素材で環境に優しい手工芸品。"
        },

        26: {
          title: "ケララの交通サービス",
          description: "グルヴァユール、アティラピリ滝、ヴァザチャル滝、アルトゥンカル大聖堂、フォートコーチン、ニールスワラム、テンマラ、パドマナバスワミ寺院、チョッタニッカラ、サバリマラ、クッタラム、ウーティ、コダイカナル、ゴア、カルナータカ、タミルナードゥ、チェンナイ、マドゥライ、ラーメシュワラム、コインバトール、ヴァルパライ、カイナカリ、プンナマダ、アリヤド、パラットゥルティ、ムハンマ桟橋など。"
        },

        27: {
          title: "ケララのコイア製品",
          description: "環境に優しく生分解性のある製品：マット、ロープ、ブラシ、バッグ、装飾品。国内外の市場で人気。"
        },

        28: {
          title: "オンラインフード注文",
          description: "ケララでオンラインフード注文が可能。地元のケララ料理から各国料理まで。コーチ、ティルヴァナンタプラム、コジコードなどで利用可能。"
        }
      },
    popularDestinations: {
      title: "インドのさらに多くの目的地を探索する",
      subtitle: "各州の都市でできることを見つけよう",
      thingsToDo: "おすすめのアクティビティ",
      comingSoonTitle: "近日公開！",
      comingSoonDescription: "{{continent}} の素晴らしい目的地を追加中です。もうすぐチェックしてください！",
      northIndia: "北インドの目的地",
      southIndia: "南インドの目的地",
      eastIndia: "東・北東インドの目的地",
      centralIndia: "中央インドの目的地",

      delhi: {
        name: "デリー",
        country: "デリー",
        history:
          "インドの首都デリーは、2000年以上の豊かな歴史を持つ都市です。ムガル帝国の王たちが残したモスクや城壁、記念碑が数多く存在します。壮大なレッド・フォートから象徴的なインド門まで、古代の遺産と現代的なインフラが融合しています。"
      },

      jaipur: {
        name: "ジャイプル",
        country: "ラージャスターン州",
        history:
          "“ピンクシティ”として知られるジャイプルはラージャスターン州の州都であり、インドのゴールデントライアングルの一部です。1727年に建立され、豪華な宮殿、アンベール城、ハワー・マハル、活気あふれる市場で有名です。"
      },

      agra: {
        name: "アグラ",
        country: "ウッタル・プラデーシュ州",
        history:
          "世界七不思議のひとつタージ・マハルのあるアグラは、1556年から1658年までムガル帝国の首都でした。アグラ城やファテープル・シークリーなど、ムガル建築の最高峰を堪能できる都市です。"
      },

      varanasi: {
        name: "ヴァーラーナシー",
        country: "ウッタル・プラデーシュ州",
        history:
          "世界で最も古くから人が住み続けている都市の一つであり、ヒンドゥー教の重要な聖地です。聖なるガンジス川沿いに位置し、ガート、古代寺院、深い精神性で知られています。"
      },

      amritsar: {
        name: "アムリトサル",
        country: "パンジャーブ州",
        history:
          "1577年にグル・ラム・ダースによって創設されたアムリトサルは、シク教の最も神聖な寺院、黄金寺院の所在地です。1919年のジャリアンワラ―庭園虐殺の舞台ともなった歴史深い都市です。"
      },

      manali: {
        name: "マナリ",
        country: "ヒマーチャル・プラデーシュ州",
        history:
          "標高2,050mのヒマラヤ山中にある人気の山岳リゾートで、自然の美しさ、アドベンチャー、ヒディンバ寺院で知られています。ロタン峠やソラン渓谷への玄関口でもあります。"
      },

      leh: {
        name: "レー",
        country: "ラダック",
        history:
          "ラダックの中心地レーは標高3,500mに位置し、古代シルクロードの重要な中継地でした。厳しくも壮大な風景、チベット仏教の僧院、高地湖パンゴン・ツォーなどが魅力です。"
      },

      rishikesh: {
        name: "リシケシュ",
        country: "ウッタラーカンド州",
        history:
          "“ヨガの世界の首都”として知られるリシケシュはガンジス川のほとりにある聖地です。1968年にビートルズが滞在したことで世界的に有名になり、アシュラム、ヨガセンター、ラクシュマン・ジュラ橋が人気です。"
      },

      udaipur: {
        name: "ウダイプル",
        country: "ラージャスターン州",
        history:
          "“湖の街”または“東洋のベネチア”と呼ばれるウダイプルは、1559年にマハラーナ・ウダイ・シング2世によって建設されました。シティパレス、レイクパレス、美しい湖ピチョーラ湖などがあり、ロマンチックな街として知られます。"
      },

      shimla: {
        name: "シムラー",
        country: "ヒマーチャル・プラデーシュ州",
        history:
          "イギリス領インド時代の夏の首都であり、ビクトリア様式の建築が今も残ります。カールカ・シムラー鉄道（UNESCO）や美しい山の景観が魅力です。"
      },

      mussoorie: {
        name: "ムスーリー",
        country: "ウッタラーカンド州",
        history:
          "“丘の女王”として有名なムスーリーは1826年に英国人が開発した避暑地です。標高2,005mに位置し、ドゥーン渓谷やヒマラヤ山脈の景色が楽しめます。"
      },

      srinagar: {
        name: "スリナガル",
        country: "ジャンムー・カシミール",
        history:
          "スリナガルは夏の首都であり、ダル湖、ムガル庭園、伝統的なハウスボートで知られています。“地上の楽園”と称される美の街です。"
      },

      jaisalmer: {
        name: "ジャイサルメール",
        country: "ラージャスターン州",
        history:
          "“黄金の街”と呼ばれ、タール砂漠の中から黄金色の城砦とハヴェリ（邸宅）がそびえます。1156年に建設され、キャラバン交易の中心地でした。"
      },

      nainital: {
        name: "ナイニータール",
        country: "ウッタラーカンド州",
        history:
          "1841年に英国人によって開発された湖畔の町で、美しいナイニー湖を囲む丘に囲まれています。ナイナ・デヴィ寺院やボート遊びが人気です。"
      },

      vrindavan: {
        name: "ヴリンダーヴァン",
        country: "ウッタル・プラデーシュ州",
        history:
          "ヒンドゥー教の最も神聖な都市の一つで、クリシュナ神が幼少期を過ごしたとされています。5000以上の寺院が存在し、バンケー・ビハリ寺院やISKCON寺院が有名です。"
      },

      haridwar: {
        name: "ハリドワール",
        country: "ウッタラーカンド州",
        history:
          "ヒンドゥー教の七大聖地のひとつで、ここでガンジス川が山岳地帯から平野部へと流れ込みます。12年に一度のクンブ・メーラが開催され、有名なハリ・キ・パウリでのガンガー・アーラティは圧巻です。"
      },
        mumbai: {
        name: "ムンバイ",
        country: "マハーラーシュトラ州",
        history:
          "インドの金融都市であり“夢の街”として知られるムンバイは、もともと7つの島から成っていました。現在はボリウッド、インド門、マリーンドライブ、植民地時代の建築と近代的な高層ビルが融合する大都市です。"
      },

      bengaluru: {
        name: "ベンガルール",
        country: "カルナータカ州",
        history:
          "“インドのシリコンバレー”および“ガーデンシティ”として知られるベンガルールは1537年にケンペ・ゴウダによって設立されました。バンガロール宮殿、ティプー・スルターンの夏の宮殿、ラールバーグ植物園などが魅力です。"
      },

      goa: {
        name: "ゴア",
        country: "ゴア州",
        history:
          "1961年までポルトガルの植民地であったゴアは、美しいビーチ、ナイトライフ、植民地建築で有名です。ボム・ジェズス教会やセー大聖堂などヨーロッパ文化の影響が残っています。"
      },

      kerala: {
        name: "ケーララ州",
        country: "ケーララ州",
        history:
          "“神の御国”と称されるケーララは、バックウォーター、アーユルヴェーダ、豊かな緑、古代交易の歴史で有名です。カタカリ舞踊やスネークボートレース、ココナッツやスパイスを使った料理など独自の文化があります。"
      },

      hyderabad: {
        name: "ハイデラバード",
        country: "テランガーナ州",
        history:
          "1591年にムハンマド・クリ・クトゥブ・シャーによって建設されたハイデラバードは、歴史、ビリヤニ、真珠の貿易で有名です。チャールミナル、ゴールコンダ城、クトゥブ・シャーヒー廟群などが名所です。"
      },

      chennai: {
        name: "チェンナイ",
        country: "タミル・ナードゥ州",
        history:
          "旧称マドラスであるチェンナイは南インド文化の玄関口です。1639年にイギリス人が設立し、マリーナ・ビーチ、カパーリーシュワラル寺院、フォート・セント・ジョージなどが見どころです。"
      },

      kochi: {
        name: "コーチ",
        country: "ケーララ州",
        history:
          "“アラビア海の女王”と呼ばれるコーチは古代から香辛料貿易で栄えました。フォート・コーチのポルトガル、オランダ、英国建築、中国式漁網など、多様な文化が融合した都市です。"
      },

      mysuru: {
        name: "マイソール",
        country: "カルナータカ州",
        history:
          "カルナータカ州の文化首都であるマイソールは、ワディヤール王朝の王都でした。10万個の電飾で輝くマイソール宮殿（ダシャラ祭期間）は圧巻です。"
      },

      madurai: {
        name: "マドゥライ",
        country: "タミル・ナードゥ州",
        history:
          "インドでも最古の都市の一つで、紀元前3世紀にさかのぼります。色鮮やかなゴープラム（塔門）が特徴のミーナークシ寺院は建築の傑作です。"
      },

      alleppey: {
        name: "アレッピー（アラップーザ）",
        country: "ケーララ州",
        history:
          "“東洋のベネチア”として知られ、バックウォーターやハウスボートで有名です。椰子の木に囲まれた運河を進むハウスボート体験はケーララの象徴です。"
      },

      ooty: {
        name: "ウーティ（ウダガマンダラム）",
        country: "タミル・ナードゥ州",
        history:
          "“山岳地の女王”と呼ばれるウーティは、イギリス人による避暑地として開発されました。ニルギリ山岳鉄道（UNESCO）、植物園、紅茶畑が人気です。"
      },

      coorg: {
        name: "クールグ（コダグ）",
        country: "カルナータカ州",
        history:
          "“インドのスコットランド”と呼ばれるクールグは、コーヒー農園、霧の山々、コダヴァ族の文化で知られています。アッベー滝やラジャの座席が名所です。"
      },

      hampi: {
        name: "ハンピ",
        country: "カルナータカ州",
        history:
          "UNESCO世界遺産であるハンピは、ヴィジャヤナガル帝国（1336–1565）の首都でした。壮大な寺院、王宮跡、市場跡が巨大な岩の風景と融合しています。"
      },

      pondicherry: {
        name: "ポンディシェリ（プドゥチェリー）",
        country: "プドゥチェリー連邦直轄領",
        history:
          "1954年までフランス領であったポンディシェリは、フランス風の建築、並木道、オーロビンド・アシュラム、オーロヴィルなど、東西が融合する独特の街並みが特徴です。"
      },
        visakhapatnam: {
        name: "ヴィシャーカパトナム（ヴィザグ）",
        country: "アーンドラ・プラデーシュ州",
        history:
          "“運命の街”および“東海岸の宝石”として知られるヴィザグは、古代の寺院、美しいビーチ、丘と渓谷に囲まれた港湾都市です。シンハーチャラム寺院、ボーラ洞窟、INSクルスラ潜水艦博物館が人気です."
      },

      tirupati: {
        name: "ティルパティ",
        country: "アーンドラ・プラデーシュ州",
        history:
          "世界でも最も訪問者の多い巡礼地の一つであるティルマラ・ヴェンカテーシュワラ寺院の所在地として知られています。寺院は古代から続く深い信仰の象徴です。"
      },

      kolkata: {
        name: "コルカタ",
        country: "西ベンガル州",
        history:
          "“喜びの街”コルカタは、かつてイギリス領インド帝国の首都であり、文化と知識の中心地として知られています。ヴィクトリア記念館やハウラー橋が象徴的です。"
      },

      gangtok: {
        name: "ガントク",
        country: "シッキム州",
        history:
          "標高1,650mに位置するガントクは、世界第3位の高峰カンチェンジュンガの壮大な景色を望めます。ルムテック寺院、エンチェイ寺院などチベット仏教文化が息づく都市です。"
      },

      shillong: {
        name: "シロン",
        country: "メーガーラヤ州",
        history:
          "“東洋のスコットランド”と呼ばれるシロンは、松林に覆われた丘、美しい湖、エレファント滝、そして活気ある音楽文化で有名です。"
      },

      darjeeling: {
        name: "ダージリン",
        country: "西ベンガル州",
        history:
          "“丘の女王”として有名なダージリンは、紅茶とUNESCO世界遺産のダージリン・ヒマラヤ鉄道（トイ・トレイン）で知られています。タイガーヒルからのカンチェンジュンガの朝焼けは絶景です。"
      },
        puri: {
        name: "プリ",
        country: "オディシャ州",
        history:
          "ヒンドゥー教の四大聖地（チャールダーム）の一つで、12世紀に建立されたジャガンナート寺院があります。毎年行われるラタ・ヤートラ（大車祭）は数百万人を魅了します。"
      },

      guwahati: {
        name: "グワーハーティー",
        country: "アッサム州",
        history:
          "北東インドの玄関口であり、ブラフマプトラ川沿いに位置します。カーマーキャ寺院はインド有数のシャクティ・ピータ（聖地）です。"
      },

      kohima: {
        name: "コヒマ",
        country: "ナガランド州",
        history:
          "標高1,444mに位置し、第二次世界大戦の“コヒマの戦い”で有名です。コヒマ戦争墓地やホーンビル・フェスティバルが魅力です。"
      },

      itanagar: {
        name: "イタナガル",
        country: "アルナーチャル・プラデーシュ州",
        history:
          "アルナーチャルの州都で、“レンガの砦”を意味するイタ・フォート（14〜15世紀）の遺跡が残ります。仏教寺院ブッダ・ヴィハールも見どころです。"
      },

      bhubaneswar: {
        name: "ブバネーシュワル",
        country: "オディシャ州",
        history:
          "“寺院の街”として知られ、6〜13世紀のカリンガ建築の寺院が500以上存在します。リンガラージ寺院が最も有名です。"
      },

      portblair: {
        name: "ポートブレア",
        country: "アンダマン・ニコバル諸島",
        history:
          "インドの熱帯の楽園、アンダマン諸島の玄関口です。かつて政治犯の監獄として使用されたセラーラー刑務所は国定記念館となっています。"
      },

      pelling: {
        name: "ペリン",
        country: "シッキム州",
        history:
          "標高2,150mの美しい町で、カンチェンジュンガの絶景が望めます。ペマヤンツェ寺院やラブデンツェ遺跡が有名です。"
      },

      tawang: {
        name: "タワン",
        country: "アルナーチャル・プラデーシュ州",
        history:
          "標高3,048mに位置し、1680年創建のインド最大の僧院タワン僧院があります。第6代ダライ・ラマの出生地としても知られています。"
      },

      cherrapunji: {
        name: "チェラプンジ（ソーラ）",
        country: "メーガーラヤ州",
        history:
          "かつて“地球上で最も雨が降る場所”として知られ、巨大な滝や、カシ族が作る“生きた根の橋”が有名です。"
      },
        imphal: {
        name: "インパール",
        country: "マニプル州",
        history:
          "第二次世界大戦で重要な役割を果たした都市で、カングラ城や、浮島“フムディ”で知られるロクタク湖があります。"
      },

      aizawl: {
        name: "アイゾール",
        country: "ミゾラム州",
        history:
          "標高1,132mに位置し、ミゾ族の文化、竹の家屋、織物工芸、祭りなどが特徴です。"
      },

      agartala: {
        name: "アガルタラ",
        country: "トリプラ州",
        history:
          "壮麗なウジャヤンタ宮殿、ニールマハル水上宮殿、トリプラ・スンダリ寺院が見どころです。"
      },

      khajuraho: {
        name: "カジュラーホー",
        country: "マディヤ・プラデーシュ州",
        history:
          "UNESCO世界遺産で、10〜11世紀のチャンデーラ朝が建てたヒンドゥー教・ジャイナ教寺院群が有名。精巧な彫刻には官能的なものも含まれます。"
      },

      bhopal: {
        name: "ボーパール",
        country: "マディヤ・プラデーシュ州",
        history:
          "“湖の街”として知られ、タージ・ウル・マサジドや、近郊のサーンチー大塔（UNESCO）が有名です。"
      },

      gwalior: {
        name: "グワーリオル",
        country: "マディヤ・プラデーシュ州",
        history:
          "巨大な丘の上の要塞で知られ、宮殿、彫刻寺院、古典音楽の伝統を持つ街です。"
      },

      indore: {
        name: "インドール",
        country: "マディヤ・プラデーシュ州",
        history:
          "マディヤ・プラデーシュ州の商業中心地で、ラジワダ宮殿、ラールバーグ宮殿、ストリートフード文化が有名です。"
      },

      orchha: {
        name: "オルチャー",
        country: "マディヤ・プラデーシュ州",
        history:
          "1531年に建設され、ジャンギール・マハル、ラージ・マハル、ラム・ラージャ寺院など壮麗な建築があります。"
      },

      ujjain: {
        name: "ウッジャイン",
        country: "マディヤ・プラデーシュ州",
        history:
          "ヒンドゥー教の七大聖地の一つで、12年に一度クンブ・メーラが開催されます。マハーカーラ寺院は十二のジョーティルリンガの一つです。"
      },

      ranchi: {
        name: "ランチー",
        country: "ジャールカンド州",
        history:
          "“滝の街”として知られ、フンドル滝、ジョンハ滝、ダサム滝が有名。クリケット選手MSドーニーの故郷でもあります。"
      },

      daman: {
        name: "ダマン",
        country: "ダマン＆ディウ",
        history:
          "1961年までポルトガル領で、ダマン城やセント・ジェローム要塞、ポルトガル風建築が残っています。"
      },

      silvassa: {
        name: "シルヴァッサ",
        country: "ダードラー＆ナガル・ハヴェーリー",
        history:
          "森林と丘陵に囲まれ、ワーリー芸術、部族博物館、湖などが有名な街です。"
      },

      nagpur: {
        name: "ナーグプル",
        country: "マハーラーシュトラ州",
        history:
          "“オレンジの街”として知られ、インドの地理的中心に位置します。アンベードカル博士が仏教に改宗したディークシャブーミが重要な聖地です。"
      },

      raipur: {
        name: "ライプル",
        country: "チャッティースガル州",
        history:
          "歴史は9世紀までさかのぼり、古代遺跡や部族文化の入り口として知られています。"
      },

      jabalpur: {
        name: "ジャバルプル",
        country: "マディヤ・プラデーシュ州",
        history:
          "ベダーガートの大理石の崖とドゥワンダール滝が有名です。"
      },

      pachmarhi: {
        name: "パチマルヒ",
        country: "マディヤ・プラデーシュ州",
        history:
          "州で唯一の高原リゾートで、イギリス植民地建築、先史時代の洞窟画、滝が魅力です。"
      },

      amarkantak: {
        name: "アマルカンタク",
        country: "マディヤ・プラデーシュ州",
        history:
          "聖地として知られ、ナルマダ川とソーン川の源流があります。"
      },

      chitrakoot: {
        name: "チトラクート",
        country: "マディヤ・プラデーシュ州 / ウッタル・プラデーシュ州",
        history:
          "ラーマ、シーター、ラクシュマナが14年の追放生活のうち11年を過ごしたとされる聖地です。"
      },
        bhimbetka: {
        name: "ビームベトカ",
        country: "マディヤ・プラデーシュ州",
        history:
          "UNESCO世界遺産のビームベトカ岩窟群には、3万年前までさかのぼる500以上の先史時代の壁画があります。狩猟、踊り、動物、日常生活などが描かれており、人類史の貴重な証拠となっています。"
      }
    },
     houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: 'アレッピー・アラップーザ・ケララのハウスボートホテル',
      houseboatsHotelsInMunnar: 'ムンナールのハウスボートホテル',
      houseboatsHotelsInCochin: 'コーチンのハウスボートホテル',
      houseboatsHotelsInKumarakomLake: 'クマラコム湖のハウスボートホテル',
      houseboatsHotelsInKottayam: 'コッタヤムのハウスボートホテル',
      houseboatsHotelsInAlleppey: 'アレッピーのハウスボートホテル',
      houseboatsHotelsInChottanikara: 'チョタニカラのハウスボートホテル',
      houseboatsHotelsInThiruvananthapuram: 'ティルヴァナンタプラムのハウスボートホテル',
      houseboatsHotelsInKovalamBeach: 'コバラムビーチのハウスボートホテル',
      houseboatsHotelsInThekkady: 'テッカディのハウスボートホテル',
      houseboatsHotelsInWayanad: 'ワイナードのハウスボートホテル',
      houseboatsHotelsInAlappuzha: 'アラップーザのハウスボートホテル',
      houseboatsHotelsInGuruvayur: 'グルヴァユールのハウスボートホテル',
      houseboatsHotelsInVagamon: 'ヴァガモンのハウスボートホテル',
      houseboatsHotelsInAthirapillyWaterFalls: 'アティラピリー滝のハウスボートホテル',
      houseboatsHotelsInMarariBeach: 'マラリビーチのハウスボートホテル',
      houseboatsHotelsInPoovarBeach: 'プーヴァルビーチのハウスボートホテル',
      houseboatsHotelsInVarkalaBeach: 'ヴァルカラビーチのハウスボートホテル',
      houseboatsHotelsInAshtamudiLake: 'アシュタムディ湖のハウスボートホテル',
      houseboatsHotelsInKanyakumariBeach: 'カンニヤークマリビーチのハウスボートホテル',
      houseboatsHotelsInAlleppeyBeach: 'アレッピービーチのハウスボートホテル',
      houseboatsHotelsInAlappuzhaLake: 'アラップーザ湖のハウスボートホテル',
      houseboatsHotelsInIndia: 'インドのハウスボートホテル',
      houseboatsHotelsInKerala: 'ケララのハウスボートホテル',
      houseBoatHotelsInAlleppey: 'アレッピーのハウスボートホテル',
      boatHouseHotelsInIndia: 'インドのボートハウスホテル',
      boatHouseHotelsInKerala: 'ケララのボートハウスホテル',
      sharingHouseboatsHotelsInAlleppey: 'アレッピーの共有ハウスボートホテル',
      sharingBoatHouseHotelsInKerala: 'ケララの共有ボートハウスホテル',
      dayTripHouseboatsHotelsInAlleppey: 'アレッピーの日帰りハウスボートホテル',
      dayCruiseHouseboatsHotelsInAlleppey: 'アレッピーの日帰りクルーズハウスボートホテル',
      fiveStarHouseboatsHotelsInAlleppey: 'アレッピーの5つ星ハウスボートホテル',
      fourStarHouseboatsHotelsInAlleppey: 'アレッピーの4つ星ハウスボートホテル',
      threeStarHouseboatsHotelsInAlleppey: 'アレッピーの3つ星ハウスボートホテル',
      twoStarHouseboatsHotelsInAlleppey: 'アレッピーの2つ星ハウスボートホテル',
      budgetHouseboatsHotelsInAlleppey: 'アレッピーの格安ハウスボートホテル',
      standardBoatHouseHotelsInAlleppey: 'アレッピーのスタンダードボートハウスホテル'
    }
    ,
    destinationFeed: {
      loadingMore: 'さらに多くのオファーを読み込んでいます...',
      inquiryTitle: '質問がありますか？お問い合わせください！',
      inquirySubtitle: 'お問い合わせを送信してください。24時間以内にチームからご連絡いたします',
      yourName: 'お名前 *',
      yourEmail: 'メールアドレス *',
      phoneNumber: '電話番号',
      subject: '件名',
      yourMessage: 'メッセージ *',
      sendInquiry: 'お問い合わせを送信',
      scrollToInquiryAria: 'お問い合わせフォームにスクロール',
      "bookViaWhatsapp": "WhatsAppで予約する"
    },
    footer: {
      description: '忘れられない旅のための信頼できる旅行仲間。一生続く思い出作り。',
      destinations: {
        title: '目的地',
        keralaBudgetHouseboat: 'ケララ格安ハウスボート',
        luxuryTopEndHouseboat: '高級トップエンドハウスボート',
        b2bPriceKeralaHouseboats: 'B2B価格ケララハウスボート',
        houseboatsInAlappuzha: 'アラップーザのハウスボート',
        budgetBoatHouseAllepey: '格安ボートハウスアレッピー',
        budgetBoatHouseAlappuzha: '格安ボートハウスアラップーザ',
        budgetHouseboatAllepey: '格安ハウスボートアレッピー',
        budgetHouseboatAlappuzha: '格安ハウスボートアラップーザ',
        budgetAlleppeyBoatHouse: '格安アレッピーボートハウス',
        spotBookingBoatHouse: 'スポット予約ボートハウス',
        prepaidTaxiCochinAirport: 'コーチン空港のプリペイドタクシーサービス',
        budgetAlappuzhaHouseboats: '格安アラップーザハウスボート',
        budgetAlleppeyHouseboats: '格安アレッピーハウスボート',
        b2bAlleppeyHouseboats: 'B2Bアレッピーハウスボート',
        privateAlleppeyHouseboats: 'プライベートアレッピーハウスボート',
        houseboatsInIndia: 'インドのハウスボート',
        sharedHouseboatsInAlleppey: 'アレッピーの共有ハウスボート',
        sharingHouseboatsInAlleppey: 'アレッピーの共有ハウスボート',
        sharingBoathouseInAlleppey: 'アレッピーの共有ボートハウス',
        clubbingHouseboatsInAlleppey: 'アレッピーのクラビングハウスボート',
        clubbingBoathouseInAlleppey: 'アレッピーのクラビングボートハウス',
        luxuryHouseboatsInAlleppey: 'アレッピーの高級ハウスボート',
        premiumHouseboatsInAlleppey: 'アレッピーのプレミアムハウスボート',
        deluxeHouseboatsInAlleppey: 'アレッピーのデラックスハウスボート',
        standardHouseboatsInAlleppey: 'アレッピーのスタンダードハウスボート',
        ultraLuxuryHouseboatsInAlleppey: 'アレッピーの超高級ハウスボート',
        ultraLuxurySharingHouseboatsInAlleppey: 'アレッピーの超高級共有ハウスボート',
        bestHouseboatsInAlleppey: 'アレッピーのベストハウスボート',
        bestLuxuryHouseboatsInAlleppey: 'アレッピーのベスト高級ハウスボート',
        bestPremiumHouseboatsInAlleppey: 'アレッピーのベストプレミアムハウスボート',
        bestDeluxeHouseboatsInAlleppey: 'アレッピーのベストデラックスハウスボート',
        bestStandardHouseboatsInAlleppey: 'アレッピーのベストスタンダードハウスボート',
        bestAlappuzhaHouseboatPackages: 'ベストアラップーザハウスボートパッケージ',
        bestAlappuzhaBoatHousePackages: 'ベストアラップーザボートハウスパッケージ'
      },
      services: { title: 'サービス', flightBooking: '航空券予約', hotelReservation: 'ホテル予約', tourPackages: 'ツアーパッケージ' },
      company: { title: '会社', aboutUs: '会社概要', contact: 'お問い合わせ' },
      support: { title: 'サポート', helpCenter: 'ヘルプセンター', terms: '利用規約', privacy: 'プライバシーポリシー', refund: '返金ポリシー', faq: 'よくある質問' },
      copyright: '© {{year}} Tourism Paradise. 無断複写・転載を禁じます。'
    }
  },
  ko: {
    translation: {
      destinationNotFound: {
        title: "목적지를 찾을 수 없습니다",
        description: "죄송합니다. 찾고 계신 목적지를 찾을 수 없습니다."
      },
      goBack: "목적지 목록으로 돌아가기",
      thingsToDo: "할 수 있는 일",
      food: "온라인으로 음식 주문하기",
      aboutDestination: "소개",
      getInTouch: "문의하기",
      chatOnWhatsApp: "WhatsApp으로 채팅하기",
      instantResponse: "즉각 응답",
      sendEmail: "이메일 보내기",
      emailAddress: "info@tourismparadise.com",
      houseboatShort: "알레피 1베드룸 프라이빗 상층 데크 하우스보트 (주/야).",
      exploreNow: "지금 탐색하기",
      planYourVisitTitle: "방문 계획 세우기",
      planYourVisitSubtitle: "양식을 작성해주시면 24시간 내에 연락드리겠습니다",
      labelFullName: "전체 이름 *",
      placeholderFullName: "전체 이름을 입력하세요",
      labelEmail: "이메일 주소 *",
      placeholderEmail: "your.email@example.com",
      labelPhone: "전화번호",
      placeholderPhone: "+91 98765 43210",
      labelMessage: "메시지 *",
      placeholderMessage: "여행 계획, 선호 사항, 궁금한 점을 알려주세요...",
      sending: "전송 중...",
      sendInquiry: "문의 보내기",
      successMessage: "✓ 메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.",
      whatsappMessage: "안녕하세요! 저는 {{name}}, {{country}} 방문에 관심이 있습니다. 자세한 정보를 제공해 주실 수 있나요?",
      emailSubject: "{{destinationName}} 관련 문의",
      emailBodyTemplate: "안녕하세요,\n\n{{destination}}에 대해 더 알고 싶습니다.\n\n감사합니다!",
      heroTitle: '여행의 모든 부분을 계획하세요',
      heroSubtitle: '항공편, 호텔, 교통편 및 체험을 한 곳에서 모두 예약하세요. 원활한 여행 계획을 위한 완벽한 솔루션입니다.',
      houseboats: '하우스보트',
      shikara: '시카라 탑승',
      flights: '항공편',
      hotels: '호텔',
      trains: '기차',
      buses: '버스',
      cars: '렌터카',
      tours: '투어',
      cruises: '크루즈',
      activities: '활동',
      packages: '휴가 패키지',
      weekend: '주말 여행',
      beaches: '해변 숙박',
      mountains: '산 여행',
      adventure: '모험',
      citybreaks: '도시 여행',
      photography: '사진 투어',
      insurance: '여행자 보험',
      passes: '도시 패스',
      budget: '가성비 숙박',
      bikes: '자전거 대여',
      villas: '빌라 & 주택',
      todaysDeals: '오늘의 인기 상품',
      exploreDestinations: '목적지 탐색',
      seaFishRestaurants: '해산물 레스토랑',
      backwaterVillageStay: '백워터 빌리지 스테이',
      keralaChipsAndSpices: '케랄라 칩 & 향신료',
      keralaHandlooms: '케랄라 수공 직물',
      honeymoonBoatHouse: '허니문 보트 하우스',
      houseboats: '하우스보트',
      noHouseboatsFound: '검색과 일치하는 하우스보트를 찾을 수 없습니다.',

      budgetTravelDeals: '당신을 위한 저예산 여행 상품',
      offerHotels: '호텔',
      offerHouseboatsDayNightCruise: '알레피의 주야간 크루즈 하우스보트',
      offerHouseboatsDayNight1Bedroom: '알레피의 주야간 1베드룸 하우스보트',
      offerHouseboatsDayCruise1BedroomUpperDeck: '알라푸자의 주간 크루즈 1베드룸 상부 데크 개인 하우스보트',
      offerKeralaHoneymoonHouseboat: '케랄라 허니문 하우스보트',
      offerHouseboatDayNight1BedroomUpperDeck: '알레피의 주야간 1베드룸 상부 데크 개인 하우스보트',
      offerHouseboatsAlleppeyDayTripUpperDeck: '알레피의 당일치기 상부 데크 하우스보트',
      offerHouseboatsB2BPrice1Bedroom: '알레피의 1베드룸 하우스보트 B2B 가격',
      offerSharingHouseboats2People: '알레피의 2인용 공유 하우스보트 가격',
      offerUltraPremiumHouseboats: '알레피의 울트라 프리미엄 하우스보트',
      offerKeralaTourBudgetPackages: '케랄라 투어 저예산 패키지',
      offerKeralaBoating: '케랄라 보트 타기',
      offerB2BTravelDealsKeralaHouseboat: '케랄라 하우스보트 패키지 B2B 여행 상품',
      offerPetalsFlowers: '꽃잎',
      offerOrchidForSale: '판매용 난초 - 난초 꽃 식물',
      offerOxidisedOrnaments: '산화된 장신구',
      offerKeralaHandloomsSarees: '케랄라 수공 직물 - 케랄라 카사부 사리',
      offerKeralaHandicrafts: '케랄라 수공예품',
      offerKeralaChips: '케랄라 칩 - 케랄라 바나나 칩',
      offerKeralaSpices: '케랄라 향신료',
      offerDriedFish: '말린 생선',
      offerKeralaRealEstate: '케랄라 부동산',
      offerKeralaLottery: '케랄라 복권 - 케랄라 범퍼 복권',
      offerKeralaHomeDecor: '케랄라 홈 데코',
      offerTransportationInKerala: '케랄라의 교통',
      offerKeralaCoirProducts: '케랄라 코이어 제품',
      whyChooseTitle: '왜 투어리즘 파라다이스를 선택해야 하는가',
      whyChooseSubtitle: '종합적인 서비스와 전문가의 지도로 여행 계획을 손쉽게 만듭니다',
      showLess: '간략히 보기',
      showMore: '더 보기'
    },
    testimonials:// public/locales/ko/testimonials.json
{
  "sectionTitle": "여행객들의 후기",
  "sectionSubtitle": "수천 명의 만족한 고객들의 실제 경험",
  "quoteOpen": "\"",
  "indicatorAria": "후기 표시 {{index}}",

  "person1": {
    "name": "사라 존슨",
    "location": "뉴욕, 미국",
    "text": "정말 놀라운 경험이었습니다! Tourism Paradise 팀은 우리의 허니문을 완벽하게 계획해주었습니다. 세세한 부분까지 챙겨주어 케랄라의 백워터에서 가장 로맨틱한 여행을 했습니다.",
    "trip": "케랄라 백워터 허니문"
  },

  "person2": {
    "name": "마이클 첸",
    "location": "토론토, 캐나다",
    "text": "전문적인 서비스와 세부사항에 대한 놀라운 주의. 해변과 고산지대에 대한 지역 지식을 바탕으로 한 전문적인 기획 덕분에 가족 여행이 완벽하게 진행되었습니다.",
    "trip": "케랄라 가족 모험"
  },

  "person3": {
    "name": "에밀리 로드리게즈",
    "location": "바르셀로나, 스페인",
    "text": "업무로 자주 여행하지만, Tourism Paradise가 주관한 이번 휴가 여행은 특별했습니다. 개인화된 일정과 케랄라에서의 아유르베다 리트리트 지원으로 스트레스 없이 다녀왔습니다.",
    "trip": "케랄라 솔로 리트리트"
  }
},
    featureList: {
      pilgrimPackages: '최고의 순례 패키지',
      pilgrimDescription: '평온한 영적 여행을 위한 성스러운 목적지로 신중하게 기획된 순례 투어.',
      industrialTitle: '산업 컨설팅 서비스 및 노동력 공급업체',
      industrialShortDesc: '프로젝트 보고서 및 재정 지도부터 엔지니어, 기술자, 건설 계약자와 같은 숙련된 노동력 공급에 이르기까지 모든 산업 및 비즈니스 요구를 충족합니다.',
      industrialFullDesc: '프로젝트 보고서 작성, 재정 지도, 건설 감독, 계획 및 견적 작성, 산업 및 호텔 기계, 건설 노동자 및 계약자, 전기, 배관, 에어컨, 건설, 가전 제품, 냉장고, 세탁기, 에어컨, 자동차, 전장, 컴퓨터, 휴대폰, 셀룰러폰, 엘리베이터 운영자, 홈 데코, 보석 및 장식품, 커피 및 스낵 메이커, 석공, 목수, 용접공, 기계 설치, 페인트공, 청소, 호텔, 운전사, 알루미늄 가공, 철강 가공, 가정부, 정원 작업, 중장비 차량 및 기계 운영자, 웹사이트 디자인 및 호스팅, 태양광 발전 시스템 설치 가정 서비스, 실험실 기술자, 엔지니어 및 의사, 교사, 세탁, 하우스 키핑 등',
      educationTitle: '교육 컨설팅 서비스',
      educationDescription: '공학, 의과대학, 농업, 컴퓨터 AI, LLB, MBA, BBA, MCA, 실험실 기술자, 물리 치료, 치과, 아유르베다 등',
      legalTitle: '변호사 및 법률가',
      legalDescription: '경험 많은 변호사와 법률가로부터 전문적인 법률 자문 및 서비스에 접근.',
    },destinationOffers: {
        1: {
          title: "호텔",
          description: "야생동물/숲 지역 및 관련 활동: • 페리야르 야생동물 보호구역(페리야르 호랑이 보호구역) • 케랄라 숲 지역 • 트레킹 지역 • 산악 지역 • 코끼리 체험/관찰(코끼리 사파리, 코끼리 타기, 야생/보호구역에서의 관찰. 축제에서는 코끼리 행진 또는 가자멜라로 등장)."
        },

        2: {
          title: "알레피 하우스보트 — 주간·야간 크루즈",
          description: "알레피 하우스보트 호텔, 1~22개의 침실을 갖춘 하우스보트. 프리미엄·럭셔리 숙박, 저예산 보트, 무하마 선착장, 네루 트로피 보트레이스, 알라푸자 출발~알레피 도착, 칸난카라 항로."
        },

        3: {
          title: "알레피 하우스보트 — 1베드룸 주·야간 스테이",
          description: "알레피 백워터 홈스테이, 알라푸자 마을, 팔라투루티 아파트, 알레피 타운의 빌라, 정글 트리하우스, 섬 리조트, 호숫가 및 해변가 숙소. 1~22개 침실의 프리미엄·럭셔리 보트."
        },

        4: {
          title: "알라푸자 — 1베드룸 상부 데크 프라이빗 하우스보트(당일 크루즈)",
          description: "1~22개 침실 하우스보트, 프리미엄·럭셔리 스테이, 무하마 선착장, 네루 트로피, 칸난카라 항로 등. 당일 크루즈에 적합한 다양한 보트."
        },

        5: {
          title: "케랄라 허니문 하우스보트",
          description: "에어컨 침실, 개인 욕실, 전망 데크 등 럭셔리 편의시설을 갖춘 로맨틱 허니문 보트. 촛불 만찬, 꽃 장식 침대 등 특별 서비스 포함."
        },

        6: {
          title: "알레피 하우스보트 — 1베드룸 상부 데크 프라이빗(주·야간)",
          description: "백워터 홈스테이, 알라푸자 마을, 팔라투루티 아파트, 알레피 빌라, 정글 하우스, 섬 리조트, 호숫가/해변가 숙소. 1~22침실 보트."
        },

        7: {
          title: "알레피 하우스보트 — 상부 데크 프라이빗 1베드룸(주·야간)",
          description: "알레피, 쿠마라콤, 콜람, 아슈타무디 호수, 코발람, 바르칼라, 체라이 해변, 마라리 해변, 카이냐카리, 푸나마다 등 백워터 지역."
        },

        8: {
          title: "알레피 당일 여행 — 상부 데크 하우스보트",
          description: "카이냐카리, 푸나마다, 아리야드, 팔라투루티 아파트 지역, 무하마 선착장 등을 도는 당일 크루즈."
        },

        9: {
          title: "알레피 하우스보트 — 1베드룸 B2B 가격",
          description: "카테고리: 디럭스, 프리미엄, 럭셔리. 유형: 상부 데크 있음/없음. 상부 데크는 더 넓은 전망 제공."
        },

        10: {
          title: "알레피 공유 하우스보트 — 2인 요금",
          description: "커플 또는 친구 여행객에게 적합한 저예산 공유 하우스보트. 1박 숙소, 케랄라 음식, 아름다운 백워터 전망 포함."
        },

        11: {
          title: "알레피 울트라 프리미엄 하우스보트",
          description: "디럭스·프리미엄·럭셔리·울트라 럭셔리. 1~22개 이상 침실 구성. 일일 크루즈/1박 크루즈 모두 가능."
        },

        12: {
          title: "케랄라 투어 — 저예산 패키지",
          description: "문나르, 테카디, 페리야르 야생동물, 와야나드, 바가몬, 폰무디, 이둑키, 데비쿨람, 쿠티카남, 밧타바다, 칸탈루르, 산악·트레킹·숲 지역."
        },

        13: {
          title: "케랄라 보트 여행",
          description: "고요한 백워터를 따라 떠나는 보트 투어. 논밭, 마을 운하, 전통 목조 배, 케랄라 음식. 커플·가족·솔로 여행자 모두에게 적합."
        },

        14: {
          title: "B2B 여행 특가 — 케랄라 하우스보트",
          description: "1~22 침실 하우스보트, 프리미엄·럭셔리, 무하마 선착장, 네루 트로피, 칸난카라 항로."
        },

        15: {
          title: "페탈스 플라워스",
          description: "케랄라의 고급 꽃 식물 전문 매장. 특히 난초 품종이 인기. 인테리어, 선물, 정원용으로 적합."
        },

        16: {
          title: "난초 판매 — 꽃 피는 난초 식물",
          description: "팔레노식스, 반다 등 열대 난초. 화려한 색상, 독특한 패턴, 오래가는 꽃. 실내 장식에 적합. ₹399부터."
        },

        17: {
          title: "산화 처리 장신구",
          description: "실버·황동을 산화시켜 만든 앤티크 블랙 스타일. 전통·현대 디자인 모두 제공. 사리나 현대 의상에 잘 어울림."
        },

        18: {
          title: "케랄라 핸들룸 — 카사브 사리",
          description: "케랄라 실크, 카사브 사리, 카사브 치리다르 재질, 손짜기 셔츠. 금테 장식 전통 의상."
        },

        19: {
          title: "케랄라 수공예품",
          description: "목각, 금속제품, 코코넛 섬유 매트, 코코넛 껍질 공예품, 카타칼리 가면, 네티파탐, 아란물라 금속 거울 등."
        },

        20: {
          title: "케랄라 칩스 — 바나나 칩스",
          description: "케랄라 넨드란 바나나 칩, 잭프루트 칩 등 유명 전통 스낵."
        },

        21: {
          title: "케랄라 향신료",
          description: "고품질 향신료: 카다몸, 후추, 시나몬, 정향, 육두구. 서가츠 유기농 농장에서 직접 공수."
        },

        22: {
          title: "말린 생선",
          description: "아슈타무디 호수산 무염 위생 건조 새우. 마살라, 그레이비, 처트니에 적합한 중·대형 새우."
        },

        23: {
          title: "케랄라 부동산",
          description: "핵심 위치의 4BHK 독립 주택(3200 sq.ft). 빌라, 토지, 주택, 아파트 매매·임대 서비스."
        },

        24: {
          title: "케랄라 복권 — 범퍼 복권",
          description: "케랄라 주 공식 복권: Win Win, Sthree Sakthi, Fifty Fifty, Karunya. 1크로르 상금."
        },

        25: {
          title: "케랄라 홈 데코",
          description: "케랄라 홈 인테리어 제품, 코이어 제품. 자연섬유로 만든 친환경 수공예품."
        },

        26: {
          title: "케랄라 교통 서비스",
          description: "구루바유르, 아티라필리 폭포, 바자찰 폭포, 아르툰칼 대성당, 포트 코치, 네엘레스와람, 텐말라, 파드마나바사미 사원, 초타니카라, 사바리말라, 쿠탈람, 우티, 코다이카날, 고아, 카르나타카, 타밀나두, 첸나이, 마두라이, 라메스와람, 코임바토르, 발파라이, 카이냐카리, 푸나마다, 아리야드, 팔라투루티, 무하마 선착장."
        },

        27: {
          title: "케랄라 코이어 제품",
          description: "친환경·생분해성 코이어 제품: 매트, 로프, 브러시, 가방, 장식품. 국내외에서 높은 수요."
        },

        28: {
          title: "온라인 음식 주문",
          description: "케랄라 전역에서 온라인 음식 주문 가능. 케랄라 전통 요리부터 세계 음식까지. 코치, 트리반드럼, 코지코드 등 지역에서 서비스 제공."
        }
      },
    popularDestinations:{
        title: "인도의 더 많은 여행지 탐험하기",
        subtitle: "여러 주의 도시에서 할 수 있는 다양한 활동을 찾아보세요",
        thingsToDo: "할 수 있는 일",
        comingSoonTitle: "곧 업데이트됩니다!",
        comingSoonDescription: "{{continent}}의 놀라운 여행지를 추가하고 있습니다. 곧 다시 확인해주세요!",
        northIndia: "북인도 여행지",
        southIndia: "남인도 여행지",
        eastIndia: "동부 및 동북부 인도 여행지",
        centralIndia: "중앙 인도 여행지",

        delhi: {
          name: "델리",
          country: "델리",
          history:
            "인도 수도 델리는 2000년이 넘는 풍부한 역사를 가지고 있습니다. 무굴 황제들이 남긴 모스크, 성채, 유적이 가득하며, 레드 포트와 인디아 게이트는 고대 유산과 현대 인프라가 공존하는 상징입니다."
        },

        jaipur: {
          name: "자이푸르",
          country: "라자스탄",
          history:
            "‘핑크시티’로 알려진 자이푸르는 라자스탄의 수도이자 인도 골든 트라이앵글의 주요 도시입니다. 1727년에 세워졌으며, 암베르 요새, 하와 마할 그리고 왕궁 등 웅장한 건축물로 유명합니다."
        },

        agra: {
          name: "아그라",
          country: "우타르프라데시",
          history:
            "세계 7대 불가사의 중 하나인 타지마할의 도시입니다. 1556년부터 1658년까지 무굴 제국의 수도였으며, 아그라성, 파테푸르 시크리 등 뛰어난 무굴 건축물들이 남아 있습니다."
        },

        varanasi: {
          name: "바라나시",
          country: "우타르프라데시",
          history:
            "세계에서 가장 오래 지속적으로 사람이 거주한 도시 중 하나입니다. 갠지스강을 중심으로 한 힌두교의 성지이며, 가트와 사원들, 깊은 영적 분위기로 유명합니다."
        },

        amritsar: {
          name: "암리차르",
          country: "펀자브",
          history:
            "1577년 구루 람다스가 세운 도시로, 시크교에서 가장 신성한 ‘황금사원’이 위치합니다. 1919년의 암리차르 학살로도 역사적 의미를 지니고 있습니다."
        },

        manali: {
          name: "마날리",
          country: "히마찰프라데시",
          history:
            "해발 2050m의 히말라야 산맥에 위치한 유명한 휴양지입니다. 눈 덮인 산과 계곡, 모험 스포츠, 히디마 사원으로 유명합니다."
        },

        leh: {
          name: "레",
          country: "라다크",
          history:
            "라다크의 수도이자 고대 실크로드의 중요한 경유지였습니다. 험준한 산악 지형, 불교 사원, 판공호수로 유명합니다."
        },

        rishikesh: {
          name: "리시케시",
          country: "우타라칸드",
          history:
            "‘요가의 세계 수도’로 알려진 영적 도시입니다. 갠지스강과 아쉬람, 요가 센터, 유명한 락슈만 줄라 다리가 있습니다."
        },

        udaipur: {
          name: "우다이푸르",
          country: "라자스탄",
          history:
            "‘호수의 도시’로 유명하며, 1559년에 세워졌습니다. 도시 궁전, 호수 궁전, 피콜라 호수 등 아름다운 경관을 자랑합니다."
        },

        shimla: {
          name: "심라",
          country: "히마찰프라데시",
          history:
            "영국령 인도의 여름 수도였으며, 식민지 풍 건축물과 칼카–심라 철도(UNESCO 세계유산)로 유명합니다."
        },

        mussoorie: {
          name: "무소리",
          country: "우타라칸드",
          history:
            "‘언덕의 여왕’으로 불리며, 1826년에 설립된 아름다운 산악 휴양지입니다. 도운 계곡과 히말라야의 멋진 풍경을 제공합니다."
        },

        srinagar: {
          name: "스리나가르",
          country: "잠무 카슈미르",
          history:
            "여름 수도로 유명하며, 달 호수, 무굴 정원, 전통 하우스보트로 유명합니다. ‘지상의 천국’이라고 불립니다."
        },

        jaisalmer: {
          name: "자이살메르",
          country: "라자스탄",
          history:
            "‘황금 도시’로 불리며, 황색 사암으로 지어진 자이살메르 요새와 고대 하벨리로 유명합니다."
        },

        nainital: {
          name: "나이니탈",
          country: "우타라칸드",
          history:
            "해발 2084m의 나이니 호수를 중심으로 형성된 휴양 도시로, 1841년 영국인에 의해 개발되었습니다."
        },

        vrindavan: {
          name: "브린다반",
          country: "우타르프라데시",
          history:
            "힌두교에서 가장 신성한 도시 중 하나이며, 크리슈나 신이 어린 시절을 보냈다고 전해지는 곳입니다."
        },

        haridwar: {
          name: "하리드와르",
          country: "우타라칸드",
          history:
            "힌두교 7대 성지 중 하나로, 갠지스강이 평야로 들어오는 지점입니다. 12년마다 쿰브 멜라가 열립니다."
        },
          mumbai: {
          name: "뭄바이",
          country: "마하라슈트라",
          history:
            "‘꿈의 도시’로 불리는 인도의 금융 수도입니다. 과거 7개의 섬이 합쳐져 만들어졌으며, 인도문, 마린드라이브, 볼리우드, 식민지 시대 건축물과 현대적 고층 건물이 공존하는 도시입니다."
        },

        bengaluru: {
          name: "벵갈루루",
          country: "카르나타카",
          history:
            "‘인도의 실리콘밸리’로 불리며, 1537년에 건설되었습니다. 벵갈루루 궁전, 티푸술탄 여름궁전, 라르바그 식물원이 유명합니다."
        },

        goa: {
          name: "고아",
          country: "고아",
          history:
            "1961년까지 포르투갈 식민지였으며, 아름다운 해변, 활기찬 야경, 포르투갈식 건축물이 특징입니다."
        },

        kerala: {
          name: "케랄라",
          country: "케랄라",
          history:
            "‘신의 고향’으로 불리며, 백워터, 아유르베다, 푸른 자연으로 유명합니다. 카타칼리 춤, 보트 레이스, 향신료 요리가 특징입니다."
        },

        hyderabad: {
          name: "하이데라바드",
          country: "텔랑가나",
          history:
            "1591년 무하마드 쿠틀브 샤가 세운 도시로, 역사, 비르야니, 진주 무역으로 유명합니다. 차르미나르, 골콘다 요새, 쿠틀브 샤 무덤이 있습니다."
        },

        chennai: {
          name: "첸나이",
          country: "타밀나두",
          history:
            "옛 이름은 마드라스로, 남인도 문화의 중심지입니다. 마리나 비치, 카팔레슈와르 사원, 세인트 조지 요새가 유명합니다."
        },

        kochi: {
          name: "코치",
          country: "케랄라",
          history:
            "‘아라비아 해의 여왕’으로 불리며, 고대부터 향신료 무역의 중심지였습니다. 포트 코치, 중국식 어망, 마탄체리 궁전 등이 유명합니다."
        },

        mysuru: {
          name: "마이수루",
          country: "카르나타카",
          history:
            "카르나타카의 문화 수도이며 와디야르 왕조의 옛 수도입니다. 다샤라 축제 기간 10만 개의 전구로 밝혀지는 마이수루 궁전이 유명합니다."
        },

        madurai: {
          name: "마두라이",
          country: "타밀나두",
          history:
            "인도에서 가장 오래된 도시 중 하나로, 수천 개의 조각상으로 장식된 메낙시 사원이 특히 유명합니다."
        },

        alleppey: {
          name: "알라피 (알라푸자)",
          country: "케랄라",
          history:
            "‘동양의 베네치아’로 불리며 백워터, 하우스보트, 네루 보트 레이스로 유명합니다."
        },

        ooty: {
          name: "우티",
          country: "타밀나두",
          history:
            "‘언덕의 여왕’으로 불리며, 영국인들이 여름 휴양지로 개발했습니다. 니लग리 산악 열차(UNESCO), 차 농장이 유명합니다."
        },

        coorg: {
          name: "쿠르그",
          country: "카르나타카",
          history:
            "‘인도의 스코틀랜드’로 불리며, 커피 농장, 안개 낀 산, 코다바 문화가 특징입니다."
        },

        hampi: {
          name: "함피",
          country: "카르나타카",
          history:
            "UNESCO 세계문화유산으로, 비자야나가르 제국의 옛 수도입니다. 드라비다 양식의 사원과 왕궁 유적이 장관을 이룹니다."
        },

        pondicherry: {
          name: "퐁디체리",
          country: "퐁디체리",
          history:
            "1954년까지 프랑스 식민지였으며, 프랑스풍 거리, 건축, 아우로빌, 스리 아우로빈도 아쉬람으로 유명합니다."
        },
          visakhapatnam: {
          name: "비샤카파트남 (비작)",
          country: "안드라프라데시",
          history:
            "‘운명의 도시’, ‘동해안의 보석’으로 불리며, 고대 사원, 보라 동굴(수백만 년 된 종유석), INS 쿠루수라 잠수함 박물관으로 유명합니다."
        },

        tirupati: {
          name: "티루파티",
          country: "안드라프라데시",
          history:
            "세계에서 가장 많이 방문되는 힌두교 성지 중 하나인 티루말라 벤카테스와라 사원의 도시입니다."
        },

        kolkata: {
          name: "콜카타",
          country: "서벵골",
          history:
            "‘기쁨의 도시’이자 영국령 인도의 옛 수도입니다. 빅토리아 기념관, 하우라 다리, 벵골어 문학과 예술의 중심지로 유명합니다."
        },

        gangtok: {
          name: "강톡",
          country: "시킴",
          history:
            "해발 1650m에 위치한 시킴의 수도로, 세계 3대 봉우리 칸첸중가의 장엄한 전망을 제공합니다. 룸텍 사원 등이 유명합니다."
        },

        shillong: {
          name: "실롱",
          country: "메갈라야",
          history:
            "‘동양의 스코틀랜드’로 불리며, 소나무 언덕, 엘리펀트 폭포, 아름다운 호수, 인도의 록 음악 중심지로 유명합니다."
        },

        darjeeling: {
          name: "다르질링",
          country: "서벵골",
          history:
            "‘언덕의 여왕’, 세계적으로 유명한 홍차와 유네스코 유산인 히말라야 산악 철도(토이 트레인)로 유명합니다."
        },
          puri: {
          name: "푸리",
          country: "오디샤",
          history:
            "힌두교 4대 성지(차르담) 중 하나로, 12세기 자간나트 사원의 도시입니다. 연례 라타 야트라 축제로 유명합니다."
        },

        guwahati: {
          name: "구와하티",
          country: "아삼",
          history:
            "북동 인도의 관문 도시로, 영적 성지인 카마카야 사원이 위치합니다."
        },

        kohima: {
          name: "코히마",
          country: "나가랜드",
          history:
            "제2차 세계대전 ‘코히마 전투’로 유명하며, 코히마 전쟁 묘지와 혼빌 축제가 유명합니다."
        },

        itanagar: {
          name: "이타나가르",
          country: "아루나찰프라데시",
          history:
            "‘벽돌 요새’라는 의미의 이타 포트 유적으로 유명하며, 불교 사원과 자연경관이 아름답습니다."
        },

        bhubaneswar: {
          name: "부바네스와르",
          country: "오디샤",
          history:
            "‘사원의 도시’로 불리며, 6~13세기의 500개 넘는 칼링가 양식 사원이 있습니다."
        },

        portblair: {
          name: "포트블레어",
          country: "안다만 니코바르 제도",
          history:
            "안다만 제도의 관문 도시로, 영국 식민시절 감옥이던 셀룰러 감옥이 유명합니다."
        },

        pelling: {
          name: "펠링",
          country: "시킴",
          history:
            "해발 2150m의 아름다운 도시로, 칸첸중가 산의 절경을 감상할 수 있습니다."
        },

        tawang: {
          name: "타왕",
          country: "아루나찰프라데시",
          history:
            "인도 최대 규모의 불교 사원인 타왕 수도원이 위치하며, 6대 달라이 라마의 고향입니다."
        },

        cherrapunji: {
          name: "체라푼지",
          country: "메갈라야",
          history:
            "한때 세계에서 가장 비가 많이 오는 곳으로 알려졌으며, 카시족의 ‘살아있는 뿌리 다리’가 유명합니다."
        },
          imphal: {
          name: "임팔",
          country: "마니푸르",
          history:
            "2차 세계대전의 중요한 전투지이며, 캉라 요새, 떠다니는 섬이 있는 로크탁 호수로 유명합니다."
        },

        aizawl: {
          name: "아이저울",
          country: "미조람",
          history:
            "해발 1132m의 아름다운 산악 도시로, 미조 부족 문화와 전통 직조가 유명합니다."
        },

        agartala: {
          name: "아가르탈라",
          country: "트리푸라",
          history:
            "우자얀타 궁전과 호수 위의 네르마할 궁전, 고대의 트리푸라 순다리 사원이 있는 도시입니다."
        },

        khajuraho: {
          name: "카주라호",
          country: "마디아프라데시",
          history:
            "유네스코 세계유산으로, 950~1050년에 지어진 힌두교·자이나교 사원과 정교한 조각상으로 유명합니다."
        },

        bhopal: {
          name: "보팔",
          country: "마디아프라데시",
          history:
            "‘호수의 도시’로 불리며, 타즈울마스지드, 사치 대탑(UNESCO)으로 유명합니다."
        },

        gwalior: {
          name: "과왈리오르",
          country: "마디아프라데시",
          history:
            "거대한 언덕 요새와 고전 음악의 중심지로 유명합니다."
        },

        indore: {
          name: "인도르",
          country: "마디아프라데시",
          history:
            "마디아프라데시의 상업 수도이며, 인도의 가장 깨끗한 도시로 유명합니다."
        },

        orchha: {
          name: "오르차",
          country: "마디아프라데시",
          history:
            "1531년 건립된 아름다운 고대 도시로, 자항기르 마할과 라지 마할이 유명합니다."
        },

        ujjain: {
          name: "우자인",
          country: "마디아프라데시",
          history:
            "힌두교 7대 성지 중 하나로, 12년마다 쿰브 멜라가 열립니다. 마하칼레슈와르 신전이 있습니다."
        },

        ranchi: {
          name: "란치",
          country: "자르칸드",
          history:
            "‘폭포의 도시’로 불리며, 훤드루 폭포, 조나 폭포 등 자연경관으로 유명합니다."
        },

        daman: {
          name: "다만",
          country: "다만 & 디우",
          history:
            "1961년까지 포르투갈의 식민지였으며, 요새와 해변이 유명합니다."
        },

        silvassa: {
          name: "실바사",
          country: "다드라 & 나가르 하벨리",
          history:
            "와를리 예술과 부족 문화, 평화로운 자연경관으로 유명한 도시입니다."
        },

        nagpur: {
          name: "나그푸르",
          country: "마하라슈트라",
          history:
            "‘오렌지 도시’로 유명하며, 인도의 지리적 중심입니다. 디크샤부미 성지가 있습니다."
        },

        raipur: {
          name: "라이푸르",
          country: "차티스가르",
          history:
            "고대 사원과 불교 유적지로 가는 관문 도시입니다."
        },

        jabalpur: {
          name: "자발푸르",
          country: "마디아프라데시",
          history:
            "베다가트의 대리석 협곡과 두안다르 폭포로 유명합니다."
        },

        pachmarhi: {
          name: "파치마르히",
          country: "마디아프라데시",
          history:
            "마디아프라데시 유일의 산악 휴양지로, 식민 건축과 오래된 동굴벽화가 있습니다."
        },

        amarkantak: {
          name: "아마르칸탁",
          country: "마디아프라데시",
          history:
            "신성한 나르마다 강과 손 강의 발원지로 유명한 성지입니다."
        },

        chitrakoot: {
          name: "치트라쿠트",
          country: "마디아프라데시 / 우타르프라데시",
          history:
            "라마야나에 따르면, 라마·시타·락슈만이 14년 유배 생활 중 11년을 보낸 성지입니다."
        },
        bhimbetka: {
          name: "빔베트카",
          country: "마디아프라데시",
          history:
            "UNESCO 세계유산으로, 500개 이상의 선사 시대 동굴이 있으며 3만 년 전의 암각화가 남아 있습니다."
        }
    },
     houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: '알레피 알라푸자 케랄라의 하우스보트 호텔',
      houseboatsHotelsInMunnar: '문나르의 하우스보트 호텔',
      houseboatsHotelsInCochin: '코친의 하우스보트 호텔',
      houseboatsHotelsInKumarakomLake: '쿠마라콤 호수의 하우스보트 호텔',
      houseboatsHotelsInKottayam: '코타얌의 하우스보트 호텔',
      houseboatsHotelsInAlleppey: '알레피의 하우스보트 호텔',
      houseboatsHotelsInChottanikara: '초타니카라의 하우스보트 호텔',
      houseboatsHotelsInThiruvananthapuram: '티루바난타푸람의 하우스보트 호텔',
      houseboatsHotelsInKovalamBeach: '코발람 해변의 하우스보트 호텔',
      houseboatsHotelsInThekkady: '테카디의 하우스보트 호텔',
      houseboatsHotelsInWayanad: '와야나드의 하우스보트 호텔',
      houseboatsHotelsInAlappuzha: '알라푸자의 하우스보트 호텔',
      houseboatsHotelsInGuruvayur: '구루바유르의 하우스보트 호텔',
      houseboatsHotelsInVagamon: '바가몬의 하우스보트 호텔',
      houseboatsHotelsInAthirapillyWaterFalls: '아티라필리 폭포의 하우스보트 호텔',
      houseboatsHotelsInMarariBeach: '마라리 해변의 하우스보T 호텔',
      houseboatsHotelsInPoovarBeach: '푸바르 해변의 하우스보트 호텔',
      houseboatsHotelsInVarkalaBeach: '바르칼라 해변의 하우스보트 호텔',
      houseboatsHotelsInAshtamudiLake: '아슈타무디 호수의 하우스보트 호텔',
      houseboatsHotelsInKanyakumariBeach: '카냐쿠마리 해변의 하우스보트 호텔',
      houseboatsHotelsInAlleppeyBeach: '알레피 해변의 하우스보트 호텔',
      houseboatsHotelsInAlappuzhaLake: '알라푸자 호수의 하우스보트 호텔',
      houseboatsHotelsInIndia: '인도의 하우스보트 호텔',
      houseboatsHotelsInKerala: '케랄라의 하우스보트 호텔',
      houseBoatHotelsInAlleppey: '알레피의 하우스보트 호텔',
      boatHouseHotelsInIndia: '인도의 보트하우스 호텔',
      boatHouseHotelsInKerala: '케랄라의 보트하우스 호텔',
      sharingHouseboatsHotelsInAlleppey: '알레피의 공유 하우스보트 호텔',
      sharingBoatHouseHotelsInKerala: '케랄라의 공유 보트하우스 호텔',
      dayTripHouseboatsHotelsInAlleppey: '알레피의 당일치기 하우스보트 호텔',
      dayCruiseHouseboatsHotelsInAlleppey: '알레피의 당일 크루즈 하우스보트 호텔',
      fiveStarHouseboatsHotelsInAlleppey: '알레피의 5성급 하우스보트 호텔',
      fourStarHouseboatsHotelsInAlleppey: '알레피의 4성급 하우스보트 호텔',
      threeStarHouseboatsHotelsInAlleppey: '알레피의 3성급 하우스보트 호텔',
      twoStarHouseboatsHotelsInAlleppey: '알레피의 2성급 하우스보트 호텔',
      budgetHouseboatsHotelsInAlleppey: '알레피의 저가 하우스보트 호텔',
      standardBoatHouseHotelsInAlleppey: '알레피의 표준 보트하우스 호텔'
    }
    ,
    destinationFeed: {
      loadingMore: '더 많은 혜택을 로드하는 중...',
      inquiryTitle: '질문이 있으신가요? 연락주세요!',
      inquirySubtitle: '문의 사항을 보내주시면 24시간 이내에 저희 팀에서 연락드리겠습니다',
      yourName: '이름 *',
      yourEmail: '이메일 *',
      phoneNumber: '전화번호',
      subject: '제목',
      yourMessage: '메시지 *',
      sendInquiry: '문의 보내기',
      scrollToInquiryAria: '문의 양식으로 스크롤',
      "bookViaWhatsapp": "WhatsApp으로 예약하기"
    },
    footer: {
      description: '잊을 수 없는 여행을 위한 신뢰할 수 있는 여행 동반자. 평생 지속될 추억을 만듭니다.',
      destinations: {
        title: '목적지',
        keralaBudgetHouseboat: '케랄라 저가 하우스보트',
        luxuryTopEndHouseboat: '고급 최고급 하우스보트',
        b2bPriceKeralaHouseboats: 'B2B 가격 케랄라 하우스보트',
        houseboatsInAlappuzha: '알라푸자의 하우스보트',
        budgetBoatHouseAllepey: '저가 보트 하우스 알레피',
        budgetBoatHouseAlappuzha: '저가 보트 하우스 알라푸자',
        budgetHouseboatAllepey: '저가 하우스보트 알레피',
        budgetHouseboatAlappuzha: '저가 하우스보트 알라푸자',
        budgetAlleppeyBoatHouse: '저가 알레피 보트 하우스',
        spotBookingBoatHouse: '현장 예약 보트 하우스',
        prepaidTaxiCochinAirport: '코친 공항 선불 택시 서비스',
        budgetAlappuzhaHouseboats: '저가 알라푸자 하우스보트',
        budgetAlleppeyHouseboats: '저가 알레피 하우스보트',
        b2bAlleppeyHouseboats: 'B2B 알레피 하우스보트',
        privateAlleppeyHouseboats: '개인 알레피 하우스보트',
        houseboatsInIndia: '인도의 하우스보트',
        sharedHouseboatsInAlleppey: '알레피의 공유 하우스보트',
        sharingHouseboatsInAlleppey: '알레피의 공유 하우스보트',
        sharingBoathouseInAlleppey: '알레피의 공유 보트하우스',
        clubbingHouseboatsInAlleppey: '알레피의 클럽 활동 하우스보트',
        clubbingBoathouseInAlleppey: '알레피의 클럽 활동 보트하우스',
        luxuryHouseboatsInAlleppey: '알레피의 고급 하우스보트',
        premiumHouseboatsInAlleppey: '알레피의 프리미엄 하우스보트',
        deluxeHouseboatsInAlleppey: '알레피의 디럭스 하우스보트',
        standardHouseboatsInAlleppey: '알레피의 표준 하우스보트',
        ultraLuxuryHouseboatsInAlleppey: '알레피의 초호화 하우스보트',
        ultraLuxurySharingHouseboatsInAlleppey: '알레피의 초호화 공유 하우스보트',
        bestHouseboatsInAlleppey: '알레피 최고의 하우스보트',
        bestLuxuryHouseboatsInAlleppey: '알레피 최고의 고급 하우스보트',
        bestPremiumHouseboatsInAlleppey: '알레피 최고의 프리미엄 하우스보트',
        bestDeluxeHouseboatsInAlleppey: '알레피 최고의 디럭스 하우스보트',
        bestStandardHouseboatsInAlleppey: '알레피 최고의 표준 하우스보트',
        bestAlappuzhaHouseboatPackages: '최고의 알라푸자 하우스보트 패키지',
        bestAlappuzhaBoatHousePackages: '최고의 알라푸자 보트 하우스 패키지'
      },
      services: { title: '서비스', flightBooking: '항공권 예약', hotelReservation: '호텔 예약', tourPackages: '투어 패키지' },
      company: { title: '회사', aboutUs: '회사 소개', contact: '연락처' },
      support: { title: '지원', helpCenter: '도움말 센터', terms: '서비스 약관', privacy: '개인정보 보호정책', refund: '환불 정책', faq: '자주 묻는 질문' },
      copyright: '© {{year}} Tourism Paradise. 모든 권리 보유.'
    }
  },
  zh: {
    translation: {
      destinationNotFound: {
        title: "未找到目的地",
        description: "抱歉，我们无法找到您正在寻找的目的地。"
      },
      goBack: "返回目的地列表",
      food: "在线订餐",
      thingsToDo: "可做的事情",
      aboutDestination: "关于目的地",
      getInTouch: "联系我们",
      chatOnWhatsApp: "通过 WhatsApp 聊天",
      instantResponse: "即时回复",
      sendEmail: "发送邮件",
      emailAddress: "info@tourismparadise.com",
      houseboatShort: "阿勒皮 1 卧室上层私人船屋（昼夜）。",
      exploreNow: "立即探索",
      planYourVisitTitle: "规划您的旅行",
      planYourVisitSubtitle: "填写表格，我们将在24小时内与您联系",
      labelFullName: "全名 *",
      placeholderFullName: "请输入您的全名",
      labelEmail: "电子邮件地址 *",
      placeholderEmail: "your.email@example.com",
      labelPhone: "电话号码",
      placeholderPhone: "+91 98765 43210",
      labelMessage: "您的留言 *",
      placeholderMessage: "告诉我们您的旅行计划、偏好以及问题...",
      sending: "发送中...",
      sendInquiry: "发送咨询",
      successMessage: "✓ 消息发送成功！我们会尽快联系您。",
      whatsappMessage: "你好！我想访问 {{name}}（{{country}}）。能否提供更多信息？",
      emailSubject: "关于 {{destinationName}} 的询问",
      emailBodyTemplate: "你好，\n\n我想进一步了解 {{destination}}。\n\n谢谢！",
      heroTitle: '规划您旅程的每个部分',
      heroSubtitle: '在一个地方预订航班、酒店、交通和体验。您完整的旅行解决方案，实现无缝行程规划。',
      houseboats: '船屋',
      shikara: '西卡拉船游',
      flights: '航班',
      hotels: '酒店',
      trains: '火车',
      buses: '公共汽车',
      cars: '汽车租赁',
      tours: '旅游',
      cruises: '游轮',
      activities: '活动',
      packages: '度假套餐',
      weekend: '周末度假',
      beaches: '海滩住宿',
      mountains: '山区旅行',
      adventure: '冒险',
      citybreaks: '城市短途游',
      photography: '摄影之旅',
      insurance: '旅行保险',
      passes: '城市通行证',
      budget: '经济型住宿',
      bikes: '自行车租赁',
      villas: '别墅与住宅',
      todaysDeals: '今日特惠',
      exploreDestinations: '探索目的地',
      seaFishRestaurants: '海鱼餐厅',
      backwaterVillageStay: '回水乡住宿',
      keralaChipsAndSpices: '喀拉拉邦薯片和香料',
      keralaHandlooms: '喀拉拉邦手摇织机',
      honeymoonBoatHouse: '蜜月船屋',
      houseboats: '船屋',
      noHouseboatsFound: '没有找到与您的搜索相符的船屋。',

      budgetTravelDeals: '为您提供的经济实惠的旅行优惠',
      offerHotels: '酒店',
      offerHouseboatsDayNightCruise: '阿勒皮的日夜游船屋',
      offerHouseboatsDayNight1Bedroom: '阿勒皮的日夜一卧室船屋',
      offerHouseboatsDayCruise1BedroomUpperDeck: '阿拉普扎的日间游船一卧室上层甲板私人船屋',
      offerKeralaHoneymoonHouseboat: '喀拉拉邦蜜月船屋',
      offerHouseboatDayNight1BedroomUpperDeck: '阿勒皮的日夜一卧室上层甲板私人船屋',
      offerHouseboatsAlleppeyDayTripUpperDeck: '阿勒皮的上层甲板船屋一日游',
      offerHouseboatsB2BPrice1Bedroom: '阿勒皮一卧室船屋的B2B价格',
      offerSharingHouseboats2People: '阿勒皮两人共享船屋价格',
      offerUltraPremiumHouseboats: '阿勒皮的超豪华船屋',
      offerKeralaTourBudgetPackages: '喀拉拉邦经济游套餐',
      offerKeralaBoating: '喀拉拉邦划船',
      offerB2BTravelDealsKeralaHouseboat: '喀拉拉邦船屋套餐的B2B旅游优惠',
      offerPetalsFlowers: '花瓣花',
      offerOrchidForSale: '待售兰花 - 开花兰花植物',
      offerOxidisedOrnaments: '氧化饰品',
      offerKeralaHandloomsSarees: '喀拉拉邦手摇织机 - 喀拉拉邦卡萨武纱丽',
      offerKeralaHandicrafts: '喀拉拉邦手工艺品',
      offerKeralaChips: '喀拉拉邦薯片 - 喀拉拉邦香蕉片',
      offerKeralaSpices: '喀拉拉邦香料',
      offerDriedFish: '鱼干',
      offerKeralaRealEstate: '喀拉拉邦房地产',
      offerKeralaLottery: '喀拉拉邦彩票 - 喀拉拉邦保险杠彩票',
      offerKeralaHomeDecor: '喀拉拉邦家居装饰',
      offerTransportationInKerala: '喀拉拉邦的交通',
      offerKeralaCoirProducts: '喀拉拉邦椰壳产品',
      whyChooseTitle: '为什么选择旅游天堂',
      whyChooseSubtitle: '我们通过全面的服务和专家指导，让旅行规划变得轻松自如',
      showLess: '显示更少',
      showMore: '显示更多'
    },featureList: {
      pilgrimPackages: '最佳朝聖套裝行程',
      pilgrimDescription: '精心策劃的朝聖之旅，前往神聖的目的地，帶來寧靜的精神之旅。',
      industrialTitle: '工業諮詢服務與勞動力供應商',
      industrialShortDesc: '從項目報告和財務指導到供應工程師、技術人員和建築承包商等熟練勞動力，我們滿足您所有的工業和商業需求。',
      industrialFullDesc: '專案報告準備、財務指導、施工監督、規劃和估算準備、工業和酒店機械、建築工人與承包商、電氣、管道、空調、建築、家用電器、冰箱、洗衣機、空調、汽車、電腦、手機、蜂窩電話、電梯操作員、家居裝飾、珠寶和飾品、咖啡和零食製造商、泥瓦匠、木匠、焊工、機械安裝、油漆工、清潔、酒店、司機、鋁材製造、鋼材製造、家庭傭工、園藝工作、重型車輛和機械操作員、網站設計和託管、太陽能發電系統安裝家庭服務、實驗室技術人員、工程師和醫生、教師、洗衣、家政等。',
      educationTitle: '教育諮詢服務',
      educationDescription: '工程、醫學院、農業、電腦人工智能、法學學士（LLB）、工商管理碩士（MBA）、工商管理學士（BBA）、計算機應用碩士（MCA）、實驗室技術人員、物理治療、牙科、阿育吠陀等。',
      legalTitle: '律師與法律顧問',
      legalDescription: '獲得經驗豐富的律師和法律顧問提供的專業法律諮詢和服務。',
    }, 
    testimonials:// public/locales/zh/testimonials.json
{
  "sectionTitle": "我们的旅行者说",
  "sectionSubtitle": "成千上万满意游客的真实体验",
  "quoteOpen": "\"",
  "indicatorAria": "显示评价 {{index}}",

  "person1": {
    "name": "Sarah Johnson",
    "location": "纽约，美国",
    "text": "绝对惊人的体验！Tourism Paradise 团队为我们的蜜月做了完美的安排。每个细节都被照顾到，我们在喀拉拉的回水区度过了最浪漫的旅程。",
    "trip": "喀拉拉回水区蜜月"
  },

  "person2": {
    "name": "Michael Chen",
    "location": "多伦多，加拿大",
    "text": "专业的服务与对细节的极致关注。多亏了他们的专业规划和对当地海滩与山地景点的了解，我们的喀拉拉家庭之旅非常顺利。",
    "trip": "喀拉拉家庭冒险"
  },

  "person3": {
    "name": "Emily Rodriguez",
    "location": "巴塞罗那，西班牙",
    "text": "我经常出差，但这次由 Tourism Paradise 安排的休闲行程非常出色。个性化行程和对我在喀拉拉的阿育吠陀修养支持让整个行程无压力。",
    "trip": "喀拉拉独自修养之旅"
  }
}
,
    popularDestinations: {
      title: "探索更多印度目的地",
      subtitle: "发现不同邦的城市中可以做的事情",
      thingsToDo: "可做的事情",
      comingSoonTitle: "即将推出！",
      comingSoonDescription: "我们正在为 {{continent}} 添加精彩的目的地。敬请期待！",
      northIndia: "北印度目的地",
      southIndia: "南印度目的地",
      eastIndia: "东部和东北印度目的地",
      centralIndia: "中印度目的地",

      delhi: {
        name: "德里",
        country: "德里",
        history:
          "作为印度首都，德里拥有超过 2000 年的丰富历史。城市中遍布由莫卧儿统治者留下的清真寺、城堡和纪念碑。从红堡到印度门，德里将古老遗产与现代基础设施完美融合。"
      },

      jaipur: {
        name: "斋浦尔",
        country: "拉贾斯坦邦",
        history:
          "被称为“粉红之城”，是拉贾斯坦邦首府，也是印度黄金三角旅游线路的重要一站。建于 1727 年，以皇宫、安柏堡、风之宫殿和色彩缤纷的市集而闻名。"
      },

      agra: {
        name: "阿格拉",
        country: "北方邦",
        history:
          "阿格拉拥有世界七大奇迹之一的泰姬陵，并在 1556 至 1658 年间作为莫卧儿帝国的首都。还拥有阿格拉堡和命运之城法塔赫普尔西克里的宏伟建筑。"
      },

      varanasi: {
        name: "瓦拉纳西",
        country: "北方邦",
        history:
          "世界上最古老的连续有人居住的城市之一，是印度教的重要圣城。位于恒河河畔，以河坛、古老寺庙和精神文化闻名。"
      },

      amritsar: {
        name: "阿姆利则",
        country: "旁遮普邦",
        history:
          "由第四代锡克古鲁 Guru Ram Das 于 1577 年建立，是著名的金庙所在地，也是锡克教最神圣的圣地之一。城市还见证了 1919 年的贾利安瓦拉巴格惨案。"
      },

      manali: {
        name: "马纳利",
        country: "喜马偕尔邦",
        history:
          "位于海拔 2050 米的喜马拉雅山，是著名的山地度假胜地。以自然美景、探险活动和古老的希蒂姆巴女神庙闻名。"
      },

      leh: {
        name: "列城",
        country: "拉达克",
        history:
          "拉达克首府，位于海拔 3500 米，曾是古丝绸之路的重要驿站。以崎岖壮丽的高山景观、佛教寺院和著名的班公错闻名。"
      },

      rishikesh: {
        name: "瑞诗凯诗",
        country: "北阿坎德邦",
        history:
          "被誉为“世界瑜伽之都”，位于恒河河畔。因修行中心、瑜伽道场和著名的拉克什曼吊桥而闻名，1968 年披头士乐队的到访让这里闻名世界。"
      },

      udaipur: {
        name: "乌代普尔",
        country: "拉贾斯坦邦",
        history:
          "被称为“湖城”，由乌代·辛格二世于 1559 年建立。以城市宫殿、湖宫以及皮丘拉湖、法特赫萨加尔湖等美景著称。"
      },

      shimla: {
        name: "西姆拉",
        country: "喜马偕尔邦",
        history:
          "曾是英属印度的夏季首都。以维多利亚时期建筑、总督官邸、基督教堂和联合国教科文组织遗产卡尔卡–西姆拉铁路而闻名。"
      },

      mussoorie: {
        name: "穆苏里",
        country: "北阿坎德邦",
        history:
          "被称为“山丘皇后”，建于 1826 年，海拔 2005 米，拥有喜马拉雅山的壮丽景色。著名景点包括甘山、凯姆提瀑布和骆驼背路。"
      },

      srinagar: {
        name: "斯利那加",
        country: "查谟和克什米尔",
        history:
          "克什米尔夏季首府，以达尔湖、莫卧儿花园（如沙利马尔花园）和传统船屋闻名，被誉为“人间天堂”。"
      },

      jaisalmer: {
        name: "杰伊瑟尔梅尔",
        country: "拉贾斯坦邦",
        history:
          "被称为“金色之城”，建于 1156 年，以其黄色砂岩堡垒、精雕细刻的哈维利和塔尔沙漠闻名。"
      },

      nainital: {
        name: "奈尼塔尔",
        country: "北阿坎德邦",
        history:
          "风景秀丽的湖城，围绕梨形的奈尼湖而建，于 1841 年由英国人开发为避暑山庄。"
      },

      vrindavan: {
        name: "弗林达文",
        country: "北方邦",
        history:
          "印度教七大圣地之一，被认为是克里希那度过童年之地，拥有 5000 多座寺庙。"
      },

      haridwar: {
        name: "哈里瓦尔",
        country: "北阿坎德邦",
        history:
          "印度教七大圣城之一，恒河在此进入平原地区。每 12 年举办一次大壶节，著名的恒河晚祷吸引无数信徒。"
      },
        mumbai: {
        name: "孟买",
        country: "马哈拉施特拉邦",
        history:
          "印度的金融之都“梦想之城”，最初由七座岛屿组成。这里有印度门、海滨大道、宝莱坞电影工业以及殖民时代与现代建筑交织的独特风貌。"
      },

      bengaluru: {
        name: "班加罗尔",
        country: "卡纳塔克邦",
        history:
          "被称为“印度硅谷”和“花园之城”。建于 1537 年，有班加罗尔宫、蒂普苏丹夏宫以及著名的拉尔巴格植物园。"
      },

      goa: {
        name: "果阿",
        country: "果阿邦",
        history:
          "直到 1961 年仍为葡萄牙殖民地。以洁净海滩、夜生活、葡式建筑著称，如邦耶稣大教堂、圣凯瑟琳大教堂等。"
      },

      kerala: {
        name: "喀拉拉邦",
        country: "喀拉拉邦",
        history:
          "被誉为“上帝之国”，以回水、阿育吠陀疗法、郁郁葱葱的自然景观著称。独特文化包括卡塔卡利舞蹈、龙舟赛和以椰子与香料为主的传统美食。"
      },

      hyderabad: {
        name: "海得拉巴",
        country: "特伦甘纳邦",
        history:
          "由穆罕默德·库利·库特布沙于 1591 年建立，以历史、海得拉巴手抓饭和珍珠贸易闻名。地标包括查米纳塔尔、果尔康达堡和库特布沙王陵。"
      },

      chennai: {
        name: "金奈",
        country: "泰米尔纳德邦",
        history:
          "旧称马德拉斯，是南印度文化中心。著名景点有世界第二长城市海滩——马里纳海滩、卡帕利斯瓦拉神庙以及圣乔治堡。"
      },

      kochi: {
        name: "科钦",
        country: "喀拉拉邦",
        history:
          "被称为“阿拉伯海女王”，自古以来就是重要的香料贸易中心。著名景点包括科钦堡、渔民使用的中国渔网、马丹切里宫和印度最古老的欧洲教堂。"
      },

      mysuru: {
        name: "迈索尔",
        country: "卡纳塔克邦",
        history:
          "卡纳塔克邦文化之都，曾是瓦迪亚尔王朝的首都。达舍拉节期间点亮 100,000 多盏灯的迈索尔宫令人叹为观止。"
      },

      madurai: {
        name: "马杜赖",
        country: "泰米尔纳德邦",
        history:
          "印度最古老的城市之一，可追溯至公元前 3 世纪。以拥有数千彩色雕像的米娜克希安曼神庙著称。"
      },

      alleppey: {
        name: "阿勒皮",
        country: "喀拉拉邦",
        history:
          "被称为“东方威尼斯”，以回水、泻湖和传统船屋游船闻名。著名活动包括奈鲁杯赛舟节。"
      },

      ooty: {
        name: "乌提",
        country: "泰米尔纳德邦",
        history:
          "“山地之王”，由英国人建立为夏季避暑地。拥有殖民建筑、联合国遗产尼尔吉里山铁路和美丽的茶园。"
      },

      coorg: {
        name: "库格",
        country: "卡纳塔克邦",
        history:
          "被称为“印度的苏格兰”，以咖啡种植园、雾气缭绕的山丘和独特的科达瓦文化而闻名。著名景点包括艾比瀑布和国王座。"
      },

      hampi: {
        name: "亨比",
        country: "卡纳塔克邦",
        history:
          "联合国世界遗产，曾是毗奢耶那伽罗帝国（1336–1565）辉煌首都。遗迹遍布 4100 公顷，展示德拉威风格寺庙与宫殿。"
      },

      pondicherry: {
        name: "朋迪榭里",
        country: "朋迪榭里",
        history:
          "直到 1954 年仍为法国殖民地，因此保留了浓厚的法式建筑、街道和美食。景点包括法式城区、奥罗宾多静修院和奥罗维尔国际社区。"
      },
        visakhapatnam: {
        name: "维沙卡帕特南（维扎格）",
        country: "安得拉邦",
        history:
          "被称为“命运之城”和“东海岸明珠”。拥有古老寺庙、博拉洞穴（拥有百万年历史的石钟乳）、INS 库鲁苏拉潜艇博物馆等多样景点。"
      },

      tirupati: {
        name: "蒂鲁帕蒂",
        country: "安得拉邦",
        history:
          "世界上访问量最高的印度教圣地之一，是著名的蒂鲁马拉文卡特斯瓦拉神庙所在地。"
      },

      kolkata: {
        name: "加尔各答",
        country: "西孟加拉邦",
        history:
          "被称为“欢乐之城”，曾是英属印度的首都。以维多利亚纪念堂、豪拉大桥以及深厚的文学与艺术传统著称。"
      },

      gangtok: {
        name: "甘托克",
        country: "锡金邦",
        history:
          "海拔 1650 米，是锡金邦首府，可欣赏世界第三高峰——干城章嘉的壮丽景色。拥有鲁姆泰克寺、恩齐寺等著名的藏传佛寺。"
      },

      shillong: {
        name: "西隆",
        country: "梅加拉亚邦",
        history:
          "被称为“东方的苏格兰”，因松林山丘、瀑布（如大象瀑布）、湖泊和充满活力的摇滚音乐文化而闻名。"
      },

      darjeeling: {
        name: "大吉岭",
        country: "西孟加拉邦",
        history:
          "“山中女王”，因其世界著名的大吉岭红茶和联合国遗产大吉岭喜马拉雅铁路（玩具火车）而闻名。"
      },
        puri: {
        name: "普里",
        country: "奥迪沙邦",
        history:
          "印度四大圣地（四大达摩）之一，是 12 世纪贾甘纳特神庙的所在地。每年的战车节吸引数百万信徒。"
      },

      guwahati: {
        name: "古瓦哈提",
        country: "阿萨姆邦",
        history:
          "东北印度的门户城市。尼拉查尔山上的卡玛卡亚女神庙是印度重要的性力派圣地。"
      },

      kohima: {
        name: "科希马",
        country: "那加兰邦",
        history:
          "海拔 1444 米，是著名的二战“科希马战役”所在地。科希马战墓和角鹿节是主要景点。"
      },

      itanagar: {
        name: "伊塔那噶",
        country: "阿鲁纳恰尔邦",
        history:
          "阿鲁纳恰尔邦首府，名称意为“砖砌堡垒”，因 14–15 世纪的伊塔堡遗迹而得名。"
      },

      bhubaneswar: {
        name: "布巴内斯瓦尔",
        country: "奥迪沙邦",
        history:
          "被称为“寺庙之城”，拥有 500 多座建于 6 至 13 世纪的卡林加建筑寺庙，如林伽罗阇寺、穆克特什瓦尔寺等。"
      },

      portblair: {
        name: "布莱尔港",
        country: "安达曼-尼科巴群岛",
        history:
          "安达曼群岛的门户，拥有英国殖民时期关押政治犯的细胞监狱，如今为国家纪念馆。"
      },

      pelling: {
        name: "佩林",
        country: "锡金邦",
        history:
          "海拔 2150 米的宁静小镇，可欣赏干城章嘉的绝美风光。著名景点有白玛央采寺和古老的拉本登塞王国遗址。"
      },

      tawang: {
        name: "达旺",
        country: "阿鲁纳恰尔邦",
        history:
          "海拔 3048 米，是印度最大的佛教寺院——达旺寺（1680 年建）的所在地，也是第六世达赖喇嘛出生地。"
      },

      cherrapunji: {
        name: "乞拉朋齐（索拉）",
        country: "梅加拉亚邦",
        history:
          "曾经的“世界雨量最高地”，以巨大瀑布和卡西族的“树根桥”闻名。"
      },
        imphal: {
        name: "因帕尔",
        country: "曼尼普尔邦",
        history:
          "在二战中具有重要战略意义。著名景点包括康加拉堡、拥有浮岛的洛塔克湖，以及凯布尔拉姆贾奥国家公园。"
      },

      aizawl: {
        name: "艾藻尔",
        country: "米佐拉姆邦",
        history:
          "海拔 1132 米的山城，以米佐族文化、手织布和山地风景闻名。"
      },

      agartala: {
        name: "阿加尔塔拉",
        country: "特里普拉邦",
        history:
          "拥有宏伟的乌贾扬塔宫、尼尔玛哈尔水上宫殿和古老的特里普拉·苏达里女神庙。"
      },

      khajuraho: {
        name: "卡久拉霍",
        country: "中央邦",
        history:
          "联合国世界遗产，以公元 950–1050 年建造的印度教与耆那教寺庙著称。寺庙上精美雕刻描绘生活与情爱场景。"
      },

      bhopal: {
        name: "博帕尔",
        country: "中央邦",
        history:
          "被称为“湖城”，拥有泰姬清真寺（亚洲最大清真寺之一）以及附近的桑奇大塔（联合国遗产）。"
      },

      gwalior: {
        name: "瓜廖尔",
        country: "中央邦",
        history:
          "以其巨大山丘堡垒著称，被誉为“堡垒之珠”。这里也是印度斯坦古典音乐的重要中心。"
      },

      indore: {
        name: "印多尔",
        country: "中央邦",
        history:
          "中央邦商业之都，也是印度最干净的城市。著名景点包括拉吉瓦达宫和拉尔巴格宫。"
      },

      orchha: {
        name: "奥尔恰",
        country: "中央邦",
        history:
          "建于 1531 年，是隐秘的皇家古城，以贾汗吉尔宫、拉杰宫和拉姆拉贾神庙闻名。"
      },

      ujjain: {
        name: "乌贾因",
        country: "中央邦",
        history:
          "印度七大圣城之一，每 12 年举办大壶节。著名的摩诃卡利湿婆庙为十二大灵性火焰之一。"
      },

      ranchi: {
        name: "兰契",
        country: "贾坎德邦",
        history:
          "被称为“瀑布之城”，拥有亨德鲁瀑布、乔纳瀑布等。也是板球传奇 MS·多尼的故乡。"
      },

      daman: {
        name: "达曼",
        country: "达曼和第乌",
        history:
          "直到 1961 年仍为葡萄牙殖民地，保有葡式建筑、堡垒和海滩。"
      },

      silvassa: {
        name: "锡尔瓦萨",
        country: "达德拉-纳加尔哈维利",
        history:
          "静谧小城，以瓦尔利艺术、部落文化、湖泊和公园而闻名。"
      },

      nagpur: {
        name: "那格浦尔",
        country: "马哈拉施特拉邦",
        history:
          "“橘子之城”，印度地理中心。著名圣地迪克沙布米位于此处。"
      },

      raipur: {
        name: "赖布尔",
        country: "恰蒂斯加尔邦",
        history:
          "历史悠久的城市，是前往古寺庙与佛教遗址的重要入口。"
      },

      jabalpur: {
        name: "贾巴尔普尔",
        country: "中央邦",
        history:
          "以贝达加特大理石峡谷和杜安达尔瀑布著称，是自然与文化并存的城市。"
      },

      pachmarhi: {
        name: "帕奇马希",
        country: "中央邦",
        history:
          "中央邦唯一的避暑山地，有殖民建筑、史前岩画和森林瀑布。"
      },

      amarkantak: {
        name: "阿玛坎塔克",
        country: "中央邦",
        history:
          "神圣的朝圣地，是纳尔马达河与松河的源头。"
      },

      chitrakoot: {
        name: "奇特拉库特",
        country: "中央邦 / 北方邦",
        history:
          "根据《罗摩衍那》，罗摩、悉多与拉克什曼在此度过 14 年流放中的 11 年。"
      },
        bhimbetka: {
        name: "比姆贝特卡",
        country: "中央邦",
        history:
          "联合国世界遗产，比姆贝特卡岩洞群包含 500 多个具有 3 万年历史的岩画，描绘了狩猎、舞蹈与日常生活。"
      }
    },
    destinationOffers: {
      1: {
        title: "酒店",
        description: "野生动物/森林区域及相关活动：• 佩里亚尔野生动物保护区（佩里亚尔虎保护区）• 喀拉拉森林区域 • 徒步区域 • 山地景区 • 大象互动/观赏（包括大象野外观赏、大象骑行、大象游行、节庆中的象队仪式等）。"
      },

      2: {
        title: "阿勒皮豪华游船日夜巡航",
        description: "阿勒皮豪华船屋酒店，1〜22间卧室的船屋。豪华、尊贵、经济型选择，穆哈马码头、尼赫鲁赛船比赛、阿拉普扎出发点、阿勒皮终点、坎南卡拉航线等。"
      },

      3: {
        title: "阿勒皮日夜船屋（一卧室）",
        description: "阿勒皮回水家居民宿、阿拉普扎村、帕拉图鲁提公寓、阿勒皮城别墅、丛林树屋、岛屿度假村、湖畔/海滨住宿。提供1〜22间卧室的高级船屋住宿。"
      },

      4: {
        title: "阿拉普扎一卧室上层甲板私人日间游船",
        description: "阿勒皮船屋酒店，1〜22卧室选择，豪华、经济型船只，穆哈马码头、尼赫鲁赛、坎南卡拉航道，适合一日游巡航。"
      },

      5: {
        title: "喀拉拉蜜月船屋",
        description: "浪漫布置的私人蜜月船屋，带空调卧室、私人浴室、景观甲板。含烛光晚餐、鲜花布置等特别安排，适合情侣享受喀拉拉回水的宁静之旅。"
      },

      6: {
        title: "阿勒皮上层甲板私人船屋（一卧室·日夜住宿）",
        description: "阿勒皮回水民宿、阿拉普扎村、帕拉图鲁提公寓、阿勒皮别墅、树屋、湖畔/海滨住宿。提供1〜22卧室豪华船屋体验。"
      },

      7: {
        title: "阿勒皮上层甲板私人船屋（一卧室·日夜住宿）",
        description: "阿勒皮、库玛拉孔、科兰、阿什塔穆迪湖、科瓦兰、瓦卡拉、切赖海滩、马拉里海滩、卡伊纳卡里村、普纳马达、阿里亚德等热门回水区域。"
      },

      8: {
        title: "阿勒皮一日游上层甲板船屋",
        description: "卡伊纳卡里、普纳马达、阿里亚德、帕拉图鲁提公寓区域、穆哈马码头等区域的一日回水巡航路线。"
      },

      9: {
        title: "阿勒皮1卧室B2B船屋价格",
        description: "提供豪华、尊贵、奢华三种级别。1卧室分为上层甲板型与普通型，上层甲板视野更佳。"
      },

      10: {
        title: "阿勒皮共享船屋（两人价格）",
        description: "经济实惠的共享船屋，适合情侣或朋友旅行。含一晚住宿、喀拉拉特色美食、宁静回水风景。"
      },

      11: {
        title: "阿勒皮至尊豪华船屋",
        description: "船屋等级包括：豪华、尊贵、奢华、超奢华。1〜22卧室可选，适合情侣、家庭、大型团体。提供日间/过夜巡航服务。"
      },

      12: {
        title: "喀拉拉经济旅游套餐",
        description: "慕那尔、德卡迪、佩里亚尔野生动物、瓦亚纳德、瓦加蒙、蓬穆迪、伊杜基、德维库拉姆、库提卡南、瓦塔瓦达、坎塔卢尔、山地和森林徒步区域。"
      },

      13: {
        title: "喀拉拉游船体验",
        description: "畅游喀拉拉迷人的回水区，经过稻田、乡村水道，提供传统木船、喀拉拉美食，是情侣、家庭、独行旅客的完美慢旅行体验。"
      },

      14: {
        title: "B2B 喀拉拉船屋旅行优惠价格",
        description: "1〜22卧室船屋，豪华、尊贵、经济型选择，穆哈马码头、尼赫鲁赛、坎南卡拉航道等热门路线。"
      },

      15: {
        title: "Petals 花卉店",
        description: "喀拉拉高端花卉植物商店，专营珍稀兰花。适合家居装修、礼品赠送和园艺爱好者。所有植物均精心培育。"
      },

      16: {
        title: "兰花出售 — 开花兰花植物",
        description: "热带兰花品种如蝴蝶兰、万代兰。色彩鲜艳、图案独特、花期持久。适合室内装饰和赠礼，最低仅 ₹399。"
      },

      17: {
        title: "氧化处理饰品",
        description: "喀拉拉氧化银/铜饰品，呈现古典暗色质感。传统与现代风格兼备，适合纱丽与西式服饰。包含项链、耳环、成套饰品等。"
      },

      18: {
        title: "喀拉拉手织品 — 卡萨武纱丽",
        description: "喀拉拉丝绸、卡萨武纱丽、卡萨武套装材料、喀拉拉手织衬衫。传统金边白纱丽象征喀拉拉文化。"
      },

      19: {
        title: "喀拉拉手工艺品",
        description: "木雕、黄铜工艺、椰壳制品、椰纤地垫、卡塔卡利面具、大象头饰（Nettipattam）、著名的阿兰穆拉金属镜等。"
      },

      20: {
        title: "喀拉拉薯片 — 香蕉脆片",
        description: "喀拉拉著名的 Nendran 香蕉脆片及菠萝蜜脆片等传统小吃。"
      },

      21: {
        title: "喀拉拉香料",
        description: "高品质香料：小豆蔻、黑胡椒、肉桂、丁香、肉豆蔻。直接来自西高止山脉的有机农场。"
      },

      22: {
        title: "干鱼",
        description: "阿什塔穆迪湖高品质淡水干虾，无盐卫生日晒。中大虾适合制作咖喱、酱汁和蘸酱。"
      },

      23: {
        title: "喀拉拉房地产",
        description: "黄金地段 4BHK 独立别墅（3200 平方英尺）。买卖/出租别墅、土地、住宅、公寓一站式服务。"
      },

      24: {
        title: "喀拉拉彩票 — 特等奖彩票",
        description: "喀拉拉官方彩票：Win Win、Sthree Sakthi、Fifty-Fifty、Karunya。头奖高达₹1千万（1 Crore）。"
      },

      25: {
        title: "喀拉拉家居装饰",
        description: "喀拉拉家居饰品、椰纤制品。环保、耐用、传统工艺品。"
      },

      26: {
        title: "喀拉拉交通服务",
        description: "古鲁瓦尤尔、阿蒂拉皮利瀑布、瓦扎查尔瀑布、阿尔通卡尔大教堂、科钦堡、尼勒斯瓦勒姆、腾马拉生态点、帕德玛纳巴斯瓦米神庙、乔坦尼卡拉、萨巴里马拉、古特拉兰瀑布、乌提、科代卡纳尔、果阿、班加罗尔、钦奈、马杜赖、拉梅斯瓦拉姆、科伊姆巴托、瓦尔帕莱等。"
      },

      27: {
        title: "喀拉拉椰纤制品",
        description: "环保可降解椰纤产品：地垫、绳索、刷子、包袋、家居装饰等。在国内外市场需求旺盛。"
      },

      28: {
        title: "喀拉拉在线美食订餐",
        description: "在喀拉拉可轻松在线订餐。从传统喀拉拉料理到国际美食，只需轻点即可。科钦、特里凡得琅、科泽科德等地区均可配送。"
      }
    },
    houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: '阿勒皮阿拉普扎喀拉拉邦的船屋酒店',
      houseboatsHotelsInMunnar: '慕那尔的船屋酒店',
      houseboatsHotelsInCochin: '科钦的船屋酒店',
      houseboatsHotelsInKumarakomLake: '库马拉孔湖的船屋酒店',
      houseboatsHotelsInKottayam: '戈德亚姆的船屋酒店',
      houseboatsHotelsInAlleppey: '阿勒皮的船屋酒店',
      houseboatsHotelsInChottanikara: '乔塔尼卡拉的船屋酒店',
      houseboatsHotelsInThiruvananthapuram: '特里凡得琅的船屋酒店',
      houseboatsHotelsInKovalamBeach: '科瓦兰海滩的船屋酒店',
      houseboatsHotelsInThekkady: '特卡迪的船屋酒店',
      houseboatsHotelsInWayanad: '瓦亚纳德的船屋酒店',
      houseboatsHotelsInAlappuzha: '阿拉普扎的船屋酒店',
      houseboatsHotelsInGuruvayur: '古鲁瓦尤尔的船屋酒店',
      houseboatsHotelsInVagamon: '瓦格蒙的船屋酒店',
      houseboatsHotelsInAthirapillyWaterFalls: '阿瑟拉皮利瀑布的船屋酒店',
      houseboatsHotelsInMarariBeach: '马拉里海滩的船屋酒店',
      houseboatsHotelsInPoovarBeach: '普瓦尔海滩的船屋酒店',
      houseboatsHotelsInVarkalaBeach: '瓦卡拉海滩的船屋酒店',
      houseboatsHotelsInAshtamudiLake: '阿什塔穆迪湖的船屋酒店',
      houseboatsHotelsInKanyakumariBeach: '甘尼亚库马里海滩的船屋酒店',
      houseboatsHotelsInAlleppeyBeach: '阿勒皮海滩的船屋酒店',
      houseboatsHotelsInAlappuzhaLake: '阿拉普扎湖的船屋酒店',
      houseboatsHotelsInIndia: '印度的船屋酒店',
      houseboatsHotelsInKerala: '喀拉拉邦的船屋酒店',
      houseBoatHotelsInAlleppey: '阿勒皮的船屋酒店',
      boatHouseHotelsInIndia: '印度的船屋酒店',
      boatHouseHotelsInKerala: '喀拉拉邦的船屋酒店',
      sharingHouseboatsHotelsInAlleppey: '阿勒皮的共享船屋酒店',
      sharingBoatHouseHotelsInKerala: '喀拉拉邦的共享船屋酒店',
      dayTripHouseboatsHotelsInAlleppey: '阿勒皮的一日游船屋酒店',
      dayCruiseHouseboatsHotelsInAlleppey: '阿勒皮的一日游船屋酒店',
      fiveStarHouseboatsHotelsInAlleppey: '阿勒皮的五星级船屋酒店',
      fourStarHouseboatsHotelsInAlleppey: '阿勒皮的四星级船屋酒店',
      threeStarHouseboatsHotelsInAlleppey: '阿勒皮的三星级船屋酒店',
      twoStarHouseboatsHotelsInAlleppey: '阿勒皮的二星级船屋酒店',
      budgetHouseboatsHotelsInAlleppey: '阿勒皮的经济型船屋酒店',
      standardBoatHouseHotelsInAlleppey: '阿勒皮的标准船屋酒店'
    }
    ,
    destinationFeed: {
      loadingMore: '正在加载更多优惠...',
      inquiryTitle: '有疑问吗？联系我们！',
      inquirySubtitle: '向我们发送您的查询，我们的团队将在 24 小时内回复您',
      yourName: '您的姓名 *',
      yourEmail: '您的电子邮件 *',
      phoneNumber: '电话号码',
      subject: '主题',
      yourMessage: '您的留言 *',
      sendInquiry: '发送查询',
      scrollToInquiryAria: '滚动到查询表单',
      "bookViaWhatsapp": "通过 WhatsApp 预订"
    },
    footer: {
      description: '您值得信赖的旅行伴侣，为您带来难忘的旅程。创造终生难忘的回忆。',
      destinations: {
        title: '目的地',
        keralaBudgetHouseboat: '喀拉拉邦经济型船屋',
        luxuryTopEndHouseboat: '豪华顶级船屋',
        b2bPriceKeralaHouseboats: 'B2B价格喀拉拉邦船屋',
        houseboatsInAlappuzha: '阿勒皮的船屋',
        budgetBoatHouseAllepey: '经济型船屋阿勒皮',
        budgetBoatHouseAlappuzha: '经济型船屋阿勒皮',
        budgetHouseboatAllepey: '经济型船屋阿勒皮',
        budgetHouseboatAlappuzha: '经济型船屋阿勒皮',
        budgetAlleppeyBoatHouse: '经济型阿勒皮船屋',
        spotBookingBoatHouse: '现场预订船屋',
        prepaidTaxiCochinAirport: '科钦机场预付计程车服务',
        budgetAlappuzhaHouseboats: '经济型阿勒皮船屋',
        budgetAlleppeyHouseboats: '经济型阿勒皮船屋',
        b2bAlleppeyHouseboats: 'B2B阿勒皮船屋',
        privateAlleppeyHouseboats: '私人阿勒皮船屋',
        houseboatsInIndia: '印度的船屋',
        sharedHouseboatsInAlleppey: '阿勒皮的共享船屋',
        sharingHouseboatsInAlleppey: '阿勒皮的共享船屋',
        sharingBoathouseInAlleppey: '阿勒皮的共享船屋',
        clubbingHouseboatsInAlleppey: '阿勒皮的俱乐部船屋',
        clubbingBoathouseInAlleppey: '阿勒皮的俱乐部船屋',
        luxuryHouseboatsInAlleppey: '阿勒皮的豪华船屋',
        premiumHouseboatsInAlleppey: '阿勒皮的高级船屋',
        deluxeHouseboatsInAlleppey: '阿勒皮的豪华船屋',
        standardHouseboatsInAlleppey: '阿勒皮的标准船屋',
        ultraLuxuryHouseboatsInAlleppey: '阿勒皮的超豪华船屋',
        ultraLuxurySharingHouseboatsInAlleppey: '阿勒皮的超豪华共享船屋',
        bestHouseboatsInAlleppey: '阿勒皮的最佳船屋',
        bestLuxuryHouseboatsInAlleppey: '阿勒皮的最佳豪华船屋',
        bestPremiumHouseboatsInAlleppey: '阿勒皮的最佳高级船屋',
        bestDeluxeHouseboatsInAlleppey: '阿勒皮的最佳豪华船屋',
        bestStandardHouseboatsInAlleppey: '阿勒皮的最佳标准船屋',
        bestAlappuzhaHouseboatPackages: '最佳阿勒皮船屋套餐',
        bestAlappuzhaBoatHousePackages: '最佳阿勒皮船屋套餐'
      },
      services: { title: '服务', flightBooking: '机票预订', hotelReservation: '酒店预订', tourPackages: '旅游套餐' },
      company: { title: '公司', aboutUs: '关于我们', contact: '联系我们' },
      support: { title: '支持', helpCenter: '帮助中心', terms: '服务条款', privacy: '隐私政策', refund: '退款政策', faq: '常见问题' },
      copyright: '© {{year}} Tourism Paradise. 版权所有。'
    }
  },
  ar: {
    translation: {
      destinationNotFound: {
        title: "لم يتم العثور على الوجهة",
        description: "عذراً، لم نتمكن من العثور على الوجهة التي تبحث عنها."
      },
      goBack: "العودة إلى الوجهات",
      thingsToDo: "أشياء يمكن القيام بها",
      food: "اطلب الطعام عبر الإنترنت",
      aboutDestination: "عن الوجهة",
      getInTouch: "تواصل معنا",
      chatOnWhatsApp: "الدردشة عبر واتساب",
      instantResponse: "استجابة فورية",
      sendEmail: "إرسال بريد إلكتروني",
      emailAddress: "info@tourismparadise.com",
      houseboatShort: "هاوس بوت في أليبي ليلاً ونهاراً مع غرفة نوم واحدة وسطح علوي خاص.",
      exploreNow: "استكشف الآن",
      planYourVisitTitle: "خطط لزيارتك",
      planYourVisitSubtitle: "املأ النموذج وسنعاود الاتصال بك خلال 24 ساعة",
      labelFullName: "الاسم الكامل *",
      placeholderFullName: "أدخل اسمك الكامل",
      labelEmail: "عنوان البريد الإلكتروني *",
      placeholderEmail: "your.email@example.com",
      labelPhone: "رقم الهاتف",
      placeholderPhone: "+91 98765 43210",
      labelMessage: "رسالتك *",
      placeholderMessage: "أخبرنا عن خطط سفرك وتفضيلاتك وأسئلتك...",
      sending: "جارٍ الإرسال...",
      sendInquiry: "إرسال استفسار",
      successMessage: "✓ تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.",
      whatsappMessage: "مرحباً! أنا مهتم بزيارة {{name}}، {{country}}. هل يمكنك تزويدي بمزيد من المعلومات؟",
      emailSubject: "استفسار حول {{destinationName}}",
      emailBodyTemplate: "مرحباً،\n\nأود معرفة المزيد عن {{destination}}.\n\nشكراً لك!",
      heroTitle: 'خطط لكل جزء من رحلتك',
      heroSubtitle: 'احجز الرحلات الجوية والفنادق ووسائل النقل والتجارب في مكان واحد. حل السفر الكامل لتخطيط رحلة سلس.',
      houseboats: 'قوارب منزلية',
      shikara: 'رحلات شيكارا',
      flights: 'الرحلات الجوية',
      hotels: 'الفنادق',
      trains: 'القطارات',
      buses: 'الحافلات',
      cars: 'تأجير السيارات',
      tours: 'الجولات',
      cruises: 'الرحلات البحرية',
      activities: 'الأنشطة',
      packages: 'عروض العطلات',
      weekend: 'عطلات نهاية الأسبوع',
      beaches: 'إقامات شاطئية',
      mountains: 'رحلات جبلية',
      adventure: 'مغامرة',
      citybreaks: 'رحلات قصيرة للمدن',
      photography: 'جولات تصوير',
      insurance: 'تأمين السفر',
      passes: 'تذاكر المدينة',
      budget: 'إقامات اقتصادية',
      bikes: 'تأجير دراجات',
      villas: 'فيلات ومنازل',
      todaysDeals: 'صفقات اليوم الساخنة',
      exploreDestinations: 'استكشف الوجهات',
      seaFishRestaurants: 'مطاعم الأسماك البحرية',
      backwaterVillageStay: 'إقامة في قرية المياه الراكدة',
      keralaChipsAndSpices: 'رقائق وتوابل كيرالا',
      keralaHandlooms: 'منسوجات كيرالا اليدوية',
      honeymoonBoatHouse: 'منزل عائم لقضاء شهر العسل',
      houseboats: 'قوارب منزلية',
      noHouseboatsFound: 'لم يتم العثور على قوارب منزلية تطابق بحثك.',

      budgetTravelDeals: 'عروض سفر اقتصادية لك',
      offerHotels: 'فنادق',
      offerHouseboatsDayNightCruise: 'قوارب منزلية في أليبي للرحلات النهارية والليلية',
      offerHouseboatsDayNight1Bedroom: 'قوارب منزلية بغرفة نوم واحدة في أليبي للنهار والليل',
      offerHouseboatsDayCruise1BedroomUpperDeck: 'قارب منزلي خاص بغرفة نوم واحدة وسطح علوي لرحلة نهارية في ألابوزا',
      offerKeralaHoneymoonHouseboat: 'قارب منزلي لشهر العسل في كيرالا',
      offerHouseboatDayNight1BedroomUpperDeck: 'قارب منزلي خاص بغرفة نوم واحدة وسطح علوي للنهار والليل في أليبي',
      offerHouseboatsAlleppeyDayTripUpperDeck: 'رحلة نهارية في قارب منزلي بسطح علوي في أليبي',
      offerHouseboatsB2BPrice1Bedroom: 'سعر B2B للقوارب المنزلية بغرفة نوم واحدة في أليبي',
      offerSharingHouseboats2People: 'سعر القوارب المنزلية المشتركة لشخصين في أليبي',
      offerUltraPremiumHouseboats: 'قوارب منزلية فائقة الفخامة في أليبي',
      offerKeralaTourBudgetPackages: 'باقات سياحية اقتصادية في كيرالا',
      offerKeralaBoating: 'ركوب القوارب في كيرالا',
      offerB2BTravelDealsKeralaHouseboat: 'عروض سفر B2B لباقات القوارب المنزلية في كيرالا',
      offerPetalsFlowers: 'زهور البتلات',
      offerOrchidForSale: 'أوركيد للبيع - نباتات الأوركيد المزهرة',
      offerOxidisedOrnaments: 'الحلي المؤكسدة',
      offerKeralaHandloomsSarees: 'منسوجات كيرالا اليدوية - ساري كاسافو من كيرالا',
      offerKeralaHandicrafts: 'الحرف اليدوية في كيرالا',
      offerKeralaChips: 'رقائق كيرالا - رقائق الموز من كيرالا',
      offerKeralaSpices: 'توابل كيرالا',
      offerDriedFish: 'السمك المجفف',
      offerKeralaRealEstate: 'العقارات في كيرالا',
      offerKeralaLottery: 'تذاكر يانصيب كيرالا - تذاكر يانصيب كيرالا المصدات',
      offerKeralaHomeDecor: 'ديكور المنزل في كيرالا',
      offerTransportationInKerala: 'النقل في كيرالا',
      offerKeralaCoirProducts: 'منتجات ألياف جوز الهند في كيرالا',
      whyChooseTitle: 'لماذا تختار جنة السياحة',
      whyChooseSubtitle: 'نجعل تخطيط السفر سهلاً من خلال خدماتنا الشاملة وإرشادات الخبراء',
      showLess: 'عرض أقل',
      showMore: 'عرض المزيد'
    },featureList: {
      pilgrimPackages: 'أفضل باقات الحج والعمرة',
      pilgrimDescription: 'جولات حج وعمرة منسقة بعناية إلى وجهات مقدسة لرحلة روحية هادئة.',
      industrialTitle: 'خدمات الاستشارات الصناعية ومورد العمالة',
      industrialShortDesc: 'من إعداد تقارير المشاريع والتوجيه المالي إلى توريد العمالة الماهرة مثل المهندسين والفنيين ومقاولي البناء، نحن نغطي جميع احتياجاتك الصناعية والتجارية.',
      industrialFullDesc: 'إعداد تقارير المشاريع، التوجيه المالي، الإشراف على البناء، إعداد الخطط والتقديرات، آلات الصناعة والفنادق، عمال البناء والمقاولون، الكهرباء، السباكة، تكييف الهواء، البناء، الأجهزة المنزلية، الثلاجة، الغسالة، مكيف الهواء، السيارات، الكمبيوتر، الهاتف المحمول، مشغل المصعد، ديكور المنزل، المجوهرات والحلي، صانع القهوة والوجبات الخفيفة، بناء، نجار، لحام، تركيب الآلات، دهان، تنظيف، الفنادق، سائق، تصنيع الألمنيوم، تصنيع الفولاذ، خدم المنازل، أعمال البستنة، مشغلي المركبات والآلات الثقيلة، تصميم واستضافة المواقع الإلكترونية، تركيب أنظمة الطاقة الشمسية خدمات منزلية، فنيي المختبرات، المهندسين والأطباء، المعلمين، الغسيل، التدبير المنزلي إلخ.',
      educationTitle: 'خدمات الاستشارات التعليمية',
      educationDescription: 'الهندسة، الكلية الطبية، الزراعة، الذكاء الاصطناعي للحاسوب، ليسانس الحقوق (LLB)، ماجستير إدارة الأعمال (MBA)، بكالوريوس إدارة الأعمال (BBA)، ماجستير في تطبيقات الحاسوب (MCA)، فنيو المختبرات، العلاج الطبيعي، طب الأسنان، الأيورفيدا إلخ.',
      legalTitle: 'محامون ومستشارون قانونيون',
      legalDescription: 'الوصول إلى المشورة والخدمات القانونية المهنية من محامين ومستشارين قانونيين ذوي خبرة.',
    },
    testimonials:// public/locales/ar/testimonials.json
{
  "sectionTitle": "ماذا يقول مسافرونا",
  "sectionSubtitle": "تجارب حقيقية لآلاف العملاء الراضين",
  "quoteOpen": "\"",
  "indicatorAria": "عرض التقييم {{index}}",

  "person1": {
    "name": "سارة جونسون",
    "location": "نيويورك، الولايات المتحدة",
    "text": "تجربة مذهلة للغاية! فريق Tourism Paradise نظم شهر عسلنا بشكل مثالي. تم الاهتمام بكل تفصيل، وقضينا أكثر الرحلات رومانسية في مجاري المياه الخلفية في كيرالا.",
    "trip": "شهر عسل في مجاري كيرالا"
  },

  "person2": {
    "name": "مايكل تشن",
    "location": "تورونتو، كندا",
    "text": "خدمة مهنية واهتمام رائع بالتفاصيل. كانت رحلتنا العائلية إلى كيرالا خالية من العيوب بفضل تخطيطهم الخبير ومعرفتهم المحلية بالمنطقة.",
    "trip": "مغامرة عائلية في كيرالا"
  },

  "person3": {
    "name": "إميلي رودريغيز",
    "location": "برشلونة، إسبانيا",
    "text": "أسافر كثيرًا للعمل، لكن رحلة الترفيه هذه التي نظمها Tourism Paradise كانت استثنائية. جعل المخطط المخصص والدعم لمنتجعي الأيورفيدا في كيرالا كل شيء خالٍ من التوتر.",
    "trip": "منتجع فردي في كيرالا"
  }
}
,
    popularDestinations: {
      title: "استكشاف المزيد من الوجهات في الهند",
      subtitle: "اكتشف أشياء يمكنك القيام بها في مدن من ولايات مختلفة",
      thingsToDo: "أشياء يمكن القيام بها",
      comingSoonTitle: "قريباً!",
      comingSoonDescription: "نحن نضيف وجهات مذهلة في {{continent}}. تحقق مرة أخرى قريباً!",
      northIndia: "وجهات شمال الهند",
      southIndia: "وجهات جنوب الهند",
      eastIndia: "وجهات شرق وشمال شرق الهند",
      centralIndia: "وجهات وسط الهند",

      delhi: {
        name: "دلهي",
        country: "دلهي",
        history:
          "عاصمة الهند، دلهي، مدينة ذات تاريخ غني يمتد لأكثر من 2000 عام. تمتلئ المدينة بالمساجد والحصون والآثار التي تركها حكام المغول. من القلعة الحمراء إلى بوابة الهند، تدمج دلهي التراث القديم مع البنية التحتية الحديثة."
      },

      jaipur: {
        name: "جايبور",
        country: "راجستان",
        history:
          "المعروفة باسم المدينة الوردية، جايبور هي عاصمة راجستان وجزء من المثلث الذهبي الهندي. تأسست عام 1727 وتشتهر بالقصور الملكية والحصون مثل حصن أمبر وقصر الرياح."
      },

      agra: {
        name: "أغرا",
        country: "أوتار براديش",
        history:
          "موطن تاج محل، إحدى عجائب الدنيا السبع، كانت أغرا عاصمة الإمبراطورية المغولية بين 1556 و1658. تضم حصن أغرا ومدينة فاتحبور سيكري التاريخية."
      },

      varanasi: {
        name: "فارناسي",
        country: "أوتار براديش",
        history:
          "إحدى أقدم المدن المأهولة في العالم، وتعد مركزاً روحياً رئيسياً للهندوس. تقع على ضفاف نهر الغانج، وتشتهر بالغاطات والمعابد القديمة."
      },

      amritsar: {
        name: "أمريتسار",
        country: "البنجاب",
        history:
          "أسسها جورو رام داس عام 1577، وتضم المعبد الذهبي، أقدس موقع لدى السيخ. شهدت المدينة مذبحة جاليانوالا باغ عام 1919."
      },

      manali: {
        name: "مانالي",
        country: "هيماشال براديش",
        history:
          "مدينة جبلية شهيرة تقع في جبال الهيمالايا على ارتفاع 2050 متر. تشتهر بجمالها الطبيعي والرياضات الجبلية ومعبد هيديمبا القديم."
      },

      leh: {
        name: "ليه",
        country: "لداخ",
        history:
          "عاصمة لداخ، تقع على ارتفاع 3500 متر وكانت محطة هامة على طريق الحرير القديم. تشتهر بمناظرها الجبلية القاسية وبحيرة بانغونغ تسو."
      },

      rishikesh: {
        name: "ريشيكيش",
        country: "أوتاراخند",
        history:
          "المعروفة باسم عاصمة اليوغا في العالم، تقع على ضفاف نهر الغانج. أصبحت مشهورة عالمياً بعد زيارة فريق البيتلز عام 1968."
      },

      udaipur: {
        name: "أودايبور",
        country: "راجستان",
        history:
          "تُعرف باسم مدينة البحيرات، تأسست عام 1559. تشتهر بقصر المدينة وقصر البحيرة والبحيرات الساحرة مثل بحيرة بيشولا."
      },

      shimla: {
        name: "شيملا",
        country: "هيماشال براديش",
        history:
          "كانت العاصمة الصيفية للهند البريطانية. تتميز بالعمارة الفيكتورية وسكة حديد كلكا–شيملا المصنفة ضمن التراث العالمي."
      },

      mussoorie: {
        name: "مسوري",
        country: "أوتاراخند",
        history:
          "المعروفة باسم “ملكة التلال”، تأسست عام 1826. تقع على ارتفاع 2005 متر وتوفر مناظر خلابة لوادي دون والجبال."
      },

      srinagar: {
        name: "سريناغار",
        country: "جامو وكشمير",
        history:
          "عاصمة الصيف، معروفة ببحيرة دال والحدائق المغولية وبيوت القوارب التقليدية. تسمى «الجنة على الأرض»."
      },

      jaisalmer: {
        name: "جايسالمير",
        country: "راجستان",
        history:
          "تسمى المدينة الذهبية، وتشتهر بقلعتها المصنوعة من الحجر الرملي الأصفر ومنازل الهافيلي القديمة."
      },

      nainital: {
        name: "نانيتال",
        country: "أوتاراخند",
        history:
          "مدينة جميلة حول بحيرة نيني، تأسست عام 1841. تشتهر بالقوارب والمعابد والإطلالات الجبلية."
      },

      vrindavan: {
        name: "فريندافان",
        country: "أوتار براديش",
        history:
          "مدينة مقدسة جداً للهندوس حيث يُعتقد أن اللورد كريشنا قضى طفولته. تضم آلاف المعابد الشهيرة."
      },

      haridwar: {
        name: "هاريدوار",
        country: "أوتاراخند",
        history:
          "واحدة من أقدس المدن الهندوسية، حيث يدخل نهر الغانج إلى السهول الهندية. يقام فيها مهرجان كومبه ميلا كل 12 سنة."
      },
        mumbai: {
        name: "مومباي",
        country: "ماهاراشترا",
        history:
          "مومباي، العاصمة المالية للهند و“مدينة الأحلام”، كانت في الأصل سبع جزر. وهي موطن بوليوود، وبوابة الهند، ومارين درايف، وتمزج بين العمارة الاستعمارية والأبراج الحديثة."
      },

      bengaluru: {
        name: "بنغالورو",
        country: "كارناتاكا",
        history:
          "تُعرف باسم “وادي السيليكون الهندي” و“مدينة الحدائق”، تأسست عام 1537. تشمل معالمها قصر بنغالور، قصر تيبو سلطان الصيفي، وحدائق لال باغ."
      },

      goa: {
        name: "غوا",
        country: "غوا",
        history:
          "كانت غوا مستعمرة برتغالية حتى عام 1961. تشتهر بشواطئها الخلابة، والحياة الليلية، والعمارة البرتغالية مثل كنيسة بوم يسوع وكاتدرائية سي."
      },

      kerala: {
        name: "كيرالا",
        country: "كيرالا",
        history:
          "تُعرف بـ “ولاية الله الخاصة”، وتشتهر بالباكواتر، والعلاجات الأيورفيدية، والطبيعة الخضراء. ثقافتها تشمل رقص الكاثاكالي وسباقات قوارب الثعابين."
      },

      hyderabad: {
        name: "حيدر آباد",
        country: "تيلانجانا",
        history:
          "تأسست عام 1591، وتشتهر بتاريخها وطبق البرياني وتجارة اللؤلؤ. أبرز معالمها شارمينار، قلعة غولكوندا، وقبور قطب شاهي."
      },

      chennai: {
        name: "تشيناي",
        country: "تاميل نادو",
        history:
          "كانت تُعرف باسم مدراس، وهي مركز ثقافة جنوب الهند. تضم شاطئ مارينا، معبد كابيليشوارار، وحصن سانت جورج."
      },

      kochi: {
        name: "كوتشي",
        country: "كيرالا",
        history:
          "“ملكة بحر العرب”، كانت مركزاً رئيسياً لتجارة التوابل. تضم شباك الصيد الصينية، قصر ماتانشيري، وبلدة فورت كوتشي ذات الطابع البرتغالي والهولندي."
      },

      mysuru: {
        name: "ميسورو",
        country: "كارناتاكا",
        history:
          "العاصمة الثقافية لكارناتاكا، وكانت مقر ملوك واديار. قصر ميسور المضاء خلال مهرجان دشهره مشهد مهيب."
      },

      madurai: {
        name: "مادوراي",
        country: "تاميل نادو",
        history:
          "إحدى أقدم مدن الهند، وتشتهر بمعبد ميناكشي آممان الذي يتميز بأبراج الغوبورام المزخرفة."
      },

      alleppey: {
        name: "ألابوزا (أليبي)",
        country: "كيرالا",
        history:
          "تعرف بـ “بندقية الشرق”، وتشتهر بالباكواتر والقوارب المنزلية وسباق قوارب نهرو."
      },

      ooty: {
        name: "أوتي",
        country: "تاميل نادو",
        history:
          "“ملكة الهضاب”، بناها البريطانيون كمنتجع صيفي. تشتهر بسكة حديد نيلجيري (اليونسكو) وحدائقها الخضراء."
      },

      coorg: {
        name: "كورغ",
        country: "كارناتاكا",
        history:
          "“اسكتلندا الهند”، تشتهر بمزارع البن، والجبال الضبابية، وثقافة قبيلة الكودافا."
      },

      hampi: {
        name: "هامبي",
        country: "كارناتاكا",
        history:
          "موقع تراث عالمي لليونسكو، وكانت عاصمة إمبراطورية فيجايناغار. تضم المعابد الرائعة، والأسواق القديمة، والقصور الملكية."
      },

      pondicherry: {
        name: "بونديشيري",
        country: "بونديشيري",
        history:
          "كانت مستعمرة فرنسية حتى عام 1954، وتتميز بشوارعها الفرنسية، ومبانيها الاستعمارية، وأوروفيل، وأشرم سري أوروبيندو."
      },
        visakhapatnam: {
        name: "فيشاخاباتنام (فيزاك)",
        country: "آندرا براديش",
        history:
          "مدينة ساحلية هامة تُعرف بـ “مدينة القدر”، تضم معابد قديمة، كهوف بورا، ومتحف الغواصة INS كورسورا."
      },

      tirupati: {
        name: "تيروباتي",
        country: "آندرا براديش",
        history:
          "موطن معبد اللورد فنكاتيشوارا، أحد أكثر أماكن الحج زيارة في العالم."
      },

      kolkata: {
        name: "كولكاتا",
        country: "البنغال الغربية",
        history:
          "“مدينة الفرح”، وعاصمة الهند البريطانية السابقة. تشتهر بفيكتوريا ميموريال وجسر هاورا."
      },

      gangtok: {
        name: "غانتوك",
        country: "سيكيم",
        history:
          "تقع على ارتفاع 1650 متر، وتوفر مناظر مذهلة لجبل كانغشينجونغا. تضم أديرة بوذية شهيرة مثل رومتيك."
      },

      shillong: {
        name: "شيلونغ",
        country: "ميغالايا",
        history:
          "“اسكتلندا الشرق”، معروفة بتلال الصنوبر، وشلالات إليفانت، والمشهد الموسيقي النابض بالحياة."
      },

      darjeeling: {
        name: "دارجيلنغ",
        country: "البنغال الغربية",
        history:
          "“ملكة التلال”، تشتهر بشاي دارجيلنغ والسكك الحديدية الجبلية (اليونسكو)."
      },
        puri: {
        name: "بوري",
        country: "أوديشا",
        history:
          "إحدى مواقع الحج الأربعة (شاردهام)، وموطن معبد جاغاناث الشهير من القرن الثاني عشر."
      },

      guwahati: {
        name: "جوهاتي",
        country: "آسام",
        history:
          "بوابة شمال شرق الهند، وتشمل معبد كاماخيا المقدس."
      },

      kohima: {
        name: "كوهيما",
        country: "ناغالاند",
        history:
          "مشهورة بمعركة كوهيما في الحرب العالمية الثانية، وتستضيف مهرجان هورنبل."
      },

      itanagar: {
        name: "إيتاناغار",
        country: "أروناجل براديش",
        history:
          "عاصمة الولاية، وتضم قلعة إييتا القديمة ومعابد بوذية."
      },

      bhubaneswar: {
        name: "بوبانيشوار",
        country: "أوديشا",
        history:
          "“مدينة المعابد”، تضم أكثر من 500 معبد من طراز كالينغا، أبرزها معبد لينغاراج."
      },

      portblair: {
        name: "بورت بلير",
        country: "جزر أندمان ونيكوبار",
        history:
          "البوابة إلى جزر أندمان، وتضم سجن سيلولار التاريخي."
      },

      pelling: {
        name: "بيلنغ",
        country: "سيكيم",
        history:
          "مدينة جميلة توفر مناظر رائعة لكانغشينجونغا."
      },

      tawang: {
        name: "تاوانغ",
        country: "أروناجل براديش",
        history:
          "موطن أكبر دير بوذي في الهند، تأسس عام 1680."
      },

      cherrapunji: {
        name: "شيرا بونجي",
        country: "ميغالايا",
        history:
          "من أكثر الأماكن مطراً في العالم، تشتهر بالجسور الطبيعية المصنوعة من جذور الأشجار."
      },
        bhimbetka: {
        name: "بيهيمبيتكا",
        country: "ماديا براديش",
        history:
          "موقع يونيسكو يضم أكثر من 500 كهف يحتوي على رسومات صخرية يعود بعضها إلى 30,000 سنة، توثق حياة الإنسان القديم."
      }
    },
    destinationOffers: {
    1: {
      title:" الفنادق",
      description: "مناطق الحياة البرية والغابات والأنشطة المتعلقة بها: • محمية بريار للحياة البرية (أو محمية بريار للنمور) • مناطق غابات كيرالا • مناطق trekking • المناطق الجبلية • التفاعل مع الفيلة/مشاهدتها (مثل رحلات السفاري على الفيلة، ركوب الفيلة، أو رؤيتها في البرية/المحميات. وفي المهرجانات تُشاهد في المواكب الاحتفالية أو ما يُعرف بـ جاجاميلا)."
    },

    2: {
      title:" البيوت العائمة في ألوبّي — رحلة نهارية وليلة",
      description: "فنادق البيوت العائمة في ألوبّي، 1–22 غرفة نوم، خيارات فاخرة ومميزة واقتصادية. نقطة انطلاق ألابوزا وصولاً إلى ألابّي، مرسى موهاما، سباق قوارب نهرو، منطقة كانانكارا."
    },

    3: {
      title:" البيوت العائمة في ألوبّي — غرفة واحدة (نهارًا وليلاً)",
      description: "إقامة منزلية في مياه ألوبّي الهادئة، قرية ألاپّوزا، شقق بالاثورثي، فيلات مدينة ألوبّي، بيوت الشجر، منتجعات الجزر، عقارات مطلة على البحيرة أو البحر. توفر 1–22 غرفة نوم."
    },

    4: {
      title: "الرحلة النهارية — بيت عائم بغرفة واحدة مع سطح علوي خاص",
      description: "بيوت عائمة 1–22 غرفة، فاخرة واقتصادية، مرسى موهاما، سباق نهرو، منطقة كانانكارا. مثالية للرحلات النهارية."
    },

    5: {
      title: "البيت العائم لشهر العسل في كيرالا",
      description: "كوخ خاص ورومانسي مع تجهيزات فاخرة: غرفة مكيّفة، حمام خاص، سطح ذو إطلالة جميلة. يتضمن وجبات على متن القارب، عشاء على ضوء الشموع، وتزيين بالورود."
    },

    6: {
      title: "بيت عائم — غرفة واحدة مع سطح علوي خاص (نهارًا وليلاً)",
      description: "إقامات في مياه ألوبّي، قرية ألاپّوزا، شقق بالاثورثي، فيلات المدينة، بيوت الأشجار، منتجعات الجزر، عقارات مطلة على البحيرة. توفر 1–22 غرفة."
    },

    7: {
      title: "البيوت العائمة في ألوبّي — غرفة واحدة مع سطح علوي خاص",
      description: "ألوبّي، كوماراكم، كولام، بحيرة أشتامودي، كوفالام، فاركالا، شاطئ تشيراي، شاطئ ماراري، قرية كايناكاري، بونامادا، قرية أرياد، ومناطق المياه الهادئة في كيرالا."
    },

    8: {
      title: "رحلة نهارية — بيت عائم بسطح علوي",
      description: "قرية كايناكاري، بونامادا، قرية أرياد، شقق بالاثورثي، مرسى موهاما. رحلة يومية عبر ممرات المياه الهادئة."
    },

    9: {
      title: "أسعار B2B للبيوت العائمة — غرفة واحدة",
      description: "متوفرة بتصنيفات: ديلوكس، بريميوم، فاخرة. نوعان: بسقف علوي وبدون. السقف العلوي يوفر رؤية أوسع للممرات المائية."
    },

    10: {
      title: "البيوت العائمة المشتركة — سعر لشخصين في ألوبّي",
      description: "رحلة اقتصادية مناسبة للأزواج أو الأصدقاء، تشمل إقامة ليلة واحدة، وجبات كيرالا الأصيلة، ومناظر هادئة للطبيعة."
    },

    11: {
      title: "البيوت الفاخرة جدًا في ألوبّي",
      description: "تصنيفات: ديلوكس، بريميوم، فاخرة، فاخرة جدًا. توفر 1–22 غرفة، مناسبة للعائلات والمجموعات الكبيرة. رحلات نهارية وليلية."
    },

    12: {
      title: "باقات كيرالا السياحية الاقتصادية",
      description: "مونار، تيكادي، بريار للحياة البرية، واياناد، فاجامون، بونمودي، إيدوكي، ديفيكولام، كوتيكانام، فاتافادا، كانثالور، المناطق الجبلية ومناطق trekking."
    },

    13: {
      title: "رحلات القوارب في كيرالا",
      description: "رحلة هادئة عبر ممرات كيرالا المائية الساحرة. مناظر حقول الأرز والقنوات الريفية، قوارب خشبية تقليدية، وجبات كيرالا الأصيلة."
    },

    14: {
      title: "عروض سفر B2B — باقات البيت العائم",
      description: "بيوت عائمة 1–22 غرفة، فاخرة واقتصادية، مرسى موهاما، سباق نهرو، منطقة كانانكارا."
    },

    15: {
      title: "بتالز للزهور",
      description: "متجر متخصص بالنباتات المزهرة الفاخرة وخصوصًا الأوركيد. مثالية للديكور، الهدايا، وهواة الحدائق. نباتات مزروعة بعناية."
    },

    16: {
      title: "أوركيد للبيع — نباتات أوركيد مزهرة",
      description: "أوركيد استوائية مثل فالاينوبسيس وفاندا. ألوان زاهية، نقوش جميلة، وزهور طويلة العمر. مثالية للديكور والهدايا. تبدأ من 399 روبية."
    },

    17: {
      title: "حُلي مؤكسدة",
      description: "مجوهرات كيرالا المؤكسدة ذات اللمسة العتيقة الداكنة. مصنوعة من الفضة أو النحاس. مناسبة للزي الهندي التقليدي والملابس الحديثة."
    },

    18: {
      title: "منسوجات كيرالا — ساري كاسافو",
      description: "حرير كيرالا، ساري كاسافو، أقمشة تشوريدار كاسافو، قمصان منسوجة يدويًا. الساري الأبيض ذو الحافة الذهبية رمز ثقافي لكيرالا."
    },

    19: {
      title: "الحرف اليدوية في كيرالا",
      description: "أعمال نحت خشبية، منتجات معدنية من الجرس، حصائر ليف جوز الهند، أوعية وألعاب من قشور جوز الهند، أقنعة كاثاكالي، زينة نيتّيبَتّام، مرايا أرنمولا المعدنية الشهيرة."
    },

    20: {
      title: "رقائق كيرالا — رقائق الموز",
      description: "رقائق الموز الشهيرة (نيندران)، ورقائق الكاثال (الجاك فروت)، وغيرها من الوجبات التقليدية."
    },

    21: {
      title: "توابل كيرالا",
      description: "توابل عالية الجودة: الهيل، الفلفل الأسود، القرفة، القرنفل، جوزة الطيب. تُجمع مباشرة من مزارع عضوية في جبال غات الغربية."
    },

    22: {
      title: "السمك المجفف",
      description: "روبيان ماء عذب عالي الجودة من بحيرة أشتامودي، مجفف تحت الشمس دون ملح. مناسب للماسالا، الصلصات، والشاتني."
    },

    23: {
      title: "عقارات كيرالا",
      description: "منزل مستقل 4 غرف نوم (3200 قدم²) في موقع مميز. خدمات بيع وشراء وتأجير الفيلات، الأراضي، المنازل، والشقق."
    },

    24: {
      title: "تذاكر يانصيب كيرالا — اليانصيب الضخم",
      description: "يانصيب ولاية كيرالا الرسمي: Win Win، Sthree Sakthi، Fifty-Fifty، Karunya. جوائز تصل إلى 1 كرور روبية."
    },

    25: {
      title: "ديكور المنزل في كيرالا",
      description: "منتجات ديكور منزلية من كيرالا، منتجات ليف جوز الهند. طبيعية، متينة، وحرفية تقليدية."
    },

    26: {
      title: "خدمات النقل في كيرالا",
      description: "غوروفايور، شلالات أثيرابيلي، شلالات فازاتشال، كنيسة أرثونكال، فورت كوتشي، نيلسوارام، منطقة تنمالا البيئية، معبد بادمانابهسوامي، تشوتانيكارا، ساباريمالا، كوترالام، أووتي، كودايكانال، غوا، بنغالور، تشيناي، مادوراي، رامسوارام، كويمباتور، فالباراي، مناطق كايناكاري وبونامادا وأرياد، شقق بالاثورثي، مرسى موهاما."
    },

    27: {
      title: "منتجات ليف جوز الهند في كيرالا",
      description: "منتجات ليف جوز الهند صديقة للبيئة وقابلة للتحلل: حصائر، حبال، فراشي، حقائب، ديكور منزلي. تحظى بشعبية في الأسواق المحلية والعالمية."
    },

    28: {
      title: "طلب الطعام عبر الإنترنت",
      description: "استمتع بطلب الطعام عبر الإنترنت في كيرالا — من المأكولات المحلية الأصيلة إلى العالمية. متاح في كوتشي، تريفاندروم، كوزيكود، وغيرها."
    }
  },
     houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: 'فنادق بيوت عائمة في أليبي ألابوزا كيرالا',
      houseboatsHotelsInMunnar: 'فنادق بيوت عائمة في مونار',
      houseboatsHotelsInCochin: 'فنادق بيوت عائمة في كوتشي',
      houseboatsHotelsInKumarakomLake: 'فنادق بيوت عائمة في بحيرة كوماراكوم',
      houseboatsHotelsInKottayam: 'فنادق بيوت عائمة في كوتايام',
      houseboatsHotelsInAlleppey: 'فنادق بيوت عائمة في أليبي',
      houseboatsHotelsInChottanikara: 'فنادق بيوت عائمة في تشوتانيكارا',
      houseboatsHotelsInThiruvananthapuram: 'فنادق بيوت عائمة في ثيروفانانثابورام',
      houseboatsHotelsInKovalamBeach: 'فنادق بيوت عائمة في شاطئ كوفالام',
      houseboatsHotelsInThekkady: 'فنادق بيوت عائمة في ثيكادي',
      houseboatsHotelsInWayanad: 'فنادق بيوت عائمة في واياناد',
      houseboatsHotelsInAlappuzha: 'فنادق بيوت عائمة في ألابوزا',
      houseboatsHotelsInGuruvayur: 'فنادق بيوت عائمة في غوروفايور',
      houseboatsHotelsInVagamon: 'فنادق بيوت عائمة في فاجامون',
      houseboatsHotelsInAthirapillyWaterFalls: 'فنادق بيوت عائمة في شلالات أثيرابالي',
      houseboatsHotelsInMarariBeach: 'فنادق بيوت عائمة في شاطئ ماراري',
      houseboatsHotelsInPoovarBeach: 'فنادق بيوت عائمة في شاطئ بوفار',
      houseboatsHotelsInVarkalaBeach: 'فنادق بيوت عائمة في شاطئ فاركالا',
      houseboatsHotelsInAshtamudiLake: 'فنادق بيوت عائمة في بحيرة أشتامودي',
      houseboatsHotelsInKanyakumariBeach: 'فنادق بيوت عائمة في شاطئ كانياكوماري',
      houseboatsHotelsInAlleppeyBeach: 'فنادق بيوت عائمة في شاطئ أليبي',
      houseboatsHotelsInAlappuzhaLake: 'فنادق بيوت عائمة في بحيرة ألابوزا',
      houseboatsHotelsInIndia: 'فنادق بيوت عائمة في الهند',
      houseboatsHotelsInKerala: 'فنادق بيوت عائمة في كيرالا',
      houseBoatHotelsInAlleppey: 'فنادق بيوت عائمة في أليبي',
      boatHouseHotelsInIndia: 'فنادق بيوت عائمة في الهند',
      boatHouseHotelsInKerala: 'فنادق بيوت عائمة في كيرالا',
      sharingHouseboatsHotelsInAlleppey: 'فنادق بيوت عائمة مشتركة في أليبي',
      sharingBoatHouseHotelsInKerala: 'فنادق بيوت عائمة مشتركة في كيرالا',
      dayTripHouseboatsHotelsInAlleppey: 'فنادق بيوت عائمة للرحلات اليومية في أليبي',
      dayCruiseHouseboatsHotelsInAlleppey: 'فنادق بيوت عائمة للرحلات البحرية اليومية في أليبي',
      fiveStarHouseboatsHotelsInAlleppey: 'فنادق بيوت عائمة 5 نجوم في أليبي',
      fourStarHouseboatsHotelsInAlleppey: 'فنادق بيوت عائمة 4 نجوم في أليبي',
      threeStarHouseboatsHotelsInAlleppey: 'فنادق بيوت عائمة 3 نجوم في أليبي',
      twoStarHouseboatsHotelsInAlleppey: 'فنادق بيوت عائمة 2 نجوم في أليبي',
      budgetHouseboatsHotelsInAlleppey: 'فنادق بيوت عائمة اقتصادية في أليبي',
      standardBoatHouseHotelsInAlleppey: 'فنادق بيوت عائمة قياسية في أليبي'
    }
    ,
    destinationFeed: {
      loadingMore: 'جارٍ تحميل المزيد من العروض...',
      inquiryTitle: 'هل لديك أسئلة؟ تواصل معنا!',
      inquirySubtitle: 'أرسل لنا استفسارك وسيقوم فريقنا بالرد عليك في غضون 24 ساعة',
      yourName: 'اسمك *',
      yourEmail: 'بريدك الإلكتروني *',
      phoneNumber: 'رقم الهاتف',
      subject: 'الموضوع',
      yourMessage: 'رسالتك *',
      sendInquiry: 'إرسال استفسار',
      scrollToInquiryAria: 'التمرير إلى نموذج الاستفسار',
      "bookViaWhatsapp": "احجز عبر واتساب"
    },
    footer: {
      description: 'رفيقك الموثوق به في السفر لرحلات لا تُنسى. خلق ذكريات تدوم مدى الحياة.',
      destinations: {
        title: 'الوجهات',
        keralaBudgetHouseboat: 'قارب منزلي اقتصادي في كيرالا',
        luxuryTopEndHouseboat: 'قارب منزلي فاخر من الدرجة الأولى',
        b2bPriceKeralaHouseboats: 'سعر B2B لقوارب كيرالا المنزلية',
        houseboatsInAlappuzha: 'قوارب منزلية في ألابوزا',
        budgetBoatHouseAllepey: 'قارب منزلي اقتصادي في أليبي',
        budgetBoatHouseAlappuzha: 'قارب منزلي اقتصادي في ألابوزا',
        budgetHouseboatAllepey: 'قارب منزلي اقتصادي في أليبي',
        budgetHouseboatAlappuzha: 'قارب منزلي اقتصادي في ألابوزا',
        budgetAlleppeyBoatHouse: 'قارب منزلي اقتصادي في أليبي',
        spotBookingBoatHouse: 'حجز فوري لقارب منزلي',
        prepaidTaxiCochinAirport: 'خدمة سيارات الأجرة المدفوعة مسبقًا في مطار كوتشي',
        budgetAlappuzhaHouseboats: 'قوارب منزلية اقتصادية في ألابوزا',
        budgetAlleppeyHouseboats: 'قوارب منزلية اقتصادية في أليبي',
        b2bAlleppeyHouseboats: 'قوارب منزلية B2B في أليبي',
        privateAlleppeyHouseboats: 'قوارب منزلية خاصة في أليبي',
        houseboatsInIndia: 'قوارب منزلية في الهند',
        sharedHouseboatsInAlleppey: 'قوارب منزلية مشتركة في أليبي',
        sharingHouseboatsInAlleppey: 'قوارب منزلية مشتركة في أليبي',
        sharingBoathouseInAlleppey: 'قارب منزلي مشترك في أليبي',
        clubbingHouseboatsInAlleppey: 'قوارب منزلية للحفلات في أليبي',
        clubbingBoathouseInAlleppey: 'قارب منزلي للحفلات في أليبي',
        luxuryHouseboatsInAlleppey: 'قوارب منزلية فاخرة في أليبي',
        premiumHouseboatsInAlleppey: 'قوارب منزلية ممتازة في أليبي',
        deluxeHouseboatsInAlleppey: 'قوارب منزلية فاخرة في أليبي',
        standardHouseboatsInAlleppey: 'قوارب منزلية قياسية في أليبي',
        ultraLuxuryHouseboatsInAlleppey: 'قوارب منزلية فائقة الفخامة في أليبي',
        ultraLuxurySharingHouseboatsInAlleppey: 'قوارب منزلية مشتركة فائقة الفخامة في أليبي',
        bestHouseboatsInAlleppey: 'أفضل القوارب المنزلية في أليبي',
        bestLuxuryHouseboatsInAlleppey: 'أفضل القوارب المنزلية الفاخرة في أليبي',
        bestPremiumHouseboatsInAlleppey: 'أفضل القوارب المنزلية الممتازة في أليبي',
        bestDeluxeHouseboatsInAlleppey: 'أفضل القوارب المنزلية الفاخرة في أليبي',
        bestStandardHouseboatsInAlleppey: 'أفضل القوارب المنزلية القياسية في أليبي',
        bestAlappuzhaHouseboatPackages: 'أفضل باقات القوارب المنزلية في ألابوزا',
        bestAlappuzhaBoatHousePackages: 'أفضل باقات القوارب المنزلية في ألابوزا'
      },
      services: { title: 'الخدمات', flightBooking: 'حجز طيران', hotelReservation: 'حجز فندقي', tourPackages: 'باقات سياحية' },
      company: { title: 'الشركة', aboutUs: 'معلومات عنا', contact: 'اتصل' },
      support: { title: 'الدعم', helpCenter: 'مركز المساعدة', terms: 'شروط الخدمة', privacy: 'سياسة الخصوصية', refund: 'سياسة الاسترداد', faq: 'الأسئلة الشائعة' },
      copyright: '© {{year}} جنة السياحة. كل الحقوق محفوظة.'
    }
  },
  ru: {
    translation: {
      destinationNotFound: {
      title: "Направление не найдено",
      description: "К сожалению, мы не смогли найти нужное вам направление."
    },
    goBack: "Вернуться к направлениям",
    food: "Заказать еду онлайн",
    thingsToDo: "чем заняться",
    aboutDestination: "О направлении",
    getInTouch: "Связаться с нами",
    chatOnWhatsApp: "Написать в WhatsApp",
    instantResponse: "Мгновенный ответ",
    sendEmail: "Отправить email",
    emailAddress: "info@tourismparadise.com",
    houseboatShort: "Хаусбот в Аллеппи (день и ночь), частная каюта на верхней палубе.",
    exploreNow: "Исследовать",
    planYourVisitTitle: "Спланируйте визит",
    planYourVisitSubtitle: "Заполните форму — мы свяжемся с вами в течение 24 часов",
    labelFullName: "Полное имя *",
    placeholderFullName: "Введите полное имя",
    labelEmail: "Email-адрес *",
    placeholderEmail: "your.email@example.com",
    labelPhone: "Номер телефона",
    placeholderPhone: "+91 98765 43210",
    labelMessage: "Ваше сообщение *",
    placeholderMessage: "Расскажите о ваших планах, предпочтениях и вопросах...",
    sending: "Отправка...",
    sendInquiry: "Отправить запрос",
    successMessage: "✓ Сообщение успешно отправлено! Мы скоро свяжемся с вами.",
    whatsappMessage: "Здравствуйте! Я хочу посетить {{name}}, {{country}}. Могли бы вы предоставить больше информации?",
    emailSubject: "Запрос о {{destinationName}}",
    emailBodyTemplate: "Здравствуйте,\n\nХотел бы узнать больше о {{destination}}.\n\nСпасибо!",
      heroTitle: 'Планируйте каждую часть вашего путешествия',
      heroSubtitle: 'Бронируйте авиабилеты, отели, транспорт и развлечения в одном месте. Ваше комплексное решение для удобного планирования поездок.',
      houseboats: 'Дома-лодки',
      shikara: 'Шикара-поездки',
      flights: 'Авиабилеты',
      hotels: 'Отели',
      trains: 'Поезда',
      buses: 'Автобусы',
      cars: 'Аренда автомобилей',
      tours: 'Туры',
      cruises: 'Круизы',
      activities: 'Развлечения',
      packages: 'Туристические пакеты',
      weekend: 'Поездки на выходные',
      beaches: 'Пляжный отдых',
      mountains: 'Поездки в горы',
      adventure: 'Приключения',
      citybreaks: 'Короткие поездки в город',
      photography: 'Фото-туры',
      insurance: 'Страхование путешествий',
      passes: 'Городские карты',
      budget: 'Бюджетное проживание',
      bikes: 'Прокат велосипедов',
      villas: 'Виллы и дома',
      todaysDeals: 'Горячие предложения сегодня',
      exploreDestinations: 'Исследовать направления',
      seaFishRestaurants: 'Рестораны с морской рыбой',
      backwaterVillageStay: 'Проживание в деревне на заводи',
      keralaChipsAndSpices: 'Чипсы и специи Кералы',
      keralaHandlooms: 'Ручные ткацкие станки Кералы',
      honeymoonBoatHouse: 'Плавучий дом для молодоженов',
      houseboats: 'Плавучие дома',
      noHouseboatsFound: 'Не найдено плавучих домов, соответствующих вашему запросу.',

      budgetTravelDeals: 'Бюджетные туристические предложения для вас',
      offerHotels: 'Отели',
      offerHouseboatsDayNightCruise: 'Плавучие дома в Аллеппи для дневных и ночных круизов',
      offerHouseboatsDayNight1Bedroom: 'Плавучие дома с 1 спальней в Аллеппи для дневного и ночного проживания',
      offerHouseboatsDayCruise1BedroomUpperDeck: 'Частный плавучий дом с 1 спальней и верхней палубой для дневного круиза в Алаппуже',
      offerKeralaHoneymoonHouseboat: 'Плавучий дом для молодоженов в Керале',
      offerHouseboatDayNight1BedroomUpperDeck: 'Частный плавучий дом с 1 спальней и верхней палубой для дневного и ночного проживания в Аллеппи',
      offerHouseboatsAlleppeyDayTripUpperDeck: 'Однодневная поездка на плавучем доме с верхней палубой в Аллеппи',
      offerHouseboatsB2BPrice1Bedroom: 'B2B цена на плавучие дома с 1 спальней в Аллеппи',
      offerSharingHouseboats2People: 'Цена на совместное проживание в плавучих домах на 2 человека в Аллеппи',
      offerUltraPremiumHouseboats: 'Плавучие дома ультра-премиум класса в Аллеппи',
      offerKeralaTourBudgetPackages: 'Бюджетные турпакеты в Кералу',
      offerKeralaBoating: 'Лодочные прогулки в Керале',
      offerB2BTravelDealsKeralaHouseboat: 'B2B туристические предложения для пакетов плавучих домов в Керале',
      offerPetalsFlowers: 'Цветы лепестков',
      offerOrchidForSale: 'Орхидея на продажу - цветущие орхидеи',
      offerOxidisedOrnaments: 'Окисленные украшения',
      offerKeralaHandloomsSarees: 'Ручные ткацкие станки Кералы - сари касаву из Кералы',
      offerKeralaHandicrafts: 'Ремесла Кералы',
      offerKeralaChips: 'Чипсы Кералы - банановые чипсы Кералы',
      offerKeralaSpices: 'Специи Кералы',
      offerDriedFish: 'Сушеная рыба',
      offerKeralaRealEstate: 'Недвижимость в Керале',
      offerKeralaLottery: 'Лотерейные билеты Кералы - лотерейные билеты-бамперы Кералы',
      offerKeralaHomeDecor: 'Домашний декор Кералы',
      offerTransportationInKerala: 'Транспорт в Керале',
      offerKeralaCoirProducts: 'Кокосовые изделия Кералы',
      whyChooseTitle: 'Почему выбирают Tourism Paradise',
      whyChooseSubtitle: 'Мы делаем планирование путешествий легким благодаря нашим комплексным услугам и экспертному руководству',
      showLess: 'Показать меньше',
      showMore: 'Показать больше'
    },
    featureList: {
      pilgrimPackages: 'Лучшие паломнические пакеты',
      pilgrimDescription: 'Тщательно подобранные паломнические туры к священным местам для безмятежного духовного путешествия.',
      industrialTitle: 'Промышленный консалтинг и поставщик рабочей силы',
      industrialShortDesc: 'От подготовки проектных отчетов и финансового руководства до предоставления квалифицированной рабочей силы, такой как инженеры, техники и строительные подрядчики, мы покрываем все ваши промышленные и деловые потребности.',
      industrialFullDesc: 'Подготовка проектных отчетов, финансовое руководство, строительный надзор, подготовка планов и смет, оборудование для промышленности и гостиниц, строительные рабочие и подрядчики, электрика, сантехника, кондиционирование, строительство, бытовая техника, холодильник, стиральная машина, кондиционер, автомобили, компьютеры, мобильные телефоны, операторы лифтов, домашний декор, ювелирные изделия и украшения, производители кофе и закусок, каменщики, плотники, сварщики, установка оборудования, маляры, уборка, гостиницы, водители, изготовление алюминиевых и стальных конструкций, домашняя прислуга, садовые работы, операторы тяжелой техники и машин, веб-дизайн и хостинг, установка солнечных энергетических систем, бытовые услуги, лаборанты, инженеры и врачи, преподаватели, прачечная, ведение домашнего хозяйства и т. д.',
      educationTitle: 'Консалтинговые услуги в сфере образования',
      educationDescription: 'Инженерия, медицинский колледж, сельское хозяйство, компьютерный ИИ, LLB, MBA, BBA, MCA, лаборанты, физиотерапия, стоматология, аюрведа и т. д.',
      legalTitle: 'Адвокаты и юристы',
      legalDescription: 'Доступ к профессиональным юридическим консультациям и услугам от опытных адвокатов и юристов.',
    },
    testimonials:// public/locales/ru/testimonials.json
{
  "sectionTitle": "Что говорят наши путешественники",
  "sectionSubtitle": "Реальные впечатления тысяч довольных клиентов",
  "quoteOpen": "\"",
  "indicatorAria": "Показать отзыв {{index}}",

  "person1": {
    "name": "Сара Джонсон",
    "location": "Нью-Йорк, США",
    "text": "Абсолютно потрясающий опыт! Команда Tourism Paradise идеально спланировала наш медовый месяц. Каждая деталь была учтена, и мы совершили самую романтичную поездку по бэквотерам Кералы.",
    "trip": "Медовый месяц на бэквотерах Кералы"
  },

  "person2": {
    "name": "Майкл Чен",
    "location": "Торонто, Канада",
    "text": "Профессиональное обслуживание и потрясающее внимание к деталям. Наша семейная поездка в Кералу прошла идеально благодаря их экспертному планированию и знанию региона.",
    "trip": "Семейное приключение в Керале"
  },

  "person3": {
    "name": "Эмили Родригес",
    "location": "Барселона, Испания",
    "text": "Я часто путешествую по работе, но это отдых, организованный Tourism Paradise, был исключительным. Персонализированный маршрут и поддержка моего аюрведического ретрита в Керале сделали поездку безстрессовой.",
    "trip": "Индивидуальный ретрит в Керале"
  }
}
, 
    popularDestinations: {
      title: "Исследуйте больше направлений в Индии",
      subtitle: "Откройте для себя, что можно сделать в городах разных штатов",
      thingsToDo: "Чем заняться",
      comingSoonTitle: "Скоро будет!",
      comingSoonDescription: "Мы добавляем удивительные направления в {{continent}}. Загляните позже!",
      northIndia: "Направления Северной Индии",
      southIndia: "Направления Южной Индии",
      eastIndia: "Направления Восточной и Северо-Восточной Индии",
      centralIndia: "Направления Центральной Индии",

      delhi: {
        name: "Дели",
        country: "Дели",
        history:
          "Столица Индии с более чем 2000-летней историей. Дели наполнен мечетями, фортами и памятниками эпохи Великих Моголов. Красный форт и Индия Гейт символизируют сочетание древнего наследия и современной архитектуры."
      },

      jaipur: {
        name: "Джайпур",
        country: "Раджастхан",
        history:
          "Известный как «Розовый город», Джайпур — столица Раджастхана, основанная в 1727 году. Город славится великолепными дворцами, фортами, такими как Амбер-форт, и оживлёнными рынками."
      },

      agra: {
        name: "Агра",
        country: "Уттар-Прадеш",
        history:
          "Родина Тадж-Махала — одного из семи чудес света. С 1556 по 1658 год был столицей империи Великих Моголов. Знаменит также Агринским фортом и Фатехпур-Сикри."
      },

      varanasi: {
        name: "Варанаси",
        country: "Уттар-Прадеш",
        history:
          "Один из самых древних постоянно населённых городов мира. Священный центр индуизма на берегу Ганга, известный своими гхатами, храмами и духовной атмосферой."
      },

      amritsar: {
        name: "Амритсар",
        country: "Панджаб",
        history:
          "Основан в 1577 году гуру Рам Дасом. Здесь расположен Золотой храм — святейшее место сикхизма. Также известен трагическими событиями Джалианвала Багх 1919 года."
      },

      manali: {
        name: "Манали",
        country: "Химачал-Прадеш",
        history:
          "Популярный горный курорт на высоте 2050 м в Гималаях. Известен снежными вершинами, приключенческими видами спорта и древним храмом Хадимба."
      },

      leh: {
        name: "Лех",
        country: "Ладакх",
        history:
          "Столица Ладакха, расположенная на высоте 3500 м. В прошлом — важный пункт на Шёлковом пути. Известен суровыми ландшафтами, буддийскими монастырями и озером Пангвонг."
      },

      rishikesh: {
        name: "Ришикеш",
        country: "Уттаракханд",
        history:
          "Известен как «мировая столица йоги». Город на берегу Ганга с ашрамами, центрами йоги и знаменитым мостом Лакшман Джула."
      },

      udaipur: {
        name: "Удайпур",
        country: "Раджастхан",
        history:
          "«Город озёр», основанный в 1559 году. Известен дворцом Сити-Пэлас, Лейк-Пэлас, озером Пичола и романтической архитектурой."
      },

      shimla: {
        name: "Шимла",
        country: "Химачал-Прадеш",
        history:
          "Бывшая летняя столица Британской Индии. Славится колониальной архитектурой и узкоколейной дорогой Калка–Шимла (объект ЮНЕСКО)."
      },

      mussoorie: {
        name: "Масури",
        country: "Уттаракханд",
        history:
          "«Королева холмов», основанная британцами в 1826 году. Известна видами на Гималаи, водопадом Кемпти и Канатной дорогой."
      },

      srinagar: {
        name: "Сринагар",
        country: "Джамму и Кашмир",
        history:
          "Летняя столица региона. Известен озером Дал, могольскими садами и традиционными хаусботами. Называется «Раем на Земле»."
      },

      jaisalmer: {
        name: "Джайсалмер",
        country: "Раджастхан",
        history:
          "Известен как «Золотой город» благодаря желтому песчанику. Основан в 1156 году. Город славится фортом Джайсалмер и песчаными дюнами Тар."
      },

      nainital: {
        name: "Найнитал",
        country: "Уттаракханд",
        history:
          "Город вокруг живописного озера Найни, основанный британцами в 1841 году. Популярен лодочными прогулками и видом со снежных вершин."
      },

      vrindavan: {
        name: "Вриндаван",
        country: "Уттар-Прадеш",
        history:
          "Одно из священнейших мест индуизма; считается, что здесь прошло детство Кришны. Город знаменит тысячами храмов."
      },

      haridwar: {
        name: "Харидвар",
        country: "Уттаракханд",
        history:
          "Один из семи священных городов индуизма. Здесь Ганг впервые выходит на равнину. Знаменит Кумбха-мелой и вечерней Ганга-арати на Хар-ки-Паури."
      },
        mumbai: {
        name: "Мумбаи",
        country: "Махараштра",
        history:
          "Финансовая столица Индии и «город мечты». Ранее состоял из семи островов. Здесь находятся Ворота Индии, Марин-Драйв, кинематограф Болливуда и сочетание колониальной и современной архитектуры."
      },

      bengaluru: {
        name: "Бенгалуру",
        country: "Карнатака",
        history:
          "«Индийская Кремниевая долина» и «город-сад». Основан в 1537 году. Известен Бенгалурским дворцом, летним дворцом Типу султана и ботаническим садом Лалбаг."
      },

      goa: {
        name: "Гоа",
        country: "Гоа",
        history:
          "До 1961 года был португальской колонией. Известен своими пляжами, ночной жизнью и португальской архитектурой."
      },

      kerala: {
        name: "Керала",
        country: "Керала",
        history:
          "Известна как «страна Бога». Популярна бэквотерами, аюрведой и зелёными ландшафтами. Особенности культуры — катхакали, змеиные лодочные гонки и кухня с кокосом и специями."
      },

      hyderabad: {
        name: "Хайдарабад",
        country: "Телангана",
        history:
          "Основан в 1591 году Мухаммадом Кули Кутб Шахом. Известен своей историей, бирьяни, торговлей жемчугом, а также Чарминаром, фортом Голконда и мавзолеями Кутб-Шахи."
      },

      chennai: {
        name: "Ченнаи",
        country: "Тамилнад",
        history:
          "Ранее известен как Мадрас. Культурные ворота Южной Индии. Знаменит пляжем Марина, храмом Капалешварар и фортом Сент-Джордж."
      },

      kochi: {
        name: "Кочи",
        country: "Керала",
        history:
          "«Королева Аравийского моря», древний центр торговли специями. Здесь находят китайские рыболовные сети, Форт-Кочи, Дворец Маттанчери и старейшую европейскую церковь в Индии."
      },

      mysuru: {
        name: "Майсур",
        country: "Карнатака",
        history:
          "Культурная столица Карнатаки и бывшая столица династии Вадияров. Дворец Майсур, освещаемый более чем 100 000 огней во время Дашеры, является главным символом города."
      },

      madurai: {
        name: "Мадурай",
        country: "Тамилнад",
        history:
          "Один из древнейших городов Индии, существующий с III века до н.э. Прославлен храмом Минакши Амман с огромными гопурами, покрытыми яркими скульптурами."
      },

      alleppey: {
        name: "Аллеппи (Алаппужа)",
        country: "Керала",
        history:
          "Называется «Венеция Востока». Знаменита бэквотерами, каналами и плавучими домами. Ежегодная лодочная гонка Неру Трофи — главная достопримечательность."
      },

      ooty: {
        name: "Уути",
        country: "Тамилнад",
        history:
          "«Королева холмовых станций», основана британцами как летний курорт. Прославлена чайными плантациями, горной железной дорогой Нилгири (ЮНЕСКО) и живописными видами."
      },

      coorg: {
        name: "Курги (Кодагу)",
        country: "Карнатака",
        history:
          "Известен как «шотландские холмы Индии». Славится кофейными плантациями, туманными холмами и уникальной культурой Кодава."
      },

      hampi: {
        name: "Хампи",
        country: "Карнатака",
        history:
          "Объект ЮНЕСКО. Некогда столица империи Виджаянагара (1336–1565). Известен величественными храмами и древними руинами на территории более 4 000 гектаров."
      },

      pondicherry: {
        name: "Пондичерри",
        country: "Пондичерри",
        history:
          "До 1954 года — французская колония. Славится французскими кварталами, колониальной архитектурой, Ашрамом Ауробиндо и международным поселением Ауровиль."
      },
        visakhapatnam: {
        name: "Вишакхапатнам (Визаг)",
        country: "Андхра-Прадеш",
        history:
          "«Город судьбы» и «жемчужина восточного побережья». Известен древними храмами, пещерами Бора (со сталактитами возрастом в миллионы лет) и музеем подводной лодки INS Курусура."
      },

      tirupati: {
        name: "Тируапати",
        country: "Андхра-Прадеш",
        history:
          "Один из самых посещаемых религиозных центров мира. Здесь расположен храм Вenkатешвары в Тирумале — святыня миллионов паломников."
      },

      kolkata: {
        name: "Калькутта",
        country: "Западная Бенгалия",
        history:
          "«Город радости» и бывшая столица британской Индии. Знаменита Виктория Мемориалом, мостом Хаура и богатым культурным наследием."
      },

      gangtok: {
        name: "Гангток",
        country: "Сикким",
        history:
          "Столица Сиккима на высоте 1650 м. Отсюда открываются потрясающие виды на Канченджангу. Известен монастырями Румтек и Энчей."
      },

      shillong: {
        name: "Шиллонг",
        country: "Мегхалая",
        history:
          "«Шотландия Востока». Известен сосновыми холмами, водопадами (например, Слоновий водопад), озёрами и музыкальной культурой."
      },

      darjeeling: {
        name: "Дарджилинг",
        country: "Западная Бенгалия",
        history:
          "«Королева холмов», родина знаменитого чая дарджилинг и горной железной дороги (игрушечного поезда), внесённой в список ЮНЕСКО."
      },
        puri: {
        name: "Пури",
        country: "Орисса",
        history:
          "Один из четырёх священных индуистских центров (Чар-Дхам). Известен храмом Джаганнатха XII века и ежегодным фестивалем колесниц Ратха Ятра."
      },

      guwahati: {
        name: "Гувахати",
        country: "Ассам",
        history:
          "Ворота Северо-Восточной Индии. На холме Нилачал расположен один из важнейших центров шактизма — храм Камахья."
      },

      kohima: {
        name: "Кохима",
        country: "Нагаланд",
        history:
          "Знаменита битвой при Кохиме 1944 года — одним из поворотных моментов Второй мировой войны. Также известна фестивалем Хорнбилл."
      },

      itanagar: {
        name: "Итанагар",
        country: "Аруначал-Прадеш",
        history:
          "Название означает «крепость из кирпича» — по древнему Ита-форт (XIV–XV вв.). Также известен монастырём Будда Вихар и природными ландшафтами."
      },

      bhubaneswar: {
        name: "Бхубанешвар",
        country: "Орисса",
        history:
          "«Город храмов», где расположено более 500 храмов VI–XIII веков в стиле Калинга. Среди главных — Лингарадж, Муктаешвар и Раджарани."
      },

      portblair: {
        name: "Порт-Блэр",
        country: "Андаманские и Никобарские острова",
        history:
          "Столица архипелага и ворота к тропическому раю Индии. Здесь расположена историческая тюрьма «Клеточная тюрьма» (Селлюлар Джейл), ныне — национальный памятник."
      },

      pelling: {
        name: "Пеллинг",
        country: "Сикким",
        history:
          "Горный город на высоте 2150 м с удивительными видами на Канченджангу. Знаменит монастырём Пемаянгце и руинами Рабденце."
      },

      tawang: {
        name: "Таванг",
        country: "Аруначал-Прадеш",
        history:
          "Расположен на высоте 3048 м. Здесь находится крупнейший в Индии буддийский монастырь, основанный в 1680 году. Родина шестого Далай-ламы."
      },
      
      cherrapunji: {
        name: "Черрапунджи (Сохра)",
        country: "Мегхалая",
        history:
          "Когда-то самое дождливое место на Земле. Известно гигантскими водопадами и уникальными живыми корневыми мостами племени кхаси."
      },
        imphal: {
        name: "Импхал",
        country: "Манипур",
        history:
          "Играл важную роль во Второй мировой войне. Известен фортом Кангла, озером Локтак с плавучими островами и национальным парком Кеибул-Ламджао."
      },

      aizawl: {
        name: "Айзол",
        country: "Мизорам",
        history:
          "Горный город на высоте 1132 м, известный культурой народа мизо, ткацкими традициями и живописными видами."
      },

      agartala: {
        name: "Агартала",
        country: "Трипура",
        history:
          "Известна впечатляющим дворцом Удджаянта, водным дворцом Нирмахал и древним храмом Трипура Сундари."
      },

      khajuraho: {
        name: "Каджурахо",
        country: "Мадхья-Прадеш",
        history:
          "Объект ЮНЕСКО, знаменит храмами X–XI веков с изысканными скульптурами, включая эротические мотивы, изображающие аспекты жизни и духовности."
      },

      bhopal: {
        name: "Бхопал",
        country: "Мадхья-Прадеш",
        history:
          "«Город озёр», основан в XI веке. Известен мечетью Тадж-уль-Масджид, ступой Санчи (ЮНЕСКО) и мемориалом трагедии 1984 года."
      },

      gwalior: {
        name: "Гвалиор",
        country: "Мадхья-Прадеш",
        history:
          "Известен массивной крепостью на холме, называемой «жемчужиной индийских фортов», а также вкладом в индийскую классическую музыку."
      },

      indore: {
        name: "Индор",
        country: "Мадхья-Прадеш",
        history:
          "Коммерческая столица штата и самый чистый город Индии. Знаменит дворцами Раджвада и Лал-Багх, а также яркой гастрономией."
      },

      orchha: {
        name: "Орчха",
        country: "Мадхья-Прадеш",
        history:
          "Основана в 1531 году. Город славится дворцами Джахангир-Махал, Радж-Махал и храмами на берегу реки Бетва."
      },

      ujjain: {
        name: "Удджайн",
        country: "Мадхья-Прадеш",
        history:
          "Один из семи священных городов индуизма и место проведения Кумбха-мелы. Здесь находится храм Махакалешвар — один из двенадцати Джйотирлингама."
      },

      ranchi: {
        name: "Ранчи",
        country: "Джаркханд",
        history:
          "«Город водопадов». Знаменит водопадами Хундру, Джонха и Дасам, а также как родина крикетиста М.С. Дони."
      },

      daman: {
        name: "Даман",
        country: "Даман и Диу",
        history:
          "До 1961 года — португальская колония. Славится колониальными фортами, церквями и пляжами с спокойной атмосферой."
      },

      silvassa: {
        name: "Силвасса",
        country: "Дадра и Нагар-Хавели",
        history:
          "Город среди лесов и холмов, известный варли-искусством, музеем племен и природными парками."
      },

      nagpur: {
        name: "Нагпур",
        country: "Махараштра",
        history:
          "«Апельсиновый город», географический центр Индии. Здесь находится знаменитая ступа Дикшабхуми, связанная с доктором Б.Р. Амбедкаром."
      },

      raipur: {
        name: "Райпур",
        country: "Чхаттисгарх",
        history:
          "Столица штата, имеющая древнюю историю. Служит воротами к храмам, буддийским руинам и племенным деревням региона."
      },

      jabalpur: {
        name: "Джабалпур",
        country: "Мадхья-Прадеш",
        history:
          "Известен мраморными скалами в Бхедагхате и водопадом Дхуандар. Сочетает природную красоту и богатую культурную историю."
      },

      pachmarhi: {
        name: "Пачмари",
        country: "Мадхья-Прадеш",
        history:
          "Единственный горный курорт в штате. Известен британской архитектурой, древними пещерными росписями и водопадами."
      },

      amarkantak: {
        name: "Амаркантак",
        country: "Мадхья-Прадеш",
        history:
          "Священное место и источник рек Нармада и Сон. Знаменит храмами и природными ландшафтами."
      },

      chitrakoot: {
        name: "Читракута",
        country: "Мадхья-Прадеш / Уттар-Прадеш",
        history:
          "Считается местом, где Рама, Сита и Лакшман провели 11 из 14 лет изгнания, согласно Рамаяне."
      },
        bhimbetka: {
        name: "Бхимбетка",
        country: "Мадхья-Прадеш",
        history:
          "Объект ЮНЕСКО. Более 500 пещер с наскальными рисунками возрастом до 30 000 лет. Картины изображают охоту, танцы, животных и сцены повседневной жизни."
      }
    },
    houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: 'Плавучие дома-отели в Аллеппи, Алаппужа, Керала',
      houseboatsHotelsInMunnar: 'Плавучие дома-отели в Муннаре',
      houseboatsHotelsInCochin: 'Плавучие дома-отели в Кочине',
      houseboatsHotelsInKumarakomLake: 'Плавучие дома-отели на озере Кумараком',
      houseboatsHotelsInKottayam: 'Плавучие дома-отели в Коттаяме',
      houseboatsHotelsInAlleppey: 'Плавучие дома-отели в Аллеппи',
      houseboatsHotelsInChottanikara: 'Плавучие дома-отели в Чоттаниккаре',
      houseboatsHotelsInThiruvananthapuram: 'Плавучие дома-отели в Тируванантапураме',
      houseboatsHotelsInKovalamBeach: 'Плавучие дома-отели на пляже Ковалам',
      houseboatsHotelsInThekkady: 'Плавучие дома-отели в Теккади',
      houseboatsHotelsInWayanad: 'Плавучие дома-отели в Ваянаде',
      houseboatsHotelsInAlappuzha: 'Плавучие дома-отели в Алаппуже',
      houseboatsHotelsInGuruvayur: 'Плавучие дома-отели в Гуруваюре',
      houseboatsHotelsInVagamon: 'Плавучие дома-отели в Вагамоне',
      houseboatsHotelsInAthirapillyWaterFalls: 'Плавучие дома-отели у водопада Атирапилли',
      houseboatsHotelsInMarariBeach: 'Плавучие дома-отели на пляже Марари',
      houseboatsHotelsInPoovarBeach: 'Плавучие дома-отели на пляже Пувар',
      houseboatsHotelsInVarkalaBeach: 'Плавучие дома-отели на пляже Варкала',
      houseboatsHotelsInAshtamudiLake: 'Плавучие дома-отели на озере Аштамуди',
      houseboatsHotelsInKanyakumariBeach: 'Плавучие дома-отели на пляже Каньякумари',
      houseboatsHotelsInAlleppeyBeach: 'Плавучие дома-отели на пляже Аллеппи',
      houseboatsHotelsInAlappuzhaLake: 'Плавучие дома-отели на озере Алаппужа',
      houseboatsHotelsInIndia: 'Плавучие дома-отели в Индии',
      houseboatsHotelsInKerala: 'Плавучие дома-отели в Керале',
      houseBoatHotelsInAlleppey: 'Плавучие дома-отели в Аллеппи',
      boatHouseHotelsInIndia: 'Плавучие дома-отели в Индии',
      boatHouseHotelsInKerala: 'Плавучие дома-отели в Керале',
      sharingHouseboatsHotelsInAlleppey: 'Общие плавучие дома-отели в Аллеппи',
      sharingBoatHouseHotelsInKerala: 'Общие плавучие дома-отели в Керале',
      dayTripHouseboatsHotelsInAlleppey: 'Однодневные плавучие дома-отели в Аллеппи',
      dayCruiseHouseboatsHotelsInAlleppey: 'Однодневные круизные плавучие дома-отели в Аллеппи',
      fiveStarHouseboatsHotelsInAlleppey: '5-звездочные плавучие дома-отели в Аллеппи',
      fourStarHouseboatsHotelsInAlleppey: '4-звездочные плавучие дома-отели в Аллеппи',
      threeStarHouseboatsHotelsInAlleppey: '3-звездочные плавучие дома-отели в Аллеппи',
      twoStarHouseboatsHotelsInAlleppey: '2-звездочные плавучие дома-отели в Аллеппи',
      budgetHouseboatsHotelsInAlleppey: 'Бюджетные плавучие дома-отели в Аллеппи',
      standardBoatHouseHotelsInAlleppey: 'Стандартные плавучие дома-отели в Аллеппи'
    }
    ,
    destinationFeed: {
      loadingMore: 'Загрузка новых предложений...',
      inquiryTitle: 'Есть вопросы? Свяжитесь с нами!',
      inquirySubtitle: 'Отправьте нам свой запрос, и наша команда свяжется с вами в течение 24 часов',
      yourName: 'Ваше имя *',
      yourEmail: 'Ваш E-mail *',
      phoneNumber: 'Номер телефона',
      subject: 'Тема',
      yourMessage: 'Ваше сообщение *',
      sendInquiry: 'Отправить запрос',
      scrollToInquiryAria: 'Прокрутить до формы запроса',
      "bookViaWhatsapp": "Забронировать через WhatsApp"
    },destinationOffers: {
        1: {
          title: "Отели",
          description: "Лесные и заповедные зоны и связанные с ними активности: • Заповедник Перияр (или Тигровый заповедник Перияр) • Лесные районы Кералы • Трекинговые маршруты • Горные территории • Взаимодействие/наблюдение за слонами (сафари на слонах, катание на слонах, наблюдение в дикой природе или заповедниках; на фестивалях — слоновьи процессии или Гаямела)."
        },

        2: {
          title: "Домики на воде в Аллеппи — дневной и ночной круиз",
          description: "Домики на воде в Аллеппи с 1–22 спальнями. Премиум, люкс и бюджет. Причал Мухамма, лодочная гонка Неру Трофи, маршрут Аллапужа–Аллеппи, зона Каннанкара."
        },

        3: {
          title: "Домики на воде в Аллеппи — 1 спальня (день и ночь)",
          description: "Гостевые дома в Аллеппи, фермерские деревни, апартаменты в Паллтуритхи, виллы, домики на деревьях, курорты на островах, жильё у озера и моря. От 1 до 22 спален."
        },

        4: {
          title: "Аллапужа — частный домик с 1 спальней и верхней палубой (дневной круиз)",
          description: "Домики с 1–22 спальнями — делюкс, премиум, люкс. Причал Мухамма, гонка Неру Трофи, маршрут Каннанкара."
        },

        5: {
          title: "Свадебный домик на воде в Керале",
          description: "Романтический домик с роскошными удобствами: кондиционер, частная ванная, видовая палуба. Ужин при свечах, оформление цветами, специальные услуги."
        },

        6: {
          title: "Аллеппи — домик на воде с 1 спальней и верхней палубой (день/ночь)",
          description: "Бэквотер-стэй в Аллеппи, деревни, апартаменты, виллы, островные курорты, дома у озера/моря. Домики 1–22 спальни, премиум/люкс."
        },

        7: {
          title: "Аллеппи — домик с 1 спальней и частной верхней палубой",
          description: "Аллеппи, Кумараком, Коллам, озеро Аштамуди, Ковалам, Варкала, пляж Черай, пляж Марари, деревня Кайнакарри, Пуннамада, Арьяд."
        },

        8: {
          title: "Аллеппи — дневная поездка на домике с верхней палубой",
          description: "Кайнакарри, Пуннамада, Арьяд, апартаменты Паллтуритхи, причал Мухамма. Маршрут для однодневного круиза."
        },

        9: {
          title: "B2B цена — домик на воде с 1 спальней",
          description: "Категории: делюкс, премиум, люкс. Домики с верхней палубой и без неё. Верхняя палуба даёт лучший обзор."
        },

        10: {
          title: "Домики на воде в Аллеппи — цена для двоих (shared)",
          description: "Бюджетный вариант для пар и друзей. 1 ночь проживания, блюда Кералы, красивые виды бэквотеров."
        },

        11: {
          title: "Ультра-премиальные домики на воде — Аллеппи",
          description: "Делюкс, премиум, люкс, ультра-люкс категории. 1–22 спальни. Дневные и ночные круизы. Высший уровень роскоши."
        },

        12: {
          title: "Бюджетные турпакеты по Керале",
          description: "Мунир, Теккади, Перияр, Ваянад, Вагамон, Понмути, Идукки, Девикулам, Куттиканам, Ваттавада, Канналур, горные и лесные маршруты."
        },

        13: {
          title: "Катание на лодках в Керале",
          description: "Спокойное путешествие по прекрасным бэквотерам Кералы. Поля риса, каналы деревень, традиционные деревянные лодки, блюда Кералы."
        },

        14: {
          title: "B2B — специальные цены на домики на воде",
          description: "Домики на 1–22 спальни. Премиум, люкс, бюджет. Причал Мухамма, Неру Трофи, Каннанкара."
        },

        15: {
          title: "Petals Flowers",
          description: "Премиум-магазин цветущих растений в Керале. Особенно редкие орхидеи. Для декора, подарков и садоводства. Выращены с особой заботой."
        },

        16: {
          title: "Орхидеи — растения с цветами",
          description: "Тропические орхидеи: фаленопсис, ванда. Яркие цвета, уникальные рисунки, долгий цветок. Отлично подходит для интерьера. От ₹399."
        },

        17: {
          title: "Оксидированные украшения",
          description: "Украшения Кералы с тёмной винтажной отделкой. Из серебра и латуни. Подходят к сари и современным нарядам. Колье, серьги, наборы."
        },

        18: {
          title: "Хэндлук Кералы — касаву-сари",
          description: "Керала шелк, касаву-сари, касаву-материалы для чуридаров, хэндлук-рубашки. Традиционное белое сари с золотой каймой."
        },

        19: {
          title: "Ремёсла Кералы",
          description: "Резьба по дереву, изделия из колокольного металла, кокосовые коврики, изделия из скорлупы кокоса, маски катхакали, неттипаттам, зеркала Аранмула."
        },

        20: {
          title: "Чипсы Кералы — банановые чипсы",
          description: "Знаменитые банановые чипсы Nendran, чипсы из джекфрута и другие традиционные закуски."
        },

        21: {
          title: "Специи Кералы",
          description: "Кардамон, чёрный перец, корица, гвоздика, мускатный орех. Высшее качество из органических ферм Западных Гат."
        },

        22: {
          title: "Сушёная рыба",
          description: "Экспортного качества сушёные пресноводные креветки из озера Аштамуди. Высушено гигиенично, без соли. Отлично подходит для масала, соусов и чатни."
        },

        23: {
          title: "Недвижимость Кералы",
          description: "Участок с домом 4 BHK (3200 кв. футов) в престижном районе. Продажа и аренда вилл, земельных участков, домов и квартир по всей Керале."
        },

        24: {
          title: "Лотерейные билеты Кералы — bumper lottery",
          description: "Официальные государственные лотереи Кералы: Win Win, Sthree Sakthi, Fifty-Fifty, Karunya. Главный приз — до 1 крора."
        },

        25: {
          title: "Домашний декор Кералы",
          description: "Декор для дома и изделия из кокосового волокна. Экологичные, долговечные и традиционные."
        },

        26: {
          title: "Транспортные услуги в Керале",
          description: "Гуруваюур, водопады Атиррапилли, Вазакачал, базилика Артункал, форт Кочин, Неелешварам, туристическая зона Тенмала, храм Падманабхасвами, Чоттаниккара, Сабари Мала, Кутралам, Ути, Кодайканал, Гоа, Бангалор, Ченнай, Мадурай, Рамешварам, Коимбатур, Валпараи, Кайнакарри, Пуннамада, Арьяд, Паллтуритхи, причал Мухамма."
        },

        27: {
          title: "Изделия из кокосового волокна Кералы",
          description: "Экологичные и биоразлагаемые изделия из койра: коврики, верёвки, щётки, сумки, домашний декор. Востребованы в Индии и за рубежом."
        },

        28: {
          title: "Онлайн-заказ еды",
          description: "Онлайн-доставка еды по всей Керале — от традиционной керальской кухни до международных блюд. Доступно в Коччи, Тривандруме, Кожикоде и других городах."
        }
      },
    footer: {
      description: 'Ваш надежный спутник в незабываемых путешествиях. Создание воспоминаний, которые останутся на всю жизнь.',
      destinations: {
        title: 'Направления',
        keralaBudgetHouseboat: 'Бюджетный плавучий дом в Керале',
        luxuryTopEndHouseboat: 'Роскошный плавучий дом высшего класса',
        b2bPriceKeralaHouseboats: 'B2B цена на плавучие дома в Кераle',
        houseboatsInAlappuzha: 'Плавучие дома в Алаппуже',
        budgetBoatHouseAllepey: 'Бюджетный плавучий дом в Аллеппи',
        budgetBoatHouseAlappuzha: 'Бюджетный плавучий дом в Алаппуже',
        budgetHouseboatAllepey: 'Бюджетный плавучий дом в Аллеппи',
        budgetHouseboatAlappuzha: 'Бюджетный плавучий дом в Алаппуже',
        budgetAlleppeyBoatHouse: 'Бюджетный плавучий дом в Аллеппи',
        spotBookingBoatHouse: 'Бронирование плавучего дома на месте',
        prepaidTaxiCochinAirport: 'Услуга предоплаченного такси в аэропорту Кочина',
        budgetAlappuzhaHouseboats: 'Бюджетные плавучие дома в Алаппуже',
        budgetAlleppeyHouseboats: 'Бюджетные плавучие дома в Аллеппи',
        b2bAlleppeyHouseboats: 'B2B плавучие дома в Аллеппи',
        privateAlleppeyHouseboats: 'Частные плавучие дома в Аллеппи',
        houseboatsInIndia: 'Плавучие дома в Индии',
        sharedHouseboatsInAlleppey: 'Общие плавучие дома в Аллеппи',
        sharingHouseboatsInAlleppey: 'Общие плавучие дома в Аллеппи',
        sharingBoathouseInAlleppey: 'Общий плавучий дом в Аллеппи',
        clubbingHouseboatsInAlleppey: 'Клубные плавучие дома в Аллеппи',
        clubbingBoathouseInAlleppey: 'Клубный плавучий дом в Аллеппи',
        luxuryHouseboatsInAlleppey: 'Роскошные плавучие дома в Аллеппи',
        premiumHouseboatsInAlleppey: 'Премиальные плавучие дома в Аллеппи',
        deluxeHouseboatsInAlleppey: 'Плавучие дома класса люкс в Аллеппи',
        standardHouseboatsInAlleppey: 'Стандартные плавучие дома в Аллеппи',
        ultraLuxuryHouseboatsInAlleppey: 'Ультра-роскошные плавучие дома в Аллеппи',
        ultraLuxurySharingHouseboatsInAlleppey: 'Ультра-роскошные общие плавучие дома в Аллеппи',
        bestHouseboatsInAlleppey: 'Лучшие плавучие дома в Аллеппи',
        bestLuxuryHouseboatsInAlleppey: 'Лучшие роскошные плавучие дома в Аллеппи',
        bestPremiumHouseboatsInAlleppey: 'Лучшие премиальные плавучие дома в Аллеппи',
        bestDeluxeHouseboatsInAlleppey: 'Лучшие плавучие дома класса люкс в Аллеппи',
        bestStandardHouseboatsInAlleppey: 'Лучшие стандартные плавучие дома в Аллеппи',
        bestAlappuzhaHouseboatPackages: 'Лучшие пакеты плавучих домов в Алаппуже',
        bestAlappuzhaBoatHousePackages: 'Лучшие пакеты плавучих домов в Алаппуже'
      },
      services: { title: 'Услуги', flightBooking: 'Бронирование авиабилетов', hotelReservation: 'Бронирование отелей', tourPackages: 'Туристические пакеты' },
      company: { title: 'Компания', aboutUs: 'О нас', contact: 'Контакты' },
      support: { title: 'Поддержка', helpCenter: 'Центр помощи', terms: 'Условия предоставления услуг', privacy: 'Политика конфиденциальности', refund: 'Политика возврата', faq: 'Часто задаваемые вопросы' },
      copyright: '© {{year}} Tourism Paradise. Все права защищены.'
    }
  },
  ml: {
    translation: {
      destinationNotFound: {
      title: "ഗമ്യം കണ്ടെത്താനായില്ല",
      description: "ക്ഷമിക്കണം, നിങ്ങൾ അന്വേഷിക്കുന്ന ഗമ്യം കണ്ടെത്താനായില്ല."
    },
    goBack: "ഗമ്യങ്ങളുടെ പട്ടികയിലേക്ക് മടങ്ങുക",
    food: "ഓൺലൈനിൽ ഭക്ഷണം ഓർഡർ ചെയ്യുക",
    thingsToDo: "ചെയ്യാവുന്ന കാര്യങ്ങൾ",
    aboutDestination: "ഗമ്യത്തെക്കുറിച്ച്",
    getInTouch: "ബന്ധപ്പെടുക",
    chatOnWhatsApp: "വാട്ട്സാപ്പിൽ ചാറ്റ് ചെയ്യൂ",
    instantResponse: "ഉടൻ പ്രതികരണം",
    sendEmail: "ഇമെയിൽ അയയ്ക്കുക",
    emailAddress: "info@tourismparadise.com",
    houseboatShort: "അലപ്പുഴയിൽ ദിവസം & രാത്രി 1 ബെഡ്റൂം പ്രൈവറ്റ് അപ്പർ ഡെക്ക് ഹൗസ്‌ബോട്ട്.",
    exploreNow: "ഇപ്പോൾ പരിശോധിക്കുക",
    planYourVisitTitle: "നിങ്ങളുടെ യാത്ര പ്ലാൻ ചെയ്യൂ",
    planYourVisitSubtitle: "ഫോം പൂരിപ്പിക്കുക, 24 മണിക്കൂറിനകം ഞങ്ങൾ ബന്ധപ്പെടും",
    labelFullName: "പൂർണ്ണ പേര് *",
    placeholderFullName: "നിങ്ങളുടെ പൂർണ്ണ പേരെഴുതുക",
    labelEmail: "ഇമെയിൽ വിലാസം *",
    placeholderEmail: "your.email@example.com",
    labelPhone: "ഫോൺ നമ്പർ",
    placeholderPhone: "+91 98765 43210",
    labelMessage: "നിങ്ങളുടെ സന്ദേശം *",
    placeholderMessage: "നിങ്ങളുടെ യാത്രാ പദ്ധതികൾ, ഇഷ്ടങ്ങൾ, ചോദ്യങ്ങൾ എന്നിവ പറയൂ...",
    sending: "അയയ്ക്കുന്നു...",
    sendInquiry: "അന്വേഷണം അയയ്ക്കുക",
    successMessage: "✓ സന്ദേശം വിജയകരമായി അയച്ചു! ഞങ്ങൾ ഉടൻ ബന്ധപ്പെടും.",
    whatsappMessage: "ഹലോ! ഞാൻ {{name}}, {{country}} സന്ദർശിക്കാൻ ആഗ്രഹിക്കുന്നു. കൂടുതൽ വിവരങ്ങൾ നൽകാമോ?",
    emailSubject: "{{destinationName}} സംബന്ധിച്ച അന്വേഷണം",
    emailBodyTemplate: "ഹലോ,\n\n{{destination}} കുറിച്ച് കൂടുതല്‍ അറിയാന്‍ ആഗ്രഹിക്കുന്നു.\n\nനന്ദി!",
      heroTitle: 'നിങ്ങളുടെ യാത്രയുടെ എല്ലാ ഭാഗവും ആസൂത്രണം ചെയ്യുക',
      heroSubtitle: 'വിമാനങ്ങൾ, ഹോട്ടലുകൾ, ഗതാഗതം, അനുഭവങ്ങൾ എന്നിവയെല്ലാം ഒരിടത്ത് ബുക്ക് ചെയ്യുക. തടസ്സമില്ലാത്ത യാത്രാ ആസൂത്രണത്തിനുള്ള നിങ്ങളുടെ സമ്പൂർണ്ണ യാത്രാ പരിഹാരം.',
      houseboats: 'ഹൗസ് ബോട്ടുകൾ',
      shikara: 'ശിക്കാര റൈഡുകൾ',
      flights: 'വിമാനങ്ങൾ',
      hotels: 'ഹോട്ടലുകൾ',
      trains: 'ട്രെയിനുകൾ',
      buses: 'ബസ്സുകൾ',
      cars: 'കാർ വാടകയ്ക്ക്',
      tours: 'ടൂറുകൾ',
      cruises: 'ക്രൂയിസുകൾ',
      activities: 'പ്രവർത്തനങ്ങൾ',
      packages: 'ഹോളിഡേ പാക്കേജുകൾ',
      weekend: 'വാരാന്ത്യ യാത്രകൾ',
      beaches: 'ബീച്ച് സ്റ്റേകൾ',
      mountains: 'മലയോര യാത്രകൾ',
      adventure: 'സാഹസികം',
      citybreaks: 'സിറ്റി ബ്രേക്കുകൾ',
      photography: 'ഫോട്ടോ ടൂറുകൾ',
      insurance: 'യാത്രാ ഇൻഷുറൻസ്',
      passes: 'സിറ്റി പാസ്സുകൾ',
      budget: 'ബഡ്ജറ്റ് സ്റ്റേകൾ',
      bikes: 'ബൈക്ക് വാടകയ്ക്ക്',
      villas: 'വില്ലകളും വീടുകളും',
      todaysDeals: 'ഇന്നത്തെ ഹോട്ട് ഡീലുകൾ',
      exploreDestinations: 'സ്ഥലങ്ങൾ കണ്ടെത്തുക',
      seaFishRestaurants: 'കടൽ മത്സ്യ റെസ്റ്റോറന്റുകൾ',
      backwaterVillageStay: 'കായൽ ഗ്രാമ താമസം',
      keralaChipsAndSpices: 'കേരള ചിപ്‌സും സുഗന്ധവ്യഞ്ജനങ്ങളും',
      keralaHandlooms: 'കേരള കൈത്തറി',
      honeymoonBoatHouse: 'ഹണിമൂൺ ബോട്ട് ഹൗസ്',
      houseboats: 'ഹൗസ് ബോട്ടുകൾ',
      noHouseboatsFound: 'നിങ്ങളുടെ തിരയലിന് അനുയോജ്യമായ ഹൗസ് ബോട്ടുകളൊന്നും കണ്ടെത്തിയില്ല.',

      budgetTravelDeals: 'നിങ്ങൾക്കായി ബഡ്ജറ്റ് യാത്രാ ഡീലുകൾ',
      offerHotels: 'ഹോട്ടലുകൾ',
      offerHouseboatsDayNightCruise: 'ആലപ്പുഴയിൽ രാവും പകലും യാത്ര ചെയ്യാവുന്ന ഹൗസ്ബോട്ടുകൾ',
      offerHouseboatsDayNight1Bedroom: 'ആലപ്പുഴയിൽ രാവും പകലും 1 ബെഡ്‌റൂം ഹൗസ്ബോട്ട്',
      offerHouseboatsDayCruise1BedroomUpperDeck: 'ആലപ്പുഴയിൽ ഒരു ബെഡ്‌റൂം അപ്പർ ഡെക്ക് പ്രൈവറ്റ് ഹൗസ്ബോട്ടിൽ പകൽ യാത്ര',
      offerKeralaHoneymoonHouseboat: 'കേരള ഹണിമൂൺ ഹൗസ്ബോട്ട്',
      offerHouseboatDayNight1BedroomUpperDeck: 'ആലപ്പുഴയിൽ രാവും പകലും 1 ബെഡ്‌റൂം അപ്പർ ഡെക്ക് പ്രൈവറ്റ് ഹൗസ്ബോട്ട്',
      offerHouseboatsAlleppeyDayTripUpperDeck: 'ആലപ്പുഴയിൽ ഒരു ദിവസത്തെ അപ്പർ ഡെക്ക് ഹൗസ്ബോട്ട് യാത്ര',
      offerHouseboatsB2BPrice1Bedroom: 'ആലപ്പുഴയിലെ 1 ബെഡ്‌റൂം ഹൗസ്ബോട്ടിന് ബി2ബി വില',
      offerSharingHouseboats2People: 'ആലപ്പുഴയിൽ 2 പേർക്ക് ഷെയറിംഗ് ഹൗസ്ബോട്ട് വില',
      offerUltraPremiumHouseboats: 'ആലപ്പുഴയിലെ അൾട്രാ പ്രീമിയം ഹൗസ്ബോട്ടുകൾ',
      offerKeralaTourBudgetPackages: 'കേരള ടൂർ ബഡ്ജറ്റ് പാക്കേജുകൾ',
      offerKeralaBoating: 'കേരള ബോട്ടിംഗ്',
      offerB2BTravelDealsKeralaHouseboat: 'കേരള ഹൗസ് ബോട്ട് പാക്കേജുകൾക്ക് ബി2ബി യാത്രാ ഡീലുകൾ',
      offerPetalsFlowers: 'ദളങ്ങളുടെ പൂക്കൾ',
      offerOrchidForSale: 'ഓർക്കിഡ് വിൽപ്പനയ്ക്ക് - ഓർക്കിഡ് പൂച്ചെടികൾ',
      offerOxidisedOrnaments: 'ഓക്സിഡൈസ്ഡ് ആഭരണങ്ങൾ',
      offerKeralaHandloomsSarees: 'കേരള കൈത്തറി - കേരള കസവു സാരികൾ',
      offerKeralaHandicrafts: 'കേരള കരകൗശല വസ്തുക്കൾ',
      offerKeralaChips: 'കേരള ചിപ്‌സ് - കേരള വാഴപ്പഴം ചിപ്‌സ്',
      offerKeralaSpices: 'കേരള സുഗന്ധവ്യഞ്ജനങ്ങൾ',
      offerDriedFish: 'ഉണക്കമീൻ',
      offerKeralaRealEstate: 'കേരള റിയൽ എസ്റ്റേറ്റ്',
      offerKeralaLottery: 'കേരള ലോട്ടറി ടിക്കറ്റുകൾ - കേരള ബമ്പർ ലോട്ടറി ടിക്കറ്റുകൾ',
      offerKeralaHomeDecor: 'കേരള ഗൃഹാലങ്കാരം',
      offerTransportationInKerala: 'കേരളത്തിലെ ഗതാഗതം',
      offerKeralaCoirProducts: 'കേരള കയർ ഉൽപ്പന്നങ്ങൾ',
      whyChooseTitle: 'എന്തുകൊണ്ട് ടൂറിസം പാരഡൈസ് തിരഞ്ഞെടുക്കണം',
      whyChooseSubtitle: 'ഞങ്ങളുടെ സമഗ്രമായ സേവനങ്ങളും വിദഗ്ദ്ധ മാർഗ്ഗനിർദ്ദേശങ്ങളും ഉപയോഗിച്ച് യാത്രാ ആസൂത്രണം ഞങ്ങൾ എളുപ്പമാക്കുന്നു',
      showLess: 'കുറച്ച് കാണിക്കുക',
      showMore: 'കൂടുതൽ കാണിക്കുക'
    },featureList: {
      pilgrimPackages: 'മികച്ച തീർത്ഥാടന പാക്കേജുകൾ',
      pilgrimDescription: 'ശാന്തമായ ആത്മീയ യാത്രയ്ക്കായി വിശുദ്ധ സ്ഥലങ്ങളിലേക്കുള്ള ശ്രദ്ധാപൂർവ്വം ക്യൂറേറ്റ് ചെയ്ത തീർത്ഥാടന ടൂറുകൾ.',
      industrialTitle: 'വ്യാവസായിക കൺസൾട്ടൻസി സേവനവും തൊഴിലാളി വിതരണക്കാരനും',
      industrialShortDesc: 'പ്രോജക്റ്റ് റിപ്പോർട്ടുകളും സാമ്പത്തിക മാർഗ്ഗനിർദ്ദേശങ്ങളും മുതൽ എഞ്ചിനീയർമാർ, ടെക്നീഷ്യൻമാർ, നിർമ്മാണ കരാറുകാർ തുടങ്ങിയ വിദഗ്ധ തൊഴിലാളികളെ വിതരണം ചെയ്യുന്നത് വരെ, നിങ്ങളുടെ എല്ലാ വ്യാവസായിക, ബിസിനസ്സ് ആവശ്യകതകളും ഞങ്ങൾ നിറവേറ്റുന്നു.',
      industrialFullDesc: 'പ്രോജക്റ്റ് റിപ്പോർട്ട് തയ്യാറാക്കൽ, സാമ്പത്തിക മാർഗ്ഗനിർദ്ദേശം, നിർമ്മാണ മേൽനോട്ടം, പ്ലാനും എസ്റ്റിമേറ്റും തയ്യാറാക്കൽ, വ്യവസായ, ഹോട്ടൽ മെഷീനുകൾ, നിർമ്മാണ തൊഴിലാളികളും കരാറുകാരും, ഇലക്ട്രിക്, പ്ലംബിംഗ്, എയർ കണ്ടീഷണർ, നിർമ്മാണം, ഹോം അപ്ലയൻസസ്, ഫ്രിഡ്ജ്, വാഷിംഗ് മെഷീൻ, എയർ കണ്ടീഷണർ, ഓട്ടോമൊബൈൽ, ഓട്ടോമോട്ടീവ്, കമ്പ്യൂട്ടർ, മൊബൈൽ ഫോൺ, സെല്ലുലാർ ഫോൺ, ലിഫ്റ്റ് ഓപ്പറേറ്റർ, ഹോം ഡെക്കർ, ജ്വല്ലറി ആൻഡ് ഓർണമെന്റ്സ്, കോഫി ആൻഡ് സ്നാക്സ് മേക്കർ, മെയ്‌സൺ, കാർപ്പെന്റർ, വെൽഡർ, മെഷിനറി ഇൻസ്റ്റലേഷൻ, പെയിന്റർ, ക്ലീനിംഗ്, ഹോട്ടലുകൾ, ഡ്രൈവർ, അലുമിനിയം ഫാബ്രിക്കേഷൻ, സ്റ്റീൽ ഫാബ്രിക്കേഷൻസ്, വീട്ടുജോലിക്കാർ, ഗാർഡനിംഗ് വർക്ക്, ഹെവി വെഹിക്കിൾസ് & മെഷിനറി ഓപ്പറേറ്റർമാർ, വെബ്സൈറ്റ് ഡിസൈൻ ആൻഡ് ഹോസ്റ്റിംഗ്, സോളാർ പവർ സിസ്റ്റം ഇൻസ്റ്റലേഷൻ ഹോം സർവീസസ്, ലാബ് ടെക്നീഷ്യൻമാർ, എഞ്ചിനീയർമാരും ഡോക്ടർമാരും, ടീച്ചർമാർ, ലൗൺട്രി, ഹൗസ് കീപ്പിംഗ് തുടങ്ങിയവ.',
      educationTitle: 'വിദ്യാഭ്യാസ കൺസൾട്ടൻസി സേവനം',
      educationDescription: 'എഞ്ചിനീയറിംഗ്, മെഡിക്കൽ കോളേജ്, അഗ്രികൾച്ചർ, കമ്പ്യൂട്ടർ എഐ, എൽഎൽബി, എംബിഎ, ബിബിഎ, എംസിഎ, ലാബ് ടെക്നീഷ്യൻമാർ, ഫിസിയോതെറാപ്പി, ഡെന്റൽ, ആയുർവേദിക് തുടങ്ങിയവ.',
      legalTitle: 'അഡ്വക്കേറ്റ് & വക്കീലന്മാർ',
      legalDescription: 'പരിചയസമ്പന്നരായ അഡ്വക്കേറ്റുകളിൽ നിന്നും വക്കീലന്മാരിൽ നിന്നും പ്രൊഫഷണൽ നിയമോപദേശവും സേവനങ്ങളും ലഭ്യമാക്കുന്നു.',
    },
    testimonials:// public/locales/ml/testimonials.json
{
  "sectionTitle": "ഞങ്ങളുടെ യാത്രക്കാർ പറയുന്നത്",
  "sectionSubtitle": "ആയിരക്കണക്കിന് തൃപ്തി നേടുന്ന ഉപഭോക്താക്കളുടെ യഥാർത്ഥ അനുഭവങ്ങൾ",
  "quoteOpen": "\"",
  "indicatorAria": "സാക്ഷ്യ Дума {{index}}",

  "person1": {
    "name": "സാറा ജോൺസൺ",
    "location": "ന്യൂയോർക്ക്, USA",
    "text": "അതീവ അത്ഭുതകരമായ അനുഭവം! Tourism Paradise ടീം ഞങ്ങളുടെ ഹണിമൂൺ സമർത്ഥമായി പ്ലാൻ ചെയ്തു. ഓരോ വിശദാംശത്തിനും കൃത്യമായി ശ്രദ്ധ വഹിച്ചു; കേരളയുടെ ബാക്ക്‌വാട്ടറുകളിൽ ഏറ്റവും റോമാന്റിക് യാത്രയായി.",
    "trip": "കേരള ബാക്ക്‌വാട്ടേഴ്സ് ഹണിമൂൺ"
  },

  "person2": {
    "name": "മൈക്കൽ ചെൻ",
    "location": "ടൊറണ്ടോ, കാനഡ",
    "text": "പ്രൊഫഷണൽ സേവനം,细节 കാണാൻ വലിയ ശ്രദ്ധ. അവരുടെ പ്രാദേശിക അറിവും വിദഗ്ധ പദ്ധതിയിടലും കൊണ്ട് നമ്മുടെ കുടുംബ യാത്ര ആകെ തകരാതെ നടന്നു.",
    "trip": "കേരള കുടുംബ സാഹസികം"
  },

  "person3": {
    "name": "എമിലി റോഡ്രിഗ്വസ്",
    "location": "ബാർസിലോണ, സ്പെയിൻ",
    "text": "ഞാൻ ദൈനംദിനം ജോലി കൊണ്ട് യാത്ര ചെയ്യാറുണ്ട്, പക്ഷേ Tourism Paradise ഒരുക്കിയ ഈ വിനോദയാത്ര അതുല്യമായിരുന്നു. വ്യക്തിഗത ഇടിനററിയും എന്റെ ആയുർവേദ റിട്ട്രീറ്റിനുള്ള പിന്തുണയും എല്ലാം സമ്മർദ്ദരഹിതമാക്കി.",
    "trip": "കേരള സോളോ റിട്ട്രീറ്റ്"
  }
}
,
     houseboatList: {
      houseboatsHotelsInAlleppeyAlappuzhaKerala: 'ആലപ്പുഴ കേരളത്തിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInMunnar: 'മൂന്നാറിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInCochin: 'കൊച്ചിയിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInKumarakomLake: 'കുമാരകോം തടാകത്തിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInKottayam: 'കോട്ടയത്തെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInAlleppey: 'ആലപ്പുഴയിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInChottanikara: 'ചોറ്റാനിക്കരയിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInThiruvananthapuram: 'തിരുവനന്തപുരത്തെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInKovalamBeach: 'കോവളം ബീച്ചിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInThekkady: 'തേക്കടിയിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInWayanad: 'വയനാട്ടിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInAlappuzha: 'ആലപ്പുഴയിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInGuruvayur: 'ഗുരുവായൂരിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInVagamon: 'വാഗമണ്ണിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInAthirapillyWaterFalls: 'അതിരപ്പള്ളി വെള്ളച്ചാട്ടത്തിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInMarariBeach: 'മാരാരി ബീച്ചിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInPoovarBeach: 'പൂവാർ ബീച്ചിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInVarkalaBeach: 'വർക്കല ബീച്ചിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInAshtamudiLake: 'അഷ്ടമുടി കായലിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInKanyakumariBeach: 'കന്യാകുമാരി ബീച്ചിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInAlleppeyBeach: 'ആലപ്പുഴ ബീച്ചിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInAlappuzhaLake: 'ആലപ്പുഴ കായലിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInIndia: 'ഇന്ത്യയിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseboatsHotelsInKerala: 'കേരളത്തിലെ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      houseBoatHotelsInAlleppey: 'ആലപ്പുഴയിലെ ഹൗസ് ബോട്ട് ഹോട്ടലുകൾ',
      boatHouseHotelsInIndia: 'ഇന്ത്യയിലെ ബോട്ട് ഹൗസ് ഹോട്ടലുകൾ',
      boatHouseHotelsInKerala: 'കേരളത്തിലെ ബോട്ട് ഹൗസ് ഹോട്ടലുകൾ',
      sharingHouseboatsHotelsInAlleppey: 'ആലപ്പുഴയിലെ ഷെയറിംഗ് ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      sharingBoatHouseHotelsInKerala: 'കേരളത്തിലെ ഷെയറിംഗ് ബോട്ട് ഹൗസ് ഹോട്ടലുകൾ',
      dayTripHouseboatsHotelsInAlleppey: 'ആലപ്പുഴയിലെ ഡേ ട്രിപ്പ് ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      dayCruiseHouseboatsHotelsInAlleppey: 'ആലപ്പുഴയിലെ ഡേ ക്രൂയിസ് ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      fiveStarHouseboatsHotelsInAlleppey: 'ആലപ്പുഴയിലെ 5 സ്റ്റാർ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      fourStarHouseboatsHotelsInAlleppey: 'ആലപ്പുഴയിലെ 4 സ്റ്റാർ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      threeStarHouseboatsHotelsInAlleppey: 'ആലപ്പുഴയിലെ 3 സ്റ്റാർ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      twoStarHouseboatsHotelsInAlleppey: 'ആലപ്പുഴയിലെ 2 സ്റ്റാർ ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      budgetHouseboatsHotelsInAlleppey: 'ആലപ്പുഴയിലെ ബഡ്ജറ്റ് ഹൗസ്ബോട്ട് ഹോട്ടലുകൾ',
      standardBoatHouseHotelsInAlleppey: 'ആലപ്പുഴയിലെ സ്റ്റാൻഡേർഡ് ബോട്ട് ഹൗസ് ഹോട്ടലുകൾ'
    }
    ,
    destinationFeed: {
      loadingMore: 'കൂടുതൽ ഓഫറുകൾ ലോഡ് ചെയ്യുന്നു...',
      inquiryTitle: 'ചോദ്യങ്ങളുണ്ടോ? ബന്ധപ്പെടുക!',
      inquirySubtitle: 'നിങ്ങളുടെ അന്വേഷണം ഞങ്ങൾക്ക് അയയ്‌ക്കുക, ഞങ്ങളുടെ ടീം 24 മണിക്കൂറിനുള്ളിൽ നിങ്ങളെ ബന്ധപ്പെടും',
      yourName: 'നിങ്ങളുടെ പേര് *',
      yourEmail: 'നിങ്ങളുടെ ഇമെയിൽ *',
      phoneNumber: 'ഫോൺ നമ്പർ',
      subject: 'വിഷയം',
      yourMessage: 'നിങ്ങളുടെ സന്ദേശം *',
      sendInquiry: 'അന്വേഷണം അയയ്ക്കുക',
      bookViaWhatsapp: "വാട്ട്സ്ആപ്പ് വഴി ബുക്ക് ചെയ്യുക",
      scrollToInquiryAria: 'അന്വേഷണ ഫോമിലേക്ക് സ്ക്രോൾ ചെയ്യുക'
    },destinationOffers: {
        1: {
          title: "ഹോട്ടലുകൾ",
          description: "വന്യജീവി/വനം മേഖലകളും ബന്ധപ്പെട്ട പ്രവർത്തനങ്ങളും: • പെരിയാർ വന്യജീവി സങ്കേതം (അഥവാ പെരിയാർ ടൈഗർ റിസർവ്) • കേരളയുടെ വനം പ്രദേശങ്ങൾ •  മേഖലകൾ • മലനിരകൾ • ആന ഇടപെടൽ/ദർശനം (ആന സഫാരി, ആനപ്പുറത്ത് യാത്ര, വന്യജീവി സങ്കേതങ്ങളിൽ കാണൽ, ഉത്സവങ്ങളിൽ ആനപ്രദക്ഷിണം/ഗജമേള)."
        },

        2: {
          title: "അലാപ്പുഴ ഹൗസ്‌ബോട്ട് — പകൽ/രാത്രി ക്രൂയിസ്",
          description: "അലാപ്പുഴയിലെ 1 മുതൽ 22 വരെ ബെഡ്റൂമുകളുള്ള ഹൗസ്‌ബോട്ട് ഹോട്ടലുകൾ. ഡീലക്സ്, പ്രീമിയം, ലഗ്സ്വറി, ബജറ്റ് ബോട്ടുകൾ. മുല്ലമേറ്റ് ജെട്ടി, നെഹ്റു ട്രോഫി ബോട്ട്റേസ്, അലപ്പുഴ–അലാപ്പുഴ റൂട്ട്, കണ്ണൻകര ബോട്ട് റൂട്ടുകൾ."
        },

        3: {
          title: "അലാപ്പുഴ ഹൗസ്‌ബോട്ട് — 1 ബെഡ്റൂം പകൽ/രാത്രി",
          description: "അലാപ്പുഴ ബാക്ക്‌വാട്ടർ ഹോംസ്റ്റേ, അലപ്പുഴ ഗ്രാമം, പള്ളത്തുരുത്തി അപ്പാർട്ട്മെന്റുകൾ, അലാപ്പുഴ ടൗൺ വില്ലകൾ, ജംഗിൾ ട്രീ ഹൗസ്, ദ്വീപ് റിസോർട്ടുകൾ, തടാകം/കടൽതീര പ്രോപ്പർട്ടികൾ. 1–22 ബെഡ്റൂമുകൾ."
        },

        4: {
          title: "അലാപ്പുഴ ഡേ ക്രൂയിസ് — 1 ബെഡ്റൂം അപ്പർ ഡെക്ക് പ്രൈവറ്റ്",
          description: "1 മുതൽ 22 ബെഡ്റൂം ഹൗസ്‌ബോട്ടുകൾ — ഡീലക്സ്, ലഗ്സ്വറി, ബജറ്റ്. മുല്ലമേറ്റ് ജെട്ടി, നെഹ്റു ട്രോഫി റൂട്ട്, കണ്ണൻകര യാത്രാമാർഗ്ഗം."
        },

        5: {
          title: "കേരള ഹണിമൂൺ ഹൗസ്‌ബോട്ട്",
          description: "എയർ കണ്ടീഷൻഡ് ബെഡ്റൂം, സ്വകാര്യ ബാത്ത്‌റൂം, സുന്ദരമായ ഡെക്ക് എന്നിവയുള്ള സ്വകാര്യ ഹണിമൂൺ ബോട്ട്. കാൻഡിൽലൈറ്റ് ഡിന്നർ, പുഷ്പ അലങ്കാരം, പ്രത്യേക സൗകര്യങ്ങൾ."
        },

        6: {
          title: "അലാപ്പുഴ ഹൗസ്‌ബോട്ട് — 1 ബെഡ്റൂം അപ്പർ ഡെക്ക് പ്രൈവറ്റ് (ഡേ & നൈറ്റ്)",
          description: "അലാപ്പുഴ ബാക്ക്‌വാട്ടർ സ്റ്റേകൾ, പള്ളത്തുരുത്തി അപ്പാർട്ട്മെന്റ്, വില്ലകൾ, ദ്വീപ് റിസോർട്ട്, തടാകം/കടൽതീര പ്രദേശങ്ങൾ. 1–22 ബെഡ്റൂം ലഗ്സ്വറി ബോട്ടുകൾ."
        },

        7: {
          title: "അലാപ്പുഴ ഹൗസ്‌ബോട്ട് — അപ്പർ ഡെക്ക് പ്രൈവറ്റ് 1 ബെഡ്റൂം",
          description: "അലാപ്പുഴ, കുമരകം, കൊല്ലം, അഷ്ടമുടി, കോവളം, വർകല, ചെറായി, മറാരി, കൈനകരി, പുന്നമട, ആര്യാട് തുടങ്ങി കേരളത്തിന്റെ പ്രധാന ബാക്ക്‌വാട്ടർ പ്രദേശങ്ങൾ."
        },

        8: {
          title: "അലാപ്പുഴ ഡേ ട്രിപ്പ് — അപ്പർ ഡെക്ക് ഹൗസ്‌ബോട്ട്",
          description: "കൈനകരി, പുന്നമട, ആര്യാട്, പള്ളത്തുരുത്തി, മുല്ലമേറ്റ് ജെട്ടി പ്രദേശങ്ങളിലെ ദിനയാത്ര ക്രൂയിസ്."
        },

        9: {
          title: "അലാപ്പുഴ B2B ഹൗസ്‌ബോട്ട് — 1 ബെഡ്റൂം വില",
          description: "ഡീലക്സ്, പ്രീമിയം, ലഗ്സ്വറി. 1 ബെഡ്റൂം ഹൗസ്‌ബോട്ടുകൾ അപ്പർ ഡെക്കോടും അപ്പർ ഡെക്കില്ലാതെയും — അപ്പർ ഡെക്ക് മികച്ച കാഴ്ച ലഭ്യമാക്കുന്നു."
        },

        10: {
          title: "അലാപ്പുഴ ഷെയർഡ് ഹൗസ്‌ബോട്ട് — 2 പേർക്ക്",
          description: "കപ്പിളുകൾക്കും സുഹൃത്തുകൾക്കും അനുയോജ്യം. 1 രാത്രി സ്റ്റേ, കേരള ഭക്ഷണം, മനോഹരമായ ബാക്ക്‌വാട്ടർ കാഴ്ചകൾ. മുൻകൂർ ബുക്കിംഗ് ശുപാർശ ചെയ്യുന്നു."
        },

        11: {
          title: "അൾട്രാ പ്രീമിയം ഹൗസ്‌ബോട്ട് — അലാപ്പുഴ",
          description: "ഡീലക്സ്, പ്രീമിയം, ലഗ്സ്വറി, അൾട്രാ ലഗ്സ്വറി. 1–22 ബെഡ്റൂം ബോട്ടുകൾ. ഡേ/നൈറ്റ് ക്രൂയിസുകൾ. കൂടുതൽ സൗകര്യങ്ങളും ആഡംബരവും."
        },

        12: {
          title: "കേരള ബജറ്റ് ടൂർ പാക്കേജുകൾ",
          description: "മുന്നാർ, തെക്കാടി, പെരിയാർ, വയനാട്, വാഗമൺ, പൊൻമുടി, ഇടുക്കി, ദേവികുളം, കുത്തിക്കാനം, വട്ടവാട, കാന്തല്ലൂർ, മലപ്രദേശങ്ങളും വനമേഖലകളും."
        },

        13: {
          title: "കേരള ബോട്ടിംഗ്",
          description: "കേരളത്തിന്റെ മനോഹരമായ ബാക്ക്‌വാട്ടറുകളിൽ ശാന്തമായ ബോട്ടിംഗ് അനുഭവം. നെൽപ്പാടങ്ങൾ, ഗ്രാമ കനാലുകൾ, കേരള ഭക്ഷണം, മൂത്തപ്പൊഴിയിലെ സമാധാനതന്മ്യം."
        },

        14: {
          title: "B2B വില — കേരള ഹൗസ്‌ബോട്ട് പാക്കേജുകൾ",
          description: "1–22 ബെഡ്റൂം ഹൗസ്‌ബോട്ടുകൾ. ബജറ്റ്, പ്രീമിയം, ലഗ്സ്വറി. മുല്ലമേറ്റ് ജെട്ടി, നെഹ്റു ട്രോഫി ബോട്ട് റേസ് റൂട്ട്."
        },

        15: {
          title: "പെറ്റൽസ് ഫ്ലാവേഴ്സ്",
          description: "കേരളത്തിലെ പ്രീമിയം ഫ്ലവർ പ്ലാന്റുകൾ. പ്രത്യേകിച്ച് ഓർക്കിഡുകൾ. ഹോം ഡെക്കർ, ഗിഫ്റ്റിംഗ്, ഗാർഡനിംഗ് എന്നിവയ്ക്ക് അനുയോജ്യം."
        },

        16: {
          title: "ഓർക്കിഡ് വിൽപ്പന — പൂക്കും ഓർക്കിഡ്",
          description: "ഫലൈനോപ്സിസ്, വണ്ട എന്നിവ പോലുള്ള തിളങ്ങുന്ന ഓർക്കിഡുകൾ. നിറങ്ങളുടെയും പാറ്റേണുകളുടെയും വൈവിധ്യം. ഇൻഡോർ ഡെക്കറിന് അനുയോജ്യം. ₹399 മുതൽ."
        },

        17: {
          title: "ഓക്സിഡൈസ്ഡ് ആഭരണങ്ങൾ",
          description: "കേരളത്തിന്റെ ആന്റിക്ക് ബ്ലാക്ക് സ്റ്റൈൽ ഓക്സിഡൈസ്ഡ് ആഭരണങ്ങൾ. വെള്ളി/ഇത്തി ഉപയോഗിച്ച്. സാരിയോടും മോഡേൺ ഡ്രസ്സുകളോടും പൊരുത്തപ്പെടുന്നു."
        },

        18: {
          title: "കേരള ഹാൻഡ്ലൂം — കേരള കാസാവ് സാരികൾ",
          description: "കേരള സിൽക്ക്, കാസാവ് സാരി, കാസാവ് ചുരിദാർ മെറ്റീരിയൽ, ഹാൻഡ്ലൂം ഷർട്ടുകൾ. സ്വർണ്ണ അതിരോടുകൂടിയ വെളുത്ത സാരി കേരളത്തിന്റെ ഐക്യചിഹ്നമാണ്."
        },

        19: {
          title: "കേരള ഹാൻഡിക്രാഫ്റ്റ്സ്",
          description: "വുഡ് കാര്വിംഗ്, ബെൽ മെറ്റൽ ഉൽപ്പന്നങ്ങൾ, കോയർ മ്യാറ്റുകൾ, തേങ്ങക്കോൽ ഉൽപ്പന്നങ്ങൾ, കഥകളി മാസ്ക്കുകൾ, നെറ്റിപ്പട്ടം, അരന്മുള കണ്ണാടി."
        },

        20: {
          title: "കേരള ചിപ്സ് — വെളളരി ചിപ്സ്",
          description: "കേരളയിലെ പ്രശസ്തമായ നെന്ത്രൻ വാഴക്ക ചിപ്സ്, ചക്ക ചിപ്സ് എന്നിവ."
        },

        21: {
          title: "കേരള മസാലകൾ",
          description: "കാർഡമം, കുരുമുളക്, കറുവപ്പട്ട, ഗ്രാമ്പൂ, ജാതിക്ക തുടങ്ങിയ ഉയർന്ന നിലവാരമുള്ള മസാലകൾ. വെസ്റ്റേൺ ഘട്ടിലെ ഓർഗാനിക് ഫാമുകളിൽ നിന്നു നേരിട്ട്."
        },

        22: {
          title: "ഉണക്കമൽസ്യം",
          description: "അഷ്ടമുടി തടാകത്തിൽ നിന്നുള്ള ഉയർന്ന നിലവാരമുള്ള ഉപ്പില്ലാത്ത സൂര്യപ്രകാശത്തിൽ ഉണക്കിയ ചെമ്മീൻ. മസാല, ഗ്രേവി, ചമ്മന്തി എന്നിവയ്ക്ക് അനുയോജ്യം."
        },

        23: {
          title: "കേരള റിയൽ എസ്റ്റേറ്റ്",
          description: "പ്രധാന സ്ഥലത്ത് 4 BHK സ്വതന്ത്ര വീട് (3200 ചതുരശ്ര അടി). വില്ല, ഭൂമി, വീട്, അപ്പാർട്ട്മെന്റ് എന്നിവയുടെ വാങ്ങൽ/വിൽപ്പന/വാടക."
        },

        24: {
          title: "കേരള ലോട്ടറി — കേരള ബമ്പർ ലോട്ടറി",
          description: "കേരള സംസ്ഥാന ഔദ്യോഗിക ലോട്ടറികൾ: Win Win, Sthree Sakthi, Fifty-Fifty, Karunya. ഒന്നാം സമ്മാനം ₹1 കോടി വരെ."
        },

        25: {
          title: "കേരള ഹോം ഡെക്കർ",
          description: "കേരള ഹോം ഡെക്കർ ഉൽപ്പന്നങ്ങൾ, കോയർ ഉൽപ്പന്നങ്ങൾ. നാടൻ, പരിസ്ഥിതി സൗഹൃദ, പരമ്പരാഗത കരകൗശല ഉൽപ്പന്നങ്ങൾ."
        },

        26: {
          title: "കേരള ട്രാൻസ്പോർട്ടേഷൻ സർവീസുകൾ",
          description: "ഗുരുവായൂർ, അത്തിരപ്പിള്ളി വാട്ടർഫോൾസ്, വാഴച്ചാൽ, അർത്തുങ്കൽ ബസിലിക്ക, ഫോർട്ട് കൊച്ചി, നീലേശ്വരം, തെന്മല ഇക്കോ ടൂറിസം, പദ്മനാഭസ്വാമി ക്ഷേത്രം, ചോട്ടനിക്കര, ശബരിമല, കുതിരമലയൻ, ഊട്ടി, കോടൈക്കനാൽ, ഗോവ, ബെംഗളൂരു, ചെന്നൈ, മദുരൈ, രാമേശ്വരം, കൊയമ്പത്തൂർ, വാൽപ്പാറി, കൈനകരി, പുന്നമട, ആര്യാട്, പള്ളത്തുരുത്തി, മുല്ലമേറ്റ് ജെട്ടി."
        },

        27: {
          title: "കേരള കോയർ ഉൽപ്പന്നങ്ങൾ",
          description: "പരിസ്ഥിതി സൗഹൃദവും പൂർണമായും ബയോ-ഡിഗ്രേഡബിൾ കോയർ ഉൽപ്പന്നങ്ങൾ: മ്യാറ്റുകൾ, കയറുകൾ, ബ്രഷുകൾ, ബാഗുകൾ, ഹോം ഡെക്കർ ഉൽപ്പന്നങ്ങൾ. ദേശീയ–അന്തർദേശീയ വിപണിയിൽ വലിയ ആവശ്യകത."
        },

        28: {
          title: "ഫുഡ് ഓർഡർ ഓൺലൈൻ",
          description: "കേരളത്തിൽ ഓൺലൈൻ ഭക്ഷണം ഓർഡർ ചെയ്യാനുള്ള സൗകര്യം — പ്രാദേശിക കേരള ഭക്ഷണത്തിൽ നിന്ന് അന്താരാഷ്ട്ര വിഭവങ്ങൾ വരെ. കൊച്ചി, തിരുവനന്തപുരം, കോഴിക്കോട് തുടങ്ങിയ സ്ഥലങ്ങളിൽ സൗജന്യ ഡെലിവറി."
        }
      },
    popularDestinations: {
      title: "ഭാരതത്തിലെ കൂടുതൽ വിനോദസഞ്ചാര കേന്ദ്രങ്ങളെ കണ്ടെത്തുക",
      subtitle: "വിവിധ സംസ്ഥാനങ്ങളിലെ നഗരങ്ങളിൽ ചെയ്യാവുന്ന കാര്യങ്ങൾ അറിയൂ",
      thingsToDo: "ചെയ്യാവുന്ന കാര്യങ്ങൾ",
      comingSoonTitle: "വേഗം വരുന്നു!",
      comingSoonDescription: "{{continent}}യിലെ അത്ഭുതകരമായ സ്ഥലങ്ങൾ ഞങ്ങൾ ചേർക്കുന്നു. ഉടൻ തിരിച്ചുകാണൂ!",
      northIndia: "വടക്കേ ഇന്ത്യയിലെ വിനോദസഞ്ചാര കേന്ദ്രങ്ങൾ",
      southIndia: "തെക്കേ ഇന്ത്യയിലെ വിനോദസഞ്ചാര കേന്ദ്രങ്ങൾ",
      eastIndia: "കിഴക്കൻ-ഈശാന ഇന്ത്യയിലെ വിനോദസഞ്ചാര കേന്ദ്രങ്ങൾ",
      centralIndia: "മദ്ധ്യ ഇന്ത്യയിലെ വിനോദസഞ്ചാര കേന്ദ്രങ്ങൾ",

      delhi: {
        name: "ഡെൽഹി",
        country: "ഡെൽഹി",
        history:
          "ഇന്ത്യയുടെ തലസ്ഥാനമായ ഡെൽഹിക്ക് 2000 വർഷത്തിലധികം പഴക്കമുള്ള സമ്പന്നമായ ചരിത്രമുണ്ട്. മുഗൾ ഭരണാധികാരികൾ നിർമിച്ച പള്ളികൾ, കോട്ടകൾ, സ്മാരകങ്ങൾ എന്നിവ ഇവിടെ കാണാം. റെഡ് ഫോർട്ട്, ഇന്ത്യാ ഗേറ്റ് എന്നിവയുടെ മുഖേന, പഴമയും സമകാലികതയും യോജിക്കുന്ന നഗരമാണ് ഡെൽഹി."
      },

      jaipur: {
        name: "ജയ്പുർ",
        country: "രാജസ്ഥാൻ",
        history:
          "‘പിങ്ക് സിറ്റി’ എന്ന പേരിൽ അറിയപ്പെടുന്ന ജയ്പുർ 1727ൽ സ്ഥാപിതമായ രാജസ്ഥാന്റെ തലസ്ഥാനമാണ്. അംബർ കോട്ട, ഹവാ മഹൽ, രാജകീയ കൊട്ടാരങ്ങൾ, വർണ്ണാഭമായ മാർക്കറ്റുകൾ എന്നിവയ്‌ക്ക് പ്രശസ്തമാണ്."
      },

      agra: {
        name: "ആഗ്ര",
        country: "ഉത്തർപ്രദേശ്",
        history:
          "ലോകത്തിലെ അത്ഭുതങ്ങളിൽ ഒന്നായ താജ്മഹലിന്റെ നാടാണ് ആഗ്ര. 1556–1658 കാലത്ത് മുഗൾ സാമ്രാജ്യത്തിന്റെ തലസ്ഥാനമായിരുന്നു. ആഗ്ര കോട്ടയും ഫതേഹ്പുർ സിക്രിയും പ്രശസ്തമായ മുഗൾ ശില്പകലയുടെ ഉദാഹരണങ്ങളാണ്."
      },

      varanasi: {
        name: "വാരണാസി",
        country: "ഉത്തർപ്രദേശ്",
        history:
          "ലോകത്തിലെ ഏറ്റവും പഴക്കം ചെന്ന തുടർച്ചയായി ജനവാസമുള്ള നഗരങ്ങളിൽ ഒന്നാണ് വാരണാസി. ഗംഗാതീരത്ത് സ്ഥിതിചെയ്യുന്ന ഹിന്ദു മതത്തിലെ പ്രധാന തീർത്ഥാടന കേന്ദ്രമാണ് ഇത്."
      },

      amritsar: {
        name: "അംറിത്സർ",
        country: "പഞ്ചാബ്",
        history:
          "1577ൽ ഗുരു രാം ദാസ് സ്ഥാപിച്ച നഗരം. സിഖരുടെ ഏറ്റവും വിശുദ്ധമായ സ്വർണ്ണക്ഷേത്രം ഇവിടെയാണ്. 1919ലെ ജാലിയൻവാലാബാഗ് കൂട്ടക്കൊലയുടെ ചരിത്രവും ഇവിടെ ചേർന്നിരിക്കുന്നു."
      },

      manali: {
        name: "മനാലി",
        country: "ഹിമാചൽ പ്രദേശ്",
        history:
          "2050 മീറ്റർ ഉയരത്തിലുള്ള ഹിമാലയ പർവ്വതനിരകളിൽ സ്ഥിതിചെയ്യുന്ന മനാലി പ്രകൃതിസൗന്ദര്യത്തിനും സാഹസിക വിനോദങ്ങള്ക്കും പ്രശസ്തമാണ്. ഹഡിംബാ ദേവി ക്ഷേത്രവും സോളാങ് വാലിയും പ്രധാന ആകർഷണങ്ങൾ."
      },

      leh: {
        name: "ലെ",
        country: "ലഡാക്",
        history:
          "ലഡാക്കിന്റെ തലസ്ഥാനമായ ലെ 3500 മീറ്റർ ഉയരത്തിലുള്ള പുരാതന സിൽക്ക് റൂട്ടിലെ പ്രധാന കേന്ദ്രമാണ്. ഉഗ്രശൈലശൃംഖലകൾ, ബൗദ്ധമഠങ്ങൾ, പാങ്ങോംഗ് തടാകം എന്നിവയ്ക്ക് പ്രസിദ്ധമാണ്."
      },

      rishikesh: {
        name: "ঋഷികേശ്",
        country: "ഉത്തരാഖണ്ഡ്",
        history:
          "ലോകത്തിന്റെ യോഗ തലസ്ഥാനമായി അറിയപ്പെടുന്ന ഋഷികേശ് ഗംഗാതീരത്ത് സ്ഥിതിചെയ്യുന്ന ആത്മീയ നഗരം. ആശ്രമങ്ങൾ, യോഗകേന്ദ്രങ്ങൾ, ലക്ഷ്മൺ ഝൂല പാലം എന്നിവ പേരുകേട്ടവയാണ്."
      },

      udaipur: {
        name: "ഉദയ്പുർ",
        country: "രാജസ്ഥാൻ",
        history:
          "‘തടാകങ്ങളുടെ നഗരം’ എന്നറിയപ്പെടുന്ന ഉദയ്പുർ 1559ൽ സ്ഥാപിതമായി. സിറ്റി പാലസ്, ലേക്ക് പാലസ്, പിചോള തടാകം എന്നിവ ഇവിടെ പ്രധാന ആകർഷണങ്ങൾ‍."
      },

      shimla: {
        name: "ശിംല",
        country: "ഹിമാചൽ പ്രദേശ്",
        history:
          "ബ്രിട്ടീഷ് ഇന്ത്യയുടെ വേനൽക്കാല തലസ്ഥാനമായിരുന്നു ശിംല. വിക്ടോറിയൻ ശൈലിയിലുള്ള നിർമ്മിതികളും കാൽക്ക–ശിംല റെയിൽവേയും (UNESCO) പ്രധാന ആകർഷണങ്ങൾ."
      },

      mussoorie: {
        name: "മസൂരി",
        country: "ഉത്തരാഖണ്ഡ്",
        history:
          "‘പർവ്വതങ്ങളുടെ റാണി’ എന്നറിയപ്പെടുന്ന മസൂരി 1826ൽ സ്ഥാപിതമായി. ദൂൺ താഴ്വരയുടെ മനോഹര ദൃശ്യം, കെംപ്റ്റി ജലപാതം, ഗൺഹിൽ എന്നിവ പ്രധാന വിനോദസഞ്ചാര കേന്ദ്രങ്ങളാണ്."
      },

      srinagar: {
        name: "ശ്രീനഗർ",
        country: "ജമ്മു & കശ്മീർ",
        history:
          "കശ്മീരിന്റെ വേനൽക്കാല തലസ്ഥാനമായ ശ്രീനഗർ ഡാൽ തടാകം, മുഗൾ ഉദ്യാനങ്ങൾ‍, ഹൗസ്‌ബോട്ടുകൾ‍ എന്നിവയ്ക്ക് പ്രസിദ്ധമാണ്. ‘ഭൂമിയിലെ സ്വർഗ്ഗം’ എന്ന് വിളിക്കപ്പെടുന്നു."
      },

      jaisalmer: {
        name: "ജൈസാൽമേർ",
        country: "രാജസ്ഥാന",
        history:
          "‘സ്വർണ്ണ നഗരം’ എന്നറിയപ്പെടുന്ന ജൈസാൽമേർ 1156ൽ സ്ഥാപിതമായി. മഞ്ഞ മണൽക്കല്ലിൽ നിർമിച്ച കോട്ടയും പുരാതന ഹവേലികളും പ്രധാന ആകർഷണങ്ങൾ."
      },

      nainital: {
        name: "നായ്നിതാൽ",
        country: "ഉത്തരാഖണ്ഡ",
        history:
          "നായ്നി തടാകത്തെ ചുറ്റിപ്പറ്റി നിർമ്മിച്ച മനോഹര നഗരമാണ് നായ്നിതാൽ. ബോട്ടിംഗ്, സ്നോ വ്യൂ പോയിന്റ് തുടങ്ങിയവയ്‌ക്ക് പ്രസിദ്ധമാണ്."
      },

      vrindavan: {
        name: "വൃന്ദാവൻ",
        country: "ഉത്തർപ്രദേശ്",
        history:
          "കൃഷ്ണന്റെ ബാല്യകാലം ചെലവഴിച്ചതായി വിശ്വസിക്കുന്ന നഗരം. 5000-ത്തിലധികം ക്ഷേത്രങ്ങൾ ഉള്ള പ്രമുഖ തീർത്ഥാടന കേന്ദ്രമാണ്."
      },

      haridwar: {
        name: "ഹരിദ്വാർ",
        country: "ഉത്തരാഖണ്ഡ്",
        history:
          "ഹിന്ദുമതത്തിലെ ഏഴ് വിശുദ്ധ നഗരങ്ങളിൽ ഒന്നായ ഹരിദ്വാർ ഗംഗാ നദി സമതലത്തിലേക്ക് പ്രവേശിക്കുന്ന സ്ഥലം. കുംഭമേളയും ഹർ കി പൗറി ഗംഗാ ആരതിയും ഇവിടെ പ്രശസ്തമാണ്."
      },
        mumbai: {
        name: "മുംബൈ",
        country: "മഹാരാഷ്ട്ര",
        history:
          "‘സ്വപ്നങ്ങളുടെ നഗരം’ എന്നും ‘ഇന്ത്യയുടെ സാമ്പത്തിക തലസ്ഥാനം’ എന്നും അറിയപ്പെടുന്നു. ആദ്യം ഏഴ് ദ്വീപുകൾ ചേർന്ന് ഉണ്ടായ മുംബൈയിൽ ഗേറ്റ്വേ ഓഫ് ഇന്ത്യ, മറിൻ ഡ്രൈവ്, ബോളിവുഡ്, കോളനി-ശൈലിയിലുള്ള നിർമ്മിതികൾ എന്നിവയുണ്ട്."
      },

      bengaluru: {
        name: "ബെംഗളൂരു",
        country: "കർണാടക",
        history:
          "‘ഇന്ത്യയുടെ സിലിക്കൺ വാലി’ എന്നറിയപ്പെടുന്ന നഗരം. 1537ൽ കെംപെഗൗഡ സ്ഥാപിച്ചു. ബെംഗളൂരു പാലസ്, ടിപ്പു സുൽത്താന്റെ സമ്മർ പാലസ്, ലാൽബാഗ് ബോട്ടാണിക്കൽ ഗാർഡൻ എന്നിവയാണ് പ്രധാനമായും അറിയപ്പെടുന്നത്."
      },

      goa: {
        name: "ഗോവ",
        country: "ഗോവ",
        history:
          "1961 വരെ പോർച്ചുഗീസ് ഭരണത്തിലുണ്ടായിരുന്ന ഇന്ത്യയിലെ ഏറ്റവും ചെറുരാജ്യം. ബീച്ചുകൾ‍, നൈറ്റ്‌ലൈഫ്‍, പോർച്ചുഗീസ് ശൈലിയിൽ നിർമിച്ച പള്ളി, കോട്ടകൾ‍ എന്നിവയ്ക്ക് പ്രശസ്തമാണ്."
      },

      kerala: {
        name: "കേരളം",
        country: "കേരളം",
        history:
          "‘ദൈവത്തിന്റെ സ്വന്തം നാട്’ എന്നറിയപ്പെടുന്ന കേരളം ബാക്ക്‌വാട്ടർ‍, ആയുര്‍വേദം‍, പച്ചപ്പും പ്രകൃതിസൗന്ദര്യവും കൊണ്ട് പ്രശസ്തമാണ്."
      },

      hyderabad: {
        name: "ഹൈദരാബാദ്",
        country: "తెలങ്കാണ",
        history:
          "1591ൽ സ്ഥാപിതമായ ഹൈദരാബാദ് ബിരിയാണി‍, മുത്ത് വ്യാപാരം‍, ചാർമിനാർ‍, ഗോള்கൊണ്ട കോട്ട എന്നിവയ്ക്ക് പ്രസിദ്ധമാണ്."
      },

      chennai: {
        name: "ചെന്നൈ",
        country: "തമിഴ്നാട്",
        history:
          "മുതൽ ‘മദ്രാസ്’ എന്നറിയപ്പെട്ടിരുന്ന ചെന്നൈ തെക്കേ ഇന്ത്യയുടെ സാംസ്കാരിക കേന്ദ്രമാണ്. മറീന ബീച്ച്‍, കപാലീശ്വരർ ക്ഷേത്രം‍, സെന്റ് ജോർജ് കോട്ട എന്നിവ പ്രധാന ആകർഷണങ്ങളാണ്."
      },

      kochi: {
        name: "കൊച്ചി",
        country: "കേരളം",
        history:
          "‘അറേബ്യൻ കടലിന്റെ റാണി’ എന്നറിയപ്പെടുന്ന കൊച്ചി പുരാതന കാലം മുതൽ പ്രധാന മസാല വ്യാപാര കേന്ദ്രമായിരുന്നു. ചൈനീസ് മീൻപിടിത്ത വല, ഫോർട്ട് കൊച്ചി, മട്ടഞ്ചേരി പാലസ് എന്നിവ പ്രസിദ്ധമാണ്."
      },

      mysuru: {
        name: "മൈസൂരു",
        country: "കർണാടക",
        history:
          "കർണാടകയുടെ സാംസ്കാരിക തലസ്ഥാനം. ദശറ കാലത്ത് 1 ലക്ഷം വിളക്കുകൾ കൊണ്ട് അലങ്കരിക്കുന്ന മൈസൂർ പാലസ് ഏറ്റവും പ്രശസ്തമായ ആകർഷണമാണ്."
      },

      madurai: {
        name: "മദുരൈ",
        country: "തമിഴ്നാട്",
        history:
          "ഇന്ത്യയിലെ ഏറ്റവും പഴക്കമുള്ള നഗരങ്ങളിൽ ഒന്നായി കണക്കാക്കപ്പെടുന്ന മദുരൈ മീനാക്ഷി അമ്മൻ ക്ഷേത്രം കൊണ്ട് പ്രശസ്തമാണ്."
      },

      alleppey: {
        name: "ആലപ്പുഴ (അലപ്പി)",
        country: "കേരളം",
        history:
          "‘കിഴക്കിന്റെ വെനീസ്’ എന്നറിയപ്പെടുന്ന ആലപ്പുഴ ബാക്ക്‌വാട്ടറുകളും ഹൗസ്‌ബോട്ടുകളും നെഹ്റു ട്രോഫി ബോട്ട് റേസും കാരണം പ്രശസ്തമാണ്."
      },

      ooty: {
        name: "ഊട്ടി",
        country: "തമിഴ്നാട്",
        history:
          "‘ഹിൽ സ്റ്റേഷനുകളുടെ റാണി’ എന്നറിയപ്പെടുന്ന ഊട്ടി ബ്രിട്ടീഷുകാർ വേനൽകാല വിശ്രമകേന്ദ്രമായി വികസിപ്പിച്ചു. നിൽഗിരി മൗണ്ടൻ റെയിൽവേ (UNESCO), ചായത്തോട്ടങ്ങൾ എന്നിവ പ്രധാന ആകർഷണങ്ങളാണ്."
      },

      coorg: {
        name: "കൂർഗ് (കോടಗು)",
        country: "കർണാടക",
        history:
          "‘ഇന്ത്യയുടെ സ്കോട്‌ലാൻഡ്’ എന്ന് വിളിക്കപ്പെടുന്ന കൂർഗ് കോഫി തോട്ടങ്ങൾ‍, മലമഞ്ഞ്‍, കൊഡവ സംസ്കാരം എന്നിവയ്‌ക്ക് പ്രശസ്തമാണ്."
      },

      hampi: {
        name: "ഹംപി",
        country: "കർണാടക",
        history:
          "യുനെസ്കോ ലോക പൈതൃക കേന്ദ്രമായ ഹംപി വിജয়নഗര സാമ്രാജ്യത്തിന്റെ തലസ്ഥാനം ആയിരുന്നു. ദ്രാവിഡ ശൈലിയിലെ ക്ഷേത്രങ്ങളും പ്രാചീന ശില്പങ്ങളും ഇവിടെയുണ്ട്."
      },

      pondicherry: {
        name: "പൊണ്ടിച്ചേരി",
        country: "പൊണ്ടിച്ചേരി",
        history:
          "1954 വരെ ഫ്രഞ്ച് കോളനിയായിരുന്നു. ഫ്രഞ്ച് തെരുവുകൾ‍, സ്നേഹം നിറഞ്ഞ വീട്ടുവളപ്പുകൾ‍, ശ്രീഔരോബിന്ദോ ആശ്രമം‍, ഔറോവിൽ എന്നിവയ്ക്കായി പ്രശസ്തമാണ്."
      },
        visakhapatnam: {
        name: "വിശാഖപട്ടണം (വിശാക്)",
        country: "ആന്ധ്രപ്രദേശ്",
        history:
          "‘വിധിയുടെ നഗരം’, ‘കിഴക്കൻ തീരത്തിന്റെ മുത്ത്’ എന്നറിയപ്പെടുന്നു. പുരാതന ക്ഷേത്രങ്ങൾ‍, ബോറ ഗുഹകൾ‍, INS കുരുസുര സബ്‌മറൈൻ മ്യൂസിയം എന്നിവ ഇവിടെ പ്രശസ്തമാണ്."
      },

      tirupati: {
        name: "തിരുപ്പതി",
        country: "ആന്ധ്രപ്രദേശ്",
        history:
          "ലോകത്തിലെ ഏറ്റവും കൂടുതൽ തീർത്ഥാടകർ സന്ദർശിക്കുന്ന തിർുമല വെങ്കടേശ്വര ക്ഷേത്രം സ്ഥിതിചെയ്യുന്ന നഗരം."
      },

      kolkata: {
        name: "കൊൽക്കത്ത",
        country: "പശ്ചിമബംഗാൾ",
        history:
          "‘ജോയിയുടെ നഗരം’, ബ്രിട്ടീഷ് ഇന്ത്യയുടെ മുൻ തലസ്ഥാനം. വിക്ടോറിയ മെമ്മോറിയൽ‍, ഹൗറാ പാലം‍, സാഹിത്യ-കലയുടെ പ്രധാന കേന്ദ്രം."
      },

      gangtok: {
        name: "ഗാങ്‌ടോക്",
        country: "സിക്കിം",
        history:
          "1650 മീറ്റർ ഉയരത്തിലുള്ള സിക്കിം തലസ്ഥാനം, കാഞ്ചൻജംഗ മലനിരയുടെ മനോഹര കാഴ്ചകൾ ലഭ്യമാണ്. റുംടെക് മഠം പ്രധാന ആകർഷണം."
      },

      shillong: {
        name: "ശില്ലോങ്",
        country: "മേഘാലയ",
        history:
          "‘കിഴക്കിന്റെ സ്കോട്‌ലാൻഡ്’ എന്നറിയപ്പെടുന്ന ശില്ലോങ് പൈൻ കുന്നുകൾ‍, എലിഫന്റ് വെള്ളച്ചാട്ടം‍, സംഗീത സംസ്കാരം എന്നിവയ്ക്ക് പ്രശസ്തമാണ്."
      },

      darjeeling: {
        name: "ദാർജിലിംഗ്",
        country: "പശ്ചിമബംഗാൾ",
        history:
          "‘മലകളുടെ രാജ്ഞി’, ലോകപ്രസിദ്ധമായ ദാർജിലിംഗ് ചായയും UNESCO പൈതൃകമായ ഹിമാലയൻ ടോയ്ട്രെയിനും ഇവിടെ ആകർഷണങ്ങളാണ്."
      },
        puri: {
        name: "പൂരി",
        country: "ഒഡീഷ",
        history:
          "ഹിന്ദു മതത്തിലെ നാല് ധാമങ്ങളിൽ ഒന്നായ പൂരി, 12-ആം നൂറ്റാണ്ടിലെ ജഗന്നാഥക്ഷേത്രത്തിനായി പ്രശസ്തമാണ്. വാർഷിക രഥയാത്ര ലക്ഷക്കണക്കിന് ഭക്തരെ ആകർഷിക്കുന്നു."
      },

      guwahati: {
        name: "ഗുവാഹത്തി",
        country: "അസ്സം",
        history:
          "വടക്കുകിഴക്കേ ഇന്ത്യയുടെ കവാടം. നിളാചൽ കുന്നിലുള്ള പ്രശസ്തമായ കാമാഖ്യാദേവി ക്ഷേത്രം ഇവിടെ സ്ഥിതി ചെയ്യുന്നു."
      },

      kohima: {
        name: "കോഹിമ",
        country: "നാഗാലാൻഡ്",
        history:
          "1944ലെ രണ്ടാംലോകമഹായുദ്ധത്തിലെ ‘കോഹിമ യുദ്ധം’ കൊണ്ടാണ് പ്രസിദ്ധം. കോഹിമ വാർ സെമിത്തേരിയും ഹോൺബിൽ ഫെസ്റ്റിവലും പ്രധാന ആകർഷണങ്ങൾ."
      },

      itanagar: {
        name: "ഇറ്റാനഗർ",
        country: "അറുണാചൽ പ്രദേശ്",
        history:
          "‘ഇട്ടുകൊണ്ടുള്ള കോട്ട’ എന്നർത്ഥമുള്ള 14–15-ആം നൂറ്റാണ്ടിലെ ‘ഇറ്റാ ഫോർട്ട്’ അവശിഷ്ടങ്ങൾ ഇവിടെ കാണാം."
      },

      bhubaneswar: {
        name: "ഭുവനേശ്വർ",
        country: "ഒഡീഷ",
        history:
          "‘ക്ഷേത്രങ്ങളുടെ നഗരം’ എന്നറിയപ്പെടുന്ന ഭുവനേശ്വറിൽ 6 മുതൽ 13-ആം നൂറ്റാണ്ട് വരെയുള്ള 500-ലധികം ക്ഷേത്രങ്ങൾ ഉണ്ട്."
      },

      portblair: {
        name: "പോർട്ട് ബ്ലെയർ",
        country: "അണ്ടമാൻ & നിക്കോബാർ",
        history:
          "അണ്ടമാൻ ദ്വീപുകളുടെ പ്രവേശന കവാടം. ബ്രിട്ടീഷ് ഭരണകാലത്ത് രാഷ്ട്രീയ തടവുകാരെ അടച്ചിരുത്താൻ ഉപയോഗിച്ച സെല്ലുലാർ ജയിൽ ഇവിടെ സ്ഥിതിചെയ്യുന്നു."
      },

      pelling: {
        name: "പെല്ലിംഗ്",
        country: "സിക്കിം",
        history:
          "2150 മീറ്റർ ഉയരത്തിലുള്ള മനോഹര പട്ടണം. കാഞ്ചൻജംഗയുടെ പ്രധാന കാഴ്ചകൾ ഇവിടെനിന്ന് ലഭിക്കുന്നു. പെയ്ംമയാങ്‌ട്സെ മഠവും റബ്ദെൻസ അവശിഷ്ടങ്ങളും പ്രധാന ആകർഷണങ്ങൾ."
      },

      tawang: {
        name: "തവാങ്",
        country: "അറുണാചൽ പ്രദേശ്",
        history:
          "3048 മീറ്റർ ഉയരത്തിലുള്ള തവാങ് ഇന്ത്യയിലെ ഏറ്റവും വലിയ ബൗദ്ധമഠം സ്ഥിതിചെയ്യുന്ന സ്ഥലം. 6-മത് ദലൈലാമയുടെ ജന്മദേശം കൂടിയാണ്."
      },

      cherrapunji: {
        name: "ചെറാപൂഞ്ഞി (സോഹ്രാ)",
        country: "മേഘാലയ",
        history:
          "ഒരിക്കല്‍ ലോകത്തിലെ ഏറ്റവും കൂടുതൽ മഴ ലഭിച്ച പ്രദേശം. ജീവിച്ചിരിക്കുന്ന വേരുകൾ കൊണ്ടുള്ള 'റൂട്ട് ബ്രിഡ്ജുകൾ' ഇവിടെ പ്രശസ്തമാണ്."
      },
        imphal: {
        name: "ഇംഫാൽ",
        country: "മണിപ്പൂർ",
        history:
          "രണ്ടാം ലോകമഹായുദ്ധത്തിൽ പ്രധാന പങ്ക് വഹിച്ചു. കാങ്ങ്ല കോട്ട, ഒഴുകുന്ന ദ്വീപുകളുള്ള ലോത്തക് തടാകം എന്നിവ പ്രശസ്തമാണ്."
      },

      aizawl: {
        name: "ഐസോൾ",
        country: "മിസോറം",
        history:
          "1132 മീറ്റർ ഉയരത്തിലുള്ള മനോഹര പർവ്വത നഗരം. മിസോ സംസ്കാരവും കൈവിണ്ണൽ പാരമ്പര്യവും ഇവിടത്തെ പ്രത്യേകതയാണ്."
      },

      agartala: {
        name: "അഗർത്തല",
        country: "ത്രിപുര",
        history:
          "ഉജ്ജയന്ത പാലസ്‍, തടാകത്തിനുള്ളിലെ നീർമഹൽ‍, പുരാതന ത്രിപുരസുന്ദരി ക്ഷേത്രം എന്നിവയ്ക്കു പ്രസിദ്ധമാണ്."
      },

      khajuraho: {
        name: "ഖജുരാഹോ",
        country: "മധ്യപ്രദേശ്",
        history:
          "UNESCO പൈതൃക പട്ടികയിലുള്ള ക്ഷേത്രനഗരം. 950–1050 കാലത്തെ ഹിന്ദു-ജൈന ക്ഷേത്രങ്ങളിലെ മനോഹര ശില്പങ്ങൾ പ്രശസ്തമാണ്."
      },

      bhopal: {
        name: "ഭോപ്പാൽ",
        country: "മധ്യപ്രദേശ്",
        history:
          "‘തടാകങ്ങളുടെ നഗരം’. ഏഷ്യയിലെ ഏറ്റവും വലിയ പള്ളികളിലൊന്നായ തജ്-ഉൽ-മസ്ജിദ്‍, സാഞ്ചി സ്തൂപം (UNESCO) എന്നിവ ഇവിടെ സ്ഥിതിചെയ്യുന്നു."
      },

      gwalior: {
        name: "ഗ്വാളിയോർ",
        country: "മധ്യപ്രദേശ്",
        history:
          "ഉയർന്ന പാറമലയിലെ കോട്ടയ്ക്കും സംഗീത പാരമ്പര്യത്തിനും പ്രസിദ്ധമാണ്."
      },

      indore: {
        name: "ഇന്ദോർ",
        country: "മധ്യപ്രദേശ്",
        history:
          "മധ്യപ്രദേശിന്റെ വാണിജ്യ തലസ്ഥാനവും ഇന്ത്യയിലെ ഏറ്റവും ശുചിയായ നഗരവുമാണ്."
      },

      orchha: {
        name: "ഓർച്ച",
        country: "മധ്യപ്രദേശ്",
        history:
          "1531-ൽ സ്ഥാപിതമായ ബുണ്ടേല രാജകുടുംബത്തിന്റെ പുരാതന തലസ്ഥാനം. ജഹാംഗീർ മഹൽ‍, രാജ് മഹൽ‍ എന്നിവ പ്രധാന ആകർഷണങ്ങൾ."
      },

      ujjain: {
        name: "ഉജ്ജയിൻ",
        country: "മധ്യപ്രദേശ്",
        history:
          "ഹിന്ദു മതത്തിലെ ഏഴ് വിശുദ്ധ നഗരങ്ങളിൽ ഒന്നാണ്. മഹാകാലേശ്വർ ജ്യോതിര്ലിംഗം ഇവിടെ സ്ഥിതിചെയ്യുന്നു."
      },

      ranchi: {
        name: "റാഞ്ചി",
        country: "ഝാർഖണ്ഡ്",
        history:
          "‘വെള്ളച്ചാട്ടങ്ങളുടെ നഗരം’. ഹുണ്ട്രൂ ഫാൾസ്‍, ജോന ഫാൾസ്‍, ദസം ഫാൾസ്‍ എന്നിവയ്ക്കു പ്രസിദ്ധമാണ്."
      },

      daman: {
        name: "ദമൻ",
        country: "ദമൻ & ദ്യൂ",
        history:
          "1961 വരെ പോർച്ചുഗീസ് ഭരണത്തിലുള്ള പ്രദേശം. കോട്ടകളും ബീച്ചുകളും ഇപ്പോഴും ആ സ്വാധീനം പ്രതിഫലിപ്പിക്കുന്നു."
      },

      silvassa: {
        name: "സിൽവാസ്സ",
        country: "ദാദ്ര & നഗർ ഹവേലി",
        history:
          "വാർലി ആർട്ട്‍, പൈതൃക മ്യൂസിയങ്ങൾ‍, തടാകങ്ങളും പാർക്കുകളും സിൽവാസ്സയുടെ പ്രത്യേകതയാണ്."
      },

      nagpur: {
        name: "നാഗ്പൂർ",
        country: "മഹാരാഷ്ട്ര",
        history:
          "‘ഓറഞ്ച് സിറ്റി’, ഇന്ത്യയുടെ ഭൗമശാസ്ത്ര കേന്ദ്രം. ഡീക്ഷാഭൂമി ബൗദ്ധ തീർത്ഥാടന കേന്ദ്രം ഇവിടെ നിലനിൽക്കുന്നു."
      },

      raipur: {
        name: "റായ്പുർ",
        country: "ഛത്തീസ്ഗഡ്",
        history:
          "പ്രാചീൻ ക്ഷേത്രങ്ങളും ബൗദ്ധ പൈതൃക സ്ഥലങ്ങളും സന്ദർശിക്കാൻ പ്രധാന കവാടം."
      },

      jabalpur: {
        name: "ജബൽപുർ",
        country: "മധ്യപ്രദേശ്",
        history:
          "ഭേദാഘാട്ടിലെ മാർബിൾ രോക്കുകളും ധൂവന്ധാർ വെള്ളച്ചാട്ടവും ഇവിടുത്തെ പ്രധാന ആകർഷണങ്ങൾ."
      },

      pachmarhi: {
        name: "പച്ച്മാർഹി",
        country: "മധ്യപ്രദേശ്",
        history:
          "മധ്യപ്രദേശിലെ ഏക ഹിൽസ്റ്റേഷൻ. ബ്രിട്ടീഷ് കാലത്തെ നിർമ്മിതികൾ‌, ഗുഹാചിത്രങ്ങൾ‍, വെള്ളച്ചാട്ടങ്ങൾ‍ ഇവിടെ കാണാം."
      },

      amarkantak: {
        name: "അമർകണ്ഠക്",
        country: "മധ്യപ്രദേശ്",
        history:
          "പവിത്ര നർമ്മദയും സോൺ നദിയും ജന്മമെടുക്കുന്ന തീർത്ഥാടന കേന്ദ്രം."
      },

      chitrakoot: {
        name: "ചിത്രകൂട്",
        country: "മധ്യപ്രദേശ് / ഉത്തർപ്രദേശ്",
        history:
          "രാമായണ പ്രകാരം ശ്രീരാമൻ 14 വർഷത്തെ വനവാസത്തിൽ 11 വർഷം ചിലവഴിച്ച സ്ഥലം."
      },
      bhimbetka: {
        name: "ഭീംബെറ്റ്ക",
        country: "മധ്യപ്രദേശ്",
        history:
          "UNESCO പൈതൃക പട്ടികയിൽ ഉൾപ്പെട്ട ഭീംബെറ്റ്കയിൽ 30,000 വർഷം പഴക്കമുള്ള 500-ലധികം ഗുഹാചിത്രങ്ങൾ കാണാം."
      }
    },
    footer: {
      description: 'അവിസ്മരണീയമായ യാത്രകൾക്കുള്ള നിങ്ങളുടെ വിശ്വസ്ത യാത്രാ കൂട്ടാളി. ജീവിതകാലം മുഴുവൻ നിലനിൽക്കുന്ന ഓർമ്മകൾ സൃഷ്ടിക്കുന്നു.',
      destinations: {
        title: 'ലക്ഷ്യസ്ഥാനങ്ങൾ',
        keralaBudgetHouseboat: 'കേരള ബഡ്ജറ്റ് ഹൗസ്ബോട്ട്',
        luxuryTopEndHouseboat: 'ലക്ഷ്വറി ടോപ്പ് എൻഡ് ഹൗസ്ബോട്ട്',
        b2bPriceKeralaHouseboats: 'ബി2ബി വില കേരള ഹൗസ്ബോട്ടുകൾ',
        houseboatsInAlappuzha: 'ആലപ്പുഴയിലെ ഹൗസ്ബോട്ടുകൾ',
        budgetBoatHouseAllepey: 'ബഡ്ജറ്റ് ബോട്ട് ഹൗസ് ആലപ്പുഴ',
        budgetBoatHouseAlappuzha: 'ബഡ്ജറ്റ് ബോട്ട് ഹൗസ് ആലപ്പുഴ',
        budgetHouseboatAllepey: 'ബഡ്ജറ്റ് ഹൗസ്ബോട്ട് ആലപ്പുഴ',
        budgetHouseboatAlappuzha: 'ബഡ്ജറ്റ് ഹൗസ്ബോട്ട് ആലപ്പുഴ',
        budgetAlleppeyBoatHouse: 'ബഡ്ജറ്റ് ആലപ്പുഴ ബോട്ട് ഹൗസ്',
        spotBookingBoatHouse: 'സ്പോട്ട് ബുക്കിംഗ് ബോട്ട് ഹൗസ്',
        prepaidTaxiCochinAirport: 'കൊച്ചി എയർപോർട്ടിൽ പ്രീപെയ്ഡ് ടാക്സി സർവീസ്',
        budgetAlappuzhaHouseboats: 'ബഡ്ജറ്റ് ആലപ്പുഴ ഹൗസ്ബോട്ടുകൾ',
        budgetAlleppeyHouseboats: 'ബഡ്ജറ്റ് ആലപ്പുഴ ഹൗസ്ബോട്ടുകൾ',
        b2bAlleppeyHouseboats: 'ബി2ബി ആലപ്പുഴ ഹൗസ്ബോട്ടുകൾ',
        privateAlleppeyHouseboats: 'സ്വകാര്യ ആലപ്പുഴ ഹൗസ്ബോട്ടുകൾ',
        houseboatsInIndia: 'ഇന്ത്യയിലെ ഹൗസ്ബോട്ടുകൾ',
        sharedHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ പങ്കുവെച്ച ഹൗസ്ബോട്ടുകൾ',
        sharingHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ പങ്കുവെക്കുന്ന ഹൗസ്ബോട്ടുകൾ',
        sharingBoathouseInAlleppey: 'ആലപ്പുഴയിലെ പങ്കുവെക്കുന്ന ബോട്ട്ഹൗസ്',
        clubbingHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ ക്ലബ്ബിംഗ് ഹൗസ്ബോട്ടുകൾ',
        clubbingBoathouseInAlleppey: 'ആലപ്പുഴയിലെ ക്ലബ്ബിംഗ് ബോട്ട്ഹൗസ്',
        luxuryHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ ലക്ഷ്വറി ഹൗസ്ബോട്ടുകൾ',
        premiumHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ പ്രീമിയം ഹൗസ്ബോട്ടുകൾ',
        deluxeHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ ഡീലക്സ് ഹൗസ്ബോട്ടുകൾ',
        standardHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ സ്റ്റാൻഡേർഡ് ഹൗസ്ബോട്ടുകൾ',
        ultraLuxuryHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ അൾട്രാ ലക്ഷ്വറി ഹൗസ്ബോട്ടുകൾ',
        ultraLuxurySharingHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ അൾട്രാ ലക്ഷ്വറി പങ്കുവെക്കുന്ന ഹൗസ്ബോട്ടുകൾ',
        bestHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ മികച്ച ഹൗസ്ബോട്ടുകൾ',
        bestLuxuryHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ മികച്ച ലക്ഷ്വറി ഹൗസ്ബോട്ടുകൾ',
        bestPremiumHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ മികച്ച പ്രീമിയം ഹൗസ്ബോട്ടുകൾ',
        bestDeluxeHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ മികച്ച ഡീലക്സ് ഹൗസ്ബോട്ടുകൾ',
        bestStandardHouseboatsInAlleppey: 'ആലപ്പുഴയിലെ മികച്ച സ്റ്റാൻഡേർഡ് ഹൗസ്ബോട്ടുകൾ',
        bestAlappuzhaHouseboatPackages: 'മികച്ച ആലപ്പുഴ ഹൗസ്ബോട്ട് പാക്കേജുകൾ',
        bestAlappuzhaBoatHousePackages: 'മികച്ച ആലപ്പുഴ ബോട്ട് ഹൗസ് പാക്കേജുകൾ'
      },
      services: { title: 'സേവനങ്ങൾ', flightBooking: 'ഫ്ലൈറ്റ് ബുക്കിംഗ്', hotelReservation: 'ഹോട്ടൽ റിസർവേഷൻ', tourPackages: 'ടൂർ പാക്കേജുകൾ' },
      company: { title: 'കമ്പനി', aboutUs: 'ഞങ്ങളെക്കുറിച്ച്', contact: 'ബന്ധപ്പെടുക' },
      support: { title: 'പിന്തുണ', helpCenter: 'സഹായ കേന്ദ്രം', terms: 'സേവന നിബന്ധനകൾ', privacy: 'സ്വകാര്യതാ നയം', refund: 'റീഫണ്ട് നയം', faq: 'പതിവുചോദ്യങ്ങൾ' },
      copyright: '© {{year}} ടൂറിസം പാരഡൈസ്. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.'
    }
  },
};

// Clear any saved language from localStorage to force a default on reload
localStorage.removeItem('i18nextLng');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;