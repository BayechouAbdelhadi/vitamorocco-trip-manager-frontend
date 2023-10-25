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
    displayTitle?: boolean;
}

export const Page = ({
    children,
    description,
    elements,
    keywords,
    title,
    className = '',
    displayTitle = true,
    style,
}: PropsWithChildren<PageProps>): JSX.Element => (
    <HelmetProvider>
        <Helmet defaultTitle={app.name} titleTemplate={`${app.name} | %s`}>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <title>{title}</title>
            {elements}
        </Helmet>
        <main className="page">
            {displayTitle && <h1 className="title">{title}</h1>}
            <div className={`content ${className}`} style={style}>
                {children}
            </div>
        </main>
    </HelmetProvider>
);
