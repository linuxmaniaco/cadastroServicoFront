function Container (){

    return (
        <div className='container'>
            {/* {children} */}
            {/* Teste de corpo de container */}
            
            <div className='main'>
                {/* <div className='titlePage'>Sistema</div> */}
                <div className='Description'>Tabela de serviços</div>
                <div className="servicos" role="region" tabIndex="0">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <div>
                                        <div>Coluna 1</div>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <div>Coluna 2</div>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <div>Coluna 3</div>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <div>Coluna 4</div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Container;