import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Stock from "../components/Stock";

const StockPage = () => {
  return (
    <div className="background">
      <NavBar />
      <div className=""
        style={{
          position: "absolute",
          left: "50%",
          top: "44%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Stock />
      </div>
      <style>{`
        .background {
            background-color : #E8FDF5;
            height : 100vh;
            min-height: 100vh;
        `}</style>
    </div>
  );
};

export default StockPage;
