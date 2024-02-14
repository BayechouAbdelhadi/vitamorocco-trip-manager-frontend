export type Contact = {
    id?: string;
    fullName: string;

    email: string;

    phoneNumber: string;

    country: string;

    subject: string;

    message: string;

    numberOfAdults: number | null;

    numberOfKids: number | null;

    departureDate: string | null;

    returnDate: string | null;

    housingType: HousingType | null;

    housingCategory: number | null;

    housingRegime: HousingRegime | null;

    flexibleDates: boolean | null;
};

export enum HousingType {
    RIAD = 'RIAD',
    HOTEL = 'HOTEL',
    RURAL_HOUSE = 'RURAL HOUSE',
    // LODGING_HOUSE = 'LODGING HOUSE',
    OTHER = 'OTHER',
}

export enum HousingRegime {
    BED_AND_BREAKFAST = 'BED AND BREAK FAST',
    HALF_PENSION = 'HALF PENSION',
    FULL_BOARD = 'FULL BOARD',
    ALL_INCLUSIVE = 'ALL INCLUSIVE',
}


