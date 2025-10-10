"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./DefaultCard.scss";

export default function DefaultCard({
  PopupComponent,
  icon,
  title,
  description,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () =>{setIsOpen((prev) => !prev)};

  const handleCardClick = (e) => {
    console.log("Card clicked");
  };

  // TODO: Add onClick to open PopupComponent

  return (
    <span
      className="card-container"
      onClick={PopupComponent ?? handleCardClick}
    >
      <span className="card-header">
        <Image
          src={icon}
          alt={icon}
          width={80}
          height={80}
          className="icon"
          unoptimized
        ></Image>
      </span>
      <span className="card-body">
        <p className="subtitle1">{title}</p>
        <p className="body2">{description}</p>
      </span>
    </span>
  );
}
