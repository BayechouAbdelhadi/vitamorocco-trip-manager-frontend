import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Review from "./Review";
import TextWithLines from "../../../common/components/TitleBarImageList/TitleWithLines";
import useMediaQuery from '@mui/material/useMediaQuery';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TripAdvisorReviews.scss";



interface Props {
    slides: string[];
}

function TripAdvisorReviews({ slides }: Props) {

    const isXs = useMediaQuery('(max-width:600px)');

    return (
        <div>
            <TextWithLines text="What our clients say" />
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
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Review url="/img/1.jpg" title="title" description="description" alt="alt" />
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