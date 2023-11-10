import React, { useState, useEffect } from 'react';

// components
import ArtSection from './ArtSection';
import IntroSection from './IntroSection';
import ContactSection from './ContactSection';

function App() {
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    console.log('loading: ' + loading);
    return (
        <div className='App'>
            <IntroSection />
            <ArtSection />
            <ContactSection />
        </div>
    );
}

export default App;
