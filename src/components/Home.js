import React from 'react';
import { Grid } from '@material-ui/core';
import Permission from './Permission'
import Mobile from './Mobile'
import Desktop from './Desktop'
import Notification from './Notification'

function Home() {
  return (
    <div>
      <Permission/>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Mobile/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Desktop/>
        </Grid>
      </Grid>
      <Notification/>
    </div>
  );
}

export default Home;
