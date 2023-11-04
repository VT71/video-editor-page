import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';

function IntroSection() {
    return (
        <Box
            sx={{
                height: '100vh',
                maxHeight: '750px',
                backgroundImage: 'url("./images/temp1.jpg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Box></Box>
            <Box></Box>
        </Box>
    );
}

export default IntroSection;
