import api from "./api";

const getDescricao = async (id: any) => {
  const response = await api.get(`https://api.themoviedb.org/3/movie/${id}`);

  return response.data;
};

export default getDescricao;
