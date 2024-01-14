import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Review from "./Review";
import TextWithLines from "../../../common/components/QuiltedImageList/TitleWithLines";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from "react-i18next";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TripAdvisorReviews.scss";

const REVIEWS = [
    {
        avatar: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f3/23/default-avatar-2020-28.jpg?w=100&h=-1&s=1',
        pseudo: 'Caterina P',
        text: 'Vita Morocco delivered an exceptional 10-day trip, exploring Marrakech, Fes, the desert, and Chefchaouen. The diverse itinerary showcased the cultural richness of Morocco. Mohamed, our guide driver, was outstanding, contributing to the overall memorable experience. Highly recommended.'
    },
    {
        avatar: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f0/d5/default-avatar-2020-17.jpg?w=100&h=-1&s=1',
        pseudo: 'Serse M',
        text: 'I did a trip with Mohamed from vita morocco for 10 days, One of the best tours in my Life with my wife, we visited a lot of cities, Marrakech, fes, the desert of merzouga, thanks tò the perefct organiztion of vita morocco and the service of Mohamed with his knowledge, we learned a lot about his country and berbera.'
    },
    {
        avatar: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ed/ce/default-avatar-2020-7.jpg?w=100&h=-1&s=1',
        pseudo: 'David G',
        text: 'Our 7 day 1800km tour through Morocco out of Marrakech by Vita Morocco, with our guide and driver Mohamed was perfectly executed. Mohamed\'s wealth of knowledge of the different regions allowed us to easily access the cultural differences of all of the different regions that we were lucky enough to visit. Accommodation each night was brilliant and Mohamed was very flexible and great company. Loved this trip.'
    },
    {
        avatar: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f6/0d/default-avatar-2020-34.jpg?w=100&h=-1&s=1',
        pseudo: 'Sjoukje D',
        text: 'Our holiday in Morocco was magical! Partly thanks to Vita Morocco. It started with a fantastic tour through the city. Thanks to a knowledgeable guide, who thought we should experience the city, it was great. That means: taste, see, smell. Experience with all our senses. The excursion we had to Ourika Valley with the waterfalls and Agafay desert was also an experience we will never forget. Put on your walking shoes, because it is quite a climb to the top. Along the way you will enjoy beautiful views, refreshing river water and the waterfalls themselves are definitely worth it. We also undertook an excursion to Essaouira. Wonderful if you want to escape the hustle and bustle of Marrakech.'
    },
]


function TripAdvisorReviews() {

    const isXs = useMediaQuery('(max-width:600px)');
    const { t } = useTranslation();

    return (
        <div>
            <TextWithLines text={t('customer_testimonials')} />
            <Swiper
                effect={'coverflow'}
                grabCursor
                slidesPerView={isXs ? 'auto' : 3}
                loop
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination
                modules={[EffectCoverflow, Pagination, Navigation]}
                navigation={{
                    prevEl: ".button-prev",
                    nextEl: ".button-next",
                }}
            >
                {REVIEWS.map((review, index) => (
                    <SwiperSlide key={`${review.pseudo}-${index}`}>
                        <Review index={index} avatar={review.avatar} pseudo={review.pseudo} text={review.text} alt={`avatar-{index}`} />
                    </SwiperSlide>
                ))}
                <div className="button-prev">
                    <ArrowBackIosNewIcon />
                </div>
                <div className="button-next">
                    <ArrowForwardIosIcon />
                </div>
            </Swiper>
        </div>
    );
}

export default TripAdvisorReviews;