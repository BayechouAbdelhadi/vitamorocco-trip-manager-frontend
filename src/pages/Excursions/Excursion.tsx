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
                    <PanedSection
                        title={
                            <Typography variant="h5" className="setcion-title left-title">
                                Trip details
                            </Typography>
                        }
                        leftPane={{
                            element: <>Some details</>,
                            className: 'content-pane',
                        }}
                        rightPane={{
                            element: (
                                <iframe
                                    title={excursion?.title}
                                    src={`https://www.google.com/maps/embed?pb=${excursion?.mapLink}`}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            ),
                            className: 'visual-pane map',
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

/**
 *
 * <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20107.803983360976!2d1.8483819259612682!3d50.95191232391747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc3f75d7f1e363%3A0xacbed9e08cd279f4!2sCalais!5e0!3m2!1sfr!2sfr!4v1703432512164!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 */
