import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Map from './Map'

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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: lightblue;
`
const Title = styled.h1`
  font-weight: 200;
`
const Form = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Input = styled.input`
  padding: 16px;
  background-color: lightgray;
  border: none;
  border-radius: 4px;
`
const TextArea = styled.textarea`
  padding: 16px;
  background-color: lightgray;
  border: none;
  border-radius: 4px;
`
const Button = styled.button`
color: #FFFAE4;
width: 200px;
font-size: 16px;
letter-spacing: 2px;
text-decoration: none;
text-transform: uppercase;
color: #84319B;
cursor: pointer;
border: 1px solid;
box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
position: relative;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;


&:active {
  box-shadow: 0px 0px 0px 0px;
  top: 3px;
  left: 3px;
}
@media (min-width: 768px) {
  padding: 0.25em 0.75em;
  }
`

const Right = styled.div`
  flex: 1;
`

const Contact = () => {
  const ref = useRef()
  const [success, setSuccess] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault(); //Stops the page from refreshing.

    // from the EmailJS doc
    emailjs
      .sendForm(
        'service_ituqu3i',
        'template_uob0i6e',
        ref.current,
        'UqPMbjaM-DYXNL9Yx'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true)
        },
        (error) => {
          console.log(error.text);
          setSuccess(false)
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder="Please write a message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {success && 
              "Your message has been received. I will get back to you soon!"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact