import { Excursion } from '../types/excursion';
import { vitaGet } from '../utils/axiosUtils';

export const getExcursions = () => vitaGet<Excursion[]>('excursions?summary=true');

export const getExcursion = (id: string) => vitaGet<Excursion>(`excursions/${id}`);


export default { getExcursions };
