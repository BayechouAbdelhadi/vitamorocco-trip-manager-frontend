import { Link } from 'react-router-dom';
import QuiltedImageList from '../../common/components/QuiltedImageList'
import TextWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { scrollToTop } from '../../common/utils';

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
            <QuiltedImageList images={images} />
            <Button component={Link} to='/services/gallery' onClick={scrollToTop} className='secondary-button'>
                {t('see_more_photos')}
            </Button>
        </div>
    )
}

const images = [
    {
        url: '/img/home_gallery/1.webp',
        rows: 2,
        cols: 2,
    },
    {
        url: '/img/home_gallery/2.webp',
        rows: 2,
    },
    {
        url: '/img/home_gallery/3.webp',
    },
    {
        url: '/img/home_gallery/4.webp',
    },
    {
        url: '/img/home_gallery/5.webp',
        rows: 2,
    },
    {
        url: '/img/home_gallery/6.webp',
        rows: 2,
    },
    {
        url: '/img/home_gallery/7.webp',
        rows: 2,
    },
    {
        url: '/img/home_gallery/8.webp',
        rows: 2,
    }
];
