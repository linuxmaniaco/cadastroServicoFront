import Container from "./Container";

function Layout ({children}){

    return (
        <>
            <header>
                <div className='foto'><img className='fotoPerfil' src={fotoPerfil}></img> </div>
                <div className='Logo'> <img src={logoImage}></img> Tabela de cadastro de serviços</div>
                <div className='LogoText'> LogoTexts</div>
            </header>

            <div className='menu'>
            <ul>
                <li>SERVIÇOS</li>
                <li>PEDIDOS</li>
                <li>RELATÓRIOS</li>
                <li>ADMIN</li>
            </ul>
            </div>

            <Container>{children}</Container>

            <footer>
                <div className='copy'>Desenvolvido por Eduardo</div>
                <div className='contact'>Cel/Zap: (21) 99451-9731</div>
            </footer>
        </>

    )
}

export default Layout;