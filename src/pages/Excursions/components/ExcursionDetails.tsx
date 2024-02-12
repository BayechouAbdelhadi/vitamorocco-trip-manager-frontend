import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HailIcon from '@mui/icons-material/Hail';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import TimerIcon from '@mui/icons-material/Timer';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PanedSection from '../../../common/components/panes/SectionedPanes';
import { Excursion } from '../../../common/types/excursion';

const ExcursionText = 'Excursion';
interface ExcursionDetailsInterface {
    excursion: Excursion;
}
export const ExcursionDetails = ({ excursion }: ExcursionDetailsInterface): JSX.Element => {
    const { t } = useTranslation();
    return (
        <PanedSection
            title={
                <Typography variant="h5" className="setcion-title left-title">
                    {t('trip_details')}
                </Typography>
            }
            leftPane={{
                element: (
                    <ul className="no-bullets">
                        <li className="excursion-detail-item padded">
                            <ShutterSpeedIcon color="primary" /> {t('duration')}: {excursion?.duration}{' '}
                            {excursion?.durationUnit}
                        </li>
                        <li className="excursion-detail-item padded">
                            <CalendarMonthIcon color="primary" />
                            {t('available')}: {excursion?.frequency}
                        </li>
                        <li className="excursion-detail-item padded">
                            <HourglassTopIcon color="primary" />
                            {t('pick_up_time_departure')} : {excursion?.departurePickupTime} ({t('local_time')})
                        </li>
                        <li className="excursion-detail-item padded">
                            <HourglassBottomIcon color="primary" />
                            {t('return_time')}: {excursion?.returnPickupTime} ({t('local_time')})
                        </li>
                        <li className="excursion-detail-item padded">
                            <HailIcon color="primary" />
                            {t('pick_up_and_drop_off_from_hotel')}
                        </li>
                        <li className="excursion-detail-item padded">
                            <TimerIcon color="primary" />
                            {t('journey_time')}
                            <strong>
                                {excursion?.departureCity}-{excursion?.destinationCity}
                            </strong>
                            : {excursion?.journeyTime} {excursion?.journeyTimeUnit}
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
