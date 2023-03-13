import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 74px;
`

const Button = styled.button`
  color: #FFFAE4;
  width: 200px;
  float: right;
  padding: 12px 16px;

  background-color: #84319B;
  border: 0;
  border-bottom: 5px solid #632673;
  border-left: 1px solid #632673;
  border-radius:2px;

  cursor: pointer;
  position: relative;

  &:active {
    border-bottom-width: 2px;
    top: 2px;
  }
`


const Who = () => {
  return (
    <Section>
      <Container>
      <Left>{/* 3D Model */}</Left>
      <Right>
        <Title>thinking outside the BOX.</Title>
        <Button>See Projects</Button>
      </Right>
      </Container>
    </Section>
  )
}

export default Who