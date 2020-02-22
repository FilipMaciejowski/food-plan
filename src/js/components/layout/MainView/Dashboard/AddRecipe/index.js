import React from 'react';



const AddRecipe = () => {

  const onSumbit=(e)=>{
    e.preventDefault();
  };


  return (
    <div className="add__recipe__container">
      <div className="add__recipe__header">
        <h1>new recipe</h1>
        <button classname="add__recipe__button">
          save and close
        </button>
      </div>

      <div className="add__recipe__input">
        <form onSubmit={()=>onSumbit}>
          <label>
            name
          <input type="text" value="Submit"/>
          </label>
          <label>
            description
          <input type="text" value="Submit"/>
        </label>
        </form>
      </div>

      <div className="add__recipe__content">
        <div className="add__recipe__content-intructions">
          <ul className="instructions-list">
            <li className="instructions-element">Turn on the oven</li>
          </ul>
        </div>
        <div className="add__recipe__content-ingridients">
          <ul className="ingridients-list">
            <li className="ingridients-element">Couliflower 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe; 