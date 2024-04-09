import React from 'react';
import { styled } from '@mui/system';
import { Typography, Button, Container, Box, Grid } from '@mui/material';
import heroImage from '../../assets/images/hero.jpg'; 
import Buttons from '../Buttons';


const HeroBox = styled(Box)(({ theme }) => ({
  background: '#FAFAFA', 
  color: '#000000', 
  padding: theme.spacing(17, 0), 
  minHeight: '42vh', 
}));

// const HeroButton = styled(Button)(({ theme }) => ({
//     marginTop: theme.spacing(2),
//     background: "#64232d",
//     color: "#ffffff",
//     fontWeight: "bold",
//     fontSize: "1.0rem",
//     '&:hover': { 
//         background: "#FAFAFA",
//         border:"1px solid #64232d",
//         color: "#64232d",
//     },
//     padding: "14px 40px",
//     width: "50%",
//     boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
// }));

const Hero = () => {
  return (
    <HeroBox>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box textAlign={{ xs: 'center', md: 'left' }}>
              <Typography variant="h2" component="h1" gutterBottom>
                Welcome to AnyPrint
              </Typography>
              <Typography variant="h5" component="p" paragraph>
                A one-stop shop for all your printing needs, offering a wide range of services to meet your requirements.
              </Typography>
              <Buttons>
                Book Now
              </Buttons>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign={{ xs: 'center', md: 'right' }}>
              <img src={heroImage} alt="Hero" style={{ maxWidth: '100%', height: 'auto', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroBox>
  );
};

export default Hero;
