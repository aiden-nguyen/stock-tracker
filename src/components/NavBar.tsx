import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div>
      <div className="topnav">
        <div className="flex flex-row mb3 pb3-ns pt2 pb2 mt3-ns mt2">
          <div className="items-center topnav-container fit">
            <Link className="ml4-ns ml3 f2-ns f3 Link no-underline white" to="/">
              home
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .Link:hover {
                color: #b3;
        }
        .fit {
          width: fit-content;
        }
        .topnav {
          background-color: #022C39;
          transition: background-color 0.15s ease-in;
          overflow: hidden;
          position: fixed;
          top: 0;
          width: 100%;
          height: 75;
          z-index: 1100; 
        }

        .topnav-container {
          width: 90vw;
          max-width: 100rem;
          margin: 0 auto;
        }

        .title {
          font-weight: 400;
          font-size: 1.5rem;
          display: block;
          color: white;
          padding: 1rem 0;
          text-decoration: none;
        }


        .flex-fill {
          flex: 1 1;
          min-width: 0; /* 1 */
          min-height: 0; /* 1 */
        }

        .trans-o {
          transition: opacity 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

NavBar.defaultProps = { showBackground: false };

NavBar.displayName = "NavBar";
export default NavBar
