import React, { useContext } from "react";
import { Maincontext } from "../../context/Mainprovider";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

function Navbar() {
  const { isHiddenUl, HiddenBtnClick } = useContext(Maincontext);
  const { token, logOut, decoded } = useContext(AuthContext);
  return (
    <>
      <header>
        <nav>
          <div className="UserNavbar">
            <div className="UserNavbar_container">
              <div className="UserNavbar_container_h1">
                <i>Filmopolis</i>
              </div>
              <div className="visible_ul">
                <ul className="UserNavbar_container_ul">
                  {decoded && decoded.role === "admin" ? (
                    <>
                      <li>
                        <Link className={"visible_ul_a"} to={"/admin"}>
                          User List
                        </Link>
                      </li>

                      <li>
                        <Link className={"visible_ul_a"} to={"/filmadmin"}>
                          Film List
                        </Link>
                      </li>
                      <li>
                        <Link className={"visible_ul_a"} to={"/filmadd"}>
                          Film Add
                        </Link>
                      </li>

                      <li><button className="Profilesection1_div_btn" onClick={logOut}>Log Out</button></li>
                    </>
                  ) : null}
                  {token ? (
                    <>{/* <button onClick={logOut}>Log Out</button> */}</>
                  ) : (
                    <>
                      <li>
                        <Link className={"visible_ul_a"} to={"/login"}>
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link className={"visible_ul_a"} to={"/register"}>
                          Register
                        </Link>
                      </li>
                    </>
                  )}

                  {decoded && decoded.role === "user" ? (
                    <>
                      <li>
                        <Link className={"visible_ul_a"} to={"/profil"}>
                          Profil
                        </Link>
                      </li>
                      <li>
                        <Link className={"visible_ul_a"} to={"/"}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className={"visible_ul_a"} to={"Films"}>
                          Films
                        </Link>
                      </li>
                      <li>
                        <Link className={"visible_ul_a"} to={"About"}>
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={"visible_ul_a"}
                          to={"Recommendation_Robot"}
                        >
                          Recommendation Robot
                        </Link>
                      </li>
                      <li>
                        <Link className={"visible_ul_a"} to={"Contact"}>
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={"visible_ul_a"}
                          to={"https://www.goodreads.com/genres/romance"}
                        >
                          Romance
                        </Link>
                      </li>
                      <li>
                        <Link className={"visible_ul_a"} to={"Join"}>
                          Join Us
                        </Link>
                      </li>
                    </>
                  ) : null}
                </ul>
              </div>
              <div className="button_container">
                <button
                  onClick={HiddenBtnClick}
                  className="UserNavbar_container_button"
                >
                  <i class="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
          <div className={` hidden__ul ${isHiddenUl ? "active" : ""}`}>
            <ul>
              <li>
                <Link className={"visible_ul_a"} to={"/profil"}>
                  Profil
                </Link>
              </li>
              <li>
                <Link className={"visible_ul_a"} to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className={"visible_ul_a"} to={"Films"}>
                  Films
                </Link>
              </li>
              <li>
                <Link to={"About"}>About</Link>
              </li>
              <li>
                <Link to={"Recommendation_Robot"}>Recommendation Robot</Link>
              </li>
              <li>
                <Link to={"Contact"}>Contact</Link>
              </li>
              <li>
                <Link
                  className={"visible_ul_a"}
                  to={"https://www.goodreads.com/genres/romance"}
                >
                  Romance
                </Link>
              </li>
              <li>
                <Link to={"Join"}>Join Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
