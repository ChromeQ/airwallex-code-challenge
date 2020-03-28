import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import broccoli from './img/broccoli.svg'; // Free icon from https://www.flaticon.com/free-icon/broccoli_1135560

const useStyles = makeStyles(theme => ({
  logo: {
    border: `3px solid ${theme.palette.primary.dark}`,
    backgroundColor: theme.palette.common.white,
    display: 'inline-block',
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
    height: theme.spacing(4),
    width: theme.spacing(4)
  },
  h1: {
    color: theme.palette.common.white,
    fontSize: theme.spacing(5),
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase'
  }
}));

function AppHeader() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" wrap="nowrap">
      <Avatar alt="Broccoli & Co. Logo" src={broccoli} className={classes.logo} />
      <Typography variant="h1" display="inline" className={classes.h1}>Broccoli &amp; Co.</Typography>
    </Grid>
  );
}

export default AppHeader;

