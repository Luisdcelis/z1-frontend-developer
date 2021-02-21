import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import TakePictureButton from "./components/TakePictureButton";
import ModalCam from "./components/ModalCam/index";
import Desktop from "./assets/desktop.jpg";
import { ResponseType } from "./services/api";

function App() {
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [response, setResponse] = useState<ResponseType>();

  return open ? (
    <>
      <img src={Desktop} alt="background" className="bg-image" />
      <div className="modal-cam">
        <ModalCam
          closeModal={() => setOpen(!open)}
          imgSrc={imageSrc}
          setImage={(newImageSrc) => setImageSrc(newImageSrc)}
          response={response}
          setResponse={(newResponse) => setResponse(newResponse)}
        />
      </div>
    </>
  ) : (
    <>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: "40px 0" }}>Scan your ID</h1>
        <div style={{ fontSize: 22, marginBottom: "20px" }}>
          Take a picture. It may take time to validate your personal information
        </div>
        {imageSrc === null ? (
          <TakePictureButton openModal={() => setOpen(!open)} />
        ) : (
          <>
            <div className="img-container">
              <img
                src={imageSrc}
                alt="last-one"
                className={
                  response?.summary.outcome !== "Approved"
                    ? "photo photo-red"
                    : "photo  photo-green"
                }
              />
              {response?.summary.outcome !== "Approved" && (
                <button
                  onClick={() => setOpen(!open)}
                  className="button-retake"
                >
                  RETAKE PICTURE
                </button>
              )}
            </div>
            <div
              style={{
                backgroundColor:
                  response?.summary.outcome === "Approved"
                    ? "lightgreen"
                    : "red",
                width: "100px",
                padding: "5px 10px",
                borderRadius: "30px",
              }}
            >
              {response?.summary.outcome === "Approved" ? (
                <p>ACCEPTED</p>
              ) : (
                <p>REJECTED</p>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
