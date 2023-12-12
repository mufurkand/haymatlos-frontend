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
        <div className="flex h-screen flex-col">
          <Navbar className="" />
          <div className="flex flex-grow">
            {/*
            somewhat implemented mobile responsiveness with this style.
            it is necessary, because we also use this sidebar component in
            navbar without this specific styling. this style just removes
            the sidebar on screens smaller than 640px.
            */}
            <Sidebar className="hidden sm:flex" />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
