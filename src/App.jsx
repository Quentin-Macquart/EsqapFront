import { Routes, Route } from 'react-router';
import Solutions from './Solutions';
import GameDetails from './GameDetails';
import Games from './Games';
import Home from './Home';
import Challenges from './Challenges';
import './style.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/games/challenge/:id" element={<Challenges />} />
        <Route path="/games/:id/solutions" element={<Solutions />} />
      </Routes>
    </>
  );
}

export default App;
