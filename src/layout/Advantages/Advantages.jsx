"use client";
import "./Advantages.scss";
import DefaultCard from "@/components/Cards/DefaultCard/DefaultCard";

export default function Advantages() {
  const AdvantagesList = [
    {
      icon: "/icons/adv/doc.svg",
      alt: "Doc icon",
      ariaLabel: "Obyekt kodu",
      title: "Obyekt kodu",
      description:
        "Anbarınızın Dövlət Vergi Xidməti sitemində qeydiyyatı üçün obyekt kodu təqdim olunur",
    },
    {
      icon: "/icons/adv/map.svg",
      alt: "Map icon",
      ariaLabel: "Optimal yerləşmə icon",
      title: "Optimal yerləşmə",
      description:
        "Ən böyük ticarət mərkəzlərinin yaxınlığında və magistral yolun kənarında yerləşirik",
    },
    {
      icon: "/icons/adv/calenda.svg",
      alt: "Calendar icon",
      ariaLabel: "Qısa müddətli opsiyalar icon",
      title: "Qısa müddətli opsiyalar",
      description: "Böyük həcmə ehtiyac olmayan və ya yalnız qısa müddət üçün saxlama həlləri axtaranlar üçün ideal seçim",
    },
    {
      icon: "/icons/adv/shield.svg",
      alt: "Shield icon",
      ariaLabel: "Sığorta icon",
      title: "Sığorta ",
      description:
        "Bütün konteynerlərdə saxlanılan mallar sığortalıdır",
    },
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
    <section className="advantages" aria-labelledby="advantages-title" role="region">
      <div className="advantages__container">
        <header className="advantages__header">
          <h2 className="advantages__title">Üstünlüklərimiz</h2>
          <p className="advantages__description body1">
              Sizə rahat, etibarlı və sərfəli saxlama həlləri təqdim edən fərdi
              konteyner anbarlarımızla xidmətinizdəyik!
            </p>
        </header>
        <ul className="advantages__cards">
          {AdvantagesList.map((advantage) => (
            <DefaultCard
              key={advantage.title}
              icon={advantage.icon}
              alt={advantage.alt}
              ariaLabel={advantage.ariaLabel}
              title={advantage.title}
              description={advantage.description}
            ></DefaultCard>
          ))}
        </ul>
      </div>
    </section>
  );
}
