import CircularProgress from '@mui/material/CircularProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router';
import { Page } from '../../common/components/Page/Page';
import TitleWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
import { TOUR_ORIGIN_QUERY_NAME } from '../../common/components/utils';
import { computeAvailableToursOrigins, getToursFromOrigin } from '../../common/services/tourService';
import ExcursionSummary from '../Excursions/components/ExcursionSummary';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import Box from '@mui/material/Box/Box';

import '../Excursions/Excursions.scss';

const availableOrigins = computeAvailableToursOrigins();


export const Tours = (): JSX.Element => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const origin = query.get(TOUR_ORIGIN_QUERY_NAME)

    const ALL = t("all")

    const { data: tours, isLoading } = useQuery(['toursFromOrigin', origin], () => getToursFromOrigin(origin));


    const departureFromCityTitle = origin ? `${t('from')} ${tours?.[0].departureCity}` : ""
    const departureFromCityImg = origin ? `${tours?.[0].id}/${tours?.[0].titleImg}` : "tours_title.webp"

    return (
        <Page
            description={t('tours_description')}
            title={`${t('tours_and_itineraries')} ${departureFromCityTitle}`}
            imgSrc={`/img/tours/${departureFromCityImg}`}
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
                    <Box sx={{ maxWidth: { xs: 360, sm: 1000 }, bgcolor: 'background.paper' }}>
                        <Tabs
                            value={origin ?? ALL}
                            onChange={(e, newValue) => navigate(newValue === ALL ? './' : `./?origin=${newValue}`, { relative: 'path' })}
                            variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile
                        >
                            {[ALL, ...availableOrigins].map(tab =>
                                <Tab key={tab} label={tab} value={tab} />
                            )}
                        </Tabs>
                    </Box>
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
