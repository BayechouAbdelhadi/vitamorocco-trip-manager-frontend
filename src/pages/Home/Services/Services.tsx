import { Button } from "@mui/material";
import TextWithLines from "../../../common/components/QuiltedImageList/TitleWithLines";
import { defaultImage } from "../../../common/utils/imageUtils";
import { Link } from "react-router-dom";

import './Services.scss'


function Services() {
    return (
        <>
            <TextWithLines text='Our Services' />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', padding: '1rem' }}>
                {SERVICES.map(service =>
                    <div key={service.img} className="service-card">
                        <img
                            className="service-card-img"
                            src={service.img}
                            alt={service.title}
                            height={380}
                            width={320}
                            loading="lazy"
                            onError={defaultImage.small.errorHandler}
                        />
                        <div className="service-card-information">
                            <h2><em>{service.title}</em></h2>
                            <p>{service.description}</p>
                            <Button component={Link} to="/excursions">en savoir plus</Button>
                        </div>
                    </div>
                )}
            </div>
        </ >
    )
}

export default Services

const SERVICES = [
    {
        img: '/img/destinations/excursion.jpeg',
        title: 'Excursions',
        description: '@En el apartado de excursiones puedes encontrar muchas opciones, p En el apartado de excursiones puedes encontrar',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: '/img/destinations/tour.jpg',
        title: 'Tours',
        description: '@En el apartado de excursiones puedes encontrar muchas opciones, p En el apartado de excursiones puedes encontrar',
    },
    {
        img: '/img/destinations/activity.jpeg',
        title: 'Activities',
        description: '@En el apartado de excursiones puedes encontrar muchas opciones, p En el apartado de excursiones puedes encontrar',
    }
];