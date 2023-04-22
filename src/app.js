/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function onLoad() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let whoEX = Math.floor(Math.random() * who.length);
    let actionEX = Math.floor(Math.random() * action.length);
    let whatEX = Math.floor(Math.random() * what.length);
    let whenEX = Math.floor(Math.random() * when.length);

    return (
      who[whoEX] +
      " " +
      action[actionEX] +
      " " +
      what[whatEX] +
      " " +
      when[whenEX]
    );
  }
  let button = document.getElementById("btn");
  button.addEventListener("click", function() {
    const excusa = onLoad();

    document.querySelector("#excusee").innerHTML = excusa;
  });
};
