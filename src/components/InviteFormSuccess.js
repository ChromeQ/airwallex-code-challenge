import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  }
}));

function InviteFormSuccess(props) {
  const { onClickComplete } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography paragraph align="center">You will be one of the first to experience Broccoli &amp; Co. when we launch</Typography>
      <Button variant="contained" color="primary" size="large" onClick={onClickComplete}>Ok</Button>
    </div>
  );
}

InviteFormSuccess.propTypes = {
  onClickComplete: PropTypes.func.isRequired
};

export default InviteFormSuccess;