import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import './index.css';

// @mui
import { Box, Button, Typography } from '@mui/material';

function VideoCard({ volume, videoName, videoFormat, coverName, links }) {
    const isPlaying = useRef(false);

    const [sourceRequested, setSourceRequested] = useState(false);

    const videoCardStyle = {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        boxShadow: '0 0 25px -5px #FFFFFF',
        transition: 'all 0.8s ease',
        backgroundImage: `url("${require('./assets/images/' + coverName)}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const handleMouseOver = () => {
        setSourceRequested(true);
        document.getElementById(`${videoName}-layer`).style.backgroundColor =
            'rgba(0,0,0,0)';
        document.getElementById(`${videoName}`).style.zIndex = '1';
        document.getElementById(`${videoName}-card`).style.boxShadow =
            '0 0 25px 2px #FFFFFF';
        document.getElementById(`${videoName}-card`).style.backgroundImage =
            'none';
        document.getElementById(`${videoName}-card`).style.scale = '1.05';
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
        console.log('mouse out, playing? : ' + isPlaying.current);
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
        document.getElementById(`${videoName}-card`).style = videoCardStyle;
    };

    const handleVideoEnd = (videoName) => {
        console.log('video ended');
        handleMouseOut();
        document.getElementById(`${videoName}-socials`).style.bottom = '0';
        document.getElementById(`${videoName}-card`).style = videoCardStyle;
    };

    useEffect(() => {
        document.getElementById(`${videoName}`).volume = volume / 100;
    }, [volume]);

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
                    document.getElementById(`${videoName}-card`).style =
                        videoCardStyle;
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
                    {/* <Box
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
                    ></Box> */}
                    <Button
                        variant={'text'}
                        sx={{
                            color: '#E0C8E8',
                            textTransform: 'none',
                            ':hover': { color: '#fff' },
                        }}
                        href={links && links.tiktok && links.tiktok}
                        target='_blank'
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Goldman-Regular',
                                fontSize: '0.8rem',
                            }}
                        >{`View on TikTok`}</Typography>
                    </Button>
                </Box>
                <Box
                    id={`${videoName}-card`}
                    className='video-card'
                    sx={{
                        ...videoCardStyle,
                    }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onTouchStart={() => {
                        console.log('touch start');
                        if (!isPlaying.current) {
                            console.log('touch start not playing');
                            handleMouseOver();
                            // document.getElementById(
                            //     `${videoName}-card`
                            // ).style.boxShadow = '0 0 25px 2px #FFFFFF';
                            // document.getElementById(
                            //     `${videoName}-card`
                            // ).style.backgroundImage = 'none';
                            // document.getElementById(
                            //     `${videoName}-card`
                            // ).style.scale = '1.05';
                        } else {
                            console.log('touch start playing');
                            handleMouseOut();
                            // document.getElementById(`${videoName}-card`).style =
                            //     videoCardStyle;
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
