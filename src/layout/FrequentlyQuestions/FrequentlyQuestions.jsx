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
    <div className="FQ">
      <span className="FQ-container">
        <div className="FQ-questions">
          <h2 className="FQ-title">Frequently Asked Questions</h2>
          <div className="FQ-questions-list">
            {Questions.map((item, index) => (
              <Question
                key={index}
                question={item.question}
                answer={item.answer}
              ></Question>
            ))}
          </div>
        </div>
        <div className="FQ-image">
          <Image
            src="/imgs/forklift.png"
            alt="Frequently Questions Image"
            width={426}
            height={359}
            unoptimized
          ></Image>
        </div>
      </span>
    </div>
  );
}
