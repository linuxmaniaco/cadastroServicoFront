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
  
    <Layout>
      <div className='main'>
        {/* <div className='titlePage'>Sistema</div> */}
        <div className='Description'>Tabela de serviços</div>
        
        <div className="servicos" role="region" tabIndex="0">
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
    </Layout>
  
  );
}

export default App
