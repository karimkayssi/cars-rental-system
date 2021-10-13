import React, { useState } from 'react';
import './App.css';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import AudiImg from './assets/audi.jpg';
import BmwImg from './assets/bmw.jpeg';
import LamboImg from './assets/Lambo.jpg';
import MercedesImg from './assets/Mercedes.jpg';
import RRImg from './assets/RR.jpg';
import ToyotaImg from './assets/toyota.jpg';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
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

function App() {

  const [expanded, setExpanded] = useState(true);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <div className="App">
      <h1>Car Rental Services</h1>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Typography>Show how many times car is rented</Typography>
        <Switch checked={expanded} onChange={() => setExpanded(!expanded)} />
      </Box>
      <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
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
              justifyContent: 'spaceBetween',
              bgcolor: 'background.default',
            }}
          >
            <Typography>{images[activeStep].label}</Typography>
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
              <div>
                <Typography>Rented {images[activeStep].rented} times</Typography>
              </div>
            )}
          </Paper>
        </Box>
        <AutoPlaySwipeableViews
          animateHeight
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                    minHeight: 400,
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
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
      </Box>
    </div>
  );
}

export default App;
