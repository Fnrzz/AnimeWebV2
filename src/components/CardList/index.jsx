import Image from "next/image";
import React from "react";
import Link from "next/link";

const CardList = ({ dataAnime }) => {
  return (
    <div className="flex flex-wrap gap-4 md:justify-between justify-center">
      {dataAnime.data?.map((anime, key) => (
        <Link href={`/detail/${anime.mal_id}`} key={key}>
          <Image
            src={anime.images.jpg.image_url}
            alt="Picture of the author"
            width={159}
            height={159}
            className="rounded-[8px] hover:scale-105 transition-all md:w-[160px] md:h-[200px] w-[150px] h-[180px] duration-300 hover:cursor-pointer"
          />
        </Link>
      ))}
    </div>
  );
};

export default CardList;
