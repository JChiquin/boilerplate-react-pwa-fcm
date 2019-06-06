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
    permission: !!localStorage.tokenDevice,
    asking: false
  });
  
  const callbackPermission = () => {
    setValues({ ...values, permission: true, asking: false });
  }

  const handleButtonClick = () => {
    setValues({ ...values, asking: true });
    askForPermissioToReceiveNotifications(callbackPermission)
  }

  const labelButton = () => {
    const {permission, asking} = values
    if(asking)
      return "Wait..."
    else if(permission)
      return "It's ready!"
    else
      return "Click Me!"
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
          <Button disabled={values.permission || values.asking} onClick={handleButtonClick} variant="contained" color="primary">
            {labelButton()}
          </Button>
        </Typography>
      </Paper>
    </div>
  );
}

export default Permission;