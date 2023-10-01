import { Page } from '../../common/components/Page/Page';
import { useCounter } from '../../database/counter';
import { useCounter as useCounterRedux } from '../../store/front/counter';

export const Home = (): JSX.Element => {
    const { counter, handleDecrementClick, handleIncrementClick } = useCounter();
    const { counter: c, handleDecrementClick: hDC, handleIncrementClick: hIC } = useCounterRedux();
    const homeText = 'Home';

    return (
        <Page description={homeText} keywords={homeText} title={homeText}>
            <p>Home</p>
            <img src="https://img.freepik.com/photos-premium/image-galaxie-coloree-dans-ciel-ai-generative_791316-9864.jpg?w=2000"/>
        </Page>
    );
};
