import { toursMock } from '../../pages/Tours/ToursMock';
import { CommonExcursionProperties, Excursion } from '../types/excursion';

export const getTour = (id: string) => Promise.resolve(toursMapper().find((excursion) => excursion.id === id));
export const getToursFromOrigin = (origin?: string | null) => {
    if (origin) {
        return Promise.resolve(toursMapper().filter((excursion) => excursion.departureCity === origin));
    }
    return Promise.resolve(toursMapper());
};
export const getAvailableToursOrigins = () => Promise.resolve(computeAvailableToursOrigins());
export const getTours = () => Promise.resolve(toursMapper());

const toursMapper = (): Array<Excursion> =>
    toursMock.map((exMock) => {
        const { title, description, highlights, pricing, frequency, ...common } = exMock;
        const excursion: Excursion = {
            ...(common as CommonExcursionProperties),
            title: title.en as string,
            description: description.en as string,
            highlights: highlights.map((h: any) => h.en as string),
            pricing: pricing.map((p: any) => p.en as string),
            frequency: frequency.en as string,
        };

        return excursion;
    });

const computeAvailableToursOrigins = () => {
    const tours = toursMapper();
    return Array.from(new Set(tours.map((t) => t.departureCity)));
};
