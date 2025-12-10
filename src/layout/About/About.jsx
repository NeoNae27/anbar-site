"use client";
import { useState } from "react";
import "./About.scss";
import Image from "next/image";

import UserJourney from "@/components/UserJourney/UserJourney.jsx";
import Question from "@/components/Questions/Question.jsx";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

  const Questions = [
    {
      question: "Mallar necə konteynerə yerləşdirilir və boşaldılır?",
      answer:
        "Müqavilə bağlandıqdan sonra, xüsusi icazə vərəqəsini anbarımızın girişində təqdim edərək, mallarınızla ərazimizə daxil olub müqavilədə qeyd olunan konteynerə yükləyə bilərsiniz. Malların yerləşdirilməsi və boşaldılması ya öz gücünüzlə, ya da əlavə ödəniş müqabilində bizim tərəfimizdən təqdim olunan işçi qüvvəsi və ya çəngəlli yükqaldırıcı vasitəsilə həyata keçirilir",
    },
    {
      question: "Mallarımı günün hansı vaxtı götürə bilərəm?",
      answer:
        "Anbarımız hər gün 24 saat açıqdır. Lakin saat 23:00–08:00 arası daxil olmaq istəsəniz, 17:00-dan gec olmayaraq anbarımızın ofis heyətini (+994 55 444 12 12 / info@anbar.al) məlumatlandırmağınız xahiş olunur",
    },
    {
      question: "Əraziyə nəqliyyat dexil ola bilər?",
      answer:
        "Bəli, minik avtomobillərdən tutmuş, tırlara qədər ərazimizdə hərəkət etmək mümkündür",
    },
    {
      question: "Əraziyə giriş icazəsi necə alınır?",
      answer:
        "Müqavilə imzalandıqdan sonra, siz təyin etdiyiniz şəxslərin məlumatlarını ofis əməkdaşlarımıza təqdim edirsiniz. Bundan sonra, qısa zamanda sizə icazə vərəqələri təqdim edilir",
    },
  ];

  const tabs = [
    { id: "about", label: "BİZ KİMİK?", img: "/imgs/value.png" },
    {
      id: "values",
      label: "DƏYƏRLƏRİMİZ VƏ ÜSTÜNLÜKLƏRİMİZ",
      img: "/imgs/shuttle.png",
    },
    { id: "mission", label: "MƏQSƏDİMİZ", img: "/imgs/target.png" },
  ];

  const content = {
    about:
      "Sizə rahat, etibarlı və sərfəli saxlama həlləri təqdim edən fərdi konteyner anbarlarımızla xidmətinizdəyik! Əsas magistral yollara çıxışı olan ideal yerləşməmiz və müasir logistika imkanlarımızsayəsində sizin üçün maksimum əlverişli şərait yaradırıq.",
    values: "Контент о ценностях...",
    mission:
      "Bizim əsas məqsədimiz sizə etibarlı və sərfəli saxlama imkanları təqdim edərək əşyalarınızı təhlükəsiz şəraitdə qorumaqdır. Bizimlə əlaqə saxlayın və sizin üçün ən uyğun saxlama həllini birlikdə seçək!",
  };

  const features = [
    {
      title: "Optimal yerləşmə və logistika",
      description:
        "Anbarlarımız əlverişli məkanda yerləşir və rahat giriş-çıxış imkanı təqdim edir.",
    },
    {
      title: "Sərfəli şərtlərlə fardi saxlama",
      description: "83.5 m³ həcmində individual, qapılı saxlanc yerleri.",
    },
    {
      title: "24/7 mühafiza",
      description:
        "Təhlükəsizlik bizim üçün prioritetdir. Anbarlarımız tam nazarət altındadır.",
    },
    {
      title: "Yangın təhlükəsizliyi",
      description:
        "Təhlükəsizlik standartlarına tam cavab verən yangın aleyhinə sistemlər.",
    },
    {
      title: "Sığorta",
      description:
        "Əşyalarınız bizimləə tam sığortalıdır, siz rahat ola bilərsiniz.",
    },
    {
      title: "Nemişlik və temperatur izolvasiyası",
      description: "Mallarınız üçün optimal saxlama şəraiti təmin edilir.",
    },
    {
      title: "Ferdi işıqlandırma və elektrik tachizatı",
      description: "Rahat istifadə üçün bütün lazımi şərait yaradılıb.",
    },
    {
      title: "Qısa müddətli və kiçik həcmli opsiyalar",
      description: "Ehtiyaclarınıza uyğun çevik həllər təklif edirk.",
    },
  ];

  return (
    <section className="about" aria-labelledby="about-title" role="landmark">
      <div className="about__container">
        <article className="about__description" role="article">
          <hr></hr>
          <h4>Haqqımızda</h4>
          <div>
            <div className="about__tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab ${
                    activeTab === tab.id ? "active" : ""
                  } subtitle1`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Image
                    unoptimized
                    src={tab.img}
                    alt={tab.label}
                    width={16}
                    height={16}
                  ></Image>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tab-content body1">
              {activeTab === "about" && (
                <p>
                  Sizə rahat, etibarlı və sərfəli saxlama həlləri təqdim edən
                  fərdi konteyner anbarlarımızla xidmətinizdəyik! Əsas magistral
                  yollara çıxışı olan ideal yerləşməmiz və müasir logistika
                  imkanlarımız sayəsində sizin üçün maksimum əlverişli şərait
                  yaradırıq.
                </p>
              )}

              {activeTab === "values" && (
                <ul className="features-list ">
                  {features.map((feature, index) => (
                    <li key={index}>
                      <p className="body1">
                        <strong>{feature.title}</strong> – {feature.description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "mission" && (
                <p>
                  Bizim əsas məqsədimiz sizə etibarlı və sərfəli saxlama
                  imkanları təqdim edərək əşyalarınızı təhlükəsiz şəraitdə
                  qorumaqdır. Bizimlə əlaqə saxlayın və sizin üçün ən uyğun
                  saxlama həllini birlikdə seçək!
                </p>
              )}
            </div>
            <Image
              className="image-wrapper"
              unoptimized
              width={400}
              height={250}
              style={{ width: "100%", height: "auto" }}
              src="/imgs/banner_2_2.webp"
              alt="Container Image"
            ></Image>
          </div>

          <div className="about__description-text">
            {/* <p className="body1">
              Sizə rahat, etibarlı və sərfəli saxlama həlləri təqdim edən fərdi
              konteyner anbarlarımızla xidmətinizdəyik! Əsas magistral yollara
              çıxışı olan ideal yerləşməmiz və müasir logistika imkanlarımız
              sayəsində sizin üçün maksimum əlverişli şərait yaradırıq.
            </p> */}
          </div>
        </article>
      </div>
    </section>
  );
}
