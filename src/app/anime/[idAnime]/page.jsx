import { getAnime } from "@/services/api";
import Header from "@/components/utils/Header";
import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/utils/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { idAnime } }) => {
  const dataDetailAnime = await getAnime(`anime/${idAnime}/full`);
  const dataAnime = dataDetailAnime.data;
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar title={dataAnime.title} link={`/anime/${idAnime}`} />
      <Header title={dataAnime.title} />
      <div className="my-[28px] w-full">
        <VideoPlayer idYoutube={dataAnime.trailer.youtube_id} />
        <div className="flex mt-[16px]">
          <div className="block w-[130px]   md:w-[250px] ">
            <Image
              src={dataAnime.images.jpg.image_url}
              alt={dataAnime.title}
              width={300}
              height={450}
              objectFit="cover"
              layout="responsive"
              className="rounded-xl"
            />
          </div>
          <div className="flex  flex-col ml-[16px] w-[calc(100%-150px)]">
            <h1 className="text-[14px] md:text-2xl font-bold text-white">
              {dataAnime.title}
            </h1>
            <h2 className="text-[12px] md:text-sm font-bold text-white">
              {dataAnime.title_japanese}
            </h2>
            <div className="flex gap-[8px] mt-[8px]">
              <p className="text-[10px] md:text-sm font-bold text-white ">
                Rating : {dataAnime.score} / 10
              </p>
              <p className="text-[10px] md:text-sm font-bold text-white">
                Rank : {dataAnime.rank}
              </p>
            </div>
            <div className="flex gap-[8px] mt-[4px]">
              <p className="text-[10px] md:text-sm font-bold text-white ">
                Type : {dataAnime.type}
              </p>
              <p className="text-[10px] md:text-sm font-bold text-white">
                Duration : {dataAnime.duration}
              </p>
            </div>
            <div className="flex gap-[8px] mt-[4px]">
              <p className="text-[10px] md:text-sm font-bold text-white ">
                Season : {dataAnime.season}
              </p>
              <p className="text-[10px] md:text-sm font-bold text-white">
                Year : {dataAnime.year}
              </p>
            </div>
            <div className="flex flex-col mt-[4px]">
              <p className="text-[10px] md:text-sm font-bold text-white ">
                Genre : {dataAnime.genres.map((genre) => genre.name).join(", ")}
              </p>
            </div>
            <p className="hidden md:block text-sm font-bold text-white mt-[4px] ">
              Synopsis :
            </p>
            <p className="hidden md:block md:text-[12px] font-bold text-white mt-[4px] ">
              {dataAnime.synopsis}
            </p>
          </div>
        </div>
        <div className="flex md:hidden mt-[8px]">
          <p className="text-[8px] font-bold text-white">{dataAnime.synopsis}</p>
        </div>
      </div>
    </main>
  );
};

export default Page;
