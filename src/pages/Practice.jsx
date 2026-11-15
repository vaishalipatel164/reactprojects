import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../component/practicepages/Home";
import About from "../component/practicepages/About";
import Labs from "../component/practicepages/Labs";
import Contact from "../component/practicepages/Contact";
import NotFound from "../component/practicepages/NotFound";
import "./Practice.css";
import HomeHead from "../component/practicepages/HomeHead";

function Practice() {
  return (
    <>
      <div className="practice">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/labs">Labs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomeHead />} >
           { /*Index is default Route*/}
          <Route index element={<Home />} />        
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default Practice;
