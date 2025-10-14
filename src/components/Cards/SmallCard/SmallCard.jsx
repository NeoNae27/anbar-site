"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./SmallCard.scss";

export default function SmallCard({
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
    <div className="smallCard">
      <span
      className="smallCard__container"
      onClick={PopupComponent ?? handleCardClick}
    >
      <span className="smallCard__header">
        <Image
          src={icon}
          alt={icon}
          width={48}
          height={48}
          className="smallCard__icon"
          unoptimized
        ></Image>
      </span>
      <span className="smallCard__body">
        <p className="subtitle1">{title}</p>
        <p className="body2">{description}</p>
      </span>
    </span>
    </div>
  );
}
