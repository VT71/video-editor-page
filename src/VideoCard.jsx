import React from 'react';
import { useRef } from 'react';

// @mui
import { Box } from '@mui/material';

function VideoCard({ volume, videoName, videoFormat, coverName }) {
    const isPlaying = useRef(false);

    const handleMouseOver = () => {
        console.log('mouse over');
        document.getElementById(`${videoName}-layer`).style.backgroundColor =
            'rgba(0,0,0,0)';
        document.getElementById(`${videoName}`).style.zIndex = '1';
        try {
            console.log('Volume: ' + volume);
            if (volume || volume === 0) {
                console.log('volume', volume);
                document.getElementById(`${videoName}`).volume = volume / 100;
            }
            let promise = document.getElementById(`${videoName}`).play();
            if (promise !== undefined) {
                promise
                    .then(() => {
                        isPlaying.current = true;
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleMouseOut = () => {
        document.getElementById(`${videoName}-layer`).style.backgroundColor =
            'rgba(0,0,0,1)';
        setTimeout(() => {
            document.getElementById(`${videoName}`).style.zIndex = '-1';
            if (isPlaying) {
                isPlaying.current = false;
                document.getElementById(`${videoName}`).pause();
                document.getElementById(`${videoName}`).currentTime = 0;
                document.getElementById(
                    `${videoName}-layer`
                ).style.backgroundColor = 'rgba(0,0,0,0.4)';
            }
        }, 500);
    };

    if (videoName && videoFormat && coverName) {
        return (
            <Box
                sx={{ position: 'relative', width: '202px', height: '248px' }}
                onMouseOver={() => {
                    document.getElementById(
                        `${videoName}-socials`
                    ).style.bottom = '-40px';
                }}
                onMouseOut={() => {
                    document.getElementById(
                        `${videoName}-socials`
                    ).style.bottom = '0';
                }}
            >
                <Box
                    id={`${videoName}-socials`}
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                        columnGap: '1rem',
                        position: 'absolute',
                        bottom: '0',
                        zIndex: '0',
                        transition: 'all 0.5s ease',
                    }}
                >
                    <Box
                        sx={{
                            width: '24px',
                            height: '24px',
                            backgroundImage: `url("./images/instagramLogo.png")`,
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
                        }}
                    ></Box>
                </Box>
                <Box
                    id={`${videoName}-card`}
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
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
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <video
                            muted={volume ? false : true}
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
                                src={`/videos/${videoName}.${videoFormat}`}
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
            </Box>
        );
    } else {
        return null;
    }
}

export default VideoCard;
