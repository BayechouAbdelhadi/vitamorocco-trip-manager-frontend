import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import theme from '../../../assets/theme';
import { store } from '../../../store';
import { MainLayout } from '../MainLayout';
import { Routes } from '../Routes/Routes';
const queryClient = new QueryClient();

export const App = (): JSX.Element => (
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <MainLayout>
                        <Routes />
                    </MainLayout>
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    </Provider>
);
