import { useState } from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AdjustIcon from '@mui/icons-material/Adjust';
import CircleIcon from '@mui/icons-material/Circle';
import "./Carousel.scss"

type ImageSliderProps = {
    images: {
        id: string
        name: string
        description: string
        url: string
        alt: string
    }[]
}

export default function Carousel({ images }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })
    }

    return (
        <section
            aria-label="Image Slider"
            style={{ width: "100%", height: "100%", position: "relative" }}
        >
            <a href="#after-image-slider-controls" className="skip-link">
                Skip Image Slider Controls
            </a>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    overflow: "hidden",
                }}
            >
                {images.map(({ url, alt }, index) => (
                    <img
                        key={url}
                        src={url}
                        alt={alt}
                        aria-hidden={imageIndex !== index}
                        className="img-slider-img"
                        style={{ translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>
            <button
                onClick={showPrevImage}
                className="img-slider-btn"
                style={{ left: 0 }}
                aria-label="View Previous Image"
            >
                <ArrowBackIosNewIcon aria-hidden />
            </button>
            <button
                onClick={showNextImage}
                className="img-slider-btn"
                style={{ right: 0 }}
                aria-label="View Next Image"
            >
                <ArrowForwardIosIcon aria-hidden />
            </button>
            <div
                style={{
                    position: "absolute",
                    bottom: ".5rem",
                    left: "50%",
                    translate: "-50%",
                    display: "flex",
                    gap: ".25rem",
                }}
            >
                {images.map((_, index) => (
                    <button
                        key={index}
                        className="img-slider-dot-btn"
                        aria-label={`View Image ${index + 1}`}
                        onClick={() => setImageIndex(index)}
                    >
                        {index === imageIndex ? (
                            <AdjustIcon aria-hidden />
                        ) : (
                            <CircleIcon aria-hidden />
                        )}
                    </button>
                ))}
            </div>
            <div id="after-image-slider-controls" />
        </section>
    )
}



// import React, { useState, useEffect, useCallback } from 'react';
// import Carousel from 'react-material-ui-carousel';
// import { Paper, Button, Typography } from '@mui/material';
// import './Carousel.scss';

// interface CarouselItem {
//     id: string;
//     name: string;
//     description: string;
//     imageUrl: string;
// }

// interface MyCarouselProps {
//     items: CarouselItem[];
//     autoSlide?: boolean;
//     slideInterval?: number;
// }

// const MyCarousel: React.FC<MyCarouselProps> = ({ items, autoSlide = true, slideInterval = 5000 }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNextClick = useCallback(
//         (now?: number | undefined) => now && setCurrentIndex(now)
//         , [])

//     return (
//         <Carousel
//             index={currentIndex}
//             autoPlay={autoSlide}
//             animation="fade"
//             interval={slideInterval}
//             duration={500}
//             navButtonsProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.3)' } }}
//             onChange={handleNextClick}
//             indicators={false}
//             strictIndexing
//             navButtonsAlwaysVisible
//             stopAutoPlayOnHover
//         >
//             {items.map((item) => (
//                 <div key={item.id} className="carousel-item">
//                     <img src={item.imageUrl} alt={item.name} />
//                     {/* <Typography variant="h6">{item.name}</Typography>
//                     <Typography variant="body2">{item.description}</Typography> */}
//                 </div>
//             ))}
//         </Carousel>
//     );
// };

// export default MyCarousel;
