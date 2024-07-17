import React from "react";
import "./Joinsection1.scss";
function Joinsection1() {
  return (
    <>
      <div className="Joinsection1">
        <div className="Joinsection1_container">
          <h1 className="Joinsection1_h1">Join Us</h1>
          <div className="Joinsection1_divs">
            <div className="Joinsection1_div">
              <p className="Joinsection1_div_p1">
                You can apply to take a place in our ever-growing team, take
                part in the broadcasting process of films and access more series
                faster. You can become a part of our team by choosing one of the
                tasks listed below that suits your skills.
              </p>
            </div>
            <div className="Joinsection1_div_boxs">
              <div className="Joinsection1_div_box">
                <div className="Joinsection1_div_box1">Tranlator</div>
                <ul className="Joinsection_div_box_ul">
                  <li className="Joinsection1_div_box_li"> <i class="fa-solid fa-check"></i>Having a sufficient level of English</li>
                  <li className="Joinsection1_div_box_li">
                  <i class="fa-solid fa-check"></i> Having enough time to translate at least 1 episode a week
                  </li>
                  <li className="Joinsection1_div_box_li"> <i class="fa-solid fa-check"></i>Being responsible and open to criticism</li>
                </ul>
                <button className="Joinsection_div_box_btn">Join Us</button>
              </div>

              <div className="Joinsection1_div_box">
                <div className="Joinsection1_div_box1">Uploader</div>
                <ul className="Joinsection_div_box_ul">
                  <li className="Joinsection1_div_box_li"> <i class="fa-solid fa-check"></i>Having personal maturity</li>
                  <li className="Joinsection1_div_box_li">
                  <i class="fa-solid fa-check"></i> Being able to adapt within the team
                  </li>
                  <li className="Joinsection1_div_box_li"> <i class="fa-solid fa-check"></i>
                  A computer with high upload speed or VDS/VPS</li>
                </ul>
                <button className="Joinsection_div_box_btn">Join Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Joinsection1;
