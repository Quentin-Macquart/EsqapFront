import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import SSolutions from './style';

function Solutions() {
  const { id } = useParams();
  const [solutions, setSolutions] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/games/${id}/solution`).then(({ data }) => {
      setSolutions(data[0]);
    });
  }, []);

  return (
    <SSolutions>
      <div>
        <img src={solutions.backgroundImg} alt="" />
      </div>
      <section className="congrats">
        <h1>Bravo !</h1>
        <p> Vous avez trouvé la solution</p>
      </section>
      <p className="solution">{solutions.solution}</p>

      <section className="cluesBloc">
        <h3>Les indices</h3>
        <p className="clues">{solutions.indices}</p>
      </section>
      <h3 className="thx">Merci pour votre participation!</h3>
    </SSolutions>
  );
}

export default Solutions;
