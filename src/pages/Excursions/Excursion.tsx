import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import { getExcursion } from '../../common/services/excursionService';
import { ExcludedServiceList } from './components/excursion-services/ExcludedServices';
import { IncludedServiceCard } from './components/excursion-services/IncludedServices';

const ExcursionText = 'Excursion';

export const Excursion = (): JSX.Element => {
    const { excursionId } = useParams();
    const { t, i18n } = useTranslation();

    console.log(i18n.language);

    const {
        data: excursion,
        isLoading,
        isError,
    } = useQuery(`excursion-${excursionId}`, () => getExcursion(excursionId as string), {
        enabled: Boolean(excursionId), // Only enable the query when excursionId is defined
    });

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
