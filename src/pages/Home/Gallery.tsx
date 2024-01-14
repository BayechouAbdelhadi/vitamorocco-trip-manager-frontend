import { Link } from 'react-router-dom';
import QuiltedImageList from '../../common/components/QuiltedImageList'
import TextWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
    const { t } = useTranslation();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <TextWithLines text={t('gallery')} />
            <h2>{t('memories_we_collect.title')}</h2>
            <p>{t('memories_we_collect.description')}</p>
            <QuiltedImageList itemData={itemData} />
            <Button component={Link} to='/services/gallery'>{t('see_more')}</Button>
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
    }
];
