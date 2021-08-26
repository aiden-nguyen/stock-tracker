import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    history.push("/stock/" + input);
  };

  return (
    <div className="tc">
      <form method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search stocks</span>
        </label>
        <input
          className="f2-ns f3 h3-ns h2 pa3-ns"
          onChange={(e: any) => {
            e.preventDefault();
            setInput(e.target.value);
          }}
          type="text"
          id="header-search"
          placeholder="enter a stock symbol"
          name="s"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
      </form>
      <style>{`
          .visually-hidden {
            clip: rect(0 0 0 0);
            clip-path: inset(50%);
            height: 1px;
            overflow: hidden;
            position: absolute;
            white-space: nowrap;
            width: 1px;
          }
          input:focus, textarea:focus, select:focus {
            outline: none;
          }
          input {
            border-top-style: hidden;
            border-right-style: hidden;
            border-left-style: hidden;
            border-bottom-style: groove;
            background-color: #E8FDF5;
    
          }
          input[type="text"]::placeholder { 
                text-align: center;
            }
    
        `}</style>
    </div>
  );
};

export default SearchBar;
