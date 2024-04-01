import { Translation } from "./translation";
export type Tour = {
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
    journeyUnit: string;
    duration: number;
    durationUnit: string;
    frequency: string;
    mapLink: string;
    summaryImg: string;
    titleImg: string;
    descriptionImg: string;
    highlightImgs: string[];
    steps: Step[];
    informationList: string[];
};

export type TourMock = {
    id: string;
    title: Translation;
    description: Translation;
    destinationCity: string;
    // includedServices: Translation[];
    includedServices: Translation[];
    departureCity: string;
    departurePickupTime: string;
    returnPickupTime: string;
    journeyTime?: number;
    journeyTimeUnit?: string;
    highlights: Translation[];
    pricing: Translation[];
    journeyUnit?: string;
    duration: number;
    durationUnit: string;
    frequency: Translation;
    mapLink: string;
    summaryImg: string;
    titleImg: string;
    descriptionImg: string;
    highlightImgs: string[];
    steps: StepMock[];
    // steps: Step[];
    informationList: Translation[];
}

export type Step = {
    title: string;
    description: string;
};

export type StepMock = {
    title: Translation;
    description: Translation;
};