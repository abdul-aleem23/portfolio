import React from 'react'
import styled from 'styled-components'

const data = [
  "Web Design",
  "Development",
  "Product Design",
  "Links"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  /* color: transparent;
  -webkit-text-stroke: 1px #FFFAE4; */
  color: #FFFAE4;
  position: relative;
  cursor: pointer;

  ::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #84319B;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    /* -webkit-text-stroke: 1px #632673; */
    ::after{
      
      animation: moveText 0.6s linear both;

      @keyframes moveText {
        to{
          width: 100%;
        }
      }
    }
  }
`

const Right = styled.div`
  flex: 1;
`

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
        <List>
          {data.map((item)=>(
            <ListItem key={item} text={item}>{item}</ListItem>
          ))}
        </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Works