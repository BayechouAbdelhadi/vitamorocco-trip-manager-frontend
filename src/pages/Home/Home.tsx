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
        description: 'Description for Item 1',
        alt: 'alt for Item 1',
        url: 'https://phlearn.com/wp-content/uploads/2019/03/tom-grimbert-tomgrimbert-665112-unsplash.jpg?w=1600&quality=99&strip=all',
    },
    {
        id: '445',
        title: 'Item 2, To create a production build, use npm run build.',
        description: 'Description for Item 2',
        alt: 'alt for Item 2',
        url: 'https://images.unsplash.com/photo-1563635707628-9d39fd827e84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    // {
    //     id: '4456',
    //     title: 'Item 3',
    //     description: 'Description for Item 3',
    //     alt: 'alt for Item 3',
    //     url: 'https://i.imgur.com/S1oE8qI.jpg',
    // },
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
