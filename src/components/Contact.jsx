import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`

`
const Left = styled.div`

`
const Title = styled.h1`

`
const Form = styled.div`

`
const Input = styled.input`

`
const TextArea = styled.textarea`

`
const Button = styled.button`

`

const Right = styled.div`

`

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Me</Title>
            <Input placeholder='Name'/>
            <Input placeholder='Email'/>
            <TextArea placeholder='Please write a message' />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Contact
