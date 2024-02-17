import { Page } from '../../common/components/Page/Page';

export const Activities = (): JSX.Element => {
    const ActivitiesText = 'Activities';

    return (
        <Page description={ActivitiesText} keywords={ActivitiesText} title={ActivitiesText} imgSrc='/img/activities/activity_title.jpg'>
            <h2>Coming soon...</h2>
        </Page>
    );
};
