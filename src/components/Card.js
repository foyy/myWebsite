import React from 'react'
import './Cards.css'


const Card = props => (
  <a href={props.url} className='Card'>

    <img src={props.image} />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </a>
)

export default Card;
