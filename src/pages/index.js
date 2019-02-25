import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/sections'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

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
        <h1>Hunter Leeves</h1>
        <h4>Full Stack Engineer</h4>
        <Link to="/video" className="workButton">
          View My Work
        </Link>
        <h5 />
        <div className="Logos">
          <img src={require('../images/jsicon.svg')} />
          <img
            src={require('../images/iconfinder_react_1296845 (1).svg')}
            width="80"
          />
          <img
            src={require('/Users/hunterleeves/myWebsite/my-app/src/images/download (1).png')}
            width="80"
          />
          <img
            src={require('../images/iconfinder_nodejs-light_1012820.svg')}
            width="80"
          />
        </div>
      </div>
    </div>
    {/* BEGIN ABOUT ME */}
    <div className="AboutMe">
      <h1>About Me</h1>
      <div className="AboutMeGroup">
        <img src={require('../images/me.jpg')} />
        <div className="AboutMeText">
          <h5>
            I'm a full-stack engineer with a passion for building out beatiful
            front ends and reliable RESTful APIs. I strive to write clean,
            readable, modular code.
          </h5>
          <p>
            When I'm not coding, I'm writing and reading fiction, playing video
            games, and hanging with my partner of 7 years, Kelly, and my two
            goofy dogs, Albus and Luna.
          </p>
        </div>
      </div>
      <div className="AboutMePictures">
        <img src={require('../images/meandkelly.jpg')} />
        <img src={require('../images/albus and luna.png')} />
        <img
          src={require('../images/28235416_1348738665230506_2031126635127883747_o.jpg')}
          width="30"
        />
        <img src={require('../images/tumblr_p5r8dr2yKi1r5ztono2_1280.jpg')} />
      </div>
    </div>

    <div id="ScrollToExp" className="beforeJump" />
    <Section
      image={require('../images/wallpaper.jpg')}
      logo={require('../images/logo-react.png')}
      title="Experience"
      text="I've like, used React and stuff"
    />

    <div id="ScrollToCards" className="beforeJump" />
    <div className="Cards">
      <h2>Applications</h2>
      <div className="CardGroup">
        <Card
          title={staticdata.applications[0].title}
          text={staticdata.applications[0].text}
          image={staticdata.applications[0].image}
          url={staticdata.applications[0].url}
          co="Card Firecon"
        />
        <Card
          title={staticdata.applications[1].title}
          text={staticdata.applications[1].text}
          image={staticdata.applications[1].image}
          url={staticdata.applications[1].url}
          co="Card"
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
          co="Card Atweetio"
        />
      </div>

      <div id="ScrollToSkills" className="beforeJump" />
      <CellSectionCaption>What I Know</CellSectionCaption>
      <CellSectionGroup>
        {staticdata.skills.map(skill => (
          <Cell title={skill.title} image={skill.image} />
        ))}
      </CellSectionGroup>
      <CellSectionCaption>What I'd Love To Learn</CellSectionCaption>
      <CellSectionGroup>
        {staticdata.desiredSkills.map(skill => (
          <Cell title={skill.title} image={skill.image} />
        ))}
      </CellSectionGroup>
    </div>
  </div>
)

export default IndexPage
