import Footer from "./Footer";
import Aboutusbg from "/aboutusbg.jpg";
import Navbar from "./Navbar";
import "./About.css";

export default function Aboutus() {
  return (
    <>
      <Navbar />
      <div className="AboutusContainer">
        <div className="aboutuscona">
          <h1>About Us</h1>
          <h2>Your Trusted Partner for Safe & Comfortable Travel</h2>
          <p>
            Yash Raj Cab Services is a reliable Taxi & Tourist Cab Service
            dedicated to providing safe, comfortable, and on-time travel
            solutions for individuals, families, and corporate clients. With
            years of experience in the travel and transportation industry, we
            focus on making every journey smooth, affordable, and stress-free.
            <br />
            <br />
            Our wide range of services includes local city rides, airport pickup
            & drop, outstation travel, tourist cab packages, and corporate
            transportation. Whether you need a short city trip or a
            long-distance journey, Yash Raj Cab Services ensures a comfortable
            and hassle-free travel experience every time.
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
          <a href="" className="palink">
            Call
          </a>{" "}
          or{" "}
          <a href="" className="palink">
            WhatsApp
          </a>{" "}
          us today to book your cab.
        </p>
      </div>
      <Footer />
    </>
  );
}
