import VisibilityIcon from '@mui/icons-material/Visibility';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import ShareButton from '../../../common/components/Buttons/ShareButton/ShareButton';
import { Excursion } from '../../../common/types/excursion';
import { defaultImage } from '../../../common/utils/imageUtils';
import { scrollToTop } from '../../../common/utils';
interface ExcursionSummaryProps {
    readonly excursion: Excursion;
    type?: string
}

export default function ExcursionSummary({ excursion, type = 'excursions' }: ExcursionSummaryProps): JSX.Element {
    const navigate = useNavigate();
    const goToExcursion = () => {
        navigate(`./${excursion.id}`, { relative: 'path' });
        scrollToTop()
    };

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
                loading='lazy'
                image={`/img/${type}/${excursion.id}/${excursion.summaryImg}`}
                alt={`excursion ${excursion.title}`}
                onError={defaultImage.small.errorHandler}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" className="excursion-summary">
                    {excursion.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/*
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                */}
                {/* <ShareButton
                    shareData={{
                        title: `excursion ${excursion.title}`,
                        text: 'Check out this link!',
                        url: `${window.location.href}/${excursion.id}`,
                    }}
                /> */}
            </CardActions>
        </Card>
    );
}
