import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';
import googleMapReact from 'google-map-react';

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat:0, lng: 0};

    return(
        <div className={classes.mapContainer}>
            <googleMapReact
                bootstrapURLKeys={{ Key:'AIzaSyCP6UcYMFKr9kU3PL94PhThiXN4f_CJ5f8'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
                >
            </googleMapReact>
        </div>
    );
}

export default Map;