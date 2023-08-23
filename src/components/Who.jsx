import React from "react";
import styled from "styled-components";


const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
 
  align-items: center;
`;
const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  scroll-snap-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 74px;
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
    <Section>
      <Container>
        <Left>
       
        
        </Left>
        <Right>
        <Title> Dominik Paľo</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who am i?</Subtitle>
          </WhatWeDo>
          <Desc>I'm 20 years old student who enjoys programming , design , testing and a lot of more.</Desc>
          <Button>My works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
