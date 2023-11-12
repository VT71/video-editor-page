import React, { useEffect, useState } from 'react';
import './index.css'

// components
import NavMenu from './NavMenu';

// @mui
import { Box, IconButton, Typography, Button, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

// icons
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import CloseIcon from '@mui/icons-material/Close';

function IntroSection() {
    const mobileScreen = useMediaQuery('(max-width: 600px)');
    const screenLessThan550 = useMediaQuery('(max-width: 550px)');

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                maxHeight: '1000px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#0F0F0F',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 'fit-content',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '0',
                        zIndex: '2',
                        backgroundColor: 'rgba(32, 7, 37, 0.5)',
                    }}
                >
                    {mobileScreen && (
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'end',
                                boxSizing: 'border-box',
                                padding: '0.5rem 0.5rem',
                            }}
                        >
                            <IconButton
                                onClick={() => {
                                    document.getElementById(
                                        'mobileMenuWrapper'
                                    ).style.transform = 'translateY(100%)';
                                }}
                                sx={{
                                    zIndex: '2',
                                    color: '#E0C8E8',
                                    ':hover': { color: 'white' },
                                    ':active': {
                                        scale: '0.95',
                                        color: 'white',
                                    },
                                }}
                            >
                                <MenuIcon
                                    sx={{
                                        fontSize: '3rem',
                                    }}
                                />
                            </IconButton>
                        </Box>
                    )}
                    {!mobileScreen && (
                        <Box
                            sx={{
                                boxSizing: 'border-box',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'end',
                                alignItems: 'center',
                                padding: '1.2rem 1.5rem',
                            }}
                        >
                            <NavMenu />
                        </Box>
                    )}
                    {mobileScreen && (
                        <Box
                            id={'mobileMenuWrapper'}
                            sx={{
                                boxSizing: 'border-box',
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#0F0F0F',
                                position: 'absolute',
                                top: '-100vh',
                                zIndex: '2',
                                transition: 'all 0.5s ease',
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'end',
                                    boxSizing: 'border-box',
                                    padding: '0.5rem 0.5rem',
                                }}
                            >
                                <IconButton
                                    onClick={() => {
                                        document.getElementById(
                                            'mobileMenuWrapper'
                                        ).style.transform = 'translateY(-100%)';
                                    }}
                                    sx={{
                                        zIndex: '2',
                                        color: '#E0C8E8',
                                        ':hover': { color: 'white' },
                                        ':active': {
                                            scale: '0.95',
                                            color: 'white',
                                        },
                                    }}
                                >
                                    <CloseIcon
                                        sx={{
                                            fontSize: '3rem',
                                        }}
                                    />
                                </IconButton>
                            </Box>

                            <NavMenu version={'mobile'} />
                        </Box>
                    )}

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'start',
                            marginBottom: '1.5rem',
                            rowGap: '2rem',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                ...(mobileScreen && {
                                    rowGap: '0.5rem',
                                }),
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'KaushanScript-Regular',
                                        color: '#E0C8E8',
                                        fontSize: '3.6rem',
                                        textShadow: '0px 2px 10px #5E001E',
                                        ...(mobileScreen && {
                                            fontSize: '2.8rem',
                                        }),
                                    }}
                                >{`KRIS_ESFD`}</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    columnGap: '1.7rem',
                                }}
                            >
                                <Link
                                    href={
                                        'https://instagram.com/kris.esfd?igshid=NzZlODBkYWE4Ng=='
                                    }
                                    target='_blank'
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
                                            ':active': {
                                                scale: '0.95',
                                            },
                                        }}
                                    ></Box>
                                </Link>
                                <Link
                                    href={'https://pin.it/54H5UAw'}
                                    target='_blank'
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
                                            ':active': {
                                                scale: '0.95',
                                            },
                                        }}
                                    ></Box>
                                </Link>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'start',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Goldman-Regular',
                                    color: '#E0C8E8',
                                    fontSize: '1.5rem',
                                }}
                            >{`my work`}</Typography>
                            <IconButton
                                sx={{
                                    padding: '0',
                                    ':hover': { color: 'white' },
                                }}
                                href={'./#art-section'}
                            >
                                <ArrowBackIosNewRoundedIcon
                                    sx={{
                                        color: '#E0C8E8',
                                        fontSize: '3rem',
                                        rotate: '-90deg',
                                        ':hover': { color: 'white' },
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                <video
                    id={'introVideo'}
                    autoPlay
                    muted
                    style={{
                        // position: 'absolute',
                        // left: '50%',
                        // top: '50%',
                        // transform: 'translateX(-50%) translateY(-50%)',
                        width: 'auto',
                        height: 'auto',
                        maxHeight: '100%',
                    }}
                >
                    {!screenLessThan550 ? (
                        <source
                            src={`${require('./assets/videos/introVideo.mp4')}`}
                            type='video/mp4'
                        />
                    ) : (
                        <source
                            src={`${require('./assets/videos/introVideo2.mp4')}`}
                            type='video/mp4'
                        />
                    )}
                </video>
            </Box>

            {/* <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    columnGap: '0.5rem',
                    marginLeft: '1rem',
                }}
            >
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: '#E0C8E8',
                        color: '#200726',
                        fontWeight: 'bold',
                        boxShadow: '0 0 4px 3px #5E001E',
                    }}
                >{`Instagram`}</Button>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: '#E0C8E8',
                        color: '#200726',
                        fontWeight: 'bold',
                        boxShadow: '0 0 4px 3px #5E001E',
                    }}
                >{`TikTok`}</Button>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: '#E0C8E8',
                        color: '#200726',
                        fontWeight: 'bold',
                        boxShadow: '0 0 4px 3px #5E001E',
                    }}
                >{`YouTube`}</Button>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: '#E0C8E8',
                        color: '#200726',
                        fontWeight: 'bold',
                        boxShadow: '0 0 4px 3px #5E001E',
                    }}
                >{`Pinterest`}</Button>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    columnGap: '0.5rem',
                    marginLeft: '1rem',
                    marginTop: '1rem',
                }}
            >
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: '#E0C8E8',
                        color: '#200726',
                        fontWeight: 'bold',
                    }}
                >{`Instagram`}</Button>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: '#E0C8E8',
                        color: '#200726',
                        fontWeight: 'bold',
                    }}
                >{`TikTok`}</Button>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: '#E0C8E8',
                        color: '#200726',
                        fontWeight: 'bold',
                    }}
                >{`YouTube`}</Button>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: '#E0C8E8',
                        color: '#200726',
                        fontWeight: 'bold',
                    }}
                >{`Pinterest`}</Button>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    columnGap: '0.5rem',
                    marginLeft: '1rem',
                    marginTop: '1rem',
                }}
            >
                <Button
                    variant='outlined'
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                        boxShadow: '0 0 4px 3px #5E001E',
                        border: '1px solid #E0C8E8',
                    }}
                >{`Instagram`}</Button>
                <Button
                    variant='outlined'
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                        boxShadow: '0 0 4px 3px #5E001E',
                        border: '1px solid #E0C8E8',
                    }}
                >{`TikTok`}</Button>
                <Button
                    variant='outlined'
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                        boxShadow: '0 0 4px 3px #5E001E',
                        border: '1px solid #E0C8E8',
                    }}
                >{`YouTube`}</Button>
                <Button
                    variant='outlined'
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                        boxShadow: '0 0 4px 3px #5E001E',
                        border: '1px solid #E0C8E8',
                    }}
                >{`Pinterest`}</Button>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    columnGap: '0.5rem',
                    marginLeft: '1rem',
                    marginTop: '1rem',
                }}
            >
                <Button
                    variant='outlined'
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                        border: '1px solid #E0C8E8',
                    }}
                >{`Instagram`}</Button>
                <Button
                    variant='outlined'
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                        border: '1px solid #E0C8E8',
                    }}
                >{`TikTok`}</Button>
                <Button
                    variant='outlined'
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                        border: '1px solid #E0C8E8',
                    }}
                >{`YouTube`}</Button>
                <Button
                    variant='outlined'
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                        border: '1px solid #E0C8E8',
                    }}
                >{`Pinterest`}</Button>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    columnGap: '0.5rem',
                    marginLeft: '1rem',
                    marginTop: '1rem',
                }}
            >
                <Typography
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                        textShadow: '0 0 4px #5E001E',
                    }}
                >{`Instagram`}</Typography>
                <Typography
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                        textShadow: '0 0 4px #5E001E',
                    }}
                >{`TikTok`}</Typography>
                <Typography
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                        textShadow: '0 0 4px #5E001E',
                    }}
                >{`YouTube`}</Typography>
                <Typography
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                        textShadow: '0 0 4px #5E001E',
                    }}
                >{`Pinterest`}</Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    columnGap: '0.5rem',
                    marginLeft: '1rem',
                    marginTop: '1rem',
                }}
            >
                <Typography
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                    }}
                >{`Instagram`}</Typography>
                <Typography
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                    }}
                >{`TikTok`}</Typography>
                <Typography
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                    }}
                >{`YouTube`}</Typography>
                <Typography
                    sx={{
                        color: '#E0C8E8',
                        fontWeight: 'bold',
                    }}
                >{`Pinterest`}</Typography>
            </Box> */}
        </Box>
    );
}

export default IntroSection;
