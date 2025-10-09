import "./Banner.scss";
import Image from "next/image";

import { DefaultButton } from "@/components/Button/buttons.js";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-text">
          <h1>
            <span>
              Kirayə Konteyner
              <br />
              Anbarlar
            </span>
          </h1>
          <DefaultButton label="Əlaqə" size="buttonLarge"></DefaultButton>
        </div>
        <div className="banner-img-wrapper">
          <Image
            src="/imgs/ContainersImg.png"
            alt="Containers"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            priority
          />
        </div>
      </div>
    </div>
  );
}
