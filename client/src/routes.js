import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { ThemeContext } from "./context/ThemeContext";

import About from "./pages/About";
import Booking from "./pages/Booking";
import Doctors from "./pages/Doctors";
import Clinics from "./pages/Clinics";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileDoctor from "./pages/ProfileDoctor";
import Register from "./pages/Register";
import NotFound from "./utils/NotFound/NotFound";
import Call from "./pages/Call";
import { useSelector } from "react-redux";
import SubFolder from "./components/ProfileComponents/Patient/Records/SubFolder/SubFolder";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms&Conditions";
import VideoChat from "./pages/VideoChat";


function Body() {
  const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth

  return (
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path='/profile/patient' element={ isLogged ? <Profile /> : <Login />} />
              <Route path='/subfolder/:id' element={ <SubFolder/>} />
              <Route path="/profile/doctor/:id" element={<ProfileDoctor />} />
              <Route path="/clinics" element={<Clinics />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/about" element={<About/>} />
              <Route path="/book/:id" element={isLogged ? <Booking /> : <Login />} />
              <Route path="/call" element={isLogged ? <Call /> : <Login />} />
              <Route path="/chat" element={isLogged ? <VideoChat /> : <Login />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
  );
}

export default Body;
