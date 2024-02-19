import { Page } from '../../common/components/Page/Page'
import Carousel from '../../common/components/Carousel'
import ContactUs from './ContactUs'
import Services from './Services/Services'
import Gallery from './Gallery'
import TripAdvisorReviews from './TripAdvisorReviews'
import Welcome from './Welcome/Welcome'

const IMAGES = [
    {
        id: '444',
        title: 'Crafting Dreams into Stunning Realities',
        description: 'Start your Dream with a Click',
        alt: 'Crafting Dreams into Stunning Realities',
        img_src: '/img/carousel/1.jpg',
        link: '/tours'
    },
    {
        id: '445',
        title: 'From Excursions to Day Trips & Activities, we\'ve got everything covered.',
        description: 'Dive into the Adventure',
        alt: 'alt for Item 2',
        img_src: '/img/carousel/2.jpeg',
        link: '/excursions'
    },
    {
        id: '446',
        title: 'Personalized itineraries & Trips, experience unforgettable holidays across Morocco.',
        description: 'Contact us now And start Tomorrow',
        alt: 'alt for Item 3',
        img_src: '/img/carousel/3.jpg',
        link: '/contact'
    },
];

export const Home = (): JSX.Element => {
    const homeText = 'Home';

    return (
        <Page description={homeText} keywords={homeText} title={homeText} displayTitle={false}>
            <Carousel images={IMAGES} />
            <div style={{ width: '100%', maxWidth: '1400px', padding: '0px 30px' }}>
                <Welcome />
                <Services />
                <TripAdvisorReviews />
                <Gallery />
                <ContactUs />
            </div>
        </Page>
    );
};