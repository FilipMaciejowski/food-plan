import React from 'react';


const AddRecipe = () => {

  const onSumbit=(e)=>{
    e.preventDefault();
  };

  

  return (
    <div className="add__recipe__modal">
      <div className="modal__header">
        <h1>new recipe</h1>
        <button classname="modal__button">
          save and close
        </button>
      </div>
      <div className="modal__input">
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
    </div>
  );
};

export default AddRecipe; 