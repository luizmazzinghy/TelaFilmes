import api from "./api";

const getPostsByGenre = async (genreId: number) => {
  const response = await api.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=90075193c6c32813471235f51da7e765&with_genres=${genreId}`
  );

  return response.data;
};

export default getPostsByGenre;
