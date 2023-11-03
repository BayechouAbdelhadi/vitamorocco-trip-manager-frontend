import { useEffect, useState } from "react"
import { Box } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AdjustIcon from '@mui/icons-material/Adjust';
import CircleIcon from '@mui/icons-material/Circle';

import "./Carousel.scss"
import { defaultImage } from "../../utils/imageUtils";

type ImageSliderProps = {
    images: {
        id: string
        title: string
        description: string
        url: string
        alt: string
    }[],
    maxWidth?: string
    height?: string
    slideInterval?: number
}

export default function Carousel({ images, slideInterval = 5000, maxWidth = '1600px', height = '100%' }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false);

    const displayControls = images.length > 1

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

    useEffect(() => {
        const autoplayInterval = setInterval(() => {
            if (!isHovered) {
                showNextImage()
            }
        }, slideInterval); // Change image every `slideInterval` seconds

        return () => {
            clearInterval(autoplayInterval);
        };
    }, [isHovered]);

    return (
        <Box
            sx={{
                height: height,
                maxWidth: maxWidth,
                width: '100%',
                margin: '0 auto',
                aspectRatio: { xs: '9/6', md: '9/3', lg: '9/3' },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <section aria-label="Image Slider" style={{ width: '100%', height: '100%', position: 'relative' }}>
                <div className="img-slider-img-container">
                    {images.map(({ url, alt }, index) => (
                        <img
                            key={url}
                            src={url}
                            alt={alt}
                            aria-hidden={imageIndex !== index}
                            className="img-slider-img"
                            style={{ translate: `${-100 * imageIndex}%` }}
                            onError={defaultImage.large.errorHandler}
                        />
                    ))}
                </div>
                {displayControls && (
                    <>
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
                        <div className="img-slider-dot-btn-container">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className="img-slider-dot-btn"
                                    aria-label={`View Image ${index + 1}`}
                                    onClick={() => setImageIndex(index)}
                                >
                                    {index === imageIndex ? (
                                        <AdjustIcon aria-hidden sx={{ fontSize: { xs: 'small', md: 'medium' } }} />
                                    ) : (
                                        <CircleIcon aria-hidden sx={{ fontSize: { xs: 'small', md: 'medium' } }} />
                                    )}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </section>
        </Box>
    );
}