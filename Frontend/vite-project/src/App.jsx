import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./layout/Layout";
import Home from "./Pages/User/Home/Home";
import About from "./Pages/User/About/About";
import Contact from "./Pages/User/Contact/Contact";
import Films from "./Pages/User/Films/Films";
import Mainpovider from "./context/Mainprovider";
import Recommendation_Robot from "./Pages/User/RecommendationRobot/Recommendation_Robot";
import Join from "./Pages/User/Join/Join";


function App() {
 

  return (
    <>
    <Mainpovider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Films" element={<Films />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Join" element={<Join />} />
          <Route path="Recommendation_Robot" element={<Recommendation_Robot/>} />
         
          <Route path="*" element={<h1>No page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Mainpovider>
    </>
  )
}

export default App
