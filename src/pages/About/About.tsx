import { Page } from '../../common/components/Page/Page'
import './About.scss'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { SyntheticEvent, useState } from 'react';
import Logo from '../../common/components/Logo';

const AboutText = 'About Vita Morocco';

export const About = (): JSX.Element => {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        console.log('newValue', newValue)
        setValue(newValue);
    };

    return (
        <Page description={AboutText} keywords={AboutText} title={AboutText} imgSrc='img/about/about_title.jpg' className='about-container' style={{ justifyContent: 'flex-start' }}>
            <Box sx={{ maxWidth: { xs: 350, sm: 680 }, marginTop: '1rem', bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    {TABS.map(tab =>
                        <Tab key={tab.label} label={tab.label} />
                    )}
                </Tabs>
            </Box>
            {TABS[value]?.component}

        </Page>
    );
};

const TABS = [
    {
        label: "about",
        component: <>
            <p>
                <strong>VITA MOROCCO</strong> is a Small local tour company based in Marrakech, created and managed by
                authentic local Imazighen, the Founder is Mohamed he is young man 25 years old with a
                degree in Travel agency & Tourism from the southeast of Morocco, with more than 12 years
                experience in the Tourism sector, specialized in creating personalized and authentic travel
                experiences.
            </p>
            <p>
                As artisans of journey design, our strength lies in crafting highly exclusive and personalized
                itineraries. We ensure a journey that not only meets, but exceeds the expectations of the
                discerning traveller. Our connection with clients is intimate and responsive, adapting fluidly
                throughout the travel experience. With us, you explore Morocco&apos;s hidden gems, guided by
                seasoned experts who are not just guides, but storytellers, revealing the secrets and wonders
                of their homeland.
            </p>
            <p>
                Understanding the need for peace of mind while traveling, we offer an unrivalled 24/7
                concierge service throughout your journey. This commitment to your comfort and security is
                a cornerstone of our philosophy. Our adventurous spirit, combined with a meticulous
                attention to detail, means we are constantly forging new paths, crafting journeys that are
                about engaging with the culture, history, and people of Morocco, rather than just observing
                them.
            </p>
            <p>
                Our itineraries are more than routes; they are narrative journeys, capturing the heart and
                soul of Morocco. We strive to create lasting memories, filled with emotions that resonate
                long after the journey ends. Each route is thoughtfully designed to bring you face-to-face
                with the authentic spirit of Morocco and its welcoming people.
            </p>
            <p>
                In the realm of travel, <strong>VITA MOROCCO</strong> stands out for its dedication to exclusive, innovative
                itinerary design. Every journey with us is a unique tapestry woven with expert precision from
                start to finish. When you travel with VITA MOROCCO you don&apos;t just visit Morocco, you
                experience it in a way that is profound, personalized, and utterly unforgettable.
            </p>
            <p>Join us at <strong>VITA MOROCCO</strong> for an extraordinary Moroccan adventure that is as unique as you
                are.</p></>
    },
    {
        label: "Services & offers",
        component: <>
            <p>
                <strong>VITA MOROCCO</strong> offers a diverse range of Morocco Tours,
                Excursions, Day Trips, activities, Accommodation and much more.
            </p>
            <p>
                In <strong>VITA MOROCCO</strong> we offer the best experienced drivers and knowledgeable local guides,
                that speaks fluent languages, English, Spanish, Italian, French, Arabic and Tamazight. With a
                big variety of services, you can explore Morocco on your terms with <strong>VITA MOROCCO</strong>.
                Whether you prefer Accommodation in hotel or a Riad, Standard Berber Camp or Luxury
                Desert Camps, we can provide you with everything you wish, Offering you the best of
                Morocco from the Imperial City Tours, Desert Tours & adventures, Family trips, Private &
                shared Tours, Atlas Mountains trek, Luxury VIP experiences, or a budget-friendly adventure
                we cater to your every wish. Travel serenely as we handle your transfers, accommodations,
                visits, activities and more. Enjoy the best prices and top-notch services with <strong>VITA MOROCCO</strong>.
                Your journey, your way.
            </p>
            <p>
                We are committed to ensuring the utmost safety and trust in every Morocco trip we offer.
                Our team of experts at <strong>VITA MOROCCO</strong> is well-versed in implementing rigorous safety
                measures, ensuring a secure and enjoyable travel experience for our valued customers. Our
                focus is on delivering meticulously planned Morocco travel products, distinguished by
                uniqueness and high quality, all tailored to the preferences of our customers, and offered at
                competitive rates.

            </p>
        </>
    },
    {
        label: "OUR TRAVELLERS",
        component: <>
            <p>
                We cater to independent travellers worldwide seeking a unique experience in Morocco. Our focus is
                on small groups - friends, families, students and couples - allowing for a relaxed and immersive
                journey. Check out TRIPADVISOR for traveller reviews.
            </p>
            <p>
                We plan your itinerary, but it&quot;s YOUR trip. You choose what to visit, what to see and explore, and how
                long to stay in each place and site. And when to stop, your personalized journey awaits in Morocco.

            </p>
            <h3>
                <strong>
                    <em>&quot;Morocco, Crafted to Your Dreams&quot;</em>
                </strong>
            </h3>
        </>
    },
    {
        label: "what you can do in morocco",
        component:
            <p>
                <strong>VITA MOROCCO</strong> provides a myriad of activities for your journey through Morocco. Immerse
                yourself in the local Amazigh-Berber culture with visits to Berber & Nomads families, visit
                and explore local cooperatives contributing to regional development. Engage in
                archaeological and historical explorations, hiking, Camel treks, horse Riding, Quads & Buggies
                Excursions, Cooking classes, pottery classes, Food city tours, taste mint-tea, sleep in a desert
                tent. Experience authentic accommodation in Berber homes. sandboarding to windsurfing,
                kite surfing, stargazing, learn bargaining in local markets. we offer a comprehensive and
                enriching adventure in Morocco.
            </p>
    }
]