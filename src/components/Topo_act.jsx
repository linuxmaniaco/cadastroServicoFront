function Topo({showList}){

    return(
        <div className="topo">
            <button className="btn">{showList ? 'Cadastro' : 'Listaem'}</button>
        </div>
         
        
    )
}

export default Topo