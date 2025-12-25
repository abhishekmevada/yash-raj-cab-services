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
    </>
  );
}
