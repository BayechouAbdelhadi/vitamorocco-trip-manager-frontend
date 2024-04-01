import { toursMock } from '../../pages/Tours/ToursMock';
import { Tour } from '../types/tour';
import { currentLanguage } from '../utils';

export const getTour = (id: string) => Promise.resolve(toursMapper().find((excursion) => excursion.id === id));
export const getTours = () => Promise.resolve(toursMapper());

export const getToursFromOrigin = (origin?: string | null) => {
    if (origin) {
        return Promise.resolve(toursMapper().filter((excursion) => excursion.departureCity === origin));
    }
    return Promise.resolve(toursMapper());
};
export const getAvailableToursOrigins = () => Promise.resolve(computeAvailableToursOrigins());

const toursMapper = (): Array<Tour> =>
    toursMock.map((tourMock) => {
        const {
            title,
            description,
            highlights,
            pricing,
            frequency,
            includedServices,
            informationList,
            steps,
            ...strFileds
        } = tourMock;
        const tour: Tour = {
            title: title[currentLanguage],
            description: description[currentLanguage] as string,
            highlights: highlights.map((h: any) => h[currentLanguage] as string),
            includedServices: highlights.map((is: any) => is[currentLanguage] as string),
            pricing: pricing.map((p: any) => p[currentLanguage] as string),
            frequency: frequency[currentLanguage] as string,
            steps: steps.map((s: any) => ({
                title: s.title[currentLanguage],
                description: s.description[currentLanguage],
            })),
            informationList: informationList.map((i: any) => i[currentLanguage] as string),
            ...strFileds,
        };

        return tour;
    });

const computeAvailableToursOrigins = () => {
    const tours = toursMapper();
    return Array.from(new Set(tours.map((t) => t.departureCity)));
};
