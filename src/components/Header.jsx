import logoImage from '../images/logo.png';
import fotoPerfil from '../images/fotoPerfil.jpg';

function Header (){

    return (
        <header>
            <fieldset>
                <legend>Funcionário</legend>
                    <div className='foto'><img className='fotoPerfil' src={fotoPerfil}></img> </div>
            </fieldset>
            <div className='Logo'> <img src={logoImage}></img> Tabela de cadastro de serviços</div>

            <fieldset>
                <legend>Resumo de Venda</legend>
                <div className='LogoText'>  </div>
            </fieldset>
        </header>
    )
}

export default Header;