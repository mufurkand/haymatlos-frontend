import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

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
        <div className="flex h-screen flex-col pt-14 sm:pl-60">
          <Navbar />
          <div className="flex">
            {/*
            somewhat implemented mobile responsiveness with this style.
            it is necessary, because we also use this sidebar component in
            navbar without this specific styling. this style just removes
            the sidebar on screens smaller than 640px.
            */}
            <Sidebar className="fixed left-0 top-14 hidden sm:flex" />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
