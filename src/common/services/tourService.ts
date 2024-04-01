import { toursMock } from '../../pages/Tours/ToursMock';
import { CommonExcursionProperties, Excursion } from '../types/excursion';
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
        const { title, description, highlights, pricing, frequency, ...common } = tourMock;
        const excursion: Excursion = {
            ...(common as CommonExcursionProperties),
            title: title[currentLanguage] as string,
            description: description[currentLanguage] as string,
            highlights: highlights.map((h: any) => h[currentLanguage] as string),
            pricing: pricing.map((p: any) => p[currentLanguage] as string),
            frequency: frequency[currentLanguage] as string,
        };

        return excursion;
    });

const computeAvailableToursOrigins = () => {
    const tours = toursMapper();
    return Array.from(new Set(tours.map((t) => t.departureCity)));
};