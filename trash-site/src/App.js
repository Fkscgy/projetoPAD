import './App.css';
import logo  from './logo.png';
import carro from './carro.png';
import lata from './lata.png';

function App() {
  return (
    <div className="App">
      <div className='Title'>
        <img src={logo}></img>
      </div>
        <div className="Container">
          <div className='Sinopse'>
            <h2>Sinopse</h2>
            <p>Com o avanço da poluição da flora brasileira os animais decidem se juntar para defender a última árvore ??? do Brasil. Junte-se a eles nessa aventura em estilo Tower Defense.</p>
          </div>
          <div className='Jogabilidade'>
            <h2>Jogabilidade</h2>
            <p>NatureClub é um tower defense onde tudo é controlado pelo mouse.</p>
          </div>
          <div className='History'>
            <h2>História</h2>
            <p>A história se passa em algum lugar na amazônia onde os animais lutam para proteger a arvore sagrada.</p>
          </div>
        </div>
        <div className='Enemies'>
          <div className='Lata'>
            <h2>Lata de Lixo</h2>
            <p>A lata de lixo é o inimigo comum do jogo e são spawnadas várias por wave. Sua vida aumenta ao decorrer do jogo.</p>
            <img src={lata}></img>
          </div>
          <div className='Carro'>
            <h2>Carro Poluidor</h2>
            <p>Sendo este o boss do jogo, a cada 5 waves ele aparece para dar trabalho ao jogador. Ficando mais forte a cada wave irá testar as defesas do jogador.</p>
            <img src={carro}></img>
          </div>
        </div>
        <div className='Credits'>
          <h2>Equipe</h2>
          <div className='Equipe'>
            <div className='Programacao'>
              <h3>Programação 3D</h3>
              <ol>
                <li>Carlo Mário | <a href='https://github.com/Grimirg'> github</a></li>
                <li>Eduardo Moraes | <a href='https://github.com/fkscgy'> github</a></li>
                <li>Guilherme Cândido | <a>link</a></li>
                <li>Ibson Luiz | <a>link</a></li>
                <li>Matheus Ferreira | <a href='https://github.com/MetheusFerreira'> github</a></li>
                <li>Saulo Costa | <a>link</a></li>
              </ol>
            </div>
            <div className='Multimidia'>
              <h3>Multimídia 3B</h3>
              <ol>
                <li>André Luiz | <a>link</a></li>
                <li>Elzo Ithallo | <a>link</a></li>
                <li>João Gabriel | <a>link</a></li>
                <li>Lucas José | <a>link</a></li>
                <li>Sara Amanda | <a>link</a></li>
              </ol>
            </div>
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
