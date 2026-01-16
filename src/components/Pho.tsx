import "./Pho.css";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Pho() {
  return (
    <>
      <div className="fContainer">
        <a href="tel:+919904899229" target="_blank" className="aIco">
          <IoCall />
        </a>
        <a href="https://wa.me/+919904899229" target="_blank" className="aIcb">
          <IoLogoWhatsapp />
        </a>
      </div>
    </>
  );
}
