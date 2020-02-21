import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () =>{
  return (
    <div className="callToAction__wrapper">
      <div className="callToAction__container">
        <div className="callToAction__text">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <Link className="button" to="/foodplan">
          Lorem ipsum
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;