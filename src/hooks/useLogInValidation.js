function useLogInValidation(values) {
  const errors = {};
  const user = JSON.parse(localStorage.getItem("user"));

  if (!values.email) {
    errors.email = "E-mail is required";
  } else if (values.email.length < 4) {
    errors.email = "E-mail must be longer then 4 characters";
  } else if (values.email !== user.email) {
    errors.email = "E-mail is not registered";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4 || values.password.length > 10) {
    errors.password = "Password must be between 4-10 characters long";
  } else if (values.password !== user.password) {
    errors.password = "Password is incorrect";
  }

  return errors;
}

export default useLogInValidation;
