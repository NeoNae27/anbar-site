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

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCardClick = (e) => {
    console.log("Card clicked");
  };

  // TODO: Add onClick to open PopupComponent

  return (
    <div className="card">
      <span
        className="card__container"
        onClick={PopupComponent ?? handleCardClick}
      >
        <span className="card__header">
          <Image
            src={icon}
            alt={icon}
            width={80}
            height={80}
            className="card__icon"
            unoptimized
          ></Image>
        </span>
        <span className="card__body">
          <p className="subtitle1">{title}</p>
          <p className="body2">{description}</p>
        </span>
      </span>
    </div>
  );
}
