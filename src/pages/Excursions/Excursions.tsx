import { useQuery } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import { getExcursions } from '../../common/services/excursionService';
import ExcursionSummary from './components/ExcursionSummary';
import { CircularProgress } from '@mui/material';
import './Excursions.scss';

const ExcursionsText = 'Excursions';

const excursions = [
    {
        id: "string",
        title: "title",
        description: "Essaouira, ou la perle de l'Atlantique, cette ville classée au patrimoine mondial, conserve le charme et l'authenticité d'une terre perdue dans le temps. Essaouira est devenue une étape essentielle dans le voyage au Maroc. L'explorateur aventurier sera fasciné par la convivialité hospitalière des habitants de cette ville, ce qui n'est pas surprenant puisqu'ils ont vécu pendant des siècles au carrefour des cultures, des civilisations et des religions. La ville est bien connue pour ses usines de bois de Tuya, ses coopératives de femmes pour l'huile d'argan et ses tapis. Lors de notre excursion à Essaouira, nous vous suggérons de faire un arrêt dans une coopérative de femmes pour assister à la démonstration de femmes locales préparant de l'huile d'argan. À votre arrivée dans la ville, vous pouvez faire une visite gratuite de la médina d'Essaouira, visiter le port, puis déguster un déjeuner de poisson frais grillé dans les restaurants locaux du port. Si vous le souhaitez, nous pouvons vous fournir un guide local qui vous fera visiter la ville. L'excursion de Marrakech à Essaouira commence le plus tôt possible (c'est recommandé) pour profiter au maximum de la journée.",
        destinationCity: "Marrakech",
        includedServices: ["private_tour", "pickup_at", "transport", "driver_guide", "expenses", "local_guide"],
        departureCity: "Ouarzazat",
        departurePickupTime: "string",
        returnPickupTime: "string",
        journeyTime: 1,
        journeyTimeUnit: "string",
        highlights: ["string", "Visitez le port traditionnel d'Essaouira."],
        pricing: ["string[]", "Groupe de 1 à 6 personnes : 160€"],
        journeyUnit: "string",
        duration: 2,
        durationUnit: "string",
        frequency: "string",
        mapLink: "string",
    },
    {
        id: "string2",
        title: "Essaouira Mogador",
        description: "Essaouira, ou la perle de l'Atlantique, cette ville classée au patrimoine mondial, conserve le charme et l'authenticité d'une terre perdue dans le temps. Essaouira est devenue une étape essentielle dans le voyage au Maroc. L'explorateur aventurier sera fasciné par la convivialité hospitalière des habitants de cette ville, ce qui n'est pas surprenant puisqu'ils ont vécu pendant des siècles au carrefour des cultures, des civilisations et des religions. La ville est bien connue pour ses usines de bois de Tuya, ses coopératives de femmes pour l'huile d'argan et ses tapis. Lors de notre excursion à Essaouira, nous vous suggérons de faire un arrêt dans une coopérative de femmes pour assister à la démonstration de femmes locales préparant de l'huile d'argan. À votre arrivée dans la ville, vous pouvez faire une visite gratuite de la médina d'Essaouira, visiter le port, puis déguster un déjeuner de poisson frais grillé dans les restaurants locaux du port. Si vous le souhaitez, nous pouvons vous fournir un guide local qui vous fera visiter la ville. L'excursion de Marrakech à Essaouira commence le plus tôt possible (c'est recommandé) pour profiter au maximum de la journée.",
        destinationCity: "Essaouira Mogador",
        includedServices: [
            "private_tour",
            "pickup_at",
            "transport",
            "driver_guide",
            "expenses",
            "local_guide"
        ],
        departureCity: "Marrakech",
        departurePickupTime: "08:00 AM",
        returnPickupTime: "06:00 PM",
        journeyTime: 3,
        journeyTimeUnit: "hours",
        highlights: [
            "Visitez le port traditionnel d'Essaouira.",
            "Découvrez le rôle de Skala."
        ],
        pricing: [
            "Groupe de 1 à 6 personnes : 160€",
            "Groupe de 7 à 10 personnes : 220€"
        ],
        duration: 1,
        durationUnit: "day",
        frequency: "chaque jour",
        journeyUnit: "hours",
        mapLink: "string",
    }
]

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
