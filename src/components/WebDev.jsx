import { Canvas } from "@react-three/fiber";
import React from "react";
import Pc from "./Pc";
import { OrbitControls, Stage } from "@react-three/drei";
import { styled } from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
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
  width: 200px;
  height: 80px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 350px;
  right: 50px;
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
  height: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 500px;
  right: 50px;
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
const WebDev = () => {
  return (
    <>
   
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Pc />
      </Stage>

      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
    
      <Desc2>
        <p>My stack</p>
      <Img src="./img/react.png"/>
      <Img src="./img/tailwind.png"/>
      <Img src="./img/node.png"/>
    </Desc2>
    <Desc>
      I'm enjoying to work with React and Node.js and i like to style with Tailwind.css also i know something from Django.
    </Desc>
    <Desc3>
     GITHUB
     <p>https://github.com/emKocode</p>    </Desc3>
    </>
  );
};

export default WebDev;
