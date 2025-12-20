import Navbar from "./Navbar";
import "./Home.css";
import heroseca from "/heroseca.jpg";
import herosecb from "/herosecb.jpg";
import herosecc from "/herosecc.jpg";
import herosecd from "/herosecd.jpg";
import aboutcab from "/aboutcab.jpg";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="homesecContainer">
        <div className="herosecCona">
          <h1>Yash Raj Cab Services</h1>
          <h2>Reliable Taxi & Tourist Cab Services</h2>
          <h3>Safe • Comfortable • On-Time Travel</h3>
          <p>
            Travel with confidence using Yash Raj Cab Services. We offer clean,
            well-maintained vehicles driven by professional and verified drivers
            to ensure a smooth and stress-free journey every time.
            <br />
            <br />
            We provide local taxi services, outstation trips, airport pickup &
            drop, and customized tour packages at affordable and transparent
            prices.
          </p>
          <div className="minheroseca">
            <p className="ctaButher">Book Now</p>
            <p className="ctaButherb">Call 24/7</p>
          </div>
        </div>
        <div className="herosecConb">
          <div className="hersecBox">
            <img src={heroseca} alt="" className="heroseca" id="hers" />
            <img src={herosecb} alt="" className="herosecb" id="hers" />
            <img src={herosecc} alt="" className="herosecc" id="hers" />
            <img src={herosecd} alt="" className="herosecd" id="hers" />
          </div>
        </div>
      </div>
      <div className="aboutusContainer">
        <img src={aboutcab} alt="Yash Raj Cab Services" className="aboutImg" />
        <div className="aboutConb">
          <h1>About Us</h1>
          <p>
            Yash Raj Cab Services is a reliable Taxi & Tourist Cab Service
            offering safe, comfortable, and on-time travel solutions. With
            professional drivers and clean vehicles, we ensure a smooth and
            stress-free journey for every customer.
            <br />
            <br />
            From local rides and airport transfers to outstation trips and
            tourist travel, we are your trusted partner for all travel needs.
          </p>
          <h3>Why Choose Us</h3>
          <div className="whychooseContainer">
            <p className="wcuBox">Professional & Verified Drivers</p>
            <p className="wcuBox">Clean & Well-Maintained Cars</p>
            <p className="wcuBox">Affordable & Transparent Pricing</p>
            <p className="wcuBox">24/7 Customer Support</p>
            <p className="wcuBox">Safe & Comfortable Journeys</p>
            <p className="wcuBox">On-Time Pickup & Drop</p>
          </div>
          <p className="aboutctaButher">View About Us More...</p>
        </div>
      </div>
      <div className="servicesContainer">
        <h1>Our Services</h1>
        <div className="servicesConBox">
          <div className="servicesBoxa">
            <div className="servicesDes">
              <h2>Local Taxi Service</h2>
              <p>
                Quick and affordable local rides within the city for daily
                travel.
              </p>
            </div>
          </div>

          <div className="servicesBoxb">
            <div className="servicesDes">
              <h2>Tourist Cab Packages</h2>
              <p>
                Customized sightseeing and tour packages for families, couples,
                and groups.
              </p>
            </div>
          </div>

          <div className="servicesBoxc">
            <div className="servicesDes">
              <h2>Outstation Cab Service</h2>
              <p>
                Comfortable long-distance travel to nearby cities and tourist
                destinations.
              </p>
            </div>
          </div>

          <div className="servicesBoxd">
            <div className="servicesDes">
              <h2>Airport Pickup & Drop</h2>
              <p>
                On-time airport transfers with flight tracking and zero waiting
                stress.
              </p>
            </div>
          </div>
          <div className="servicesBoxe">
            <div className="servicesDes">
              <h2>Corporate Travel</h2>
              <p>
                Reliable cab service for offices, meetings, and business travel.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fleetContainer">
        <h1>Our Fleet</h1>
        <p>We offer a wide range of vehicles to suit your needs</p>
        <div className="fleetboxContainer">
          <div className="fleetBox" id="fa">
            <h2>Hatchback & Sedan</h2>
          </div>
          <div className="fleetBox" id="fb">
            <h2>SUV & MUV</h2>
          </div>
          <div className="fleetBox" id="fc">
            <h2>Tempo Traveller</h2>
          </div>
          <div className="fleetBox" id="fd">
            <h2>Luxury Cars</h2>
          </div>
        </div>
        <p className="aboutctaButher">View Cars</p>
      </div>
      <div className="testimonialContainer">
        <h1>Customer Testimonials</h1>
        <div className="testimonialminBox">
          <div className="testimonialBox">
            <div className="testimonialHeader">
              <div className="ranomColorBox"></div>
              <h3>Amit Sharma</h3>
            </div>
            <p>“Excellent service with polite drivers and clean cars.”</p>
          </div>

          <div className="testimonialBox">
            <div className="testimonialHeader">
              <div className="ranomColorBox" id="rab"></div>
              <h3>Priya Verma</h3>
            </div>
            <p>“Always on time and very comfortable rides.”</p>
          </div>

          <div className="testimonialBox">
            <div className="testimonialHeader">
              <div className="ranomColorBox" id="rac"></div>
              <h3>Rohit Patel</h3>
            </div>
            <p>“Best cab service for airport pickup and drop”</p>
          </div>
          <div className="testimonialBox">
            <div className="testimonialHeader">
              <div className="ranomColorBox"></div>
              <h3>Amit Sharma</h3>
            </div>
            <p>“Affordable pricing and professional drivers.”</p>
          </div>

          <div className="testimonialBox">
            <div className="testimonialHeader">
              <div className="ranomColorBox" id="rab"></div>
              <h3>Priya Verma</h3>
            </div>
            <p>“Smooth outstation trip with a friendly driver.”</p>
          </div>

          <div className="testimonialBox">
            <div className="testimonialHeader">
              <div className="ranomColorBox" id="rac"></div>
              <h3>Rohit Patel</h3>
            </div>
            <p>“Reliable service for family and business travel.”</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
