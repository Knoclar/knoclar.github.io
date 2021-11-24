import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./css/tailwind.css";

ReactDOM.render(<App />, document.getElementById("root"));

let copiable = document.querySelectorAll(".copiable");
let range = document.createRange();
copiable.forEach((copiable_element) => {
  copiable_element.addEventListener("click", function (e) {
    // console.log(this);
    console.log(this.firstChild);
    range.selectNode(this.firstChild);
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
    } catch (err) {
      console.log("Unable to copy");
    }

    window.getSelection().removeAllRanges();
  });
});
