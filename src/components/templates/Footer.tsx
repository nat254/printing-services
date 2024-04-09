import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box bgcolor="#FAFAFA" color="primary.main" py={4} marginBottom={4}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" align="center" gutterBottom>
              AnyPrint
            </Typography>
            <Typography variant="body1" align="center">
            We utilize state-of-the-art printing technology and premium materials to ensure the finest quality prints that exceed your expectations.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" align="center" gutterBottom>
              Quick Links
            </Typography>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Link href="#" color="inherit">
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  About
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  Services
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  Contact
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} AnyPrint | All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
