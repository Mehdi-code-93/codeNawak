import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Codenawak - Apprends à coder sans te prendre la tête",
  description: "Plonge dans l’univers déjanté de Codenawak : des tutos fun, des projets WTF et des explications claires pour apprendre à coder en t’amusant. Développe tes skills sans t’ennuyer !",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
