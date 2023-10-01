import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';

export const Excursion = (): JSX.Element => {
    const ExcursionText = 'Excursion';
    const { excursionId } = useParams();

    return (
        <Page description={ExcursionText} keywords={ExcursionText} title={ExcursionText}>
            Excursion {excursionId}
        </Page>
    );
};
