"use client";

const Pagination = ({ last, page, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlerNextPage = () => {
    setPage(page + 1);
    scrollTop();
  };

  const handlerPrevPage = () => {
    setPage(page - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center gap-4 mb-20">
      {page > 1 && (
        <button
          className="text-white hover:text-mycolor-primary"
          onClick={handlerPrevPage}
        >
          Prev
        </button>
      )}
      <h6 className="text-white">
        {page} of {last}
      </h6>
      {page < last && (
        <button
          className="text-white hover:text-mycolor-primary"
          onClick={handlerNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
