import Navbar from "./Navbar";
import "./Tour.css";
import anand from "/anand.jpg";
import ahmedabad from "/ahmedabad.jpg";
import gandhinagar from "/gandhinagar.jpg";
import junaadh from "/junagadh.jpg";
import morbi from "/morbi.jpg";
import navasari from "/navasari.jpg";
import Rajkot from "/Rajkot.jpg";
import surat from "/surat.jpg";
import vadodra from "/vadodra.jpg";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import Loading from "./Loading";

type tourPro = {
  id: number;
  image: string;
  name: string;
};

export default function Tour() {
  const tour = [
    {
      id: 1,
      image: anand,
      name: "Anand, Gujarat",
    },
    {
      id: 2,
      image: ahmedabad,
      name: "Ahmedabad, Gujarat",
    },
    {
      id: 3,
      image: gandhinagar,
      name: "Gandhinagar, Gujarat",
    },
    {
      id: 4,
      image: junaadh,
      name: "Junaadh, Gujarat",
    },
    {
      id: 5,
      image: morbi,
      name: "Morbi, Gujarat",
    },
    {
      id: 6,
      image: navasari,
      name: "Navasari, Gujarat",
    },
    {
      id: 7,
      image: Rajkot,
      name: "Rajkot, Gujarat",
    },
    {
      id: 8,
      image: surat,
      name: "Surat, Gujarat",
    },
    {
      id: 9,
      image: vadodra,
      name: "Vadodra, Gujarat",
    },
  ];

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // 1. UPDATE THESE URLS TO MATCH YOUR ACTUAL BACKGROUND IMAGES
    const imageUrls = [
      "/anand.jpg",
      "/ahmedabad.jpg",
      "/gandhinagar.jpg",
      "/junagadh.jpg",
      "/morbi.jpg",
      "/navasari.jpg",
      "/Rajkot.jpg",
      "/surat.jpg",
      "/vadodra.jpg",
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
        <div className="tourContainer">
          <h1>Our Tourist Places</h1>
          <div className="tourGridcontainer">
            {tour.map((it: tourPro) => (
              <div className="tourBox">
                <img src={it.image} alt={it.name} className="tourImg" />
                <h3 className="tourDec">{it.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
