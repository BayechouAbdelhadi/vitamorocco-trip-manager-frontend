import { Link } from 'react-router-dom'
import { scrollToTop } from '../../../common/utils'
import './Welcome.scss'
import TextWithLines from '../../../common/components/TitleBarImageList/TitleWithLines'

function Welcome() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 30px'
        }}
        >
            <h2>Welcome To Vita Morocco</h2>
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
                    <button>
                        <Link to="/" onClick={scrollToTop}>
                            Get Started
                        </Link>
                    </button>
                </div>
                <img
                    style={{
                        borderRadius: '10px',
                    }}
                    src="/img/not-found-small.png"
                    alt="Home" />

            </div>
        </div>
    )
}

export default Welcome