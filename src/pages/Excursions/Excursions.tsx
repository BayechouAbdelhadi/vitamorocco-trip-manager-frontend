import { useQuery } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import { getExcursions } from '../../common/services/excursionService';
import ExcursionSummary from './components/ExcursionSummary';
import { CircularProgress } from '@mui/material';
import './Excursions.scss';
import TitleWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
const ExcursionsText = 'Excursions & Day Trips';

export const Excursions = (): JSX.Element => {
    const { data: excursions, isLoading } = useQuery('excursions', getExcursions);

    return (
        <Page description={ExcursionsText} keywords={ExcursionsText} title={ExcursionsText} imgSrc='img/excursions/excursions_title.jpg' className='excursions-page-container'>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <TitleWithLines text="Our Excursions Selection" />
                    <p>
                        Explore our curated selection of popular one-day excursions departing from Marrakech, designed to cater to
                        the discerning traveler. <strong>VITA MOROCCO</strong> ensures a seamless experience, providing comprehensive pick-up
                        and drop-off services from your hotel or riad. Our excursions are exclusively private and fully customizable,
                        affording you the freedom to design your journey, from choosing specific stops to determining the length of
                        your stay at each. For bespoke travel experiences tailored to your unique preferences, reach out to us.
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