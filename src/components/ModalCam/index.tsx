import React, { useEffect } from "react";
import Webcam from "react-webcam";
import "./index.css";

interface ModalCamProps {
  closeModal: () => void;
}

function ModalCam({ closeModal }: ModalCamProps) {
  useEffect(() => {
    setTimeout(() => {
      console.log("Hello, World!");
    }, 3000);
  }, []);

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "white" }}>Take picture</h1>
      <p style={{ color: "white" }}>Fit your ID card inside the frame</p>
      <p style={{ color: "white" }}>The picture will be taken automatically</p>
      <div className="container">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={{ borderRadius: "15px", height: "90%" }}
        />
        <div className="borderCard" />
      </div>
      <p>aqui va el tectto</p>
      <button className="button-cancel" onClick={closeModal}>
        CANCEL
      </button>
    </div>
  );
}

export default ModalCam;
