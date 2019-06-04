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
});


class Notification extends React.Component {
    
    state = {
        body: ""
    }
    
    handleChange = ({target : {value}}) => {
        this.setState({body: value})
    }

    render() {
        const { classes } = this.props
        return (
          <div>
            <Paper className={classes.root} elevation={3}>
              <Typography variant="h5" component="h3" align="center" className={classes.text}>
                Now you are ready for playing with notifications
                <br/>
                <TextField
                    id="outlined-name"
                    label="Notification body"
                    value={this.state.body}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    placeholder="Hello world..."
                />
              </Typography>
              <Grid container spacing={1}>
                <Grid container item justify="center" xs={12} md={6}>
                  <Button variant="contained" color="primary">
                    Local Notification
                  </Button>
                </Grid>
                <Grid container item justify="center" xs={12} md={6}>
                  <Button variant="contained" color="primary">
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
