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
                    <p>{t('vita_morocco_definition')}</p>
                    <p>{t('vita_morocco_goal')}</p>
                </div>
                <img
                    className='welcome-image'
                    src="/img/welcome.jpg"
                    alt="Home"
                    height={250}
                    width={350}
                />
            </div>
        </div >
    )
}

export default Welcome