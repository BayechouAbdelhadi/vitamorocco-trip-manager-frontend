import { useQuery } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import { getExcursions } from '../../common/services/excursionService';
import ExcursionSummary from './components/ExcursionSummary';
import { CircularProgress } from '@mui/material';
import './Excursions.scss';

const ExcursionsText = 'Excursions';

const excursions = [{
    id: "string",
    title: "string",
    description: "string",
    destinationCity: "string",
    includedServices: ["string[]"],
    departureCity: "string",
    departurePickupTime: "string",
    returnPickupTime: "string",
    journeyTime: 1,
    journeyTimeUnit: "string",
    highlights: ["string"],
    pricing: ["string[]"],
    journeyUnit: "string",
    duration: 2,
    durationUnit: "string",
    frequency: "string",
    mapLink: "string",
}]

export const Excursions = (): JSX.Element => {
    // const { data: excursions, isLoading } = useQuery('excursions', getExcursions);

    return (
        <Page description={ExcursionsText} keywords={ExcursionsText} title={ExcursionsText}>
            {false ? (
                // <>Loading.........</>
                <CircularProgress />
            ) : (
                <div className="excursions-container">
                    {excursions?.map((excursion) => (
                        <ExcursionSummary key={excursion.id} excursion={excursion} />
                    ))}
                </div>
            )}
        </Page>
    );
};
