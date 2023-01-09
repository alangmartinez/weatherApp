export function useFormValidation({ values }) {
  // We create an object named errors
  const errors = {};

  // Name validation
  if (values.name === "") {
    errors.name = "Name is required.";
  } else if (values.name.length < 3 || values.name.length > 10) {
    errors.name = "Name must be between 4-10 characters long.";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
    errors.name = "Name can only contain letters and spaces.";
  }

  // Surname validation
  if (values.surname === "") {
    errors.surname = "Surname is required.";
  } else if (values.surname.length < 4) {
    errors.surname = "Surame must be at least 4 characters long.";
  } else if (values.surname.length > 40) {
    errors.surname = "Surname must be less than 40 characters long.";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.surname)) {
    errors.surname = "Surname can only contain letters and spaces.";
  }

  // E-mail validation
  if (values.email === "") {
    errors.email = "Email is required.";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
  ) {
    errors.email = "Email adress is invalid.";
  }

  //Telephone validation
  if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.tel)) {
    errors.tel = "Phone number can only contain numbers.";
  } else if (values.tel.length > 14) {
    errors.tel = "Phone number must be less than 14 characters long.";
  } else if (values.tel.length < 8) {
    errors.tel = "Phone number must be at least 8 characters long.";
  }

  // We return the object with it's new props inside it
  return errors;
}
