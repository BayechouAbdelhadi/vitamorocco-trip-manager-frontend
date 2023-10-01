import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';

export const Activity = (): JSX.Element => {
    const ActivityText = 'Activity';
    const { activityId } = useParams();

    return (
        <Page description={ActivityText} keywords={ActivityText} title={ActivityText}>
            Activity {activityId}
        </Page>
    );
};
