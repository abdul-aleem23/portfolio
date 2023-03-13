import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
display: flex;
justify-content: center;
`

const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0px;
`

const Links = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

const Logo = styled.img`
width: 300px;
height: 90px;
object-fit: cover;
cursor: pointer;
`

const List = styled.ul`
display: flex;
gap: 30px;
list-style: none;
`

const ListItem = styled.li`
cursor: pointer;
`
const Icons = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
const Icon = styled.img`
width: 20;
cursor: pointer;
`
const Button = styled.button`
color: #FFFAE4;
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
  top: 3px;
}
`

const Navbar = () => {
  return (
    <Section>
        <Container>
          <Links>
          <Logo src="./img/AA.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
          </Links>
          <Icons>
            <Icon src="./img/search.png" />
            <Button>Hire Now</Button>
          </Icons>
        </Container>
    </Section>
  )
}

export default Navbar