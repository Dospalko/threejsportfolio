import React from "react";
import styled from "styled-components";

import { Link, animateScroll as scroll } from "react-scroll";
import Works from "./Works";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  height: 100px;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;
const Icon = styled.img`
  width: 40px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: hsl(
    186.84563758389262,
    65.63876651982379%,
    55.490196078431374%
  );
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>
              <Link
                activeClass="active"
                to='who'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </ListItem>
            <ListItem>  <Link
                activeClass="active"
                to='projects'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link></ListItem>
            <ListItem>  <Link
                activeClass="active"
                to='works'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Works
              </Link></ListItem>
            <ListItem>  <Link
                activeClass="active"
                to='contact'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link></ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.jpg" />
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
