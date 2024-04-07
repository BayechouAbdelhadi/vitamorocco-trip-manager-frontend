import { activitiesMock } from '../mock/activitiesMock';
import { Activity } from '../types/activity';
import { currentLanguage } from '../utils';

export const getActivities = () => Promise.resolve(activitiesMapper());

export const getActivity = (id: string) => Promise.resolve(activitiesMapper().find((activity) => activity.id === id));

export default { getActivities, getActivity };

const activitiesMapper = (): Array<Activity> =>
    activitiesMock.map((activityMock) => {
        const {
            title,
            description,
            pickUpTime,
            highlights,
            pricing,
            frequency,
            includedServices,
            excludedServices,
            schedule,
            importantDetails,
            ...strFields
        } = activityMock;

        const activity: Activity = {
            title: title[currentLanguage],
            description: description[currentLanguage],
            pickUpTime: pickUpTime[currentLanguage],
            highlights: highlights.map((h: any) => h[currentLanguage]),
            includedServices: highlights.map((is: any) => is[currentLanguage]),
            excludedServices: highlights.map((es: any) => es[currentLanguage]),
            pricing: pricing.map((p: any) => p[currentLanguage]),
            importantDetails: importantDetails.map((im: any) => im[currentLanguage]),
            frequency: frequency[currentLanguage],
            schedule: schedule[currentLanguage],
            ...strFields,
        };

        return activity;
    });
