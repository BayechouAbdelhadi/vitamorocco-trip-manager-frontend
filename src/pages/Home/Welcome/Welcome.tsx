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
                    <h3><em>{t('explore_morocco_with_us')}</em></h3>
                    {/* <p>{t('vita_morocco_definition')}</p> */}
                    {/* <p>{t('vita_morocco_goal')}</p> */}
                    <p>
                        <strong>VITA MOROCCO</strong> is a Small local tour company based in Marrakech, created and managed by
                        authentic local Imazighen, the Founder is Mohamed he is young man 25 years old with a
                        degree in Travel agency & Tourism from the southeast of Morocco, with more than 12 years
                        experience in the Tourism sector, specialized in creating personalized and authentic travel
                        experiences.
                    </p>
                </div>
                <img
                    className='welcome-image'
                    src="/img/welcome.jpg"
                    alt="Home"
                    loading="lazy"
                    height={250}
                    width={350}
                />
            </div>
        </div >
    )
}

export default Welcome