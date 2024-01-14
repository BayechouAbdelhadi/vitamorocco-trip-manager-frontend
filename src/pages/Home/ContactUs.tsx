import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../../common/utils'
import TextWithLines from '../../common/components/QuiltedImageList/TitleWithLines'

function ContactUs() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextWithLines text='Explore Morocco With Us' />
            <Typography sx={{
                width: { xs: '100%', md: '70%' },
                textAlign: 'center',
                lineHeight: 2.5
            }}>
                Si vous préférez éviter les voyages organisés en grands groupes et appréciez une approche plus flexible,
                Venamarruecos simplifie votre expérience de voyage en vous permettant de partir à votre rythme,
                sans contraintes, et de personnaliser votre itinéraire selon vos propres goûts et intérêts.
            </Typography>
            <Button component={Link} to="/contact" sx={{ margin: '20px 0' }} onClick={scrollToTop}>
                Contact Us
            </Button>
        </div>
    )
}

export default ContactUs