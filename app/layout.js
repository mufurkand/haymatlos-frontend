import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

// TODO: Discuss if we want to use a different font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Haymatlos Forums",
  // TODO: Expand upon this description
  description: "Haymatlos Forums",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-foreground"}>
        <div className="flex flex-col">
          <Navbar />
          <div className="flex">
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
