import { CircularProgress, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';
import TextWithLines from '../../common/components/TitleBarImageList/TitleWithLines';
import { getExcursion } from '../../common/services/excursionService';
import './Excursion.scss';
import { ExcludedServiceList } from './components/excursion-services/ExcludedServices';
import { IncludedServiceCard } from './components/excursion-services/IncludedServices';

const ExcursionText = 'Excursion';

export const Excursion = (): JSX.Element => {
    const { excursionId } = useParams();
    const { t, i18n } = useTranslation();

    console.log(i18n.language);

    const {
        data: excursion,
        isLoading,
        isError,
    } = useQuery(`excursion-${excursionId}`, () => getExcursion(excursionId as string), {
        enabled: Boolean(excursionId), // Only enable the query when excursionId is defined
    });

    const excursionTitle = excursion?.title ?? ExcursionText;
    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <Page
            description={excursionTitle}
            keywords={excursionTitle}
            title="Destination details"
            style={{ padding: '5px 10px' }}
            className="excursion-detail"
        >
            <div className="title">
                <TextWithLines text="Destination" />
                <Typography variant="h4">{excursionTitle}</Typography>
            </div>
            <div className="excursion-description">
                <div className="description-text-container">
                    <Typography variant="h5" className="setcion-title">
                        Description
                    </Typography>
                    <Typography variant="body1" className="description-text">
                        {excursion?.description}
                    </Typography>
                </div>
                <div className="description-img-container">
                    <img src="https://mui.com/static/images/cards/paella.jpg" alt="description-image" />
                </div>
            </div>
            <Typography variant="h5" className="setcion-title highlights-title">
                Highlights
            </Typography>
            <div className="excursion-highlights">
                <div className="highlights-img-container">
                    <img src="https://mui.com/static/images/cards/paella.jpg" alt="highlights-image" />
                </div>
                <div className="highlights-text-container">
                    <ul>
                        {excursion?.highlights.map((heighlight) => (
                            <li key={heighlight}>{heighlight}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <IncludedServiceCard services={excursion?.includedServices || []} />
            <ExcludedServiceList />
        </Page>
    );
};
