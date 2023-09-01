// import css
import { useState } from "react";
import "./Nave.css";

const Nave = () => {
  const [input, setInput] = useState("");

  return (
    <div className="header">
      <div>
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-d4fIkLhgE7T15efeMYWnU8V2wbe8lX5-AJa_dCXZeIqCZogMYiIqftT1s8CYxaRtThs&usqp=CAU"
          alt="imagem"
        />
      </div>
      <div className="form">
        <input
          className="input"
          type="text"
          placeholder="Encontre seu filme"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
      <div>
        <button className="btn">Search</button>
      </div>
      <div>
        <button>Voltar</button>
      </div>
    </div>
  );
};

export default Nave;
