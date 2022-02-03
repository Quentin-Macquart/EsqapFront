import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import SSchemaChallenges from './style';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Pagination]);

function SchemaChallenge({ whatChallenge, solution, winChallenge }) {
  const [isDone, setIsDOne] = useState(false);
  const checkAnswer = (choice) => {
    if (solution === choice) {
      setIsDOne(!isDone);
      winChallenge();
    }
  };

  return (
    <SSchemaChallenges key={whatChallenge.number}>
      <div>
        <img src={whatChallenge.backgroundImg} alt="Forest" />
      </div>
      <h2 className="title">{whatChallenge.title}</h2>
      <h1>Chapitre {whatChallenge.number}</h1>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide className="swiperComponent">
          <p>{whatChallenge.prologue}</p>
        </SwiperSlide>
        <SwiperSlide className="swiperComponent">
          <p>{whatChallenge.description}</p>
        </SwiperSlide>
        <SwiperSlide className="swiperComponent">
          <p>{whatChallenge.action}</p>
        </SwiperSlide>
        <SwiperSlide className="swiperComponent">
          <h3> Que dois-je faire?</h3>
          <section>
            <button
              type="button"
              onClick={() => {
                checkAnswer(whatChallenge.choice1);
              }}
            >
              {whatChallenge.choice1}
            </button>
            <button
              type="button"
              onClick={() => {
                checkAnswer(whatChallenge.choice2);
              }}
            >
              {whatChallenge.choice2}
            </button>
            <button
              type="button"
              onClick={() => {
                checkAnswer(whatChallenge.choice3);
              }}
            >
              {whatChallenge.choice3}
            </button>
          </section>
        </SwiperSlide>
      </Swiper>
    </SSchemaChallenges>
  );
}

SchemaChallenge.propTypes = {
  whatChallenge: PropTypes.shape({
    gamesId: PropTypes.number,
    prologue: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    action: PropTypes.string,
    choice1: PropTypes.string,
    choice2: PropTypes.string,
    choice3: PropTypes.string,
    backgroundImg: PropTypes.string,
    number: PropTypes.number,
  }),
  solution: PropTypes.string,
  winChallenge: PropTypes.func,
};

SchemaChallenge.defaultProps = {
  whatChallenge: {},
  solution: '',
  winChallenge: () => {},
};

export default SchemaChallenge;
