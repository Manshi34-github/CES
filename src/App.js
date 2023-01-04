import "./App.css";
import Homepage from "./Pages/Homepage";
import Cloud from "./Pages/Cloud";
import Family from "./Pages/Family";
import Alumni from "./Pages/Alumni";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Forum from "./Pages/Forum";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import Funds from "./Pages/Funds";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForumDescription from "./Pages/ForumDescription";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[]);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/cloud" element={<Cloud/>} />
          <Route exact path="/family" element={<Family />} />
          <Route exact path="/alumni" element={<Alumni />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/forum" element={<Forum />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/funds" element={<Funds />} />
          <Route exact path="/forum/:id" element={<ForumDescription/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
