import React from "react";
import logo from "./logo.svg";
import "./App.css";
import QrReader from "react-qr-reader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>

      <QrReader
        delay={300}
        onError={(err) => console.log(err)}
        onScan={(data) => console.log(data)}
        onImageLoad={(data) => console.log(data)}
        style={{ width: "100%" }}
        legacyMode={true}
      />
    </div>
  );
}

export default App;
