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
          title='FireconTX'
          text='Company Site with Invoice Payment'
          image={require('../images/logo-react.png')}
          url='https://www.firecontx.com'
        />

        <Card
          title='MyMedia'
          text='User Curated Art Recommendations'
          image={require('../images/logo-react.png')}
          url='https://github.com/TeamBoosted'
        />
        <Card
          title='Avoteio'
          text='Social Listening Through Spotify'
          image={require('../images/logo-react.png')}
          url='http://avoteio.herokuapp.com'
        />
        <Card
          title='Atweetio'
          text='Personality By Tweet'
          image={require('../images/logo-react.png')}
          url='http://atweetio.herokuapp.com'
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
