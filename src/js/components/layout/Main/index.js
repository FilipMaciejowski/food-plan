import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';


const Main = () => {
  return(
      <div className="main__section-wrapper">
        <Header />  
        <MainSection /> 
        <Footer /> 
      </div>
  );
};


export default Main;

