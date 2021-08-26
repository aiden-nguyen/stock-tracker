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
        <input
          autoComplete="off"
          className="f2-ns f3"
          onChange={(e: any) => {
            e.preventDefault();
            setInput(e.target.value);
          }}
          type="search"
          id="search"
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
        #search {
            padding: .5rem;
            width: 95%;
            background-color: transparent;
            border-top-style: hidden;
            border-right-style: hidden;
            border-left-style: hidden;
            border-bottom-style: groove;
            transition: translateX 6s ease-in;
            margin-bottom: 15px;
        }

        #search:focus {
            outline: none;
            border-bottom-style: groove;
        }

        #search:focus::-webkit-input-placeholder {
            -webkit-transform: translateX(70%);
            transform: translateX(70%);
            opacity: 0;
        }

        #search:focus::-webkit-input-placeholder:-moz-placeholder {
            -webkit-transform: translateX(70%);
            transform: translateX(70%);
            opacity: 0;
        }

        #search:focus::-webkit-input-placeholder::-moz-placeholder {
            -webkit-transform: translateX(70%);
            transform: translateX(70%);
            opacity: 0;
        }

        #search:focus::-webkit-input-placeholder:-ms-input-placeholder {
            -webkit-transform: translateX(70%);
            transform: translateX(70%);
            opacity: 0;
        }

        #search:focus::-webkit-input-placeholder::-ms-input-placeholder {
            -webkit-transform: translateX(70%);
            transform: translateX(70%);
            opacity: 0;
        }

        #search::-webkit-input-placeholder {
            text-align: center;
            -webkit-transition: ease-in 0.3s;
            transition: ease-in 0.3s;
            -webkit-transform-origin: 0 50%;
            transform-origin: 0 50%;
        }

        #search:-moz-placeholder { 
            -webkit-transition: ease-in 0.3s;
            transition: ease-in 0.3s;
            transform-origin: 0 50%;
        }

        #search::-moz-placeholder {
            -webkit-transition: ease-in 0.3s;
            transition: ease-in 0.3s;
            transform-origin: 0 50%;
        }

        #search:-ms-input-placeholder {
            -webkit-transition: ease-in 0.3s;
            transition: ease-in 0.3s;
            transform-origin: 0 50%;
        }

        #search::-ms-input-placeholder {
            -webkit-transition: ease-in 0.3s;
            transition: ease-in 0.3s;
            transform-origin: 0 50%;
        }
        `}</style>
    </div>
  );
};

export default SearchBar;
