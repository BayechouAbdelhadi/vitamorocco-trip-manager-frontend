import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import PanedSection from '../../common/components/panes/SectionedPanes';

export const TourPricing = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <PanedSection
            title={
                <Typography variant="h5" className="setcion-title left-title">
                    {t('pricing')}
                </Typography>
            }
            leftPane={{
                element: <div className="pricing-container">
                    <p>Consult us according to season and number of travellers.</p>
                    <p>
                        The Tour can be adapted to your interests, also modifying the departure and arrival
                        points, don&apos;t miss it !
                    </p>
                </div>,
                className: 'content-pane',
            }}
        />
    );
};
