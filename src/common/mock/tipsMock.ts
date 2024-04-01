// Define tips array
const TIPS_MOCK = [
    // Category: Before You Go
    {
        category: {
            en: 'Before You Go',
            fr: 'Avant de partir',
            es: 'Antes de ir',
            pt: 'Antes de ir',
            ar: '',
        },
        tips: [
            {
                title: {
                    en: 'Visa Requirements',
                    fr: 'Exigences en matière de visa',
                    es: 'Requisitos de visa',
                    pt: 'Requisitos de visto',
                    ar: '',
                },
                content: {
                    description: {
                        en: 'Morocco offers visa-free entry for up to 90 days for tourists from countries like the USA, UK, EU, Australia, and Canada. Always check the latest visa requirements with the Moroccan embassy or consulate in your country before your trip.',
                        fr: "Le Maroc offre une entrée sans visa jusqu'à 90 jours pour les touristes en provenance de pays comme les États-Unis, le Royaume-Uni, l'Union européenne, l'Australie et le Canada. Vérifiez toujours les dernières exigences en matière de visa auprès de l'ambassade ou du consulat marocain de votre pays avant votre voyage.",
                        es: 'Marruecos ofrece entrada sin visa por hasta 90 días para turistas de países como EE. UU., Reino Unido, UE, Australia y Canadá. Siempre verifique los últimos requisitos de visa con la embajada o consulado de Marruecos en su país antes de su viaje.',
                        pt: 'Marrocos oferece entrada sem visto por até 90 dias para turistas de países como EUA, Reino Unido, UE, Austrália e Canadá. Sempre verifique os últimos requisitos de visto com a embaixada ou consulado marroquino em seu país antes da sua viagem.',
                        ar: '',
                    },
                    highlights: [],
                },
            },
            {
                title: {
                    en: 'Currency Exchange',
                    fr: 'Échange de devises',
                    es: 'Cambio de moneda',
                    pt: 'Câmbio de moeda',
                    ar: '',
                },
                content: {
                    description: {
                        en: "While you can exchange some currency into Moroccan Dirhams (MAD) before arriving, you'll often find better exchange rates at local banks or ATMs in major cities. Note: Dirhams cannot be taken out of Morocco, so convert sparingly.",
                        fr: 'Bien que vous puissiez échanger certaines devises en dirhams marocains (MAD) avant votre arrivée, vous trouverez souvent de meilleurs taux de change dans les banques locales ou aux distributeurs automatiques de billets des grandes villes. Remarque : les dirhams ne peuvent pas être sortis du Maroc, donc convertissez avec parcimonie.',
                        es: 'Si bien puede cambiar algo de dinero por dirhams marroquíes (MAD) antes de llegar, a menudo encontrará mejores tipos de cambio en bancos locales o cajeros automáticos en las principales ciudades. Nota: los dirhams no se pueden sacar de Marruecos, así que convierta con moderación.',
                        pt: 'Embora você possa trocar algumas moedas por dirhams marroquinos (MAD) antes de chegar, muitas vezes encontrará melhores taxas de câmbio em bancos locais ou caixas eletrônicos nas principais cidades. Observação: os dirhams não podem ser retirados do Marrocos, portanto, converta com moderação.',
                        ar: '',
                    },
                    highlights: [],
                },
            },
            {
                title: {
                    en: 'Cultural Sensitivity',
                    fr: 'Sensibilité culturelle',
                    es: 'Sensibilidad cultural',
                    pt: 'Sensibilidade cultural',
                    ar: '',
                },
                content: {
                    description: {
                        en: 'Morocco is a tapestry of tradition and modernity. While cities are more liberal, dressing modestly (covering shoulders and knees) is a sign of respect, especially in rural areas and when visiting religious sites.',
                        fr: "Le Maroc est une toile de tradition et de modernité. Bien que les villes soient plus libérales, s'habiller modestement (couvrir les épaules et les genoux) est un signe de respect, surtout dans les zones rurales et lors de visites de sites religieux.",
                        es: 'Marruecos es una mezcla de tradición y modernidad. Si bien las ciudades son más liberales, vestirse con modestia (cubriendo hombros y rodillas) es un signo de respeto, especialmente en áreas rurales y al visitar lugares religiosos.',
                        pt: 'Marrocos é um emaranhado de tradição e modernidade. Embora as cidades sejam mais liberais, vestir-se de forma modesta (cobrindo ombros e joelhos) é um sinal de respeito, especialmente em áreas rurais e ao visitar locais religiosos.',
                        ar: '',
                    },
                    highlights: [],
                },
            },
        ],
    },
    {
        category: {
            en: 'Language Tips',
            fr: 'Conseils linguistiques',
            es: 'Consejos de idioma',
            pt: 'Dicas de idiomas',
            ar: '',
        },
        tips: [
            {
                title: {
                    en: 'Basic Arabic and Tamazight',
                    fr: 'Arabe et tamazight de base',
                    es: 'Árabe básico y tamazight',
                    pt: 'Árabe básico e Tamazight',
                    ar: '',
                },
                content: {
                    description: {
                        en: 'English is widely understood in tourist areas, but knowing some Arabic or Tamazight can enhance your experience.',
                        fr: "L'anglais est largement compris dans les zones touristiques, mais connaître un peu d'arabe ou de tamazight peut améliorer votre expérience.",
                        es: 'El inglés es ampliamente entendido en áreas turísticas, pero conocer algo de árabe o tamazight puede mejorar tu experiencia.',
                        pt: 'O inglês é amplamente compreendido em áreas turísticas, mas conhecer um pouco de árabe ou Tamazight pode melhorar sua experiência.',
                        ar: '',
                    },
                    highlights: [
                        {
                            en: "Hello: 'Salam' (Arabic) / 'Azul' (Tamazight)",
                            fr: "Bonjour : 'Salam' (arabe) / 'Azul' (Tamazight)",
                            es: "Hola: 'Salam' (árabe) / 'Azul' (Tamazight)",
                            pt: "Olá: 'Salam' (Árabe) / 'Azul' (Tamazight)",
                            ar: '',
                        },
                        {
                            en: "Thank you: 'Shukran' (Arabic) / 'Tanmert' (Tamazight)",
                            fr: "Merci : 'Shukran' (arabe) / 'Tanmert' (Tamazight)",
                            es: "Gracias: 'Shukran' (árabe) / 'Tanmert' (Tamazight)",
                            pt: "Obrigado: 'Shukran' (Árabe) / 'Tanmert' (Tamazight)",
                            ar: '',
                        },
                        {
                            en: "Yes: 'Naam' (Arabic) / 'Yaah' (Tamazight)",
                            fr: "Oui : 'Naam' (arabe) / 'Yaah' (Tamazight)",
                            es: "Sí: 'Naam' (árabe) / 'Yaah' (Tamazight)",
                            pt: "Sim: 'Naam' (Árabe) / 'Yaah' (Tamazight)",
                            ar: '',
                        },
                        {
                            en: "No: 'La' (Arabic) / 'Oho' (Tamazight)",
                            fr: "Non : 'La' (arabe) / 'Oho' (Tamazight)",
                            es: "No: 'La' (árabe) / 'Oho' (Tamazight)",
                            pt: "Não: 'La' (Árabe) / 'Oho' (Tamazight)",
                            ar: '',
                        },
                        {
                            en: "How much is this? 'Bishhal hada?' (Arabic)",
                            fr: "Combien ça coûte ? 'Bishhal hada ?' (arabe)",
                            es: "¿Cuánto cuesta esto? 'Bishhal hada?' (Árabe)",
                            pt: "Quanto custa isso? 'Bishhal hada?' (Árabe)",
                            ar: '',
                        },
                    ],
                },
            },
        ],
    },
    // Category: Safety and Health
    {
        category: {
            en: 'Safety and Health',
            fr: 'Sécurité et Santé',
            es: 'Seguridad y Salud',
            pt: 'Segurança e Saúde',
            ar: '',
        },
        tips: [
            {
                title: {
                    en: 'Travel Insurance',
                    fr: 'Assurance Voyage',
                    es: 'Seguro de Viaje',
                    pt: 'Seguro de Viagem',
                    ar: '',
                },
                content: {
                    description: {
                        en: 'Choose a policy that covers medical expenses, trip cancellations, and theft. This is crucial for peace of mind, especially when engaging in activities like trekking or hiking.',
                        fr: "Choisissez une police qui couvre les frais médicaux, les annulations de voyage et le vol. C'est crucial pour la tranquillité d'esprit, surtout lorsque vous participez à des activités comme la randonnée ou la randonnée.",
                        es: 'Elija una póliza que cubra gastos médicos, cancelaciones de viaje y robo. Esto es crucial para la tranquilidad, especialmente al participar en actividades como el trekking o el senderismo.',
                        pt: 'Escolha uma apólice que cubra despesas médicas, cancelamentos de viagem e roubo. Isso é crucial para a tranquilidade, especialmente ao participar de atividades como trekking ou caminhadas.',
                        ar: '',
                    },
                    highlights: [],
                },
            },
            {
                title: {
                    en: 'Water Safety',
                    fr: "Sécurité de l'Eau",
                    es: 'Seguridad del Agua',
                    pt: 'Segurança da Água',
                    ar: '',
                },
                content: {
                    description: {
                        en: 'Stick to bottled or filtered water to avoid gastrointestinal issues. Ice in drinks and salads can be risky in places with questionable water quality. (Better Always to Ask your Guide or Driver).',
                        fr: "Tenez-vous-en à de l’eau en bouteille ou filtrée pour éviter les problèmes gastro-intestinaux. La glace dans les boissons et les salades peut être risquée dans les endroits où la qualité de l'eau est douteuse. (Mieux vaut toujours demander à votre guide ou chauffeur).",
                        es: 'Manténgase con agua embotellada o filtrada para evitar problemas gastrointestinales. El hielo en las bebidas y ensaladas puede ser arriesgado en lugares con calidad de agua cuestionable. (Mejor siempre preguntar a su guía o conductor).',
                        pt: 'Mantenha-se com água engarrafada ou filtrada para evitar problemas gastrointestinais. O gelo em bebidas e saladas pode ser arriscado em lugares com qualidade de água questionável. (Melhor sempre perguntar ao seu guia ou motorista).',
                        ar: '',
                    },
                    highlights: [],
                },
            },
            {
                title: {
                    en: 'Getting Around',
                    fr: 'Se Déplacer',
                    es: 'Desplazarse',
                    pt: 'Deslocamento',
                    ar: '',
                },
                content: {
                    description: {
                        en: "Moroccan Etiquette: Bargaining is expected in souks and markets. Start by offering about 70% of the asking price and negotiate from there. It's a part of the culture and often ends with both parties satisfied.",
                        fr: "Moroccan Etiquette: On s'attend à ce que le marchandage soit accepté dans les souks et les marchés. Commencez par offrir environ 70% du prix demandé et négociez à partir de là. C'est une partie de la culture et se termine souvent avec les deux parties satisfaites.",
                        es: 'Etiqueta marroquí: Se espera que se regatee en los zocos y mercados. Empiece ofreciendo aproximadamente el 70% del precio pedido y negocie a partir de ahí. Es parte de la cultura y a menudo termina con ambas partes satisfechas.',
                        pt: 'Etiqueta marroquina: Espera-se que haja negociação nos souks e mercados. Comece oferecendo cerca de 70% do preço pedido e negocie a partir daí. É uma parte da cultura e muitas vezes termina com ambas as partes satisfeitas.',
                        ar: '',
                    },
                    highlights: [],
                },
            },
            {
                title: {
                    en: 'Navigate with Confidence',
                    fr: 'Naviguer avec Confiance',
                    es: 'Navegar con Confianza',
                    pt: 'Navegar com Confiança',
                    ar: '',
                },
                content: {
                    description: {
                        en: "While cities dazzle with their maze-like medinas, getting lost is part of the charm. Always have a map app downloaded for offline use. In all Morocco, hiring a local guide isn't just helpful; it's a chance to hear stories and insights you won't find in guidebooks.",
                        fr: "Alors que les villes éblouissent avec leurs médinas en forme de labyrinthe, se perdre fait partie du charme. Ayez toujours une application de carte téléchargée pour une utilisation hors ligne. Au Maroc, engager un guide local n'est pas seulement utile; c'est une chance d'entendre des histoires et des insights que vous ne trouverez pas dans les guides.",
                        es: 'Si bien las ciudades deslumbran con sus medinas en forma de laberinto, perderse es parte del encanto. Siempre tenga una aplicación de mapa descargada para usar sin conexión. En todo Marruecos, contratar a un guía local no solo es útil; es una oportunidad para escuchar historias y percepciones que no encontrará en las guías.',
                        pt: 'Enquanto as cidades deslumbram com suas medinas em forma de labirinto, se perder faz parte do encanto. Sempre tenha um aplicativo de mapa baixado para uso offline. Em todo o Marrocos, contratar um guia local não é apenas útil; é uma chance de ouvir histórias e insights que você não encontrará nos guias.',
                        ar: '',
                    },
                    highlights: [],
                },
            },
        ],
    },
    // Category: Food and Drink
    {
        category: {
            en: 'Food and Drink',
            fr: 'Nourriture et Boissons',
            es: 'Comida y Bebida',
            pt: 'Comida e Bebida',
            ar: '',
        },
        tips: [
            {
                title: {
                    en: 'Culinary Adventure',
                    fr: 'Aventure Culinaire',
                    es: 'Aventura Culinaria',
                    pt: 'Aventura Culinária',
                    ar: '',
                },
                content: {
                    description: {
                        en: 'Must-try dishes include Tagine (slow-cooked stew), Couscous (especially on Fridays), Medfouna or Abadir (Berber Pizza) and Pastilla (sweet and Savory pie). For vegetarians, many restaurants offer vegetable tagines and salads.',
                        fr: 'Les plats à ne pas manquer incluent le Tagine (ragoût mijoté), le Couscous (surtout le vendredi), la Medfouna ou Abadir (Pizza Berbère) et la Pastilla (tarte sucrée et salée). Pour les végétariens, de nombreux restaurants proposent des tagines de légumes et des salades.',
                        es: 'Los platos que debes probar incluyen el Tagine (estofado cocido a fuego lento), el Couscous (especialmente los viernes), el Medfouna o Abadir (Pizza Bereber) y el Pastilla (pastel dulce y salado). Para vegetarianos, muchos restaurantes ofrecen tagines de verduras y ensaladas.',
                        pt: 'Pratos imperdíveis incluem Tagine (cozido lento), Couscous (especialmente às sextas-feiras), Medfouna ou Abadir (Pizza Berbere) e Pastilla (torta doce e salgada). Para vegetarianos, muitos restaurantes oferecem tagines de legumes e saladas.',
                        ar: '',
                    },
                    highlights: [],
                },
            },
            {
                title: {
                    en: 'Dietary Restrictions',
                    fr: 'Restrictions Alimentaires',
                    es: 'Restricciones Dietéticas',
                    pt: 'Restrições Alimentares',
                    ar: '',
                },
                content: {
                    description: {
                        en: 'Major cities like Marrakech and Casablanca have restaurants catering to various dietary needs. Always communicate your dietary restrictions clearly, as vegetarian and vegan diets are still becoming more understood.',
                        fr: "Les grandes villes comme Marrakech et Casablanca disposent de restaurants répondant à divers besoins alimentaires. Communiquez toujours clairement vos restrictions alimentaires, car les régimes végétariens et végétaliens sont encore en train d'être mieux compris.",
                        es: 'Grandes ciudades como Marrakech y Casablanca tienen restaurantes que atienden a diversas necesidades dietéticas. Siempre comunique claramente sus restricciones dietéticas, ya que las dietas vegetarianas y veganas aún se están comprendiendo mejor.',
                        pt: 'Grandes cidades como Marrakech e Casablanca têm restaurantes que atendem a várias necessidades dietéticas. Sempre comunique claramente suas restrições alimentares, pois as dietas vegetarianas e veganas ainda estão sendo mais compreendidas.',
                        ar: '',
                    },
                    highlights: [],
                },
            },
        ],
    },
    // Category: Experiences Not to Miss
    {
        category: {
            en: 'Experiences Not to Miss',
            fr: 'Expériences à ne pas manquer',
            es: 'Experiencias imperdibles',
            pt: 'Experiências Imperdíveis',
            ar: '',
        },
        tips: [
            {
                title: {
                    en: 'Diverse Landscapes',
                    fr: 'Paysages divers',
                    es: 'Paisajes diversos',
                    pt: 'Paisagens Diversas',
                    ar: '',
                },
                content: {
                    description: {
                        en: 'Book a guided camel trek in the Sahara for an unforgettable night under the stars. The Atlas Mountains offer stunning hiking opportunities. Coastal towns like Essaouira provide a breezy escape from the heat with beautiful beaches and fresh seafood.',
                        fr: "Réservez une randonnée à dos de chameau dans le Sahara pour une nuit inoubliable sous les étoiles. Les montagnes de l'Atlas offrent des opportunités de randonnée époustouflantes. Les villes côtières comme Essaouira offrent une évasion rafraîchissante de la chaleur avec de magnifiques plages et des fruits de mer frais.",
                        es: 'Reserve un trekking guiado en camello en el Sahara para una noche inolvidable bajo las estrellas. Las montañas del Atlas ofrecen impresionantes oportunidades de senderismo. Ciudades costeras como Essaouira ofrecen una escapada fresca del calor con hermosas playas y mariscos frescos.',
                        pt: 'Reserve uma caminhada guiada de camelo no Saara para uma noite inesquecível sob as estrelas. As Montanhas Atlas oferecem oportunidades deslumbrantes para caminhadas. Cidades costeiras como Essaouira oferecem uma fuga refrescante do calor, com belas praias e frutos do mar frescos.',
                        ar: '',
                    },
                    highlights: [],
                },
            },
            {
                title: {
                    en: 'Cultural Experiences',
                    fr: 'Expériences culturelles',
                    es: 'Experiencias culturales',
                    pt: 'Experiências Culturais',
                    ar: '',
                },
                content: {
                    description: {
                        en: 'A visit to a traditional hammam (bathhouse) is a must for an authentic Moroccan experience. Explore the historic medinas of Fes and Marrakech for a glimpse into centuries-old Moroccan life.',
                        fr: 'Une visite à un hammam traditionnel est un must pour une expérience marocaine authentique. Explorez les médinas historiques de Fès et de Marrakech pour un aperçu de la vie marocaine centenaire.',
                        es: 'Visitar un hammam tradicional es imprescindible para una experiencia marroquí auténtica. Explore las medinas históricas de Fez y Marrakech para vislumbrar la vida marroquí centenaria.',
                        pt: 'Uma visita a um hammam tradicional é imperdível para uma experiência marroquina autêntica. Explore as medinas históricas de Fez e Marrakech para vislumbrar a vida marroquina centenária.',
                        ar: '',
                    },
                    highlights: [],
                },
            },
            {
                title: {
                    en: 'Local Festivals',
                    fr: 'Festivals locaux',
                    es: 'Festivales locales',
                    pt: 'Festivais Locais',
                    ar: '',
                },
                content: {
                    description: {
                        en: "Check the calendar for festivals like the Gnaoua World Music Festival in Essaouira or the Rose Festival in El Kelaa M'Gouna. They offer vibrant insights into Moroccan culture and traditions.",
                        fr: "Consultez le calendrier pour des festivals comme le Festival mondial de musique Gnaoua à Essaouira ou le Festival des roses à El Kelaa M'Gouna. Ils offrent des aperçus vibrants de la culture et des traditions marocaines.",
                        es: "Consulte el calendario para festivales como el Festival Mundial de Música Gnaoua en Essaouira o el Festival de las Rosas en El Kelaa M'Gouna. Ofrecen ideas vibrantes sobre la cultura y tradiciones marroquíes.",
                        pt: "Consulte o calendário para festivais como o Festival Mundial de Música Gnaoua em Essaouira ou o Festival das Rosas em El Kelaa M'Gouna. Eles oferecem insights vibrantes sobre a cultura e tradições marroquinas.",
                        ar: '',
                    },
                    highlights: [],
                },
            },
        ],
    },
    // Category: Respect for Nature and Local Communities
    {
        category: {
            en: 'Respect for Nature and Local Communities',
            fr: 'Respect de la nature et des communautés locales',
            es: 'Respeto por la naturaleza y las comunidades locales',
            pt: 'Respeito pela Natureza e Comunidades Locais',
            ar: '',
        },
        tips: [
            {
                title: {
                    en: 'Eco-friendly Practices',
                    fr: 'Pratiques écologiques',
                    es: 'Prácticas ecológicas',
                    pt: 'Práticas Ecológicas',
                    ar: '',
                },
                content: {
                    description: {
                        en: 'While exploring Morocco’s diverse landscapes, from the Sahara to the Atlas Mountains, practice leave-no-trace principles. Use refillable water bottles and bags, and choose eco-friendly tours and accommodations.',
                        fr: "Lors de l'exploration des paysages divers du Maroc, du Sahara aux montagnes de l'Atlas, pratiquez les principes de ne laisser aucune trace. Utilisez des bouteilles d'eau et des sacs rechargeables, et choisissez des circuits et des hébergements respectueux de l'environnement.",
                        es: 'Mientras exploras los diversos paisajes de Marruecos, desde el Sahara hasta las montañas del Atlas, practica los principios de no dejar rastro. Usa botellas y bolsas reutilizables y elige tours y alojamientos ecológicos.',
                        pt: "Ao explorar as diversas paisagens de Marrocos, do Saara às Montanhas do Atlas, pratique os princípios de não deixar rastros. Use garrafas d'água e sacolas recarregáveis e escolha passeios e acomodações ecológicos.",
                        ar: '',
                    },
                    highlights: [],
                },
            },
            {
                title: {
                    en: 'Shop with a Heart',
                    fr: 'Acheter avec le cœur',
                    es: 'Compra con el corazón',
                    pt: 'Compre com o Coração',
                    ar: '',
                },
                content: {
                    description: {
                        en: 'Supporting Local & Sustainable Souvenirs: Buying directly from artisans not only gets you a better deal and good quality, but also supports the local economy. Consider visiting cooperatives, especially those run by women, for authentic crafts like carpets/rugs, pottery, roses and argan oil products.',
                        fr: "Soutien aux souvenirs locaux et durables : Acheter directement aux artisans vous garantit non seulement un meilleur prix et une bonne qualité, mais soutient également l'économie locale. Envisagez de visiter des coopératives, en particulier celles dirigées par des femmes, pour des produits artisanaux authentiques comme les tapis, la poterie, les roses et les produits à base d'huile d'argan.",
                        es: 'Apoyo a souvenirs locales y sostenibles: Comprar directamente a los artesanos no solo le garantiza una mejor oferta y buena calidad, sino que también apoya la economía local. Considere visitar cooperativas, especialmente aquellas dirigidas por mujeres, para obtener artesanías auténticas como alfombras, cerámica, rosas y productos de aceite de argán.',
                        pt: 'Apoiando lembranças locais e sustentáveis: Comprar diretamente dos artesãos não só garante um bom negócio e boa qualidade, mas também apoia a economia local. Considere visitar cooperativas, especialmente aquelas dirigidas por mulheres, para artesanatos autênticos como tapetes, cerâmicas, rosas e produtos de óleo de argan.',
                        ar: '',
                    },
                    highlights: [],
                },
            },
        ],
    },
    // Category: Connectivity
    {
        category: {
            en: 'Connectivity',
            fr: 'Connectivité',
            es: 'Conectividad',
            pt: 'Conectividade',
            ar: '',
        },
        tips: [
            {
                title: {
                    en: 'Wi-Fi and SIM Cards',
                    fr: 'Wi-Fi et cartes SIM',
                    es: 'Wi-Fi y tarjetas SIM',
                    pt: 'Wi-Fi e Cartões SIM',
                    ar: '',
                },
                content: {
                    description: {
                        en: 'Wi-Fi is widely available in hotels, cafes, and public spaces in major cities. For a local SIM card, Maroc Telecom, Orange, and Inwi are the main providers; they offer affordable data packages, making it easier to stay connected and navigate with apps like Google Maps.',
                        fr: 'Le Wi-Fi est largement disponible dans les hôtels, les cafés et les espaces publics des grandes villes. Pour une carte SIM locale, Maroc Telecom, Orange et Inwi sont les principaux fournisseurs ; ils proposent des forfaits de données abordables, ce qui facilite la connexion et la navigation avec des applications telles que Google Maps.',
                        es: 'El Wi-Fi está ampliamente disponible en hoteles, cafeterías y espacios públicos en las principales ciudades. Para una tarjeta SIM local, Maroc Telecom, Orange e Inwi son los principales proveedores; ofrecen paquetes de datos asequibles, lo que facilita mantenerse conectado y navegar con aplicaciones como Google Maps.',
                        pt: 'O Wi-Fi está amplamente disponível em hotéis, cafés e espaços públicos nas principais cidades. Para um cartão SIM local, Maroc Telecom, Orange e Inwi são os principais provedores; eles oferecem pacotes de dados acessíveis, tornando mais fácil permanecer conectado e navegar com aplicativos como o Google Maps.',
                        ar: '',
                    },
                    highlights: [],
                },
            },
        ],
    },
    // Category: Embrace the Local Pace
    {
        category: {
            en: 'Embrace the Local Pace',
            fr: 'Adoptez le rythme local',
            es: 'Acepta el ritmo local',
            pt: 'Abraçar o Ritmo Local',
            ar: '',
        },
        tips: [
            {
                title: {
                    en: 'Moroccan Time',
                    fr: 'Temps marocain',
                    es: 'Tiempo marroquí',
                    pt: 'Tempo Marroquino',
                    ar: '',
                },
                content: {
                    description: {
                        en: "Adjust your watch and mindset to ‘Moroccan time.’ Delays are not uncommon; they’re an opportunity to pause and soak in your surroundings. Patience is not just a virtue here; it's a way of life.",
                        fr: "Ajustez votre montre et votre état d'esprit au 'temps marocain'. Les retards ne sont pas rares ; ils sont l'occasion de faire une pause et d'apprécier votre environnement. La patience n'est pas seulement une vertu ici ; c'est un mode de vie.",
                        es: "Ajusta tu reloj y mentalidad al 'tiempo marroquí'. Los retrasos no son poco comunes; son una oportunidad para detenerse y empaparse de tu entorno. La paciencia no es solo una virtud aquí; es un modo de vida.",
                        pt: "Ajuste seu relógio e mentalidade para o 'tempo marroquino'. Atrasos não são incomuns; eles são uma oportunidade para pausar e absorver seu ambiente. Paciência não é apenas uma virtude aqui; é um estilo de vida.",
                        ar: '',
                    },
                    highlights: [],
                },
            },
        ],
    },
    // Category: Embrace the Unexpected
    {
        category: {
            en: 'Embrace the Unexpected',
            fr: "Saisir l'imprévu",
            es: 'Abrazar lo inesperado',
            pt: 'Abraçar o Inesperado',
            ar: '',
        },
        tips: [
            {
                title: {
                    en: 'Open Heart, Open Mind',
                    fr: 'Cœur ouvert, esprit ouvert',
                    es: 'Corazón abierto, mente abierta',
                    pt: 'Coração Aberto, Mente Aberta',
                    ar: '',
                },
                content: {
                    description: {
                        en: 'Morocco is a land of surprises. From spontaneous invitations to tea to discovering hidden gardens in the heart of the city, the unexpected moments often become the most cherished memories.',
                        fr: 'Le Maroc est une terre de surprises. Des invitations spontanées à prendre le thé à la découverte de jardins cachés au cœur de la ville, les moments inattendus deviennent souvent les souvenirs les plus chers.',
                        es: 'Marruecos es una tierra de sorpresas. Desde invitaciones espontáneas a tomar té hasta descubrir jardines ocultos en el corazón de la ciudad, los momentos inesperados a menudo se convierten en los recuerdos más apreciados.',
                        pt: 'Marrocos é uma terra de surpresas. Desde convites espontâneos para chá até descobrir jardins escondidos no coração da cidade, os momentos inesperados frequentemente se tornam as lembranças mais queridas.',
                        ar: '',
                    },
                    highlights: [],
                },
            },
        ],
    },
];

// Export tips array
export default TIPS_MOCK;
