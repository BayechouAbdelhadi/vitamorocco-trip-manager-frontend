import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Excursion } from '../../../common/types/excursion';

interface ExcursionPricingInterface {
    excursion: Excursion;
}
export const ExcursionPricing = ({ excursion }: ExcursionPricingInterface): JSX.Element => {
    return (
        <div className="pricing-container">
            The price of the excursion depends on the number of travellers. Below we indicate the prices according to
            travellers, as well as the services they include. Make up your mind and contact us.
            <ul className="no-bullets">
                {excursion?.pricing.map((priceGroup) => (
                    <li key={priceGroup} className="excursion-detail-item">
                        <ArrowRightIcon color="primary" />
                        {priceGroup}
                    </li>
                ))}
            </ul>
            Prices valid for any time of the year, except Christmas and Easter (check prices and availability).
        </div>
    );
};
