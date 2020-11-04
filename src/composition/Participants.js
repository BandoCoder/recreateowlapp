import React from 'react';
import participants from "./store";
import './List.css';

export default function Participants (props) {
    return (
        <div className='list-item'>
          <img src={props.avatar} alt="robot-tag" />
          <ul className="Participants">
            <li className="Participants-head">
              <h3>{props.name}</h3>
            </li>
            <li id={!props.onstage ? "staged" : "unstaged"}>
              <p id='staged'>on stage</p>
              <p id='unstaged'>in session</p>
            </li>
          </ul>
        </div>
    );
}
