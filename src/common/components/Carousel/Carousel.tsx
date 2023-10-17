import { useEffect, useState } from "react"
import { Box } from "@mui/material";
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

    useEffect(() => {
        const autoplayInterval = setInterval(showNextImage, 4000); // Changer d'image toutes les 4 secondes

        return () => {
            clearInterval(autoplayInterval);
        };
    }, []);

    return (
        <Box
            style={{
                maxWidth: '1600px',
                width: '100%',
                margin: '0 auto',
            }}
            sx={{
                aspectRatio: { xs: '9/6', md: '9/3', lg: '9/3' },
            }}
        >
            <section
                aria-label="Image Slider"
                style={{ width: "100%", height: "100%", position: "relative" }}
            >
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
                <div className="img-slider-dot-btn-container">
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
            </section>
        </Box>
    )
}