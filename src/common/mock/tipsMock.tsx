import { TipCategory } from '../types/tip';

// Define tips array
const TIPS_MOCK: TipCategory[] = [
    // Category: Before You Go
    {
        category: 'Before You Go',
        tips: [
            {
                title: 'Visa Requirements',
                content: {
                    description:
                        'Morocco offers visa-free entry for up to 90 days for tourists from countries like the USA, UK, EU, Australia, and Canada. Always check the latest visa requirements with the Moroccan embassy or consulate in your country before your trip.',
                    highlights: [],
                },
            },
            {
                title: 'Currency Exchange',
                content: {
                    description:
                        "While you can exchange some currency into Moroccan Dirhams (MAD) before arriving, you'll often find better exchange rates at local banks or ATMs in major cities. Note: Dirhams cannot be taken out of Morocco, so convert sparingly.",
                    highlights: [],
                },
            },
            {
                title: 'Cultural Sensitivity',
                content: {
                    description:
                        'Morocco is a tapestry of tradition and modernity. While cities are more liberal, dressing modestly (covering shoulders and knees) is a sign of respect, especially in rural areas and when visiting religious sites.',
                    highlights: [],
                },
            },
        ],
    },
    {
        category: 'Language Tips',
        tips: [
            {
                title: 'Basic Arabic and Tamazight',
                content: {
                    description:
                        'English is widely understood in tourist areas, but knowing some Arabic or Tamazight can enhance your experience.',
                    highlights: [
                        "Hello: 'Salam' (Arabic) / 'Azul' (Tamazight)",
                        "Thank you: 'Shukran' (Arabic) / 'Tanmert' (Tamazight)",
                        "Yes: 'Naam' (Arabic) / 'Yaah' (Tamazight)",
                        "No: 'La' (Arabic) / 'Oho' (Tamazight)",
                        "How much is this? 'Bishhal hada?' (Arabic)",
                    ],
                },
            },
        ],
    },
    // Category: Safety and Health
    {
        category: 'Safety and Health',
        tips: [
            {
                title: 'Travel Insurance',
                content: {
                    description:
                        'Choose a policy that covers medical expenses, trip cancellations, and theft. This is crucial for peace of mind, especially when engaging in activities like trekking or hiking.',
                    highlights: [],
                },
            },
            {
                title: 'Water Safety',
                content: {
                    description:
                        'Stick to bottled or filtered water to avoid gastrointestinal issues. Ice in drinks and salads can be risky in places with questionable water quality. (Better Always to Ask your Guide or Driver).',
                    highlights: [],
                },
            },
            {
                title: 'Getting Around',
                content: {
                    description:
                        "Moroccan Etiquette: Bargaining is expected in souks and markets. Start by offering about 70% of the asking price and negotiate from there. It's a part of the culture and often ends with both parties satisfied.",
                    highlights: [],
                },
            },
            {
                title: 'Navigate with Confidence',
                content: {
                    description:
                        "While cities dazzle with their maze-like medinas, getting lost is part of the charm. Always have a map app downloaded for offline use. In all Morocco, hiring a local guide isn't just helpful; it's a chance to hear stories and insights you won't find in guidebooks.",
                    highlights: [],
                },
            },
        ],
    },
    // Category: Food and Drink
    {
        category: 'Food and Drink',
        tips: [
            {
                title: 'Culinary Adventure',
                content: {
                    description:
                        'Must-try dishes include Tagine (slow-cooked stew), Couscous (especially on Fridays), Medfouna or Abadir (Berber Pizza) and Pastilla (sweet and Savory pie). For vegetarians, many restaurants offer vegetable tagines and salads.',
                    highlights: [],
                },
            },
            {
                title: 'Dietary Restrictions',
                content: {
                    description:
                        'Major cities like Marrakech and Casablanca have restaurants catering to various dietary needs. Always communicate your dietary restrictions clearly, as vegetarian and vegan diets are still becoming more understood.',
                    highlights: [],
                },
            },
        ],
    },
    // Category: Experiences Not to Miss
    {
        category: 'Experiences Not to Miss',
        tips: [
            {
                title: 'Diverse Landscapes',
                content: {
                    description:
                        'Book a guided camel trek in the Sahara for an unforgettable night under the stars. The Atlas Mountains offer stunning hiking opportunities. Coastal towns like Essaouira provide a breezy escape from the heat with beautiful beaches and fresh seafood.',
                    highlights: [],
                },
            },
            {
                title: 'Cultural Experiences',
                content: {
                    description:
                        'A visit to a traditional hammam (bathhouse) is a must for an authentic Moroccan experience. Explore the historic medinas of Fes and Marrakech for a glimpse into centuries-old Moroccan life.',
                    highlights: [],
                },
            },
            {
                title: 'Local Festivals',
                content: {
                    description:
                        "Check the calendar for festivals like the Gnaoua World Music Festival in Essaouira or the Rose Festival in El Kelaa M'Gouna. They offer vibrant insights into Moroccan culture and traditions.",
                    highlights: [],
                },
            },
        ],
    },
    // Category: Respect for Nature and Local Communities
    {
        category: 'Respect for Nature and Local Communities',
        tips: [
            {
                title: 'Eco-friendly Practices',
                content: {
                    description:
                        'While exploring Morocco’s diverse landscapes, from the Sahara to the Atlas Mountains, practice leave-no-trace principles. Use refillable water bottles and bags, and choose eco-friendly tours and accommodations.',
                    highlights: [],
                },
            },
            {
                title: 'Shop with a Heart',
                content: {
                    description:
                        'Supporting Local & Sustainable Souvenirs: Buying directly from artisans not only gets you a better deal and good quality, but also supports the local economy. Consider visiting cooperatives, especially those run by women, for authentic crafts like carpets/rugs, pottery, roses and argan oil products.',
                    highlights: [],
                },
            },
        ],
    },
    // Category: Connectivity
    {
        category: 'Connectivity',
        tips: [
            {
                title: 'Wi-Fi and SIM Cards',
                content: {
                    description:
                        'Wi-Fi is widely available in hotels, cafes, and public spaces in major cities. For a local SIM card, Maroc Telecom, Orange, and Inwi are the main providers; they offer affordable data packages, making it easier to stay connected and navigate with apps like Google Maps.',
                    highlights: [],
                },
            },
        ],
    },
    // Category: Embrace the Local Pace
    {
        category: 'Embrace the Local Pace',
        tips: [
            {
                title: 'Moroccan Time',
                content: {
                    description:
                        "Adjust your watch and mindset to ‘Moroccan time.’ Delays are not uncommon; they’re an opportunity to pause and soak in your surroundings. Patience is not just a virtue here; it's a way of life.",
                    highlights: [],
                },
            },
        ],
    },
    // Category: Embrace the Unexpected
    {
        category: 'Embrace the Unexpected',
        tips: [
            {
                title: 'Open Heart, Open Mind',
                content: {
                    description:
                        'Morocco is a land of surprises. From spontaneous invitations to tea to discovering hidden gardens in the heart of the city, the unexpected moments often become the most cherished memories.',
                    highlights: [],
                },
            },
        ],
    },
];

// Export tips array
export default TIPS_MOCK;
