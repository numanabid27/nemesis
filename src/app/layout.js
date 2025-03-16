import { Oxanium } from "next/font/google";
import "./globals.css";
import Nav from "@/common/components/nav";
import Footer from "@/common/components/footer";


const geistMono = Oxanium({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nemesis",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased`}
      >
        <div>
            <Nav />
            <main>
             {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}
