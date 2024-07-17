import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { Link } from "react-router-dom";

function Admin() {
  const [products, setProducts] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    try {
      const res = await fetch("http://localhost:3100/users", {
        headers: { Authorization: token },
      });
      if (!res.ok) {
        throw new Error("HTTP error " + res.status);
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async function DeleteById(id) {
    const res= await fetch("http://localhost:3100/users/"+id,{method:"delete",headers: { Authorization: token },})
    getAllProducts()
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>role</th>
            <th>password</th>
            <th>delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {products.map((x) => (
            <tr key={x._id}>
              <td>{x._id}</td>
              <td>{x.email}</td>
              <td>{x.role}</td>
              <td>{x.password}</td>
              <td> <button onClick={()=>DeleteById(x._id)}> Delete</button></td> {/* Silme butonu eklemeyi unutmayın */}
              <td><Link to={`/update/${x._id}`}> Update</Link></td> {/* Güncelleme butonu eklemeyi unutmayın */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;

