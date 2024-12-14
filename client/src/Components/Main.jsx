import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";

export default function Main() {
  const inputRef = useRef(null);
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Applications</h1>

      <ol>
        <li>rule1</li>
        <li>rule2</li>
        <li>rule3</li>
      </ol>

      <form id="form">
        <input
          ref={inputRef}
          className="userid"
          type="text"
          placeholder="Username*"
        />
      </form>
      <div className="start"></div>
      <Link className="btn" to={"quiz"}>
        Start Quiz
      </Link>
    </div>
  );
}
