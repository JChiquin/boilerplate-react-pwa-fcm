import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Typography } from '@material-ui/core';
import { askForPermissioToReceiveNotifications } from '../push-notification';

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
  const [values, setValues] = React.useState({
    permission: !!localStorage.tokenDevice
  });
  
  const callbackPermission = () => {
    setValues({ ...values, permission: true });
  }

  return (
    <div>
      <Paper className={classes.root} elevation={3}>
        <Typography variant="h4" component="h3" align="center" className={classes.text}>
          Welcome to React PWA with FCM
        </Typography>
        <Typography component="p" align="center" className={classes.text}>
          First at all, you need to allow notifications
          <br/>
          <Button disabled={values.permission} onClick={() => askForPermissioToReceiveNotifications(callbackPermission)} variant="contained" color="primary">
            {values.permission ? "It's ready!" : "Click Me!"}
          </Button>
        </Typography>
      </Paper>
    </div>
  );
}

export default Permission;