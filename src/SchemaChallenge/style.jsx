import styled from 'styled-components';

const SSchemaChallenges = styled.main`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Zen Kurenaido', sans-serif;
  color: white;
  div {
    width: 100vw;
  }
  h1 {
    position: absolute;
    font-size: 25px;
    top: 2%;
  }
  h2 {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: #1d1c1c8d;
    width: 100vw;
    height: 80px;
    top: 1%;
    position: absolute;
    font-size: 40px;
    padding-bottom: 10px;
  }
  p {
    padding: 25px;
    font-size: 23px;
  }
  .swiper-container {
    background-color: #1d1c1c8d;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 15%;
  }
  h3 {
    text-align: center;
    font-size: 30px;
  }
  section {
    margin-top: 30px;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 200px;
  }
  section button {
    font-family: 'Zen Kurenaido', sans-serif;
    opacity: 0.8;
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #ffffff, 0 0 2rem #e99f17,
      0 0 0.8rem#e99f17, 0 0 2.8rem #e99f17, inset 0 0 1.3rem #e99f17;
    animation: flicker 1.5s infinite alternate;
    color: #fff;
    width: 80%;
    height: 80px;
    position: relative;
    padding: 0.8em 2.2em;
    cursor: pointer;
    background: #d8900a;
    border: none;
    text-transform: uppercase;
    font-size: 1em;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    letter-spacing: 0.04em;
    mix-blend-mode: color-dodge;
    perspective: 500px;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
  }

  .title {
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

export default SSchemaChallenges;
