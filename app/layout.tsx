import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/layout/MainHeader";
import ProductContextProvider from "./context/ProductContext";

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
        <ProductContextProvider>
          <div className="px-12 py-10 xl:max-w-[90%] 5xl:max-w-[50%]! m-auto">
            <MainHeader />
            {children}
          </div>
        </ProductContextProvider>
      </body>
    </html>
  );
}
