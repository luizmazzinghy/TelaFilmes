import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDescricao from "./function/getDescricao";
import "./Descricao.css";
const Descricao = () => {
  const { id } = useParams<{ id: string }>();
  const [descricao, setDescricao] = useState([]);

  useEffect(() => {
    const des = async () => {
      const descricaoFilme = await getDescricao(id);
      setDescricao(descricaoFilme);
    };
    des();
  }, []);

  return (
    <div className="description">
      <div>
        <h4 className="styleSubTitulo">{descricao.title}</h4>
        <img
          className="imagemDescricao"
          src={`https://image.tmdb.org/t/p/w342/${descricao.backdrop_path}`}
          alt=""
        />
      </div>

      <div className="textDescricao">
        <h4 className="language">Linguagem:{descricao.original_language}</h4>
        <h4>{descricao.overview}</h4>
      </div>
    </div>
  );
};

export default Descricao;
