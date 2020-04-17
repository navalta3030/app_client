/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "app";

import "bootstrap/dist/css/bootstrap.min.css";
import "_assets/scss/index.scss";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
