import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Button, Typography, Grid, TextField } from '@material-ui/core';


const styles = theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(1, 1),
    },
    text: {
        padding: theme.spacing(3, 2),
    },
    textField: {
      width: '210px'
    }
});


class Notification extends React.Component {
    
    state = {
        body: "Hello world!",
        time: 0,
        sending: false
    }
    
    handleChange = ({target : {value, name}}) => {
        this.setState({[name]: value})
    }
    
    handleFirebaseNotification = () => {
      this.setState({sending: true})
      setTimeout(() => {
        fetch("https://fcm.googleapis.com/fcm/send",{
          method: "POST",
          headers: {
            "content-type": "application/json",
            "Authorization": "key=AAAAID3tbrw:APA91bHdxflOcGmr0k9XgESzicCTBFbkuqWDYtK0_YY9LVPdqvUOExxQBOLq_ndAJL6_P9vRZbwCkh4fNq-8trHqD-dXgfhMDiFJshQ8KnWvL0KGs25GicifAvJhM1XYyXM5f2TMs9JK"
          },
          body: JSON.stringify({
            "notification": {
          		"title": "Firebase notification (background - clickable)",
          		"body": this.state.body,
          		"icon": "icons/48.png",
          		"click_action": "./action"
          	},
          	"time_to_live": 2419200,
          	"to": localStorage.tokenDevice
          })
        })
        .then(console.log)
        .catch(console.error)
        .finally(() => this.setState({sending: false}))
      }, this.state.time * 1000) //Parse seconds to ms
    }
    
    handleLocalNotification = () => {
      this.setState({sending: true})
      setTimeout(() => {
        navigator.serviceWorker.getRegistration().then((reg) => {
          var options = {
            body: this.state.body,
            icon: "icons/48.png",
            vibrate: [100, 50, 100],
            data: {
              dateOfArrival: Date.now(),
              primaryKey: 1
            }
          };
          reg.showNotification('Local Notification', options);
        })
        .catch(console.error)
        .finally(() => this.setState({sending: false}))
      }, this.state.time * 1000) //Parse seconds to ms
    }

    render() {
        const { classes } = this.props
        return (
          <div>
            <Paper className={classes.root} elevation={3}>
              <Typography variant="h4" component="h3" align="center" className={classes.text}>
                Now you are ready for playing with notifications
                <br/>
                <TextField
                    name="body"
                    label="Notification body"
                    value={this.state.body}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    disabled={this.state.sending}
                />
                <br/>
                <TextField
                    type="number"
                    className={classes.textField}
                    name="time"
                    label="Seconds to show notification"
                    value={this.state.time}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    helperText="With this you can try minimizing the app and still seeing the notification"
                    disabled={this.state.sending}
                    inputProps={{
                      min: 0,
                      max: 15
                    }}
                />
              </Typography>
              <Grid container spacing={1}>
                <Grid container item justify="center" xs={12} md={6}>
                  <Button disabled={this.state.sending} onClick={this.handleLocalNotification} variant="contained" color="primary">
                    Local Notification
                  </Button>
                </Grid>
                <Grid container item justify="center" xs={12} md={6}>
                  <Button disabled={this.state.sending} onClick={this.handleFirebaseNotification} variant="contained" color="primary">
                    Firebase Notification
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
        );
    }
}
export default withStyles(styles)(Notification);
