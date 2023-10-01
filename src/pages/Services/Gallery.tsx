import { Page } from '../../common/components/Page/Page';

export const Gallery = (): JSX.Element => {
    const GalleryText = 'Gallery';

    return (
        <Page description={GalleryText} keywords={GalleryText} title={GalleryText}>
            Gallery
        </Page>
    );
};
