import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Box, TextField, Button, Card, CardContent } from '@mui/material';

const Contact = () => {


    const [myform, setMyform] = useState({
        fname: '',
        lname: '',
        email: '',
        message: '',
    });

    const saveFields = (event: { target: { name: any; value: any; }; }) => {
        const {name, value} = event.target;
        setMyform((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ myform });
    };

    return (
        <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '5rem', background: 'linear-gradient(90deg, hsla(346, 59%, 20%, 1) 0%, hsla(15, 93%, 71%, 1) 100%)' }}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6}>
                        <Card elevation={3}>
                            <CardContent>
                                <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
                                    <Typography variant="h4" align="center" gutterBottom>
                                        Contact Us
                                    </Typography>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField label="First Name" name="fname" fullWidth required onChange={saveFields} value={myform.fname}/>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField label="Last Name" name="lname" fullWidth required onChange={saveFields} value={myform.lname}/>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField label="Email" type="email" name="email" fullWidth required onChange={saveFields} value={myform.email}/>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Message"
                                                    name="message"
                                                    value={myform.message}
                                                    multiline
                                                    rows={4}
                                                    fullWidth
                                                    required
                                                    variant="outlined"
                                                    onChange={saveFields}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>



                    <Grid item xs={12} sm={6}>
                        <Card elevation={3} sx={{ height: '50%' }}>
                            <CardContent>
                                <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
                                    <Typography variant="h5" gutterBottom align="center">
                                        Contact Details
                                    </Typography>
                                    <Typography variant="body1" align="justify" gutterBottom>
                                        Phone: +254 748 790 210 <br />
                                        Email: talndetei567@gmail.com <br />
                                        Address: Muimara Estate, Imara Daima, Nairobi, Kenya
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default Contact;
