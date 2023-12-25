import { CircularProgress, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import { getExcursion } from '../../common/services/excursionService';
import './Excursion.scss';
import { ExcursionDescription } from './components/ExcursionDescription';
import { ExcursionDetails } from './components/ExcursionDetails';
import { ExcursionHighlights } from './components/ExcursionHighlights';
import { ExcludedServiceList } from './components/excursion-services/ExcludedServices';
import { IncludedServiceCard } from './components/excursion-services/IncludedServices';
import { ExcursionPricing } from './components/ExcursionPricing';
const ExcursionText = 'Excursion';

export const Excursion = (): JSX.Element => {
    const { excursionId } = useParams();
    const { t, i18n } = useTranslation();

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
            title="Destination details"
            className="excursion-detail"
        >
            {isLoading ? (
                <CircularProgress />
            ) : (
                excursion && (
                    <>
                        <ExcursionDescription excursion={excursion} />
                        <ExcursionHighlights excursion={excursion} />
                        <ExcursionDetails excursion={excursion} />
                        <Typography variant="h5" className="setcion-title left-title">
                           Pricing
                        </Typography>
                        <ExcursionPricing excursion={excursion} />
                        <Typography variant="h5" className="setcion-title left-title">
                            What is included
                        </Typography>
                        <IncludedServiceCard services={excursion.includedServices ?? []} />
                        <Typography variant="h5" className="setcion-title left-title">
                            What is not included
                        </Typography>
                        <ExcludedServiceList />
                    </>
                )
            )}
        </Page>
    );
};
