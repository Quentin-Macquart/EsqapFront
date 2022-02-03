import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import SGames from './style';

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/games`).then(({ data }) => {
      setGames(data);
    });
  }, []);

  const difficulty = (gameDifficulty) => {
    if (gameDifficulty === 3) {
      return '✪✪✪';
    }
    if (gameDifficulty === 2) {
      return '✪✪';
    }
    return '✪';
  };

  return (
    <>
      <Header />
      <SGames>
        <h1>Les esQapes</h1>
        {games.map((game) => {
          return (
            <article>
              <span>{difficulty(game.difficulty)}</span>
              <Link to={`/games/${game.id}`}>
                <p>{game.name}</p>
                <img src={game.backgroundImage} alt="" />
              </Link>
            </article>
          );
        })}
      </SGames>
    </>
  );
}

export default Games;
