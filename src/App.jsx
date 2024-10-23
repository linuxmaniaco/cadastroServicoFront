import { useState } from 'react'
import './App.css'
import "./assets/styleGlobal.css";
import logoImage from './images/logo.png';
import fotoPerfil from './images/fotoPerfil.jpg';
import Container from "./components/Container";
import Layout from "./components/Layout";

function App() {
  // const [count, setCount] = useState(0)

  return (
  
      <>
        <header>
            <fieldset>
                <legend>Funcionário</legend>
                    <div className='foto'><img className='fotoPerfil' src={fotoPerfil}></img> </div>
            </fieldset>
            <div className='Logo'> <img src={logoImage}></img> Tabela de cadastro de serviços</div>

            <fieldset>
                <legend>Resumo diário</legend>
                <div className='LogoText'>  </div>
            </fieldset>
        </header>

        <div className='menu'>
          <ul>
              <li><a href='#'>SERVIÇOS</a></li>
              <li><a href='#'>PEDIDOS</a></li>
              <li><a href='#'>RELATÓRIOS</a></li>
              <li><a href='#'>ADMIN</a></li>
          </ul>
        </div>
        {/* <Container> */}

        

        {/* </Container> */}
            {/* <Container>{children}</Container> */}
    
        <Layout></Layout>
        <footer>
            <div className='copy'>Desenvolvido por Eduardo</div>
            <div className='contact'>Cel/Zap: (21) 99451-9731</div>
        </footer>
      </>
      
    
  
  );
}

export default App
