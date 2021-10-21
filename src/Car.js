import React from 'react';
import { useRouteMatch } from 'react-router';
import { data } from './components/Carousel';
import { Box, Typography } from '@mui/material';

export default function Car() {
    const match = useRouteMatch();
    const car = data.filter(car => car.label === match.params.label)[0];


    return (
        <Box>
            <div style={{ textAlign: 'center', margin: 15 }}>
                <Box>
                    <Typography variant="h5">{car.label}</Typography>
                </Box>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src={car.imgPath} height="300" />
            </div>
            <div style={{ textAlign: 'center' }}>
                <Box>
                    <Typography variant="h5">Car description</Typography>
                </Box>
                <Box>
                    <Typography>price: ${car.price}</Typography>
                </Box>
                <Box>
                    <Typography>rented {car.rented} times</Typography>
                </Box>
            </div>
        </Box>
    )
}