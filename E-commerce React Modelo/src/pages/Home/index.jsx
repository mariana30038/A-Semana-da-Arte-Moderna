import { useState, useEffect } from "react";
import Produtos from "../../components/Produtos/index.jsx"

function Home() {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const array = Produtos()
    setProdutos(array)
  }, [])

  return (
    <div>
        {produtos.map(produto => (
          <>
          <p>ID: {produto.id}</p>
          <p>Nome: {produto.nome}</p>
          <p>Preço:R$ {produto.preço}</p>
          </>
        ))}
    </div>
  );
}

export default Home;
