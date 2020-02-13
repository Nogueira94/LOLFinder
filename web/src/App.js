import React, {useEffect, useState} from 'react';
import api from './services/api';

//useEffect - Serve para disparar uma função qnd uma informação alterar - recebe dois parametros primeiro é qual função, segundo é quando 
// ex : useEffect(() => {função}, [quando, se estiver vazio, executa apenas uma vez])

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App(){
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data){
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]); // para quando vc cadastar um dev novo, aparecer automaticamente na lista, pois a chamada da api loadDevs roda apenas uma vez, então com essa função, adicionaremos os novos devs direto no Array devs. Utiliza o ... para pegar todos os devs e dps adiciona o novo do response.data dessa chamada da api, de cadastro 

  };

  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}  />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
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
