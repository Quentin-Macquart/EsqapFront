import styled from 'styled-components';

const SGameDetails = styled.article`
  height: 100vh;
  font-family: 'Zen Kurenaido', sans-serif;

  img {
    height: 100%;
    width: auto;
  }
  a {
    text-decoration: none;
  }
  section {
    border-top: 3px solid #a8a318;
    border-bottom: 3px solid #a8a318;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    margin-top: 90px;
    padding: 36px;
    width: 80vw;
    height: 500px;
    position: absolute;
    z-index: 3;
    opacity: 1;
    background-color: #1d1c1c8d;
  }
  p {
    color: #dbdada;
    margin-top: 20%;
    font-size: 27px;
    text-align: center;
  }
  h3 {
    margin-top: 100px;
    width: 100vw;
    position: absolute;
    z-index: 4;
    text-align: center;
    font-size: 40px;
    color: #dbdada;
  }
  .divImg {
    position: absolute;
    opacity: 0.6;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  //-----------------------------------------buttonGlitch

  .divButton {
    bottom: -65px;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 90vw;
  }

  button {
    opacity: 0.8;
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #ffffff, 0 0 2rem #e99f17,
      0 0 0.8rem#e99f17, 0 0 2.8rem #e99f17, inset 0 0 1.3rem #e99f17;
    animation: flicker 1.5s infinite alternate;
    color: #fff;
    width: 180px;
    position: relative;
    padding: 0.8em 2.2em;
    cursor: pointer;
    background: #d8900a;
    border: none;
    text-transform: uppercase;
    font-size: 1.4em;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    letter-spacing: 0.04em;
    mix-blend-mode: color-dodge;
    perspective: 500px;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
  }

  button::before,
  button::after {
    --z: 0;

    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    opacity: 0;
    mix-blend-mode: inherit;
    border-radius: inherit;
    transform-style: preserve-3d;
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

  //--------------------------------------------------------------------typing
  .typeEffect {
    height: 200px;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 3.6s;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

export default SGameDetails;
