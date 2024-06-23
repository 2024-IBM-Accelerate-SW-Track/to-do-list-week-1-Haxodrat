import React, { Component } from 'react';

import "./About.css";
import LinkedIn_Photo from "../assets/LinkedIn_Photo.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={LinkedIn_Photo}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Christopher Kim</div>
            <div className="brief_description">
              Hi! My name is Christopher Kim, Chris,
              a rising junior majoring in Computer Science
              at UC Berkeley! My interests are in building
              software applications and developing LLMs
              and generative AI models! Outside of work, 
              my hobbies are playing basketball, video games, 
              and learning about new AI technologies!
            </div>
          </div>
        </div>
      </div>

    )
  }
}