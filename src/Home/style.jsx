import styled from 'styled-components';

const SHome = styled.main`
  position: relative;
  font-family: 'Zen Kurenaido', sans-serif;

  article {
    opacity: 0.8;
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #ffffff, 0 0 2rem #e99f17,
      0 0 0.8rem#e99f17, 0 0 2.8rem #e99f17, inset 0 0 1.3rem #e99f17;
    color: #fff;
    width: 80vw;
    height: 120px;
    position: relative;
    background: #d8900a;
    font-size: 1.4em;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    display: flex;
    justify-content: center;
    display: flex;
    flex-direction: row;
    margin: 40px 40px;
    background: #d8900a;
  }
  .aboutUs {
    animation: flicker 1.2s infinite alternate;
  }
  h3 {
    margin-top: 10px;
    text-align: center;
    padding: 7px;
    font-size: 25px;
    width: 50%;
  }
  p {
    line-height: 19px;
    margin-top: 20px;
    padding: 7px;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 50%;
    font-weight: 100;
    font-size: 15px;
  }
  main {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .line {
    height: 90vh;
    opacity: 0.5;
    z-index: -3;
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #ffffff, 0 0 2rem #e99f17,
      0 0 0.8rem#e99f17, 0 0 2.8rem #e99f17, inset 0 0 1.3rem #e99f17;
    border: 1px solid yellow;
  }

  .words {
    text-align: center;
    font-family: 'Zen Kurenaido', sans-serif;
    color: #171717;
    font-size: 0;
    line-height: 1.5;
  }
  .words span {
    font-size: 5rem;
    display: inline-block;
    animation: move 3s ease-in-out infinite;
  }
  @keyframes move {
    0% {
      transform: translate(-30%, 0);
    }
    50% {
      text-shadow: 0 25px 50px rgb(226, 241, 11);
    }
    100% {
      transform: translate(30%, 0);
    }
  }

  .words span:nth-child(2) {
    animation-delay: 0.5s;
  }

  .words span:nth-child(3) {
    animation-delay: 1s;
  }

  .words span:nth-child(4) {
    animation-delay: 1.5s;
  }

  .words span:nth-child(5) {
    animation-delay: 2s;
  }

  .words span:nth-child(6) {
    animation-delay: 2.5s;
  }

  .words span:nth-child(7) {
    animation-delay: 3s;
  }

  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow: 0 0 4px #34c517, 0 0 11px #e99f17, 0 0 19px #e99f17,
        0 0 40px #0fa, 0 0 80px #e99f17, 0 0 90px #e99f17, 0 0 100px #e99f17,
        0 0 150px #e99f17;
    }
    20%,
    24%,
    55% {
      text-shadow: none;
    }
  }
`;

export default SHome;
