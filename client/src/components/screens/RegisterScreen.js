import React from 'react';
import { Box, Link, Typography, useTheme, useMediaQuery, Collapse, Alert, TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const RegisterScreen = () => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery("min-width: 1000px");
    const navigate = useNavigate();

    //define username, email and password to be used in the form
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const config = {
        headers: { "Content-Type": "application/json" },
    }

    //the registerHandler function handles registration 
    const registerHandler = async (e) => {
        e.preventDefault();
    
        try {
            await axios.post("/api/auth/register", {username, email, password}, config)
            .then(navigate("/login"));
        
        } catch (err) {
            console.log(err);
            if (err.response.data.error) {
                setError(err.response.data.error);
            } else if (err.message) {
                serError(err.message);
            }
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }
    
    return (        
        <Box width={isNotMobile ? width="50%" : width="70%" } 
            p="2rem"  
            m="2rem" 
            borderRadius={5} 
            backgroundColor={theme.palette.background.alt} 
            sx={{boxShadow:5}}
        >
            <Collapse in={error}>
                <Alert severity='error' sx={{mb:2}}>(error)</Alert>
            </Collapse>

            <form onSubmit={registerHandler}>
                <Typography variant='h3'>Sign Up</Typography>
                <TextField label="Username" margin="normal" required fullWidth value={username} onChange={(e) => setUsername(e.target.value)}/>
                <TextField label="Email" margin="normal" required fullWidth value={email} onChange={(e) => setEmail(e.target.value)}/>
                <TextField label="Password" type="password" vmargin="normal" required fullWidth value={password} onChange={(e) => setPassword(e.target.value)}/>
                 <Button variant="contained" type="submit" size="large" fullWidth sx={{color:white, mt:2 }}>Sign Up</Button>
            </form>
        </Box>
    )
};

export default HomeScreen;
 