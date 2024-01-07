import { Divider } from '@mui/material';

interface TextWithLinesProps {
    text: string;
}
function TextWithLines({ text }: TextWithLinesProps) {
    return (
        <div style={{ width: '100%', margin: '20px 0' }}>
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
        </div>
    );
}

export default TextWithLines;
