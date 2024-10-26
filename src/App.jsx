import { useEffect, useState } from 'react'
import Layout from "./components/Layout";


function App() {
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.log('userEffect Funcinando... ')

  //   async function getProdutos() {
  //       console.log('chamando produtos')
  //       const dataPrimary = await fetch('http://0.0.0.0:3000/produto')
  //       const data = await dataPrimary.json()
  //       console.log(data)
  //   }    
  //   getProdutos()
  // })

  return (
  
      <>
            
        <Layout></Layout>
        
      </>
      
    
  
  );
}

export default App
