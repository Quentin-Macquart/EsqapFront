import styled from 'styled-components';

const SGames = styled.main`
  font-family: 'Zen Kurenaido', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: white;
    margin: 30px 0 70px 0;
    font-size: 50px;
    padding: 30px;
  }
  article {
    border-radius: 30px;
    position: relative;
    margin-bottom: 40px;
    height: 400px;
    width: 250px;
    overflow: hidden;
  }
  img {
    object-fit: cover;
    object-position: center;
    height: 100%;
  }
  p {
    padding: 5px 0 5px 0;
    text-align: center;
    height: 60px;
    background-color: #e2970b;
    width: 100%;
    font-family: 'Zen Kurenaido', sans-serif;
    font-size: 30px;
    position: absolute;
    bottom: 0%;
    color: white;
  }
  span {
    width: 100%;
    text-align: center;
    font-size: 30px;
    position: absolute;
    background-color: red;
  }
`;

export default SGames;
