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



return (
    <div>
        <p>This is the navbar</p>
    </div>
);