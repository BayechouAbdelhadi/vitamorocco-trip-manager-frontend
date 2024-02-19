import { CircularProgress, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import PanedSection from '../../common/components/panes/SectionedPanes';
import { getExcursion } from '../../common/services/excursionService';
import { ContactForm } from '../Contact/Contact';
import './Excursion.scss';
import { ExcursionDescription } from './components/ExcursionDescription';
import { ExcursionDetails } from './components/ExcursionDetails';
import { ExcursionHighlights } from './components/ExcursionHighlights';
import { ExcursionPricing } from './components/ExcursionPricing';
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
    } = useQuery(`excursion-${excursionId}`, () => getExcursion(excursionId as string), {
        enabled: Boolean(excursionId), // Only enable the query when excursionId is defined
    });

    const excursionTitle = excursion?.title ?? ExcursionText;

    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <Page
            description={excursionTitle}
            keywords={excursionTitle}
            title={excursionTitle}
            imgSrc={`/img/excursions/${excursion?.id}/${excursion?.titleImg}`}
            className="excursion-detail"
        >
            {false ? (
                <CircularProgress />
            ) : (
                excursion && (
                    <Container>
                        <ExcursionDescription excursion={excursion} />
                        <ExcursionHighlights excursion={excursion} />
                        <ExcursionDetails excursion={excursion} />
                        <ExcursionPricing excursion={excursion} />
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
                        <hr />
                        <p>
                            Our excursions are fully customizable to cater to your unique interests and preferences.
                            Whether you&apos;re seeking adventure, culture, relaxation, or a blend of experiences,
                            we&apos;ve got you covered. Simply reach out to us with your ideas, and we&apos;ll tailor
                            the perfect itinerary just for you.
                        </p>
                        <p style={{ marginBottom: 20 }}>
                            <strong>Contact us to transform your travel dreams into reality!</strong>
                        </p>
                        <ContactForm subject={`Excursion ${excursion?.title}`} />
                    </Container>
                )
            )}
        </Page>
    );
};
