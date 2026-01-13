import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "세미로 | 단무지 · 쌈무 · 치킨무 전문",
  description: "김밥 단무지 · 쌈무 · 치킨무 · 초절임 무 제작 전문",
  keywords: [
    '단무지',
    '김밥 단무지',
    '쌈무',
    '치킨무',
    '무 절임',
    '식자재 납품',
    '단무지 제조',
    '쌈무 제조',
    '세미로'
  ],
  openGraph: {
    title: '세미로',
    description: '김밥 단무지 · 쌈무 · 치킨무 · 초절임 무 제작 전문',
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
  verification: {
    other: {
    'naver-site-verification': 'e4856a96c168003871c0034f806fc72dfbe50a2f',
  }
  },
  robots: { index: true, follow: true },
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
