import React from 'react'
import styled from 'styled-components'
import Projects from './Projects'
import SkillSlider from './SkillSlider'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

const Top = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Bottom = styled.div`
  flex: 1;
`

const Works = () => {
  return (
    <Section>
        <Container>
            <Top>
              <Projects />
            </Top>
            <Bottom>
              <SkillSlider />
            </Bottom>
        </Container>
    </Section>
  )
}

export default Works