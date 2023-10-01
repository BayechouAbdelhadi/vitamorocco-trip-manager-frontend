import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';

export const Tour = (): JSX.Element => {
    const TourText = 'Tour';
    const { tourId } = useParams();

    return (
        <Page description={TourText} keywords={TourText} title={TourText}>
            Tour {tourId}
        </Page>
    );
};
