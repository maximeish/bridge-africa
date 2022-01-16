import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(
  <>
    <ColorModeScript />
    <App />
  </>,
  document.getElementById("root")
);
