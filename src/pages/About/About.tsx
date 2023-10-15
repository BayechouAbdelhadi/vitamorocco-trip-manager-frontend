import { Page } from '../../common/components/Page/Page';
const AboutText = 'About';

export const About = (): JSX.Element => {
    return (
        <Page description={AboutText} keywords={AboutText} title={AboutText}>
            About
        </Page>
    );
};
