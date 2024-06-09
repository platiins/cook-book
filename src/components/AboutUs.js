import { ThemeContext } from "../context/theme";
import { useContext } from "react";

import { GrInstagram } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";

import "../styles/styles.scss";

function AboutUs() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="about-page"
      style={{
        backgroundColor: theme === "light" ? "#b4b093" : "#47482f",
      }}
    >
      <section className="about-page-container">
        <p className="about-page__welcome">WELCOME TO</p>
        <h1 className="about-page__title">COOK BOOK</h1>
        <article className="about-page__article">
          <p className="about-page__article--row-1">
            YOUR GO-TO SOURCE FOR DELICIOUS AND DIVERSE RECIPES FROM AROUND THE
            GLOBE.
          </p>
          <p className="about-page__article--row-2">
            <span
              className="special-word"
              style={{
                color: theme === "light" ? "#47482f" : "#b4b093",
              }}
            >
              THIS{" "}
            </span>
            IS WHERE YOU'LL FIND INSPIRATION FOR YOUR NEXT MEAL.
          </p>
          <p className="about-page__article--row-3">
            <span
              className="special-word"
              style={{
                color: theme === "light" ? "#47482f" : "#b4b093",
              }}
            >
              IS{" "}
            </span>
            IT TIME TO DISCOVER NEW FLAVORS?
          </p>
          <p
            className="about-page__article--row-4"
            style={{
              color: theme === "light" ? "#212529" : "#47482f",
            }}
          >
            <span
              className="special-word"
              style={{
                color: theme === "light" ? "#212529" : "#b4b093",
              }}
            >
              YOUR{" "}
            </span>
            KITCHEN ADVENTURE STARTS HERE.
          </p>
          <p className="about-page__article--row-5">
            <span
              className="special-word"
              style={{
                color: theme === "light" ? "#47482f" : "#b4b093",
              }}
            >
              SIGN{" "}
            </span>
            UP FOR OUR NEWSLETTER TO STAY UPDATED.
          </p>
          <div className="sm-btn">
            <button className="sm-btn__icon">
              <GrInstagram />
            </button>
            <button className="sm-btn__icon">
              <FaPinterestP />
            </button>
            <button className="sm-btn__icon">
              <BsYoutube />
            </button>
          </div>
          <p className="about-page__article--row-6">
            <span
              className="special-word"
              style={{
                color: theme === "light" ? "#47482f" : "#b4b093",
              }}
            >
              TO{" "}
            </span>
            BRING JOY TO YOUR TABLE,
            <span
              className="special-word"
              style={{
                color: theme === "light" ? "#47482f" : "#b4b093",
              }}
            >
              {" "}
              COOK{" "}
            </span>
            WITH US.
          </p>
          <p className="about-page__article--row-7">
            <span
              className="special-word"
              style={{
                color: theme === "light" ? "#47482f" : "#b4b093",
              }}
            >
              DINNER{" "}
            </span>
            IDEAS ARE JUST A CLICK AWAY, PERFECT FOR ANY DAY, ESPECIALLY
            <span
              className="special-word"
              style={{
                color: theme === "light" ? "#47482f" : "#b4b093",
              }}
            >
              {" "}
              TODAY{" "}
            </span>
            !
          </p>
        </article>
      </section>
    </div>
  );
}

export default AboutUs;
