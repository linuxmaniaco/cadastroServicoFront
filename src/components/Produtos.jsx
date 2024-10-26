import React from "react";

const Produtos = ({colunas, produtos}) => {
    return (
        <>
        <div className='Description'>Lista de produtos</div>
            <div className="servicos" role="region" tabIndex="0">
                <table>
                    <thead>
                        <tr>
                            {colunas.map((colunas, i) =>
                                <th key={i}>{colunas.toUpperCase()}</th>
                            )}
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                        {/* {console.log(produtos)} */}
                    </thead>
                    <tbody>
                        {produtos.map((item, i) => 
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.descricao}</td>
                            <td>{item.preco}</td>
                            <td>{item.estoque}</td>
                            <td><a href='#' className='btn-editar'>Editar</a></td>
                            <td><a href='#' className='btn-editar'>Excluir</a></td>
                        </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>     
        </>
    );
}

export default Produtos;