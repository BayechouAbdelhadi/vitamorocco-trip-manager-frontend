import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HailIcon from '@mui/icons-material/Hail';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PanedSection from '../../../common/components/panes/SectionedPanes';
import { Excursion } from '../../../common/types/excursion';
import { Tour } from '../../../common/types/tour';

interface ExcursionDetailsInterface {
    excursion: Excursion | Tour;
    type?: string;
}

export const ExcursionDetails = ({ excursion, type = 'excursions' }: ExcursionDetailsInterface): JSX.Element => {
    const { t } = useTranslation();

    const duration =
        type === 'tours'
            ? `${excursion?.duration} ${t(excursion?.durationUnit)}s / ${excursion?.duration - 1} ${t('nights')}`
            : `1 ${t('day')}`;

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
                            <HourglassTopIcon color="primary" />
                            <strong>{t('duration')} :</strong>&nbsp;{duration}
                        </li>
                        <li className="excursion-detail-item padded">
                            <CalendarMonthIcon color="primary" />
                            <strong>{t('available')} :</strong>&nbsp;{excursion?.frequency}
                        </li>
                        <li className="excursion-detail-item padded">
                            <ShutterSpeedIcon color="primary" />
                            <strong>{t('pick_up_time_departure')} :</strong>&nbsp;{excursion?.departurePickupTime}{' '}
                            {t('local_time')}
                        </li>
                        <li className="excursion-detail-item padded">
                            <HailIcon color="primary" />
                            <strong>{t('pick_up_and_drop_off')} :</strong>&nbsp;{t('airport_hotel')}
                        </li>
                        <li className="excursion-detail-item padded">
                            <AttachMoneyIcon color="primary" />
                            <strong>{t('price')} :</strong>&nbsp;{t('consult_us')}
                        </li>
                        <li className="excursion-detail-item padded">
                            <DoDisturbIcon color="primary" />
                            <strong>{t('cancelation')} :</strong>&nbsp;{t('free')}
                        </li>
                        <li className="excursion-detail-item padded">
                            <FlightTakeoffIcon color="primary" />
                            <strong>{t('starting_location')} :</strong>&nbsp;{excursion?.departureCity}
                        </li>
                        <li className="excursion-detail-item padded">
                            <FlightLandIcon color="primary" />
                            <strong>{t('ending_location')} :</strong>&nbsp;{excursion?.destinationCity}
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
