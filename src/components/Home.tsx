import Navbar from "./Navbar";
import "./Home.css";
import aboutcab from "/aboutcab.webp";
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

    const phoneNumber = "+917777914231";

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
    // const imageUrls = [
    //   "herobg.webp",

    //   "/serviceImga.webp",

    //   "/serviceImgb.webp",

    //   "/serviceImgc.webp",

    //   "/serviceImgd.webp",

    //   "/serviceImge.webp",

    //   "/navasari.webp",

    //   "/gandhinagar.webp",

    //   "/surat.webp",

    //   "/hatchbacks.webp",

    //   "/fleetb.webp",

    //   "/tempotraveller.webp",

    //   "/fleetd.webp",

    //   "/sedancars.webp",

    //   "/volvob.webp",

    //   "/yellow.webp",
    //   "/aboutcab.webp",
    // ];

    const imageUrls = ["herobg.webp"];
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
          <div
            className="homesecContainer"
            style={{ position: "relative", overflow: "hidden" }}
          >
            {/* 1. The Image (Now in HTML, not CSS) */}
            <img
              src="/herobg.webp"
              alt="Taxi Fleet Background"
              fetchPriority="high"
              width="1920"
              height="1080"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1, // Puts it behind the text
              }}
            />
            <div className="herosecCona">
              <h1>Yash Raj Cab Taxi Services</h1>
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
                      aria-label="Trip Type: Out Station"
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
                      aria-label="Trip Type: One Way"
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
                      aria-label="Trip Type: Local"
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
                      aria-label="Trip Type: Airport"
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
                      aria-label="Car Type: Standard"
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
                      aria-label="Car Type: Business"
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
                      aria-label="Car Type: Vip"
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
                      aria-label="Car Type: Bus-Minivan"
                    />
                    Bus-Minivan
                  </label>

                  <p className="radioResult">
                    You chose: <strong>{formData.carType}</strong>
                  </p>
                </div>

                <div className="fieldBox">
                  <label htmlFor="pickupLocation">Pick Up Location</label>
                  <input
                    id="pickupLocation"
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="Enter pickup point"
                    className="formInput"
                    required
                    aria-label="Pick Up Location"
                  />
                </div>

                <div className="fieldBox">
                  <label htmlFor="dropLocation">Drop Location</label>
                  <input
                    id="dropLocation"
                    type="text"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleChange}
                    placeholder="Enter drop point"
                    className="formInput"
                    required
                    aria-label="Drop Location"
                  />
                </div>

                <div className="fieldBox">
                  <label htmlFor="dateTime">Date & Time</label>
                  <input
                    id="dateTime"
                    type="datetime-local"
                    name="dateTime"
                    value={formData.dateTime}
                    onChange={handleChange}
                    className="formInput"
                    required
                    aria-label="Date and Time"
                  />
                </div>

                <button
                  type="submit"
                  className="formBut"
                  aria-label="Book Cab Now"
                >
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
                <mark>Yash Raj Cab Services</mark> is a{" "}
                <mark>reliable Taxi & Tourist Cab Service</mark>
                offering{" "}
                <mark>safe, comfortable, and on-time travel solutions</mark>.
                With
                <mark>professional drivers</mark> and{" "}
                <mark>clean vehicles</mark>, we ensure a smooth and{" "}
                <mark>stress-free journey</mark> for every customer.
                <br />
                <br />
                From <mark>local rides</mark> and <mark>airport transfers</mark>{" "}
                to <mark>outstation trips</mark> and <mark>tourist travel</mark>
                , we are your <mark>trusted partner</mark> for all travel needs.
              </p>
              <h2>Why Choose Us</h2>
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
              <div className="servicesBoxa service-card">
                {/* 1. New Real Image Tag */}
                <img
                  src="/serviceImga.webp"
                  alt="Local Taxi"
                  loading="lazy"
                  className="card-bg-img"
                  width="400"
                  height="300"
                />

                {/* 2. Existing Content stays exactly the same */}
                <div className="servicesDes">
                  <h2>Local Taxi Service</h2>
                  <p>
                    Quick and affordable local rides within the city for daily
                    travel.
                  </p>
                </div>
              </div>

              <div className="servicesBoxb">
                <img
                  src="/serviceImgb.webp"
                  alt="Tourist Cab Packages"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="servicesDes">
                  <h2>Tourist Cab Packages</h2>
                  <p>
                    Customized sightseeing and tour packages for families,
                    couples, and groups.
                  </p>
                </div>
              </div>

              <div className="servicesBoxc">
                <img
                  src="/serviceImgc.webp"
                  alt="Outstation Cab Service"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="servicesDes">
                  <h2>Outstation Cab Service</h2>
                  <p>
                    Comfortable long-distance travel to nearby cities and
                    tourist destinations.
                  </p>
                </div>
              </div>

              <div className="servicesBoxd">
                <img
                  src="/serviceImgd.webp"
                  alt="Airport Pickup & Drop"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="servicesDes">
                  <h2>Airport Pickup & Drop</h2>
                  <p>
                    On-time airport transfers with flight tracking and zero
                    waiting stress.
                  </p>
                </div>
              </div>

              <div className="servicesBoxe">
                <img
                  src="/serviceImge.webp"
                  alt="Corporate Travel"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
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
                <img
                  src="/hatchbacks.webp"
                  alt="Hatchback"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <h2>Hatchback</h2>
              </div>

              <div className="fleetBox" id="fe">
                <img
                  src="/sedancars.webp"
                  alt="Sedan"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <h2>Sedan</h2>
              </div>

              <div className="fleetBox" id="fb">
                <img
                  src="/fleetb.webp"
                  alt="SUV & MUV"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <h2>SUV & MUV</h2>
              </div>

              <div className="fleetBox" id="fc">
                <img
                  src="/tempotraveller.webp"
                  alt="Tempo Traveller"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <h2>Tempo Traveller</h2>
              </div>

              <div className="fleetBox" id="fd">
                <img
                  src="/fleetd.webp"
                  alt="Luxury Cars"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <h2>Luxury Cars</h2>
              </div>

              <div className="fleetBox" id="ff">
                <img
                  src="/volvob.webp"
                  alt="Volvo Bus"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
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
                <img
                  src="/navasari.webp"
                  alt="Navasari"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="servicesDes">
                  <h2>Navasari</h2>
                </div>
              </div>

              <div className="servicesBoxg">
                <img
                  src="/gandhinagar.webp"
                  alt="Gandhinagar"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="servicesDes">
                  <h2>Gandhinagar</h2>
                </div>
              </div>

              <div className="servicesBoxh">
                <img
                  src="/somnath.jpg"
                  alt="Surat"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="servicesDes">
                  <h2>Somnath</h2>
                </div>
              </div>

              <div className="servicesBoxh">
                <img
                  src="/dwarka.jpg"
                  alt="Surat"
                  className="card-bg-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="servicesDes">
                  <h2>Dwarka</h2>
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
                  <p className="testName">Amit Sharma</p>
                </div>
                <p className="testDesc">
                  “Excellent service with polite drivers and clean cars.”
                </p>
              </div>

              <div className="testimonialBox">
                <div className="testimonialHeader">
                  <div className="ranomColorBox" id="rab"></div>
                  <p className="testName">Priya Verma</p>
                </div>
                <p className="testDesc">
                  “Always on time and very comfortable rides.”
                </p>
              </div>

              <div className="testimonialBox">
                <div className="testimonialHeader">
                  <div className="ranomColorBox" id="rac"></div>
                  <p className="testName">Rohit Patel</p>
                </div>
                <p className="testDesc">
                  “Best cab service for airport pickup and drop”
                </p>
              </div>
              <div className="testimonialBox">
                <div className="testimonialHeader">
                  <div className="ranomColorBox"></div>
                  <p className="testName">Amit Sharma</p>
                </div>
                <p className="testDesc">
                  “Affordable pricing and professional drivers.”
                </p>
              </div>

              <div className="testimonialBox">
                <div className="testimonialHeader">
                  <div className="ranomColorBox" id="rab"></div>
                  <p className="testName">Priya Verma</p>
                </div>
                <p className="testDesc">
                  “Smooth outstation trip with a friendly driver.”
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
