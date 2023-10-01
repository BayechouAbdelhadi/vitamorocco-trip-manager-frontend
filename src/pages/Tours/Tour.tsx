import { Page } from '../../common/components/Page/Page';

export const Tour = (): JSX.Element => {
    const TourText = 'Tour';

    return (
        <Page description={TourText} keywords={TourText} title={TourText}>
            Tour
        </Page>
    );
};
