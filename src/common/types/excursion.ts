export interface Translation {
    fr: string;
    es: string;
    en: string;
    ar: string;
    pt: string;
}

export interface Excursion {
    id: string;
    title: Translation;
    description: Translation;
    destinationCity: string;
    includedServices: string[];
    departureCity: string;
    departurePickupTime: string;
    returnPickupTime: string;
    journeyTime: number;
    journeyTimeUnit: string;
    highlights: Translation[];
    journeyUnit: string;
    duration: number;
    frequency: Translation;
}
