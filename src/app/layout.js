import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito-sans",
});

export const metadata = {
  title: "EasyDibs - Call dibs on your space",
  description: "No texts. No drama. Just dibs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body className={`${nunito.variable} ${nunitoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
