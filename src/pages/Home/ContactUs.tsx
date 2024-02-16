import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../../common/utils'
import TextWithLines from '../../common/components/QuiltedImageList/TitleWithLines'
import { useTranslation } from 'react-i18next'

function ContactUs() {
    const { t } = useTranslation();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextWithLines text={t('explore_morocco_with_us')} />
            <Typography sx={{
                width: { xs: '100%', md: '70%' },
                textAlign: 'center',
                lineHeight: 2.5
            }}>{t('special_request_description')}</Typography>
            <Button component={Link} to="/contact" className='secondary-button' sx={{ margin: '20px 0' }} onClick={scrollToTop}>
                {t('contact.title')}
            </Button>
        </div>
    )
}

export default ContactUs