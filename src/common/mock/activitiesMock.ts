import { Activity } from '../types/activity';

export const ACTIVITIES_MOCK: Activity[] = [
    {
        id: 'moroccan-cooking-session',
        title: 'Moroccan Cooking Session Led by a Local Chef',
        description:
            'This experience offers a Moroccan culinary immersion that includes purchasing ingredients at a local market, learning how to prepare mint tea, and cooking several traditional dishes like tajines, focusing on authentic techniques of chopping, peeling, and seasoning. The 4-hour cooking class is designed to be interactive and educational, providing a deep understanding of Moroccan traditions. The session ends with tasting the prepared dishes and access to online recipes for further culinary exploration.',
        descriptionImg: '',
        pickUpTime: '10:00 or 15:00 local time your hotel/Riad',
        schedule: `
    Join Vita Morocco for an intimate journey into the heart of Moroccan cuisine.
    Starting with a vibrant local market tour, we handpick fresh ingredients, diving
    into the colourful bounty our region offers (note: market visits are not available
    on Friday afternoons). Upon returning home, our adventure begins with the
    ceremonial preparation of Moroccan mint tea, setting the stage for a day of
    culinary discovery and camaraderie.
    Under the guidance of our local chefs, you'll delve into the art of Moroccan
    cooking, mastering the peel, chop, and spice techniques handed down through
    generations. Our kitchen becomes a gateway to Morocco's rich cultural tapestry
    as we craft 3 to 4 distinct dishes, from Savory tajines to other traditional
    delights, each offering a new skill and story.This immersive 4-hour class is more than just a cooking lesson; it's a hands-on
    experience steeped in tradition, history, and the communal spirit of Moroccan
    dining. You'll work side by side with fellow travellers, forging connections and
    memories that extend beyond the kitchen.
    As our time together draws to a close, we gather to Savor the fruits of our
    labour, enjoying the dishes we've created in true Moroccan style. The experience
    doesn't end here; we invite you to take a piece of Morocco home with you,
    sharing exclusive recipes through our website for you to recreate and share with
    loved ones.
    Embrace the essence of Moroccan hospitality and culinary heritage with Vita
    Morocco, where every dish tells a story and every flavour takes you on a journey.
    `,
        highlights: [
            'Cook alongside a seasoned chef',
            'Experience making authentic Moroccan mint tea from scratch',
            'Embark on a guided market tour to select the freshest ingredients like a true local',
            'Unlock the secrets to traditional Moroccan dishes with easy-to-follow recipes',
            "Enjoy the fruits of your labour by savouring the dishes you've created in a friendly, communal setting",
            'Take home not just recipes, but memories and skills that will last a lifetime',
            'After the class, get exclusive access to purchase high-quality culinary tools and spices at preferential rates',
        ],
        languages: ['English', 'Spanish', 'French', 'Arabic'],
        location: 'Marrakech',
        cancelation: 'Free',
        groupRequirement: 'Minimum of 2 participants',
        pricing: ['Starts from 60 Euro per Person'],
        includedServices: [
            'Cooking Class with Local Chef',
            'Pick up from your hotel in Marrakech',
            'Licensed English/French/Spanish/Italian speaking local guide',
            'Quality Service',
            'Mint Tea & Water',
            'Traditional Meal for Lunch or Dinner',
        ],
        excludedServices: ['Extra Drinks', 'Tips', 'What not indicated in included'],
        duration: 4,
        durationUnit: 'hours',
        freeDuration: false,
        frequency: 'Available every day',
        importantDetails: [
            'Wear comfy, modest clothing',
            'Inform about dietary needs/allergies',
            'Drink water, especially in the heat',
            'Choose from English, Spanish, French, Arabic',
            'Embrace and respect local traditions',
            'No market visits on Friday PM',
            'Dive into communal dining',
            'Stick to pick-up schedule',
            'Advance notice for cancellations appreciated',
        ],
        summaryImg: '',
        titleImg: '',
        highlightImgs: [],
        mapLink: '',
    },
    {
        id: 'marrakech-city-tour-hammam-dinner',
        title: 'Marrakech City Tour, Hammam & Traditional Dinner',
        description:
            'Experience the enchantment of Marrakech with our exclusive tour, blending the allure of ancient traditions with the vibrancy of contemporary life. Begin your journey with a convenient pickup, setting the stage for an unforgettable exploration of Jemaa El Fna Square, where the past and present merge seamlessly...',
        descriptionImg: '',
        pickUpTime: '09:00 local time your hotel/Riad',
        schedule: `
        Join Vita Morocco for an intimate journey into the heart of Moroccan cuisine.
        Starting with a vibrant local market tour, we handpick fresh ingredients, diving
        into the colourful bounty our region offers (note: market visits are not available
        on Friday afternoons). Upon returning home, our adventure begins with the
        ceremonial preparation of Moroccan mint tea, setting the stage for a day of
        culinary discovery and camaraderie.
        Under the guidance of our local chefs, you'll delve into the art of Moroccan
        cooking, mastering the peel, chop, and spice techniques handed down through
        generations. Our kitchen becomes a gateway to Morocco's rich cultural tapestry
        as we craft 3 to 4 distinct dishes, from Savory tajines to other traditional
        delights, each offering a new skill and story.This immersive 4-hour class is more than just a cooking lesson; it's a hands-on
        experience steeped in tradition, history, and the communal spirit of Moroccan
        dining. You'll work side by side with fellow travellers, forging connections and
        memories that extend beyond the kitchen.
        As our time together draws to a close, we gather to Savor the fruits of our
        labour, enjoying the dishes we've created in true Moroccan style. The experience
        doesn't end here; we invite you to take a piece of Morocco home with you,
        sharing exclusive recipes through our website for you to recreate and share with
        loved ones.
        Embrace the essence of Moroccan hospitality and culinary heritage with Vita
        Morocco, where every dish tells a story and every flavour takes you on a journey.
    `,
        highlights: [
            'Visiting the mesmerizing Koutoubia Mosque and the famous EI Bahia Palace',
            'Enjoying a visit to Saadian Tombs and Medrassa Ben Youssef',
            'Exploring the Djemaa El Fna square, the vibrant streets and colourful souks',
            'Getting the feel of Morocco as exotic and oriental - another world',
            "Discover Marrakech's heart with a professional guide, unveiling the secrets of the ancient Medina and its storied monuments",
            "Stroll leisurely through Marrakech's alleys in the afternoon, admiring the captivating traditional architecture",
            'Unwind in a traditional Marrakech spa, embracing the rejuvenation of natural wellness treatments',
            'Relish a tranquil dinner in the Medina, celebrating the rich Flavors of Moroccan gastronomy',
        ],
        languages: ['English', 'Spanish', 'French', 'Arabic', 'Italian'],
        location: 'Marrakech',
        cancelation: 'Free',
        groupRequirement: 'Minimum of 2 participants',
        pricing: ['Starts from 76 Euro per Person'],
        includedServices: [
            'Pick up from your hotel in Marrakech',
            'Licensed English/French/Spanish/Italian speaking local guide',
            'Quality Service',
            'Mint Tea',
            'Traditional Meal for Dinner (Full menu)',
            'Visit to Bahia Palace, Medrassa Ben Youssef, Saadien Tombs, Souks and The Koutoubia Mosque',
        ],
        excludedServices: ['Lunches', 'Drinks', 'Entrances Fees', 'Tips', 'What not indicated in included'],
        duration: 8,
        durationUnit: 'hours',
        freeDuration: false,
        frequency: 'Available every day',
        importantDetails: [
            'Confirmation: Confirmed upon payment',
            'Cancellation: Free up to 24 hours before the tour. No refunds for late cancellations',
            'Children: Discounts may apply for under 12s. Inquire upon booking',
            'Hammam Notice: Alert us to any allergies or health issues',
            'Dress Code: Respectful attire for religious sites; shoulders and knees covered',
            'Weather: Sun protection recommended; a light jacket may be needed in the evening',
            'Dietary Needs: Inform us in advance for dietary accommodations',
            'Language: Tours in English, French, Spanish, Italian. Specify preference when booking',
        ],
        summaryImg: '',
        titleImg: '',
        highlightImgs: [],
        mapLink: '',
    },
    {
        id: 'quad-biking-sahara-merzouga',
        title: 'Quad Biking Thrills: Sahara Adventure in Merzouga',
        description:
            'Experience the thrill of a Quad adventure in the breathtaking Merzouga desert. Begin at the edge of the Sahara, quickly mastering the quad under the guidance of experts. Navigate through vast golden dunes, feeling the adrenaline of ascents and descents amidst the stunning desert landscape...',
        descriptionImg: '',
        pickUpTime: 'You can choose the time',
        schedule: `
    PROGRAM :
    Quad Biking & Sandboarding in Merzouga Desert
    Embark on an exhilarating Quad and sandboarding adventure in the enchanting Merzouga desert, where the vast expanses of the Sahara come alive under your wheels and at your feet. Your journey begins at the desert's edge, greeted by the majestic dunes glowing under a clear blue sky. After a safety briefing and a quick how-to on Quad, you gear up and set off, engines roaring, ready to conquer the shifting sands...
    `,
        highlights: [
            "Begin at Sahara's edge, under a clear blue sky",
            'Safety first: Quad biking and sandboarding instructions',
            'Ride quads over golden dunes for thrilling ascents and descents',
            'Slide down dunes: Experience the joy of sandboarding',
            'Pause atop high dunes for breathtaking panoramic views',
            'Spot desert wildlife: foxes and camels in their natural habitat',
            'Witness the desert glow at sunset, a spectacle of colours',
            'Feel a deep connection to nature, blending exhilaration with peace',
            'Create unforgettable memories in the timeless Sahara landscape',
        ],
        languages: ['English', 'Spanish', 'French', 'Arabic', 'Italian'],
        location: 'Merzouga',
        cancelation: 'Free',
        pricing: ['Single Quad / 1 Person: 45 Euro per 1 hour', 'Single Quad / 2 Persons: 75 Euro per 1 hour'],
        includedServices: [
            'Expert Guides during the activity',
            'Quad and sandboarding gear plus safety helmets',
            'Safety instructions briefing',
            'Activity permits and entrance fees',
            'Basic accident insurance',
            'Water and light snacks',
            'Fotos & Videos',
        ],
        excludedServices: [
            'Food',
            'Drinks',
            'Tips',
            'Comprehensive travel insurance',
            'What not indicated in included',
        ],
        duration: NaN, // You can specify the duration based on the provided information
        durationUnit: 'hours',
        freeDuration: true,
        frequency: 'Available every day',
        importantDetails: [
            'Booking in Advance: Reservations are required at least 24 hours in advance',
            'Age Requirements: Minimum age for quad biking is 14 years. Children under 14 can participate in the Activity under adult supervision',
            'Health & Safety: Participants must be in good health and not suffer from any condition that could be exacerbated by this activity. A waiver must be signed',
            'Equipment Provided: All necessary equipment for quad biking and sandboarding is provided, including helmets and safety gear',
            'Dress Code: Comfortable clothing suitable for outdoor activities and closed shoes are recommended. Sunscreen and sunglasses are advised',
            'Cancellation Policy: Cancellations made 10 hours before the scheduled time are eligible for a full refund. Cancellations made less than 10 hours in advance will incur a 50% cancellation fee',
            'Weather Conditions: Activities are subject to weather conditions and may be rescheduled in the case of adverse weather',
            'Insurance: Participants are covered by basic accident insurance, but travel insurance with coverage for adventure activities is highly recommended',
            'Guided Experience: All adventures are accompanied by experienced and knowledgeable guides to ensure safety and provide assistance',
        ],
        summaryImg: '',
        titleImg: '',
        highlightImgs: [],
        mapLink: '',
    },
];