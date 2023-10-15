import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TRANSLATION_EN } from '../locales/en/translation';
import { TRANSLATION_ES } from '../locales/es/translation';
import { TRANSLATION_FR } from '../locales/fr/translation';
import { TRANSLATION_PT } from '../locales/pt/translation';

export const availableLnguages = ['fr', 'en', 'es'];

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources: {
            fr: { translation: TRANSLATION_FR },
            en: { translation: TRANSLATION_EN },
            es: { translation: TRANSLATION_ES },
            pt: { translation: TRANSLATION_PT },
        },
        lng: 'fr',
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });
//In all scripts if they are not hooks we can use t like this const t= await translate();
export const translate = async () => {
    await i18n.loadLanguages(availableLnguages);
    return i18n.t;
};

export default i18n;
