import React from 'react';
import './index.css';

// @mui
import { Box, Typography } from '@mui/material';

// components
import VideoCard from './VideoCard';

function ArtSection() {
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
                >{`My Art`}</Typography>
            </Box>
            <Box
                sx={{
                    width: '920px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    columnGap: '2rem',
                }}
            >
                <VideoCard
                    videoName={'video1'}
                    videoFormat={'mp4'}
                    coverName={'video1Cover.png'}
                />
                <VideoCard
                    videoName={'video2'}
                    videoFormat={'mp4'}
                    coverName={'video2Cover.png'}
                />
                <VideoCard
                    videoName={'video3'}
                    videoFormat={'mp4'}
                    coverName={'video3Cover.png'}
                />
            </Box>
        </Box>
    );
}

export default ArtSection;
