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
