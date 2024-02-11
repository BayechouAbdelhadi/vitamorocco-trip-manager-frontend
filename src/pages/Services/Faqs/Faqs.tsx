import { Page } from '../../../common/components/Page/Page';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { scrollToTop } from '../../../common/utils';

import './Faqs.scss'

export const Faqs = (): JSX.Element => {
    const FaqsText = 'FAQS';

    return (
        <Page description={FaqsText} keywords={FaqsText} title={FaqsText} className='faqs-container'>
            <ol>
                {
                    FAQs.map(faq => (
                        <li key={faq.category}>
                            <span>{faq.category}</span>
                            {faq.listFaqs.map(item =>
                                <Accordion key={item.question}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        {item.question}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <em>{item.answer}</em>
                                    </AccordionDetails>
                                </Accordion>
                            )}
                        </li>
                    ))
                }
            </ol>
            <h4>
                Did our FAQs address your inquiries effectively? If you have more questions, we&apos;re here to
                assist you further. <Link to="/contact" onClick={scrollToTop} style={{ color: "#ff385c" }}>Don&apos;t hesitate to connect!</Link>
            </h4>
        </Page>
    );
};

const FAQs = [
    {
        category: "Payment",
        listFaqs: [
            {
                question: "How do I pay the deposit?",
                answer: "The deposit can be paid in a variety of ways: A Transfer to our bank account (Visa, Master Card, American Express) or via PayPal."
            },
            {
                question: "How do I pay the balance?",
                answer: "The balance is normally paid to the driver or Guide in Cash."
            },
            {
                question: "Is it better to use the local currency or can I use the US dollar and euro?",
                answer: "we can take euro, sterling, USD, or dirham, but otherwise Moroccan dirham is better everywhere else. And not everywhere in the country is equipped with a credit card machine so it is cash only"
            },
            {
                question: "How much cash do I need to carry with me?",
                answer: "On the shorter desert trips, you will require a small amount of cash, unless you intend to buy souvenirs such as a turban, a rug, or fossils. Small amounts will be used for tea/coffee/soft drinks, a few dirhams for the toilet and for tips. It is helpful to have small bills and change."
            },
            {
                question: "How much tip should I give to the driver?",
                answer: "We recommend about 100 dirham a day according to satisfaction. On other tours it is recommended 10% of the total trip for your Driver-Guides, just so you know"
            },
        ]
    },
    {
        category: "Discounts and Extra Charges",
        listFaqs: [
            {
                question: "Is there a discount for last minute bookings?",
                answer: "No, there isn't because the amount of work remains the same and in high season it may be difficult to find a drive or accommodation."
            },
            {
                question: "Is there a discount for early bookers?",
                answer: "No, there isn't."
            },
            {
                question: "Is there a discount for students?",
                answer: "We often give student discounts which are calculated individually and according to the season. Just ask if we are able to offer you one."
            },
            {
                question: "Do you have diplomatic rates?",
                answer: "No, we don't. Most of those involved in tourism in Morocco are supporting families & Nomads and peoples in the rural aeras, which might be even extended families and are heavily reliant on their income."
            },
            {
                question: "Is there an extra charge for the driver's food and accommodation?",
                answer: "They are included in the price quoted."
            },
        ]
    },
    {
        category: "Group and tailor-made tours",
        listFaqs: [
            {
                question: "Do you organize group tours?",
                answer: "Yes, we frequently do. We just need to know exact numbers for the logistics and whether you prefer to take the greater comfort of the 4x4s or to travel all together in a luxury minivan."
            },
            {
                question: "Can I customize any of your pre-made tours to my personal interests?",
                answer: "Yes, absolutely and we do this on a very regular basis. Just let us know what precisely you have in mind, so that we can make one or more suggestions until we find what suits you best."
            },
            {
                question: "Can we share a tour with another party?",
                answer: "Yes, of course, provided we have others with the same destinations on the same dates and they are willing to share."
            },
            {
                question: "Do I have to share a tent in the desert camp if I share the tour?",
                answer: "Never."
            }
        ]
    },
    {
        category: "Camps, accommodation and their facilities",
        listFaqs: [
            {
                question: "What is the difference between authentic and luxury camps?",
                answer: ""
            },
            {
                question: "Is there electricity in the camp in the desert to charge our phones and cameras?",
                answer: "Yes, there are sockets in the tents and the communal dining area."
            },
            {
                question: "Do we need sleeping bags for the overnight in the desert camp?",
                answer: "If you are spending the night in one of the camps, you do not need to bring a sleeping bag. If you are trekking you may prefer your own personal, private sleeping bag, though mattresses and blankets are provided."
            },
            {
                question: "Is there Wi-Fi in the desert?",
                answer: "Yes, also you will get 3/4G coverage on your mobile phone."
            },
            {
                question: "I don't want to ride camels, so how are we going to get to the camp?",
                answer: "There is no obligation to ride a camel and you will reach the camp in the 4x4."
            },
            {
                question: "In the desert, are toilets and showers shared or private?",
                answer: "In the traditional camps, the bathroom facilities are shared. In the luxury camps, each tent has its own bathroom with the toilet and shower/washbasin usually separated from each other."
            },
            {
                question: "Can we bring all our luggage to the camp in the desert?",
                answer: "Yes, you can and it will be carried to your tent for you."
            },
            {
                question: "Are the rooms in the accommodation afterwards?",
                answer: "Yes, all bedrooms, wherever you spend the night, have their own private bathroom."
            },
            {
                question: "Can I choose where to spend the night?",
                answer: "When we write to you, we send you a list of the accommodation and camps we work with. These are places where we know that we can rely on the quality and the service. If you have a specific choice, we will try to book there. But if it is a late booking or high season, the most popular places may be full and we will book you into somewhere similar."
            },
        ]
    },
    {
        category: "Food",
        listFaqs: [
            {
                question: "What's are the traditional meals in Morocco",
                answer: ""
            },
            {
                question: "Should we bring our own water on the tour?",
                answer: "Yes, so that you have enough for your personal needs. There are shops all along the route where you can buy fresh. In the desert, we provide it for you."
            },
            {
                question: "Is vegetarian and vegan food available during the tour?",
                answer: "Yes, it is, but please let us know in advance so that we can ensure its provision. This type of diet is highly unusual in the Morocco."
            }
        ]
    },
    {
        category: "Other relevant Questions",
        listFaqs: [
            {
                question: "Are children allowed on a desert trip to Morocco?",
                answer: "Most certainly. Children love it and at whatever age. We are happy to adjust trips to adapt to younger children if you wish for shorter days of car travel."
            },
            {
                question: "I am pregnant; should I skip the tour to Morocco?",
                answer: "No, there is no need. However, do tell the driver to discuss whether you should avoid the offroads and consult with your doctor at home about the camel ride. But there is still plenty to see and do that will not be affected by a pregnancy."
            },
            {
                question: "Do we have to stop at souvenir shops?",
                answer: "There is absolutely no obligation to do so. Just let your driver know that this is uninteresting to you."
            },
        ]
    },
]
