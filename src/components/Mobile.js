import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(1, 1),
  },
  text: {
    padding: theme.spacing(3, 2),
  },
}));

function Mobile() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} elevation={3}>
        <Typography variant="h5" component="h3" align="center" className={classes.text}>
          Are you using a mobile?
        </Typography>
        <Typography component="p" align="center" className={classes.text}>
          Please allow notifications like this:
          <br/>
          <img alt="" src="http://lorempixel.com/100/100/"/>
        </Typography>
        <Typography component="p" align="center" className={classes.text}>
          Add the PWA to your homescreen
          <br/>
          <img alt="" src="http://lorempixel.com/100/100/"/>
        </Typography>
        <Typography component="p" align="center" className={classes.text}>
          And see the magic:
          <br/>
          <img alt="" src="http://lorempixel.com/100/100/"/>
          <br/>
          <img alt="" src="http://lorempixel.com/100/100/"/>
          <br/>
          <img alt="" src="http://lorempixel.com/100/100/"/>
        </Typography>
      </Paper>
    </div>
  );
}

export default Mobile;