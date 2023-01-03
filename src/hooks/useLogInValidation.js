function useLogInValidation(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "E-mail is required";
  } else {
    if (values.email.length < 4) {
      errors.email = "E-mail must be longer then 4 characters";
    }
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else {
    if (values.password.length < 4 || values.password.length > 10) {
      errors.password = "Password must be between 4-10 characters long";
    }
  }

  return errors;
}

export default useLogInValidation;
