import './Welcome.scss'
import TextWithLines from '../../../common/components/QuiltedImageList/TitleWithLines';
import { useTranslation } from 'react-i18next';

function Welcome() {
    const { t } = useTranslation();
    return (
        <div className='welcome-container'>
            <TextWithLines text={t('welcome_to_vita_morocco')} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '600px',
                    gap: '0.5rem'
                }}>
                    {/* <h3><em>{t('explore_morocco_with_us')}</em></h3> */}
                    {/* <p>{t('vita_morocco_definition')}</p> */}
                    {/* <p>{t('vita_morocco_goal')}</p> */}
                    <p>
                        <strong>VITA MOROCCO</strong> is your ultimate travel companion for exploring the enchanting landscapes, vibrant cultures,
                        and rich traditions of Morocco. Our mission is to inspire travelers to venture beyond their comfort zones,
                        immersing themselves in the unique beauty and diversity that Morocco has to offer.
                    </p>
                    <p>
                        From the bustling markets
                        of Marrakech to the historic streets of Fes, we curate a wide array of <strong>Tours and Activities</strong> designed to cater to every
                        adventurer&apos;s needs. Whether you&apos;re interested in <strong>Day trips, City excursions</strong>, or <strong>Guided tours</strong> through Morocco&apos;s most
                        iconic cities, <strong>VITA MOROCCO</strong> equips you with all the essential information and tips to make your vacation truly unforgettable.
                        Join us to enrich your life with new experiences and discoveries in Morocco.
                    </p>
                </div>
                <img
                    className="welcome-image"
                    src="/img/welcome.jpg"
                    alt="Home"
                    loading="lazy"
                    height={350}
                    width={350}
                />
            </div>
        </div >
    )
}

export default Welcome