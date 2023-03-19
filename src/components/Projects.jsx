import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
display: flex;
flex-direction: row;
gap: 70px;
`
const Container = styled.div`
display: flex;
flex-direction: column;
width: 250px;
height: 450px;


border-radius: 5px;
/* border-color: #84319B; */
box-shadow: #84319B 0px 2px 8px 0px;
padding: 10px;

`
const Imagecontianer = styled.div`

`
const img = styled.img`

`
const Title = styled.h3`
  color: #FFFAE4;
`
const Description = styled.p`
  color: #FFFAE4;
`
const Tools = styled.p`
  color: #FFFAE4;
`




const Projects = () => {

  return (
    <Section>
      
      <Container>
        <Imagecontianer>
          <img src='public/project-images/airbnb-experiences250.png' />
        </Imagecontianer>
        <Title>AirBnB Clone (React)</Title>
        <Description>The project is an AirBnb webpage built using React.js. The user interface is dynamic and allows for efficient display of information using cards to showcase listings. The cards are designed to take in data dynamically, making the application more flexible and scalable.</Description>
        <Tools>&#x2022; React &#x2022; JavaScript</Tools>
      </Container>

      <Container>
        <Imagecontianer>
          <img src='public/project-images/YouTube-homepage250.png' />
        </Imagecontianer>
        <Title>YouTube Clone</Title>
        <Description>a clone of the YouTube home page. The webpage utilizes nested layout technique and different display properties in CSS. It also demonstrates a strong understanding of responsive design, as the site has been built to be responsive and adapt to different screen sizes.</Description>
        <Tools>&#x2022; JavaScript &#x2022; HTML &#x2022; CSS</Tools>
      </Container>

      <Container>
        <Imagecontianer>
          <img src='public/project-images/weather-app250.png' />
        </Imagecontianer>
        <Title>Weather App</Title>
        <Description>a weather app, which is a single page application. The app allows users to search for the current weather of a specific city, sends a request to the OpenWeather API, which retrieves data on the current temperature, minimum and maximum temperature for the given city for that specific day.</Description>
        <Tools>&#x2022; JavaScript &#x2022; HTML &#x2022; CSS</Tools>
      </Container>

    </Section>  
  )
}

export default Projects