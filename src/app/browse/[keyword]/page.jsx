import { getAnime } from "@/services/api";
import CardList from "@/components/CardList";
import Header from "@/components/utils/Header";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const dataSearchAnime = await getAnime("anime", `q=${keyword}`);
  const title = decodeURI(keyword);
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar title={`Search : ${title}`} link={"/browse"} />
      <Header title={`Search : ${title}`} />
      <div className="flex justify-end">
        <div className="hidden md:block">
          <Search keyword={title} />
        </div>
      </div>
      <div className="my-[28px]">
        <CardList dataAnime={dataSearchAnime} />
      </div>
    </main>
  );
};

export default Page;
