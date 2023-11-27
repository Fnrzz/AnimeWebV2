"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const Search = ({ keyword }) => {
  const searchRef = useRef();
  const router = useRouter();
  const heandleSearch = (event) => {
    if (searchRef.current.value) {
      const keyword = searchRef.current.value;
      event.preventDefault();
      router.push(`/browse/${keyword}`);
    }
  };
  return (
    <form onSubmit={heandleSearch}>
      <div className="flex">
        <input
          type="text"
          className="rounded-l-[8px] w-full  md:px-[16px] md:py-[8px] px-2 py-1  focus:outline-none"
          ref={searchRef}
          defaultValue={keyword}
        />
        <button
          type="submit"
          className="bg-white md:px-[16px] md:py-[8px] px-2 py-1 rounded-r-[8px] text-mycolor-primary font-bold"
          onClick={heandleSearch}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
