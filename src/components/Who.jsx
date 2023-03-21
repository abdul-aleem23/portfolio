import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import Box from './Box'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  /* background-color: black; */
`
const Container = styled.div`
  width: 1400px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Wrapper = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  margin: 0 auto;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`
const BoxText = styled.div`
  font-size: 14px;
  margin: 40px;
  color: #FFFAE4;
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

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Wrapper>
          <Canvas camera= {{fov:25, position:[5, 3, 5]}}>
            <Box />
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <OrbitControls  enableZoom={false} autoRotate/>
        </Canvas>
          </Wrapper>
        <BoxText>Schrödinger's cat is a famous thought experiment in quantum mechanics where a cat in a box is both alive and dead until observed. It is a symbol of the weirdness and uncertainty of quantum mechanics.</BoxText>
        </Left>
        <Right>
          <Title>thinking outside the BOX.</Title>
          <Button>See Projects</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who