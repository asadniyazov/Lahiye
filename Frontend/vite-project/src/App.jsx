import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./Pages/User/Home/Home";
import About from "./Pages/User/About/About";
import Contact from "./Pages/User/Contact/Contact";
import Films from "./Pages/User/Films/Films";
import Mainpovider from "./context/Mainprovider";
import Recommendation_Robot from "./Pages/User/RecommendationRobot/Recommendation_Robot";
import Join from "./Pages/User/Join/Join";
import AuthProvider from "./context/AuthProvider";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/User/Profile/Profile";
import Privateroute from "./routes/Privateroute";
import Admin from "./Pages/Admin/Adminpanel/Admin";
import Detail from "./Pages/User/Detail/Detail";
import FilmAdmin from "./Pages/Admin/Films/FilmAdmin/FilmAdmin";
import Update from "./Pages/Admin/Add/Update";

function App() {
  return (
    <>
      <Mainpovider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" index element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Films" element={<Films />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Join" element={<Join />} />
                <Route
                  path="Recommendation_Robot"
                  element={<Recommendation_Robot />}
                />
                <Route path="detail/:id" element={<Detail />} />
                <Route path="*" element={<h1>No page</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route element={<Privateroute />}>
                  {" "}
                  
                  <Route path="/filmadmin" element={<FilmAdmin />} />
                  <Route path="/profil" element={<Profile />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/update/:id" element={<Update />} />
                </Route>
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </Mainpovider>
    </>
  );
}

export default App;
