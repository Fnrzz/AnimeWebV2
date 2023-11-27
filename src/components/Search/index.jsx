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
      <input
        type="text"
        className="rounded-l-[8px]  px-[16px] py-[8px]  focus:outline-none"
        ref={searchRef}
        defaultValue={keyword}
      />
      <button
        type="submit"
        className="bg-white px-[16px] py-[8px] rounded-r-[8px] text-mycolor-primary font-bold"
        onClick={heandleSearch}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
