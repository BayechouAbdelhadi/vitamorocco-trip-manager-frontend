import { Excursion } from '../types/excursion';
import { vitaGet } from '../utils/axiosUtils';

export const getExcursions = () => vitaGet<Excursion[]>('excursions?summary=true');

export default { getExcursions };
