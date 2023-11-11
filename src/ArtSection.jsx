import React, { useEffect, useState } from 'react';
import './index.css';

// @mui
import { Box, Typography, Stack, Slider, Button } from '@mui/material';

// components
import VideoCard from './VideoCard';

function ArtSection() {
    const [volume, setVolume] = useState(0);

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
                paddingY: '4rem',
            }}
        >
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
                    />
                ))}
            </Box>
            {''}
        </Box>
    );
}

export default ArtSection;
