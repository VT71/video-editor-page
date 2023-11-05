import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';
import NavMenuLink from './NavMenuLink';

function NavMenu() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '1.4rem' }}>
            <NavMenuLink text={`my work`} />
            <NavMenuLink text={`contact`} />
        </Box>
    );
}

export default NavMenu;
