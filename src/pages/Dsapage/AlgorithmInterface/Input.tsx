import React, { FC } from "react";
import "./Input.css";

const Input: FC = () => {
  return (
    <div id="input-container">
      <form>
        <label htmlFor="">Enter Input:</label>
        <br />
        <input type="text" id="input" name="input" size={75} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
