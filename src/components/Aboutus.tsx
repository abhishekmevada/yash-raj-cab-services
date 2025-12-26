import Footer from "./Footer";
import Aboutusbg from "/aboutusbg.jpg";
import Navbar from "./Navbar";
import "./About.css";
import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function Aboutus() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Define the function to run when the page loads
    const handleLoad = () => {
      // Optional: Add a small delay so the user sees the loader for at least a moment
      // (prevents an ugly "flicker" on fast connections)
      setTimeout(() => {
        setIsPageLoaded(true);
      }, 500);
    };

    // Check if the page has ALREADY loaded before this component mounted
    // (This handles cases where the browser caches the page)
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Otherwise, add the event listener
      window.addEventListener("load", handleLoad);
    }

    // Cleanup: Remove the listener when the component unmounts
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // 1. Show Loader if page is NOT loaded
  if (!isPageLoaded) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <div className="AboutusContainer">
        <div className="aboutuscona">
          <h1>About Us</h1>
          <h2>Your Trusted Partner for Safe & Comfortable Travel</h2>
          <p>
            <mark>Yash Raj Cab Services</mark> is a{" "}
            <mark>reliable Taxi & Tourist Cab Service</mark> dedicated to
            providing <mark>safe, comfortable, and on-time travel</mark>{" "}
            solutions for{" "}
            <mark>individuals, families, and corporate clients.</mark> Withyears
            of experience in the <mark>travel and transportation industry</mark>
            , we focus on making every journey{" "}
            <mark>smooth, affordable, and stress-free.</mark>
            <br />
            <br />
            Our wide range of services includes{" "}
            <mark>
              local city rides, airport pickup & drop, outstation travel,
              tourist cab packages, and corporate transportation
            </mark>
            . Whether you need a short city trip or a long-distance journey,
            <mark>Yash Raj Cab Services ensures a comfortable</mark> and{" "}
            <mark>hassle-free travel experience every time</mark>.
          </p>
        </div>
        <div className="aboutusconb">
          <img src={Aboutusbg} alt="Aboutus" className="aboutusImg" />
        </div>
      </div>
      <div className="ourmissContainer">
        <div className="ourmisscon">
          <h1>Our Mission</h1>
          <p>
            Our mission at Yash Raj Cab Services is to deliver safe, reliable,
            and customer-focused cab services with transparent pricing and
            professional drivers, ensuring complete satisfaction on every ride.
          </p>
        </div>
        <div className="ourmissconb">
          <h1>Our Commitment</h1>
          <p>
            We believe travel should be safe, convenient, and enjoyable. That’s
            why Yash Raj Cab Services maintains high standards of vehicle
            cleanliness, driver professionalism, and customer service. Your
            safety and comfort are always our top priorities.
          </p>
        </div>
        <div className="ourmissconc">
          <h1>Serving with Trust</h1>
          <p>
            Thousands of happy customers trust Yash Raj Cab Services for their
            daily travel, family trips, business travel, and tourist journeys.
            We continue to grow with one goal in mind to provide dependable taxi
            services you can rely on every time.
          </p>
        </div>
      </div>
      <div className="aboutsecab">
        <h1>Book with Confidence</h1>
        <p>
          Choose Yash Raj Cab Services for your next ride and experience
          professional service, friendly drivers, and stress-free travel.
        </p>
        <p>
          <a href="tell:+917777914231" className="palink">
            Call
          </a>{" "}
          or{" "}
          <a href="https://wa.me/+917777914231" className="palink">
            WhatsApp
          </a>{" "}
          us today to book your cab.
        </p>
      </div>
      <Footer />
    </>
  );
}
