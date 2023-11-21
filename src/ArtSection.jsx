import React, { useEffect, useRef, useState } from 'react';
import './index.css';

// @mui
import { Box, Typography, Stack, Slider, Button } from '@mui/material';

// components
import VideoCard from './VideoCard';

function ArtSection() {
    const [volume, setVolume] = useState(0);
    const nameButtonColor = useRef('#C924E9');

    const links = {
        1: { tiktok: 'https://vm.tiktok.com/ZMjE67LHW/' },
        2: { tiktok: 'https://vm.tiktok.com/ZMjE6yoL1/' },
        3: { tiktok: 'https://vm.tiktok.com/ZMjE6mp1W/' },
        4: { tiktok: 'https://vm.tiktok.com/ZMjE6s4pV/' },
        5: { tiktok: 'https://vm.tiktok.com/ZMjE6uBvD/' },
        6: { tiktok: 'https://vm.tiktok.com/ZMjE65vo7/' },
        7: { tiktok: 'https://vm.tiktok.com/ZMjE6seHR/' },
        8: { tiktok: 'https://vm.tiktok.com/ZMjE6Cwek/' },
        9: { tiktok: 'https://vm.tiktok.com/ZMjE6H2Gt/' },
        10: { tiktok: 'https://vm.tiktok.com/ZMjE6UkDo/' },
        11: { tiktok: 'https://vm.tiktok.com/ZMjE6gSAS/' },
        12: { tiktok: 'https://vm.tiktok.com/ZMjE6W7Yy/' },
    };

    // setInterval(() => {
    //     if (nameButtonColor.current === '#C924E9') {
    //         nameButtonColor.current = '#5E001E';
    //         document.getElementById('creator-name-button').style.color =
    //             '#5E001E';
    //     } else {
    //         nameButtonColor.current = '#C924E9';
    //         document.getElementById('creator-name-button').style.color =
    //             '#C924E9';
    //     }
    // }, 500);

    return (
        <Box
            id='art-section'
            sx={{
                width: '100%',
                backgroundColor: '#15001B',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'boder-box',
                rowGap: '3.5rem',
                paddingBottom: '4rem',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    overflow: 'hidden',
                    marinBottom: '4rem',
                    boxSizing: 'border-box',
                    paddingY: '0.5rem',
                    backgroundColor: '#0F0F0F',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontFamily: 'Goldman-Regular',
                        color: '#E0C8E8',
                        fontSize: '0.8rem',
                    }}
                >{`Website created by `}</Typography>
                <Button
                    id={'creator-name-button'}
                    variant='text'
                    sx={{
                        fontFamily: 'Goldman-Regular',
                        // color: '#5E001E',
                        color: '#C924E9',
                        fontSize: '0.8rem',
                        textTransform: 'none',
                        paddingX: '0.3rem',
                        minWidth: 'fit-content',
                        transition: 'all 0.5s ease-in-out',
                        ':hover': {
                            color: '#C924E9',
                        },
                    }}
                    href='https://www.upwork.com/freelancers/victortoma6'
                    target='_blank'
                >
                    Victor Toma.
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    rowGap: '1.5rem',
                }}
            >
                <Typography
                    sx={{
                        color: '#E0C8E8',
                        fontSize: '3.6rem',
                        textShadow: '0px 11px 5px #5E001E',
                        fontFamily: 'Bangers',
                    }}
                >{`My Art`}</Typography>
                <Box
                    sx={{
                        width: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* <Typography
                        sx={{
                            textAlign: 'center',
                            ...(volume === 0 && { color: '#5E001E' }),
                            ...(volume > 0 && { color: '#E0C8E8' }),
                            fontFamily: 'Goldman-Regular',
                        }}
                    >
                        {volume === 0 ? 'Volume Off' : 'Volume On'}
                    </Typography>
                    <Slider
                        sx={{ color: '#C924E9', height: '3px' }}
                        onChange={(e, newValue) => {
                            setVolume(newValue);
                        }}
                    /> */}
                    <Button
                        variant='text'
                        sx={{
                            fontSize: '0.8rem',
                            ...(volume === 0 && { color: '#5E001E' }),
                            ...(volume > 0 && { color: '#E0C8E8' }),
                            fontFamily: 'Goldman-Regular',
                        }}
                        onClick={() => {
                            if (volume === 100) {
                                setVolume(0);
                                document.getElementById(
                                    'volume-level'
                                ).style.width = '0%';
                            } else if (volume < 100) {
                                setVolume(100);
                                document.getElementById(
                                    'volume-level'
                                ).style.width = '100%';
                            }
                        }}
                    >
                        {volume < 100 ? `Volume Off` : 'Volume On'}
                    </Button>
                    <Box
                        sx={{
                            backgroundColor: '#5E001E',
                            borderRadius: '1.5px',
                            height: '3px',
                            width: '100%',
                        }}
                    >
                        <Box
                            id='volume-level'
                            sx={{
                                backgroundColor: '#C924E9',
                                borderRadius: '1.5px',
                                height: '3px',
                                width: '0%',
                                transition: 'width 0.5s ease-in-out',
                            }}
                        ></Box>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    wdith: '100%',
                    maxWidth: '800px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    columnGap: '3rem',
                    rowGap: '5rem',
                    flexWrap: 'wrap',
                    paddingX: '1.5rem',
                    '@media (max-width: 760px)': {
                        justifyContent: 'center',
                    },
                    '@media (max-width: 499px)': {
                        rowGap: '3.5rem',
                    },
                }}
            >
                {new Array(12).fill(0).map((_, index) => (
                    <VideoCard
                        key={index}
                        volume={volume}
                        videoName={`video${index + 1}`}
                        videoFormat={'mp4'}
                        coverName={`video${index + 1}Cover.png`}
                        links={links[index + 1]}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default ArtSection;
