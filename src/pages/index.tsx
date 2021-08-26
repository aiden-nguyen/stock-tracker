import React from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div>
      <div className="background">
       
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <SearchBar />
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

export default HomePage;
