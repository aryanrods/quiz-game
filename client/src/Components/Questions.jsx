import { useState } from "react";
import React from "react";

export default function Questions() {
  const [checked, setChecked] = useState(undefined);
  function onSelect() {
    setChecked(true);
    console.log("Radio button Checked");
  }
  return (
    <div className="questions">
      <h2 className="text-light">Simple question 1</h2>

      <ul>
        <li>
          <input
            type="radio"
            value={checked}
            name="options"
            id="q1-option"
            onChange={onSelect()}
          />
          <label htmlFor="q1-option" className="text-primary" option></label>
          <div className="check checked"></div>
        </li>
      </ul>
    </div>
  );
}
