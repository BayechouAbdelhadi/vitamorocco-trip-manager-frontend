import Button from "@mui/material/Button";
import TextWithLines from "../../../common/components/QuiltedImageList/TitleWithLines";
import { defaultImage } from "../../../common/utils/imageUtils";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { scrollToTop } from "../../../common/utils";

import './Services.scss'


function Services() {
    const navigate = useNavigate();
    const goToService = (serviceUri: string) => {
        navigate(`./${serviceUri}`, { relative: 'path' });
        scrollToTop();
    };

    const { t } = useTranslation();



    return (
        <>
            <TextWithLines text={t('our_services')} />
            <div className="services-container">
                {SERVICES.map(service =>
                    <div key={service.img} className="service-card" onClick={() => goToService(service.title)}>
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
                            <h2><em>{t(`services.${service.title}.title`)}</em></h2>
                            <p>{t(`services.${service.title}.description`)}</p>
                            <Link to={`/${service.title}`}>
                                {t('see_more')} {t(`services.${service.title}.title`)}
                            </Link>
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
        img: '/img/destinations/excursion.webp',
        title: 'excursions',
        description: 'Explore a variety of options in the excursions section, and keep in mind that we can tailor them to match your preferences',
        rows: 2,
        cols: 2,
    },
    {
        img: '/img/destinations/tour.webp',
        title: 'tours',
        description: 'you will discover a captivating range of itineraries carefully designed to offer you unforgettable travel experiences',
    },
    {
        img: '/img/destinations/activity.webp',
        title: 'activities',
        description: 'immerse yourself in a diversity of enriching experiences to discover in our country. From cultural escapes to outdoor adventures, explore the endless possibilities that await you',
    }
];