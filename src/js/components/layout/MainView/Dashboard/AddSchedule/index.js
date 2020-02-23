<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addSchedule} from "../../../../../../redux/actions/schedules";
import { getRecipes } from "../../../../../../redux/actions/recipes";


const AddSchedule = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);
  useEffect(() => {
    dispatch(getRecipes());
  }, []);

   const handleSubmit = (e) => {
     e.preventDefault();
     if(name!=="" && description !== "" && number !== "") {
       const newSchedule = {
         name: name,
         description: description,
         weekNumber: number
       }
       dispatch(addSchedule(newSchedule));
     }
   }

  return (
    <div className="add_-schedule__modal">
      <div className="modal_-header">
        <h1>Nowy przepis</h1>
        <button className="modal__button" type="submit">Zapisz i zamknij</button>
      </div>
      <div className="new__schedule__input">
         <form onSubmit={(e) => handleSubmit(e)}>
            <label>
               Nazwa planu
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <label>
               Opis planu
                <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            </label>
            <label>
               Numer tygodnia
                <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            </label>
         </form>
         <select>
           {recipes.map((el, index) => {
             return <option key={index}>{el.name}</option>
           })}
         </select>
      </div>
    </div>
  )
}



export default AddSchedule;
=======
import React from 'react';

const AddSchedule = () => {

  const onSubmit = (e) =>{
    e.preventdefault();
  }


  return (
    <div className="add__schedule__container">
      <div className="add__schedule__header">
        <h1>new plan</h1>
        <button classname="add__schedule__button">Save and close</button>
      </div>

      <div className="add__schedule__input">
        <form onSubmit={e => onSubmit}>
          <label>
            Schedule's name
            <input
              className="schedule__name-input"
              type="text"
              placeholder="add schedule's name"
            />
          </label>
          <label>
            Schedule's description
            <textarea
              rows="6"
              className="schedule__description-input"
              type="text"
              placeholder="add schedule's description"
            />
          </label>
          <label className="week__label">
            Number of the week
            <div className="schedule__week-input-container">
              <input
                className="schedule__week-input"
                type="text"
                placeholder=""
              />
            </div>
          </label>
        </form>
      </div>
      <table className="add__schedule-table">
        <tr className="add__schedule-table-row">
          <td className="cell-empty"></td>
          <td>sniadanie</td>
          <td>drugie sniadanie</td>
          <td>zupa</td>
          <td>drugie danie</td>
          <td>kolacja</td>
        </tr>
        <tr className="add__schedule-table-row">
          <td>poniedzialek</td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
        </tr>
        <tr className="add__schedule-table-row">
          <td>wtorek</td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
        </tr>
        <tr className="add__schedule-table-row">
          <td>sroda</td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
        </tr>
        <tr className="add__schedule-table-row">
          <td>czwartek</td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
        </tr>
        <tr className="add__schedule-table-row">
          <td>piatek</td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
        </tr>
        <tr className="add__schedule-table-row">
          <td>sobota</td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
        </tr>
        <tr className="add__schedule-table-row">
          <td>niedziela</td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
          <td>
            <select>
              <option value=""></option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AddSchedule;
>>>>>>> f5afbbd85553069de9dfa613dcaa8404bd1b6bdc
