const getAnime = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/${resource}?${query}`
  );
  const getAnime = await response.json();
  return getAnime;
};

const getAnimeNested = async (resource, query) => {
  const response = await getAnime(resource);
  return response.data.flatMap((data) => data.entry);
};

export { getAnime, getAnimeNested };
