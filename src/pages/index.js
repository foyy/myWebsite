import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

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
    </div>
  </div>

)

export default IndexPage
