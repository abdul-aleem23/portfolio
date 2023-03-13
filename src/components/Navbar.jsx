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
font-weight: bold;
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
width: 150px;
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