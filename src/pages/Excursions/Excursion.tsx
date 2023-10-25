import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import { ExcludedServiceList } from './components/excursion-services/ExcludedServices';
import { IncludedServiceCard } from './components/excursion-services/IncludedServices';
export const Excursion = (): JSX.Element => {
    const ExcursionText = 'Excursion';
    const { excursionId } = useParams();

    return (
        <Page
            description={ExcursionText}
            keywords={ExcursionText}
            title={ExcursionText}
            style={{ padding: '5px 10px' }}
        >
            <IncludedServiceCard />
            <ExcludedServiceList />
        </Page>
    );
};
