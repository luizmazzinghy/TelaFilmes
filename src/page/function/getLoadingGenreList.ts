import api from "./api";

export interface Genre {
  id: number;
  name: string;
}

const getLoadingList = async () => {
  const response = await api.get<{ genres: Genre[] }>(
    "https://api.themoviedb.org/3/genre/movie/list"
  );
  return response.data.genres;
};

export default getLoadingList;
