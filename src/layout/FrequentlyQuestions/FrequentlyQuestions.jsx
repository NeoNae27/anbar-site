"use client";
import "./FrequentlyQuestion.scss";
import Question from "@/components/Questions/Question.jsx";
import Image from "next/image";

export default function FrequentlyQuestions() {
  const Questions = [
    {
      question: "How to contact with Customer Service?",
      answer:
        "Our Customer Service team is available 24/7 to assist you with any inquiries or issues you may have. You can reach us via email at",
    },
    {
      question: "How to contact with Customer Service?",
      answer:
        "Our Customer Service team is available 24/7 to assist you with any inquiries or issues you may have. You can reach us via email at",
    },
    {
      question: "How to contact with Customer Service?",
      answer:
        "Our Customer Service team is available 24/7 to assist you with any inquiries or issues you may have. You can reach us via email at",
    },
    {
      question: "How to contact with Customer Service?",
      answer:
        "Our Customer Service team is available 24/7 to assist you with any inquiries or issues you may have. You can reach us via email at",
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
          aria-label="Frequently Asked Questions illustration"
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
