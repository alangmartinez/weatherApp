function useSignUpValidation ({ values }) {
    const errors = {};

    if (values.name === '') {
        errors.name = 'Name is required';
    } else if (values.name < 3) {
        errors.name = 'Name must be at least 3 characters';
    } else if (values.name > 15) {
        errors.name = 'Name must be less than 15 characters';
    }

    if (values.surname === '') {
        errors.surname = 'Surname is required';
    } else if (values.surname < 3) {
        errors.surname = 'Surname must be at least 3 characters';
    } else if (values.surname > 15) {
        errors.surname = 'Surname must be less than 15 characters';
    }

    if (values.email === '') {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (values.password === '') {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
};

export default useSignUpValidation;
