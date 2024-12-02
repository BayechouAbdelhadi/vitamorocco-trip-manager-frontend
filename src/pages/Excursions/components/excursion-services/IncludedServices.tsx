import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { INCLUDED_SERVICES } from '../../constant';
import './ExcursionService.scss';

interface IncludedServicesProps {
    services: string[];
}

export const IncludedServiceList = ({ services }: IncludedServicesProps) => {
    const { t } = useTranslation();
    return (
        <ul>
            {INCLUDED_SERVICES.filter((s) => services.includes(s.name)).map((service) => (
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

export const IncludedServiceCard = ({ services }: IncludedServicesProps) => {
    const { t } = useTranslation(); // Initialize the translation hook

    return (
        <div className="included-services-card">
            <Grid container spacing={2} justifyContent="center" className="included-services-container">
                {INCLUDED_SERVICES.filter((s) => services.includes(s.name)).map((service) => (
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
