
import { common } from '@mui/material/colors';
import { excursionsMock } from '../../pages/Excursions/excursionsMock';
import { Excursion } from '../types/excursion';
import { vitaGet } from '../utils/axiosUtils';

// export const getExcursions = () => vitaGet<Excursion[]>('excursions?summary=true');
export const getExcursions = () => Promise.resolve(mapper());

// export const getExcursion = (id: string) => vitaGet<Excursion>(`excursions/${id}`);
export const getExcursion = (id: string) => Promise.resolve(mapper().find(excursion => excursion.id === id));


export default { getExcursions };


const mapper = (): Array<Excursion> => excursionsMock.map(exMock => {
    const { title, description, highlights, pricing, frequency, ...common } = exMock
    const excursion: Excursion = {
        ...common as Partial<Excursion>,
        title: title.en as string,
        description: description.en as string,
        highlights: highlights.map((h: any) => h.en as string),
        pricing: pricing.map((p: any) => p.en as string),
        frequency: frequency.en as string,
    };

    return excursion;
})
