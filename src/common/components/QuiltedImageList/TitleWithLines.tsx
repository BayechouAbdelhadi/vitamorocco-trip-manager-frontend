import { Box, Divider, Typography, useMediaQuery } from '@mui/material';

interface TextWithLinesProps {
    text: string;
}
function TextWithLines({ text }: TextWithLinesProps) {
    const isXs = useMediaQuery('(max-width:600px)');
    return (
        <Box sx={{
            width: { xs: '100%', md: '80%' },
            margin: '3rem auto'
        }}
        >
            <Divider sx={{ borderBottomWidth: '45px' }}>
                <Typography variant={isXs ? 'h4' : 'h3'} style={{
                    "fontWeight": '600',
                    "fontSize": "clamp(1.3rem, 2.3vw, 2rem)",
                    "position": "relative"
                }}>
                    {text}
                </Typography>
            </Divider>
        </Box>
    );
}

export default TextWithLines;
