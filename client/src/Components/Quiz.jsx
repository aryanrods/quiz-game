import React from "react";
import Questions from "./Questions";

export default function Quiz() {
  function handlePrev() {
    console.log("clicked prev");
  }
  function handleNext() {
    console.log("clicked next");
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Applications</h1>
      <Questions></Questions>
      {/*display questions*/}
      <div className="grid">
        <button className="btn prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="btn next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
