import "./App.css";
import Nave from "./page/Nave";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Descricao from "./page/Descricao";

import getLoadingList, { Genre } from "./page/function/getLoadingGenreList";

function App() {
  const [genreList, setGenreList] = useState<Genre[]>([]);

  useEffect(() => {
    const handleCall = async () => {
      const loadingGenreList = await getLoadingList();
      setGenreList(loadingGenreList);
    };
    handleCall();
  }, []);

  return (
    <div className="containerApp">
      <Nave />
      <Routes>
        <Route path="/" element={<Home genreList={genreList} />} />
        <Route path="/descricao/:id" element={<Descricao />} />
      </Routes>
    </div>
  );
}

export default App;
