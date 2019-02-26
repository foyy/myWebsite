import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
  margin: 100px 0 0;
  background: white;
  background-size: cover;
  display: grid;
  grid-template-row: 300px;
  grid-gap: 20px;
  position: relative;

  @media(max-width:720px) {
    margin: 40px 0 0;
    grid-template-row: 150px;

  }
`

const SectionLogo = styled.img`
  width: 140px;
  margin: auto;
  align-self: center;
`

const SectionTitleGroup = styled.div`
    max-width: 800px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%; 
    text-align: center;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }

`

const SectionTitle = styled.h3`
  color: black;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 640px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  font-size: 35px;
  color: black;

  @media(max-width: 720px) {
    font-size: 18px;
    margin-top:20px;
    margin-bottom: 20px;

  }
`

const Section = props => (
  <SectionGroup image={props.image}>
    {/* <SectionLogo src={props.logo} /> */}
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
