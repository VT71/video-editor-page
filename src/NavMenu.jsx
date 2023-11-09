import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';
import NavMenuLink from './NavMenuLink';

function NavMenu() {
    return (
        <Box
            sx={{ display: 'flex', alignItems: 'center', columnGap: '1.4rem' }}
        >
            <NavMenuLink text={`my work`} to={'./#art-section'} />
            <NavMenuLink text={`contact`} to={'./#contact-section'} />
        </Box>
    );
}

export default NavMenu;
