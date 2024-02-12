export type Excursion = Partial<{
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
}
>
