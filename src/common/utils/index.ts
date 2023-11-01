export const scrollToTop = () =>
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // You can use 'auto' for instant scrolling
    });

export const truncateText = (text: string, maxWords: number): string => {
    const words = text.split(' ');

    if (words.length <= maxWords) {
        return text;
    }

    const truncatedText = words.slice(0, maxWords).join(' ');
    return `${truncatedText} ...`;
};
