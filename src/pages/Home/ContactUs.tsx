import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../../common/utils'
import TextWithLines from '../../common/components/QuiltedImageList/TitleWithLines'

function ContactUs() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextWithLines text='Contact us' />
            <h2>Are You Ready</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reprehenderit voluptas soluta,
            </p>
            <Button>
                <Link to="/contact" onClick={scrollToTop}>Contact Us</Link>
            </Button>
        </div>
    )
}

export default ContactUs