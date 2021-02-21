import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TakePictureButton from "./components/TakePictureButton";
import ModalCam from "./components/ModalCam/index";
import Desktop from "./assets/desktop.jpg";

function App() {
  const [open, setOpen] = useState(false);

  return open ? (
    <>
      <img src={Desktop} alt="background" className="bg-image" />
      <div className="modal-cam">
        <ModalCam closeModal={() => setOpen(!open)} />
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
        <TakePictureButton openModal={() => setOpen(!open)} />
      </div>
    </>
  );
}

export default App;
