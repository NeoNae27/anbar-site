"use client";
import "./FrequentlyQuestion.scss";
import Question from "@/components/Questions/Question.jsx";
import Image from "next/image";

export default function FrequentlyQuestions() {
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
    <section className="FQ" aria-labelledby="fq-title" role="region">
      <div className="FQ__container">
        <div className="FQ__questions">
          <h2 id="fq-title" className="FQ__title">
            Frequently Asked Questions
          </h2>
          <dl className="FQ__questions-list" role="list">
            {Questions.map((item, index) => (
              <Question
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </dl>
        </div>
        <aside
          className="FQ__image"
          aria-label="Tez-tez verilən suallar"
        >
          <Image
            role="img"
            src="/imgs/forklift.png"
            alt="Illustration related to frequently asked questions"
            width={426}
            height={359}
            unoptimized
          />
        </aside>
      </div>
    </section>
  );
}
