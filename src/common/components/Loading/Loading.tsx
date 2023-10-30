import { CircularProgress } from '@mui/material';
import "./Loading.scss"
export const Loading = (): JSX.Element => (
    <div className="loading">
        <CircularProgress />
    </div>
);
