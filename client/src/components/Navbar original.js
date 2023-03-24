// READ ME 
// This is the versino of Navbar.js that the tutorial says to create.
// I created a basic Navbar.js to debug the code to do with .theme. 

import React from 'react';
import { Box, Link, Typography, useTheme } from "@mui/material";

const Navbar = () => {
    const theme = useTheme();
    return (
        <Box width="100%" p="rem 6%" backgroundColor={theme.palette.background.alt} textAlign="center" sx={{boxShadow:3}}>
            <Typography variant="h3" color="primary" fontWeight="bold">SaaSAI</Typography>
            <Link href="/register" p={1}>Register</Link>
            <Link href="/login" p={1}>Login</Link>
        </Box>
    );
}

export default Navbar;