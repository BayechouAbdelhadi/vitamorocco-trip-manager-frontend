import { excursionsMock } from '../../pages/Excursions/excursionsMock';
import { CommonExcursionProperties, Excursion } from '../types/excursion';

// export const getExcursions = () => vitaGet<Excursion[]>('excursions?summary=true');
export const getExcursions = () => Promise.resolve(ExcursionsMapper());

// export const getExcursion = (id: string) => vitaGet<Excursion>(`excursions/${id}`);
export const getExcursion = (id: string) =>
    Promise.resolve(ExcursionsMapper().find((excursion) => excursion.id === id));

export default { getExcursions };

const ExcursionsMapper = (): Array<Excursion> =>
    excursionsMock.map((exMock) => {
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
