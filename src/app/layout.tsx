import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});

const maruBuri = localFont({
  src: [
    {
      path: "../../public/font/maruburi/OTF/MaruBuri-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/font/maruburi/OTF/MaruBuri-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/maruburi/OTF/MaruBuri-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/maruburi/OTF/MaruBuri-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/maruburi/OTF/MaruBuri-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--family-maruburi",
  display: "swap",
});

const ramaraja = localFont({
  src: "../../public/font/ramaraja/Ramaraja-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--family-ramaraja",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "회사명",
  description: "기업 홈페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pretendard.variable} ${maruBuri.variable} ${ramaraja.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
