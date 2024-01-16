import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [opened, setOpened] = useState(false);
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="header">
      <img src={Logo} className="logo" alt="logo" />
      {opened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              activeClass="active"
              onClick={() => setOpened(false)}
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              onClick={() => setOpened(false)}
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reason"
              onClick={() => setOpened(false)}
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              onClick={() => setOpened(false)}
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              onClick={() => setOpened(false)}
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
