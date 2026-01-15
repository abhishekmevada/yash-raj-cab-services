import Navbar from "./Navbar";
import "./Tour.css";
import anand from "/anand.webp";
import ahmedabad from "/ahmedabad.webp";
import gandhinagar from "/gandhinagar.webp";
import junaadh from "/junagadh.webp";
import morbi from "/morbi.webp";
import statuofunity from "/statuofunity.jpg";
import Rajkot from "/Rajkot.webp";
import surat from "/surat.webp";
import vadodra from "/vadodra.webp";
import somnath from "/somnath.jpg";
import dwarka from "/dwarka.jpg";
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
      image: statuofunity,
      name: "Statue of Unity, Gujarat",
    },
    {
      id: 7,
      image: Rajkot,
      name: "Rajkot, Gujarat",
    },
    {
      id: 8,
      image: surat,
      name: "Shivrjarpur Beach, Gujarat",
    },
    {
      id: 9,
      image: vadodra,
      name: "Vadodra, Gujarat",
    },
    {
      id: 10,
      image: somnath,
      name: "Somnath, Gujarat",
    },
    {
      id: 11,
      image: dwarka,
      name: "Dwarka, Gujarat",
    },
  ];

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // 1. UPDATE THESE URLS TO MATCH YOUR ACTUAL BACKGROUND IMAGES
    const imageUrls = [
      "/anand.webp",
      "/ahmedabad.webp",
      "/gandhinagar.webp",
      "/junagadh.webp",
      "/morbi.webp",
      "/navasari.webp",
      "/Rajkot.webp",
      "/surat.webp",
      "/vadodra.webp",
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
        </main>
        <Footer />
      </div>
    </>
  );
}
