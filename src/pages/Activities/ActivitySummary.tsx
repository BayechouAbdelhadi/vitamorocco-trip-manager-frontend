import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import HailIcon from '@mui/icons-material/Hail';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { Activity } from '../../common/types/activity';
import { scrollToTop } from '../../common/utils';
import { defaultImage } from '../../common/utils/imageUtils';

interface ActivitySummaryProps {
    readonly activity: Activity;
}

export default function ActivitySummary({ activity }: ActivitySummaryProps): JSX.Element {
    const navigate = useNavigate();
    const goToActivity = () => {
        navigate(`./${activity.id}`, { relative: 'path' });
        scrollToTop();
    };

    const { t } = useTranslation();

    const duration = `${activity?.duration} ${activity?.durationUnit}s`;

    return (
        <Card className="excursion-summary-card-container" onClick={goToActivity}>
            <CardHeader
                action={
                    <IconButton aria-label="view activity">
                        <VisibilityIcon />
                    </IconButton>
                }
                title={activity.title}
            />
            <CardMedia
                component="img"
                height="250"
                loading="lazy"
                image={`/img/activities/${activity.id}/${activity.summaryImg}`}
                alt={`excursion ${activity.title}`}
                onError={defaultImage.small.errorHandler}
            />
            <CardContent>
                <ul className="no-bullets" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    <li className="li-summary">
                        <HourglassTopIcon color="primary" />
                        <strong>{t('duration')} :</strong>&nbsp;{duration}
                    </li>
                    <li className="li-summary">
                        <CalendarMonthIcon color="primary" />
                        <strong>{t('available')} :</strong>&nbsp;{activity?.frequency}
                    </li>
                    <li className="li-summary">
                        <ShutterSpeedIcon color="primary" />
                        <strong>{t('pick_up_time_departure')} :</strong>&nbsp;{activity?.pickUpTime} ({t('local_time')})
                    </li>
                    <li className="li-summary">
                        <HailIcon color="primary" />
                        <strong>{t('pick_up_and_drop_off')} :</strong>&nbsp;{t('airport_hotel')}
                    </li>
                    <li className="li-summary">
                        <AttachMoneyIcon color="primary" />
                        <strong>{t('price')} :</strong>&nbsp;{t('consult_us')}
                    </li>
                    <li className="li-summary">
                        <DoDisturbIcon color="primary" />
                        <strong>{t('cancelation')} :</strong>&nbsp;{t('free')}
                    </li>
                    {/* <li className="li-summary">
                        <FlightTakeoffIcon color="primary" />
                        <strong>{t('starting_location')} :</strong>&nbsp;{activity?.departureCity}
                    </li>
                    <li className="li-summary">
                        <FlightLandIcon color="primary" />
                        <strong>{t('ending_location')} :</strong>&nbsp;{activity?.destinationCity}
                    </li> */}
                </ul>
            </CardContent>
            {/* <CardActions disableSpacing>
                
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
               
                <ShareButton
                    shareData={{
                        title: `excursion ${excursion.title}`,
                        text: 'Check out this link!',
                        url: `${window.location.href}/${excursion.id}`,
                    }}
                />
            </CardActions> */}
        </Card>
    );
}
