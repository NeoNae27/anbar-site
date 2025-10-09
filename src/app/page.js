import Image from "next/image";
import Button from "@/components/Button/Button.jsx";
import PlusButton from "@/components/Button/PlusButton/PlusButton.jsx";

export default function Page() {
  return (
    <>
      <PlusButton></PlusButton>
      <Button label="Label" size="buttonLarge"></Button>
      <h1>Hi</h1>
      <Image
        src={"/logo/logo-text-color.svg"}
        alt="None"
        width="64"
        height="64"
      ></Image>
    </>
  );
}
