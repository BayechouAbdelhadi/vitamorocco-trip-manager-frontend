import { enableAllPlugins } from 'immer';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/index.scss';
import { App } from './common/components/App/App';
import { ErrorBoundary } from './common/components/ErrorBoundary/ErrorBoundary';
import './config/i18n';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

enableAllPlugins();

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </StrictMode>
);

// If you want your app to work offline and load faster, you can change unregister() to register()
// below. Note this comes with some pitfalls. Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
