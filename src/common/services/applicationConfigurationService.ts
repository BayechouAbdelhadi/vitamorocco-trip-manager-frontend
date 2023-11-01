import { AvailableLanguage } from '../../locales';
import { vitaPatch } from '../utils/axiosUtils';

export const changeLanguage = (language: AvailableLanguage) =>
    vitaPatch<any>('application-configuration', [
        {
            op: 'replace',
            path: '/language', // Replace with the actual property path you want to modify
            value: language, // Replace with the new value
        },
    ]);

export default { changeLanguage };
