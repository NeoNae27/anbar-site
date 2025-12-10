import "./Footer.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <Image
          src="/logo/logo-text-mono.svg"
          alt="Logo"
          width={183}
          height={64}
          unoptimized
        ></Image>

      </div>
    </footer>
  );
}
