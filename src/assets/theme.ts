import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff385c', // Warm primary color (similar to Airbnb's red)
        },
        secondary: {
            main: '#6c757d', // Cool secondary color (gray)
        },
        background: {
            default: '#f7f7f7', // Light background color (off-white)
        },
        error: {
            main: '#ff5733', // Red for errors
        },
        success: {
            main: '#3cbc8d', // Green for success
        },
        info: {
            main: '#4da1ff', // Blue for information
        },
        warning: {
            main: '#ffc107', // Yellow for warnings
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        // You can define typography options here
    },
    // Add more theme options as needed
});

export default theme;
