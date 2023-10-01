import { Page } from '../../common/components/Page/Page';

export const About = (): JSX.Element => {
    const AboutText = 'About';

    return (
        <Page description={AboutText} keywords={AboutText} title={AboutText}>
            About
        </Page>
    );
};
