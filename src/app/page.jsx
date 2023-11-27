import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import TopAnime from "@/components/TopAnime";
import RecommendAnime from "@/components/RecommendAnime";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar title={"Home"} link={"/"} />
      <div className="mt-[28px]">
        <Banner />
      </div>
      <div className="mt-[28px]">
        <TopAnime limit={6} />
      </div>
      <div className="my-[28px]">
        <RecommendAnime />
      </div>
    </main>
  );
}
