"use client";
import "./Button.scss";
import Link from "next/link";
import classNames from "classnames";

/**
 * Button component that renders a button with different styles based on props.
 * @param {Object} props - The properties for the button.
 * @param {string} props.label - The text to display on the button.
 * @param {string} props.size - The size of the button (e.g., "button-lg", "button-md". "button-round").
 * @param {string} props.href - The link to the page
 */

export default function DefaultButton({ label, size, href, click }) {
  const handleDefaultClick = (e) => {
    console.log("Button clicked");
  };

  if (href) {
    return (
      <Link href={href}>
        <a className={classNames("button__default", size)}>{buttonContent}</a>
      </Link>
    );
  }

  return (
    <button
      onClick={click ?? handleDefaultClick}
      className={classNames("button__default", [size])}
    >
      {label}
    </button>
  );
}
