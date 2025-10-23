"use client";
import "./Banner.scss";
import Image from "next/image";

import { DefaultButton } from "@/components/Button/buttons.js";

export default function Banner() {
  return (
    <section
      className="banner"
      aria-label="Əsas banner - konteyner anbarının icarəsi"
      role="region"
    >
      <section className="banner__container">
        <div className="banner__container-text">
          <h1>
            <span>
              Konteyner Anbarlar 
              <br />
              İcarəsi
            </span>
          </h1>
          <DefaultButton
            label="Əlaqə"
            href="https://wa.me/message/GKTHBWSO45D5G1"
            size={"button-lg"}
            title="Əlaqə forması vasitəsilə bizimlə əlaqə saxlayın"
            aria-label="Bizimlə əlaqə saxlayın"
          ></DefaultButton>
        </div>
        <div
          className="banner__container-img-wrapper"
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
      </section>
    </section>
  );
}
