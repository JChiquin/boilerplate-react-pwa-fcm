import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(1, 1),
  },
  text: {
    padding: theme.spacing(3, 2),
  },
}));

function Permission() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} elevation={3}>
        <Typography variant="h5" component="h3" align="center" className={classes.text}>
          Welcome to React PWA with FCM
        </Typography>
        <Typography component="p" align="center" className={classes.text}>
          First at all, you need to allow notifications
          <br/>
          <Button variant="contained" color="primary">
            Ask for notifications
          </Button>
        </Typography>
      </Paper>
    </div>
  );
}

export default Permission;