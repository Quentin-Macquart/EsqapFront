import { Link } from 'react-router-dom';
import SHeader from './style';

function Home() {
  return (
    <SHeader>
      <Link to="/games">
        <p>Les esqapes</p>
      </Link>
      <Link to="/">
        <h2 className="logo">Œ</h2>
      </Link>
      <p>Se connecter</p>
    </SHeader>
  );
}

export default Home;
