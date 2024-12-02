import { Page } from '../../common/components/Page/Page'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';


import './About.scss'
import { currentLanguage } from '../../common/utils';

const AboutText = 'About Vita Morocco';


export const About = (): JSX.Element => {
    const [value, setValue] = useState(0);
    const { t } = useTranslation()

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Page
            description={AboutText}
            keywords={AboutText}
            elements={
                <>
                    <link rel="canonical" href={window.location.href} />
                    <link rel="preload" as="image" href="img/about/about_title.webp" type="image/webp" />
                </>
            }
            title={t('about_vita_morocco')}
            imgSrc='img/about/about_title.webp'
            className='about-container'
            style={{ justifyContent: 'flex-start' }}
        >
            <Box sx={{ maxWidth: { xs: 350, sm: 1000 }, marginTop: '1rem', bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                >
                    {TABS.map(tab =>
                        <Tab key={tab.label[currentLanguage]} label={tab.label[currentLanguage]} />
                    )}
                </Tabs>
            </Box>
            {parse(TABS[value]?.text[currentLanguage])}
        </Page>
    );
};

const TABS = [
    {
        "label": {
            "en": "about",
            "fr": "à propos",
            "es": "sobre",
            "pt": "sobre",
            "ar": ""
        },
        "text": {
            "en": "<p><strong>VITA MOROCCO</strong> is a Small local tour company based in Morocco, created and managed by authentic local Imazighen from the southeast of Morocco, with more than 12 years experience in the Tourism sector, specialized in creating personalized and authentic travel experiences.</p><p>At <strong>VITA MOROCCO</strong>, we redefine travel in Morocco with our bespoke journey planning service. Our ethos is rooted in delivering unparalleled personalized experiences, catering to the unique tastes and preferences of each traveller</p><p>As artisans of journey design, our strength lies in crafting highly exclusive and personalized itineraries. We ensure a journey that not only meets, but exceeds the expectations of the discerning traveller. Our connection with clients is intimate and responsive, adapting fluidly throughout the travel experience. With us, you explore Morocco's hidden gems, guided by seasoned experts who are not just guides, but storytellers, revealing the secrets and wonders of their homeland.</p><p>Understanding the need for peace of mind while traveling, we offer an unrivalled 24/7 concierge service throughout your journey. This commitment to your comfort and security is a cornerstone of our philosophy. Our adventurous spirit, combined with a meticulous attention to detail, means we are constantly forging new paths, crafting journeys that are about engaging with the culture, history, and people of Morocco, rather than just observing them.</p><p>Our itineraries are more than routes; they are narrative journeys, capturing the heart and soul of Morocco. We strive to create lasting memories, filled with emotions that resonate long after the journey ends. Each route is thoughtfully designed to bring you face-to-face with the authentic spirit of Morocco and its welcoming people.</p><p>In the realm of travel, <strong>VITA MOROCCO</strong> stands out for its dedication to exclusive, innovative itinerary design. Every journey with us is a unique tapestry woven with expert precision from start to finish. When you travel with VITA MOROCCO you don't just visit Morocco, you experience it in a way that is profound, personalized, and utterly unforgettable.</p><p>Join us at <strong>VITA MOROCCO</strong> for an extraordinary Moroccan adventure that is as unique as you are.</p>",
            "fr": "<p><strong>VITA MOROCCO</strong> est une petite agence de voyage locale basée au Maroc, créée et gérée par de vrais Imazighen locaux du sud-est du Maroc, avec plus de 12 ans d'expérience dans le secteur du tourisme, spécialisée dans la création d'expériences de voyage personnalisées et authentiques.</p><p>Chez <strong>VITA MOROCCO</strong>, nous redéfinissons le voyage au Maroc avec notre service de planification de voyage sur mesure. Notre éthique est enracinée dans la livraison d'expériences personnalisées inégalées, répondant aux goûts et préférences uniques de chaque voyageur</p><p>En tant qu'artisans de la conception de voyages, notre force réside dans la création d'itinéraires hautement exclusifs et personnalisés. Nous garantissons un voyage qui non seulement répond, mais dépasse les attentes du voyageur exigeant. Notre connexion avec les clients est intime et réactive, s'adaptant fluidement tout au long de l'expérience de voyage. Avec nous, vous explorez les joyaux cachés du Maroc, guidés par des experts chevronnés qui ne sont pas seulement des guides, mais des conteurs, révélant les secrets et merveilles de leur pays natal.</p><p>Comprendre le besoin de tranquillité d'esprit en voyage, nous offrons un service de conciergerie inégalé 24h/24 et 7j/7 tout au long de votre voyage. Cet engagement envers votre confort et votre sécurité est un pilier de notre philosophie. Notre esprit aventureux, combiné à une attention méticuleuse aux détails, signifie que nous forgeons constamment de nouveaux chemins, créant des voyages qui consistent à s'engager avec la culture, l'histoire et les habitants du Maroc, plutôt que de les observer simplement.</p><p>Nos itinéraires sont plus que des routes ; ce sont des voyages narratifs, capturant le cœur et l'âme du Maroc. Nous nous efforçons de créer des souvenirs durables, remplis d'émotions qui résonnent longtemps après la fin du voyage. Chaque itinéraire est soigneusement conçu pour vous mettre face à face avec l'esprit authentique du Maroc et ses habitants accueillants.</p><p>Dans le domaine du voyage, <strong>VITA MOROCCO</strong> se distingue par son dévouement à la conception d'itinéraires exclusifs et innovants. Chaque voyage avec nous est une tapisserie unique tissée avec une précision experte du début à la fin. Lorsque vous voyagez avec VITA MOROCCO, vous ne visitez pas simplement le Maroc, vous l'expérimentez d'une manière profonde, personnalisée et totalement inoubliable.</p><p>Rejoignez-nous chez <strong>VITA MOROCCO</strong> pour une aventure marocaine extraordinaire aussi unique que vous l'êtes.</p>",
            "es": "<p><strong>VITA MOROCCO</strong> es una pequeña empresa local de tours con base en Marruecos, creada y gestionada por auténticos Imazighen locales del sureste de Marruecos, con más de 12 años de experiencia en el sector turístico, especializada en la creación de experiencias de viaje personalizadas y auténticas.</p><p>En <strong>VITA MOROCCO</strong>, redefinimos el viaje en Marruecos con nuestro servicio de planificación de viajes personalizados. Nuestro ethos se basa en ofrecer experiencias personalizadas incomparables, atendiendo a los gustos y preferencias únicos de cada viajero</p><p>Como artesanos del diseño de viajes, nuestra fortaleza radica en la creación de itinerarios altamente exclusivos y personalizados. Garantizamos un viaje que no solo cumple, sino que supera las expectativas del viajero exigente. Nuestra conexión con los clientes es íntima y receptiva, adaptándose fluidamente a lo largo de la experiencia de viaje. Con nosotros, exploras las joyas ocultas de Marruecos, guiado por expertos experimentados que no son solo guías, sino también narradores, revelando los secretos y maravillas de su tierra natal.</p><p>Entendiendo la necesidad de tranquilidad al viajar, ofrecemos un servicio de conserjería inigualable las 24 horas del día, los 7 días de la semana durante todo su viaje. Este compromiso con su comodidad y seguridad es un pilar de nuestra filosofía. Nuestro espíritu aventurero, combinado con una meticulosa atención al detalle, significa que estamos forjando constantemente nuevos caminos, creando viajes que se tratan de involucrarse con la cultura, la historia y la gente de Marruecos, en lugar de simplemente observarlos.</p><p>Nuestros itinerarios son más que rutas; son viajes narrativos, capturando el corazón y el alma de Marruecos. Nos esforzamos por crear recuerdos duraderos, llenos de emociones que resuenan mucho después de que termina el viaje. Cada ruta está cuidadosamente diseñada para ponerlo cara a cara con el espíritu auténtico de Marruecos y su gente acogedora.</p><p>En el ámbito del viaje, <strong>VITA MOROCCO</strong> se destaca por su dedicación a la exclusiva y innovadora diseño de itinerarios. Cada viaje con nosotros es una tapicería única tejida con precisión experta de principio a fin. Cuando viajas con VITA MOROCCO no solo visitas Marruecos, lo experimentas de una manera profunda, personalizada y completamente inolvidable.</p><p>Únete a nosotros en <strong>VITA MOROCCO</strong> para una aventura marroquí extraordinaria que sea tan única como tú.</p>",
            "pt": "<p><strong>VITA MOROCCO</strong> é uma pequena empresa local de turismo com sede em Marrocos, criada e gerida por autênticos Imazighen locais do sudeste de Marrocos, com mais de 12 anos de experiência no setor de turismo, especializada na criação de experiências de viagem personalizadas e autênticas.</p><p>No <strong>VITA MOROCCO</strong>, redefinimos a viagem em Marrocos com nosso serviço de planejamento de viagem sob medida. Nossa ética está enraizada na entrega de experiências personalizadas incomparáveis, atendendo aos gostos e preferências únicos de cada viajante</p><p>Como artesãos do design de jornada, nossa força reside em criar itinerários altamente exclusivos e personalizados. Garantimos uma jornada que não apenas atende, mas supera as expectativas do viajante exigente. Nossa conexão com os clientes é íntima e responsiva, adaptando-se fluidamente ao longo da experiência de viagem. Com nós, você explora as joias escondidas de Marrocos, guiado por especialistas experientes que não são apenas guias, mas também contadores de histórias, revelando os segredos e maravilhas de sua terra natal.</p><p>Entendendo a necessidade de tranquilidade ao viajar, oferecemos um serviço de concierge inigualável 24 horas por dia, 7 dias por semana, durante toda a sua jornada. Este compromisso com o seu conforto e segurança é uma pedra angular de nossa filosofia. Nosso espírito aventureiro, combinado com uma atenção meticulosa aos detalhes, significa que estamos constantemente forjando novos caminhos, criando jornadas que se tratam de se envolver com a cultura, história e pessoas de Marrocos, em vez de simplesmente observá-las.</p><p>Nossos itinerários são mais do que rotas; são jornadas narrativas, capturando o coração e a alma de Marrocos. Nos esforçamos para criar memórias duradouras, cheias de emoções que ressoam muito depois que a jornada termina. Cada rota é cuidadosamente projetada para colocá-lo frente a frente com o espírito autêntico de Marrocos e seu povo acolhedor.</p><p>No campo das viagens, <strong>VITA MOROCCO</strong> se destaca por sua dedicação ao design exclusivo e inovador de itinerários. Cada jornada conosco é uma tapeçaria única tecida com precisão de especialista do início ao fim. Quando você viaja com VITA MOROCCO, não apenas visita Marrocos, mas o experimenta de uma maneira profunda, personalizada e totalmente inesquecível.</p><p>Junte-se a nós na <strong>VITA MOROCCO</strong> para uma aventura marroquina extraordinária que seja tão única quanto você é.</p>",
            "ar": ""
        },
    },
    {
        "label": {
            "en": "Services & offers",
            "fr": "Services et offres",
            "es": "Servicios y ofertas",
            "pt": "Serviços e ofertas",
            "ar": ""
        },
        "text": {
            "en": "<p><strong>VITA MOROCCO</strong> offers a diverse range of Morocco Tours, Excursions, Day Trips, activities, Accommodation and much more.</p><p>In <strong>VITA MOROCCO</strong> we offer the best experienced drivers and knowledgeable local guides, that speaks fluent languages, English, Spanish, Italian, French, Arabic and Tamazight. With a big variety of services, you can explore Morocco on your terms with <strong>VITA MOROCCO</strong>. Whether you prefer Accommodation in hotel or a Riad, Standard Berber Camp or Luxury Desert Camps, we can provide you with everything you wish, Offering you the best of Morocco from the Imperial City Tours, Desert Tours & adventures, Family trips, Private & shared Tours, Atlas Mountains trek, Luxury VIP experiences, or a budget-friendly adventure we cater to your every wish. Travel serenely as we handle your transfers, accommodations, visits, activities and more. Enjoy the best prices and top-notch services with <strong>VITA MOROCCO</strong>. Your journey, your way.</p><p>We are committed to ensuring the utmost safety and trust in every Morocco trip we offer. Our team of experts at <strong>VITA MOROCCO</strong> is well-versed in implementing rigorous safety measures, ensuring a secure and enjoyable travel experience for our valued customers. Our focus is on delivering meticulously planned Morocco travel products, distinguished by uniqueness and high quality, all tailored to the preferences of our customers, and offered at competitive rates.</p>",
            "fr": "<p><strong>VITA MOROCCO</strong> propose une gamme diversifiée de circuits au Maroc, d'excursions, de sorties à la journée, d'activités, d'hébergements et bien plus encore.</p><p>Chez <strong>VITA MOROCCO</strong>, nous offrons les meilleurs chauffeurs expérimentés et des guides locaux compétents, parlant couramment plusieurs langues : anglais, espagnol, italien, français, arabe et tamazight. Avec une grande variété de services, vous pouvez explorer le Maroc à votre façon avec <strong>VITA MOROCCO</strong>. Que vous préfériez un hébergement à l'hôtel ou dans un riad, un camp berbère standard ou des camps de luxe dans le désert, nous pouvons vous fournir tout ce que vous souhaitez, en vous offrant le meilleur du Maroc avec des visites de villes impériales, des circuits et des aventures dans le désert, des voyages en famille, des circuits privés et partagés, des trekkings dans les montagnes de l'Atlas, des expériences de luxe VIP, ou une aventure économique, nous répondons à tous vos désirs. Voyagez sereinement pendant que nous gérons vos transferts, hébergements, visites, activités et plus encore. Profitez des meilleurs prix et des services de qualité avec <strong>VITA MOROCCO</strong>. Votre voyage, à votre façon.</p><p>Nous nous engageons à assurer la sécurité et la confiance maximales dans chaque voyage au Maroc que nous proposons. Notre équipe d'experts chez <strong>VITA MOROCCO</strong> est compétente dans la mise en œuvre de mesures de sécurité rigoureuses, garantissant une expérience de voyage sécurisée et agréable pour nos précieux clients. Notre objectif est de fournir des produits de voyage au Maroc méticuleusement planifiés, distingués par leur unicité et leur qualité élevée, tous adaptés aux préférences de nos clients et proposés à des tarifs compétitifs.</p>",
            "es": "<p><strong>VITA MOROCCO</strong> ofrece una amplia gama de Tours en Marruecos, Excursiones, Viajes de un día, actividades, Alojamiento y mucho más.</p><p>En <strong>VITA MOROCCO</strong> ofrecemos los mejores conductores experimentados y guías locales expertos, que hablan varios idiomas con fluidez: inglés, español, italiano, francés, árabe y tamazight. Con una gran variedad de servicios, puedes explorar Marruecos a tu manera con <strong>VITA MOROCCO</strong>. Ya sea que prefieras alojarte en un hotel o en un Riad, en un Campamento Bereber estándar o en Campamentos de Lujo en el Desierto, podemos proporcionarte todo lo que desees, ofreciéndote lo mejor de Marruecos con Tours por las Ciudades Imperiales, Tours y aventuras en el desierto, viajes en familia, Tours privados y compartidos, trekking en las montañas del Atlas, experiencias VIP de lujo o una aventura económica, satisfacemos todos tus deseos. Viaja con tranquilidad mientras gestionamos tus traslados, alojamientos, visitas, actividades y mucho más. Disfruta de los mejores precios y servicios de primera calidad con <strong>VITA MOROCCO</strong>. Tu viaje, a tu manera.</p><p>Nos comprometemos a garantizar la máxima seguridad y confianza en cada viaje a Marruecos que ofrecemos. Nuestro equipo de expertos en <strong>VITA MOROCCO</strong> está familiarizado con la implementación de rigurosas medidas de seguridad, asegurando una experiencia de viaje segura y agradable para nuestros valiosos clientes. Nuestro enfoque se centra en ofrecer productos de viaje meticulosamente planificados en Marruecos, distinguidos por su singularidad y alta calidad, todos adaptados a las preferencias de nuestros clientes y ofrecidos a precios competitivos.</p>",
            "pt": "<p><strong>VITA MOROCCO</strong> oferece uma ampla variedade de Tours em Marrocos, Excursões, Passeios de um dia, atividades, Acomodações e muito mais.</p><p>No <strong>VITA MOROCCO</strong>, oferecemos os melhores motoristas experientes e guias locais conhecedores, que falam fluentemente vários idiomas: inglês, espanhol, italiano, francês, árabe e tamazight. Com uma grande variedade de serviços, você pode explorar Marrocos do seu jeito com o <strong>VITA MOROCCO</strong>. Seja você preferir Acomodação em hotel ou em um Riad, Acampamento Berbere Padrão ou Acampamentos de Luxo no Deserto, podemos fornecer tudo o que desejar, oferecendo-lhe o melhor de Marrocos com Tours pelas Cidades Imperiais, Tours e aventuras no deserto, viagens em família, Tours privados e compartilhados, trekking nas montanhas do Atlas, experiências de luxo VIP ou uma aventura econômica, atendemos a todos os seus desejos. Viaje com tranquilidade enquanto cuidamos de seus traslados, acomodações, visitas, atividades e muito mais. Desfrute dos melhores preços e serviços de primeira qualidade com o <strong>VITA MOROCCO</strong>. Sua jornada, do seu jeito.</p><p>Comprometemo-nos a garantir a máxima segurança e confiança em cada viagem a Marrocos que oferecemos. Nossa equipe de especialistas do <strong>VITA MOROCCO</strong> está bem versada na implementação de rigorosas medidas de segurança, garantindo uma experiência de viagem segura e agradável para nossos valiosos clientes. Nosso foco está em oferecer produtos de viagem meticulosamente planejados em Marrocos, distinguindo-se pela singularidade e alta qualidade, todos adaptados às preferências de nossos clientes e oferecidos a preços competitivos.</p>",
            "ar": ""
        }
    },
    {
        "label": {
            "en": "OUR TRAVELLERS",
            "fr": "NOS VOYAGEURS",
            "es": "NUESTROS VIAJEROS",
            "pt": "NOSSOS VIAJANTES",
            "ar": ""
        },
        "text": {
            "en": "<p>We cater to independent travellers worldwide seeking a unique experience in Morocco. Our focus is on small groups - friends, families, students and couples - allowing for a relaxed and immersive journey. Check out TRIPADVISOR for traveller reviews.</p><p>We plan your itinerary, but it's YOUR trip. You choose what to visit, what to see and explore, and how long to stay in each place and site. And when to stop, your personalized journey awaits in Morocco.</p><h3><strong><em>\"Morocco, Crafted to Your Dreams\"</em></strong></h3>",
            "fr": "<p>Nous nous adressons aux voyageurs indépendants du monde entier à la recherche d'une expérience unique au Maroc. Notre focus se porte sur les petits groupes - amis, familles, étudiants et couples - permettant un voyage détendu et immersif. Consultez TRIPADVISOR pour les avis des voyageurs.</p><p>Nous planifions votre itinéraire, mais c'est VOTRE voyage. Vous choisissez ce que vous voulez visiter, voir et explorer, et combien de temps rester dans chaque endroit et site. Et quand vous voulez vous arrêter, votre voyage personnalisé vous attend au Maroc.</p><h3><strong><em>\"Maroc, Façonné Selon Vos Rêves\"</em></strong></h3>",
            "es": "<p>Nos dirigimos a viajeros independientes de todo el mundo que buscan una experiencia única en Marruecos. Nos centramos en grupos pequeños - amigos, familias, estudiantes y parejas - lo que permite un viaje relajado e inmersivo. Consulta TRIPADVISOR para ver las opiniones de los viajeros.</p><p>Planificamos tu itinerario, pero es TU viaje. Tú eliges qué visitar, qué ver y explorar, y cuánto tiempo quedarte en cada lugar y sitio. Y cuándo parar, tu viaje personalizado te espera en Marruecos.</p><h3><strong><em>\"Marruecos, Hecho a Tu Medida\"</em></strong></h3>",
            "pt": "<p>Atendemos viajantes independentes de todo o mundo em busca de uma experiência única no Marrocos. Nosso foco está em pequenos grupos - amigos, famílias, estudantes e casais - permitindo uma jornada relaxada e imersiva. Confira o TRIPADVISOR para avaliações de viajantes.</p><p>Planejamos seu itinerário, mas é A SUA viagem. Você escolhe o que visitar, o que ver e explorar, e por quanto tempo ficar em cada lugar e local. E quando parar, sua jornada personalizada espera por você no Marrocos.</p><h3><strong><em>\"Marrocos, Moldado aos Seus Sonhos\"</em></strong></h3>",
            "ar": ""
        }
    },
    {
        "label": {
            "en": "what you can do in morocco",
            "fr": "ce que vous pouvez faire au Maroc",
            "es": "lo que puedes hacer en Marruecos",
            "pt": "o que você pode fazer no Marrocos",
            "ar": ""
        },
        "text": {
            "en": "<p><strong>VITA MOROCCO</strong> provides a myriad of activities for your journey through Morocco. Immerse yourself in the local Amazigh-Berber culture with visits to Berber & Nomads families, visit and explore local cooperatives contributing to regional development. <br/><br/>Engage in archaeological and historical explorations, hiking, Camel treks, horse Riding, Quads & Buggies Excursions, Cooking classes, pottery classes, Food city tours, taste mint-tea, sleep in a desert tent. <br/><br/>Experience authentic accommodation in Berber homes. sandboarding to windsurfing, kite surfing, stargazing, learn bargaining in local markets. we offer a comprehensive and enriching adventure in Morocco.</p>",
            "fr": "<p><strong>VITA MOROCCO</strong> propose une myriade d'activités pour votre voyage à travers le Maroc. Plongez-vous dans la culture locale amazighe-berbère avec des visites aux familles berbères et nomades, visitez et explorez les coopératives locales contribuant au développement régional. <br/><br/>Participez à des explorations archéologiques et historiques, de la randonnée, des treks en chameau, de l'équitation, des excursions en quads et en buggies, des cours de cuisine, des cours de poterie, des visites culinaires en ville, goûtez le thé à la menthe, dormez dans une tente dans le désert. <br/><br/>Découvrez un hébergement authentique dans les maisons berbères. Du sandboarding au windsurf, en passant par le kitesurf, l'observation des étoiles, apprenez à marchander dans les marchés locaux. Nous offrons une aventure complète et enrichissante au Maroc.</p>",
            "es": "<p><strong>VITA MOROCCO</strong> ofrece una gran cantidad de actividades para tu viaje por Marruecos. Sumérgete en la cultura local amazigh-bereber con visitas a familias bereberes y nómadas, visita y explora cooperativas locales que contribuyen al desarrollo regional. <br/><br/>Participa en exploraciones arqueológicas e históricas, senderismo, excursiones en camello, equitación, excursiones en quads y buggies, clases de cocina, clases de cerámica, recorridos gastronómicos por la ciudad, prueba el té de menta, duerme en una tienda en el desierto. <br/><br/>Experimenta un alojamiento auténtico en hogares bereberes. Desde el sandboarding hasta el windsurf, pasando por el kitesurf, la observación de estrellas, aprende a regatear en los mercados locales. Ofrecemos una aventura completa y enriquecedora en Marruecos.</p>",
            "pt": "<p><strong>VITA MOROCCO</strong> oferece uma miríade de atividades para a sua jornada pelo Marrocos. Mergulhe na cultura local amazigh-berbere com visitas a famílias berberes e nômades, visite e explore cooperativas locais que contribuem para o desenvolvimento regional. <br/><br/>Participe de explorações arqueológicas e históricas, caminhadas, passeios de camelo, passeios a cavalo, excursões de quadriciclo e buggy, aulas de culinária, aulas de cerâmica, passeios gastronômicos pela cidade, prove o chá de hortelã, durma em uma tenda no deserto. <br/><br/>Experimente acomodações autênticas em casas berberes. Do sandboarding ao windsurf, passando pelo kitesurf, observação de estrelas, aprenda a pechinchar nos mercados locais. Oferecemos uma aventura abrangente e enriquecedora no Marrocos.</p>",
            "ar": ""
        }
    }
]