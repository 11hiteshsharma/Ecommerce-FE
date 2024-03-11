import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desi Minimals",
  description: "Your desi Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
