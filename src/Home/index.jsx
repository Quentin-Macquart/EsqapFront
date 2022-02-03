import Header from 'Header';
import SHome from './style';

function Home() {
  return (
    <>
      <Header />
      <SHome>
        <h1>EsQap</h1>
        <main>
          <article>
            <h3>Nouvelle escape ajoutée!</h3>
            <p>La quête de Senaki</p>
          </article>
          <article>
            <h3>A propos de nous!</h3>
            <p>Pour en savoir un peu plus de notre pojet</p>
          </article>
          <article>
            <h3>Les esQapes!</h3>
            <p>Prend connaissance de nos différentes esqapes</p>
          </article>
        </main>
      </SHome>
    </>
  );
}

export default Home;
