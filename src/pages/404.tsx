import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <div className="background">
        <div className="tc pt7 pb7">
          <div className="b light-purple f2-ns f3">404 Not Found</div>

          <div className="mt3 blue f3-ns f4">
            <Link className="Link no-underline purple" to="/">
              Click here to return to home.
            </Link>
          </div>
        </div>
        <style>{`
            .Link:hover {
                color: #19A974;
        `}</style>
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

export default NotFoundPage;
