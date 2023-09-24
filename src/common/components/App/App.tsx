import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../store';
import { Layout } from '../Layout/Layout';
import { Routes } from '../Routes/Routes';

export const App = (): JSX.Element => (
    <Provider store={store}>
        <CssBaseline />
        <BrowserRouter>
            <Layout>
                <Routes />
            </Layout>
        </BrowserRouter>
    </Provider>
);
