import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { PropsWithChildren, ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { app } from '../../constants/appConstants';
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
}: PropsWithChildren<PageProps>): JSX.Element => {
    const isXs = useMediaQuery('(max-width:600px)');
    return (
        <HelmetProvider>
            <Helmet defaultTitle={app.name} titleTemplate={`${app.name} | %s`}>
                <meta name="description" content={description} />
                {keywords && <meta name="keywords" content={keywords} />}
                <title>{title}</title>
                {elements}
            </Helmet>
            <main className="page">
                {displayTitle && (
                    <div className="title">
                        <Typography variant={isXs ? 'h4' : 'h3'} className="title-text">
                            {title}
                        </Typography>
                    </div>
                )}
                <div className={`content ${className}`} style={style}>
                    {children}
                </div>
            </main>
        </HelmetProvider>
    );
};
