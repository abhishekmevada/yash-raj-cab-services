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
        <p className="navLink">
          <Link to="/" className="linka">
            Home
          </Link>
        </p>
        <p className="navLink">
          <Link to="/aboutus" className="linka">
            About Us
          </Link>
        </p>
        <p className="navLink">
          <Link to="/fleets" className="linka">
            Fleets
          </Link>
        </p>
        <p className="navLink">
          <Link to="/tour" className="linka">
            Tour Places
          </Link>
        </p>
        <p className="navLink">
          <Link to="/contactus" className="linka">
            Contact Us
          </Link>
        </p>
        <p className="ctaBut">
          <Link to="/" className="linka">
            Book Now
          </Link>
        </p>
      </nav>
    </div>
  );
}
