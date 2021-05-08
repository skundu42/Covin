import React, { useState } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';

const useStyles = makeStyles(styles);
function Map({ mapArray, showMapData }) {
    const classes = useStyles();

    return (
        <Grid container className={classes.map}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                className={classes.mapSvg}
                viewBox="-20 70 650 740"
                onClick={e => { showMapData(e, null, "TT"); }}
            >
                <g>
                    {mapArray.map((path, index) => <path
                        key={path.d}
                        d={path.d}
                        title={path.title}
                        className={path.selected ? `${classes.land} ${classes.landSelected}` : classes.land}
                        onClick={(e) => showMapData(e, index, path.title)}
                    />)}
                </g>
            </svg>
        </Grid>
    );
}

export default Map;