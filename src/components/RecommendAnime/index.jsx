import React from "react";
import { getAnimeNested } from "@/services/api";
import Header from "../CardList/Header";
import CardList from "../CardList";

const RecommendAnime = async () => {
  let dataRecommendAnime = await getAnimeNested("recommendations/anime");
  const dataStart = Math.floor(Math.random() * dataRecommendAnime.length);
  dataRecommendAnime = {
    data: dataRecommendAnime.slice(dataStart, dataStart + 6),
  };
  return (
    <div className="mt-[28px] w-full flex flex-col">
      <Header title={"Recomended Anime"} link={"/recomended/anime"} />
      <CardList dataAnime={dataRecommendAnime} />
    </div>
  );
};

export default RecommendAnime;
