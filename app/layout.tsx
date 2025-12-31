import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "세미로",
  description: "자연 그대로 언제나 변함없이. 자연의 건강함을 그대로 담은 세미로의 식품을 제조합니다.",
  openGraph: {
    title: '세미로',
    description: '자연 그대로 언제나 변함없이',
    url: 'https://www.seamiro.com',
    siteName: '세미로',
    images: [
      {
        url: 'https://www.seamiro.com/images/og_image.png',
        width: 1200,
        height: 630,
        alt: '세미로',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  other: {
    'naver-site-verification': 'e4856a96c168003871c0034f806fc72dfbe50a2f',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
