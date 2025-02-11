import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

function OrbTemp() { 
  const { width, height } = useWindowSize();
  console.log(width, height);

  const moveOrb = keyframes`
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(${width}px,${height/1.5}px);
    }
    100% {
      transform: translate(0, 0);
    }
  `;

  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    margin-left: -37vh;
    margin-right: -37vh;
    border-radius: 50%;
    background: linear-gradient(180deg, rgb(102, 205, 245) 0%, rgb(74, 242, 102) 100%);
    filter: blur(100px);
    animation: ${moveOrb} 10s alternate linear infinite;
  `;

  return <OrbStyled />;
}

export default OrbTemp;
 
