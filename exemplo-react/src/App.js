import { useEffect, useState } from "react";
import Produtos from "./componentes/produtos";

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const array = Produtos();
    setProdutos(array);
  }, []);

  return (
    <div>
      {produtos.map((produto) => (
        <>
          <p> ID: {produto.id}</p>
          <p> Nome: {produto.nome}</p>
          <p> Avaliação: {produto.avaliação} estrelas</p>
          <p> Preço: {produto.preço}</p>
        </>
      ))}
    </div>
  );
}
export default App;
