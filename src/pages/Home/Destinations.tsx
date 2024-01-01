import { Divider } from "@mui/material";
import TitleBarImageList from "../../common/components/TitleBarImageList"


function Destinations() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>
            <div style={{ width: '100%' }}>
                <Divider sx={{ borderBottomWidth: '45px' }} ><h2>Our Destinations</h2></Divider>
            </div>
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