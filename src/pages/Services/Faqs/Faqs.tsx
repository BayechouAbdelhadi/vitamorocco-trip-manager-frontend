import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Page } from '../../../common/components/Page/Page';
import { currentLanguage, scrollToTop } from '../../../common/utils';

import './Faqs.scss';

const FaqsText = 'FAQS';

export const Faqs = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <Page
            description={FaqsText}
            title={FaqsText}
            imgSrc="/img/faqs/title.webp"
            className="faqs-container"
        >
            <ol>
                {FAQs.map((faq) => (
                    <li key={faq.category[currentLanguage]}>
                        <span>{faq.category[currentLanguage]}</span>
                        {faq.listFaqs.map((item) => (
                            <Accordion key={item.question[currentLanguage]}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    {item.question[currentLanguage]}
                                </AccordionSummary>
                                <AccordionDetails>
                                    <em>{parse(item.answer[currentLanguage])}</em>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </li>
                ))}
            </ol>
            <h4>
                {t('if_you_have_more_questions')}
                <Link to="/contact" onClick={scrollToTop} style={{ color: 'rgb(188, 141, 74)' }}>
                    {t('dont_hesitate_to_connect')}
                </Link>
            </h4>
        </Page>
    );
};

const FAQs = [
    {
        category: {
            en: 'Payment',
            fr: 'Paiement',
            es: 'Pago',
            pt: 'Pagamento',
            ar: '',
        },
        listFaqs: [
            {
                question: {
                    en: 'How do I pay the deposit?',
                    fr: 'Comment puis-je payer le dépôt ?',
                    es: '¿Cómo puedo pagar el depósito?',
                    pt: 'Como faço para pagar o depósito?',
                    ar: '',
                },
                answer: {
                    en: 'The deposit can be paid in a variety of ways: A Transfer to our bank account (Visa, Master Card, American Express) or via PayPal.',
                    fr: 'Le dépôt peut être payé de différentes manières : un virement sur notre compte bancaire (Visa, MasterCard, American Express) ou via PayPal.',
                    es: 'El depósito se puede pagar de diversas formas: una transferencia a nuestra cuenta bancaria (Visa, MasterCard, American Express) o a través de PayPal.',
                    pt: 'O depósito pode ser pago de várias formas: uma transferência para nossa conta bancária (Visa, MasterCard, American Express) ou via PayPal.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'How do I pay the balance?',
                    fr: 'Comment puis-je payer le solde ?',
                    es: '¿Cómo puedo pagar el saldo?',
                    pt: 'Como faço para pagar o saldo?',

                    ar: '',
                },
                answer: {
                    en: 'The balance is normally paid to the driver or Guide in Cash.',
                    fr: 'Le solde est généralement payé au chauffeur ou au guide en espèces.',
                    es: 'El saldo se paga normalmente al conductor o guía en efectivo.',
                    pt: 'O saldo geralmente é pago ao motorista ou guia em dinheiro.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Is it better to use the local currency or can I use the US dollar and euro?',
                    fr: "Est-il préférable d'utiliser la monnaie locale ou puis-je utiliser le dollar américain et l'euro ?",
                    es: '¿Es mejor usar la moneda local o puedo usar el dólar estadounidense y el euro?',
                    pt: 'É melhor usar a moeda local ou posso usar o dólar americano e o euro?',
                    ar: '',
                },
                answer: {
                    en: 'We can take euro, sterling, USD, or dirham, but otherwise Moroccan dirham is better everywhere else. And not everywhere in the country is equipped with a credit card machine so it is cash only.',
                    fr: "Nous pouvons prendre l'euro, la livre sterling, le dollar américain ou le dirham, mais sinon le dirham marocain est meilleur partout ailleurs. Et partout dans le pays n'est pas équipé d'une machine à carte de crédit, donc c'est uniquement en espèces.",
                    es: 'Podemos aceptar euros, libras esterlinas, dólares estadounidenses o dirhams, pero por lo demás, el dirham marroquí es mejor en todas partes. Y no en todos los lugares del país hay una máquina de tarjeta de crédito, así que solo se acepta efectivo.',
                    pt: 'Podemos aceitar euro, libra esterlina, dólar dos EUA ou dirham, mas de outra forma, o dirham marroquino é melhor em todos os outros lugares. E nem todos os lugares do país estão equipados com uma máquina de cartão de crédito, então é apenas em dinheiro.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'How much cash do I need to carry with me?',
                    fr: "Combien d'argent liquide dois-je emporter avec moi ?",
                    es: '¿Cuánto efectivo debo llevar conmigo?',
                    pt: 'Quanto dinheiro em espécie devo levar comigo?',
                    ar: '',
                },
                answer: {
                    en: 'On the shorter desert trips, you will require a small amount of cash, unless you intend to buy souvenirs such as a turban, a rug, or fossils. Small amounts will be used for tea/coffee/soft drinks, a few dirhams for the toilet and for tips. It is helpful to have small bills and change.',
                    fr: "Lors des courts voyages dans le désert, vous aurez besoin d'une petite somme d'argent liquide, sauf si vous avez l'intention d'acheter des souvenirs tels qu'un turban, un tapis ou des fossiles. De petites sommes seront utilisées pour le thé/café/boissons gazeuses, quelques dirhams pour les toilettes et pour les pourboires. Il est utile d'avoir de petites coupures et de la monnaie.",
                    es: 'En los viajes más cortos por el desierto, necesitará una pequeña cantidad de efectivo, a menos que tenga la intención de comprar recuerdos como un turbante, una alfombra o fósiles. Pequeñas cantidades se utilizarán para té/café/refrescos, unos pocos dirhams para el baño y para propinas. Es útil tener billetes pequeños y cambio.',
                    pt: 'Nas viagens mais curtas pelo deserto, você precisará de uma pequena quantidade de dinheiro em espécie, a menos que pretenda comprar lembranças como um turbante, um tapete ou fósseis. Pequenas quantias serão usadas para chá/café/refrigerantes, alguns dirhams para o banheiro e para gorjetas. É útil ter notas pequenas e trocado.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'How much tip should I give to the driver?',
                    fr: 'Combien de pourboire dois-je donner au chauffeur ?',
                    es: '¿Cuánta propina debo dar al conductor?',
                    pt: 'Quanto devo dar de gorjeta ao motorista?',
                    ar: '',
                },
                answer: {
                    en: 'We recommend about 100 dirham a day according to satisfaction. On other tours it is recommended 10% of the total trip for your Driver-Guides, just so you know',
                    fr: "Nous recommandons environ 100 dirhams par jour selon la satisfaction. Sur d'autres circuits, il est recommandé de donner 10% du voyage total à vos chauffeurs-guides, juste pour que vous sachiez.",
                    es: 'Recomendamos alrededor de 100 dirhams al día según la satisfacción. En otros tours se recomienda un 10% del viaje total para sus conductores-guías, solo para que lo sepa.',
                    pt: 'Recomendamos cerca de 100 dirhams por dia de acordo com a satisfação. Em outros passeios, é recomendado 10% do total da viagem para seus motoristas-guias, só para que você saiba.',
                    ar: '',
                },
            },
        ],
    },
    {
        category: {
            en: 'Discounts and Extra Charges',
            fr: 'Réductions et frais supplémentaires',
            es: 'Descuentos y cargos adicionales',
            pt: 'Descontos e taxas extras',
            ar: '',
        },
        listFaqs: [
            {
                question: {
                    en: 'Is there a discount for last minute bookings?',
                    fr: 'Y a-t-il une remise pour les réservations de dernière minute ?',
                    es: '¿Hay algún descuento para reservas de última hora?',
                    pt: 'Há desconto para reservas de última hora?',
                    ar: '',
                },
                answer: {
                    en: "No, there isn't because the amount of work remains the same and in high season it may be difficult to find a drive or accommodation.",
                    fr: "Non, il n'y en a pas car la quantité de travail reste la même et en haute saison, il peut être difficile de trouver un chauffeur ou un logement.",
                    es: 'No, no lo hay porque la cantidad de trabajo sigue siendo la misma y en temporada alta puede ser difícil encontrar un conductor o alojamiento.',
                    pt: 'Não, não há porque a quantidade de trabalho permanece a mesma e na alta temporada pode ser difícil encontrar um motorista ou alojamento.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Is there a discount for early bookers?',
                    fr: 'Y a-t-il une remise pour les réservations anticipées ?',
                    es: '¿Hay algún descuento para los que reservan con anticipación?',
                    pt: 'Há desconto para reservas antecipadas?',
                    ar: '',
                },
                answer: {
                    en: "No, there isn't.",
                    fr: "Non, il n'y en a pas.",
                    es: 'No, no lo hay.',
                    pt: 'Não, não há.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Is there a discount for students?',
                    fr: 'Y a-t-il un rabais pour les étudiants ?',
                    es: '¿Hay algún descuento para estudiantes?',
                    pt: 'Há desconto para estudantes?',
                    ar: '',
                },
                answer: {
                    en: 'We often give student discounts which are calculated individually and according to the season. Just ask if we are able to offer you one.',
                    fr: 'Nous offrons souvent des réductions aux étudiants, qui sont calculées individuellement et selon la saison. Il suffit de demander si nous pouvons vous en offrir une.',
                    es: 'A menudo ofrecemos descuentos para estudiantes que se calculan de forma individual y según la temporada. Solo pregunta si podemos ofrecerte uno.',
                    pt: 'Frequentemente oferecemos descontos para estudantes que são calculados individualmente e de acordo com a temporada. Basta perguntar se podemos oferecer um.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Do you have diplomatic rates?',
                    fr: 'Avez-vous des tarifs diplomatiques ?',
                    es: '¿Tienen tarifas diplomáticas?',
                    pt: 'Vocês têm tarifas diplomáticas?',
                    ar: '',
                },
                answer: {
                    en: "No, we don't. Most of those involved in tourism in Morocco are supporting families & Nomads and peoples in the rural areas, which might be even extended families and are heavily reliant on their income.",
                    fr: "Non, nous n'en avons pas. La plupart de ceux qui travaillent dans le tourisme au Maroc soutiennent des familles, des nomades et des populations dans les zones rurales, qui peuvent même être des familles élargies, et dépendent fortement de leurs revenus.",
                    es: 'No, no tenemos. La mayoría de las personas involucradas en el turismo en Marruecos apoyan a familias, nómadas y personas en las áreas rurales, que incluso podrían ser familias extendidas, y dependen en gran medida de sus ingresos.',
                    pt: 'Não, nós não temos. A maioria das pessoas envolvidas no turismo em Marrocos apoia famílias, nômades e pessoas em áreas rurais, que podem até ser famílias extensas, e dependem fortemente de sua renda.',
                    ar: '',
                },
            },
            {
                question: {
                    en: "Is there an extra charge for the driver's food and accommodation?",
                    fr: "Y a-t-il des frais supplémentaires pour la nourriture et l'hébergement du chauffeur ?",
                    es: '¿Hay un cargo extra por la comida y el alojamiento del conductor?',
                    pt: 'Há uma taxa extra para a comida e acomodação do motorista?',
                    ar: '',
                },
                answer: {
                    en: 'They are included in the price quoted.',
                    fr: 'Ils sont inclus dans le prix indiqué.',
                    es: 'Están incluidos en el precio cotizado.',
                    pt: 'Eles estão incluídos no preço cotado.',
                    ar: '',
                },
            },
        ],
    },
    {
        category: {
            en: 'Group and tailor-made tours',
            fr: 'Visites en groupe et sur mesure',
            es: 'Tours en grupo y a medida',
            pt: 'Tours em grupo e personalizados',
            ar: '',
        },
        listFaqs: [
            {
                question: {
                    en: 'Do you organize group tours?',
                    fr: 'Organisez-vous des visites de groupe ?',
                    es: '¿Organizan tours en grupo?',
                    pt: 'Vocês organizam passeios em grupo?',
                    ar: '',
                },
                answer: {
                    en: 'Yes, we frequently do. We just need to know exact numbers for the logistics and whether you prefer to take the greater comfort of the 4x4s or to travel all together in a luxury minivan.',
                    fr: 'Oui, nous le faisons fréquemment. Nous avons juste besoin de connaître le nombre exact de personnes pour la logistique et de savoir si vous préférez le plus grand confort des 4x4 ou voyager tous ensemble dans un minivan de luxe.',
                    es: 'Sí, con frecuencia lo hacemos. Solo necesitamos conocer el número exacto de personas para la logística y si prefieren tomar la mayor comodidad de los 4x4 o viajar todos juntos en una minivan de lujo.',
                    pt: 'Sim, frequentemente fazemos. Só precisamos saber o número exato de pessoas para a logística e se você prefere o maior conforto dos 4x4 ou viajar todos juntos em uma minivan de luxo.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Can I customize any of your pre-made tours to my personal interests?',
                    fr: "Puis-je personnaliser l'un de vos circuits préétablis selon mes intérêts personnels ?",
                    es: '¿Puedo personalizar alguno de sus tours preestablecidos según mis intereses personales?',
                    pt: 'Posso personalizar algum dos seus passeios pré-configurados de acordo com meus interesses pessoais?',
                    ar: '',
                },
                answer: {
                    en: 'Yes, absolutely and we do this on a very regular basis. Just let us know what precisely you have in mind, so that we can make one or more suggestions until we find what suits you best.',
                    fr: "Oui, absolument et nous le faisons très régulièrement. Dites-nous simplement ce que vous avez précisément en tête, afin que nous puissions faire une ou plusieurs suggestions jusqu'à ce que nous trouvions ce qui vous convient le mieux.",
                    es: 'Sí, absolutamente y lo hacemos de forma muy regular. Solo dinos qué tienes en mente exactamente, para que podamos hacer una o más sugerencias hasta encontrar lo que mejor se adapte a ti.',
                    pt: 'Sim, absolutamente e fazemos isso de forma muito regular. Apenas nos diga exatamente o que você tem em mente, para que possamos fazer uma ou mais sugestões até encontrarmos o que melhor lhe convém.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Can we share a tour with another party?',
                    fr: 'Pouvons-nous partager une visite avec une autre partie ?',
                    es: '¿Podemos compartir un tour con otro grupo?',
                    pt: 'Podemos compartilhar um passeio com outra festa?',
                    ar: '',
                },
                answer: {
                    en: 'Yes, of course, provided we have others with the same destinations on the same dates and they are willing to share.',
                    fr: "Oui, bien sûr, à condition que nous ayons d'autres personnes avec les mêmes destinations aux mêmes dates et qu'elles soient prêtes à partager.",
                    es: 'Sí, por supuesto, siempre que tengamos a otros con los mismos destinos en las mismas fechas y estén dispuestos a compartir.',
                    pt: 'Sim, claro, desde que tenhamos outros com os mesmos destinos nas mesmas datas e estejam dispostos a compartilhar.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Do I have to share a tent in the desert camp if I share the tour?',
                    fr: 'Dois-je partager une tente dans le campement dans le désert si je partage la visite ?',
                    es: '¿Tengo que compartir una tienda en el campamento en el desierto si comparto el tour?',
                    pt: 'Tenho que compartilhar uma barraca no acampamento no deserto se eu compartilhar o passeio?',
                    ar: '',
                },
                answer: {
                    en: 'Never.',
                    fr: 'Jamais.',
                    es: 'Nunca.',
                    pt: 'Nunca.',
                    ar: '',
                },
            },
        ],
    },
    {
        category: {
            en: 'Camps, accommodation and their facilities',
            fr: 'Camps, hébergements et leurs installations',
            es: 'Campamentos, alojamientos y sus instalaciones',
            pt: 'Acampamentos, acomodações e suas instalações',
            ar: '',
        },
        listFaqs: [
            {
                question: {
                    en: 'What is the difference between authentic and luxury camps?',
                    fr: 'Quelle est la différence entre les camps authentiques et de luxe ?',
                    es: '¿Cuál es la diferencia entre los campamentos auténticos y de lujo?',
                    pt: 'Qual é a diferença entre acampamentos autênticos e de luxo?',
                    ar: '',
                },
                answer: {
                    en: 'Traditional camps: The tents themselves are modelled on the tents traditionally used by the local nomads, and to prevent the rain, sand and dust from entering, the walls and ceiling are lined. Sometimes the door is wooden but other camps hang a traditional goat hair blanket, or a woven Berber blanket or rug. There are wooden or metal bedsteads, clean sheets and pillowcases, blankets, electric light, a table and rugs on the floor. Each family or couple has their own tent and the bathroom facilities are shared with hot water provided by solar panels. There is a communal dining area. Luxury camps: The tents are made of a very different white and black material which is waterproof. These private tents are spacious and are equipped with king-sized beds. The furnishings are equally luxurious with beautiful metal lamps and there are large tables, mirrors and armchairs to relax in, and electric sockets. Each tent has its own bathroom, with a separate shower and toilet. Meals are eaten communally in a large, beautifully decorated, separate restaurant tent.',
                    fr: "Camps traditionnels : Les tentes sont elles-mêmes modélisées sur les tentes traditionnellement utilisées par les nomades locaux, et pour empêcher la pluie, le sable et la poussière d'entrer, les murs et le plafond sont doublés. Parfois, la porte est en bois mais d'autres camps accrochent une couverture traditionnelle en poil de chèvre, ou un tapis ou une couverture berbère tissée. Il y a des cadres de lit en bois ou en métal, des draps et des taies d'oreiller propres, des couvertures, de la lumière électrique, une table et des tapis sur le sol. Chaque famille ou couple a sa propre tente et les installations sanitaires sont partagées avec de l'eau chaude fournie par des panneaux solaires. Il y a une salle à manger commune. Camps de luxe : Les tentes sont faites d'un matériau blanc et noir très différent qui est imperméable. Ces tentes privées sont spacieuses et sont équipées de lits king-size. L'ameublement est tout aussi luxueux avec de belles lampes en métal et il y a de grandes tables, des miroirs et des fauteuils pour se détendre, et des prises électriques. Chaque tente a sa propre salle de bain, avec une douche et des toilettes séparées. Les repas sont pris en commun dans une grande tente de restaurant séparée, magnifiquement décorée.",
                    es: 'Campamentos tradicionales: Las tiendas de campaña están modeladas según las tiendas de campaña utilizadas tradicionalmente por los nómadas locales, y para evitar que la lluvia, la arena y el polvo entren, las paredes y el techo están forrados. A veces, la puerta es de madera, pero otros campamentos cuelgan una manta tradicional de pelo de cabra, o una manta o alfombra bereber tejida. Hay camas de madera o metal, sábanas y fundas de almohada limpias, mantas, luz eléctrica, una mesa y alfombras en el suelo. Cada familia o pareja tiene su propia tienda de campaña y las instalaciones de baño son compartidas con agua caliente proporcionada por paneles solares. Hay un área de comedor común. Campamentos de lujo: Las tiendas de campaña están hechas de un material blanco y negro muy diferente que es impermeable. Estas tiendas privadas son espaciosas y están equipadas con camas king-size. El mobiliario es igualmente lujoso con hermosas lámparas de metal y hay grandes mesas, espejos y sillones para relajarse, y enchufes eléctricos. Cada tienda tiene su propio baño, con una ducha y un inodoro separados. Las comidas se toman en común en una gran tienda de restaurante separada, bellamente decorada.',
                    pt: "Acampamentos tradicionais: As tendas são modeladas segundo as tendas tradicionalmente usadas pelos nômades locais e, para evitar que a chuva, a areia e o pó entrem, as paredes e o teto são forrados. Às vezes, a porta é de madeira, mas outros acampamentos penduram um cobertor tradicional de cabelo de cabra, ou um tapete ou cobertor berbere tecido. Existem camas de madeira ou metal, lençóis e fronhas limpos, cobertores, luz elétrica, uma mesa e tapetes no chão. Cada família ou casal tem sua própria tenda e as instalações de banho são compartilhadas com água quente fornecida por painéis solares. Há uma área de jantar comunitária. Acampamentos de luxo: As tendas são feitas de um material branco e preto muito diferente que é à prova d'água. Essas tendas privadas são espaçosas e estão equipadas com camas king-size. O mobiliário é igualmente luxuoso, com belas luminárias de metal e há grandes mesas, espelhos e poltronas para relaxar, e tomadas elétricas. Cada tenda tem seu próprio banheiro, com chuveiro e vaso sanitário separados. As refeições são feitas em comunidade em uma grande tenda de restaurante separada, lindamente decorada.",
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Is there electricity in the camp in the desert to charge our phones and cameras?',
                    fr: "Y a-t-il de l'électricité dans le camp dans le désert pour charger nos téléphones et nos appareils photo ?",
                    es: '¿Hay electricidad en el campamento en el desierto para cargar nuestros teléfonos y cámaras?',
                    pt: 'Há eletricidade no acampamento no deserto para carregar nossos telefones e câmeras?',
                    ar: '',
                },
                answer: {
                    en: 'Yes, there are sockets in the tents and the communal dining area.',
                    fr: 'Oui, il y a des prises de courant dans les tentes et dans la salle à manger commune.',
                    es: 'Sí, hay enchufes en las tiendas de campaña y en el área de comedor común.',
                    pt: 'Sim, há tomadas nas tendas e na área de refeições comunitárias.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Is there electricity in the camp in the desert to charge our phones and cameras?',
                    fr: "Y a-t-il de l'électricité dans le camp dans le désert pour charger nos téléphones et nos appareils photo ?",
                    es: '¿Hay electricidad en el campamento en el desierto para cargar nuestros teléfonos y cámaras?',
                    pt: 'Há eletricidade no acampamento no deserto para carregar nossos telefones e câmeras?',
                    ar: '',
                },
                answer: {
                    en: 'Yes, there are sockets in the tents and the communal dining area.',
                    fr: 'Oui, il y a des prises de courant dans les tentes et dans la salle à manger commune.',
                    es: 'Sí, hay enchufes en las tiendas de campaña y en el área de comedor común.',
                    pt: 'Sim, existem tomadas nas tendas e na área de refeições comunitárias.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Is there Wi-Fi in the desert?',
                    fr: 'Y a-t-il du Wi-Fi dans le désert ?',
                    es: '¿Hay Wi-Fi en el desierto?',
                    ar: '',
                    pt: 'Há Wi-Fi no deserto?',
                },
                answer: {
                    en: 'Yes, also you will get 3/4G coverage on your mobile phone.',
                    fr: "Oui, vous bénéficierez également d'une couverture 3/4G sur votre téléphone portable.",
                    es: 'Sí, también tendrás cobertura 3/4G en tu teléfono móvil.',
                    pt: 'Sim, você também terá cobertura 3/4G em seu telefone celular.',
                    ar: '',
                },
            },
            {
                question: {
                    en: "I don't want to ride camels, so how are we going to get to the camp?",
                    fr: 'Je ne veux pas monter à dos de chameau, comment allons-nous nous rendre au camp ?',
                    es: 'No quiero montar en camellos, ¿cómo llegaremos al campamento?',
                    pt: 'Eu não quero andar de camelo, então como vamos chegar ao acampamento?',
                    ar: '',
                },
                answer: {
                    en: 'There is no obligation to ride a camel and you will reach the camp in the 4x4.',
                    fr: "Il n'y a aucune obligation de monter à dos de chameau et vous atteindrez le camp en 4x4.",
                    es: 'No hay obligación de montar en camello y llegarás al campamento en el 4x4.',
                    pt: 'Não há obrigação de andar de camelo e você chegará ao acampamento no 4x4.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'In the desert, are toilets and showers shared or private?',
                    fr: 'Dans le désert, les toilettes et les douches sont-elles partagées ou privées ?',
                    es: '¿En el desierto, los baños y las duchas son compartidos o privados?',
                    pt: 'No deserto, os banheiros e chuveiros são compartilhados ou privativos?',
                    ar: '',
                },
                answer: {
                    en: 'In the traditional camps, the bathroom facilities are shared. In the luxury camps, each tent has its own bathroom with the toilet and shower/washbasin usually separated from each other.',
                    fr: 'Dans les camps traditionnels, les installations sanitaires sont partagées. Dans les camps de luxe, chaque tente dispose de sa propre salle de bains avec toilettes et douche/lavabo généralement séparés.',
                    es: 'En los campamentos tradicionales, las instalaciones de baño son compartidas. En los campamentos de lujo, cada tienda tiene su propio baño con el inodoro y la ducha/lavabo generalmente separados entre sí.',
                    pt: 'Nos acampamentos tradicionais, as instalações sanitárias são compartilhadas. Nos acampamentos de luxo, cada barraca tem seu próprio banheiro com vaso sanitário e chuveiro/lavatório geralmente separados um do outro.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Can we bring all our luggage to the camp in the desert?',
                    fr: 'Pouvons-nous apporter tous nos bagages au camp dans le désert ?',
                    es: '¿Podemos llevar todo nuestro equipaje al campamento en el desierto?',
                    pt: 'Podemos levar toda a bagagem para o acampamento no deserto?',
                    ar: '',
                },
                answer: {
                    en: 'Yes, you can and it will be carried to your tent for you.',
                    fr: "Oui, vous pouvez et ils seront transportés jusqu'à votre tente pour vous.",
                    es: 'Sí, pueden y serán llevados a su tienda para ustedes.',
                    pt: 'Sim, podem e serão transportadas para sua barraca para vocês.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Are the rooms in the accommodation afterwards?',
                    fr: "Les chambres dans l'hébergement ont-elles leur propre salle de bain ?",
                    es: '¿Las habitaciones en el alojamiento tienen su propio baño?',
                    pt: 'Os quartos no alojamento têm banheiro próprio?',
                    ar: '',
                },
                answer: {
                    en: 'Yes, all bedrooms, wherever you spend the night, have their own private bathroom.',
                    fr: 'Oui, toutes les chambres, où que vous passiez la nuit, ont leur propre salle de bain privée.',
                    es: 'Sí, todas las habitaciones, donde pases la noche, tienen su propio baño privado.',
                    pt: 'Sim, todos os quartos, onde quer que você passe a noite, têm seu próprio banheiro privativo.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Can I choose where to spend the night?',
                    fr: 'Puis-je choisir où passer la nuit ?',
                    es: '¿Puedo elegir dónde pasar la noche?',
                    pt: 'Posso escolher onde passar a noite?',
                    ar: '',
                },
                answer: {
                    en: 'When we write to you, we send you a list of the accommodation and camps we work with. These are places where we know that we can rely on the quality and the service. If you have a specific choice, we will try to book there. But if it is a late booking or high season, the most popular places may be full and we will book you into somewhere similar.',
                    fr: "Lorsque nous vous écrivons, nous vous envoyons une liste des hébergements et des camps avec lesquels nous travaillons. Ce sont des endroits où nous savons que nous pouvons compter sur la qualité et le service. Si vous avez un choix spécifique, nous essaierons de réserver là-bas. Mais s'il s'agit d'une réservation tardive ou de haute saison, les endroits les plus populaires peuvent être complets et nous vous réserverons quelque part de similaire.",
                    es: 'Cuando te escribimos, te enviamos una lista de los alojamientos y campamentos con los que trabajamos. Estos son lugares donde sabemos que podemos confiar en la calidad y el servicio. Si tienes una elección específica, intentaremos reservar allí. Pero si es una reserva tardía o temporada alta, es posible que los lugares más populares estén llenos y te reservaremos en algún lugar similar.',
                    pt: 'Quando escrevemos para você, enviamos uma lista dos alojamentos e acampamentos com os quais trabalhamos. Estes são lugares onde sabemos que podemos confiar na qualidade e no serviço. Se você tiver uma escolha específica, tentaremos fazer a reserva lá. Mas se for uma reserva tardia ou alta temporada, os lugares mais populares podem estar cheios e reservaremos em algum lugar semelhante.',
                    ar: '',
                },
            },
        ],
    },
    {
        category: {
            en: 'Food',
            fr: 'Nourriture',
            es: 'Comida',
            pt: 'Comida',
            ar: '',
        },
        listFaqs: [
            {
                question: {
                    en: "What's are the traditional meals in Morocco",
                    fr: 'Quels sont les plats traditionnels au Maroc ?',
                    es: '¿Cuáles son las comidas tradicionales en Marruecos?',
                    pt: 'Quais são as refeições tradicionais em Marrocos?',
                    ar: '',
                },
                answer: {
                    en: "Moroccan cuisine is known for its rich Flavors, spices, and diverse influences. Some traditional meals in Morocco include:\n✓ Tagine: A slow-cooked stew typically made with meat (like lamb, chicken, or beef), vegetables, and a blend of aromatic spices. It's named after the clay pot it's cooked in.<br/>✓ Couscous: A staple made from steamed wheat granules, often served with vegetables, meat (such as lamb or chicken), and a flavourful broth.<br/>✓ Harira: A hearty soup, especially popular during Ramadan, made with tomatoes, lentils, chickpeas, and various spices. It often includes meat and is served with dates.<br/>✓ Pastilla: A Savory and sweet pastry filled with pigeon or chicken, almonds, and spices, all wrapped in layers of thin pastry.<br/>✓ Mechoui: Roasted lamb or goat, seasoned with various spices and slow-cooked until tender. It's often prepared during festive occasions.<br/>✓ Kefta: Ground meat (usually beef or lamb) mixed with herbs and spices, shaped into small patties or skewers, and grilled.<br/>✓ Briouat: Triangular pastries filled with a mixture of meat (often chicken or lamb), almonds, and spices, then fried until crispy.<br/>✓ Zaalouk: A salad made with cooked eggplant and tomatoes, flavoured with garlic, cumin, and coriander.<br/>✓ Msemen: Square-shaped, layered flatbread often served for breakfast or as a snack, sometimes accompanied by honey or jam.<br/><br/>Moroccan cuisine is diverse, and these dishes represent just a glimpse of the culinary richness found in the country. Meals are often accompanied by mint tea, a signature beverage in Moroccan culture.",
                    fr: "La cuisine marocaine est connue pour ses saveurs riches, ses épices et ses influences diverses. Certains plats traditionnels au Maroc incluent :<br/>✓ Tagine : Un ragoût cuit lentement, généralement fait avec de la viande (comme de l'agneau, du poulet ou du bœuf), des légumes et un mélange d'épices aromatiques. Il est nommé d'après la cocotte en terre cuite dans laquelle il est cuit.<br/>✓ Couscous : Un plat de base fait à partir de granules de blé cuits à la vapeur, souvent servi avec des légumes, de la viande (comme de l'agneau ou du poulet) et un bouillon savoureux.<br/>✓ Harira : Une soupe consistante, particulièrement populaire pendant le Ramadan, faite de tomates, de lentilles, de pois chiches et de diverses épices. Elle comprend souvent de la viande et est servie avec des dattes.<br/>✓ Pastilla : Une pâtisserie salée et sucrée remplie de pigeon ou de poulet, d'amandes et d'épices, le tout enveloppé dans des couches de pâte fine.<br/>✓ Mechoui : Agneau ou chèvre rôtis, assaisonnés de diverses épices et cuits lentement jusqu'à tendreté. Il est souvent préparé lors d'occasions festives.<br/>✓ Kefta : Viande hachée (généralement de bœuf ou d'agneau) mélangée avec des herbes et des épices, façonnée en petites galettes ou en brochettes, et grillée.<br/>✓ Briouat : Pâtisseries triangulaires remplies d'un mélange de viande (souvent de poulet ou d'agneau), d'amandes et d'épices, puis frites jusqu'à ce qu'elles soient croustillantes.<br/>✓ Zaalouk : Une salade à base d'aubergines cuites et de tomates, assaisonnée d'ail, de cumin et de coriandre.<br/>✓ Msemen : Pain plat carré et stratifié souvent servi au petit déjeuner ou en en-cas, parfois accompagné de miel ou de confiture.<br/><br/>La cuisine marocaine est diversifiée, et ces plats ne représentent qu'un aperçu de la richesse culinaire du pays. Les repas sont souvent accompagnés de thé à la menthe, une boisson emblématique de la culture marocaine.",
                    es: 'La cocina marroquí se caracteriza por sus ricos sabores, especias e influencias diversas. Algunos platos tradicionales de Marruecos incluyen:<br/>✓ Tajín: Un guiso cocido lentamente típicamente hecho con carne (como cordero, pollo o ternera), verduras y una mezcla de especias aromáticas. Recibe su nombre de la olla de barro en la que se cocina.<br/>✓ Cuscús: Un alimento básico hecho de granos de trigo al vapor, a menudo servido con verduras, carne (como cordero o pollo) y un caldo sabroso.<br/>✓ Harira: Una sopa contundente, especialmente popular durante el Ramadán, hecha con tomates, lentejas, garbanzos y diversas especias. A menudo incluye carne y se sirve con dátiles.<br/>✓ Pastilla: Un pastel salado y dulce relleno de paloma o pollo, almendras y especias, todo envuelto en capas de masa fina.<br/>✓ Mechoui: Cordero o cabrito asado, sazonado con diversas especias y cocido lentamente hasta que esté tierno. A menudo se prepara durante ocasiones festivas.<br/>✓ Kefta: Carne molida (generalmente de res o cordero) mezclada con hierbas y especias, formada en pequeñas albóndigas o brochetas y asada.<br/>✓ Briouat: Pasteles triangulares rellenos de una mezcla de carne (a menudo pollo o cordero), almendras y especias, luego fritos hasta que estén crujientes.<br/>✓ Zaalouk: Una ensalada hecha con berenjenas y tomates cocidos, sazonada con ajo, comino y cilantro.<br/>✓ Msemen: Pan plano en forma de cuadrado, a menudo servido para el desayuno o como refrigerio, a veces acompañado de miel o mermelada.<br/><br/>La cocina marroquí es diversa, y estos platos representan solo un vistazo a la riqueza culinaria del país. Las comidas suelen ir acompañadas de té de menta, una bebida característica de la cultura marroquí.',
                    pt: 'A culinária marroquina é conhecida por seus sabores ricos, especiarias e influências diversas. Algumas refeições tradicionais em Marrocos incluem:<br/>✓ Tajine: Um ensopado cozido lentamente geralmente feito com carne (como cordeiro, frango ou carne bovina), legumes e uma mistura de especiarias aromáticas. É nomeado após o pote de barro em que é cozido.<br/>✓ Cuscuz: Um alimento básico feito de grânulos de trigo cozidos no vapor, frequentemente servido com legumes, carne (como cordeiro ou frango) e um caldo saboroso.<br/>✓ Harira: Uma sopa substanciosa, especialmente popular durante o Ramadã, feita com tomates, lentilhas, grão-de-bico e diversas especiarias. Muitas vezes inclui carne e é servida com tâmaras.<br/>✓ Pastilla: Uma massa salgada e doce recheada com pombo ou frango, amêndoas e especiarias, tudo envolvido em camadas de massa fina.<br/>✓ Mechoui: Cordeiro ou cabrito assado, temperado com diversas especiarias e cozido lentamente até ficar macio. Muitas vezes é preparado durante ocasiões festivas.<br/>✓ Kefta: Carne moída (geralmente carne bovina ou cordeiro) misturada com ervas e especiarias, moldada em pequenos hambúrgueres ou espetos e grelhada.<br/>✓ Briouat: Pastéis triangulares recheados com uma mistura de carne (geralmente frango ou cordeiro), amêndoas e especiarias, depois fritos até ficarem crocantes.<br/>✓ Zaalouk: Uma salada feita com berinjela e tomate cozidos, temperada com alho, cominho e coentro.<br/>✓ Msemen: Pão plano em forma de quadrado, frequentemente servido no café da manhã ou como lanche, às vezes acompanhado de mel ou geléia.<br/><br/>A culinária marroquina é diversificada, e esses pratos representam apenas um vislumbre da riqueza culinária encontrada no país. As refeições muitas vezes são acompanhadas de chá de hortelã, uma bebida característica da cultura marroquina.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Should we bring our own water on the tour?',
                    fr: 'Devons-nous apporter notre propre eau lors de la visite ?',
                    es: '¿Deberíamos llevar nuestra propia agua en el tour?',
                    pt: 'Devemos trazer nossa própria água no passeio?',
                    ar: '',
                },
                answer: {
                    en: 'Yes, so that you have enough for your personal needs. There are shops all along the route where you can buy fresh. In the desert, we provide it for you.',
                    fr: "Oui, afin que vous ayez suffisamment pour vos besoins personnels. Il y a des magasins tout le long du parcours où vous pouvez acheter de l'eau fraîche. Dans le désert, nous vous la fournissons.",
                    es: 'Sí, para que tengas suficiente para tus necesidades personales. Hay tiendas a lo largo de la ruta donde puedes comprar agua fresca. En el desierto, te la proporcionamos.',
                    pt: 'Sim, para que você tenha o suficiente para suas necessidades pessoais. Há lojas ao longo do percurso onde você pode comprar água fresca. No deserto, nós a fornecemos para você.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Is vegetarian and vegan food available during the tour?',
                    fr: 'Des plats végétariens et végétaliens sont-ils disponibles pendant le tour ?',
                    es: '¿Hay comida vegetariana y vegana disponible durante el tour?',
                    pt: 'Comida vegetariana e vegana está disponível durante o passeio?',
                    ar: '',
                },
                answer: {
                    en: 'Yes, it is, but please let us know in advance so that we can ensure its provision. This type of diet is highly unusual in the Morocco.',
                    fr: "Oui, mais veuillez nous le faire savoir à l'avance afin que nous puissions assurer son approvisionnement. Ce type de régime est très inhabituel au Maroc.",
                    es: 'Sí, pero avísanos con anticipación para que podamos garantizar su provisión. Este tipo de dieta es muy inusual en Marruecos.',
                    pt: 'Sim, mas por favor nos avise com antecedência para que possamos garantir o fornecimento. Esse tipo de dieta é altamente incomum no Marrocos.',
                    ar: '',
                },
            },
        ],
    },
    {
        category: {
            en: 'Other relevant Questions',
            fr: 'Autres questions pertinentes',
            es: 'Otras preguntas relevantes',
            pt: 'Outras questões relevantes',
            ar: '',
        },
        listFaqs: [
            {
                question: {
                    en: 'Are children allowed on a desert trip to Morocco?',
                    fr: "Les enfants sont-ils autorisés lors d'un voyage dans le désert au Maroc ?",
                    es: '¿Se permiten niños en un viaje al desierto a Marruecos?',
                    pt: 'Crianças são permitidas em uma viagem ao deserto no Marrocos?',
                    ar: '',
                },
                answer: {
                    en: 'Most certainly. Children love it and at whatever age. We are happy to adjust trips to adapt to younger children if you wish for shorter days of car travel.',
                    fr: "Certainement. Les enfants adorent ça et à n'importe quel âge. Nous sommes heureux d'ajuster les voyages pour nous adapter aux jeunes enfants si vous souhaitez des journées plus courtes de voyage en voiture.",
                    es: 'Por supuesto. A los niños les encanta y a cualquier edad. Estamos felices de ajustar los viajes para adaptarnos a los niños más pequeños si desea días más cortos de viaje en coche.',
                    pt: 'Com certeza. As crianças adoram e em qualquer idade. Estamos felizes em ajustar as viagens para adaptar-se a crianças mais novas, se você desejar dias mais curtos de viagem de carro.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'I am pregnant; should I skip the tour to Morocco?',
                    fr: 'Je suis enceinte ; dois-je annuler le voyage au Maroc ?',
                    es: 'Estoy embarazada; ¿debería omitir el viaje a Marruecos?',
                    pt: 'Estou grávida; devo evitar a viagem para o Marrocos?',
                    ar: '',
                },
                answer: {
                    en: 'No, there is no need. However, do tell the driver to discuss whether you should avoid the offroads and consult with your doctor at home about the camel ride. But there is still plenty to see and do that will not be affected by a pregnancy.',
                    fr: "Non, ce n'est pas nécessaire. Cependant, informez le conducteur pour discuter de la possibilité d'éviter les pistes et consultez votre médecin à domicile concernant la balade à dos de chameau. Mais il y a encore beaucoup à voir et à faire qui ne sera pas affecté par une grossesse.",
                    es: 'No, no es necesario. Sin embargo, dígale al conductor que discuta si debería evitar los caminos fuera de la carretera y consulte con su médico en casa sobre el paseo en camello. Pero aún hay mucho que ver y hacer que no se verá afectado por un embarazo.',
                    pt: 'Não, não há necessidade. No entanto, informe ao motorista para discutir se você deve evitar as estradas de terra e consulte seu médico em casa sobre o passeio de camelo. Mas ainda há muito para ver e fazer que não será afetado por uma gravidez.',
                    ar: '',
                },
            },
            {
                question: {
                    en: 'Do we have to stop at souvenir shops?',
                    fr: 'Devons-nous nous arrêter dans des boutiques de souvenirs ?',
                    es: '¿Tenemos que parar en tiendas de recuerdos?',
                    pt: 'Precisamos parar em lojas de souvenirs?',
                    ar: '',
                },
                answer: {
                    en: 'There is absolutely no obligation to do so. Just let your driver know that this is uninteresting to you.',
                    fr: "Il n'y a absolument aucune obligation de le faire. Dites simplement à votre chauffeur que cela ne vous intéresse pas.",
                    es: 'No hay absolutamente ninguna obligación de hacerlo. Simplemente informe a su conductor que esto no le interesa.',
                    pt: 'Não há absolutamente nenhuma obrigação de fazer isso. Apenas informe ao seu motorista que isso não é interessante para você.',
                    ar: '',
                },
            },
        ],
    },
];
