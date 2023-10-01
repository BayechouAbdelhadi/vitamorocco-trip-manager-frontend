import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import theme from '../../../assets/theme';
import { store } from '../../../store';
import { MainLayout } from '../MainLayout/MainLayout';
import { Routes } from '../Routes/Routes';

export const App = (): JSX.Element => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <MainLayout>
                    <Routes />
                </MainLayout>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);
