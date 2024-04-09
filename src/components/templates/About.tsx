import React from 'react';
import { Container, Typography, Box, Grid, Paper, SvgIcon, Card, CardContent, CardHeader } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import BuildIcon from '@mui/icons-material/Build';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { styled } from '@mui/system';


const AboutPaper = styled(Paper)(({ theme }) => ({
    background: 'linear-gradient(90deg, hsla(346, 59%, 20%, 1) 0%, hsla(15, 93%, 71%, 1) 100%)', 
    color: '#000000', 
    padding: theme.spacing(17, 0) 
}));


const About = () => {
  return (
    <AboutPaper elevation={5} sx={{ padding: '2rem', marginBottom: '1rem' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 5, fontWeight:'bold' }}>
          Why Choose Us
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              <CardContent>
                <Box textAlign="center">
                  <SvgIcon component={CheckCircleIcon} sx={{ fontSize: 80, color: 'primary.main' }} />
                  <Typography variant="h6" gutterBottom>
                    Quality Products
                  </Typography>
                  <Typography variant="body1" align="justify">
                    Our products are made with the highest quality materials, ensuring durability and satisfaction.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              <CardContent>
                <Box textAlign="center">
                  <SvgIcon component={AlarmOnIcon} sx={{ fontSize: 80, color: 'primary.main' }} />
                  <Typography variant="h6" gutterBottom>
                    Availability
                  </Typography>
                  <Typography variant="body1" align="justify">
                    Reach out to us anytime, anywhere. Our products are available for purchase 24/7, 365 days a year.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
              <CardContent>
                <Box textAlign="center">
                  <SvgIcon component={BuildIcon} sx={{ fontSize: 80, color: 'primary.main' }} />
                  <Typography variant="h6" gutterBottom>
                    Customization Options
                  </Typography>
                  <Typography variant="body1" align="justify">
                    Customize your orders to your exact specifications with our wide range of customization options.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              <CardContent>
                <Box textAlign="center">
                  <SvgIcon component={ThumbUpIcon} sx={{ fontSize: 80, color: 'primary.main' }} />
                  <Typography variant="h6" gutterBottom>
                    Excellent Customer Service
                  </Typography>
                  <Typography variant="body1" align="justify">
                    Our dedicated customer service team is here to assist you every step of the way. Your satisfaction is
                    our priority.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </AboutPaper>
  );
};

export default About;
