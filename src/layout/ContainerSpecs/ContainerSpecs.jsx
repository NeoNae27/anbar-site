import Image from "next/image";
import SmallCard from "@/components/Cards/SmallCard/SmallCard";
import "./ContainerSpecs.scss";

export default function ContainerSpecs() {
  const ContainerSpecList = [
    {
      icon: "/icons/container/camera.svg",
      alt: "Camera icon",
      ariaLabel: "24/7 \n Mühafizə icon",
      title: `24/7 \n Mühafizə`,
      description:
        "Konteynerlərin hər biri daimi təhlükəsizlik kameraları və mühafizə ilə müşahidə olunur",
    },
    {
      icon: "/icons/container/fire.svg",
      alt: "Map icon",
      ariaLabel: "Yanğın Təhlükəsizliyi icon",
      title: "Yanğın Təhlükəsizliyi",
      description:
        "Konteynerlərin hər biri yanğın detektoru ilə təchiz olunub",
    },
    {
      icon: "/icons/container/bulb.svg",
      alt: "Bulb icon",
      ariaLabel: "İşıqlandırma və Elektrik Təchizatı icon",
      title: "İşıqlandırma və Elektrik Təchizatı",
      description:
        "Hər konteynerin öz işıqlandırması və elektrik yuvası mövcuddur",
    },
    {
      icon: "/icons/container/rain.svg",
      alt: "Rain icon",
      ariaLabel: "Nəmişliyə və Temperaturaya Qarşı İzolyasiya icon",
      title: "Nəmişliyə və Temperaturaya Qarşı İzolyasiya",
      description:
        "Konteynerlər mallarınıza zərər gəlməsin üçün izolyasiya olunub",
    },
  ];

  return (
    <section
      className="CS"
      aria-labelledby="ContainerSpecs-title"
      role="region"
    >
      <span className="CS__container">
        <span className="CS__image-wrapper">
          <Image
            src="/imgs/ContainerSizeImg.png"
            alt="Container Specification"
            unoptimized
            width={624}
            height={508}
          />
        </span>
        <span className="CS__text">
          <header className="CS__header">
            <h4 className="CS__title">Konteynerlərin xüsusiyyətləri</h4>
            <p className="CS__description body1">
              Sizə rahat, etibarlı və sərfəli saxlama həlləri təqdim edən fərdi
              konteyner anbarlarımızla xidmətinizdəyik!
            </p>
          </header>

          <span className="CS__cards">
            {ContainerSpecList.map((spec) => (
              <SmallCard
                key={spec.title}
                icon={spec.icon}
                title={spec.title}
                description={spec.description}
              ></SmallCard>
            ))}
          </span>
        </span>
      </span>
    </section>
  );
}
