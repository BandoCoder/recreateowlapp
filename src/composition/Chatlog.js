import React from "react";

export default function Chatlog(props) {
  return (
    <div className="logBox">
      <h3>Log</h3>
      <div className="chatLog">
        {props.participants.map((participant) => (
          <div key={participant.id}>
            <h4>{participant.name}</h4>
            <div className="logEvents">
              {props.chatEvents.map((participantLogs) => (
                <div key={participantLogs.participantId}>
                  <p>{participantLogs.type}</p>
                  <p>{participantLogs.message}</p>
                  <p>{Date(participantLogs.timestamp)}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
