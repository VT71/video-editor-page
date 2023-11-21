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
                paddingBottom: '2rem',
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
                                '@media (max-width: 600px)': {
                                    width: '20px',
                                    height: '20px',
                                },
                            }}
                        ></Box>
                        <Typography
                            sx={{
                                fontFamily: 'Cinzel',
                                color: '#E0C8E8',
                                fontSize: '1.25rem',
                                '@media (max-width: 600px)': {
                                    fontSize: '1rem',
                                },
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
                                '@media (max-width: 600px)': {
                                    width: '20px',
                                    height: '20px',
                                },
                            }}
                        ></Box>
                        <Typography
                            sx={{
                                fontFamily: 'Cinzel',
                                color: '#E0C8E8',
                                fontSize: '1.25rem',
                                '@media (max-width: 600px)': {
                                    fontSize: '1rem',
                                },
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
                        <EmailIcon
                            sx={{
                                fontSize: '28px',
                                color: '#fff',
                                '@media (max-width: 600px)': {
                                    fontSize: '24px',
                                },
                            }}
                        />
                        <Typography
                            sx={{
                                fontFamily: 'Cinzel',
                                color: '#E0C8E8',
                                fontSize: '1.25rem',
                                '@media (max-width: 600px)': {
                                    fontSize: '1rem',
                                },
                            }}
                        >{`krisesfd11@gmail.com`}</Typography>
                    </Box>
                </Box>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontFamily: 'Goldman-Regular',
                        color: '#E0C8E8',
                        marginTop: '1.2rem',
                        marginBottom: '1rem',
                        fontSize: '0.8rem',
                    }}
                >{`© Victor Toma. All Rights Reserved.`}</Typography>
            </Box>
        </Box>
    );
}

export default ContactSection;
