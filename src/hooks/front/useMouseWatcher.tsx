import { useState, useEffect } from 'react';

function useMouseElementWatcher(parentId: string): Element | null {
    const [currentElement, setCurrentElement] = useState<Element | null>(null);

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            const element = document.elementFromPoint(e.clientX, e.clientY);

            // Check if any ancestor has the specified 'parentId'
            let hasParentWithId = false;
            let current = element;

            while (current && current !== document.body) {
                if (current.id === parentId) {
                    hasParentWithId = true;
                    break;
                }
                current = current.parentElement;
            }

            if (hasParentWithId) {
                setCurrentElement(element);
            } else {
                setCurrentElement(null);
            }
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [parentId]);

    return currentElement;
}

export default useMouseElementWatcher;
