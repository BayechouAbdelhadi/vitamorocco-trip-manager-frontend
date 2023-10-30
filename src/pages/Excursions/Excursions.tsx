import { useQuery } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import { getExcursions } from '../../common/services/excursionService';
import ExcursionSummary from './components/ExcursionSummary';

const ExcursionsText = 'Excursions';

export const Excursions = (): JSX.Element => {
    const { data: excursions, isLoading } = useQuery('excursions', getExcursions);


    return (
        <Page description={ExcursionsText} keywords={ExcursionsText} title={ExcursionsText}>
            {isLoading ? (
                <>Loading.........</>
            ) : (
                <>
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} />
                    ))}
                </>
            )}
        </Page>
    );
};
