import { Link } from 'react-router-dom';
import QuiltedImageList from '../../common/components/QuiltedImageList'
import TextWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
    const { t } = useTranslation();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <TextWithLines text={t('gallery')} />
            <h2>{t('memories_we_collect.title')}</h2>
            <Typography sx={{
                width: { xs: '100%', md: '70%' },
                textAlign: 'center',
                lineHeight: 2.5
            }}>{t('memories_we_collect.description')}</Typography>
            <QuiltedImageList itemData={itemData} />
            <Button component={Link} to='/services/gallery' className='secondary-button'>{t('see_more')}</Button>
        </div>
    )
}

const itemData = [
    {
        img: '/img/home_gallery/1.jpg',
        rows: 2,
        cols: 2,
    },
    {
        img: '/img/home_gallery/2.jpg',
        rows: 2,
    },
    {
        img: '/img/home_gallery/3.jpg',
    },
    {
        img: '/img/home_gallery/4.jpg',
    },
    {
        img: '/img/home_gallery/5.jpg',
        rows: 2,
    },
    {
        img: '/img/home_gallery/6.jpg',
        rows: 2,
    },
    {
        img: '/img/home_gallery/7.jpg',
        rows: 2,
    },
    {
        img: '/img/home_gallery/8.jpg',
        rows: 2,
    }
];
