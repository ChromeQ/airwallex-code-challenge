import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import SendIcon from '@material-ui/icons/Send';

import useInviteForm from './useInviteForm';
import validate from './InviteFormValidationRules';

function InviteForm() {
  const { handleBlur, handleChange, handleSubmit, dirty, errors, values } = useInviteForm(handleSubmitSuccess, validate);

  function handleSubmitSuccess() {
    console.log(values);
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Full name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name || ''}
        autoFocus
        required
        fullWidth
        error={!!errors.name}
        helperText={errors.name}
        margin="normal"
        variant="outlined"
        InputProps={{
          endAdornment: (errors.name || dirty.name) && (
            <InputAdornment position="end">
              {
                errors.name ? <ClearIcon color="secondary" /> :
                  dirty.name && <CheckIcon color="primary" />
              }
            </InputAdornment>
          )
        }}
      />

      <TextField
        id="email"
        name="email"
        label="Email"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email || ''}
        required
        fullWidth
        error={!!errors.email}
        helperText={errors.email}
        margin="normal"
        type="email"
        variant="outlined"
        InputProps={{
          endAdornment: (errors.email || dirty.email) && (
            <InputAdornment position="end">
              {
                errors.email ? <ClearIcon color="secondary" /> :
                  dirty.email && <CheckIcon color="primary" />
              }
            </InputAdornment>
          )
        }}
      />

      <TextField
        id="confirm-email"
        label="Confirm email"
        name="confirmEmail"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.confirmEmail || ''}
        required
        fullWidth
        error={!!errors.confirmEmail}
        helperText={errors.confirmEmail}
        margin="normal"
        type="email"
        variant="outlined"
        InputProps={{
          endAdornment: (errors.confirmEmail || dirty.confirmEmail) && (
            <InputAdornment position="end">
              {
                errors.confirmEmail ? <ClearIcon color="secondary" /> :
                  dirty.confirmEmail && <CheckIcon color="primary" />
              }
            </InputAdornment>
          )
        }}
      />

      <Button type="submit" variant="contained" color="primary" size="large" endIcon={<SendIcon />} onClick={() => { }}>
        Send
      </Button>
    </form>
  );
}

export default InviteForm;
