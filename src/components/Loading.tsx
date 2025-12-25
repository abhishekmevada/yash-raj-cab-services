import "./Loading.css";

export default function Loading() {
  return (
    <>
      <div className="loadingContainer">
        <h1>Yash Raj Cab Services</h1>
        <h2>Starting the Engine...</h2>
        <h3>
          <mark>Fasten your seatbelt, we’re almost there.</mark>
        </h3>
        <div className="loadingBox">
          <div className="loader"></div>
        </div>
      </div>
    </>
  );
}
