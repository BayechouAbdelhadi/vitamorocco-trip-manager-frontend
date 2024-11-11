import { useQuery } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import { getExcursions } from '../../common/services/excursionService';
import ExcursionSummary from './components/ExcursionSummary';
import { CircularProgress } from '@mui/material';
import TitleWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

import './Excursions.scss';

const ExcursionsText = 'Excursions & Day Trips';

export const Excursions = (): JSX.Element => {
    const { data: excursions, isLoading } = useQuery('excursions', getExcursions);

    const { t } = useTranslation();

    return (
        <Page
            description={t('excursions_description')}
            keywords={ExcursionsText}
            title={t('excursions_and_day_trips')}
            imgSrc='img/excursions/excursions_title.webp'
            className='excursions-page-container'
        >
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <TitleWithLines text={t('our_excursions_selection')} />
                    {parse(t('excursions_description'))}
                    <a className="email-link" href="mailto:contact@vitamorocco.com">contact@vitamorocco.com</a>
                    <h3>{t('discover_the_essence_of_morocco_with_us')}</h3>
                    <div className="excursions-container">
                        {excursions?.map((excursion) => (
                            <ExcursionSummary key={excursion.id} excursion={excursion} />
                        ))}
                    </div>
                </>
            )}
        </Page>
    );
};