import "./Fleet.css";
import Navbar from "./Navbar";
import Hondacity from "/HondaCity.webp";
import HondaAmaze from "/HondaAmaze.webp";
import MarutiSuzuki from "/marusuzi.webp";
import MarutiSuzukiErtiga from "/maertiga.webp";
import TempoTraveller from "/tempotraveller.webp";
import ToyotaInnovaa from "/innovacre.webp";
import ToyotaInnovab from "/toyotainnovab.webp";
import volvo from "/volvob.webp";
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
    // 1. UPDATE THESE URLS TO MATCH YOUR ACTUAL BACKGROUND IMAGES
    const imageUrls = [
      "/HondaCity.webp",
      "/HondaAmaze.webp",
      "/marusuzi.webp",
      "/maertiga.webp",
      "/taverab.webp",
      "/tempotraveller.webp",
      "/innovacre.webp",
      "/toyotainnovab.webp",
      "/volvob.webp",
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
        <main>
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
        </main>
        <Footer />
      </div>
    </>
  );
}
