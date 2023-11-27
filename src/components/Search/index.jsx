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
    <div className="relative">
      <form onSubmit={heandleSearch}>
        <input
          type="text"
          className="rounded-l-[8px]  md:px-[16px] md:py-[8px] px-2 py-1 w-full focus:outline-none"
          ref={searchRef}
          defaultValue={keyword}
        />
        <button
          type="submit"
          className="bg-white absolute md:px-[16px] md:py-[8px] px-2 py-1 rounded-r-[8px] text-mycolor-primary font-bold"
          onClick={heandleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
