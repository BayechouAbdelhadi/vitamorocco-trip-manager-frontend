import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HailIcon from '@mui/icons-material/Hail';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';
import { Excursion } from '../../../common/types/excursion';
import { scrollToTop } from '../../../common/utils';
import { defaultImage } from '../../../common/utils/imageUtils';
import { useTranslation } from 'react-i18next';
import { Tour } from '../../../common/types/tour';
import ShareButton from '../../../common/components/Buttons/ShareButton/ShareButton';

interface ExcursionSummaryProps {
    readonly excursion: Excursion | Tour;
    type?: string;
}

export default function ExcursionSummary({ excursion, type = 'excursions' }: ExcursionSummaryProps): JSX.Element {
    const navigate = useNavigate();
    const goToExcursion = () => {
        navigate(`./${excursion.id}`, { relative: 'path' });
        scrollToTop();
    };

    const { t } = useTranslation();

    const duration =
        type === 'tours' ? `${excursion?.duration} ${t(excursion?.durationUnit)}s / ${excursion?.duration - 1} ${t('nights')}` : `1 ${t('day')}`;

    return (
        <Card className="excursion-summary-card-container" onClick={goToExcursion}>
            <CardHeader
                action={
                    <IconButton aria-label="view excursion">
                        <VisibilityIcon />
                    </IconButton>
                }
                title={excursion.title}
            />
            <CardMedia
                component="img"
                height="250"
                loading="lazy"
                image={`/img/${type}/${excursion.id}/${excursion.summaryImg}`}
                alt={`excursion ${excursion.title}`}
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
                        <strong>{t('available')} :</strong>&nbsp;{excursion?.frequency}
                    </li>
                    <li className="li-summary">
                        <ShutterSpeedIcon color="primary" />
                        <strong>{t('pick_up_time_departure')} :</strong>&nbsp;{excursion?.departurePickupTime} (
                        {t('local_time')})
                    </li>
                    <li className="li-summary">
                        <HailIcon color="primary" />
                        <strong>{t('pick_up_and_drop_off')} :</strong>&nbsp;{t('airport_hotel')}
                    </li>
                    <li className="li-summary">
                        <AttachMoneyIcon color="primary" />
                        <strong>{t('price')} :</strong>&nbsp;{t('contact.title')}
                    </li>
                    <li className="li-summary">
                        <DoDisturbIcon color="primary" />
                        <strong>{t('cancelation')} :</strong>&nbsp;{t('free')}
                    </li>
                    <li className="li-summary">
                        <FlightTakeoffIcon color="primary" />
                        <strong>{t('starting_location')} :</strong>&nbsp;{excursion?.departureCity}
                    </li>
                    <li className="li-summary">
                        <FlightLandIcon color="primary" />
                        <strong>{t('ending_location')} :</strong>&nbsp;{excursion?.destinationCity}
                    </li>
                </ul>
            </CardContent>
            <CardActions disableSpacing>
                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton> */}

                <ShareButton
                    shareData={{
                        title: `${excursion.title}`,
                        text: 'Check out this link!',
                        url: `${window.location.href}/${excursion.id}`,
                    }}
                />
            </CardActions>
        </Card>
    );
}
