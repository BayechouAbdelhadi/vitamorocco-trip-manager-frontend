import { Page } from '../../../common/components/Page/Page';
import './TermsAndConditions.scss'

export const TermsAndConditions = (): JSX.Element => {
    const ServicesText = 'Terms And Conditions';

    return (
        <Page description={ServicesText} keywords={ServicesText} title={ServicesText} className='terms-and-conditions-container'>
            <p>
                <span>The Agreement :</span><br />
                By confirming your trip with VITA MOROCCO, you acknowledge and agree to
                the following booking conditions outlined below :
            </p>
            <ul>
                {TERMS_AND_CONDITIONS.map(termAndCondition => (
                    <li key={termAndCondition.category}>
                        <span>{termAndCondition.category}</span>
                        {termAndCondition.text}
                    </li>
                ))}
            </ul>
        </Page>
    );
};


const TERMS_AND_CONDITIONS = [
    {
        category: "Booking",
        text: <>
            <p>
                A booking form for each of the Tours, Treks or Day Trips is available on the
                relevant tour page. Please complete one to indicate your ideal traveling time and
                the number in your group. Please let us know if you have any special
                requirements.
            </p>
            <p>
                Upon receipt of the booking form, we will respond within the following 24 hours.
                Should this not be forthcoming, please resend it. Please check that a reply has
                not been saved in your &quot;spam&quot; box.
            </p>
            <p>
                Once you book take a tour or day trip, as on the website or an individual
                customized tour, a confirmation through 20% deposit will be requested. This can
                be done through a bank transfer, a secure encrypted website or PayPal. Once we
                have received your deposit, we shall confirm receipt.
            </p>
        </>
    },
    {
        category: "Force Majeure Clause",
        text: <p>
            In the event of unforeseen and uncontrollable circumstances, such as adverse
            weather, natural disasters, or other unavoidable events leading to last-minute
            changes or cancellations of your tour, including industrial disputes beyond our
            control, <strong>VITA MOROCCO</strong> will not be held liable.
        </p>
    },
    {
        category: "Passport and Visa",
        text: <ul>
            <li className='sub-li'>
                Travelers are responsible for ensuring valid passports and necessary visas.
            </li>
            <li className='sub-li'>
                <strong>VITA MOROCCO</strong> is not responsible for denied entry due to insufficient
                documentation.
            </li>
        </ul>
    },
    {
        category: "Travel Insurance",
        text: <p>
            Please ensure that you have taken out adequate and valid travel insurance for
            your trip with VITA MOROCCO. This should encompass coverage for loss,
            expenses, damages, accidents, injuries, illness, death, medical expenses
            (including pre-existing conditions), emergency repatriation, and personal liability.
            Additionally, we recommend coverage for the loss of personal items, delayed or
            cancelled flights, lost luggage, and stolen money. All insurance types are your
            responsibility, and we trust you will adequately cover yourself as outlined above.
        </p>
    },
    {
        category: "Cancellation Policy",
        text: <ul>
            <li className='sub-li'>
                More than 15 days prior to the trip: deposit refund. However, your deposit
                can be held for a future trip with VITA MOROCCO on a date of your choice.
            </li>
            <li className='sub-li'>
                14-8 days prior to the trip: 40% of the total cost will be charged.
            </li>
            <li className='sub-li'>
                Less than 7 days to the trip start date: 100% charge of the total cost.
            </li>
        </ul>
    },
    {
        category: "Itinerary Changes",
        text: <ul>
            <li className='sub-li'>
                <strong>VITA MOROCCO</strong> reserves the right to modify itineraries due to
                unexpected circumstances.
            </li>
            <li className='sub-li'>
                Comparable alternatives will be provided if changes are necessary.
            </li>
        </ul>
    },
    {
        category: "Special Requests",
        text: <p>
            Kindly notify us at the time of booking regarding any special requirements,
            including dietary needs or specific bed preferences such as king-sized beds based
            on your height. While we will make every effort to accommodate these requests
            within the possibilities available in Morocco, we cannot guarantee their fulfilment.
        </p>
    },
    {
        category: "Complaints",
        text: <p>
            If you encounter any dissatisfaction during your trip, please inform your driver,
            guide, or hotel staff immediately. They will make every effort to resolve the issue
            promptly. In the unlikely event that the matter persists, kindly notify us through
            our WhatsApp number or our Email. We assure you that your complaint will be
            addressed fairly and promptly.
        </p>
    },
]