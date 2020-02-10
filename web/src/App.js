import React, {useEffect, useState} from 'react';
import api from './services/api';

//useEffect - Serve para disparar uma função qnd uma informação alterar - recebe dois parametros primeiro é qual função, segundo é quando 
// ex : useEffect(() => {função}, [quando, se estiver vazio, executa apenas uma vez])

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App(){
  const [devs, setDevs] = useState('');
  const [github_username,setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude,setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
      timeout: 30000,
      }
    )
  }, []);

useEffect(() => {
  async function loadDevs() {
    const response = await api.get('/devs');

    setDevs(response.data);
  }
  loadDevs();
}, [])

  async function handleAddDev(e){
    e.preventDefault(); // previne que qnd o usuario clicar no submit mudar de pagina no html

    const response = await api.post('/devs',{
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername('');
    setTechs('');

  };

  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required value={github_username} onChange={e => setGithubUsername(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)}/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" 
              name="latitude" 
              id="latitude" 
              required value={latitude}
              onChange={e => setLatitude(e.target.value)} //armazenar um valor de um input dentro de um state
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)} />
            </div>
          </div>     

        <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <li key={dev._id} className="dev-item">
              <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil</a>
            </li>
          ))};
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
