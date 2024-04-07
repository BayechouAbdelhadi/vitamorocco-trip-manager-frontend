import { Translation } from './translation';

export type Excursion = {
    id: string;
    title: string;
    description: string;
    destinationCity: string;
    includedServices: string[];
    departureCity: string;
    departurePickupTime: string;
    returnPickupTime: string;
    journeyTime: number;
    journeyTimeUnit: string;
    highlights: string[];
    pricing: string[];
    duration: number;
    durationUnit: string;
    frequency: string;
    mapLink: string;
    summaryImg: string;
    titleImg: string;
    descriptionImg: string;
    highlightImgs: string[];
};

export type ExcursionMock = {
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
    pricing: Translation[];
    duration: number;
    durationUnit: string;
    frequency: Translation;
    mapLink: string;
    summaryImg: string;
    titleImg: string;
    descriptionImg: string;
    highlightImgs: string[];
};