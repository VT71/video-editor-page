import React, { useEffect, useState } from 'react';

// components
import NavMenu from './NavMenu';

// @mui
import { Box, IconButton, Typography, Button, Link } from '@mui/material';

// icons
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

function IntroSection() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                maxHeight: '750px',
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
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'KaushanScript-Regular',
                                        color: '#E0C8E8',
                                        fontSize: '3.6rem',
                                        textShadow: '0px 2px 10px #5E001E',
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
                                            backgroundImage:
                                                'url("./images/instagramLogo.png")',
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
                                        href={
                                            'https://instagram.com/kris.esfd?igshid=NzZlODBkYWE4Ng=='
                                        }
                                    ></Box>
                                </Link>
                                <Link href={''} target='_blank'>
                                    <Box
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            backgroundImage:
                                                'url("./images/pinterestLogo.png")',
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
                    autoPlay
                    muted
                    style={{
                        // position: 'absolute',
                        // left: '50%',
                        // top: '50%',
                        // transform: 'translateX(-50%) translateY(-50%)',
                        maxWidth: '100%',
                        width: 'auto',
                        height: 'auto',
                    }}
                >
                    <source
                        src={`${require('./assets/videos/introVideo.mp4')}`}
                        type='video/mp4'
                    />
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
