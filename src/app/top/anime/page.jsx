"use client";
import { useState, useEffect, Suspense } from "react";

import Navbar from "@/components/Navbar";
import { getAnime } from "@/services/api";
import CardList from "@/components/CardList";
import Header from "@/components/utils/Header";
import Pagination from "@/components/utils/Pagination";

const Page = () => {
  const [isPage, setIsPage] = useState(1);
  const [dataAnime, setDataAnime] = useState([]);

  const fetch = async () => {
    const dataAnime = await getAnime("top/anime", `limit=24&page=${isPage}`);
    setDataAnime(dataAnime);
  };

  useEffect(() => {
    fetch();
  }, [isPage]);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar title={"Top Anime"} link={"/top/anime"} />
      <Header title={"Top Anime"} />
      <div className="my-[28px]">
        <CardList dataAnime={dataAnime} />
      </div>
      <Pagination
        last={dataAnime.pagination?.last_visible_page}
        page={isPage}
        setPage={setIsPage}
      />
    </main>
  );
};

export default Page;
