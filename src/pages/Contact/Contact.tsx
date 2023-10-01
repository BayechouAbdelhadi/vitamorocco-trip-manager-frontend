import { Page } from '../../common/components/Page/Page';

export const Contact = (): JSX.Element => {
    const ContactText = 'Contact';

    return (
        <Page description={ContactText} keywords={ContactText} title={ContactText}>
            Contact
        </Page>
    );
};
