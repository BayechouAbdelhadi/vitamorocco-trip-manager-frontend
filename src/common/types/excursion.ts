
export interface Excursion {
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
    journeyUnit: string;
    duration: number;
    frequency: string;
}
