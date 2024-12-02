import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import parse from 'html-react-parser';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import TitleWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
import { getTips } from '../../common/services/tipService';
import { currentLanguage } from '../../common/utils';

import './Tips.scss';

const TipsText = 'Tips & Advice';

export const Tips = (): JSX.Element => {
    const { data: tips } = useQuery(['tips'], () => getTips());

    const { t } = useTranslation();
    return (
        <Page
            description={t('tips_description')}
            keywords={TipsText}
            elements={
                <>
                    <link rel="canonical" href={window.location.href} />
                    <link rel="preload" as="image" href="/img/carousel/2.webp" type="image/webp" />
                </>
            }
            title={t('tips')}
            imgSrc="/img/carousel/2.webp"
        >
            <Container className="tips-container">
                <TitleWithLines text={t('essential_tips_and_advice_for_traveling_to_morocco')} />
                <Typography sx={{ marginBottom: 5 }}>{parse(t('tips_description'))}</Typography>
                {(tips ?? []).map((tipCategory) => (
                    <React.Fragment key={tipCategory.category[currentLanguage]}>
                        <Accordion key={tipCategory.category[currentLanguage]} className="tip-accordion">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography color="primary" variant="h5">
                                    <strong>{tipCategory.category[currentLanguage]}</strong>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    {tipCategory.tips.map((tip) => (
                                        <div className="tip-ul" key={tip.title[currentLanguage]}>
                                            <div className="tip-title">
                                                <Typography className="title" variant="h6">
                                                    {tip.title[currentLanguage]}:
                                                </Typography>
                                                <Typography className="description">
                                                    {tip.content.description[currentLanguage]}
                                                </Typography>
                                            </div>
                                            <ul>
                                                {tip.content.highlights.map((tipHighlight) => (
                                                    <li key={tipHighlight[currentLanguage]}>
                                                        <Typography className="title">
                                                            {tipHighlight[currentLanguage]}
                                                        </Typography>
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
