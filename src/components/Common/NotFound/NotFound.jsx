import React from "react";
import "./NotFound.css";

function Error(props) {
  window.onload = function () {
    // finds #type-in
    var paragraph = document.getElementById("type-in");
    var supparagraph = document.getElementById("type-after");
    // saves its content
    var text = paragraph.innerHTML;
    var textafter = supparagraph.innerHTML;
    // clears content
    paragraph.innerHTML = "";
    supparagraph.innerHTML = "";

    // for each letter in its content
    for (var i = 0, len = text.length; i < len; i++) {
      (function (i) {
        window.setTimeout(function () {
          // adds the letter
          paragraph.innerHTML += text[i];
          // waits 0.1s
        }, i * 100);
      })(i);
    }
    window.setTimeout(function () {
      paragraph.style.borderRight = "3px solid #222";
      supparagraph.style.borderRight = "3px solid #555";
      for (var i = 0, len = textafter.length; i < len; i++) {
        (function (i) {
          window.setTimeout(function () {
            // adds the letter
            supparagraph.innerHTML += textafter[i];
            // waits 0.1s
          }, i * 100);
        })(i);
      }
    }, text.length * 100 + 200);
  };

  return (
    <div className="notfound">
      <p class="back">{/* <a href="#/">back to main page</a> */}</p>
      <p id="type-in">Error 404</p>
      <p id="type-after">page not found</p>
    </div>
  );
}

export default Error;
