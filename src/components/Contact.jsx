import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`
const Title = styled.h1`
  font-weight: 200;
`
const Input = styled.input`
  padding: 20px;
  background-color: #e7e6e6;
  border: none;
  border-radius: 5px;
`
const TextArea= styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e7e6e6;
  
`
const Button = styled.button`
  background-color: hsl(186.84563758389262, 65.63876651982379%, 55.490196078431374%);
  color: white;
  font-weight:bold;
  padding: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
const Right = styled.div`
  flex: 1;
`


const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact me</Title>
            <Input placeholder='Name'/>
            <Input placeholder='Email'/>
            <TextArea placeholder='Write your message' rows={10}/>
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>

        </Right>
      </Container>
    </Section>
  )
}

export default Contact