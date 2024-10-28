import { useEffect, useState } from 'react'
import Layout from "./components/Layout";
import { deleteProdutosApi } from "./service/Api";
import GlobalContext from "./GlobalContext";
import { getProdutoApi } from './service/Api';
import Form from './components/Form';
import Topo from './components/Topo_act';

function App() {
  const [listas, setProdutos] = useState([])
  const [showList, setShowList] = useState(true); 
  
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
        <GlobalContext.Provider value={deleteProduto}>
          <Topo showList={showList} />
          {showList ? <Layout listas={listas}></Layout> : <Form />}
          
        </GlobalContext.Provider>    
        
      </>
      
    
  
  );
}

export default App
