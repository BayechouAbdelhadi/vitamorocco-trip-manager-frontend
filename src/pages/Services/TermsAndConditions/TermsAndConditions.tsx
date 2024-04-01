import { useTranslation } from 'react-i18next';
import { Page } from '../../../common/components/Page/Page';
import parse from 'html-react-parser';
import { AvailableLanguage } from '../../../locales';

import './TermsAndConditions.scss'

const ServicesText = 'Terms And Conditions';


export const TermsAndConditions = (): JSX.Element => {

    const { t, i18n } = useTranslation()

    const currentLanguage = (i18n.language ?? "en") as AvailableLanguage

    return (
        <Page
            description={ServicesText}
            keywords={ServicesText}
            title={t('terms_and_conditions')}
            imgSrc={`/img/terms_and_conditions/title.jpg`}
            className='terms-and-conditions-container'
        >
            {parse(t('the_agreement'))}
            <ul>
                {TERMS_AND_CONDITIONS.map(termAndCondition => (
                    <li key={termAndCondition.category[currentLanguage]}>
                        <span>{termAndCondition.category[currentLanguage]}</span>
                        {parse(termAndCondition.text[currentLanguage])}
                    </li>
                ))}
            </ul>
        </Page>
    );
};


const TERMS_AND_CONDITIONS = [
    {
        "category": {
            "en": "Booking",
            "fr": "Réservation",
            "es": "Reserva",
            "pt": "Reserva"
        },
        "text": {
            "en": "<><p>A booking form for each of the Tours, Treks or Day Trips is available on the relevant tour page. Please complete one to indicate your ideal traveling time and the number in your group. Please let us know if you have any special requirements.</p><p>Upon receipt of the booking form, we will respond within the following 24 hours. Should this not be forthcoming, please resend it. Please check that a reply has not been saved in your &quot;spam&quot; box.</p><p> Once you book take a tour or day trip, as on the website or an individual customized tour, a confirmation through 20% deposit will be requested. This can be done through a bank transfer, a secure encrypted website or PayPal. Once we have received your deposit, we shall confirm receipt.</p></>",
            "fr": "<><p>Un formulaire de réservation pour chacune des visites, des trekkings ou des excursions d'une journée est disponible sur la page de visite correspondante. Veuillez en remplir un pour indiquer votre heure de départ idéale et le nombre dans votre groupe. Veuillez nous informer si vous avez des exigences particulières.</p><p> Dès réception du formulaire de réservation, nous vous répondrons dans les 24 heures suivantes. Si cela n'est pas le cas, veuillez le renvoyer. Veuillez vérifier qu'une réponse n'a pas été enregistrée dans votre boîte de réception &quot;spam&quot;.</p><p>Une fois que vous réservez une visite ou une excursion d'une journée, comme sur le site Web ou une visite personnalisée individuelle, une confirmation par le biais d'un dépôt de 20 % vous sera demandée. Ceci peut être fait par virement bancaire, sur un site Web sécurisé et crypté ou PayPal. Dès que nous aurons reçu votre dépôt, nous confirmerons sa réception.</p></>",
            "es": "<><p>Hay un formulario de reserva para cada uno de los tours, treks o excursiones de un día disponibles en la página de la visita correspondiente. Por favor, complete uno para indicar su hora de viaje ideal y el número en su grupo. Por favor, avísenos si tiene algún requisito especial.</p><p> Una vez recibido el formulario de reserva, responderemos dentro de las siguientes 24 horas. Si esto no sucede, por favor reenvíelo. Por favor, compruebe que una respuesta no ha sido guardada en su casilla de &quot;spam&quot;.</p><p> Una vez que reserve una visita o excursión de un día, como en el sitio web o una visita personalizada individual, se solicitará una confirmación a través de un depósito del 20 %. Esto puede hacerse a través de una transferencia bancaria, un sitio web seguro y encriptado o PayPal. Una vez que hayamos recibido su depósito, confirmaremos su recepción.</p></>",
            "pt": "<><p>Um formulário de reserva para cada um dos passeios, trekkings ou excursões de um dia está disponível na página da visita correspondente. Por favor, preencha um para indicar o seu horário de viagem ideal e o número no seu grupo. Por favor, avise-nos se tiver algum requisito especial.</p><p>Após o recebimento do formulário de reserva, responderemos dentro das próximas 24 horas. Se isso não acontecer, por favor, reenvie-o. Por favor, verifique se uma resposta não foi salva na sua caixa de &quot;spam&quot;.</p><p> Uma vez que você reserve uma visita ou excursão de um dia, como no site ou uma visita personalizada individual, será solicitada uma confirmação através de um depósito de 20 %. Isso pode ser feito por transferência bancária, em um site seguro e criptografado ou PayPal. Assim que nós recebermos o seu depósito, confirmaremos o recebimento.</p></>"
        }
    },
    {
        "category": {
            "en": "Force Majeure Clause",
            "fr": "Clause de Force Majeure",
            "es": "Cláusula de Fuerza Mayor",
            "pt": "Cláusula de Força Maior"
        },
        "text": {
            "en": "<p>In the event of unforeseen and uncontrollable circumstances, such as adverse weather, natural disasters, or other unavoidable events leading to last-minute changes or cancellations of your tour, including industrial disputes beyond our control, <strong>VITA MOROCCO</strong> will not be held liable.</p>",
            "fr": "<p>En cas de circonstances imprévues et incontrôlables, telles que des conditions météorologiques défavorables, des catastrophes naturelles ou d'autres événements inévitables conduisant à des changements de dernière minute ou à l'annulation de votre visite, y compris des conflits industriels hors de notre contrôle, <strong>VITA MOROCCO</strong> ne sera pas tenu responsable.</p>",
            "es": "<p>En caso de circunstancias imprevistas e incontrolables, como condiciones climáticas adversas, desastres naturales u otros eventos inevitables que conduzcan a cambios de último minuto o cancelaciones de su recorrido, incluidos conflictos industriales fuera de nuestro control, <strong>VITA MOROCCO</strong> no será responsable.</p>",
            "pt": "<p>No caso de circunstâncias imprevistas e incontroláveis, como condições climáticas adversas, desastres naturais ou outros eventos inevitáveis que levem a mudanças de última hora ou cancelamentos do seu passeio, incluindo conflitos industriais fora do nosso controle, <strong>VITA MOROCCO</strong> não será responsável.</p>"
        }
    },
    {
        "category": {
            "en": "Passport and Visa",
            "fr": "Passeport et Visa",
            "es": "Pasaporte y Visa",
            "pt": "Passaporte e Visto"
        },
        "text": {
            "en": "<ul><li className='sub-li'>Travelers are responsible for ensuring valid passports and necessary visas.</li><li className='sub-li'><strong>VITA MOROCCO</strong> is not responsible for denied entry due to insufficient documentation.</li></ul>",
            "fr": "<ul><li className='sub-li'>Les voyageurs sont responsables de s'assurer qu'ils disposent de passeports valides et des visas nécessaires.</li><li className='sub-li'><strong>VITA MOROCCO</strong> n'est pas responsable des refus d'entrée dus à une documentation insuffisante.</li></ul>",
            "es": "<ul><li className='sub-li'>Los viajeros son responsables de asegurarse de tener pasaportes válidos y visas necesarias.</li><li className='sub-li'><strong>VITA MOROCCO</strong> no es responsable de la entrada denegada debido a documentación insuficiente.</li></ul>",
            "pt": "<ul><li className='sub-li'>Os viajantes são responsáveis por garantir passaportes válidos e vistos necessários.</li><li className='sub-li'><strong>VITA MOROCCO</strong> não é responsável pela entrada negada devido à documentação insuficiente.</li></ul>"
        }
    },
    {
        "category": {
            "en": "Travel Insurance",
            "fr": "Assurance Voyage",
            "es": "Seguro de Viaje",
            "pt": "Seguro Viagem"
        },
        "text": {
            "en": "<p>Please ensure that you have taken out adequate and valid travel insurance for your trip with VITA MOROCCO. This should encompass coverage for loss, expenses, damages, accidents, injuries, illness, death, medical expenses (including pre-existing conditions), emergency repatriation, and personal liability. Additionally, we recommend coverage for the loss of personal items, delayed or cancelled flights, lost luggage, and stolen money. All insurance types are your responsibility, and we trust you will adequately cover yourself as outlined above.</p>",
            "fr": "<p>Veuillez vous assurer d'avoir souscrit une assurance voyage adéquate et valide pour votre voyage avec VITA MOROCCO. Cela devrait inclure une couverture pour les pertes, les dépenses, les dommages, les accidents, les blessures, les maladies, les décès, les frais médicaux (y compris les conditions préexistantes), le rapatriement d'urgence et la responsabilité civile. De plus, nous recommandons une couverture pour la perte d'objets personnels, les vols retardés ou annulés, les bagages perdus et l'argent volé. Tous les types d'assurance relèvent de votre responsabilité, et nous avons confiance en vous pour vous couvrir adéquatement comme indiqué ci-dessus.</p>",
            "es": "<p>Asegúrese de haber contratado un seguro de viaje adecuado y válido para su viaje con VITA MOROCCO. Esto debe incluir cobertura para pérdidas, gastos, daños, accidentes, lesiones, enfermedades, muerte, gastos médicos (incluidas condiciones preexistentes), repatriación de emergencia y responsabilidad personal. Además, recomendamos la cobertura para la pérdida de artículos personales, vuelos retrasados o cancelados, equipaje perdido y dinero robado. Todos los tipos de seguros son su responsabilidad, y confiamos en que se cubrirá adecuadamente según lo indicado anteriormente.</p>",
            "pt": "<p>Assegure-se de ter contratado um seguro de viagem adequado e válido para a sua viagem com a VITA MOROCCO. Isso deve abranger cobertura para perda, despesas, danos, acidentes, lesões, doenças, morte, despesas médicas (incluindo condições pré-existentes), repatriação de emergência e responsabilidade pessoal. Além disso, recomendamos cobertura para a perda de itens pessoais, voos atrasados ou cancelados, bagagem perdida e dinheiro roubado. Todos os tipos de seguros são de sua responsabilidade, e confiamos que você se cobrirá adequadamente conforme descrito acima.</p>"
        }
    },
    {
        "category": {
            "en": "Cancellation Policy",
            "fr": "Politique d'annulation",
            "es": "Política de cancelación",
            "pt": "Política de Cancelamento"
        },
        "text": {
            "en": "<ul><li className='sub-li'>More than 15 days prior to the trip: deposit refund. However, your deposit can be held for a future trip with VITA MOROCCO on a date of your choice.</li><li className='sub-li'>14-8 days prior to the trip: 40% of the total cost will be charged.</li><li className='sub-li'>Less than 7 days to the trip start date: 100% charge of the total cost.</li></ul>",
            "fr": "<ul><li className='sub-li'>Plus de 15 jours avant le départ : remboursement du dépôt. Cependant, votre dépôt peut être conservé pour un futur voyage avec VITA MOROCCO à une date de votre choix.</li><li className='sub-li'>14-8 jours avant le départ : 40 % du coût total sera facturé.</li><li className='sub-li'>Moins de 7 jours avant la date de début du voyage : 100 % du coût total sera facturé.</li></ul>",
            "es": "<ul><li className='sub-li'>Más de 15 días antes del viaje: reembolso del depósito. Sin embargo, su depósito puede ser retenido para un viaje futuro con VITA MOROCCO en una fecha de su elección.</li><li className='sub-li'>14-8 días antes del viaje: se cargará el 40% del costo total.</li><li className='sub-li'>Menos de 7 días antes de la fecha de inicio del viaje: se cobrará el 100% del costo total.</li></ul>",
            "pt": "<ul><li className='sub-li'>Mais de 15 dias antes da viagem: reembolso do depósito. No entanto, seu depósito pode ser retido para uma viagem futura com VITA MOROCCO em uma data de sua escolha.</li><li className='sub-li'>14-8 dias antes da viagem: 40% do custo total será cobrado.</li><li className='sub-li'>Menos de 7 dias para a data de início da viagem: 100% do custo total será cobrado.</li></ul>"
        }
    },
    {
        "category": {
            "en": "Itinerary Changes",
            "fr": "Changements d'itinéraire",
            "es": "Cambios en el itinerario",
            "pt": "Alterações no itinerário"
        },
        "text": {
            "en": "<ul><li className='sub-li'><strong>VITA MOROCCO</strong> reserves the right to modify itineraries due to unexpected circumstances.</li><li className='sub-li'>Comparable alternatives will be provided if changes are necessary.</li></ul>",
            "fr": "<ul><li className='sub-li'><strong>VITA MOROCCO</strong> se réserve le droit de modifier les itinéraires en raison de circonstances imprévues.</li><li className='sub-li'>Des alternatives comparables seront fournies si des changements sont nécessaires.</li></ul>",
            "es": "<ul><li className='sub-li'><strong>VITA MOROCCO</strong> se reserva el derecho de modificar los itinerarios debido a circunstancias imprevistas.</li><li className='sub-li'>Se proporcionarán alternativas comparables si son necesarios cambios.</li></ul>",
            "pt": "<ul><li className='sub-li'><strong>VITA MOROCCO</strong> reserva-se o direito de modificar itinerários devido a circunstâncias imprevistas.</li><li className='sub-li'>Alternativas comparáveis serão fornecidas se forem necessárias alterações.</li></ul>"
        }
    },
    {
        "category": {
            "en": "Special Requests",
            "fr": "Demandes spéciales",
            "es": "Solicitudes especiales",
            "pt": "Pedidos especiais"
        },
        "text": {
            "en": "<p>Kindly notify us at the time of booking regarding any special requirements, including dietary needs or specific bed preferences such as king-sized beds based on your height. While we will make every effort to accommodate these requests within the possibilities available in Morocco, we cannot guarantee their fulfillment.</p>",
            "fr": "<p>Veuillez nous informer au moment de la réservation de tout besoin spécial, y compris les besoins alimentaires ou les préférences de lit spécifiques comme les lits king-size en fonction de votre taille. Bien que nous ferons tout notre possible pour répondre à ces demandes dans les possibilités disponibles au Maroc, nous ne pouvons garantir leur réalisation.</p>",
            "es": "<p>Por favor, infórmenos al momento de la reserva sobre cualquier requisito especial, incluidas las necesidades dietéticas o las preferencias específicas de cama, como camas tamaño king según su altura. Si bien haremos todo lo posible para satisfacer estas solicitudes dentro de las posibilidades disponibles en Marruecos, no podemos garantizar su cumplimiento.</p>",
            "pt": "<p>Por favor, informe-nos no momento da reserva sobre quaisquer requisitos especiais, incluindo necessidades dietéticas ou preferências específicas de cama, como camas king-size com base na sua altura. Embora façamos todos os esforços para atender a esses pedidos dentro das possibilidades disponíveis em Marrocos, não podemos garantir o seu cumprimento.</p>"
        }
    },
    {
        "category": {
            "en": "Complaints",
            "fr": "Réclamations",
            "es": "Quejas",
            "pt": "Reclamações"
        },
        "text": {
            "en": "<p>If you encounter any dissatisfaction during your trip, please inform your driver, guide, or hotel staff immediately. They will make every effort to resolve the issue promptly. In the unlikely event that the matter persists, kindly notify us through our WhatsApp number or our Email. We assure you that your complaint will be addressed fairly and promptly.</p>",
            "fr": "<p>Si vous rencontrez une insatisfaction pendant votre voyage, veuillez en informer immédiatement votre chauffeur, votre guide ou le personnel de l'hôtel. Ils feront tout leur possible pour résoudre le problème rapidement. Dans le cas improbable où le problème persiste, veuillez nous en informer via notre numéro WhatsApp ou notre e-mail. Nous vous assurons que votre réclamation sera traitée équitablement et rapidement.</p>",
            "es": "<p>Si encuentra alguna insatisfacción durante su viaje, informe de inmediato a su conductor, guía o personal del hotel. Harán todo lo posible para resolver el problema de inmediato. En el improbable caso de que el problema persista, avísenos amablemente a través de nuestro número de WhatsApp o nuestro correo electrónico. Le aseguramos que su queja será tratada de manera justa y rápida.</p>",
            "pt": "<p>Se encontrar alguma insatisfação durante a sua viagem, por favor informe imediatamente o seu motorista, guia ou o pessoal do hotel. Eles farão todos os esforços para resolver o problema prontamente. No caso improvável de o problema persistir, por favor, nos avise através do nosso número de WhatsApp ou do nosso e-mail. Asseguramos que a sua reclamação será tratada de forma justa e rápida.</p>"
        }
    },
]