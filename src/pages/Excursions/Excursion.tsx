import { CircularProgress, Typography } from '@mui/material';
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
    const { t, i18n } = useTranslation();

    const {
        data: excursion,
        isLoading,
        isError,
    } = useQuery(`excursion-${excursionId}`, () => getExcursion(excursionId as string), {
        enabled: Boolean(excursionId), // Only enable the query when excursionId is defined
    });

    const excursionTitle = excursion?.title ?? ExcursionText;

    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <Page
            description={excursionTitle}
            keywords={excursionTitle}
            title="Destination details"
            className="excursion-detail"
        >
            {isLoading ? (
                <CircularProgress />
            ) : (
                excursion && (
                    <>
                        <div className="title">
                            <TextWithLines text="Destination" />
                            <Typography variant="h4">{excursionTitle}</Typography>
                        </div>
                        <ExcursionDescription excursion={excursion} />
                        <ExcursionHighlights excursion={excursion} />
                        <ExcursionDetails excursion={excursion} />
                        <PanedSection
                            title={
                                <Typography variant="h5" className="setcion-title left-title">
                                    Pricing
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
                                    What is included
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
                                    What is not included
                                </Typography>
                            }
                            leftPane={{
                                element: <ExcludedServiceList />,
                                className: 'content-pane',
                            }}
                        />
                    </>
                )
            )}
        </Page>
    );
};
