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
    font-size: 30px;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 300px;
  }
  section button {
    font-family: 'Zen Kurenaido', sans-serif;
    font-size: 20px;
    background-color: grey;
    border: none;
    padding: 0;
    cursor: pointer;
    height: 50px;
    width: 90%;
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
