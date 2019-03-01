import React from 'react';
import styled, { keyframes } from 'styled-components';


const ContactGroup = styled.div`
  display: grid;
  grid-template-rows: [title] 100px [txt] 100;
  background:black;
  height: 300px;
  margin-top: 40px;

`

const ContactHeader = styled.h1`
  text-size:88px;
  text-align: center;
  grid-rows: title;
  color: white;
  align-self: start;
`

const ContactText = styled.p`
  text-size:18px;
  text-align: center;
  grid-rows: txt;
  color:white;
  align-self:start;
`



const Contact = props => (
  <ContactGroup>
    <ContactHeader> Contact Me Anytime </ContactHeader>
    <ContactText>hunterleeves@gmail.com</ContactText>
  </ContactGroup>
)

export default Contact