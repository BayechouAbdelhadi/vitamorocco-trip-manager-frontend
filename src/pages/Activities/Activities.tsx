import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import TitleWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
import { getActivities } from '../../common/services/activityService';
import ActivitySummary from './ActivitySummary';
import { useTranslation } from 'react-i18next';

const ActivitiesText = 'Activities';

export const Activities = (): JSX.Element => {
    const { data: activities, isLoading } = useQuery('activities', getActivities);

    const { t } = useTranslation();

    return (
        <Page
            description={ActivitiesText}
            title={t('activities.title')}
            imgSrc="/img/activities/activity_title.webp"
        >
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <TitleWithLines text={t("our_activities_selection")} />
                    {/* <p>
                        Explore our curated selection of popular one-day excursions departing from Marrakech, designed
                        to cater to the discerning traveler. <strong>VITA MOROCCO</strong> ensures a seamless
                        experience, providing comprehensive pick-up and drop-off services from your hotel or riad. Our
                        excursions are exclusively private and fully customizable, affording you the freedom to design
                        your journey, from choosing specific stops to determining the length of your stay at each. For
                        bespoke travel experiences tailored to your unique preferences, reach out to us.
                    </p> */}
                    {/* <a className="email-link" href="mailto:contact@vitamorocco.com">
                        contact@vitamorocco.com
                    </a> */}
                    {/* <h3>Discover the essence of Morocco with us</h3> */}
                    <div className="excursions-container">
                        {activities?.map((activity) => (
                            <ActivitySummary key={activity.id} activity={activity} />
                        ))}
                    </div>
                </>
            )}
        </Page>
    );
};
