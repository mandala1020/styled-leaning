import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const Input = styled.input.attrs({
  //  static props
  type: "password",

  //  dynamic props
  margin: props => props.size || "1em",
  padding: props => props.size || "1em"
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

function App() {
  return (
    <div>
      <Input placeholder="A small text input" size="1em" />
      <br />
      <Input placeholder="A bigger text input" size="2em" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
