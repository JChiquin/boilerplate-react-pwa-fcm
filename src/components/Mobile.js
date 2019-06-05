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
  },
  border3: {
    border: "solid 3px"
  }
}));

function Mobile() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} elevation={3}>
        <Typography variant="h4" component="h3" align="center" className={classes.text}>
          Are you using a mobile?
        </Typography>
        <Typography variant="h6" align="center" className={classes.text}>
          Please allow notifications like this:
          <br/>
          <img  className={classNames(classes.imgFull, classes.border3)} alt="" src="imgs/mobile/mobile8.jpg"/>
        </Typography>
        <Typography variant="h6" align="center" className={classes.text}>
          Add the PWA to your homescreen
          <br/>
          <img  className={classNames(classes.imgFull, classes.border3)} alt="" src="imgs/mobile/mobile1.jpg"/>
          <br/>
          <img  className={classNames(classes.imgFull, classes.border3)} alt="" src="imgs/mobile/mobile2.jpg"/>
        </Typography>
        <Typography variant="h6" align="center" className={classes.text}>
          And see the magic:
          <br/>
          <img  className={classNames(classes.imgFull, classes.border3)} alt="" src="imgs/mobile/mobile3.jpg"/>
          <br/>
          <img  className={classNames(classes.imgFull, classes.border3)} alt="" src="imgs/mobile/mobile4.jpg"/>
          <br/>
          <img  className={classNames(classes.imgFull, classes.border3)} alt="" src="imgs/mobile/mobile5.jpg"/>
          <br/>
          <img  className={classNames(classes.imgFull, classes.border3)} alt="" src="imgs/mobile/mobile6.jpg"/>
          <br/>
          <img  className={classNames(classes.imgFull, classes.border3)} alt="" src="imgs/mobile/mobile7.jpg"/>
          <br/>
          <img  className={classNames(classes.imgFull, classes.border3)} alt="" src="imgs/mobile/mobile9.jpg"/>
        </Typography>
      </Paper>
    </div>
  );
}

export default Mobile;