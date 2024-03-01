import React from "react";
import reactImage from "../../assets/react.png";

function footer() {
  return (
    <footer class="container">
      <div class="footer-container">
        <p>Rafa Oshikawa</p>
        <p>
          primeiro projeto desenvolvido com
          <span class="react">
            {" "}
            React <img src={reactImage} alt="React Logo" class="react-logo" />
          </span>
        </p>
      </div>
    </footer>
  );
}
export default footer;
