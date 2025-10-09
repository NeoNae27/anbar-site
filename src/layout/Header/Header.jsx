import Image from "next/image";
import "./Header.scss";

export default function Header({}) {
  return (
    <header className="header">
      <div className="header-container">
        <div>
          <Image
            src={"/logo/logo-text-color.svg"}
            alt="None"
            width="100"
            height="32"
            priority 
          ></Image>
        </div>
        <span className="phone-number">
          <Image
            src="/icons/call.svg"
            alt="Phone"
            width="16"
            height="16"
            priority 
          ></Image>
          <a className="body1" href="tel:+994554441212" >
            +994 55 444 12 12
          </a>
        </span>
      </div>
    </header>
  );
}
