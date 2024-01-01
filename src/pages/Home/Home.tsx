import Carousel from '../../common/components/Carousel';
import { Page } from '../../common/components/Page/Page';
import ContactUs from './ContactUs';
import Destinations from './Destinations';
import Gallery from './Gallery';
import Welcome from './Welcome/Welcome';

const IMAGES = [
    {
        id: '444',
        title: 'Item 1, Note that the development build is not optimized.',
        description: 'cliquer pour savoir plus',
        alt: 'alt for Item 1',
        url: '/img/1.jpg',
    },
    {
        id: '445',
        title: 'Item 2, To create a production build, use npm run build.',
        description: 'savoir plus sur ce tour',
        alt: 'alt for Item 2',
        url: '/img/2.jpg',
    },
];

export const Home = (): JSX.Element => {
    const homeText = 'Home';

    return (
        <Page description={homeText} keywords={homeText} title={homeText} displayTitle={false}>
            <Carousel images={IMAGES} />
            <Welcome />
            <Destinations />
            <Gallery />
            <ContactUs />
        </Page>
    );
};