import {Box} from '@mui/material';
import React from 'react';

type CenteredProps = {
    children: React.ReactNode;
};


const Centered = ({children}: CenteredProps) => {
    return (
        <Box
                display = {"flex"}
                justifyContent = {"center"}
                alignItems = {"center"}
                minHeight = {"100vh"}
        >
            {children}
        </Box>
    );
};

export default Centered;