import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <p className="text">{props.phonetics[0].text}</p>
      <p>
        <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </p>
    </div>
  );
}
