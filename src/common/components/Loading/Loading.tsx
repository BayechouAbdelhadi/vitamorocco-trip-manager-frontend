import CircularProgress from '@mui/material/CircularProgress';
import "./Loading.scss"

export const Loading = (): JSX.Element => (
    <div className="loading">
        <CircularProgress />
    </div>
);
