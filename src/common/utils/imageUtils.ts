import { SyntheticEvent } from 'react';

export const defaultImage = {
    small: {
        errorHandler: (e: SyntheticEvent<HTMLImageElement, Event>) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = '/img/not-found-small.png';
        },
    },
    large: {
        errorHandler: (e: SyntheticEvent<HTMLImageElement, Event>) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = '/img/not-found-small.png';
        },
    },
};
