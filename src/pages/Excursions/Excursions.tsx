import { useQuery } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import { getExcursions } from '../../common/services/excursionService';
import ExcursionSummary from './components/ExcursionSummary';
import { CircularProgress } from '@mui/material';
import './Excursions.scss';

const ExcursionsText = 'Excursions';

export const Excursions = (): JSX.Element => {
    const { data: excursions, isLoading } = useQuery('excursions', getExcursions);

    return (
        <Page description={ExcursionsText} keywords={ExcursionsText} title={ExcursionsText}>
            {isLoading ? (
                // <>Loading.........</>
                <CircularProgress />
            ) : (
                <div className="excursions-container">
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                </div>
            )}
        </Page>
    );
};
