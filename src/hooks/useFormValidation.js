export function useFormValidation({ values }) {
  // We create an object named errors
  const errors = {};

  // Name validation
  if (!values.name) {
    errors.name = "Please enter a name.";
  } else if (values.name.length < 3 || values.name.length > 10) {
    errors.name = "Name must be between 4-10 characters long.";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
    errors.name = "Name can only contain letters and spaces.";
  }

  // Surname validation
  if (!values.surname) {
    errors.surname = "Please enter a surname";
  } else if (values.surname.length < 4 || values.surname.length > 10) {
    errors.surname = "Surame must be between 4-10 characters long.";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.surname)) {
    errors.surname = "Surname can only contain letters and spaces.";
  }

  // E-mail validation
  if (!values.email) {
    errors.email = "Please enter an e-mail.";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
  ) {
    errors.email = "Please enter a valid e-mail account.";
  }

  //Telephone validation
  if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.tel)) {
    errors.tel = "Phone number can only contain numbers.";
  } else if (values.tel.length > 14) {
    errors.tel = "Phone number must have more than 14 numbers.";
  }

  // We return the object with it's new props inside it
  return errors;
}
