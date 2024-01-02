import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import './Review.scss'

type ReviewProps = {
    title: string
    description: string
    url: string
    alt: string
}

const Review = ({ url, alt }: ReviewProps) => {
    return <article className="review">
        <div className="img-container">
            <img src={url} alt={alt} className="person-img" />
            <span className="quote-icon"><FormatQuoteIcon /></span>
        </div>
        <h4 className="author">{"name"}</h4>
        <p className="info">
            Vita Morocco delivered an exceptional 10-day trip, exploring Marrakech, Fes, the desert,
            and Chefchaouen. The diverse itinerary showcased the cultural richness of Morocco. Mohamed,
            our guide driver, was outstanding, contributing to the overall memorable experience. Highly recommended.
        </p>
    </article>;
};

export default Review;