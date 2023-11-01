import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Excursion } from '../../../common/types/excursion';
import { truncateText } from '../../../common/utils';
interface ExcursionSummaryProps {
    excursion: Excursion;
}

export default function ExcursionSummary({ excursion }: ExcursionSummaryProps) {
    const navigate = useNavigate();
    const goToExcursion = () => {
        navigate(`./${excursion.id}`, { relative: 'path' });
    };

    const truncatedDescription = truncateText(excursion.description, 24);

    return (
        <Card sx={{ maxWidth: 345 }} onClick={goToExcursion}>
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
                image="https://mui.com/static/images/cards/paella.jpg"
                alt={`excursion ${excursion.title}`}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {truncatedDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
