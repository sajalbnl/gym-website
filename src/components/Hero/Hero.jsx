import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import NumberCounter from "number-counter";
import Heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: "3" };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="Hero" id="home">
      <div className="blur blur-hero"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween", duration: "2" }}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="2" preFix="+" />
            </span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={800} delay="2" preFix="+" /></span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={20} delay="2" preFix="+" /></span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={{ ...transition, type: "tween", duration: "2" }}
        >
          <img src={Heart} alt="" />
          <span>Heart Rates</span>
          <span>116 bpm</span>
        </motion.div>
        <motion.img
          initial={{ right: "4rem" }}
          whileInView={{ right: "8rem" }}
          transition={transition}
          src={hero_image}
          alt="hero_image"
          className="hero_image"
        />
        <motion.img
          src={hero_image_back}
          alt="hero_image_back"
          className="hero_image_back"
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={{ ...transition, type: "tween", duration: "2" }}
        >
          <img src={calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
