import { ACTIVITIES_MOCK } from '../mock/activitiesMock';
import { ACTIVITIES_MOCK_EDITED } from '../mock/activitiesMock_edited';

export const getActivities = () => Promise.resolve(ACTIVITIES_MOCK);

export const getActivity = (id: string) => Promise.resolve(ACTIVITIES_MOCK.find((ACTIVITY) => ACTIVITY.id === id));

export default { getActivities, getActivity };
