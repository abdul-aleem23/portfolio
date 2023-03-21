import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

const Section = styled.div`

`
const Container = styled.div`

`
const Images = styled.div`
display: flex;
height: 50px;
object-fit: contain;

margin-right: 55px;
`

const StyledMarquee = styled(Marquee)`
  width: 1100px;
  height: 80px;
`;


const SkillSlider = () => {
  return (
    <Section>
      <Container>
        <StyledMarquee pauseOnHover={true} direction="right" speed={50} gradient={false}>
          <Images>
            <img src='/public/icons-portfolio/js.png' />
          </Images>

          <Images>
            <img src='/public/icons-portfolio/react512.png' />
          </Images>

          <Images>
            <img src='/public/icons-portfolio/html.png' />
          </Images>

          <Images>
            <img src='/public/icons-portfolio/css-3.png' />
          </Images>

          <Images>
            <img src='/public/icons-portfolio/node-js-icon.png' />
          </Images>

          <Images>
            <img src='/public/icons-portfolio/bootstrap.png' />
          </Images>

          <Images>
            <img src='/public/icons-portfolio/git.png' />
          </Images>

          <Images>
            <img src='/public/icons-portfolio/github.png' />
          </Images>

          <Images>
            <img src='/public/icons-portfolio/office.png' />
          </Images>
        </StyledMarquee>
      </Container>
    </Section>
  )
}

export default SkillSlider