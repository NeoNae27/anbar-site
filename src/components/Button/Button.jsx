"use client";
import "./Button.scss";
import Link from "next/link";
import classNames from "classnames";

/**
 * Button component that renders a button with different styles based on props.
 * @param {Object} props - The properties for the button.
 * @param {string} props.label - The text to display on the button.
 * @param {string} props.size - The size of the button (e.g., "button-lg", "button-md". "button-round").
 * @param {string} props.type - The type of the button (e.g., "color", "outline").
 * @param {string} props.href - The link to the page
 */
export default function DefaultButton({ label, size, type, href, click }) {
  const handleDefaultClick = (e) => {
    console.log("Button clicked");
  };

  if (href) {
    return (
      <Link href={href}>
        <a className={classNames("button", size, type)}>{label}</a>
      </Link>
    );
  }

  return (
    <button
      onClick={click ?? handleDefaultClick}
      className={classNames("button", [size], [type])}
    >
      {label}
    </button>
  );
}
