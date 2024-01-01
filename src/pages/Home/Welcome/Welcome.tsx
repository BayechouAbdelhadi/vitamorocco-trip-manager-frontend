import Divider from '@mui/material/Divider';
import './Welcome.scss'
import { Chip, Typography } from '@mui/material';

function Welcome() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 30px',
            position: 'relative',
        }}
        >
            <div style={{ width: '100%' }}>
                <Divider sx={{ borderBottomWidth: '45px' }} ><h2>Welcome To Vita Morocco</h2></Divider>
            </div>
            <h1 style={{ fontStyle: 'italic' }} >The Best Travel Service Provider</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '600px',
                    gap: '0.5rem'
                }}>
                    <h3>Explore Morocco With Us</h3>
                    <p>
                        Vita Morocco is a local travel company, specialized in organizing trips, holidays, shared
                        and private tours, honeymoon and different activities in Morocco.
                    </p>
                    <h4>
                        Our goal is to provide the best iteneraries with real  & authentic experience
                    </h4>
                </div>
                <img
                    className='welcome-image'
                    src="/img/welcome.jpg"
                    alt="Home"
                    height={250}
                    width={350}
                />
            </div>
        </div>
    )
}

export default Welcome