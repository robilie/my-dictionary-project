import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  console.log(props.dataFromResponse);

  if (props.dataFromResponse) {
    return (
      <div className="Results">
        <section>
          <h2>{props.dataFromResponse.word}</h2>
          <Phonetics phonetics={props.dataFromResponse.phonetics} />
        </section>
        {props.dataFromResponse.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
                <Meaning meaning={meaning} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
