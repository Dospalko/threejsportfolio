import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  scroll-snap-align: center;
  flex-direction: column;
  align-items: center;
  
  @media only screen and (max-width: 768px) {
    height: 200vh;
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
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
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
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
const Button = styled.button`
  background-color: hsl(
    186.84563758389262,
    65.63876651982379%,
    55.490196078431374%
  );
  color: white;
  font-weight: 500;
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
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
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title> Either you run the day or the day runs you.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What do i do?</Subtitle>
          </WhatWeDo>
          <Desc>I enjoy learning new technologies and creating new projects</Desc>
          <Button>Learn more</Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="hsl(186.84563758389262, 65.63876651982379%, 55.490196078431374%)"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
