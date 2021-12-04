import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics[0].text);
  return (
    <div className="Phonetics">
      <p>{props.phonetics[0].text}</p>
      <p>
        <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </p>
    </div>
  );
}
