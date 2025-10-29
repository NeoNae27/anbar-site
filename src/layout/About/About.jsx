import "./About.scss";
import UserJourney from "@/components/UserJourney/UserJourney.jsx";

export default function About() {
  const UserJourneySteps = [
    {
      id: 1,
      text: "Xidmət üçün müraciətinizi göndərirsiniz",
    },
    {
      id: 2,
      text: "Şərtləri razılaşdırıb, müqavilə imzalayırıq",
    },
    {
      id: 3,
      text: "Güvənli konteynerlərimizə əşyalarınızı rahatlıqla yerləşdirirsiniz",
    },
  ];

  return (
    <section className="about" aria-labelledby="about-title" role="landmark">
      <div className="about__container">
        <article className="about__description" role="article">
          <h4>Biz kimik?</h4>
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
        </article>
        <article className="about__userJourney" role="article">
          <h4>İcarə üçün addımlar</h4>
          <ul>
            {UserJourneySteps.map((step) => (
              <li key={step.id}>
                <UserJourney id={step.id} text={step.text}></UserJourney>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
