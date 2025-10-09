"use client";
import "./Button.scss";
import Link from "next/link";
import classNames from "classnames";

/**
 * Button component that renders a button with different styles based on props.
 * @param {Object} props - The properties for the button.
 * @param {string} props.label - The text to display on the button.
 * @param {string} props.size - The size of the button (e.g., "button-lg", "button-md". "button-round").
 * @param {string} props.type - The type of the button (e.g., "label", "plus").
 * @param {string} props.href - The link to the page
 */

function PlusIcon({ size = 32, color = "#1E1E21" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="10.5" y="5" width="3" height="14" rx="1.5" fill={color}/>
      <rect x="5" y="10.5" width="14" height="3" rx="1.5" fill={color}/>
    </svg>
  );
}

export default function DefaultButton({ label, size, type, href, click }) {
  const handleDefaultClick = (e) => {
    console.log("Button clicked");
  };

  const buttonContent = type === "plus" ? <PlusIcon /> : label;

  if (href) {
    return (
      <Link href={href}>
        <a className={classNames("button", size, type)}>{buttonContent}</a>
      </Link>
    );
  }

  return (
    <button
      onClick={click ?? handleDefaultClick}
      className={classNames("button", [size], [type])}
    >
      {buttonContent}
    </button>
  );
}
