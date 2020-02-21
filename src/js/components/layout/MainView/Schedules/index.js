import React from "react";

const Schedules = () => {
  return (
    <div className="add__recipe__modal">
      <div className="modal__header">
        <h1>new recipe</h1>
        <button classname="modal__button">save and close</button>
      </div>
      <div className="modal__input">
        <form >
          <label>
            name
            <input type="text" />
          </label>
          <label>
            description
            <input type="text"/>
          </label>
        </form>
      </div>
      <div className="modal__lists-container">
      </div>
    </div>
  );
};

export default Schedules;
