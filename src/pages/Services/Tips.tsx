import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import TitleWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
import { getTips } from '../../common/services/tipService';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';


import './Tips.scss';

const TipsText = 'Tips & Advice';

export const Tips = (): JSX.Element => {
    const { data: tips, isLoading, isError } = useQuery(['tips'], () => getTips());

    const { t } = useTranslation()

    return (
        <Page description={TipsText} keywords={TipsText} title={t('tips_description')} imgSrc="/img/carousel/2.jpeg">
            <Container className="tips-container">
                <TitleWithLines text={t("essential_tips_and_advice_for_traveling_to_morocco")} />
                <Typography sx={{ marginBottom: 5 }}>
                    {parse(t('tips_description'))}
                </Typography>
                {(tips ?? []).map(tipCategory => (
                    <React.Fragment key={tipCategory.category}>
                        <Accordion key={tipCategory.category} className="tip-accordion">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography color="primary" variant="h5">
                                    <strong>{tipCategory.category}</strong>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    {tipCategory.tips.map((tip) => (
                                        <div className="tip-ul" key={tip.title}>
                                            <div className="tip-title">
                                                <Typography className="title" variant="h6">
                                                    {tip.title}:
                                                </Typography>
                                                <Typography className="description">
                                                    {tip.content.description}
                                                </Typography>
                                            </div>
                                            <ul>
                                                {tip.content.highlights.map((tipHighlight) => (
                                                    <li key={tipHighlight}>
                                                        <Typography className="title">{tipHighlight}</Typography>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </React.Fragment>
                ))}
            </Container>
        </Page>
    );
};
