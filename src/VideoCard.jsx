import React from 'react';

// @mui
import { Box } from '@mui/material';

function VideoCard({ videoUrl }) {
    return (
        <Box
            sx={{
                width: '202px',
                height: '248px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 25px -5px #FFFFFF',
                transition: 'box-shadow 0.5s ease',
                backgroundImage: 'url(./images/tempVideoCover.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                ':hover': {
                    boxShadow: '0 0 40px 2px #FFFFFF',
                },
            }}
            onMouseOver={() => {
                document.getElementById('video1-layer').style.backgroundColor =
                    'rgba(0,0,0,0)';
                document.getElementById('video1').style.zIndex = '1';
                document.getElementById('video1').play();
            }}
            onMouseOut={() => {
                document.getElementById('video1-layer').style.backgroundColor =
                    'rgba(0,0,0,1)';
                setTimeout(() => {
                    document.getElementById('video1').style.zIndex = '-1';
                    document.getElementById('video1').pause();
                    document.getElementById('video1').currentTime = 0;
                    document.getElementById(
                        'video1-layer'
                    ).style.backgroundColor = 'rgba(0,0,0,0.4)';
                }, 500);
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <video
                    id='video1'
                    style={{
                        position: 'absolute',
                        zIndex: '-1',
                        // left: '50%',
                        // top: '50%',
                        // transform: 'translateX(-50%) translateY(-50%)',
                        maxHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                    }}
                >
                    <source src='./videos/tempVideo.mp4' type='video/mp4' />
                </video>
            </Box>
            <Box
                id='video1-layer'
                sx={{
                    position: 'absolute',
                    top: '0',
                    height: '100%',
                    width: '100%',
                    zIndex: '2',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    transition: 'background-color 0.5s ease',
                    ':hover': {
                        backgroundColor: 'rgba(0,0,0,0)',
                    },
                }}
            ></Box>
        </Box>
    );
}

export default VideoCard;
