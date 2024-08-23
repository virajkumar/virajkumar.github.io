import React, { FC } from "react";
import "./AlgorithmIO.css";
import Input from "./Input.tsx";
import Output from "./Output.tsx";
import Example from "./Example.tsx";

const AlgorithmIO: FC = () => {
  return (
    <div id="algorithmio-container">
      <Input />
      <Output />
      <Example />
    </div>
  );
};

export default AlgorithmIO;
