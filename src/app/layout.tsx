import type { Metadata } from "next";
import "../styles/globals.css";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "../components/navigation/index";
import Footer from "@/components/Footer";
import Providers from '@/components/redux/Provider'

export const metadata: Metadata = {
  title: "فروشگاه دابس",
  description: "فروشگاه انواع لوارم تنیس روی میز",
};
export const Iransens = localFont({
  src: "../../public/fonts/IRANSansWeb.ttf",
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        <link rel="shortcut icon" href="../../public/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../../public/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../../public/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../../public/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="../../public/favicon/site.webmanifest" />
      </head>
      <body className={` ${Iransens.className}`}>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
