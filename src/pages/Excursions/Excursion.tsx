import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import PanedSection from '../../common/components/panes/SectionedPanes';
import { getExcursion } from '../../common/services/excursionService';
import { ContactForm } from '../Contact/Contact';
import { ExcursionDetails } from './components/ExcursionDetails';
import { PanedDescription } from './components/PanedDescription';
import { PanedHighlights } from './components/PanedHighlights';
import { Pricing } from './components/Pricing';
import { ExcludedServiceList } from './components/excursion-services/ExcludedServices';
import { IncludedServiceCard } from './components/excursion-services/IncludedServices';
import TripAdvisorWidget from '../../common/components/TripAdvisorWidget';

import './Excursion.scss';

const ExcursionText = 'Excursion';

export const Excursion = (): JSX.Element => {
    const { excursionId } = useParams();
    const { t } = useTranslation();

    const {
        data: excursion,
        isLoading,
        isError,
    } = useQuery(['excursion', excursionId], () => getExcursion(excursionId as string), {
        enabled: Boolean(excursionId), // Only enable the query when excursionId is defined
    });

    const excursionTitle = excursion?.title ?? ExcursionText;

    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <Page
            description={excursion?.description ?? excursionTitle}
            title={excursionTitle}
            elements={
                <>
                    <link rel="dns-prefetch" href="//static.tacdn.com" />
                    <link rel="preconnect" href="https://static.tacdn.com" />
                </>
            }
            imgSrc={`/img/excursions/${excursion?.id}/${excursion?.titleImg}`}
            className="excursion-detail"
        >
            {false ? (
                <CircularProgress />
            ) : (
                excursion && (
                    <Container>
                        <PanedDescription
                            imgSrc={`/img/excursions/${excursion.id}/${excursion.descriptionImg}`}
                            description={excursion.description}
                        />
                        <PanedHighlights
                            highlights={excursion?.highlights}
                            highlightsImgs={excursion?.highlightImgs?.map(
                                (imgName) => `/img/excursions/${excursion.id}/${imgName}`
                            )}
                        />
                        <ExcursionDetails excursion={excursion} />
                        <Pricing pricing={excursion.pricing} />
                        <PanedSection
                            title={
                                <Typography variant="h5" className="setcion-title left-title">
                                    {t('whats_included')}
                                </Typography>
                            }
                            leftPane={{
                                element: <IncludedServiceCard services={excursion.includedServices ?? []} />,
                                className: 'content-pane',
                            }}
                        />
                        <ExcludedServiceList />
                        <hr style={{ margin: '1rem 0' }} />
                        <p>{t('flexible_trip_message')}</p>
                        <p style={{ marginBottom: 20 }}>
                            <strong>{t('contact.to_reserv_trip_message')}</strong>
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <TripAdvisorWidget />
                            <ContactForm subject={`${t('excursion')} ${excursion?.title}`} />
                        </div>
                    </Container>
                )
            )}
        </Page>
    );
};
