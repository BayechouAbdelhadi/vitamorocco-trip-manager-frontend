import { excursionsMock } from '../../pages/Excursions/excursionsMock';
import { Excursion } from '../types/excursion';
import { currentLanguage } from '../utils';

// export const getExcursions = () => vitaGet<Excursion[]>('excursions?summary=true');
export const getExcursions = () => Promise.resolve(excursionsMapper());

// export const getExcursion = (id: string) => vitaGet<Excursion>(`excursions/${id}`);
export const getExcursion = (id: string) =>
    Promise.resolve(excursionsMapper().find((excursion) => excursion.id === id));

export default { getExcursions };

const excursionsMapper = (): Array<Excursion> =>
    excursionsMock.map((exMock) => {
        const { title, description, highlights, pricing, frequency, ...strFields } = exMock;
        const excursion: Excursion = {
            ...strFields,
            title: title[currentLanguage],
            description: description[currentLanguage],
            highlights: highlights.map((h: any) => h[currentLanguage]),
            pricing: pricing.map((p: any) => p[currentLanguage]),
            frequency: frequency[currentLanguage],
        };

        return excursion;
    });
