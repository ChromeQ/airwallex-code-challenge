import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Modal from './Modal';

const InviteForm = React.lazy(() => import('./InviteForm'));

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  heading: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2)
  }
}));

function AppInvite() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.heading}>A better way to enjoy every day.</Typography>

      <Typography variant="body1" paragraph>Be the first to know when we launch</Typography>

      <Button variant="contained" color="primary" size="large" onClick={handleClickOpen}>Request an invite</Button>

      <Modal open={open} onClose={handleClose} title="Request an invite">
        <React.Suspense fallback={<div>Loading....</div>}>
          <InviteForm />
        </React.Suspense>
      </Modal>
    </div>
  );
}

export default AppInvite;

