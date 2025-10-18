"use client";
import "./Advantages.scss";
import DefaultCard from "@/components/Cards/DefaultCard/DefaultCard";

export default function Advantages() {
  const AdvantagesList = [
    {
      icon: "/icons/adv/doc.svg",
      alt: "Doc icon",
      ariaLabel: "Sərfəli şərtlər icon",
      title: "Sərfəli şərtlər",
      description:
        "Hər müştərinin ehtiyacına uyğun təklifimiz var",
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
  ];

  return (
    <section className="advantages" aria-labelledby="advantages-title" role="region">
      <div className="advantages__container">
        <header className="advantages__header">
          <h2 className="advantages__title">Üstünlüklərimiz</h2>
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
