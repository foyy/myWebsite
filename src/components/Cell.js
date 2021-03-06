import React from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";



const cellAnimation = keyframes` 
   0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-width: 320px;
  margin:10px;
  justify-content: center;
  margin-left: -10px;

`

const Title = styled.h3`
  font-family: 'Courier New', Courier, monospace;

  animation: ${cellAnimation};
  animation-duration: 3s;
  animation-delay: .1s;
  animation-fill-mode: forwards;
  opacity: 0;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, .8);

`

const Image = styled.div`
   

  width:60px;
  height: 60px;
  border-radius: 10px;
  background-image: url('${props => props.image}');
  background-size: cover;
  justify-self: end;
  margin: 15px;
  animation: ${cellAnimation};
  animation-duration: 3s;
  animation-delay: .1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, .8);
  opacity: 0;


  // &:nth-child(3) {
  //   animation: ${cellAnimation} 16s 4s infinite;
  // }




}`


const Cell = ({ title, image }) => (
  <ScrollAnimation
    animateIn="fadeIn"
    delay={115}
    duration={1.5}>

    <CellGroup>
      <Image image={image} />
      <Title >{title}</Title>
    </CellGroup>
  </ScrollAnimation>
)


export default Cell