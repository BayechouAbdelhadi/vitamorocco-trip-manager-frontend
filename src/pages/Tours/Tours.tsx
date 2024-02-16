import { useQuery } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import { getTours } from '../../common/services/tourService';
import ExcursionSummary from '../Excursions/components/ExcursionSummary';
import { CircularProgress } from '@mui/material';
import '../Excursions/Excursions.scss';
import TitleWithLines from '../../common/components/QuiltedImageList/TitleWithLines';

const ToursText = 'Tours';

export const Tours = (): JSX.Element => {
    const { data: excursions, isLoading } = useQuery('tours', getTours);

    return (
        <Page description={ToursText} keywords={ToursText} title={ToursText} imgSrc='img/tours/tours_title.jpg' className='excursions-page-container'>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <TitleWithLines text="Our Exclusive Routes & Itineraries" />
                    <p>
                        <strong>VITA MOROCCO</strong> offers a unique, personalized travel experience, tailored specifically to your preferences and
                        desires for exploring Morocco. Our approach ensures that you are the central focus of your journey,
                        providing an opportunity to immerse yourself in the vibrant Moroccan culture on your terms.
                    </p>
                    <p>
                        With <strong>VITA MOROCCO</strong>, planning your trip is effortless. Inform us of your available days, the size of your group,
                        your preferred accommodation style (Riad / Hotel / Villa), Category (Luxury, Standard, or Superior), and your
                        interests or desired activities. We will carefully organize every aspect to suit your taste. Our bespoke
                        itineraries are delivered with private, comfortable transportation options, Mini-vans, 4x4 Toyota,  or Minibus,
                        accompanied by experienced drivers and English, Spanish-speaking guides passionate about sharing the richness of
                        Moroccan life with you.
                    </p>
                    <p>
                        For those seeking inspiration, we offer a selection of adaptable route suggestions, designed to cater to a wide
                        range of interests and preferences, ensuring a truly personalized travel experience.
                    </p>
                    <p>
                        Let <strong>VITA MOROCCO</strong> transform your visit to Morocco into an unforgettable adventure.
                    </p>
                    <a className="email-link" href="mailto:contact@vitamorocco.com">contact@vitamorocco.com</a>
                    <h3>Discover the essence of Morocco with us</h3>
                    <div className="excursions-container">
                        {excursions?.map((excursion) => (
                            <ExcursionSummary key={excursion.id} excursion={excursion} />
                        ))}
                    </div>
                </>
            )}
        </Page>
    );
};
