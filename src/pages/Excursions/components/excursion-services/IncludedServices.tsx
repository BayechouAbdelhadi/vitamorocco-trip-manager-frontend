import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { INCLUDED_SERVICES } from '../../constant';
import './ExcursionService.scss';

export const IncludedServiceList = () => {
    const { t } = useTranslation();
    return (
        <ul>
            {INCLUDED_SERVICES.map((service) => (
                <li key={service.name}>
                    <div>
                        {t(`included_services.${service.name}.name`)} ,{' '}
                        {t(`included_services.${service.name}.description`)}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export const IncludedServiceCard = () => {
    const { t } = useTranslation(); // Initialize the translation hook

    return (
        <div className="included-services-card">
            <h3 className="included-services-title">What is included</h3>
            <Grid container spacing={2} justifyContent="center" className="included-services-container">
                {INCLUDED_SERVICES.map((service) => (
                    <Grid
                        item
                        key={service.name}
                        xs={12}
                        sm={6}
                        md={1}
                        className="included-item"
                        component={Paper}
                        elevation={3}
                    >
                        {service.icon}
                        <Typography variant="h6">{t(`included_services.${service.name}.name`)}</Typography>
                        <Typography style={{ textAlign: 'center', wordWrap: 'break-word' }} variant="body2">
                            {t(`included_services.${service.name}.description`)}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
