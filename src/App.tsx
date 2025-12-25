import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/Aboutus";
import Fleet from "./components/Fleet";
import Tour from "./components/Tour";
import Contect from "./components/Contect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
          <Route path="/fleets" element={<Fleet />}></Route>
          <Route path="/tour" element={<Tour />}></Route>
          <Route path="/contactus" element={<Contect />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
