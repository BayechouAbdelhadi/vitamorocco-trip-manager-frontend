import { Translation } from './translation';

export type Activity = {
    id: string;
    title: string;
    description: string;
    descriptionImg: string;
    pickUpTime: string;
    schedule: string; //Read the text i supplied you will fin a section named Program than fill schedul with
    highlights: string[];
    languages: string[];
    location: string;
    cancelation: string;
    // groupRequirement?: string;
    pricing: string[];
    includedServices: string[];
    excludedServices: string[];
    duration: number;
    durationUnit: string;
    freeDuration: boolean;
    frequency: string;
    importantDetails: string[];
    summaryImg: string;
    titleImg: string;
    highlightImgs: string[];
    mapLink: string;
};


export type ActivityMock = {
    id: string;
    title: Translation;
    description: Translation;
    descriptionImg: string;
    pickUpTime: Translation;
    schedule: Translation; //Read the text i supplied you will fin a section named Program than fill schedul with
    highlights: Translation[];
    languages: string[];
    location: string;
    cancelation: string;
    groupRequirement?: string;
    pricing: Translation[];
    includedServices: Translation[];
    excludedServices: Translation[];
    duration: number;
    durationUnit: string;
    freeDuration: boolean;
    frequency: Translation;
    importantDetails: Translation[];
    summaryImg: string;
    titleImg: string;
    highlightImgs: string[];
    mapLink: string;
};
