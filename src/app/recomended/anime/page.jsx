"use client";
import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import { getAnimeNested } from "@/services/api";
import CardList from "@/components/CardList";
import Header from "@/components/utils/Header";
import Pagination from "@/components/utils/Pagination";

const Page = () => {
  const [isPage, setIsPage] = useState(1);
  const [dataAnime, setDataAnime] = useState([]);
  const [isLastPage, setIsLastPage] = useState();

  const fetch = async () => {
    let dataRecomenAnime = await getAnimeNested("recommendations/anime");
    const dataRecomenAnimeLength = dataRecomenAnime.length;
    setIsLastPage(Math.ceil(dataRecomenAnimeLength / 24));
    dataRecomenAnime = {
      data: dataRecomenAnime.slice(isPage, isPage + 24),
    };
    setDataAnime(dataRecomenAnime);
  };

  useEffect(() => {
    fetch();
  }, [isPage]);
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar title={"Recomended Anime"} link={"/recomended/anime"} />
      <Header title={"Recomended Anime"} />
      <div className="my-[28px]">
        <CardList dataAnime={dataAnime} />
      </div>
      <Pagination last={isLastPage} page={isPage} setPage={setIsPage} />
    </main>
  );
};

export default Page;
