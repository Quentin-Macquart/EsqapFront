import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from 'Header';
import SGameDetails from './style';

function GameDetails() {
  const [gameDetails, setGameDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/games/${id}`).then(({ data }) => {
      setGameDetails(data[0]);
    });
  }, []);

  return (
    <>
      <Header />
      <SGameDetails>
        <h3 className="typeEffect">{gameDetails.name}</h3>
        <section>
          <p>{gameDetails.synopsis}</p>
          <div className="divButton">
            <Link to={`/games/challenge/${id}`}>
              <button type="button">Commencer</button>
            </Link>
          </div>
        </section>
        <div className="divImg">
          <img src={gameDetails.backgroundImage} alt="" />
        </div>
      </SGameDetails>
    </>
  );
}

export default GameDetails;
