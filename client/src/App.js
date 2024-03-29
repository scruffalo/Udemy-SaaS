//Does the navigation between addresses
import { Routes, Route } from 'react-router-dom';

// comment: currently debugging why theme from Material UI is not working.
// comment: It is something to do with these files. 
import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';

import Navbar from './components/Navbar';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';

function App() {
  // Debug: the below code using theme is causing an error. Uncomment the code below to debug. 

  // const theme = useMemo(() =>  createTheme(themeSettings()), []);
  return (
    <div className="App">
      <p> Hello, this is the app.js </p>
        <CssBaseline />
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
        </Routes> 
    </div>
  );
}

// *** REVERSING DEBUG SETTINGS *** 
// insert the following above CssBaseline "<ThemeProvider theme={theme} >"
// insert the following after /Routes to close the ThemeProvider object "</ThemeProvider>"

export default App;