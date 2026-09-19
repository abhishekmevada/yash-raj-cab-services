import { useState } from "react";
import "./Navbar.css";
import logo from "/public/logo.webp";
import { FaAlignRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sta, setSta] = useState(true);
  return (
    <div className="navContainer">
      <img
        src={logo}
        alt="Yash Raj Car services"
        className="logo"
        width="155"
        height="100"
      />
      <p className="navCio" onClick={() => setSta(!sta)}>
        <FaAlignRight />
      </p>
      <nav className={sta ? "cnav" : "onav"}>
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/aboutus" className="navLink">
          About Us
        </Link>
        <Link to="/fleets" className="navLink">
          Fleets
        </Link>
        <Link to="/tour" className="navLink">
          Tour Places
        </Link>
        <Link to="/contactus" className="navLink">
          Contact Us
        </Link>
        <Link to="/" className="ctaBut">
          Book Now
        </Link>
      </nav>
    </div>
  );
}
