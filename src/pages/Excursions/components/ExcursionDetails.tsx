import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HailIcon from '@mui/icons-material/Hail';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import TimerIcon from '@mui/icons-material/Timer';
import { Typography } from '@mui/material';
import PanedSection from '../../../common/components/panes/SectionedPanes';
import { Excursion } from '../../../common/types/excursion';

const ExcursionText = 'Excursion';
interface ExcursionDetailsInterface {
    excursion: Excursion;
}
export const ExcursionDetails = ({ excursion }: ExcursionDetailsInterface): JSX.Element => {
    return (
        <PanedSection
            title={
                <Typography variant="h5" className="setcion-title left-title">
                    Trip details
                </Typography>
            }
            leftPane={{
                element: (
                    <ul className="no-bullets">
                        <li className="excursion-detail-item padded">
                            <ShutterSpeedIcon color="primary" /> Duration: {excursion?.duration}{' '}
                            {excursion?.durationUnit}
                        </li>
                        <li className="excursion-detail-item padded">
                            <CalendarMonthIcon color="primary" />
                            Available: {excursion?.frequency}
                        </li>
                        <li className="excursion-detail-item padded">
                            <HourglassTopIcon color="primary" />
                            Time of pick-up departure: {excursion?.departurePickupTime} local time your hotel
                        </li>
                        <li className="excursion-detail-item padded">
                            <HourglassBottomIcon color="primary" />
                            Return Time: {excursion?.returnPickupTime} local time
                        </li>
                        <li className="excursion-detail-item padded">
                            <HailIcon color="primary" />
                            Pick up and drop off From Your Hotel
                        </li>
                        <li className="excursion-detail-item padded">
                            <TimerIcon color="primary" />
                            Journey time {excursion?.departureCity}-{excursion?.destinationCity}:{' '}
                            {excursion?.journeyTime} {excursion?.journeyTimeUnit}
                        </li>
                    </ul>
                ),
                className: 'content-pane',
            }}
            rightPane={{
                element: (
                    <iframe
                        title={excursion?.title}
                        src={`https://www.google.com/maps/embed?pb=${excursion?.mapLink}`}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                ),
                className: 'visual-pane map',
            }}
        />
    );
};
