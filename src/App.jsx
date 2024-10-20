import { useState } from 'react'
import './App.css'
import "./assets/styleGlobal.css";
import logoImage from './images/logo.png';
import fotoPerfil from './images/fotoPerfil.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <header>
          <div className='foto'><img className='fotoPerfil' src={fotoPerfil}></img> </div>
          <div className='Logo'> <img src={logoImage}></img> Tabela de cadastro de serviços</div>
          <div className='LogoText'> LogoTexts</div>
        </header>
        <div className='menu'>
          <ul className="lista">
            <li>SERVIÇOS</li>
            <li>PEDIDOS</li>
            <li>RELATÓRIOS</li>
            <li>ADMIN</li>
          </ul>
        </div>
        <div className='main'>
          {/* <div className='titlePage'>Sistema</div> */}
          <div className='Description'>Tabela de serviços</div>
          
          <div class="servicos" role="region" tabindex="0">
            <table>
                <thead>
                    <tr>
                        <th>
                            <div>
                                <div>Serviços</div>
                            </div>
                        </th>
                        <th>
                            <div>
                                <div>Pedidos</div>
                            </div>
                        </th>
                        <th>
                            <div>
                                <div>Relatório</div>
                            </div>
                        </th>
                        <th>
                            <div>
                                <div>Admin</div>
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
        <footer>
          <div className='copy'>Desenvolvido por Eduardo</div>
          <div className='contact'>Cel/Zap: (21) 99451-9731</div>
        </footer>
      </div>
    </>
  )
}

export default App
