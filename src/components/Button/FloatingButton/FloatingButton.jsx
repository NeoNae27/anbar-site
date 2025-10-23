"use client";
import Link from "next/link";
import "./FloatingButton.scss";
import Image from "next/image";
import classNames from "classnames";

export default function FloatingButton({href}) {
  return (
    <Link href={href} className="floatingButton">
      <button className={classNames("floatingButton")}>
        <Image alt="What's App icon" src={"/icons/whatsapp.svg"} width={32} height={32}></Image>
      </button>
    </Link>
  );
}
