"use client";
import "./About.scss";
import UserJourney from "@/components/UserJourney/UserJourney.jsx";
import Question from "@/components/Questions/Question.jsx";

export default function About() {
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
  return (
    <section className="about" aria-labelledby="about-title" role="landmark">
      <div className="about__container">
        <article className="about__questions" role="article">
          <h4>Tez-tez verilən suallar</h4>
          <dl className="FQ__questions-list" role="list">
            {Questions.map((item, index) => (
              <Question
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </dl>
        </article>
        <article className="about__description" role="article">
          <h4>Biz kimik?</h4>
          <div className="about__description-text">
            <p className="body1">
              Biz magistral yolun kənarında və şəhərin ən böyük ticarət
              mərkəzlərinin yaxınlığında yerləşən müasir konteyner anbar xidməti
              təqdim edirik. Müştərilərimizə rahat, etibarlı və sərfəli saxlama
              həlləri təklif edərək, əşyalarınız üçün təhlükəsiz və əlverişli
              mühit yaradırıq
            </p>
            <br />
            <p className="body1">
              Bizim əsas məqsədimiz sizə etibarlı və sərfəli saxlama imkanları
              təqdim edərək əşyalarınızı təhlükəsiz şəraitdə qorumaqdır. Bizimlə
              əlaqə saxlayın və sizin üçün ən uyğun saxlama həllini birlikdə
              seçək!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
