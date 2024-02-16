import { Button, CircularProgress, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import PanedSection from '../../common/components/panes/SectionedPanes';
import { getExcursion } from '../../common/services/excursionService';
import { ExcursionDescription } from './components/ExcursionDescription';
import { ExcursionDetails } from './components/ExcursionDetails';
import { ExcursionHighlights } from './components/ExcursionHighlights';
import { ExcursionPricing } from './components/ExcursionPricing';
import { ExcludedServiceList } from './components/excursion-services/ExcludedServices';
import { IncludedServiceCard } from './components/excursion-services/IncludedServices';
import './Excursion.scss';
import { scrollToTop } from '../../common/utils';

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
            imgSrc={`/img/excursions/${excursion?.id}/${excursion?.summaryImg}`}
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
                        <PanedSection
                            title={
                                <Typography variant="h5" className="setcion-title left-title">
                                    {t('pricing')}
                                </Typography>
                            }
                            leftPane={{
                                element: <ExcursionPricing excursion={excursion} />,
                                className: 'content-pane',
                            }}
                        />
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
                        <PanedSection
                            title={
                                <Typography variant="h5" className="setcion-title left-title">
                                    {t('whats_not_included')}
                                </Typography>
                            }
                            leftPane={{
                                element: <ExcludedServiceList />,
                                className: 'content-pane',
                            }}
                        />
                        <p>
                            Our excursions are fully customizable to cater to your unique interests and preferences.
                            Whether you&apos;re seeking adventure, culture, relaxation, or a blend of experiences, we&apos;ve got you covered.
                            Simply reach out to us with your ideas, and we&apos;ll tailor the perfect itinerary just for you.
                        </p>
                        <p><strong>Contact us to transform your travel dreams into reality!</strong></p>
                        <Button component={Link} className='secondary-button' to="/contact" sx={{ margin: '20px 0' }} onClick={scrollToTop}>
                            {t('contact.title')}
                        </Button>
                    </Container>
                )
            )}
        </Page>
    );
};
