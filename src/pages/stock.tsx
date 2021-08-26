import React from "react";
import NavBar from "../components/NavBar";
import Stock from "../components/Stock";

const StockPage = () => {
  return (
    <div className="background">
      <NavBar />
      <div className="flex justify-center"
      >
        <div className="mt7-l mt7-m mt6 pt0-ns pt5 w-60-l w-80 h-100-ns">
        <Stock />
        </div>
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
