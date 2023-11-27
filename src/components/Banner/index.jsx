import React from "react";
import { getAnime } from "@/services/api";
import Link from "next/link";

const Banner = async () => {
  const getRandomAnime = await getAnime("random/anime", "limit=5");
  const dataAnime = getRandomAnime.data;
  return (
    <div
      className={`flex px-[32px] py-[24px] h-[300px] gap-[12px]  flex-col bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url("${dataAnime.images.jpg.large_image_url}")`,
      }}
    >
      <h1 className="md:text-3xl text-xl font-bold text-border-5 text-gray-100 text-shadow-inner">
        {dataAnime.title}
      </h1>
      <p className="text-white text-sm md:text-lg text-shadow-inner md:w-1/2">
        {dataAnime.background}
      </p>
      <p className="text-white text-sm md:text-lg text-shadow-inner">
        {dataAnime.rating}
      </p>
      <p className="text-white text-sm md:text-lg text-shadow-inner">
        Genres : {dataAnime.genres.map((genre) => genre.name).join(", ")}
      </p>
      <div className="flex">
        <Link
          href={`/detail/${dataAnime.mal_id}`}
          className="bg-mycolor-tertiary px-[16px] hover:bg-mycolor-primary   py-[8px] text-sm md:text-md text-white border-inner border-white border-[2px] rounded-[8px]"
        >
          Detail Anime
        </Link>
      </div>
    </div>
  );
};

export default Banner;
