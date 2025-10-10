"use client";
import "./Advantages.scss";
import DefaultCard from "@/components/Cards/DefaultCard/DefaultCard";
import SmallCard from "@/components/Cards/SmallCard/SmallCard.jsx";

export default function Advantages() {
  const AdvantagesList = [
    {
      icon: "/icons/adv/doc.svg",
      title: "Sərfəli şərtlərlə fərdi saxlama",
      description:
        "Həm ev əşyaları, həm sənaye malları, həm də şəxsi sənədlər üçün ideal mühitdir.",
    },
    {
      icon: "/icons/adv/map.svg",
      title: "Optimal yerləşmə və logistika",
      description:
        "Anbarlarımızın yerləşdiyi məkan xüsusi olaraq əsas magistral yollara yaxınlıq nəzərə alınaraq seçilmişdir",
    },
    {
      icon: "/icons/adv/calenda.svg",
      title: "Qısa müddətli və kiçik həcmli opsiyalar",
      description: "Əşyalarınız bizimlə tam sığortalıdır, siz rahat ola ",
    },
    {
      icon: "/icons/adv/shield.svg",
      title: "Sığorta ",
      description:
        "Əşyalarınızı bizə etibar etdikdə, onların yalnız fiziki olaraq deyil, həm də hüquqi olaraq qorunduğuna",
    },
  ];

  return (
    <div className="advantages">
      <div className="advantages-container">
        <div className="advantages-header">
          <h2 className="advantages-title">Üstünlüklərimiz</h2>
        </div>
        <div className="advantages-cards">
          {AdvantagesList.map((advantage) => (
            <DefaultCard
              key={advantage.title}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            ></DefaultCard>
          ))}
        </div>
      </div>
    </div>
  );
}
