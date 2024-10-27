// import { useEffect, useState } from 'react'
import Layout from "./components/Layout";
import { deleteProdutosApi } from "./service/Api";
import DeleteContext from "./DeleteContext";

function App() {
  
  const deleteProduto = async (id) => {
    console.log('id', id)
    try {
        await deleteProdutosApi(id);
    } catch {
        alert("Aconteceu um erro");
    }
  };

  return (
  
      <>
        <DeleteContext.Provider value={deleteProduto}>
          <Layout></Layout>
        </DeleteContext.Provider>    
        
      </>
      
    
  
  );
}

export default App
