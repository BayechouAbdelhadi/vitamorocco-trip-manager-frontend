import TextWithLines from '../../../common/components/QuiltedImageList/TitleWithLines';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

import './Welcome.scss';

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
                    {parse(t('vita_morocco_definition'))}
                </div>
                <img
                    className="welcome-image"
                    src="/img/welcome.webp"
                    alt="welcome image"
                    loading="lazy"
                    height={350}
                    width={350}
                />
            </div>
        </div >
    )
}

export default Welcome