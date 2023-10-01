import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../store';
import { MainLayout } from '../MainLayout/MainLayout';
import { Routes } from '../Routes/Routes';

export const App = (): JSX.Element => (
    <Provider store={store}>
        {/* Normalize the display (CSS) in browsers */}
        <CssBaseline />
        <BrowserRouter>
            <MainLayout>
                <Routes />
            </MainLayout>
        </BrowserRouter>
    </Provider>
);
