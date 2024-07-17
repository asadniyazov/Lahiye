import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./Register.scss";

function Register() {
  const navigate = useNavigate();
  return (
    <>
      <section className="Register">
        <div className="registergeneral">
          <h1 className="Register_h1">Register</h1>
          <div className="Register_div">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string().required("Required"),
              })}
              onSubmit={(values) => {
                fetch("http://localhost:3100/register", {
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify(values),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    navigate("/login");
                  })
                  .catch(function (res) {
                    console.log(res);
                  });
              }}
            >
              <div className="Register_form">
                <Form className="Register_form_div">
                  <div className="Register_divs">
                    <Field  className="Register_inp" name="email" type="email" />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="Register_divs">
                    <Field className="Register_inp" name="password" type="password" />
                    <ErrorMessage name="password" />
                  </div>

                  <button className="Register_btn" type="submit">Submit</button>
                </Form>
              </div>
            </Formik>
            <div className="Register_div_2">
              <p>Do you already have an account?</p>
              <Link className="Register_Link" to={"/login"}>Login</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
