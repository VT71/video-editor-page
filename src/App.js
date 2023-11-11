import React, { useState, useEffect } from 'react';

// @mui
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, {
    linearProgressClasses,
} from '@mui/material/LinearProgress';

// components
import ArtSection from './ArtSection';
import IntroSection from './IntroSection';
import ContactSection from './ContactSection';

const CustomLinearProgress = styled(LinearProgress)(() => ({
    width: '250px',
    height: '4px',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#C924E9',
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: '#490061',
    },
}));

function App() {
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <div
                className='App'
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100vh',
                    overflow: 'hidden',
                }}
            >
                <IntroSection />
                <ArtSection />
                <ContactSection />
                <div
                    style={{
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        rowGap: '0.5rem',
                        backgroundColor: '#0F0F0F',
                        position: 'absolute',
                        top: 0,
                        zIndex: 100,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '1rem',
                            fontFamily: 'Goldman-Regular',
                            color: '#E0C8E8',
                        }}
                    >{`Loading`}</Typography>
                    <CustomLinearProgress />
                </div>
            </div>
        );
    } else {
        return (
            <div className='App'>
                <IntroSection />
                <ArtSection />
                <ContactSection />
            </div>
        );
    }
}

export default App;
