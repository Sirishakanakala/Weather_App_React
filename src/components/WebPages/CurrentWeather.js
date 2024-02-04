import React from "react";
import Carousel from "../StyleComponents/Carousel";

export default function CurrentWeather() {
  const boxStyle = {
    width: "35vw",
    height: "70vh",
    borderRadius: "0.5rem",
    boxShadow: "0 0.2rem 3rem rgba(0, 0, 0, 0.2)",
    background: " rgba(75, 18, 151, 0.3)", // Adjust transparency level here
    overflow: "hidden",
    transform: "translate3d(0, 0, 0)",
    minWidth: "25rem",
    minHeight: "30rem",
    animation: "drift 3000ms infinite linear",
    position: "relative",
    color: "white", // Text color
    border: "none !important",
    textAlign:"center"
  };

  const infoStyle = {
    position: "center",
    bottom: "0",
    width: "100%",
    height: "45%",
    zIndex: "4",
  };

  const locationStyle = {
    marginTop: "1.5rem",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "2rem",
  };

  const dateStyle = {
    textAlign: "center",
    marginTop: "0.5rem",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "300",
    textTransform: "uppercase",
  };

  const tempStyle = {
    marginTop: "2.5rem",
    textAlign: "center",
    fontSize: "3rem",
  };

  const tempMinMaxStyle = {
    textAlign: "center",
    marginTop: "0.3rem",
    fontWeight: "300",
    fontSize: "1.2rem",
    color: "white",
  };

  const waveStyle = {
    opacity: "0.3",
    position: "absolute",
    top: "140%",
    left: "50%",
    background: "lightgrey", // Grey color for waves
    width: "50rem",
    height: "50rem",
    marginLeft: "-25rem",
    marginTop: "-25rem",
    transformOrigin: "50% 48%",
    borderRadius: "43%",
    animation: "drift 3000ms infinite linear",
    zIndex: "1",
  };

  const waveTwoStyle = {
    animation: "drift 5000ms infinite linear",
    zIndex: "2",
    opacity: "0.2",
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div style={boxStyle}>
              <h1 style={{ textAlign: "center", marginTop:"50px"}}>Current Weather</h1>
              <div className="info mt-4" style={infoStyle}>
                <h4 style={locationStyle}>
                  <i className="fas fa-street-view"></i>Hyderabad, In
                </h4>
                <p id="date" style={dateStyle}>
                  Fri | Feb 2 | 11:30 PM
                </p>
                <h2 className="temp" style={tempStyle}>
                  29.26&deg;C
                </h2>
                <h3 className="tempmin_max" style={tempMinMaxStyle}>
                  Min 29&deg;C | Max 30&deg;C
                </h3>
              </div>
              <div style={waveStyle} className="wave"></div>
              <div style={waveTwoStyle} className="wave -two"></div>
            </div>
          </div>
          <div className="col-md-6">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
