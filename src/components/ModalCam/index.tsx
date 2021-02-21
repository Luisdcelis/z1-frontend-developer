import React from "react";
import Webcam from "react-webcam";
import "./index.css";

function ModalCam() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Take picture</h1>
      <p>Fit your ID card inside the frame</p>
      <p>The picture will be taken automatically</p>
      <div className="container">
        <Webcam audio={false} style={{ borderRadius: "15px", height: "90%" }} />
        <div className="borderCard" />
      </div>
    </div>
  );
}

export default ModalCam;
