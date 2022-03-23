import React from 'react'
import { Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
// import background_image from './images/background_image.svg';
import background_image from './images/Imagen3.jpg';

const useStyles = makeStyles(theme=>({
  root: {
    backgroundImage: `url(${background_image})`
  }
}))

const App = () => {
  const classes = useStyles();
  return (
    <Grid container component='main' className={classes.root}>

    </Grid>
  )
}

export default App