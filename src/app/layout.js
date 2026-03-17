import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "EasyDibs",
  description: "No texts. No drama. Just dibs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className={nunito.variable}>
        {children}
      </body>
    </html>
  );
}
