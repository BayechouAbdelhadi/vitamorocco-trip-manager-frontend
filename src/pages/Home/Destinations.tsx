import TitleBarImageList from "../../common/components/TitleBarImageList"
import TextWithLines from "../../common/components/TitleBarImageList/TitleWithLines";


function Destinations() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>
            <TextWithLines text='Our Destinations' />
            <h2>Our Traveler&apos;s Favourite Destinations</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <TitleBarImageList itemData={itemData} />
        </div>
    )
}

export default Destinations

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
        img: '/img/destinations/tour.jpg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: '/img/destinations/activity.jpeg',
        title: 'Camera',
        author: '@helloimnik',
    }
];