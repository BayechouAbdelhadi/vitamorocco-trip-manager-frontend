import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { buildnavbarItems } from '../../common/components/utils';
import { getActivities } from '../../common/services/activityService';
import { getExcursions } from '../../common/services/excursionService';
import { getAvailableToursOrigins } from '../../common/services/tourService';

export default function useNavBar() {
    const { data: excursions, isLoading: isExcursionsLoading } = useQuery('excursions', getExcursions);
    const { data: availableToursOrigins, isLoading: isAvailableToursOrigins } = useQuery(
        'availableToursOrigins',
        getAvailableToursOrigins
    );
    const { data: activities, isLoading: isActivitiesLoading } = useQuery('activities', getActivities);

    const navbarItems = useMemo(() => {
        return buildnavbarItems(excursions ?? [], availableToursOrigins ?? [], activities ?? []);
    }, [excursions, availableToursOrigins, activities]);
    return navbarItems;
}
