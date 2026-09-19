import "./Loading.css";

export default function Loading() {
  return (
    <>
      <div className="loadingContainer">
        <h1 style={{ textAlign: "center" }}>Yash Raj Cab Services</h1>
        <h2 style={{ textAlign: "center" }}>Starting the Engine...</h2>
        <h3 style={{ textAlign: "center" }}>
          <mark>Fasten your seatbelt, we’re almost there.</mark>
        </h3>
        <div className="loadingBox">
          <div className="loader"></div>
        </div>
      </div>
    </>
  );
}
