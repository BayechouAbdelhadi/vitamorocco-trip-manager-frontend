import { useTranslation } from 'react-i18next';
import { EXCLUDED_SERVICES } from '../../constant';

export const ExcludedServiceList = () => {
    const { t } = useTranslation();

    return (
        <div className="excluded-services-list">
            <ul>
                {EXCLUDED_SERVICES.map((service) => (
                    <li key={service}>
                        <div>{t(`excluded_services.${service}`)}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
