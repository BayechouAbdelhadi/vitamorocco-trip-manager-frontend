import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import { Button } from '@mui/material'

import './Review.scss'

type ReviewProps = {
    avatar: string
    pseudo: string
    text: string
    alt: string
}

const Review = ({ avatar, pseudo, text, alt }: ReviewProps) => {
    return (
        <article className="review">
            <div className="avatar-container">
                <img src={avatar} alt={alt} className="avatar-img" loading='lazy' />
                <span className="quote-icon"><FormatQuoteIcon /></span>
            </div>
            <h4 className="author">{pseudo}</h4>
            <p className="text">{text}</p>
            <Button component="a" href="https://www.tripadvisor.com/Attraction_Review-g293734-d26194088-Reviews-Vita_Morocco-Marrakech_Marrakech_Safi.html" target='__blank'>Plus</Button>
        </article>
    )
}

export default Review;