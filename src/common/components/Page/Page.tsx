import { PropsWithChildren, ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { app } from '../../constants';
import { LayoutContainerProps } from '../LayoutContainer/LayoutContainer';
import './Page.scss';

interface PageProps extends LayoutContainerProps {
    description: string;
    elements?: ReactNode;
    keywords?: string;
    title: string;
}

export const Page = ({
    children,
    description,
    elements,
    keywords,
    title,
    className = '',
}: PropsWithChildren<PageProps>): JSX.Element => (
    <HelmetProvider>
        <Helmet defaultTitle={app.name} titleTemplate={`${app.name} | %s`}>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <title>{title}</title>
            {elements}
        </Helmet>
        <main className="page">
            <h1 className="title">{title}</h1>
            <div className={`content ${className}`}>{children}</div>
        </main>
    </HelmetProvider>
);
