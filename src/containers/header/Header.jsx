import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__hearder-content">
        <h1 className="gpt3__gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="gpt3__paragraph">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content-input">
          <input type="email" placeholder="Your Email Address"></input>
          <button>Get Started</button>
        </div>
        <div className="gpt3__header-content-people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-img">
        <img src={ai} alt="Ai" />
      </div>
    </div>
  );
};

export default Header;
