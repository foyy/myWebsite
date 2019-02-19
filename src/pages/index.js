import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/sections';
import staticdata from '../../staticdata.json';
import Cell from '../components/Cell';
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';




const CellSectionCaption = styled.p`
  text-align: center;
  font-size: 45px;

`

const CellSectionGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr
  grid-column-gap: 20px;


  @media (max-width:800px) {
    grid-template-columns: repeat(1,1fr)
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/video">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
        </div>
      </div>
    </div>
    <div id='ScrollToCards' className='beforeJump'></div>
    <div className='Cards'>
      <h2>Projects</h2>
      <div className='CardGroup'>
        <Card
          title={staticdata.applications[0].title}
          text={staticdata.applications[0].text}
          image={staticdata.applications[0].image}
          url={staticdata.applications[0].url}
          co="Card"
        />
        <Card
          title={staticdata.applications[1].title}
          text={staticdata.applications[1].text}
          image={staticdata.applications[1].image}
          url={staticdata.applications[1].url}
          co='Card'
        />
        <Card
          title={staticdata.applications[2].title}
          text={staticdata.applications[2].text}
          image={staticdata.applications[2].image}
          url={staticdata.applications[2].url}
          co="Card Avoteio"

        />
        <Card
          title={staticdata.applications[3].title}
          text={staticdata.applications[2].text}
          image={staticdata.applications[3].image}
          url={staticdata.applications[3].url}
          co='Card Atweetio'
        />
      </div>
      <div id='ScrollToExp' className='beforeJump'></div>
      <Section
        image={require('../images/wallpaper.jpg')}
        logo={require('../images/logo-react.png')}
        title='Experience'
        text="I've like, used React and stuff"
      />
      <div id="ScrollToSkills" className="beforeJump"></div>
      <CellSectionCaption>What I Know</CellSectionCaption>
      <CellSectionGroup>
        {staticdata.skills.map(skill => (
          <Cell title={skill.title} image={skill.image} />
        ))}
      </CellSectionGroup>
      <CellSectionCaption>What I'd Love To Know</CellSectionCaption>
      <CellSectionGroup>
        {staticdata.desiredSkills.map(skill => (
          <Cell title={skill.title} image={skill.image} />
        ))}
      </CellSectionGroup>

    </div>
  </div>

)

export default IndexPage
