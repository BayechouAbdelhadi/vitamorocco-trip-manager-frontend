import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useTranslation } from 'react-i18next';
import PanedSection from '../../../common/components/panes/SectionedPanes';

interface ExcursionPricingInterface {
    pricing: string[]
}
export const Pricing = ({ pricing }: ExcursionPricingInterface): JSX.Element => {
    const { t } = useTranslation();

    return (
        <PanedSection
            title={
                <h5 className="setcion-title left-title">
                    {t('pricing')}
                </h5>
            }
            leftPane={{
                element: (
                    <div className="pricing-container">
                        {t('pricing_message')}
                        <ul className="no-bullets">
                            {pricing?.map((priceGroup) => (
                                <li key={priceGroup} className="excursion-detail-item">
                                    <ArrowRightIcon color="primary" />
                                    {priceGroup}
                                </li>
                            ))}
                        </ul>
                        {t('pricing_warning')}
                    </div>
                ),
                className: 'content-pane',
            }}
        />
    );
};
