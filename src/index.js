import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//tjrs importer les 3 1er éléments

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

//trjs mettre une maj à la function pour etre reconnu par React
function Header() {
    return (<div>
        <h1>La maison jungle</h1>
    </div>)
}
function Description() {
    return (<p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>)
}

/*function Banner() {
    return (<div>
        <Header />
        <Description />
    </div>)
}*/

function Banner() {
const title = "La maison jungle"
  return (<h1>{title}</h1>)
}

function Cart() {
    const monstera = 8
    const lierre = 10
    const bouquet = 15
    return (<div><h1>Panier</h1>
            <ul>
                <li>monstera = {monstera}€</li>
                <li>lierre = {lierre}€</li>
                <li>bouquet de fleur = {bouquet}€</li>
            </ul>
            total = {monstera+lierre+bouquet}€</div>)
}

//mettre des {} pour toute utilisation classique de Js
/*function Test(){
    return (<div>La grande réponse sur la vie, l'univers et le reste est { 6 * 7 } </div>)
}*/

// ========================================
//chaque composants doit etre wrapper dans un composant parent, dans ce cas un <div></div>
/*ReactDOM.render(
  <div><Game /><Header /><Description /><Test /></div>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <div><Banner /><Cart /></div>,
  document.getElementById('root')
);
