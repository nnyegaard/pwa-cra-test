import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import QrReader from "react-qr-reader";

function App() {
  const ref: React.RefObject<any> = React.createRef();

  const [value, setValue] = useState("empty");

  return (
    <div className="App">
      QR reader
      <QrReader
        delay={300}
        onError={(err) => <div>{err}</div>}
        onScan={(data) => setValue(data ?? "null value returned")}
        onImageLoad={(data) => <div>{data}</div>}
        legacyMode={false}
      />
      {/* <input width="200px" height="200px" type="button" value="Submit QR Code" onClick={() => ref.qrReader1.openImageDialog()} /> */}
      <div>Value is: {value}</div>
    </div>
  );
}

export default App;
