import "./About.scss";
import UserJourney from "@/components/UserJourney/UserJourney.jsx";

export default function About() {
  const UserJourneySteps = [
    {
      id: 1,
      text: "Siz saxlama obyektini icarəyə götürmək üçün sorğu göndərirsiniz.",
    },
    {
      id: 2,
      text: "Sizinlə əlaqə saxlayıb qiyməti təyin edirik",
    },
    {
      id: 3,
      text: "Əşyalarınızla təyin olunmuş vaxtda gəlirsiniz. Onları boşaltmağınıza kömək edirik.",
    },
  ];

  return (
    <section className="about" aria-labelledby="about-title" role="landmark">
      <div className="about__container">
        <article className="about__description" role="article">
          <h4>Biz kimik?</h4>
          <p className="body1">
            Sizə rahat, etibarlı və sərfəli saxlama həlləri təqdim edən fərdi
            konteyner anbarlarımızla xidmətinizdəyik! Əsas magistral yollara
            çıxışı olan ideal yerləşməmiz və müasir logistika imkanlarımız
            sayəsində sizin üçün maksimum əlverişli şərait
          </p>
          <br />
          <p className="body1">
            Bizim əsas məqsədimiz sizə etibarlı və sərfəli saxlama imkanları
            təqdim edərək əşyalarınızı təhlükəsiz şəraitdə qorumaqdır. Bizimlə
            əlaqə saxlayın və sizin üçün ən uyğun saxlama həllini birlikdə
            seçək!
          </p>
        </article>
        <article className="about__userJourney"  role="article">
          <h4>Bu necə işləyir?</h4>
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
