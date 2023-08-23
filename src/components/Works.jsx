import React from 'react'
import styled from 'styled-components'


const data =  [
  "Web development",
  "Testing",
  "Programming",
  "Social Media",
  "Design"
];

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  scroll-snap-align: center;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;


  &:after {
    content: "${(props)=>props.text}";
    position: absolute;
    top:0;
    left:0;
    color: hsl(186.84563758389262, 65.63876651982379%, 55.490196078431374%);
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    &:after{
      animation: moveText 0.5s linear both;
      @keyframes moveText {
          to{
              width: 100%;
          }
      }
    }
  }
 
`;

const Right = styled.div`
 flex: 1;
 
`


const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map(item=>(
              <ListItem key={item} text={item}>{item}</ListItem>
            ))}
            <ListItem></ListItem>
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Works