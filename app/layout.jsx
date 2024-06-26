import Footer from "@/components/Footer";
import NagishLi from "@/components/NagishLi";
import Nav from "@/components/Nav";
import { Fredoka, Poppins } from "next/font/google";
import "./globals.css";

const fredoke = Fredoka({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const inter = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
export const metadata = {
  title: "news",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fredoke.className} flex flex-col min-h-screen bg-theme-bg`}>
        <Nav />
        <main className="flex-grow">
          {children}</main>
        <Footer />
        <NagishLi />
      </body>

    </html>
  );
}
