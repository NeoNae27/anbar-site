import "./Banner.scss";
import Image from "next/image";

import { DefaultButton } from "@/components/Button/buttons.js";

export default function Banner() {
  return (
    <section
      className="banner"
      aria-label="Əsas banner - konteyner anbarının icarəsi"
    >
      <div className="banner-container">
        <div className="banner-text">
          <h1>
            <span>
              Kirayə Konteyner
              <br />
              Anbarlar
            </span>
          </h1>
          <DefaultButton
            label="Əlaqə"
            size="buttonLarge"
            title="Əlaqə forması vasitəsilə bizimlə əlaqə saxlayın"
            aria-label="Bizimlə əlaqə saxlayın"
          ></DefaultButton>
        </div>
        <div
          className="banner-img-wrapper"
          role="img"
          aria-label="Konteyner anbarları"
        >
          <Image
            src="/imgs/BannerContainersImgs/ContainersImg-Desktop.png"
            alt="Containers"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            unoptimized
            priority
          />
        </div>
      </div>
    </section>
  );
}
