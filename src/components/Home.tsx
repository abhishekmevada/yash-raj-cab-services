import Navbar from "./Navbar";
import "./Home.css";
import aboutcab from "/aboutcab.jpg";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function Home() {
  // --- FIX: Moved State & Logic to the top level of Home ---

  // 1. Initialize State for all fields
  const [formData, setFormData] = useState({
    tripType: "Out Station", // Default selection
    carType: "Standard",
    pickupLocation: "",
    dropLocation: "",
    dateTime: "",
  });

  // 2. Handle Input Changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Handle Form Submission (Send to WhatsApp)
  const handleBookCab = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumber = "+919510954023";

    const message =
      `New Cab Booking Request\n\n` +
      `Trip Type: ${formData.tripType}\n` +
      `Car Type: ${formData.carType}\n` +
      `Pick Up: ${formData.pickupLocation}\n` +
      `Drop: ${formData.dropLocation}\n` +
      `Date & Time: ${formData.dateTime}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // 1. UPDATE THESE URLS TO MATCH YOUR ACTUAL BACKGROUND IMAGES
    const imageUrls = [
      "herobg.png",

      "/serviceImga.png",

      "/serviceImgb.png",

      "/serviceImgc.png",

      "/serviceImgd.png",

      "/serviceImge.png",

      "/navasari.jpg",

      "/gandhinagar.jpg",

      "/surat.jpg",

      "/hatchbacks.png",

      "/fleetb.png",

      "/tempotraveller.png",

      "/fleetd.png",

      "/sedancars.webp",

      "/volvob.png",

      "/Yellowtaxi.jpg",
    ];

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
        <div className="homesecContainer">
          <div className="herosecCona">
            <h1>Yash Raj Cab Services</h1>
            <h2>Reliable Taxi & Tourist Cab Services</h2>
            <h3>Safe • Comfortable • On-Time Travel</h3>
            <p className="herodec">
              <mark>
                Travel with confidence using Yash Raj Cab Services. We offer
                clean, well maintained vehicles driven by professional and
                verified drivers to ensure a smooth and stress-free journey
                every time.
              </mark>
            </p>
            <div className="minheroseca">
              <p className="ctaButher">
                <Link to="/fleets" className="linkher">
                  Visit Our Fleets
                </Link>
              </p>
              <a href="tell:+917777914231" className="ctaButherb">
                Call 24/7
              </a>
            </div>
          </div>

          <div className="herosecConb">
            {/* Form starts here */}
            <form onSubmit={handleBookCab} className="formContainerxyz">
              <p>Type: </p>
              <div className="checkBox">
                <label className="radBut">
                  <input
                    type="radio"
                    name="tripType"
                    value="Out Station"
                    checked={formData.tripType === "Out Station"}
                    onChange={handleChange}
                  />
                  Out Station
                </label>

                <label className="radBut">
                  <input
                    type="radio"
                    name="tripType"
                    value="One Way"
                    checked={formData.tripType === "One Way"}
                    onChange={handleChange}
                  />
                  One Way
                </label>

                <label className="radBut">
                  <input
                    type="radio"
                    name="tripType"
                    value="Local"
                    checked={formData.tripType === "Local"}
                    onChange={handleChange}
                  />
                  Local
                </label>

                <label className="radBut">
                  <input
                    type="radio"
                    name="tripType"
                    value="Airport"
                    checked={formData.tripType === "Airport"}
                    onChange={handleChange}
                  />
                  Airport
                </label>

                <p className="radioResult">
                  You chose: <strong>{formData.tripType}</strong>
                </p>
              </div>
              <p>Car Selection: </p>
              <div className="checkBox">
                <label className="radBut">
                  <input
                    type="radio"
                    name="carType"
                    value="Standard"
                    checked={formData.carType === "Standard"}
                    onChange={handleChange}
                  />
                  Standard
                </label>

                <label className="radBut">
                  <input
                    type="radio"
                    name="carType"
                    value="Business"
                    checked={formData.carType === "Business"}
                    onChange={handleChange}
                  />
                  Business
                </label>

                <label className="radBut">
                  <input
                    type="radio"
                    name="carType"
                    value="Vip"
                    checked={formData.carType === "Vip"}
                    onChange={handleChange}
                  />
                  Vip
                </label>

                <label className="radBut">
                  <input
                    type="radio"
                    name="carType"
                    value="Bus-Minivan"
                    checked={formData.carType === "Bus-Minivan"}
                    onChange={handleChange}
                  />
                  Bus-Minivan
                </label>

                <p className="radioResult">
                  You chose: <strong>{formData.carType}</strong>
                </p>
              </div>
              <div className="fieldBox">
                <label>Pick Up Location</label>
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="Enter pickup point"
                  className="formInput"
                  required
                />
              </div>

              <div className="fieldBox">
                <label>Drop Location</label>
                <input
                  type="text"
                  name="dropLocation"
                  value={formData.dropLocation}
                  onChange={handleChange}
                  placeholder="Enter drop point"
                  className="formInput"
                  required
                />
              </div>

              <div className="fieldBox">
                <label>Date & Time</label>
                <input
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  className="formInput"
                  required
                />
              </div>
              <button type="submit" className="formBut">
                Book Cab
              </button>
            </form>
          </div>
        </div>

        <div className="aboutusContainer">
          <img
            src={aboutcab}
            alt="Yash Raj Cab Services"
            className="aboutImg"
          />
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
            <p className="aboutctaButher">
              <Link to="/aboutus" className="linkherc">
                View About Us More...
              </Link>
            </p>
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
                  Customized sightseeing and tour packages for families,
                  couples, and groups.
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
                  On-time airport transfers with flight tracking and zero
                  waiting stress.
                </p>
              </div>
            </div>
            <div className="servicesBoxe">
              <div className="servicesDes">
                <h2>Corporate Travel</h2>
                <p>
                  Reliable cab service for offices, meetings, and business
                  travel.
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
              <h2>Hatchback</h2>
            </div>
            <div className="fleetBox" id="fe">
              <h2>Sedan</h2>
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
            <div className="fleetBox" id="ff">
              <h2>Volvo Bus</h2>
            </div>
          </div>
          <p className="aboutctaButher">
            <Link to="/fleets" className="linkherc">
              View Cars
            </Link>
          </p>
        </div>

        <div className="servicesContainer">
          <h1>Our Tourist Places</h1>
          <div className="servicesConBox">
            <div className="servicesBoxf">
              <div className="servicesDes">
                <h2>Navasari</h2>
              </div>
            </div>

            <div className="servicesBoxg">
              <div className="servicesDes">
                <h2>Gandhinagar</h2>
              </div>
            </div>

            <div className="servicesBoxh">
              <div className="servicesDes">
                <h2>Surat</h2>
              </div>
            </div>
          </div>
          <p className="aboutctaButher">
            <Link to="/tour" className="linkherc">
              View More...
            </Link>
          </p>
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
      </div>
    </>
  );
}
