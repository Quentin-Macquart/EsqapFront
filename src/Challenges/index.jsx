import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import SchemaChallenge from 'SchemaChallenge';
import Header from 'Header';
import axios from 'axios';
import SChallenges from './style';

function Challenges() {
  const [challContents, setChallContents] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/games/${id}/challenges`)
      .then(({ data }) => {
        setChallContents(data);
      });
  }, []);

  const validateChallenge = () => {
    console.log('yeah');
    const newContent = [...challContents];
    newContent.shift();
    setChallContents(newContent);
  };
  return (
    <>
      <Header />
      {challContents.length && (
        <SChallenges>
          <SchemaChallenge
            whatChallenge={challContents[0]}
            solution={challContents[0].solution}
            winChallenge={validateChallenge}
          />
        </SChallenges>
      )}
    </>
  );
}
export default Challenges;
