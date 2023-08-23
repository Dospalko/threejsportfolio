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
  bottom: 200px;
  right: 100px;

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
      <Desc>
      We design products with a strong focus on both world class design and
      ensuring your product is a ma
    </Desc>
    </>
  );
};

export default WebDev;
