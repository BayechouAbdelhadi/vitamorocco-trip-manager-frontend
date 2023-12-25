import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useTranslation } from 'react-i18next';
import { Excursion } from '../../../common/types/excursion';

interface ExcursionPricingInterface {
    excursion: Excursion;
}
export const ExcursionPricing = ({ excursion }: ExcursionPricingInterface): JSX.Element => {
    const { t } = useTranslation();

    return (
        <div className="pricing-container">
            {t('pricing_message')}
            <ul className="no-bullets">
                {excursion?.pricing.map((priceGroup) => (
                    <li key={priceGroup} className="excursion-detail-item">
                        <ArrowRightIcon color="primary" />
                        {priceGroup}
                    </li>
                ))}
            </ul>
            {t('pricing_warning')}
        </div>
    );
};
