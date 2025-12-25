import Navbar from "./Navbar";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contect.css";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import Loading from "./Loading";
export default function Contect() {
  const form = useRef<HTMLFormElement>(null);

  // FIX: Type-safe event
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_qg0eiyo",
        "template_2h0kvrg",
        form.current,
        "neIh2Mt_gfywarO83"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong!");
        }
      );

    form.current.reset();
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
      <div className="contactuscontainer">
        <div className="contactuscona">
          <h1>Contact Us</h1>
          <h2>We’re Here to Help – 24/7</h2>
          <p>
            Whether you need an instant ride, a tour package quote, or have a
            query about your recent trip, our team is ready to assist you.
          </p>
          <h3>Yash Raj Cab Services</h3>
          <a href="https://maps.app.goo.gl/zpBLSyWqMhU7RSLy7" className="plink">
            Kothariya Chowkdi, Khokhdadi River, Rajkot
          </a>
          <a href="mailto: Bhojakvanraj111@gmail.com" className="plink">
            Bhojakvanraj111@gmail.com
          </a>
          <a href="https://wa.me/+917777914231" className="plink">
            +91 7777914231
          </a>
        </div>
        <div className="contactusconb">
          <form ref={form} onSubmit={sendEmail} className="formContainer">
            <input
              type="text"
              placeholder="Name"
              className="inputField"
              name="user_name"
            />
            <input
              type="email"
              placeholder="Email"
              className="inputField"
              name="user_email"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="inputField"
              name="user_phonenumber"
            />
            <textarea
              placeholder="Message.."
              className="textDescribe"
              name="user_message"
            ></textarea>
            <button className="SendBut" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
