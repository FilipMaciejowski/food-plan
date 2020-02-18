import React from 'react';


const NewsLetter = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
  };

return (
    <div className="newsletter__container">
      <div className="newsletter__content">
        <span>Lorem ipsum dolor sit amet</span>
        <form onSubmit={e => handleSubmit(e)}>
          <input className="form_text" type="text" name="newsletter" />
          <input className="form_button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
