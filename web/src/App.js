import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App(){

  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required/>
          </div>
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>     

        <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/131524?s=200&v=4" alt="Mozila"/>
              <div className="user-info">
                <strong>Nome</strong>
                <span>Techs</span>
              </div>
            </header>
            <p>descriçãoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <a href="https://github.com/mozilla" target="_blank">Acessar Perfil</a>

          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/131524?s=200&v=4" alt="Mozila"/>
              <div className="user-info">
                <strong>Nome</strong>
                <span>Techs</span>
              </div>
            </header>
            <p>descriçãoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <a href="https://github.com/mozilla" target="_blank">Acessar Perfil</a>

          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/131524?s=200&v=4" alt="Mozila"/>
              <div className="user-info">
                <strong>Nome</strong>
                <span>Techs</span>
              </div>
            </header>
            <p>descriçãoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <a href="https://github.com/mozilla" target="_blank">Acessar Perfil</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/131524?s=200&v=4" alt="Mozila"/>
              <div className="user-info">
                <strong>Nome</strong>
                <span>Techs</span>
              </div>
            </header>
            <p>descriçãoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <a href="https://github.com/mozilla" target="_blank">Acessar Perfil</a>
          </li>
        </ul>
      </main>
    </div>


  );
}

export default App;

// COMENTARIOS DA AULA

// Conceitos principais de React
// Componente - É um função(function) que retorna um conteudo HTML/CSS/Algum JS que retorna algo para interface - Algo que pode ser reutilizado.
// Ou seja, um bloco isolado que não interfere no restante da aplicação
// Obs: Colocar apenas um componente por arquivo
// Estado - Informação mantidas pelo componente (lembrar: imutabilidade)
// Propriedade - Informações que um componente PAI (ex: App) passa para o componente FILHO.

//function App() {
//  const [counter,setCounter] = useState(0); // quando usa useState, retorna um vetor com duas informações

//  function incrementCounter(){ // toda função que é propria de um componente, você cria a função dentro do componente.
//    setCounter(counter + 1);
//  } 

//  return (
   // Sempre que colocar componentes um abaixo do outro, temos que colocar dentro de algum componente/conteudo. Ex: <div>
   // Para não quebrar a estilização, no react podemos colocar um Fragment, que é uma tag em branco. <> e </>
//  <>
//    <h1>Contador: {counter}</h1>
//    <button onClick={incrementCounter}>Incrementar</button>
//  </>
//    );
//}

//export default App;
