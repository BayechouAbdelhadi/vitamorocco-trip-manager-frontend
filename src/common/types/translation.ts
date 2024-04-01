import { AvailableLanguage } from '../../locales';

// export type Translation = Record<AvailableLanguage, string>;
export type Translation = {
    [key in AvailableLanguage]: string;
};
