import { Box, Divider } from '@mui/material';

interface TextWithLinesProps {
    text: string;
}
function TextWithLines({ text }: TextWithLinesProps) {
    return (
        <Box sx={{
            width: { xs: '100%', md: '80%' },
            margin: '3rem auto'
        }}
        >
            <Divider sx={{ borderBottomWidth: '45px' }}>
                <h3 style={{
                    "fontFamily": 'Playfair Display',
                    "fontWeight": '600',
                    "fontSize": "clamp(1.3rem, 2.3vw, 2rem)",
                    "position": "relative"
                }}>
                    {text}
                </h3>
            </Divider>
        </Box>
    );
}

export default TextWithLines;
