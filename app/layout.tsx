import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./_ui/NavBar";
import Filter from "./_ui/Filter";
import { BreadCrumbContextProvider } from "@/lib/context/BreadCrumbContext";
import LazyHeaderTitle from "@/components/LazyHeaderTitle ";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "File Explorer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`flex relative flex-col lg:flex-row h-full min-h-screen w-full ${inter.className} antialiased`}
      >
        <header className="fixed bottom-0 w-full h-16 z-10 bg-white bg-opacity-95 shadow-md rounded-tl-lg rounded-tr-lg lg:h-screen lg:w-16">
          <NavBar />
        </header>
        <main className="flex flex-col w-full min-h-screen h-full relative bg-bodyBackground p-4 mb-16 lg:mb-0 lg:ml-16">
          <section className="flex sm:flex-row flex-col ms:items-center justify-between w-full border-b mb-2 py-2">
            <LazyHeaderTitle />
            <Filter />
          </section>
          <BreadCrumbContextProvider>{children}</BreadCrumbContextProvider>
        </main>
      </body>
    </html>
  );
}
