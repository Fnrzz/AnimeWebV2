import Header from "@/components/utils/Header";
import Navbar from "@/components/Navbar";
import React from "react";
import Search from "@/components/Search";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar title={"Browse Anime"} link={"/browse"} />
      <Header title={"Browse Anime"} />
      <div className="flex flex-col h-[50vh] justify-center items-center">
        <Search />
        <h1 className="text-sm font-bold text-mycolor-primary mt-[16px]">
          Plase input the name of the anime
        </h1>
      </div>
    </main>
  );
};

export default Page;
