"use client";
import "./Question.scss";
import React, { useState } from "react";
import PlusButton from "@/components/Button/PlusButton/PlusButton.jsx";

export default function Question({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={`question${isOpen ? " question--open" : ""}`} role="listitem">
      <span
        role="button"
        className="question__container"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="answer-content"
      >
        <h6 className="question__text">{question}</h6>
        <PlusButton isOpen={isOpen}></PlusButton>
      </span>
      {isOpen && (
        <div
          id="answer-content"
          className="question__answer"
          role="region"
          aria-live="polite"
        >
          <h4 className="question__answer-title">Cavab budur</h4>
          <dd><p className="question__answer-text body1">{answer}</p></dd>
        </div>
      )}
    </div>
  );
}
