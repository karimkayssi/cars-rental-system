import { Box, Switch, Typography, Paper } from '@mui/material';
import React from 'react';

function ActionBar(props) {
    return (
        <Paper variant="outlined" square sx={{ backgroundColor: '#eeeeee' }}>
            <Box sx={{
                display: 'flex', justifyContent: 'flex-end', alignItems: 'center'
            }}>
                <Typography>Show how many times car is rented</Typography>
                <Switch checked={props.isOn} onChange={props.toggle} />
            </Box>
        </Paper>
    );
}

export default ActionBar;