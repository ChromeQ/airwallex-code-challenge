// Overly Simple Email Regex - http://regexlib.com/REDetails.aspx?regexp_id=16
const emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export default function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Full name is required';
  } else if (values.name.length < 3) {
    errors.name = 'Your name is too short';
  }

  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!emailRegEx.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.confirmEmail) {
    errors.confirmEmail = 'Confirmation email address is required';
  } else if (!emailRegEx.test(values.confirmEmail)) {
    errors.confirmEmail = 'Confirmation email address is invalid';
  } else if (values.confirmEmail !== values.email) {
    errors.confirmEmail = 'Confirmation email address does not match';
  }

  return errors;
};
