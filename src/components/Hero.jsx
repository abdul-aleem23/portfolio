import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial  } from '@react-three/drei'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Container = styled.div`
  width: 1400px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Title = styled.h1`
  font-size: 74px;
`
const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Line = styled.img`
  height: 5px;
`
const SubTitle = styled.h2`

`
const Desc = styled.p`
  font-size: 24px;
`

const Right = styled.div`
  flex: 3;
  position: relative;
`
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
`

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Design, Develop, Deliver.</Title>
          <WhatIDo>
            <Line src="./img/line.png" />
            <SubTitle>What I Do</SubTitle>
          </WhatIDo>
          <Desc>a student pursuing full stack development with a passion for crafting engaging digital experiences.</Desc>
        </Left>

        <Right>
          <Canvas>
            <OrbitControls enableZoom={false}  />
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial 
              color="#f7cce8" attach="material" distort={0.5} speed={3}
              />
            </Sphere>
        </Canvas>
          <Img src="./img/image-desktop-pc.png" />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero