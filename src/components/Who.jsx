import React, { Suspense } from "react";
import styled from "styled-components";
import Cube from "./Cube";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  scroll-snap-align: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
   
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
    }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: hsl(186.84563758389262, 65.63876651982379%, 55.490196078431374%);
`;
const Desc = styled.p`
  color: lightgray;
  font-size: 24px;

`;
const Button = styled.button`
  background-color: hsl(186.84563758389262, 65.63876651982379%, 55.490196078431374%);
  color: white;
  font-weight: 500;
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }
`;

const Who = () => {
  return (
    <Section id='who'>
      <Container>
        <Left>
        <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        
        </Left>
        <Right>
        <Title> Dominik Paľo</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who am i?</Subtitle>
          </WhatWeDo>
          <Desc>I am a 21-year-old student who studies at the Technical University in Kosice. I enjoy discovering new technologies and improving my knowledge when creating projects.</Desc>
          <Button onClick={() => window.location.href = 'https://github.com/emKocode'}>My works</Button>


        </Right>
      </Container>
    </Section>
  );
};

export default Who;
