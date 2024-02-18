import { Accordion, AccordionDetails, AccordionSummary, Button, CircularProgress, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import PanedSection from '../../common/components/panes/SectionedPanes';
import { ExcursionDescription } from '../Excursions/components/ExcursionDescription';
import { ExcursionDetails } from '../Excursions/components/ExcursionDetails';
import { ExcursionHighlights } from '../Excursions/components/ExcursionHighlights';
import { ExcludedServiceList } from '../Excursions/components/excursion-services/ExcludedServices';
import { IncludedServiceCard } from '../Excursions/components/excursion-services/IncludedServices';
import { scrollToTop } from '../../common/utils';
import { getTour } from '../../common/services/tourService';
import { TourSteps } from './TourSteps';
import TourInformation from './TourInformation';
import { TourPricing } from './TourPricing';

import '../Excursions//Excursion.scss';
import './Tour.scss';
import { ContactForm } from '../Contact/Contact';


const TourText = 'Tour';

export const Tour = (): JSX.Element => {

    const { tourId } = useParams();
    const { t } = useTranslation();

    const {
        data: tour,
        isLoading,
        isError,
    } = useQuery(`tour-${tourId}`, () => getTour(tourId as string), {
        enabled: Boolean(tourId), // Only enable the query when tourId is defined
    });

    const tourTitle = tour?.title ?? TourText;

    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <Page
            description={tourTitle}
            keywords={tourTitle}
            title={tourTitle}
            imgSrc={`/img/tours/${tour?.id}/${tour?.summaryImg}`}
            className="excursion-detail"
        >
            {tour && (
                <Container>
                    <ExcursionDescription excursion={tour} type={'tours'} />
                    <ExcursionHighlights excursion={tour} type={'tours'} />
                    <ExcursionDetails excursion={tour} />
                    <TourSteps steps={tour.steps ?? []} />
                    {/* <ExcursionPricing excursion={tour} /> */}
                    <TourPricing />
                    <PanedSection
                        title={
                            <Typography variant="h5" className="setcion-title left-title">
                                {t('whats_included')}
                            </Typography>
                        }
                        // leftPane={{
                        //     element: <IncludedServiceCard services={tour.includedServices ?? []} />,
                        //     className: 'content-pane',
                        // }}
                        leftPane={{
                            element: (
                                <div className="excluded-services-list">
                                    <ul>
                                        {tour.includedServices?.map((service) => (
                                            <li key={service}>
                                                <div>{service}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ),
                            className: 'content-pane',
                        }}
                    />
                    <ExcludedServiceList />
                    <TourInformation informationList={tour.informationList ?? []} />
                    <hr />
                    <p>
                        Our tours are fully customizable to cater to your unique interests and preferences. Whether
                        you&apos;re seeking adventure, culture, relaxation, or a blend of experiences, we&apos;ve got
                        you covered. Simply reach out to us with your ideas, and we&apos;ll tailor the perfect itinerary
                        just for you.
                    </p>
                    <p style={{marginBottom:20}}>
                        <strong>Contact us to transform your travel dreams into reality!</strong>
                    </p>
                    <ContactForm subject={`Tour ${tour?.title}`} />
                </Container>
            )}
        </Page>
    );
};