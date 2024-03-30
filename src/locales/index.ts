import { TRANSLATION_EN } from './en/translation';
import { TRANSLATION_ES } from './es/translation';
import { TRANSLATION_FR } from './fr/translation';
import { TRANSLATION_PT } from './pt/translation';

import { FranceFlag, EnglishFlag, PortugalFlag, SpanishFlag } from '../common/components/Flags/Flags';

export enum AvailableLanguage {
    FR = 'fr',
    EN = 'en',
    ES = 'es',
    PT = 'pt',
}

type TranslationData = {
    [key: string]: string | TranslationData;
};
type LanguageResource = {
    translation: TranslationData;
};

export const tranlationResources: Record<AvailableLanguage, LanguageResource> = Object.freeze({
    [AvailableLanguage.FR]: { translation: TRANSLATION_FR },
    [AvailableLanguage.EN]: { translation: TRANSLATION_EN },
    [AvailableLanguage.ES]: { translation: TRANSLATION_ES },
    [AvailableLanguage.PT]: { translation: TRANSLATION_PT },
});

export const languages = Object.freeze([
    { key: AvailableLanguage.FR, name: 'Français', flag: '🇫🇷' },
    { key: AvailableLanguage.ES, name: 'Español', flag: '🇪🇸' },
    { key: AvailableLanguage.EN, name: 'English', flag: '🇺🇸' },
    { key: AvailableLanguage.PT, name: 'Português', flag: '🇵🇹' },
]);

