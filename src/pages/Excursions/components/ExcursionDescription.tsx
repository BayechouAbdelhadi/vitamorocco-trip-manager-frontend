import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PanedSection from '../../../common/components/panes/SectionedPanes';
import { Excursion } from '../../../common/types/excursion';

const ExcursionText = 'Excursion';
interface ExcursionDescriptionInterface {
    excursion: Excursion;
}
export const ExcursionDescription = ({ excursion }: ExcursionDescriptionInterface): JSX.Element => {
    const { t } = useTranslation();
    return (
        <PanedSection
            title={
                <Typography variant="h5" className="setcion-title left-title">
                    {t('description')}
                </Typography>
            }
            leftPane={{
                element: (
                    <Typography variant="body1" className="description-text">
                        {excursion?.description}
                    </Typography>
                ),
                className: 'content-pane',
            }}
            rightPane={{
                element: <img src="https://mui.com/static/images/cards/paella.jpg" alt="description" />,
                className: 'visual-pane',
            }}
        />
    );
};
