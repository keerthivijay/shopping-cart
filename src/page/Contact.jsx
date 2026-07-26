import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import SuccessMessage from "../components/SuccessMessage";
import { validateContact } from "../utils/formValidators.js";

function Contact() {
    const [submitStatus, setSubmitStatus] = useState(false);

    return (
        <>
            <div className="contact">
                <h1>Contact Us</h1>
                <p>Please feel free to reach out to us with any questions or feedback.</p>
                {submitStatus ? <SuccessMessage message="Message sent successfully!" /> : ""}
                <Formik
                    initialValues={{ name: "", email: "", mobile: "", message: "" }}
                    validate={validateContact}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        setSubmitStatus(true);
                        resetForm();
                    }}
                >
                    <Form className="form">
                        <label htmlFor="name">Name:</label>
                        <Field type="text" name="name" id="name" />
                        <ErrorMessage name="name" component="div" className="error" />

                        <label htmlFor="email">E-mail:</label>
                        <Field type="email" name="email" id="email" />
                        <ErrorMessage name="email" component="div" className="error" />

                        <label htmlFor="mobile">Mobile No:</label>
                        <Field type="text" name="mobile" id="mobile" />
                        <ErrorMessage name="mobile" component="div" className="error" />

                        <label htmlFor="message">Message:</label>
                        <Field as="textarea" name="message" id="message" rows="5" />
                        <ErrorMessage name="message" component="div" className="error" />

                        <button className="btn" type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    );
}

export default Contact;