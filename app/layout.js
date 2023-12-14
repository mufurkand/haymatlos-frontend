import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// TODO: Discuss if we want to use a different font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Haymatlos Forum",
  // TODO: Expand upon this description
  description: "Haymatlos Forum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-foreground"}>
        <div className="flex flex-col items-center pt-14">
          <Navbar />
          <div className="w-full md:w-3/4 lg:w-2/3">{children}</div>
        </div>
      </body>
    </html>
  );
}
