import React from "react";
import CardList from "../CardList";
import { getAnime } from "@/services/api";
import Header from "../CardList/Header";

const TopAnime = async () => {
  const dataTopAnime = await getAnime("top/anime", "limit=6");
  return (
    <div className="mt-[28px] w-full flex flex-col">
      <Header title={"Top Anime"} link={"/top/anime"} />
      <CardList dataAnime={dataTopAnime} />
    </div>
  );
};

export default TopAnime;
