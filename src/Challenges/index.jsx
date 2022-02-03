import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import SchemaChallenge from 'SchemaChallenge';
import Header from 'Header';
import axios from 'axios';
import Solutions from 'Solutions';
import gallySong from './gunnm-ost-alita-battle-angel-gallys-theme-with-light-animation.mp3';
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
    const newContent = [...challContents];
    newContent.shift();
    setChallContents(newContent);
  };
  return (
    <>
      <Header />
      <audio autoPlay="true" loop="true" src={gallySong}>
        <track
          src="captions_en.vtt"
          kind="captions"
          srcLang="en"
          label="english_captions"
        />
      </audio>
      {challContents.length ? (
        <SChallenges>
          <SchemaChallenge
            whatChallenge={challContents[0]}
            solution={challContents[0].solution}
            winChallenge={validateChallenge}
          />
        </SChallenges>
      ) : (
        <Solutions />
      )}
    </>
  );
}
export default Challenges;
