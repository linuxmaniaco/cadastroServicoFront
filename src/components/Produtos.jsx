import React, { useContext } from "react";
import { colunas } from "../config/colunas-produto";
import DeleteContext from "../DeleteContext";

function Produtos({produtos = []}){
    const deleteFn = useContext(DeleteContext);

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
                            <td><button onClick={() => deleteFn(item.id)} className='btn btn-excluir'>Excluir</button></td>
                        </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>     
        </>
    );
}

export default Produtos;