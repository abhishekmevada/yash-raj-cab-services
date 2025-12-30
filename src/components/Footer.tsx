import "./Footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import logo from "/public/logo.webp";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="fxya">
          <div className="footerBoxa">
            <img
              src={logo}
              alt="Yash Raj Car services"
              className="logobb"
              width="165"
              height="100"
            />
            <h1>Book Your Ride Today!</h1>
            <h2>Designed for comfort, safety & reliability</h2>
            <p>
              Email:{" "}
              <a href="mailto: Bhojakvanraj111@gmail.com" className="fLink">
                Bhojakvanraj111@gmail.com
              </a>
            </p>
            <p>
              Call / WhatsApp:{" "}
              <a href="https://wa.me/+917777914231" className="fLink">
                +91 7777914231
              </a>
            </p>
            <p>
              Address:{" "}
              <a
                href="https://maps.app.goo.gl/1n4rBfduw9AKAtbs7"
                className="fLink"
              >
                Service Area: Kothariya Chowkdi, Khokhdadi River, Rajkot
              </a>
            </p>

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
            <h3>Menu</h3>
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
            <p className="navLink">
              <Link to="/fleets" className="abxx">
                Fleets
              </Link>
            </p>
            <p className="navLink">
              <Link to="/tour" className="abxx">
                Tour Places
              </Link>
            </p>
            <p className="navLink">
              <Link to="/contactus" className="abxx">
                Contact Us
              </Link>
            </p>
            <p className="navLink">
              <Link to="/" className="abxx">
                Book Now
              </Link>
            </p>
            <p className="navLink">
              <Link to="/policy" className="abxx">
                Our Policy
              </Link>
            </p>
          </div>
          <div className="footerBoxc">
            <h3>Popular Cities</h3>
            <p className="cityLink">Cabs in Vadodara</p>
            <p className="cityLink">Cabs in Surat</p>
            <p className="cityLink">Cabs in Palanpur</p>
            <p className="cityLink">Cabs in Jodhpur</p>
            <p className="cityLink">Cabs in Morbi</p>
            <p className="cityLink">Cabs in Diu</p>
            <p className="cityLink">Cabs in Rajkot</p>
            <p className="cityLink">Cabs in Udaipur</p>
            <p className="cityLink">Cabs in Jaipur</p>
            <p className="cityLink">Cabs in Gandhinagar</p>
            <p className="cityLink">Cabs in Somnath</p>
            <p className="cityLink">Cabs in Vapi</p>
          </div>
        </div>
        <p className="polyfooter">
          <Link to="/policy" className="polyfooter">
            © 2025 Taxi & Tourist Cab Service | All Rights Reserved
          </Link>
        </p>
      </div>
    </>
  );
}
