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
import "./style.css";

export default function Page() {
  return (
    <>
      
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
