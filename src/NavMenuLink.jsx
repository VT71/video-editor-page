import React from 'react';

// stylesheet
import './index.css';

// @mui
import { Box, Typography, Link } from '@mui/material';

function NavMenuLink({ text, to }) {
    if (text) {
        return (
            <Box>
                <Link
                    href={to}
                    underline='none'
                    sx={{
                        transition: 'all 0.2s ease-in-out',
                        color: '#E0C8E8',
                        ':hover': { color: 'white' },
                    }}
                >
                    <Typography
                        sx={{
                            transition: 'all 0.2s ease-in-out',
                            fontFamily: 'Goldman-Regular',
                            ':active': { scale: '0.9' },
                        }}
                    >
                        {text}
                    </Typography>
                </Link>
            </Box>
        );
    } else {
        return null;
    }
}

export default NavMenuLink;
