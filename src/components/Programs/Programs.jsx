import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

export default function Programs() {
  return (
    <div className="programs" id="programs">
      <div className="programs-text">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </div>
      <div className="program-category">
        {programsData.map((program) => (
          <div className="category" key='index'>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt={"Right Arrow"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
