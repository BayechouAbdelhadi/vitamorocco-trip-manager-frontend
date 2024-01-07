import { Link } from 'react-router-dom';
import TitleBarImageList from '../../common/components/QuiltedImageList'
import TextWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
import { Button } from '@mui/material';

export default function Gallery() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextWithLines text='Gallery' />
            <h2>Memories We Collect</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reprehenderit voluptas soluta,
            </p>
            <TitleBarImageList itemData={itemData} />
            <Button component={Link} to='/services/gallery'>See More</Button>
        </div>
    )
}

const itemData = [
    {
        img: '/img/1.jpg',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: '/img/2.jpg',
        title: 'Burger',
    },
    {
        img: '/img/welcome.jpg',
        title: 'Camera',
    },
    {
        img: '/img/destinations/activity.jpeg',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: '/img/destinations/tour.jpg',
        title: 'Hats',
        cols: 2,
    },
    {
        img: '/img/destinations/excursion.jpeg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
];
