import {
  Header,
  Banner,
  About,
  Advantages,
  ContainerSpecs,
  FrequentlyQuestions,
  Contacts,
  Footer,
} from "@/layout/layout.js";
import FloatingButton from "@/components/Button/FloatingButton/FloatingButton.jsx";
import "./style.css";

export default function Page() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://anbar.al",
    },
    author: {
      "@type": "Person",
      name: "Nick Romanov",
      url: "https://www.linkedin.com/in/nikita-romanov-80261036b/",
    },
    headliner: "Anbar.al - Anbar icarəsi",
    name: "Anbar.al",
    url: "https://anbar.al",
    logo: "https://anbar.al/logo/og-logo.png",
    description: "Bakıda konteyner anbar icarəsi xidmətləri",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bakı – Salyan şossesi, 15 km",
      addressLocality: "Qaradağ",
      addressRegion: "Bakı",
      addressCountry: "AZ",
    },
    telephone: "+994554441212",
    openingHours: "Mo-Sa 08:00-18:00",
    inLanguage: "az-AZ",
    isFamilyFriendly: "true",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <FloatingButton href="https://wa.me/message/GKTHBWSO45D5G1"></FloatingButton>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Advantages></Advantages>
      <ContainerSpecs></ContainerSpecs>
      <FrequentlyQuestions></FrequentlyQuestions>
      <Contacts></Contacts>
      <Footer></Footer>
    </>
  );
}
