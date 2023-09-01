import "./Filmes.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import getPostsByGenre from "./function/getPostsByGenre";

const Filmes = ({ name, categoryId }: any) => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const handleCall = async () => {
      const titulosFilmes = await getPostsByGenre(categoryId);
      setFilmes(titulosFilmes);
    };
    handleCall();
  }, [categoryId]);

  return (
    <div className="categoria">
      <div className="main">
        <h1 className="tituloCategoria">{name}</h1>
      </div>
      <ul className="listCategoria">
        {filmes.results?.map((filme: any) => (
          <div className="tituloCard" key={filme.id}>
            <div className="titleFilme">
              <Link className="link" to={`/descricao/${filme.id}`}>
                <h4 className="title">{filme.title}</h4>
                <img
                  className="imagem"
                  src={`https://image.tmdb.org/t/p/w342/${filme.backdrop_path}`}
                  alt=""
                />
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Filmes;
