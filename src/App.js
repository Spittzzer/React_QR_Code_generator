import { useState } from "react";
import QRCode from "qrcode";
import "./index.css";

function App() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const generateQrCode = () => {
    QRCode.toDataURL(url, { width: 800, margin: 2, scale: 10 }, (err, url) => {
      if (err) return console.error(err);
      console.log(url);
      setQr(url);
    });
  };

  return (
    <div className="app">
      <h1>PERSONAL QR CODE GENERATOR</h1>
      <input
        type="text"
        placeholder="e.g: https://www.google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="button" onClick={generateQrCode}>
        Generate
      </button>
      {qr && (
        <>
          <img src={qr} alt="qr code" />
          <a href={qr} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
