import { useEffect, useRef } from "react";

import "./TripAdvisorWidget.scss";

declare global {
    interface Window {
        taValidate?: () => void;
    }
}

interface TripAdvisorWidgetProps {
    widgetScriptLink?: string;
    idWidget?: string;
}

const longReviewsWidgetLink = "https://www.tripadvisor.com/WidgetEmbed-selfserveprop?locationId=26194088&writereviewlink=true&rating=true&border=true&uniq=22&iswide=true&popIdx=true&lang=en_US&nreviews=4&display_version=2"
const longReviewsWidgetId = "TA_selfserveprop22"

const TripAdvisorWidget = ({ widgetScriptLink, idWidget }: TripAdvisorWidgetProps): JSX.Element => {
    const widgetRef = useRef<HTMLDivElement>(null);

    if (!widgetScriptLink && !idWidget) {
        widgetScriptLink = longReviewsWidgetLink
        idWidget = longReviewsWidgetId
    }



    useEffect(() => {
        // Check if script already exists
        if (document.querySelector(`script[src="${widgetScriptLink}"]`)) {
            return; // Script already exists, don't add it again
        }

        // Dynamically load the TripAdvisor script
        const script = document.createElement("script");
        script.src = widgetScriptLink!!;
        script.async = true;
        script.onload = () => {
            // console.log("script loaded")
            if (window.taValidate) {
                window.taValidate();
            }
        };

        // Append the script to the document
        if (widgetRef.current) {
            widgetRef.current.appendChild(script);
        }

        return () => {
            // Clean up by removing the script when the component unmounts
            if (widgetRef.current) {
                widgetRef.current.innerHTML = ""; // Clear widget container
            }
        };
    }, []);

    return (
        <div id={idWidget} ref={widgetRef} />
    );
};

export default TripAdvisorWidget;
