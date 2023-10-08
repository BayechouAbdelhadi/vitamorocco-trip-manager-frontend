import React, { useState, useEffect, useCallback } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography } from '@mui/material';
import './Carousel.scss';

interface CarouselItem {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

interface MyCarouselProps {
    items: CarouselItem[];
    autoSlide?: boolean;
    slideInterval?: number;
}

const MyCarousel: React.FC<MyCarouselProps> = ({ items, autoSlide = true, slideInterval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = useCallback(
        (now?: number | undefined) => now && setCurrentIndex(now)
        , [])

    return (
        <Carousel
            index={currentIndex}
            autoPlay={autoSlide}
            animation="fade"
            interval={slideInterval}
            duration={500}
            navButtonsProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.3)' } }}
            onChange={handleNextClick}
            indicators={false}
            strictIndexing
            navButtonsAlwaysVisible
            stopAutoPlayOnHover
        >
            {items.map((item) => (
                <div key={item.id} className="carousel-item">
                    <img src={item.imageUrl} alt={item.name} />
                    {/* <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2">{item.description}</Typography> */}
                </div>
            ))}
        </Carousel>
    );
};

export default MyCarousel;
