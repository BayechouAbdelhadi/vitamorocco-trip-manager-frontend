import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../../common/utils'
import TextWithLines from '../../common/components/QuiltedImageList/TitleWithLines'

function ContactUs() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextWithLines text='Explore Morocco With Us' />
            {/* <h2>Are You Ready</h2> */}
            <p style={{ padding: '0 40px', textAlign: 'justify' }}>
                Si vous préférez éviter les voyages organisés en grands groupes et appréciez une approche plus flexible,
                Venamarruecos simplifie votre expérience de voyage en vous permettant de partir à votre rythme,
                sans contraintes, et de personnaliser votre itinéraire selon vos propres goûts et intérêts.
            </p>
            <Button component={Link} to="/contact" sx={{ margin: '20px 0' }} onClick={scrollToTop}>
                Contact Us
            </Button>
        </div>
    )
}

export default ContactUs