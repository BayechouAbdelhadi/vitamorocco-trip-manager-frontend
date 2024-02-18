import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { buildnavbarItems } from '../../common/components/utils';
import { getExcursions } from '../../common/services/excursionService';
import { getAvailableToursOrigins } from '../../common/services/tourService';

export default function useNavBar() {
    const { data: excursions, isLoading: isExcursionsLoading } = useQuery('excursions', getExcursions);
    const { data: availableToursOrigins, isLoading: isAvailableToursOrigins } = useQuery(
        'availableToursOrigins',
        getAvailableToursOrigins
    );

    const navbarItems = useMemo(() => {
        return buildnavbarItems(excursions ?? [], availableToursOrigins ?? []);
    }, [excursions, availableToursOrigins]);
    return navbarItems;
}
