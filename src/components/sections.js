import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
  margin: 100px 0 0;
  background: url(${props => props.image});
  background-size: cover;
  display: grid;
  height: 720px;
  grid-template-row: 300px;
  grid-gap: 20px;
  position: relative;
`

const SectionLogo = styled.img`
  width: 140px;
  margin: 30px auto;
  align-self: start;
`

const SectionTitleGroup = styled.div`
    max-width: 800px;
    margin: 0 40px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%; 

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }

`

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 640px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  font-size: 35px;
  margin: auto;
  color: white;
`

const Section = props => (
  <SectionGroup image={props.image}>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
