import { Page } from '../../common/components/Page/Page';

export const Services = (): JSX.Element => {
    const ServicesText = 'Services';

    return (
        <Page description={ServicesText} keywords={ServicesText} elements={<link rel="canonical" href={window.location.href} />} title={ServicesText}>
            Services
        </Page>
    );
};
