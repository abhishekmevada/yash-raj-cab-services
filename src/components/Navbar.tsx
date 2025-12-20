import { useState } from "react";
import "./Navbar.css";
import logo from "/logo.jpeg";
import { FaAlignRight } from "react-icons/fa6";

export default function Navbar() {
  const [sta, setSta] = useState(true);
  return (
    <div className="navContainer">
      <img src={logo} alt="Yash Raj Car services" className="logo" />
      <p className="navCio" onClick={() => setSta(!sta)}>
        <FaAlignRight />
      </p>
      <nav className={sta ? "cnav" : "onav"}>
        <p className="navLink">Home</p>
        <p className="navLink">About Us</p>
        <p className="navLink">Fleet</p>
        <p className="navLink">Tour Packages</p>
        <p className="navLink">Pricing</p>
        <p className="navLink">Contact Us</p>
        <p className="ctaBut">Book Now</p>
      </nav>
    </div>
  );
}
