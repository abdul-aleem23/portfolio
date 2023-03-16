import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from 'styled-components'
import Cube from './Cube'


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
      <Canvas camera= {{fov:25, position:[5, 5, 5]}}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
        <OrbitControls enableZoom={false}  />
      </Canvas>
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