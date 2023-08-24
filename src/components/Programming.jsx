import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 120px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;
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
  width: 200px;
  height: 80px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 400px;
  right: 100px;
  font-size: 15px;
  font-weight: bold;
  
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  padding: 13px;
  border-radius: 20px;
 
`;
const Desc3 = styled.div`
  width: 200px;
  height: 40px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 550px;
  right: 100px;
  font-size: 15px;
  font-weight: bold;
  
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;


const Programming = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Atom />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
      I learned to program in Java, C, and C++ during my university studies, where I gained a solid foundation in these languages and developed a strong understanding of Object-Oriented Programming (OOP) principles.
      </Desc>
      <Desc2>
        <p>My stack</p>
      <Img src="./img/C.png"/>
      <Img src="./img/java.png"/>
      <Img src="./img/spring.png"/>
    </Desc2>
    <Desc3>
        <p>I made a game in spring boot.</p>
        <p>https://github.com/emKocode/nonogram</p>
     
    </Desc3>
    </>
  );
};

export default Programming;