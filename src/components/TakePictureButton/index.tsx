import React from "react";
import CardImage from "../../assets/CardImage.png";
import "./index.css";

interface TakePictureButtonProps {
  openModal: () => void;
}

function TakePictureButton({ openModal }: TakePictureButtonProps) {
  return (
    <div style={{ position: "relative" }}>
      <img src={CardImage} alt={"card"} width={"40%"} />
      <button className="btn-picture" onClick={openModal} />
    </div>
  );
}

export default TakePictureButton;
