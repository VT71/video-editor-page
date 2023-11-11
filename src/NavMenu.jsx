import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';
import NavMenuLink from './NavMenuLink';

function NavMenu({ version }) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '1.4rem',
                ...(version === 'mobile' && {
                    width: '100%',
                    height: '100%',
                    rowGap: '2rem',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'relative',
                    top: '-64px',
                }),
            }}
        >
            <NavMenuLink
                text={`my work`}
                to={'./#art-section'}
                version={version && version}
            />
            <NavMenuLink
                text={`contact`}
                to={'./#contact-section'}
                version={version && version}
            />
        </Box>
    );
}

export default NavMenu;
