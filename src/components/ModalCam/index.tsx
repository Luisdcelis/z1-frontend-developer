import React, { useCallback, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import "./index.css";
import { sendPicture, ResponseType } from "../../services/api";

interface ModalCamProps {
  closeModal: () => void;
  imgSrc: string | null;
  setImage: (newImageSrc: string | null) => void;
  response: ResponseType | undefined;
  setResponse: (newResponse: ResponseType) => void;
}

function ModalCam({
  closeModal,
  imgSrc,
  setImage,
  response,
  setResponse,
}: ModalCamProps) {
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const img = webcamRef.current.getScreenshot();
      setImage(img);
    }
  }, [webcamRef, setImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      capture();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imgSrc) {
      (async () => {
        const res = await sendPicture(imgSrc);
        setResponse(res);
        console.log(res);
        if (res.summary.outcome === "Approved") {
          closeModal();
        }
      })();
    }
  }, [imgSrc]);

  return (
    <div className="container">
      <h1 style={{ color: "white" }}>Take picture</h1>
      <p style={{ color: "white" }}>Fit your ID card inside the frame</p>
      <p style={{ color: "white" }}>The picture will be taken automatically</p>
      <Webcam
        audio={false}
        ref={webcamRef}
        height={400}
        screenshotFormat="image/jpeg"
        className={
          response?.summary.outcome !== "Approved"
            ? "border border-red"
            : "border  border-green"
        }
      />
      <p
        className={
          response?.summary.outcome !== "Approved"
            ? "paragraph red"
            : "paragraph green"
        }
      >
        {response?.summary.outcome}
      </p>
      <button className="button-cancel" onClick={closeModal}>
        CANCEL
      </button>
    </div>
  );
}

export default ModalCam;
