import { CircularProgress, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import TextWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
import PanedSection from '../../common/components/panes/SectionedPanes';
import { getExcursion } from '../../common/services/excursionService';
import './Excursion.scss';
import { ExcursionDescription } from './components/ExcursionDescription';
import { ExcursionDetails } from './components/ExcursionDetails';
import { ExcursionHighlights } from './components/ExcursionHighlights';
import { ExcursionPricing } from './components/ExcursionPricing';
import { ExcludedServiceList } from './components/excursion-services/ExcludedServices';
import { IncludedServiceCard } from './components/excursion-services/IncludedServices';

const ExcursionText = 'Excursion';

export const Excursion = (): JSX.Element => {
    const { excursionId } = useParams();
    const { t } = useTranslation();

    // const {
    //     data: excursion,
    //     isLoading,
    //     isError,
    // } = useQuery(`excursion-${excursionId}`, () => getExcursion(excursionId as string), {
    //     enabled: Boolean(excursionId), // Only enable the query when excursionId is defined
    // });

    const excursion = {
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
            "Découvrez le rôle de Skala.",
            "Visitez le port traditionnel d'Essaouira.",
            "Découvrez le rôle de Skala.",
            "Visitez le port traditionnel d'Essaouira.",
            "Découvrez le rôle de Skala.",
        ],
        pricing: [
            "Groupe de 1 à 6 personnes : 160€",
            "Groupe de 7 à 10 personnes : 220€"
        ],
        duration: 1,
        durationUnit: "day",
        frequency: "chaque jour",
        journeyUnit: "hours",
        mapLink: "!1m18!1m12!1m3!1d2989.341307824481!2d1.8580233745480654!3d50.94727291058907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc3f73ce311321%3A0x8eb283b3a5494c64!2sCentre%20Commercial%20Calais%20Coeur%20De%20Vie!5e0!3m2!1sen!2sfr!4v1704567234458!5m2!1sen!2sfr",
    }

    const excursionTitle = excursion?.title ?? ExcursionText;

    // if (isLoading) {
    //     return <CircularProgress />;
    // }

    return (
        <Page
            description={excursionTitle}
            keywords={excursionTitle}
            title={t('destination_details')}
            className="excursion-detail"
        >
            {false ? (
                <CircularProgress />
            ) : (
                excursion && (
                    <Container>
                        <ExcursionDescription excursion={excursion} />
                        <ExcursionHighlights excursion={excursion} />
                        <ExcursionDetails excursion={excursion} />
                        <PanedSection
                            title={
                                <Typography variant="h5" className="setcion-title left-title">
                                    {t('pricing')}
                                </Typography>
                            }
                            leftPane={{
                                element: <ExcursionPricing excursion={excursion} />,
                                className: 'content-pane',
                            }}
                        />
                        <PanedSection
                            title={
                                <Typography variant="h5" className="setcion-title left-title">
                                    {t('whats_included')}
                                </Typography>
                            }
                            leftPane={{
                                element: <IncludedServiceCard services={excursion.includedServices ?? []} />,
                                className: 'content-pane',
                            }}
                        />
                        <PanedSection
                            title={
                                <Typography variant="h5" className="setcion-title left-title">
                                    {t('whats_not_included')}
                                </Typography>
                            }
                            leftPane={{
                                element: <ExcludedServiceList />,
                                className: 'content-pane',
                            }}
                        />
                    </Container>
                )
            )}
        </Page>
    );
};
