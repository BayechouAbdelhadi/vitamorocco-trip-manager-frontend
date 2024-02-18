import { toursMock } from '../../pages/Tours/ToursMock';
import { Excursion } from '../types/excursion';


export const getTour = (id: string) => Promise.resolve(ToursMapper().find(tour => tour.id === id));
export const getTours = () => Promise.resolve(ToursMapper());



const ToursMapper = (): Array<Excursion> => toursMock.map(exMock => {
    const { title, description, highlights, pricing, frequency, ...common } = exMock
    const tour: Excursion = {
        ...common as Partial<Excursion>,
        title: title.en as string,
        description: description.en as string,
        highlights: highlights.map((h: any) => h.en as string),
        pricing: pricing.map((p: any) => p.en as string),
        frequency: frequency.en as string,
    };

    return tour;
})