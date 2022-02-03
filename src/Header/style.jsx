import styled from 'styled-components';

const SHeader = styled.header`
  margin-top: 20px;
  width: 99vw;
  height: 7vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #e2970b;
  font-family: 'Zen Kurenaido', sans-serif;
  p {
    font-size: 23px;
  }
  .logo {
    text-shadow: 0 0 4px #c6d311, 0 0 11px #d68419, 0 0 19px #eca219,
      0 0 40px #dd9d12, 0 0 80px #ecd60c, 0 0 90px #ecde17, 0 0 100px #77e412,
      0 0 150px #b1ee08;
    font-size: 40px;
    rotate: 90deg;
  }
  a {
    color: #e2970b;
  }
`;

export default SHeader;
