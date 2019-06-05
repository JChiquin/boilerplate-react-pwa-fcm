import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(1, 1),
  },
  text: {
    padding: theme.spacing(3, 2),
  },
  imgFull: {
    width: '100%',
    height: '100%',
  },
  border3: {
    border: "solid 3px"
  }
}));

function Desktop() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} elevation={3}>
        <Typography variant="h4" component="h3" align="center" className={classes.text}>
          Are you using a PC?
        </Typography>
        <Typography variant="h6" align="center" className={classes.text}>
          Please allow notifications like this:
          <br/>
          <img className={classNames(classes.imgFull, classes.border3)}  alt="" src="imgs/desktop/desktop6.png"/>
        </Typography>
        <Typography variant="h6" align="center" className={classes.text}>
          Add the PWA to your desktop
          <br/>
          <img className={classes.border3} alt="" src="imgs/desktop/desktop1.png"/>
          <br/>
          <img className={classNames(classes.imgFull, classes.border3)}  alt="" src="imgs/desktop/desktop2.png"/>
        </Typography>
        <Typography variant="h6" align="center" className={classes.text}>
          And see the magic:
          <br/>
          <img className={classes.border3} alt="" src="imgs/desktop/desktop4.png"/>
          <br/>
          <img className={classNames(classes.imgFull, classes.border3)} alt="" src="imgs/desktop/desktop3.png"/>
          <br/>
          <img className={classNames(classes.imgFull, classes.border3)} alt="" src="imgs/desktop/desktop5.png"/>
          <br/>
          <img className={classNames(classes.imgFull, classes.border3)} alt="" src="imgs/desktop/desktop7.png"/>
        </Typography>
      </Paper>
    </div>
  );
}

export default Desktop;