import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
  background: white;
  background-size: cover;
  display: grid;
  grid-template-columns: [title] .70fr [txt] 1fr;
  grid-gap: 20px;
  position: relative;
  align-items: center;

  @media(max-width:720px) {
    margin: 40px 0 0;
    grid-template-row: 150px;
  }
`

// const SectionLogo = styled.img`
//   width: 140px;
//   margin: auto;
//   align-self: center;
// `

const SectionTitle = styled.h3`
  color: black;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
  grid-column: title;
  text-align: center;
  align-self: center;
  @media (max-width: 640px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  font-size: 18px;
  color: black;
  grid-column: txt;
  align-self: center;


  @media(max-width: 720px) {
    font-size: 18px;
    margin-top:20px;
    margin-bottom: 20px;
    margin-left: 200px;
    margin-right: 200px;
  }

  

`

const Section = props => (
  <SectionGroup image={props.image}>
    {/* <SectionLogo src={props.logo} /> */}
    <SectionTitle>{props.title}</SectionTitle>
    <SectionText>
      <p>Im a Full Stack Software Engineer with experience using Javascript, React, Vue, Node.js, Express, MongoDB, Postgres, HTML, and CSS. </p>
      <p>I love making the web a better place for us to interact with our world. I build full-stack applications with a focus on modern design and dependency because the way we connect to our digital lives should be beautiful, intuitive, and reliable.
I used to teach students about how wildly-amazing the time we live in is due to new technologies; now I help make it that way.</p>
    </SectionText>
  </SectionGroup>
)

export default Section
