import { Button, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../../common/utils'

function ContactUs() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%' }}>
                <Divider sx={{ borderBottomWidth: '45px' }} ><h3>Are You Ready</h3></Divider>
            </div>
            <h2>Explore With US</h2>
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