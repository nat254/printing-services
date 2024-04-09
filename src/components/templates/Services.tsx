import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import bizCards from '../../assets/images/bizcards.jpg';
import bag from '../../assets/images/bags.jpg';
import banner from '../../assets/images/banner.jpg';
import brochure from '../../assets/images/brochure.jpg';
import clothing from '../../assets/images/clothing.jpg';
import flyer from '../../assets/images/flyers.jpg';
import label from '../../assets/images/label.jpg';
import stationary from '../../assets/images/stationary.jpg';
import mug from '../../assets/images/mug.png';
import { styled } from '@mui/system';

const ServicesBox = styled(Box)(({ theme }) => ({
    background: '#FAFAFA', 
    color: '#000000', 
    minHeight: '42vh',
    padding: '2rem', 
    
}));


const servicesData = [
    {
        title: 'Business Cards',
        description: 'We offer a wide range of business card options to help you stand out.',
        imageUrl: bizCards,
    },
    {
        title: 'Bags',
        description: 'Customize your bags with your logo or design.',
        imageUrl: bag,
    },
    {
        title: 'Banner',
        description: 'Get your message across with a custom banner.',
        imageUrl: banner,
    },
    {
        title: 'Brochure',
        description: 'Inform your customers with a custom brochure.',
        imageUrl: brochure,
    },
    {
        title: 'Clothing',
        description: 'Customize your clothing with your logo or design.',
        imageUrl: clothing,
    },
    {
        title: 'Flyer',
        description: 'Get your message across with a custom flyer.',
        imageUrl: flyer,
    },
    {
        title: 'Label',
        description: 'Customize your labels with your logo or design.',
        imageUrl: label,
    },
    {
        title: 'Stationary',
        description: 'Customize your stationary with your logo or design.',
        imageUrl: stationary,
    },
    {
        title: 'Mug',
        description: 'Customize your mug with your logo or design.',
        imageUrl: mug,
    },
    // Add more services as needed
];

const Services = () => {
    const servicesChunks = React.useMemo(() => {
        const chunkSize = 4;
        const chunks = [];
        for (let i = 0; i < servicesData.length; i += chunkSize) {
            chunks.push(servicesData.slice(i, i + chunkSize));
        }
        return chunks;
    }, []);

    return (
        <ServicesBox>
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom sx={{ mb: 5, fontWeight: 'bold' }}>
                    Our Services
                </Typography>
                <Carousel animation="slide">
                    {servicesChunks.map((chunk, index) => (
                        <Box key={index} display="flex" justifyContent="center">
                            {chunk.map((service, idx) => (
                                <Box key={idx} textAlign="center" mx={2}>
                                    <img src={service.imageUrl} alt={service.title} style={{
                                        borderRadius: '20px', 
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'contain'
                                    }} />
                                    <Typography variant="h6" gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" align="justify">{service.description}</Typography>
                                </Box>
                            ))}
                        </Box>
                    ))}
                </Carousel>
            </Container>
        </ServicesBox>
    );
};

export default Services;
