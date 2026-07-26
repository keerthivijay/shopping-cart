export const validateDelivery = (values) => {
        const errors = {};

    if (!values.name.trim()) {
        errors.name = "Name is required";
    }

    if (!values.address.trim()) {
        errors.address = "Address is required";
    }

    if (!values.phone.trim()) {
        errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = "Enter a valid 10-digit phone number";
    }

    return errors;
};

export const validateSignUp = (values) => {
    const errors = {};

    if (!values.name.trim()) {
        errors.name = 'Name is required';
    }

    if (!values.mobile.trim()) {
        errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(values.mobile)) {
        errors.mobile = 'Enter a valid 10-digit mobile number';
    }

    if (!values.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Enter a valid email';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (!values.confirmpassword) {
        errors.confirmpassword = 'Please confirm your password';
    } else if (values.confirmpassword !== values.password) {
        errors.confirmpassword = 'Passwords do not match';
    }

    return errors;
};

export const validateLogin = (values) => {
    const errors = {};

    if (!values.username.trim()) {
        errors.username = "Username is required";
    } else if (values.username.trim().length < 3) {
        errors.username = "Username must be at least 3 characters";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

    return errors;
};

export const validateContact = (values) => {
    const errors = {};

    if (!values.name.trim()) {
        errors.name = "Name is required";
    }

    if (!values.email.trim()) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Enter a valid email";
    }

    if (!values.mobile.trim()) {
        errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(values.mobile)) {
        errors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!values.message.trim()) {
        errors.message = "Message is required";
    }

    return errors;
};