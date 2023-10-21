import { useState } from 'react';
import { useEventListener } from 'usehooks-ts'

// Gérer la détection du défilement
const useScrollDetection = (scrollThreshold: number) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    useEventListener('scroll', handleScroll)

    return isVisible;
};

export default useScrollDetection;
