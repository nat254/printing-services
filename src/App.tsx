import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Theme } from './theme/Theme';
import Buttons from './components/Buttons';
import Centered from './theme/Centered';
import { Button } from '@mui/material';
import Contact from './components/pages/Contact';
import LandingPage from './components/pages/LandingPage';

function App() {
  return (
    <>
    <Theme>
    <LandingPage />
    </Theme>
    </>

  );
}

export default App;
