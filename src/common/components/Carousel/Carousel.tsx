import { useEffect, useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import AdjustIcon from '@mui/icons-material/Adjust'
import CircleIcon from '@mui/icons-material/Circle'
import { defaultImage } from "../../utils/imageUtils"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import "./Carousel.scss"

type ImageSliderProps = {
    images: {
        id: string
        title: string
        description: string
        img_src: string
        img_mobile_src: string
        alt: string
        link: string
    }[],
    maxWidth?: string
    height?: string
    slideInterval?: number
}

export default function Carousel({ images, slideInterval = 6000, maxWidth = '100vw' }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const { t } = useTranslation()

    const isXs = useMediaQuery('(max-width:600px)');

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

    // handle image sliding animation
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
                maxWidth: maxWidth,
                width: '100%',
                margin: '0 auto',
                aspectRatio: { xs: '3/4', md: '8/3' },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <section aria-label="Image Slider" style={{ width: '100%', height: '100%', position: 'relative' }}>
                <div className="img-slider-container">
                    {images.map(({ img_src, img_mobile_src, alt }, index) => (
                        <div key={img_src} className="img-slider-item">
                            <img
                                src={isXs ? img_mobile_src : img_src}
                                alt={alt}
                                loading={imageIndex === 0 ? "eager" : "lazy"}
                                aria-hidden={imageIndex !== index}
                                className="img-slider-img"
                                style={{ translate: `${-100 * imageIndex}%` }}
                                onError={defaultImage.large.errorHandler}
                            />
                            <div className="img-slider-content">
                                <h2>{t(`carousel.${imageIndex}.title`)}</h2>
                                <Link to={images[imageIndex].link}><i>{t(`carousel.${imageIndex}.description`)}</i></Link>
                            </div>
                        </div>
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
                            <ArrowBackIosNewIcon aria-hidden sx={{ fontSize: { xs: 'medium', md: '2rem' } }} />
                        </button>
                        <button
                            onClick={showNextImage}
                            className="img-slider-btn"
                            style={{ right: 0 }}
                            aria-label="View Next Image"
                        >
                            <ArrowForwardIosIcon aria-hidden sx={{ fontSize: { xs: 'medium', md: '2rem' } }} />
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