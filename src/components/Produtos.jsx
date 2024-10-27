import React from "react";
import { colunas } from "../config/colunas-produto";
import { deleteProdutosApi } from "../service/Api";

function Produtos({produtos = []}){

    return (
        <>
            <div className='Description'>Lista de produtos</div>
            <div className="servicos" role="region" tabIndex="0">
                <table>
                    <thead>
                        <tr>
                            {colunas.produtos.map((colunas, i) =>
                                <th key={i}>{colunas.toUpperCase()}</th>
                            )}
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                        {/* {console.log("Estou aqui",produtos)} */}
                    </thead>
                    <tbody>
                        {Array.isArray(produtos) && produtos.map((item, i) => 
                        
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.descricao}</td>
                            <td>{item.preco}</td>
                            <td>{item.estoque}</td>
                            <td><button href='#' className='btn btn-editar'>Editar</button></td>
                            {/* <td><button href='#' className='btn btn-excluir'>Excluir</button></td> */}
                            <td><button onClick={() => deleteProduto(item.id)} className='btn btn-excluir'>Excluir</button></td>
                            {console.log("Testando o i... ",produtos)}
                        </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>     
        </>
    );
}

export default Produtos;