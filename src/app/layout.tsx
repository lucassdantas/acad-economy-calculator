import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montSerrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Economize com Acad",
  description: "Veja o quanto pode economizar para sua academia utiliznado a rede Acad",
};

export default function RootLayout({children}:Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body className={`${montSerrat.className} antialiased h-screen`}>
        {children}
      </body>
    </html>
  );
}
