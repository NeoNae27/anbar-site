import Image from "next/image";
import Button from "@/components/Button/Button.jsx"

export default function Page() {
  return (
    <>

      <Button label="Label" size="buttonLarge" type="plus"></Button>
      <h1>Hi</h1>
      <Image src={"/logo/logo-text-color.svg"} alt="None" width="64" height="64"></Image>
    </>
  );
}
