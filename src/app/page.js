import { DefaultButton, PlusButton } from "@/components/Button/buttons.js";
import Header from "@/layout/Header/Header.jsx";
import Banner from "@/layout/Banner/Banner.jsx";
import About from "@/layout/About/About.jsx";
import Advantages from "@/layout/Advantages/Advantages.jsx";
import ContainerSpecification from "@/layout/ContainerSpecifications/ContainerSpecification";
import FrequentlyQuestions from "@/layout/FrequentlyQuestions/FrequentlyQuestions";
import "./style.css";

export default function Page() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Advantages></Advantages>
      <ContainerSpecification></ContainerSpecification>
      <FrequentlyQuestions></FrequentlyQuestions>
    </>
  );
}
