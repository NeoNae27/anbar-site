import Image from "next/image";
import SmallCard from "@/components/Cards/SmallCard/SmallCard";
import "./ContainerSpecs.scss";

export default function ContainerSpecs() {
  const ContainerSpecList = [
    {
      icon: "/icons/container/camera.svg",
      title: `24/7 \n Mühafizə`,
      description:
        "Anbarlarımızın yerləşdiyi məkan xüsusi olaraq əsas magistral yollara yaxınlıq nəzərə alınaraq seçilmişdir",
    },
    {
      icon: "/icons/container/fire.svg",
      title: "Yanğın Təhlükəsizliyi",
      description:
        "Anbarlarımızın yerləşdiyi məkan xüsusi olaraq əsas magistral yollara yaxınlıq nəzərə alınaraq seçilmişdir",
    },
    {
      icon: "/icons/container/bulb.svg",
      title: "Fərdi İşıqlandırma və Elektrik Təchizatı",
      description:
        "Anbarlarımızın yerləşdiyi məkan xüsusi olaraq əsas magistral yollara yaxınlıq nəzərə alınaraq seçilmişdir",
    },
    {
      icon: "/icons/container/rain.svg",
      title: "Nəmişlik və Temp. İzolyasiyası",
      description:
        "Anbarlarımızın yerləşdiyi məkan xüsusi olaraq əsas magistral yollara yaxınlıq nəzərə alınaraq seçilmişdir",
    },
  ];

  return (
    <div className="CS">
      <span className="CS-container">
        <span className="CSimage-wrapper">
          <Image
            src="/imgs/ContainerSizeImg.png"
            alt="Container Specification"
            unoptimized
            width={624}
            height={508}
          />
        </span>
        <span className="CS-text">
          <span className="CS-header">
            <h4 className="CS-title">Container Specifications</h4>
            <p className="CS-description body1">
              Sizə rahat, etibarlı və sərfəli saxlama həlləri təqdim edən fərdi
              konteyner anbarlarımızla xidmətinizdəyik!
            </p>
          </span>

          <span className="CS-cards">
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
    </div>
  );
}
