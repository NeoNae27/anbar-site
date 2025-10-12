"use client";
import "./Advantages.scss";
import DefaultCard from "@/components/Cards/DefaultCard/DefaultCard";

export default function Advantages() {
  const AdvantagesList = [
    {
      icon: "/icons/adv/doc.svg",
      alt: "Doc icon",
      ariaLabel: "Sərfəli şərtlərlə fərdi saxlama icon",
      title: "Sərfəli şərtlərlə fərdi saxlama",
      description:
        "Həm ev əşyaları, həm sənaye malları, həm də şəxsi sənədlər üçün ideal mühitdir.",
    },
    {
      icon: "/icons/adv/map.svg",
      alt: "Map icon",
      ariaLabel: "Optimal yerləşmə və logistika icon",
      title: "Optimal yerləşmə və logistika",
      description:
        "Anbarlarımızın yerləşdiyi məkan xüsusi olaraq əsas magistral yollara yaxınlıq nəzərə alınaraq seçilmişdir",
    },
    {
      icon: "/icons/adv/calenda.svg",
      alt: "Calendar icon",
      ariaLabel: "Qısa müddətli və kiçik həcmli opsiyalar иконка",
      title: "Qısa müddətli və kiçik həcmli opsiyalar",
      description: "Əşyalarınız bizimlə tam sığortalıdır, siz rahat ola ",
    },
    {
      icon: "/icons/adv/shield.svg",
      alt: "Shield icon",
      ariaLabel: "Sığorta icon",
      title: "Sığorta ",
      description:
        "Əşyalarınızı bizə etibar etdikdə, onların yalnız fiziki olaraq deyil, həm də hüquqi olaraq qorunduğuna",
    },
  ];

  return (
    <section className="advantages" aria-labelledby="advantages-title">
      <div className="advantages__container">
        <header className="advantages__header">
          <h2 className="advantages__title">Üstünlüklərimiz</h2>
        </header>
        <div className="advantages__cards">
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
        </div>
      </div>
    </section>
  );
}
