import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

import useFormValidation from '../hooks/useFormValidation';
import useEndpoint from '../hooks/useEndpoint';
import validate from '../inviteFormValidationRules';
import Spinner from './Spinner';

const InviteFormSuccess = React.lazy(() => import('./InviteFormSuccess'));

const inviteFormUrl = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
  }
}));

function InviteForm(props) {
  const { onSubmit, onComplete } = props;
  const { handleBlur, handleChange, handleSubmit, dirty, errors, values } = useFormValidation(handleSubmitSuccess, validate);
  const { status, errorMessage, isPending, request } = useEndpoint(inviteFormUrl, 'POST');
  const classes = useStyles();

  async function handleSubmitSuccess() {
    if (isPending) {
      return;
    }

    await request({
      name: values.name,
      email: values.email
    });

    if (status === 200 && !errorMessage) {
      onSubmit();
    }
  }

  if (isPending) {
    return <Spinner />;
  } else if (status === 200 && !errorMessage) {
    return (
      <React.Suspense fallback={<Spinner />}>
        <InviteFormSuccess onClickComplete={onComplete} />
      </React.Suspense>
    );
  } else {
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
            className: errors.name ? 'input-error' : '',
            endAdornment: (errors.name || dirty.name) && (
              <InputAdornment position="end">
                {
                  errors.name ? <ClearIcon color="error" className="isInvalid" /> :
                    dirty.name && <CheckIcon color="primary" className="isValid" />
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
            className: errors.email ? 'input-error' : '',
            endAdornment: (errors.email || dirty.email) && (
              <InputAdornment position="end">
                {
                  errors.email ? <ClearIcon color="error" /> :
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
            className: errors.confirmEmail ? 'input-error' : '',
            endAdornment: (errors.confirmEmail || dirty.confirmEmail) && (
              <InputAdornment position="end">
                {
                  errors.confirmEmail ? <ClearIcon color="error" /> :
                    dirty.confirmEmail && <CheckIcon color="primary" />
                }
              </InputAdornment>
            )
          }}
        />

        <Button
          type="submit"
          color="primary"
          size="large"
          variant="contained"
          disabled={isPending}
          fullWidth
          endIcon={<SendIcon />}
          className={classes.button}
        >
          Send
        </Button>

        {errorMessage &&
          <Typography paragraph align="center" color="error">Oops... {errorMessage}</Typography>
        }
      </form>
    );
  }
}

InviteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default InviteForm;
