function useLogInValidation({ values }) {
  const errors = {};
  if (values.user.length === 0) {
    errors.user = "User is required";
  } else {
    if (values.user.length < 4 || values.user.length > 10) {
      errors.user = "User must be between 4-10 characters long";
    }
  }
  if (values.password.length === 0) {
    errors.password = "Password is required";
  } else {
    if (values.password.length < 4 || values.password.length > 10) {
      errors.password = "Password must be between 4-10 characters long";
    }
  }

  return errors;
}

export default useLogInValidation;