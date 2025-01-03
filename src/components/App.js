import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const [parastate, setParaState]=useState("");


  return (
    <div id="main">
        <button id="click" onClick={()=>setParaState("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")}>Click</button>
        {parastate!=="" && <p id="para">{parastate}</p>}
    </div>
  );
}


export default App;
