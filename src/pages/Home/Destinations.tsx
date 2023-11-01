import TitleBarImageList from "../../common/components/TitleBarImageList"


function Destinations() {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', background: "#e3d872" }}>
            <h3>Our Destinations</h3>
            <h2>Some of Traveler&apos;s Favourite Destinations</h2>
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
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    }
];