import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  heading: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2)
  }
}));

function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.heading}>A better way to enjoy every day.</Typography>
      <Typography variant="body1" paragraph>Be the first to know when we launch</Typography>
      <Button variant="contained" color="primary" size="large">Request an invite</Button>
    </div>
  );
}

export default AppHeader;

