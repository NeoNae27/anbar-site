import Image from "next/image";
import "./Header.scss";

export default function Header({}) {
  return (
    <header className="header" role="banner">
      <div className="header__container">
        <div className="header__logo">
          <Image
            src={"/logo/logo-text-color.svg"}
            alt="Anbar.al - konteyner anbarları icarəyə verilir"
            width="100"
            height="32"
            priority
            title="Anbar.al"
          ></Image>
        </div>
        <div className="header__number">
          <Image
            src="/icons/call.svg"
            alt="Phone"
            width="16"
            height="16"
            priority
          ></Image>
          <a
            className="body1"
            href="tel:+994554441212"
            itemProp="telephone"
            aria-label="Zəng edin +994 55 444 12 12"
            title="Zəng edin +994 55 444 12 12"
          >
            +994 55 444 12 12
          </a>
        </div>
      </div>
    </header>
  );
}
