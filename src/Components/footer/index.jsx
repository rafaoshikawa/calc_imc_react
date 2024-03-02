import React from "react";
import reactImage from "../../assets/react.png";

function footer() {
  return (
    <footer className="container">
      <div className="footerContainer">
        <p>Rafa Oshikawa</p>
        <p>
          primeiro projeto desenvolvido com
          <span className="react">
            {" "}
            React <img src={reactImage} alt="React Logo" className="reactLogo" />
          </span>
        </p>
      </div>
    </footer>
  );
}
export default footer;
