import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: 0
  },
  input: {
    display: 'inline-flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  button: {
    display: 'inline-flex',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
  }
}));

function InviteFormSkeleton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Skeleton animation="wave" variant="rect" height={56} width="100%" className={classes.input} />
      <Skeleton animation="wave" variant="rect" height={56} width="100%" className={classes.input} />
      <Skeleton animation="wave" variant="rect" height={56} width="100%" className={classes.input} />
      <Skeleton animation="wave" variant="rect" height={42} width="100%" className={classes.button} />
    </div>
  );
}

export default InviteFormSkeleton;