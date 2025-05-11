import React, { useState, useEffect } from "react";
import "../css/LiveTracking.css";
import mapImage from "../assets/map-image.webp";

function LiveTracking() {
  const [status, setStatus] = useState("Searching for Driver...");
  const [eta, setEta] = useState("Calculating...");

  useEffect(() => {
    setTimeout(() => setStatus("Driver Found 🚗"), 3000);
    setTimeout(() => setEta("5 min"), 5000);
    setTimeout(() => setStatus("Driver is on the way 🛣️"), 7000);
    setTimeout(() => setStatus("Arriving Soon ⏱️"), 12000);
    setTimeout(() => setStatus("Ride Started ✅"), 15000);
  }, []);

  return (
    <div className="tracking-container">
      <div className="tracking-box">
        <h2 className="tracking-title">🚦 Live Ride Tracking</h2>
        <div className="status-section">
          <p className="status-text">{status}</p>
          <p className="eta-text">Estimated Arrival: <strong>{eta}</strong></p>
        </div>

        <div className="map-wrapper">
          <img src={mapImage} alt="Map Tracking" className="map-img" />
        </div>

        <button className="driver-contact-button">📞 Contact Driver</button>
      </div>
    </div>
  );
}

export default LiveTracking;
