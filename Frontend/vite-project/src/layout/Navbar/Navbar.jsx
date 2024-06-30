import React, { useContext } from 'react'
import { Maincontext } from '../../context/Mainprovider'
import  "./Navbar.scss"
import { Link  } from 'react-router-dom'

function Navbar() {
    const {isHiddenUl,HiddenBtnClick }=useContext(Maincontext)
  return (
   <>
    <header>
<nav>
     <div className='UserNavbar'>
        <div className='UserNavbar_container'>
            <div className='UserNavbar_container_h1'><i>Filmopolis</i></div>
            <div className='visible_ul'>
            <ul className='UserNavbar_container_ul'>
              <li><Link  className={"visible_ul_a"} to={"/"}>Home</Link></li>
              <li><Link  className={"visible_ul_a"} to={"About"}>About</Link></li>
              <li><Link  className={"visible_ul_a"} to={"Recommendation_Robot"}>Recommendation Robot</Link></li>
              <li><Link  className={"visible_ul_a"} to={"Contact"}>Contact</Link></li>
              <li><Link  className={"visible_ul_a"} to={"https://www.goodreads.com/genres/romance"}>Romance</Link></li>
              <li><Link  className={"visible_ul_a"} to={"Join"}>Join Us</Link></li>
            </ul>
            </div>
            <div className='button_container'>
            <button onClick={HiddenBtnClick} className='UserNavbar_container_button'><i class="fa-solid fa-bars"></i></button>
            </div>
        </div>
     </div>
            <div className={` hidden__ul ${isHiddenUl ? "active" : ""}`}>
                <ul >
                  <li><Link to={"/"}>Home</Link></li>
                  <li><Link to={"About"}>About</Link></li>
                  <li><Link  to={"Recommendation_Robot"}>Recommendation Robot</Link></li>
                  <li><Link to={"Contact"}>Contact</Link></li>
                  <li><Link  className={"visible_ul_a"} to={"https://www.goodreads.com/genres/romance"}>Romance</Link></li>
                  <li><Link to={"Join"}>Join Us</Link></li>
                </ul>
            </div>
</nav>
     </header>
   </>
  )
}

export default Navbar