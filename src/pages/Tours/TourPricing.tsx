import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import PanedSection from '../../common/components/panes/SectionedPanes';
import parse from 'html-react-parser';

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
                    {parse(t('pricing_tour_description'))}
                </div>,
                className: 'content-pane',
            }}
        />
    );
};
