import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { CircularProgress, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import PanedSection from '../../common/components/panes/SectionedPanes';
import { getActivity } from '../../common/services/activityService';
import { ContactForm } from '../Contact/Contact';
import { PanedDescription } from '../Excursions//components/PanedDescription';
import { PanedHighlights } from '../Excursions//components/PanedHighlights';
import '../Excursions/Excursions.scss';
import { Pricing } from '../Excursions/components/Pricing';
import '../Tours/Tour.scss';
import { ActivityDetails } from './components/ActivityDetails';

const ActivityText = 'Activity';

export const Activity = (): JSX.Element => {
    const { activityId } = useParams();
    const { t } = useTranslation();

    const {
        data: activity,
        isLoading,
        isError,
    } = useQuery(['activity', activityId], () => getActivity(activityId as string), {
        enabled: Boolean(activityId), // Only enable the query when activityId is defined
    });

    const activityTitle = activity?.title ?? ActivityText;

    console.log(activity?.includedServices);

    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <Page
            description={activityTitle}
            keywords={activityTitle}
            title={activityTitle}
            imgSrc={`/img/excursions/${activity?.id}/${activity?.titleImg}`}
            className="excursion-detail"
        >
            {activity && (
                <Container>
                    <PanedDescription
                        imgSrc={`/img/excursions/${activity.id}/${activity.descriptionImg}`}
                        description={activity.description}
                    />
                    <PanedHighlights
                        highlights={activity?.highlights}
                        highlightsImgs={activity?.highlightImgs?.map(
                            (imgName) => `/img/excursions/${activity.id}/${imgName}`
                        )}
                    />
                    <ActivityDetails activity={activity} />
                    <Pricing pricing={activity.pricing} />
                    <PanedSection
                        title={
                            <Typography variant="h5" className="setcion-title left-title">
                                {t('whats_included')}
                            </Typography>
                        }
                        leftPane={{
                            element: (
                                <div className="excluded-services-list">
                                    <ul className="no-bullets">
                                        {activity.includedServices?.map((service) => (
                                            <li key={service}>
                                                <DoneIcon color="success" />
                                                <div>{service}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ),
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
                            element: (
                                <div className="excluded-services-list">
                                    <ul className="no-bullets">
                                        {activity.excludedServices?.map((service) => (
                                            <li key={service}>
                                                <CloseIcon color="error" />
                                                <div>{service}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ),
                            className: 'content-pane',
                        }}
                    />
                    <PanedSection
                        title={
                            <Typography variant="h5" className="setcion-title left-title">
                                {t('Good to know')}
                            </Typography>
                        }
                        leftPane={{
                            element: (
                                <div className="excluded-services-list">
                                    <ul className="no-bullets">
                                        {activity.importantDetails?.map((service) => (
                                            <li key={service}>
                                                <DoneIcon color="secondary" />
                                                <div>{service}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ),
                            className: 'content-pane',
                        }}
                    />
                    {/* <ExcludedServiceList /> */}
                    <hr />
                    {/* <p>
                            Our excursions are fully customizable to cater to your unique interests and preferences.
                            Whether you&apos;re seeking adventure, culture, relaxation, or a blend of experiences,
                            we&apos;ve got you covered. Simply reach out to us with your ideas, and we&apos;ll tailor
                            the perfect itinerary just for you.
                        </p> */}
                    <p style={{ marginBottom: 20 }}>
                        <strong>Contact us to transform your activity dreams into reality!</strong>
                    </p>
                    <ContactForm subject={`Excursion ${activity?.title}`} />
                </Container>
            )}
        </Page>
    );
};
