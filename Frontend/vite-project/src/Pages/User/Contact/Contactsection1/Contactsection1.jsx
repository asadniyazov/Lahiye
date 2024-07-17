import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Contactsection1.scss";

function Contactsection1() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    fetch("http://localhost:3100/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Email sent:", data);
        resetForm();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <section className="Contactsection_hero">
        <div className="Contactsection_container">
          <h1 className="Contactsection_h1">Contact with us</h1>
        </div>
        <div className="Contactsection_contactform_container">
          
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          className='Formik'
        >
          <div className="Contactsection_form">
          <Form className="Contactsection_form_container" >
            <div className="Contact_div">
              <Field type="text" id="name" name="name" placeholder="Name" className="contact_input" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="Contact_div">
              <Field type="email" id="email" name="email" placeholder="Email" className="contact_input" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="Contact_div">
              <Field
                as="textarea"
                id="message"
                name="message"
                className="contact_input"
                placeholder="Message"
              />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <button className="contact_btn" type="submit">Send</button>
          </Form>
          </div>
        </Formik>
        </div>
      </section>
    </>
  );
}

export default Contactsection1;
