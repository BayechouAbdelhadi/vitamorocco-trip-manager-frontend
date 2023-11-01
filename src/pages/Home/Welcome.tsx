import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../../common/utils'

function Welcome() {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', background: "#a28585" }}>
            <h2>Welcome To Vita Morocco</h2>
            <h1>The Best Travel Service Provider</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <h3>Explore Morocco With Us</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        <br />
                        Fugiat labore saepe sequi quo voluptatem
                        laudantium maxime quod nostrum, obcaecati quis reic
                    </p>
                    <button>
                        <Link to="/" onClick={scrollToTop}>
                            Get Started
                        </Link>
                    </button>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=448&h=350&fit=crop&auto=format" alt="Home" />
                </div>
            </div>
        </div>
    )
}

export default Welcome