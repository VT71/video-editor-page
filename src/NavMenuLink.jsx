import React from 'react';

// stylesheet
import './index.css';

// @mui
import { Box, Typography, Link } from '@mui/material';

function NavMenuLink({ text, to, version }) {
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
                    onClick={() => {
                        if (version === 'mobile') {
                            document.getElementById(
                                'mobileMenuWrapper'
                            ).style.transform = 'translateY(-100%)';
                        }
                    }}
                >
                    <Typography
                        sx={{
                            transition: 'all 0.2s ease-in-out',
                            fontFamily: 'Goldman-Regular',
                            ...(version === 'mobile' && { fontSize: '2rem' }),
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
