import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';

function ContactSection() {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#15001B',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'boder-box',
                rowGap: '3.5rem',
                paddingY: '4rem',
            }}
        >
            <Box>
                <Typography
                    sx={{
                        color: '#E0C8E8',
                        fontSize: '3.6rem',
                        textShadow: '0px 11px 5px #5E001E',
                        fontFamily: 'Bangers',
                    }}
                >{`Get In Touch`}</Typography>
            </Box>
        </Box>
    );
}

export default ContactSection;
