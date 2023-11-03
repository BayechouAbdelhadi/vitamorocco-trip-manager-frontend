import { styled } from '@mui/system';

const TextContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    minWidth: 400,
});

const Line = styled('div')({
    flex: 1,
    height: '1px',
    backgroundColor: '#E5CF0A',
    margin: '0',
});

const Text = styled('p')(({ theme }) => ({
    flex: 1,
    textAlign: 'center',
    fontSize: '16px',
    color: theme.palette.primary.main,
}));
interface TextWithLinesProps {
    text: string;
}
function TextWithLines({ text }: TextWithLinesProps) {
    return (
        <TextContainer>
            <Line />
            <Text color="primary"> {text}</Text>
            <Line />
        </TextContainer>
    );
}

export default TextWithLines;
