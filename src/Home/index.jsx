import Header from 'Header';
import { Link } from 'react-router-dom';
import SHome from './style';

function Home() {
  return (
    <>
      <Header />
      <SHome>
        <div className="line" />
        <div className="words word-1">
          <span>E</span>
          <span>S</span>
          <span>Q</span>
          <span>A</span>
          <span>P</span>
        </div>
        <main>
          <Link to="/games/3">
            <article>
              <h3>Nouvelle escape ajoutée!</h3>
              <p>La quête de Senaki</p>
            </article>
          </Link>
          <Link to="/games">
            <article>
              <p>Prend connaissance de nos différentes esqapes</p>
              <h3>Les esqapes!</h3>
            </article>
          </Link>
          <article className="aboutUs">
            <h3>A propos de nous!</h3>
            <p>Pour en savoir un peu plus de notre pojet</p>
          </article>
        </main>
      </SHome>
    </>
  );
}

export default Home;
