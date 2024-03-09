export interface Tip {
    title: string;
    content: { description: string; highlights: string[] };
}

export interface TipCategory {
    category: string;
    tips: Tip[];
}
