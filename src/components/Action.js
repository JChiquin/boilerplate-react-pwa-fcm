import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
  }
}));

function Action() {
  
  const classes = useStyles();
  
  return (
    <div>
      <Grid
        direction="column"
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Typography variant="h4">
          Congrats!
        </Typography>
        <Typography variant="h4" component="h3">
          You has clicked a notification.
        </Typography>
        
        <Typography component="p">
          <Link to="/">
            Go home
          </Link>
        </Typography>
        
      </Grid>
    </div>
  );
}

export default Action;
