import "./Footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import logo from "/logo.jpeg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="fxya">
          <div className="footerBoxa">
            <img src={logo} alt="Yash Raj Car services" className="logobb" />
            <h1>Book Your Ride Today!</h1>
            <h2>Designed for comfort, safety & reliability</h2>
            <p>Call / WhatsApp: +91 XXXXXXXXXX</p>
            <p>Service Area: City & Nearby Locations</p>
            <p>Available: 24/7</p>
            <div className="ficoBox">
              <p className="fooIco">
                <AiFillInstagram />
              </p>
              <p className="fooIco">
                <IoLogoFacebook />
              </p>
              <p className="fooIco">
                <IoMdMail />
              </p>
            </div>
          </div>
          <div className="footerBoxb">
            <h3>Manu</h3>
            <p className="navLink">
              <Link to="/" className="abxx">
                Home
              </Link>{" "}
            </p>
            <p className="navLink">
              <Link to="/aboutus" className="abxx">
                About Us
              </Link>
            </p>
            <p className="navLink">Fleet</p>
            <p className="navLink">Tour Packages</p>
            <p className="navLink">Pricing</p>
            <p className="navLink">Contact Us</p>
            <p className="navLink">Book Now</p>
          </div>
        </div>
        <p className="polyfooter">
          © 2025 Taxi & Tourist Cab Service | All Rights Reserved
        </p>
      </div>
    </>
  );
}
