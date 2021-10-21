import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import AudiImg from '../assets/audi.jpg';
import BmwImg from '../assets/bmw.jpeg';
import LamboImg from '../assets/Lambo.jpg';
import MercedesImg from '../assets/Mercedes.jpg';
import RRImg from '../assets/RR.jpg';
import ToyotaImg from '../assets/toyota.jpg';
import { useTheme } from '@mui/material/styles';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const data = [
    {
        label: 'Audi',
        imgPath: AudiImg,
        price: 100,
        rented: 3,
    },
    {
        label: 'BMW',
        imgPath: BmwImg,
        price: 120,
        rented: 19,
    },
    {
        label: 'Lambo',
        imgPath: LamboImg,
        price: 800,
        rented: 0,
    },
    {
        label: 'Marcedes',
        imgPath: MercedesImg,
        price: 200,
        rented: 5,
    },
    {
        label: 'RR',
        imgPath: RRImg,
        price: 400,
        rented: 1,
    },
    {
        label: 'Toyota',
        imgPath: ToyotaImg,
        price: 80,
        rented: 1,
    },
];

function Carousel({ expanded }) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = data.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', paddingLeft: '10px', paddingRight: '10px' }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        width: "100%",
                        bgcolor: 'background.default',
                        flex: 1,
                        textAlign: 'left'
                    }}
                >
                    <Typography>{data[activeStep].label}</Typography>
                </Paper>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                    }}>
                    {expanded && (
                        <Typography style={{
                            flex: 1,
                            textAlign: 'right',
                        }}>Rented {data[activeStep].rented} times</Typography>
                    )}
                </Paper>
            </Box>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {data.map((step, index) => (
                        <div key={step.label} style={{
                            width: '100%',
                            height: '100%',
                        }}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Link to={"/car/" + step.label}>
                                    <Box
                                        component="img"
                                        sx={{
                                            display: 'block',
                                            overflow: 'hidden',
                                            width: '100%',
                                            height: '73vh',
                                            objectFit: 'cover',
                                            cursor: 'pointer'
                                        }}
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                </Link>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </div>
        </Box>
    );
}

export default Carousel;