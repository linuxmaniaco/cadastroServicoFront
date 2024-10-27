import { useEffect, useState } from 'react'
import Layout from "./components/Layout";
import { deleteProdutosApi } from "./service/Api";
import DeleteContext from "./DeleteContext";
import { getProdutoApi } from './service/Api';

function App() {
  const [listas, setProdutos] = useState([])
  
  // Deletar produtos
  const deleteProduto = async (id) => {
    console.log('id', id)
    try {
        await deleteProdutosApi(id);
        await getProduto();
    } catch {
        alert("Aconteceu um erro");
    }
  };

  // Buscar produtos
  const getProduto = async () => {
     const lista2 = await getProdutoApi();
     setProdutos(lista2);
  }
 
  // Ciclo de vida do componente
  useEffect(() => {
      // (async () =>{
      //   //Usando o iife
      // })();
      getProduto();
    }, []);

  console.log("MUDANÇA NO USER_EFFECT",listas)

  return (
  
      <>
        <DeleteContext.Provider value={deleteProduto}>
          <Layout listas={listas}></Layout>
        </DeleteContext.Provider>    
        
      </>
      
    
  
  );
}

export default App
