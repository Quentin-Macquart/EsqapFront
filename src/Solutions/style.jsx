import styled from 'styled-components';

const SSolutions = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: 'Zen Kurenaido', sans-serif;
  h1 {
    font-size: 50px;
  }
  div {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
  section {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    font-size: 22px;
  }
  h3 {
    font-size: 30px;
    margin: 20px;
  }
  .solution {
    padding: 30px 20px 30px 20px;
    background-color: #1d1c1c8d;
    position: absolute;
    top: 28%;
    width: 90vw;
    text-align: center;
  }
  .congrats {
    top: 15%;
  }
  .cluesBloc {
    padding: 40px 20px 60px 20px;
    background-color: #1d1c1c8d;
    bottom: 6%;
  }
  .thx {
    position: absolute;
    top: 23%;
    width: 100vw;
  }
`;

export default SSolutions;
