import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import PanedSection from '../../common/components/panes/SectionedPanes';
import { getActivity } from '../../common/services/activityService';
import { ContactForm } from '../Contact/ContactForm';
import { PanedDescription } from '../Excursions//components/PanedDescription';
import { PanedHighlights } from '../Excursions//components/PanedHighlights';
import { Pricing } from '../Excursions/components/Pricing';
import { ActivityDetails } from './components/ActivityDetails';

import '../Excursions/Excursions.scss';
import '../Tours/Tour.scss';
import TripAdvisorWidget from '../../common/components/TripAdvisorWidget';

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

    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <Page
            description={activity?.description ?? activityTitle}
            title={activityTitle}
            elements={
                <>
                    <link rel="dns-prefetch" href="//static.tacdn.com" />
                    <link rel="preconnect" href="https://static.tacdn.com" />
                </>
            }
            imgSrc={`/img/activities/${activity?.id}/${activity?.titleImg}`}
            className="excursion-detail"
        >
            {activity && (
                <Container>
                    <PanedDescription
                        imgSrc={`/img/activities/${activity.id}/${activity.descriptionImg}`}
                        description={activity.description}
                    />
                    <PanedHighlights
                        highlights={activity?.highlights}
                        highlightsImgs={activity?.highlightImgs?.map(
                            (imgName) => `/img/activities/${activity.id}/${imgName}`
                        )}
                    />
                    <ActivityDetails activity={activity} />
                    <PanedSection
                        title={
                            <h5 className="setcion-title left-title">
                                {t('schedule')}
                            </h5>
                        }
                        leftPane={{
                            element: <p>{parse(activity.schedule)}</p>,
                            className: 'content-pane',
                        }}
                    />
                    <Pricing pricing={activity.pricing} />
                    <PanedSection
                        title={
                            <h5 className="setcion-title left-title">
                                {t('whats_included')}
                            </h5>
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
                            <h5 className="setcion-title left-title">
                                {t('whats_not_included')}
                            </h5>
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
                            <h5 className="setcion-title left-title">
                                {t('good_to_know')}
                            </h5>
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
                    <hr style={{ margin: '1rem 0' }} />
                    {/* <p>
                            Our excursions are fully customizable to cater to your unique interests and preferences.
                            Whether you&apos;re seeking adventure, culture, relaxation, or a blend of experiences,
                            we&apos;ve got you covered. Simply reach out to us with your ideas, and we&apos;ll tailor
                            the perfect itinerary just for you.
                        </p> */}
                    <p style={{ marginBottom: 20 }}>
                        <strong>{t('contact.to_reserve_activity_message')}</strong>
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <TripAdvisorWidget />
                        <ContactForm subject={`${t('activity')} ${activity?.title}`} />
                    </div>
                </Container>
            )}
        </Page>
    );
};
