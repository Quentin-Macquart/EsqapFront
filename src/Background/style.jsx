import styled from 'styled-components';

const SBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
  padding: 0;
  box-sizing: border-box !important;
  display: table;
  width: 100%;
  height: 100%;
  background-color: #171717;
  color: #000;
  line-height: 1.6;
  position: relative;
  font-family: sans-serif;
  overflow: hidden;

  .line {
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 75%,
      #ffffff 100%
    );
    animation: drop 7s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }
  &:nth-child(1) {
    margin-left: -25%;
  }
  &::after {
    animation-delay: 2s;
  }

  &:nth-child(3) {
    margin-left: 25%;
  }
  &::after {
    animation-delay: 2.5s;
  }

  @keyframes drop {
    0% {
      top: -50%;
    }
    100% {
      top: 110%;
    }
  }
`;

export default SBackground;
