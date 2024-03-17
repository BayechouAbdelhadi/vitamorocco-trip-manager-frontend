import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Typography } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PanedSection from '../../../common/components/panes/SectionedPanes';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

interface PanedHighlightsInterface {
    highlights: string[];
    highlightsImgs: string[];
}

export const PanedHighlights = ({ highlights, highlightsImgs }: PanedHighlightsInterface): JSX.Element => {
    const { t } = useTranslation();

    return (
        <PanedSection
            title={
                <Typography variant="h5" className="setcion-title left-title">
                    {t('highlights')}
                </Typography>
            }
            leftPane={{
                element: <HighLightsSwiper highlightsImgs={highlightsImgs} />,
                className: 'visual-pane',
            }}
            rightPane={{
                element: (
                    <ul className="no-bullets">
                        {highlights?.map((highlight: string) => (
                            <li key={highlight} className="excursion-detail-item">
                                <ArrowRightIcon color="primary" />
                                {highlight}
                            </li>
                        ))}
                    </ul>
                ),
                className: 'content-pane',
            }}
        />
    );
};

interface HighLightsSwiperInterface {
    highlightsImgs?: string[];
}

export function HighLightsSwiper({ highlightsImgs = [] }: HighLightsSwiperInterface) {
    const imgs = useMemo(() => {
        const imgUrls = highlightsImgs;
        if (highlightsImgs.length === 0) imgUrls.push('/img/not-found-small.png');

        return imgUrls;
    }, [highlightsImgs]);

    return (
        <Swiper
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            loop
            autoplay={{ delay: 3000 }}
            modules={[Pagination, Navigation, Autoplay]}
            className="excursion-swiper"
        >
            {imgs.map((url, index) => (
                <SwiperSlide key={`highlightsImgsUrls-${index}`}>
                    <img src={url} alt={`highlightsImgsUrls-${index}`} loading="lazy" />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
