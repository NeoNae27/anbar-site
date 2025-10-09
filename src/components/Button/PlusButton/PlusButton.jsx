"use client";

import React, { useState } from "react";
import "./PlusButton.scss";
import classNames from "classnames";

export default function PlusButton({ PopupComponent }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen((prev) => !prev);

  function PlusIcon({ size = 32, color = "#1E1E21" }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="10.5" y="5" width="3" height="14" rx="1.5" fill={color} />
        <rect x="5" y="10.5" width="14" height="3" rx="1.5" fill={color} />
      </svg>
    );
  }

  function MinusIcon({ size = 32, color = "#ffffffff" }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="5" y="10.5" width="14" height="3" rx="1.5" fill={color} />
      </svg>
    );
  }

  return (
    <>
      <button
        onClick={togglePopup}
        className={classNames("button-plus", { active: isOpen })}
      >
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </button>
      {isOpen && PopupComponent && <PopupComponent onClose={toggle} />}
    </>
  );
}
