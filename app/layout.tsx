import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/layout/MainHeader";
import MainFooter from "./components/layout/MainFooter";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANIQ® | Modern Clothing for Everyday Style",
  description:
    "Aniq is where modern design meets everyday function. Clean silhouettes, premium fabrics, and a focus on what matters—fit, comfort, and individuality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="px-4 py-3 md:px-5 md:py-4 lg:px-12 lg:py-10 xl:max-w-[80%] 5xl:max-w-[50%]! m-auto">
          <MainHeader />
          {children}
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
