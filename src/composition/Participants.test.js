import React from "react";
import ReactDOM from "react-dom";
import Participants from "./Participants";
import { inSession, outSession } from "./store";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Participants inSession={inSession} outSession={outSession} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
