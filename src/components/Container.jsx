import { useEffect, useState } from 'react'
import lista from "../mock/db.json"
import Produtos from "./Produtos";

const colunas = ["id", "nome", "descricao", "preco", "estoque"];
function Container (){

    // useEffect(() => {
    //     console.log('userEffect Funcinando... ')
    
    //     async function getProdutos() {
    //         console.log('chamando produtos')
    //         const dataPrimary = await fetch('http://0.0.0.0:3000/produto')
    //         const lista = await dataPrimary.json()
    //         console.log(lista)
    //     }    
    //     getProdutos()
    //   })

    console.log(lista.usuario)
    
    return (
        <div className='container'>
            
            <div className='main'>
                <Produtos produtos={lista.produto} colunas={colunas} />
            </div>
            
        </div>
    )
    // console.log(produtos) 
}

export default Container;