import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PanedSection from "../../common/components/panes/SectionedPanes";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';
import { Step } from "../../common/types/tour";

interface TourStepsProps {
    steps: Step[]
}

export const TourSteps = ({ steps = [] }: TourStepsProps) => {

    const { t } = useTranslation();

    return (
        <PanedSection
            title={
                <Typography variant="h5" className="setcion-title left-title">
                    {t('full_detailed_itinerary')}
                </Typography>
            }
            leftPane={{
                element: (
                    <ul className="no-bullets">
                        {
                            steps.map((step, index) => (
                                <li key={step.title}>
                                    <Accordion key={step.title}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                                            <strong>{t('day')} {index + 1} :</strong>&nbsp;{step.title}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {parse(step.description)}
                                        </AccordionDetails>
                                    </Accordion>
                                </li>
                            ))
                        }
                    </ul>
                ),
                className: 'content-pane',
            }}
        />
    )
}