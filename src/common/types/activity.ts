export type Activity = {
    id: string;
    title: string;
    description: string;
    pickUpTime: string;
    schedule: string; //Read the text i supplied you will fin a section named Program than fill schedul with
    highlights: string[];
    languages: string[];
    location: string;
    cancelation: string;
    groupRequirement?: string;
    pricing: string[];
    includedServices: string[];
    excludedServices: string[];
    duration: number;
    durationUnit: string;
    frequency: string;
    importantDetails: string[];
    summaryImg: string;
    titleImg: string;
    highlightImgs: string[];
};
