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
        title: 'Item 1, Note that the development build is not optimized.',
        description: 'cliquer pour savoir plus',
        alt: 'alt for Item 1',
        img_src: '/img/welcome.jpg',
        link: '/excursions/string'
    },
    {
        id: '445',
        title: 'Item 2, To create a production build, use npm run build.',
        description: 'savoir plus sur ce tour',
        alt: 'alt for Item 2',
        img_src: '/img/3.jpeg',
        link: '/tours/string'
    },
    {
        id: '446',
        title: 'Item 3, To create a production build, use npm run build.',
        description: 'savoir plus sur ce tour',
        alt: 'alt for Item 3',
        img_src: '/img/4.jpg',
        link: '/tours/string'
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