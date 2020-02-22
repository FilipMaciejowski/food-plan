import React from 'react';
import AboutAplication from './AboutApplication';
import AboutAuthor from './AboutAuthor';
import CallToAction from './CallToAction';
import NewsLetter from './NewsLetter';



const MainSection = () =>{
  return (
    <>
      <CallToAction />
      <AboutAplication />
      <NewsLetter />
      <AboutAuthor />
    </>
  );
};

export default MainSection;
