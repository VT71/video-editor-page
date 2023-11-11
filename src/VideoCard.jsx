import React, { useState } from 'react';
import { useRef } from 'react';

// @mui
import { Box } from '@mui/material';

function VideoCard({ volume, videoName, videoFormat, coverName }) {
    const isPlaying = useRef(false);

    const [sourceRequested, setSourceRequested] = useState(false);

    const handleMouseOver = () => {
        setSourceRequested(true);
        document.getElementById(`${videoName}-layer`).style.backgroundColor =
            'rgba(0,0,0,0)';
        document.getElementById(`${videoName}`).style.zIndex = '1';
        try {
            if (volume || volume === 0) {
                document.getElementById(`${videoName}`).volume = volume / 100;
            }
            let promise = document.getElementById(`${videoName}`).play();
            if (promise !== undefined) {
                promise
                    .then(() => {
                        isPlaying.current = true;
                    })
                    .catch((err) => {});
            }
        } catch (err) {}
    };

    const handleMouseOut = () => {
        if (isPlaying.current) {
            document.getElementById(
                `${videoName}-layer`
            ).style.backgroundColor = 'rgba(0,0,0,1)';
            setTimeout(() => {
                document.getElementById(`${videoName}`).style.zIndex = '-1';

                isPlaying.current = false;
                document.getElementById(`${videoName}`).pause();
                document.getElementById(`${videoName}`).currentTime = 0;
                document.getElementById(
                    `${videoName}-layer`
                ).style.backgroundColor = 'rgba(0,0,0,0.4)';
            }, 500);
        }
    };

    const handleVideoEnd = (videoName) => {
        handleMouseOut();
        document.getElementById(`${videoName}-card`).style = {
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            boxShadow: '0 0 25px -5px #FFFFFF',
            transition: 'all 0.8s ease',
            backgroundImage: `url("${require('./assets/images/' +
                coverName)}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        };
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
                onTouchStart={() => {
                    if (!isPlaying.current) {
                        document.getElementById(
                            `${videoName}-socials`
                        ).style.bottom = '-40px';
                    } else {
                        document.getElementById(
                            `${videoName}-socials`
                        ).style.bottom = '0';
                    }
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
                        backgroundImage: `url("${require('./assets/images/' +
                            coverName)}")`,
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
                    onTouchStart={() => {
                        if (!isPlaying.current) {
                            handleMouseOver();
                            document.getElementById(`${videoName}-card`).style =
                                '0 0 25px 2px #FFFFFF';
                            document.getElementById(
                                `${videoName}-card`
                            ).style.backgroundImage = 'none';
                            document.getElementById(
                                `${videoName}-card`
                            ).style.scale = '1.05';
                        } else {
                            handleMouseOut();
                            document.getElementById(`${videoName}-card`).style =
                                {
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    overflow: 'hidden',
                                    boxShadow: '0 0 25px -5px #FFFFFF',
                                    transition: 'all 0.8s ease',
                                    backgroundImage: `url("${require('./assets/images/' +
                                        coverName)}")`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                };
                        }
                    }}
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
                            disablePictureInPicture={true}
                            playsInline={true}
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
                            onEnded={() => {
                                handleVideoEnd(videoName);
                            }}
                        >
                            {sourceRequested ? (
                                <source
                                    src={`${require('./assets/videos/' +
                                        videoName +
                                        '.' +
                                        videoFormat)}`}
                                    type={`video/${videoFormat}`}
                                />
                            ) : null}
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
