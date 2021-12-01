import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.dataFromResponse);

  if (props.dataFromResponse) {
    return (
      <div className="Results">
        <h2>{props.dataFromResponse.word}</h2>
        {props.dataFromResponse.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
