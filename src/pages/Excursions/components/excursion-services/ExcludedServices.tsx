import { useTranslation } from 'react-i18next';
import { EXCLUDED_SERVICES } from '../../constant';
import { Typography } from '@mui/material';
import PanedSection from '../../../../common/components/panes/SectionedPanes';

export const ExcludedServiceList = () => {
    const { t } = useTranslation();

    return (
        <PanedSection
            title={
                <Typography variant="h5" className="setcion-title left-title">
                    {t('whats_not_included')}
                </Typography>
            }
            leftPane={{
                element: <div className="excluded-services-list">
                    <ul>
                        {EXCLUDED_SERVICES.map((service) => (
                            <li key={service}>
                                <div>{t(`excluded_services.${service}`)}</div>
                            </li>
                        ))}
                    </ul>
                </div>,
                className: 'content-pane',
            }}
        />
    );
};
