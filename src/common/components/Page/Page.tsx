import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PropsWithChildren, ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { app } from '../../constants/appConstants';
import { LayoutContainerProps } from '../LayoutContainer/LayoutContainer';
import { defaultImage } from '../../utils/imageUtils';

import './Page.scss';

interface PageProps extends LayoutContainerProps {
    description?: string;
    elements?: ReactNode;
    keywords?: string;
    title: string;
    imgSrc?: string;
    displayTitle?: boolean;
}

export const Page = ({
    children,
    description,
    elements,
    keywords,
    title,
    imgSrc = '/img/not-found-small.png',
    className = '',
    displayTitle = true,
    style,
}: PropsWithChildren<PageProps>): JSX.Element => {
    const isXs = useMediaQuery('(max-width:600px)');

    return (
        <HelmetProvider>
            <Helmet defaultTitle={app.name} titleTemplate={`${app.name} | %s`}>
                {description && <meta name="description" content={description} />}
                {keywords && <meta name="keywords" content={keywords} />}
                <title>{title}</title>
                {elements}
            </Helmet>
            <main className="page">
                {displayTitle && (
                    <div className="title">
                        <img
                            src={imgSrc}
                            alt={`title-${title}`}
                            // loading='lazy'
                            className='title-img'
                            onError={defaultImage.large.errorHandler}
                        />
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
