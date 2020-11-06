import React from "react";
import "./Stage.css";

export default function Stage(props) {
  return (
    <div className="stageBox">
      <h2>Stage</h2>
      <div className="stage">
        {props.onStage.map((participant) => (
          <div key={participant.id}>
            <h3>{participant.name}</h3>
            <img className="stageList" src={participant.avatar} alt="robot" />
          </div>
        ))}
      </div>
    </div>
  );
}
