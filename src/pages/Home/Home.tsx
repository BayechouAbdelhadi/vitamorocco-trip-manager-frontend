import { Box, SvgIcon } from '@mui/material';
import Carousel from '../../common/components/Carousel';
import { Page } from '../../common/components/Page/Page';
// import { useCounter } from '../../database/counter';
// import { useCounter as useCounterRedux } from '../../store/front/counter';
import StarIcons from '../../assets/images/icons/logo.svg';
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

const MySvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-us" viewBox="0 0 640 480">
        <path fill="#bd3d44" d="M0 0h640v480H0" />
        <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
        <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
        <marker id="us-a" markerHeight="30" markerWidth="30">
            <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
        </marker>
        <path fill="none" markerMid="url(#us-a)" d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60L0 0" />
    </svg>

)

export const Home = (): JSX.Element => {
    // const { counter, handleDecrementClick, handleIncrementClick } = useCounter();
    // const { counter: c, handleDecrementClick: hDC, handleIncrementClick: hIC } = useCounterRedux();
    const homeText = 'Home';

    return (
        <Page description={homeText} keywords={homeText} title={homeText} displayTitle={false}>
            <div style={{ border: "3px solid red", width: "200px", height: "200px" }}>
                <SvgIcon>
                    <EnglishFlag />
                </SvgIcon>
                <SvgIcon>
                    <SpanishFlag />
                </SvgIcon>
                <SvgIcon>
                    <PortugalFlag />
                </SvgIcon>
                <SvgIcon>
                    <FranceFlag />
                </SvgIcon>
            </div>
            <Carousel images={IMAGES} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <Carousel images={IMAGES} slideInterval={3000} maxWidth='600px' height='400px' />
                <Carousel images={IMAGES} slideInterval={7000} maxWidth='300px' height='300px' />
            </div>
        </Page>
    );
};
