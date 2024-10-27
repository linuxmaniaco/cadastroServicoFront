// import { useEffect, useState } from 'react'
// import lista from "../mock/db.json"
import Produtos from "./Produtos";
// import { getProdutoApi } from '../service/Api';

// const colunas = ["id", "nome", "descricao", "preco", "estoque"];
function Container (listas){
    // const [listas, setProdutos] = useState([])
    {console.log("LISTA EM CONTAINER ",listas.listas)}

    // useEffect(() => {
    //     (async () =>{
    //         //Usando o iife
    //         const lista2 = await getProdutoApi();
    //         setProdutos(lista2);
    //         // console.log('Variável lista2 aqui ', lista2)
    //     })();
        
    //   }, []);

    // // console.log(lista.usuario)
    
    return (
        <div className='container'>
            
            <div className='main'>
                <Produtos produtos={listas.listas}/>
                {/* {console.log("Passando lista em produtos ",listas)} */}
            </div>
            
        </div>
    )
    // console.log(produtos) 
}

export default Container;