import Filmes from "./Filmes";
import { Genre } from "./function/getLoadingGenreList";

interface Props {
  genreList: Genre[];
}

const Home = ({ genreList }: Props) => {
  return (
    <div>
      {genreList.map(({ id, name }) => (
        <Filmes key={id} categoryId={id} name={name} />
      ))}
    </div>
  );
};

export default Home;
