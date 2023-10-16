import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { tranlationResources } from '../locales';

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources: tranlationResources,
        lng: 'fr',
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
