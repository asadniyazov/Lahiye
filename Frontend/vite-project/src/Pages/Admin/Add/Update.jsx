import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../../context/AuthProvider';


function Update() {
    let { id } = useParams();
    const { token } = useContext(AuthContext);

  const navigate = useNavigate();
  const [editProducts, setEditProducts] = useState(null)

  useEffect(() => {
    getById()
  }, [])
  

  async function getById() {
    const res = await fetch("http://localhost:3100/users/"+id,{headers: { Authorization: token }});
    const data = await res.json();
    setEditProducts(data)
  }

  return (
    <>
{editProducts && <Formik
       initialValues={{ email: editProducts.email, password:editProducts.password, role: editProducts.role }}
       validationSchema={Yup.object({
        email: Yup.string()
           .required('Required'),
           password: Yup.string()
           .required('Required'),
           role: Yup.string().required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {


        async function getPostProduct() {
          const res = await fetch("http://localhost:3100/users/"+id,{
            method:"put",
            headers: { Authorization: token },
            body:JSON.stringify(values)
          })
          const data =await res.json()
        }
        getPostProduct()
        
         setTimeout(() => {

           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);

       }}
     >
 <div >
       <Form >
         <label htmlFor="email">email</label>
         <Field name="email" type="text" />
         <ErrorMessage name="email" />
 
         <label htmlFor="password">password</label>
         <Field name="password" type="text" />
         <ErrorMessage name="password" />
 
         <label htmlFor="role">role </label>
         <Field name="role" type="text" />
         <ErrorMessage name="role" />
 
         <button type="submit">Submit</button>
       </Form>
       </div>
     </Formik>}
   </>

    
  )
}

export default Update