import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router';
import { Page } from '../../common/components/Page/Page';
import TitleWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
import { TOUR_ORIGIN_QUERY_NAME } from '../../common/components/utils';
import { getToursFromOrigin } from '../../common/services/tourService';
import ExcursionSummary from '../Excursions/components/ExcursionSummary';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

import '../Excursions/Excursions.scss';

const ToursText = 'Tours & Itineraries';

export const Tours = (): JSX.Element => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const origin = query.get(TOUR_ORIGIN_QUERY_NAME);
    const { data: tours, isLoading } = useQuery(['toursFromOrigin', origin], () => getToursFromOrigin(origin));

    const { t } = useTranslation();

    // we can select an aleatoire index...
    const departureFromCityTitle = origin ? `${t('from')} ${tours?.[0].departureCity}` : ""
    // const departureFromCityImg = origin ? `${tours?.[0].id}/${tours?.[0].titleImg}` : "tours_title.webp"

    return (
        <Page
            description={t('tours_description')}
            elements={
                <>
                    <link rel="canonical" href={window.location.href} />
                    <link rel="preload" as="image" href="/img/tours/tours_title.webp" type="image/webp" />
                </>
            }
            title={`${t('tours_and_itineraries')} ${departureFromCityTitle}`}
            // imgSrc={`/img/tours/${departureFromCityImg}`}
            imgSrc={`/img/tours/tours_title.webp`}
            className="excursions-page-container"
        >
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <TitleWithLines text={t('our_exclusive_routes_and_itineraries')} />
                    {parse(t('tours_description'))}
                    <a className="email-link" href="mailto:contact@vitamorocco.com">
                        contact@vitamorocco.com
                    </a>
                    <h3>{t('discover_the_essence_of_morocco_with_us')}</h3>
                    <div className="excursions-container">
                        {tours?.map((excursion) => (
                            <ExcursionSummary key={excursion.id} excursion={excursion} type='tours' />
                        ))}
                    </div>
                </>
            )}
        </Page>
    );
};
