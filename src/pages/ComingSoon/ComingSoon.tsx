import { useEffect, useState } from 'react'
import { Page } from '../../common/components/Page/Page'
import Box from '@mui/material/Box'
import './ComingSoon.scss'

export default function ComingSoon() {

    const [countdown, setCountdown] = useState<string | null>(null);

    useEffect(() => {
        // Set the date we're counting down to
        const countDownDate = new Date("Feb 05, 2024 15:37:25").getTime();

        // Update the count down every 1 second
        const countdownFunction = setInterval(() => {
            // Get todays date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            setCountdown(countdownString);

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(countdownFunction);
                setCountdown("EXPIRED");
            }
        }, 1000);

        // Cleanup function to clear interval on component unmount
        return () => clearInterval(countdownFunction);
    }, []);


    return (
        <Page description={"ComingSoon"} keywords={"ComingSoon"} title={"ComingSoon"} displayTitle={false}>
            <img className="bgimg" src='/img/3.jpeg' />
            <Box
                className="top-left"
                component="img"
                src="/img/logo-vita-morocco-white.svg"
                alt="logo"
                sx={{
                    height: "90px"
                }}
            />
            <div className="middle">
                <h1>COMING SOON</h1>
                <hr />
                <p style={{ fontSize: "30px" }}>{countdown}</p>
            </div>
            <div className="bottom-center">
                <h4>All Rights Reserved &#xA9; {new Date().getFullYear()}</h4>
            </div>
        </Page>
    )
}

const IMAGES = [
    {
        id: '444',
        title: 'Item 1, Note that the development build is not optimized.',
        description: 'cliquer pour savoir plus',
        alt: 'alt for Item 1',
        img_src: '/img/1.jpg',
        link: '/excursions/string'
    },
    {
        id: '445',
        title: 'Item 2, To create a production build, use npm run build.',
        description: 'savoir plus sur ce tour',
        alt: 'alt for Item 2',
        img_src: '/img/2.jpg',
        link: '/tours/string'
    },
    {
        id: '446',
        title: 'Item 3, To create a production build, use npm run build.',
        description: 'savoir plus sur ce tour',
        alt: 'alt for Item 3',
        img_src: '/img/2.jpg',
        link: '/tours/string'
    },
];
