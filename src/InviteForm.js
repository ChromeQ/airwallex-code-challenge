import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

function InviteForm() {
  return (
    <form noValidate autoComplete="off">
      <TextField
        id="name"
        label="Full name"
        autoFocus
        required
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="email"
        label="Email"
        required
        fullWidth
        margin="normal"
        type="email"
        variant="outlined"
      />
      <TextField
        id="confirm-email"
        label="Confirm email"
        required
        fullWidth
        margin="normal"
        type="email"
        variant="outlined"
      />

      <Button type="submit" variant="contained" color="primary" size="large" endIcon={<SendIcon />} onClick={() => { }} className={classes.button}>
        Send
      </Button>
    </form>
  );
}

export default InviteForm;

