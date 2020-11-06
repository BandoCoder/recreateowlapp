import React from "react";
import "./Participants.css";

export default function Participants(props) {
  return (
    <div className="list-item">
      <h2>Participants</h2>
      {props.inSession.map((participant) => (
        <div key={participant.id}>
          <img className="partList" src={participant.avatar} alt="robot" />
          <h3>{participant.name}</h3>
          <div>{participant.inSession ? "In Session" : "Not in Session"}</div>
        </div>
      ))}
      {props.outSession.map((participant) => (
        <div key={participant.id}>
          <img className="partList" src={participant.avatar} alt="robot" />
          <h4>{participant.name}</h4>
          <div>{participant.inSession ? "In Session" : "Not In Session"}</div>
        </div>
      ))}
    </div>
  );
}
