import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faList, faClock } from "@fortawesome/free-solid-svg-icons";


const AboutAplication = () =>{
  return (
    <div className="about__section__wrapper">
      <div className="about__section__items">
        <div className="col-1">
          <FontAwesomeIcon className="icon" icon={faCheck} />
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            consequatur ad, explicabo consectetur non deleniti commodi ipsa
            suscipit quidem repellendus.
          </p>
        </div>
        <div className="col-2">
          <FontAwesomeIcon className="icon" icon={faClock} />
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            consequatur ad, explicabo consectetur non deleniti commodi ipsa
            suscipit quidem repellendus.
          </p>
        </div>
        <div className="col-3">
          <FontAwesomeIcon className="icon" icon={faList} />
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            consequatur ad, explicabo consectetur non deleniti commodi ipsa
            suscipit quidem repellendus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAplication;
