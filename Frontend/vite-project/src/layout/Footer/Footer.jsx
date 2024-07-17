import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { AuthContext } from "../../context/AuthProvider";

function Footer() {
  const { decoded } = useContext(AuthContext);
  return (
    <>
      {decoded && decoded.role === "user" ? (
        <>
          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h2>Filmopolis</h2>
                  <p>
                  This site exists for you to watch movies.
                  </p>
                </div>
                <div className="col-md-4">
                  <h3>Quick Links</h3>
                  <ul className="footer-links">
                    <li>
                      <Link >Home</Link>
                    </li>
                    <li>
                      <Link >Films</Link>
                    </li>
                    
                    <li>
                      <Link >About Us</Link>
                    </li>
                    <li>
                      <Link >Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h3>Social Media</h3>
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  <p>
                    &copy; {new Date().getFullYear()} Film Site. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </>
      ) : null}
    </>
  );
}

export default Footer;
