import "./Fleet.css";
import Navbar from "./Navbar";
import Hondacity from "/HondaCity.jpg";
import HondaAmaze from "/HondaAmaze.jpg";
import MarutiSuzuki from "/marusuzi.webp";
import MarutiSuzukiErtiga from "/maertiga.avif";
import Tavera from "/taverab.png";
import TempoTraveller from "/tempotraveller.png";
import ToyotaInnovaa from "/innovacre.jpg";
import ToyotaInnovab from "/toyotainnovab.jpg";
import volvo from "/volvob.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./Loading";

type Carproduct = {
  id: number;
  image: string;
  name: string;
  price: string;
  distance: string;
  des: string;
};

export default function Fleet() {
  const cars = [
    {
      id: 1,
      image: Hondacity,
      name: "Honda City",
      price: "11Rs per km ",
      distance: "300 km range per day ",
      des: "Toll parking driver food extra charge",
    },
    {
      id: 2,
      image: HondaAmaze,
      name: "Honda Amaze",
      price: "11Rs per km ",
      distance: "300 km range per day ",
      des: "Toll parking driver food extra charge",
    },
    {
      id: 3,
      image: MarutiSuzuki,
      name: "Dezire",
      price: "11Rs per km ",
      distance: "300 km range per day ",
      des: "Toll parking driver food extra charge",
    },
    {
      id: 4,
      image: ToyotaInnovab,
      name: "Innova",
      price: "16 rs per km ",
      distance: "300 km range per day ",
      des: "Toll parking driver food extra charge",
    },
    {
      id: 5,
      image: ToyotaInnovaa,
      name: "Innova cresta",
      price: "18 rs per km ",
      distance: "300 km range per day ",
      des: "Toll parking driver food extra charge",
    },
    {
      id: 6,
      image: MarutiSuzukiErtiga,
      name: "Ertiga",
      price: "12 rs per km ",
      distance: "300 km range per day ",
      des: "Toll parking driver food extra charge",
    },
    {
      id: 7,
      image: Tavera,
      name: "Tavera",
      price: "12 rs per km ",
      distance: "300 km range per day ",
      des: "Toll parking driver food extra charge",
    },
    {
      id: 10,
      image: TempoTraveller,
      name: "Tempo Traveller",
      price: "26 to 40 rs per km ",
      distance: "300 km range per day ",
      des: "Toll parking driver food extra charge",
    },
    {
      id: 11,
      image: volvo,
      name: "Volvo",
      price: "26 to 40 rs per km ",
      distance: "300 km range per day ",
      des: "Toll parking driver food extra charge",
    },
  ];

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
      <div className="fleetContainer">
        <h1>Our Cars</h1>
        <div className="fleetconGRid">
          {cars.map((items: Carproduct) => (
            <div className="fleetpBox">
              <img src={items.image} alt="" className="fleetImg" />
              <div className="fleetDescribe">
                <h3>{items.name}</h3>
                <p>{items.price}</p>
                <p>{items.distance}</p>
                <p>{items.des}</p>
                <a className="bookBut">
                  <Link to="/" className="linkf">
                    Book Now
                  </Link>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
