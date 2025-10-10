import { DefaultButton, PlusButton } from "@/components/Button/buttons.js";
import Header from "@/layout/Header/Header.jsx";
import Banner from "@/layout/Banner/Banner.jsx";
import About from "@/layout/About/About.jsx";
import "./style.css";

export default function Page() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      
      {/* <PlusButton></PlusButton>
      <DefaultButton label="Label" size="buttonLarge"></DefaultButton>
      <h1>Hi</h1> */}
    </>
  );
}
