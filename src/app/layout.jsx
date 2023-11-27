import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnimeWeb",
  description: "Anime List Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-mycolor-tertiary`}>
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <div className="md:ml-[265px] md:px-[32px] px-[16px]">{children}</div>
      </body>
    </html>
  );
}
