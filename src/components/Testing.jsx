import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";

const Desc = styled.div`
  width: 260px;
  height: 90px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 300px;
  right: 50px;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
const Desc2 = styled.div`
  width: 260px;
  height: 80px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 450px;
  right: 50px;
  font-size: 15px;
  font-weight: bold;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  padding: 13px;
  border-radius: 20px;
 
`;
const Desc3 = styled.div`
  width: 280px;
  height: 40px;
  padding: 20px;
 
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 600px;
  right: 50px;
  font-size: 15px;
  font-weight: bold;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }
  
`;


const Testing = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Atom />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        Ive made some tests for my game in JUNIT5 and i also completed courses on SKILLMEA where i learned Selenium and Cypress.io
        </Desc>
      <Desc2>
        <p>My stack</p>
      <Img src="./img/cypress.png"/>
      <Img src="./img/junit.png"/>
      <Img src="./img/sele.png"/>
    </Desc2>
    <Desc3>
        <p>Github repo where i learn cypress</p>
        <p>https://github.com/emKocode/cypressLearn</p>
     
    </Desc3>
    </>
  );
};

export default Testing;