import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const useStyles = makeStyles(theme => {
  console.log(theme);

  return ({
    root: {
      height: '100vh'
    },
    header: {
      backgroundColor: lightGreen[400],
      padding: theme.spacing(2)
    },
    content: {
      padding: theme.spacing(2)
    },
    footer: {
      backgroundColor: theme.palette.grey[800],
      padding: theme.spacing(2)
    }
  });
});

function App() {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="space-between" className={classes.root}>

      <Grid item container component="header" justify="center" className={classes.header}>
        <Grid item xs sm={10} md={8}>
          <AppHeader />
        </Grid>
      </Grid>

      <Grid xs item container justify="center" className={classes.content}>
        <Grid xs item container sm={10} md={8} alignItems="center">
          This is the content
        </Grid>
      </Grid>

      <Grid item container component="footer" justify="center" className={classes.footer}>
        <Grid item xs sm={10} md={8}>
          <AppFooter />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
