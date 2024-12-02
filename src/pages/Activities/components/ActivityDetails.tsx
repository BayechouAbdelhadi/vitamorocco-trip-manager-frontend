import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import HailIcon from '@mui/icons-material/Hail';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import PanedSection from '../../../common/components/panes/SectionedPanes';
import { Activity } from '../../../common/types/activity';

interface ActivityDetailsInterface {
    activity: Activity;
}

export const ActivityDetails = ({ activity }: ActivityDetailsInterface): JSX.Element => {
    const { t } = useTranslation();

    const duration = activity?.freeDuration
        ? 'Depends how many hours the travellers want'
        : `${activity?.duration} ${activity?.durationUnit}s`;

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
                            <strong>{t('available')} :</strong>&nbsp;{activity?.frequency}
                        </li>
                        <li className="excursion-detail-item padded">
                            <ShutterSpeedIcon color="primary" />
                            <strong>{t('pick_up_time_departure')} :</strong>&nbsp;{activity?.pickUpTime}{' '}
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
                    </ul>
                ),
                className: 'content-pane',
            }}
            rightPane={{
                element: (
                    <iframe
                        title={activity?.title}
                        src={`https://www.google.com/maps/embed?pb=${activity?.mapLink}`}
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
