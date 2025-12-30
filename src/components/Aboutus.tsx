import Footer from "./Footer";
import Aboutusbg from "/aboutusbg.webp";
import Navbar from "./Navbar";
import "./About.css";
import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function Aboutus() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // 1. UPDATE THESE URLS TO MATCH YOUR ACTUAL BACKGROUND IMAGES
    const imageUrls = ["/aboutusbg.jpg"];

    // Fixed TypeScript types here:
    const preloadImage = (url: string): Promise<void> => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Resolve on error too, so loader doesn't get stuck
      });
    };

    Promise.all(imageUrls.map(preloadImage))
      .then(() => {
        setIsPageLoaded(true);
      })
      .catch((err) => {
        console.error("Image preload failed", err);
        setIsPageLoaded(true);
      });
  }, []);
  return (
    <>
      {!isPageLoaded && (
        <div
          style={{
            position: "fixed",
            zIndex: 9999,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Loading />
        </div>
      )}
      <div
        style={{
          opacity: isPageLoaded ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <Navbar />
        <main>
          <div className="AboutusContainer">
            <div className="aboutuscona">
              <h1>About Us</h1>
              <h2>Your Trusted Partner for Safe & Comfortable Travel</h2>
              <p>
                <mark>Yash Raj Cab Services</mark> is a{" "}
                <mark>reliable Taxi & Tourist Cab Service</mark> dedicated to
                providing <mark>safe, comfortable, and on-time travel</mark>{" "}
                solutions for{" "}
                <mark>individuals, families, and corporate clients.</mark>{" "}
                Withyears of experience in the{" "}
                <mark>travel and transportation industry</mark>, we focus on
                making every journey{" "}
                <mark>smooth, affordable, and stress-free.</mark>
                <br />
                <br />
                Our wide range of services includes{" "}
                <mark>
                  local city rides, airport pickup & drop, outstation travel,
                  tourist cab packages, and corporate transportation
                </mark>
                . Whether you need a short city trip or a long-distance journey,
                <mark>
                  Yash Raj Cab Services ensures a comfortable
                </mark> and{" "}
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
                Our mission at Yash Raj Cab Services is to deliver safe,
                reliable, and customer-focused cab services with transparent
                pricing and professional drivers, ensuring complete satisfaction
                on every ride.
              </p>
            </div>
            <div className="ourmissconb">
              <h1>Our Commitment</h1>
              <p>
                We believe travel should be safe, convenient, and enjoyable.
                That’s why Yash Raj Cab Services maintains high standards of
                vehicle cleanliness, driver professionalism, and customer
                service. Your safety and comfort are always our top priorities.
              </p>
            </div>
            <div className="ourmissconc">
              <h1>Serving with Trust</h1>
              <p>
                Thousands of happy customers trust Yash Raj Cab Services for
                their daily travel, family trips, business travel, and tourist
                journeys. We continue to grow with one goal in mind to provide
                dependable taxi services you can rely on every time.
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
        </main>
        <Footer />
      </div>
    </>
  );
}
