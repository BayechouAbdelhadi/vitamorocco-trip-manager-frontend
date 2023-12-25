import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PanedSection from '../../../common/components/panes/SectionedPanes';
import { Excursion } from '../../../common/types/excursion';

interface ExcursionHighlightsInterface {
    excursion: Excursion;
}
export const ExcursionHighlights = ({ excursion }: ExcursionHighlightsInterface): JSX.Element => {
    const { t } = useTranslation();
    return (
        <PanedSection
            title={
                <Typography variant="h5" className="setcion-title left-title">
                    {t('highlights')}
                </Typography>
            }
            leftPane={{
                element: <img src="https://mui.com/static/images/cards/paella.jpg" alt="highlights" />,
                className: 'visual-pane',
            }}
            rightPane={{
                element: (
                    <ul className="no-bullets">
                        {excursion?.highlights.map((heighlight) => (
                            <li key={heighlight} className="excursion-detail-item">
                                <ArrowRightIcon color="primary" />
                                {heighlight}
                            </li>
                        ))}
                    </ul>
                ),
                className: 'content-pane',
            }}
        />
    );
};
