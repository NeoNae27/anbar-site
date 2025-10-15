import "@/styles/globals.scss";
import { Inclusive_Sans } from "next/font/google";
import { Metadata } from 'next'

export const metadata = {
  title: 'Anbar.al - Anbar icarəsi',
  description: 'Anbar icarəsi, anbar kirayəsi, anbar icarə xidmətləri',
  keywords: ['Anbar icarəsi', 'kirayə', 'xidmətlər', 'Baki', "container", "storage", "rent", "warehouse"],
  robots: 'index, follow',
  googlebot: "index, follow",
  canonical: 'https://anbar.al',
  openGraph: {
    title: 'Anbar.al - Anbar icarəsi',
    locale: 'az_AZ',
    description: 'Anbar icarəsi, anbar kirayəsi, anbar icarə xidmətləri',
    url: 'https://anbar.al',
    siteName: 'Anbar.al',
    images: [
      {
        url: 'https://anbar.al/logo/og-logo-png',
        width: 1969,
        height: 630,
        alt: 'Anbar icarəsi logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anbar.al - Anbar icarəsi',
    description: 'Anbar icarəsi, anbar kirayəsi, anbar icarə xidmətləri',
    images: ['https://anbar.al/logo/logo-text-color.svg'],
  },
  authors: [{ name: '27 Studio' }],
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
}

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
