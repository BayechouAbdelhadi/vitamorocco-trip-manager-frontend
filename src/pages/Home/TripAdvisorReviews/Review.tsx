import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { defaultImage } from '../../../common/utils/imageUtils'

import './Review.scss'

type ReviewProps = {
    index: number
    avatar: string
    pseudo: string
    text: string
    alt: string
}

const Review = ({ index, avatar, pseudo, text, alt }: ReviewProps) => {
    const { t } = useTranslation()

    return (
        <article className="review">
            <div className="avatar-container">
                <img src={avatar} alt={alt} className="avatar-img" loading='lazy' onError={defaultImage.small.errorHandler} />
                <span className="quote-icon"><FormatQuoteIcon /></span>
            </div>
            <h4 className="author">{pseudo}</h4>
            <p className="text">{t(`reviews.${index}.text`)}</p>
            <Button component="a" href="https://www.tripadvisor.com/Attraction_Review-g293734-d26194088-Reviews-Vita_Morocco-Marrakech_Marrakech_Safi.html" target='__blank'>{t('see_more_on_trip_advisor')}</Button>
        </article>
    )
}

export default Review;