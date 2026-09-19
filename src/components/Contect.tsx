import Navbar from "./Navbar";
import "./Contect.css";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Loading from "./Loading";
import Pho from "./Pho";
export default function Contect() {
  const [formData, setFormData] = useState({
    message: "",
    phnumber: "",
    name: "",
    email: "",
  });

  // Fixed: Updated type to include HTMLTextAreaElement
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookCab = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumber = "+919904899229";

    const message =
      `Yash Raj Cab Services\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone Number: ${formData.phnumber}\n` +
      `Message: ${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };
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
      <main className="conMain">
        <div className="contactuscontainer">
          <div className="contactuscona">
            <img src="/contactbg.jpeg" alt="" className="contactbgJ" />
            <h1 style={{ marginTop: "20px" }}>Contact Us</h1>
            <h2>We’re Here to Help – 24/7</h2>
            <p>
              Whether you need an instant ride, a tour package quote, or have a
              query about your recent trip, our team is ready to assist you.
            </p>
            <h3>Yash Raj Cab Services</h3>
            <a
              href="https://maps.app.goo.gl/1n4rBfduw9AKAtbs7"
              className="plink"
            >
              Kothariya Chowkdi, Khokhdadi River, Rajkot
            </a>
            <a href="mailto: Bhojakvanraj111@gmail.com" className="plink">
              Bhojakvanraj111@gmail.com
            </a>
            <a href="https://wa.me/+919904899229" className="plink">
              +91 9904899229
            </a>
          </div>
          <div className="contactusconb">
            <form onSubmit={handleBookCab} className="formContainer">
              <input
                type="text"
                placeholder="Name"
                className="inputField"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Name" // <--- ADDED: Fixes Accessibility Score
              />
              <input
                type="email"
                placeholder="Email"
                className="inputField"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Email Address" // <--- ADDED: Fixes Accessibility Score
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="inputField"
                name="phnumber"
                value={formData.phnumber}
                onChange={handleChange}
                required
                aria-label="Phone Number" // <--- ADDED: Fixes Accessibility Score
              />
              <textarea
                placeholder="Message.."
                className="textDescribe"
                name="message"
                value={formData.message}
                onChange={handleChange}
                aria-label="Message" // <--- ADDED: Fixes Accessibility Score
              ></textarea>
              <button className="SendBut" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <Pho />
      </main>
      <Footer />
    </>
  );
}
