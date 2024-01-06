import { CircularProgress, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import TextWithLines from '../../common/components/TitleBarImageList/TitleWithLines';
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
        highlights: ["string", "eeeeeee"],
        pricing: ["string[]", "qqqqqqqqq"],
        journeyUnit: "string",
        duration: 2,
        durationUnit: "string",
        frequency: "string",
        mapLink: "!1m18!1m12!1m3!1d2989.341307824481!2d1.8580233745480654!3d50.94727291058907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc3f73ce311321%3A0x8eb283b3a5494c64!2sCentre%20Commercial%20Calais%20Coeur%20De%20Vie!5e0!3m2!1sen!2sfr!4v1704567234458!5m2!1sen!2sfr"
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
                        <div className="title">
                            <TextWithLines text={t('destination')} />
                            <Typography variant="h4">{excursionTitle}</Typography>
                        </div>
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
