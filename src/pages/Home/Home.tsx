import { Page } from '../../common/components/Page/Page';
import { useCounter } from '../../database/counter';
import { useCounter as useCounterRedux } from '../../store/front/counter';

export const Home = (): JSX.Element => {
    const { counter, handleDecrementClick, handleIncrementClick } = useCounter();
    const { counter: c, handleDecrementClick: hDC, handleIncrementClick: hIC } = useCounterRedux();
    const homeText = 'Home';

    return (
        <Page description={homeText} keywords={homeText} title={homeText}>
            Home
        </Page>
    );
};
