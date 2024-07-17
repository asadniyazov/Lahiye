import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from '../../context/AuthProvider';
import "./Login.scss"


function Login() {
    const { settoken, setdecoded } = useContext(AuthContext);
  const navigate = useNavigate()
  return (
    <>
    <section className="Login">
        <div className="Logingeneral">
          <h1 className="Login_h1">Login</h1>
          <div className="Login_div">
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                  password: Yup.string().required("Required"),
                })}
                onSubmit={(values) => {
                  fetch("http://localhost:3100/login/", {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(values),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);
                      const tokenDecoded = jwtDecode(data.token);

                      console.log(tokenDecoded);
                      Cookies.set("token", data.token, { expires: 1 });
                      settoken(data.token);
                      setdecoded(tokenDecoded);
                      navigate('/')
                    })
                    .catch(function (res) {
                      console.log(res);
                    });
                }}
              >
               <div className="Login_form">
                <Form className="Login_form_div">
                  <div className="Login_divs">
                    <Field  className="Login_inp" name="email" type="email" />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="Login_divs">
                    <Field className="Login_inp" name="password" type="password" />
                    <ErrorMessage name="password" />
                  </div>

                  <button className="Login_btn" type="submit">Submit</button>
                </Form>
              </div>
            </Formik>
            <div className="Login_div_2">
              <p>Don't have an account yet? </p>
              <Link className='Login_Link' to={"/Register"}>Register</Link>
            </div>
          </div>
        </div>
      </section>
        
    </>
  )
}

export default Login