import DoneIcon from '@mui/icons-material/Done';
import { CircularProgress, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import PanedSection from '../../common/components/panes/SectionedPanes';
import { getTour } from '../../common/services/tourService';
import { ExcursionDetails } from '../Excursions/components/ExcursionDetails';
import { PanedDescription } from '../Excursions/components/PanedDescription';
import { PanedHighlights } from '../Excursions/components/PanedHighlights';
import { ExcludedServiceList } from '../Excursions/components/excursion-services/ExcludedServices';
import TourInformation from './TourInformation';
import { TourPricing } from './TourPricing';
import { TourSteps } from './TourSteps';

import { ContactForm } from '../Contact/Contact';
import '../Excursions//Excursion.scss';
import './Tour.scss';

const TourText = 'Tour';

export const Tour = (): JSX.Element => {
    const { tourId } = useParams();
    const { t } = useTranslation();

    const {
        data: tour,
        isLoading,
        isError,
    } = useQuery(['tour', tourId], () => getTour(tourId as string), {
        enabled: Boolean(tourId), // Only enable the query when tourId is defined
    });

    const tourTitle = tour?.title ?? TourText;

    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <Page
            description={tour?.description ?? tourTitle}
            keywords={tourTitle}
            title={tourTitle}
            imgSrc={`/img/tours/${tour?.id}/${tour?.titleImg}`}
            className="excursion-detail"
        >
            {tour && (
                <Container>
                    <PanedDescription
                        imgSrc={`/img/tours/${tour.id}/${tour.descriptionImg}`}
                        description={tour.description}
                    />
                    <PanedHighlights
                        highlights={tour?.highlights}
                        highlightsImgs={tour?.highlightImgs?.map((imgName) => `/img/tours/${tour.id}/${imgName}`)}
                    />
                    <ExcursionDetails excursion={tour} type={'tours'} />
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
                                    <ul className="no-bullets">
                                        {tour.includedServices?.map((service) => (
                                            <li key={service}>
                                                <DoneIcon color="success" />
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
                    <p>{t('flexible_trip_message')}</p>
                    <p style={{ marginBottom: 20 }}>
                        <strong>{t('contact.to_reserv_trip_message')}</strong>
                    </p>
                    <ContactForm subject={`Tour ${tour?.title}`} />
                </Container>
            )}
        </Page>
    );
};
