import './App.css';
import logo  from './logo.png';
import carro from './carro.png';
import lata from './lata.png';
import Info from './Components/Info';
import Enemie from './Components/Enemie';
import Party from './Components/Party';
import JsonProg from './Prog.json';
import JsonMult from './Mult.json';

function App() {
  return (
    <div className="App">
      <div className='Title'>
        <img src={logo} alt=''></img>
      </div>
        <h2>Informações</h2>
        <div className="Infos">
          <Info title = 'Sinopse' content='Com o avanço da poluição da flora brasileira os animais decidem se juntar para defender a última árvore de Pau-brasil. Junte-se a eles nessa aventura em estilo Tower Defense.'/>
          <Info title = 'Jogabilidade' content='NatureClub é um tower defense onde tudo é controlado pelo mouse'/>
          <Info title = 'História' content='A história se passa em algum lugar na amazônia onde os animais lutam para proteger a arvore sagrada.' />
        </div>
        <h2>Inimigos</h2>
        <div className='Enemies'>
          <Enemie title='Lata de Lixo' content='A lata de lixo é o inimigo comum do jogo e são spawnadas várias por wave. Sua vida aumenta ao decorrer do jogo.' imageRef={lata} alt = 'Image de um modelo 3d de uma lata de lixo'/>
          <Enemie title='Carro Poluidor' content='Sendo este o boss do jogo, a cada 5 waves ele aparece para dar trabalho ao jogador. Ficando mais forte a cada wave irá testar as defesas do jogador.' imageRef={carro} alt = 'Image de um modelo 3d de uma carro'/>
        </div>
        <h2>Equipe</h2>
        <div className='Credits'>
          <div className='Equipe'>
            <Party title='Programação' content={JsonProg}/>
            <Party title='Multimídia' content = {JsonMult}/>
          </div>
        </div>
      <footer>
        <div className='footer'>
          <p>Copyright (c) 2022 Largatixas Alertas Inc. All rights reserved</p>
          <p><a href='https://github.com/Fkscgy/Trash-Game'>Github Repository</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;