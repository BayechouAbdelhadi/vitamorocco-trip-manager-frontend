import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import { getTips } from '../../common/services/tipService';
import './Tips.scss';
export const Tips = (): JSX.Element => {
    const TipsText = 'Tips';
    const { data: tips, isLoading, isError } = useQuery(['tips'], () => getTips());

    return (
        <Page description={TipsText} keywords={TipsText} title={TipsText} imgSrc="/img/carousel/2.jpeg">
            <Container className="tips-container">
                {(tips ?? []).map((tipCategory, index) => (
                    <React.Fragment key={tipCategory.category}>
                        <Accordion key={tipCategory.category} className="tip-accordion">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <b>
                                    <Typography color="primary" variant="h5">
                                        {tipCategory.category}
                                    </Typography>
                                </b>
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
