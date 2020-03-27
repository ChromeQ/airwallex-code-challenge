import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    textAlign: 'center'
  },
  icon: {
    marginBottom: theme.spacing(0.5) * -1
  }
}));

function AppFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Made with <FavoriteIcon color="secondary" fontSize="small" className={classes.icon} /> in Melbourne, AUS
      <br />
      by Dav Hill as a coding challenge for Airwallex
    </div>
  );
}

export default AppFooter;

