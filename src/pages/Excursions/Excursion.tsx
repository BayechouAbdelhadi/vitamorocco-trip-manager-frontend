import { CircularProgress, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import PanedSection from '../../common/components/panes/SectionedPanes';
import { getExcursion } from '../../common/services/excursionService';
import './Excursion.scss';
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
                <>
                    <PanedSection
                        title={
                            <Typography variant="h5" className="setcion-title left-title">
                                Description
                            </Typography>
                        }
                        leftPane={{
                            element: (
                                <Typography variant="body1" className="description-text">
                                    {excursion?.description}
                                </Typography>
                            ),
                            className: 'content-pane',
                        }}
                        rightPane={{
                            element: <img src="https://mui.com/static/images/cards/paella.jpg" alt="description" />,
                            className: 'visual-pane',
                        }}
                    />
                    <PanedSection
                        title={
                            <Typography variant="h5" className="setcion-title left-title">
                                Highlights
                            </Typography>
                        }
                        leftPane={{
                            element: <img src="https://mui.com/static/images/cards/paella.jpg" alt="highlights" />,
                            className: 'visual-pane',
                        }}
                        rightPane={{
                            element: (
                                <ul>
                                    {excursion?.highlights.map((heighlight) => (
                                        <li key={heighlight}>{heighlight}</li>
                                    ))}
                                </ul>
                            ),
                            className: 'content-pane',
                        }}
                    />
                    <Typography variant="h5" className="setcion-title left-title">
                        What is included
                    </Typography>
                    <IncludedServiceCard services={excursion?.includedServices ?? []} />
                    <Typography variant="h5" className="setcion-title left-title">
                        What is not included
                    </Typography>
                    <ExcludedServiceList />
                </>
            )}
        </Page>
    );
};
