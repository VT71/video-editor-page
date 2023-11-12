import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';

// icons
import EmailIcon from '@mui/icons-material/Email';

function ContactSection() {
    return (
        <Box
            id='contact-section'
            sx={{
                width: '100%',
                backgroundColor: '#0F0F0F',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'boder-box',
                rowGap: '3.5rem',
                paddingTop: '2rem',
                paddingBottom: '4rem',
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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    rowGap: '1.8rem',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'cenet',
                        columnGap: '3rem',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '0.5rem',
                        }}
                    >
                        <Box
                            sx={{
                                width: '24px',
                                height: '24px',
                                backgroundImage: `url("${require('./assets/images/instagramLogo.png')}")`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                transition: 'scale 0.5s ease',
                                cursor: 'pointer',
                                ':hover': {
                                    scale: '1.08',
                                },
                            }}
                        ></Box>
                        <Typography
                            sx={{
                                fontFamily: 'Cinzel',
                                color: '#E0C8E8',
                                fontSize: '1.25rem',
                            }}
                        >{`KRIS_EFD`}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '0.5rem',
                        }}
                    >
                        <Box
                            sx={{
                                width: '24px',
                                height: '24px',
                                backgroundImage: `url("${require('./assets/images/pinterestLogo.png')}")`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                transition: 'scale 0.5s ease',
                                cursor: 'pointer',
                                ':hover': {
                                    scale: '1.08',
                                },
                            }}
                        ></Box>
                        <Typography
                            sx={{
                                fontFamily: 'Cinzel',
                                color: '#E0C8E8',
                                fontSize: '1.25rem',
                            }}
                        >{`KRIS_EFD`}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '0.5rem',
                        }}
                    >
                        <EmailIcon sx={{ fontSize: '28px', color: '#fff' }} />
                        <Typography
                            sx={{
                                fontFamily: 'Cinzel',
                                color: '#E0C8E8',
                                fontSize: '1.25rem',
                            }}
                        >{`krisesfd11@gmail.com`}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ContactSection;
