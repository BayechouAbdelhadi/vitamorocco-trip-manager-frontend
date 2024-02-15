import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PanedSection from '../../../common/components/panes/SectionedPanes';
import { Excursion } from '../../../common/types/excursion';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useMemo } from 'react';


interface ExcursionHighlightsInterface {
    excursion: Excursion;
}

export const ExcursionHighlights = ({ excursion }: ExcursionHighlightsInterface): JSX.Element => {
    const { t } = useTranslation();

    console.log('excursion?.highlightsImgs', excursion?.highlightImgs)
    return (
        <PanedSection
            title={
                <Typography variant="h5" className="setcion-title left-title">
                    {t('highlights')}
                </Typography>
            }
            leftPane={{
                element: <HighLightsSwiper highlightsImgs={excursion?.highlightImgs?.map(imgName => `/img/excursions/${excursion.id}/${imgName}`)} />,
                className: 'visual-pane',
            }}
            rightPane={{
                element: (
                    <ul className="no-bullets">
                        {excursion?.highlights?.map((highlight: string) => (
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

        const imgUrls = highlightsImgs
        if (highlightsImgs.length === 0) imgUrls.push("/img/not-found-small.png")

        return imgUrls

    }, [highlightsImgs])

    return (
        <Swiper
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            loop
            modules={[Pagination, Navigation]}
            className="excursion-swiper"
        >
            {imgs.map((url, index) => (
                <SwiperSlide key={`highlightsImgsUrls-${index}`}>
                    <img src={url} alt={`highlightsImgsUrls-${index}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
