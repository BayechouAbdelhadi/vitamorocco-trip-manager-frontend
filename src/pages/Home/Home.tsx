import { Box, SvgIcon } from '@mui/material';
import Carousel from '../../common/components/Carousel';
import { Page } from '../../common/components/Page/Page';
// import { useCounter } from '../../database/counter';
// import { useCounter as useCounterRedux } from '../../store/front/counter';
import { EnglishFlag, FranceFlag, PortugalFlag, SpanishFlag } from '../../common/components/Flags/Flags';

const IMAGES = [
    {
        id: '444',
        title: 'Item 1',
        description: 'Description for Item 1',
        alt: 'Description for Item 1',
        url: 'https://phlearn.com/wp-content/uploads/2019/03/tom-grimbert-tomgrimbert-665112-unsplash.jpg?w=1600&quality=99&strip=all',
    },
    {
        id: '445',
        title: 'Item 2',
        description: 'Description for Item 2',
        alt: 'Description for Item 2',
        url: 'https://images.unsplash.com/photo-1563635707628-9d39fd827e84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
        id: '4456',
        title: 'Item 3',
        description: 'Description for Item 3',
        alt: 'Description for Item 2',
        url: 'https://i.imgur.com/S1oE8qI.jpg',
    },
];


export const Home = (): JSX.Element => {
    // const { counter, handleDecrementClick, handleIncrementClick } = useCounter();
    // const { counter: c, handleDecrementClick: hDC, handleIncrementClick: hIC } = useCounterRedux();
    const homeText = 'Home';

    return (
        <Page description={homeText} keywords={homeText} title={homeText} displayTitle={false}>
            <div style={{ display: 'flex', gap: '2rem', border: "3px solid red", width: "200px", height: "200px" }}>
                <EnglishFlag />
                <SpanishFlag />
                <PortugalFlag />
                <FranceFlag />
            </div>
            <Carousel images={IMAGES} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <Carousel images={IMAGES} slideInterval={3000} maxWidth='600px' height='400px' />
                <Carousel images={IMAGES} slideInterval={7000} maxWidth='300px' height='300px' />
            </div>
        </Page>
    );
};
