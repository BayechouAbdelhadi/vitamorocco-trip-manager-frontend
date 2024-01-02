import TitleBarImageList from '../../common/components/TitleBarImageList'
import TextWithLines from '../../common/components/TitleBarImageList/TitleWithLines';

export default function Gallery() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextWithLines text='Gallery' />
            <h2>Memories We Collect</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reprehenderit voluptas soluta,
            </p>
            {/* <TitleBarImageList itemData={itemData} showLoadMore /> */}
            <TitleBarImageList itemData={itemData} />
        </div>
    )
}

const itemData = [
    {
        img: '/img/destinations/excursion.jpeg',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: '/img/destinations/activity.jpeg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: '/img/destinations/tour.jpg',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: '/img/1.jpg',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: '/img/2.jpg',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: '/img/welcome.jpg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
];
