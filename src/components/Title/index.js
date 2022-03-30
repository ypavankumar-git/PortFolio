import React from 'react';
import "./style.css";
import MeetMe from "../MeetMe/index";

const Title = () => {
    return (
        <div className="titleMainContainer">
          <label className="name">Vishal TK</label>
          <div className="titleContainer">
            <div className="line"></div>
            <label className="title">Designer & Developer</label>
          </div>
          <label className="description">I build, craft and experiment products & games in the 
intersection of design, art and programming through
beautiful and simplistic UX</label>
        <MeetMe />
        </div>
    )
}

export default Title;