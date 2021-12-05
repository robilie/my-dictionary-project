import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Dictionary</h1>
      <div className="container app-box">
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          This project was coded by Roberta O. It is open-sourced on{" "}
          <a
            href="https://github.com/robilie/my-dictionary-project.git"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://eager-elion-fb9905.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
