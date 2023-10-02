import { ErrorOutline as ErrorOutlineIcon } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Page } from '../../common/components/Page/Page';

export const PageNotFound = (): JSX.Element => {
    const pageNotFoundText = '404 - Page Not Found';

    return (
        <Page description={pageNotFoundText} keywords={pageNotFoundText} title={pageNotFoundText}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="80vh"
                textAlign="center"
            >
                <ErrorOutlineIcon sx={{ fontSize: 100, color: 'red' }} />
                <Typography variant="h4" gutterBottom>
                    Oops! Page not found
                </Typography>
                <Typography variant="body1">
                    The page you are looking for might have been removed or does not exist.
                </Typography>
                <Box mt={2}>
                    <Button variant="contained" color="primary" component={Link} to="/">
                        Go to Home
                    </Button>
                </Box>
            </Box>
        </Page>
    );
};
