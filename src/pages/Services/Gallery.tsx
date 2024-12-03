import { Page } from '../../common/components/Page/Page';

export const Gallery = (): JSX.Element => {
    const GalleryText = 'Gallery';

    return (
        <Page
            description={GalleryText}
            imgSrc='/img/gallery/gallery_title.jpg'
            title={GalleryText}
        >
            <h3>Coming soon...</h3>
        </Page>
    );
};
