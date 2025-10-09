import "@/styles/globals.scss";
import { Inclusive_Sans } from "next/font/google";

export const Inclusive = {
  subsets: ["latin"],
  variable: "--font-inclusive",
  display: "swap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az" className={Inclusive.variable}>
      <body>{children}</body>
    </html>
  );
}
