import { AvailableLanguage } from "../../locales";

export const scrollToTop = () =>
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // You can use 'auto' for instant scrolling
    });

export const currentLanguage = (localStorage.getItem("language") ?? "en") as AvailableLanguage
