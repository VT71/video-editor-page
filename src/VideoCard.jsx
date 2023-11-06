import React from 'react';

// @mui
import { Box } from '@mui/material';

function VideoCard({ videoName, videoFormat, coverName }) {
    if (videoName && videoFormat && coverName) {
        return (
            <Box
                id={`${videoName}-card`}
                sx={{
                    position: 'relative',
                    width: '202px',
                    height: '248px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 0 25px -5px #FFFFFF',
                    transition: 'all 0.8s ease',
                    backgroundImage: `url(./images/${coverName})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    ':hover': {
                        boxShadow: '0 0 25px 2px #FFFFFF',
                        background: 'none',
                        // width: '220px',
                        // height: '268px',
                        scale: '1.05',
                    },
                }}
                onMouseOver={() => {
                    document.getElementById(
                        `${videoName}-layer`
                    ).style.backgroundColor = 'rgba(0,0,0,0)';
                    document.getElementById(`${videoName}`).style.zIndex = '1';
                    document.getElementById(`${videoName}`).play();
                }}
                onMouseOut={() => {
                    document.getElementById(
                        `${videoName}-layer`
                    ).style.backgroundColor = 'rgba(0,0,0,1)';
                    setTimeout(() => {
                        document.getElementById(`${videoName}`).style.zIndex =
                            '-1';
                        document.getElementById(`${videoName}`).pause();
                        document.getElementById(`${videoName}`).currentTime = 0;
                        document.getElementById(
                            `${videoName}-layer`
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
                        id={`${videoName}`}
                        style={{
                            position: 'absolute',
                            zIndex: '-1',
                            // left: '50%',
                            // top: '50%',
                            // transform: 'translateX(-50%) translateY(-50%)',
                            maxWidth: '100%',
                            width: 'auto',
                            height: 'auto',
                        }}
                    >
                        <source
                            src={`./videos/${videoName}.${videoFormat}`}
                            type={`video/${videoFormat}`}
                        />
                    </video>
                </Box>
                <Box
                    id={`${videoName}-layer`}
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
    } else {
        return null;
    }
}

export default VideoCard;
