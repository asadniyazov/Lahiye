import React, { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import "./Profilesection1.scss"

function Profilesection1() {
  const { logOut, decoded } = useContext(AuthContext);
  return (
    <>
      <section className="Profilesection1">
        <div className="Profilesection1_div">
          <h1 className="Profilesection1_h1">Your Profile </h1>
          <div className="Profilesection1_div_div">Your email : {decoded.email}</div>
         
          <div className="Profilesection1_div_div">
            {" "}
            You want log out:
            <button className="Profilesection1_div_btn" onClick={logOut}>Log Out</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profilesection1;
