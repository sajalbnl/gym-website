import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

function Plans() {
  return (
    <div className="plans-container" id="plans">
      <div className="blur blur-hero"></div>
      <div className="blur blur-plan"></div>
      <div className="programs-text" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="feautres">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -{">"} </span>
            </div>
            <button className="btn" >Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
