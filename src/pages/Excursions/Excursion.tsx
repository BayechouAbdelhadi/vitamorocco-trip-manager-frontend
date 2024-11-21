import { CircularProgress, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import PanedSection from '../../common/components/panes/SectionedPanes';
import { getExcursion } from '../../common/services/excursionService';
import { ContactForm } from '../Contact/Contact';
import './Excursion.scss';
import { ExcursionDetails } from './components/ExcursionDetails';
import { PanedDescription } from './components/PanedDescription';
import { PanedHighlights } from './components/PanedHighlights';
import { Pricing } from './components/Pricing';
import { ExcludedServiceList } from './components/excursion-services/ExcludedServices';
import { IncludedServiceCard } from './components/excursion-services/IncludedServices';

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
            keywords={excursionTitle}
            title={excursionTitle}
            elements={<link rel="canonical" href={window.location.href} />}
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
                        <ContactForm subject={`Excursion ${excursion?.title}`} />
                    </Container>
                )
            )}
        </Page>
    );
};
