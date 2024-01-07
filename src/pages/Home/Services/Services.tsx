import { Button } from "@mui/material";
import TextWithLines from "../../../common/components/QuiltedImageList/TitleWithLines";
import { defaultImage } from "../../../common/utils/imageUtils";

import './Services.scss'
import { Link } from "react-router-dom";


function Services() {
    return (
        <div>
            <TextWithLines text='Our Services' />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', padding: '2.5rem' }}>
                {services.map(service =>
                    <div key={service.img} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                        <img
                            style={{
                                objectFit: 'cover',
                                borderRadius: '5px',
                                filter: 'brightness(60%)'
                            }}
                            src={service.img}
                            alt={service.title}
                            height={380}
                            width={320}
                            loading="lazy"
                            onError={defaultImage.small.errorHandler}
                        />
                        <div className="service-information">
                            <h2><em>{service.title}</em></h2>
                            <p>{service.description}</p>
                            <Button component={Link} to="/excursions">en savoir plus</Button>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Services

const services = [
    {
        img: '/img/destinations/excursion.jpeg',
        title: 'Breakfast',
        description: '@En el apartado de excursiones puedes encontrar muchas opciones, p En el apartado de excursiones puedes encontrar',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: '/img/destinations/tour.jpg',
        title: 'Burger',
        description: '@En el apartado de excursiones puedes encontrar muchas opciones, p En el apartado de excursiones puedes encontrar',
    },
    {
        img: '/img/destinations/activity.jpeg',
        title: 'Camera',
        description: '@En el apartado de excursiones puedes encontrar muchas opciones, p En el apartado de excursiones puedes encontrar',
    }
];