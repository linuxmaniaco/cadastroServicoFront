// import { useEffect, useState } from 'react'
import Layout from "./components/Layout";


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
            
        <Layout deleteFn={deleteProduto}></Layout>
        
      </>
      
    
  
  );
}

export default App
