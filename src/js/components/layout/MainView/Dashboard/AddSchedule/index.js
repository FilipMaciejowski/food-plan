
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addSchedule} from "../../../../../../redux/actions/schedules";
import { getRecipes } from "../../../../../../redux/actions/recipes";
import { useHistory } from 'react-router-dom'



const AddSchedule = () => {

const history = useHistory();
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [number, setNumber] = useState("");

const [mondayBreakfast, setMondayBreakfast] = useState("");
const [mondaySecondBreakfast, setMondaySecondBreakfast] = useState("");
const [mondaySoup, setMondaySoup] = useState("");
const [mondayLunch, setMondayLunch] = useState("");
const [mondaySupper, setMondaySupper] = useState("");

const [tuesdayBreakfast, setTuesdayBreakfast] = useState("");
const [tuesdaySecondBreakfast, setTuesdaySecondBreakfast] = useState("");
const [tuesdaySoup, setTuesdaySoup] = useState("");
const [tuesdayLunch, setTuesdayLunch] = useState("");
const [tuesdaySupper, setTuesdaySupper] = useState("");

const [wednesdayBreakfast, setWednesdayBreakfast] = useState("");
const [wednesdaySecondBreakfast, setWednesdaySecondBreakfast] = useState("");
const [wednesdaySoup, setWednesdaySoup] = useState("");
const [wednesdayLunch, setWednesdayLunch] = useState("");
const [wednesdaySupper, setWednesdaySupper] = useState("");

const [thrusdayBreakfast, setThrusdayBreakfast] = useState("");
const [thrusdaySecondBreakfast, setThrusdaySecondBreakfast] = useState("");
const [thrusdaySoup, setThrusdaySoup] = useState("");
const [thrusdayLunch, setThrusdayLunch] = useState("");
const [thrusdaySupper, setThrusdaySupper] = useState("");

const [fridayBreakfast, setFridayBreakfast] = useState("");
const [fridaySecondBreakfast, setFridaySecondBreakfast] = useState("");
const [fridaySoup, setFridaySoup] = useState("");
const [fridayLunch, setFridayLunch] = useState("");
const [fridaySupper, setFridaySupper] = useState("");

const [saturdayBreakfast, setSaturdayBreakfast] = useState("");
const [saturdaySecondBreakfast, setSaturdaySecondBreakfast] = useState("");
const [saturdaySoup, setSaturdaySoup] = useState("");
const [saturdayLunch, setSaturdayLunch] = useState("");
const [saturdaySupper, setSaturdaySupper] = useState("");

const [sundayBreakfast, setSundayBreakfast] = useState("");
const [sundaySecondBreakfast, setSundaySecondBreakfast] = useState("");
const [sundaySoup, setSundaySoup] = useState("");
const [sundayLunch, setSundayLunch] = useState("");
const [sundaySupper, setSundaySupper] = useState("");

const dispatch = useDispatch();
const recipes = useSelector(state => state.recipes);

useEffect(() => {
  dispatch(getRecipes());
}, []);

useEffect(() => {
  if (recipes.length) {
    setMondayBreakfast(recipes[0].name);
    setMondaySecondBreakfast(recipes[0].name);
    setMondaySoup(recipes[0].name);
    setMondayLunch(recipes[0].name);
    setMondaySupper(recipes[0].name);

    setTuesdayBreakfast(recipes[0].name);
    setTuesdaySecondBreakfast(recipes[0].name);
    setTuesdaySoup(recipes[0].name);
    setTuesdayLunch(recipes[0].name);
    setTuesdaySupper(recipes[0].name);

    setWednesdayBreakfast(recipes[0].name);
    setWednesdaySecondBreakfast(recipes[0].name);
    setWednesdaySoup(recipes[0].name);
    setWednesdayLunch(recipes[0].name);
    setWednesdaySupper(recipes[0].name);

    setThrusdayBreakfast(recipes[0].name);
    setThrusdaySecondBreakfast(recipes[0].name);
    setThrusdaySoup(recipes[0].name);
    setThrusdayLunch(recipes[0].name);
    setThrusdaySupper(recipes[0].name);

    setFridayBreakfast(recipes[0].name);
    setFridaySecondBreakfast(recipes[0].name);
    setFridaySoup(recipes[0].name);
    setFridayLunch(recipes[0].name);
    setFridaySupper(recipes[0].name);

    setSaturdayBreakfast(recipes[0].name);
    setSaturdaySecondBreakfast(recipes[0].name);
    setSaturdaySoup(recipes[0].name);
    setSaturdayLunch(recipes[0].name);
    setSaturdaySupper(recipes[0].name);

    setSundayBreakfast(recipes[0].name);
    setSundaySecondBreakfast(recipes[0].name);
    setSundaySoup(recipes[0].name);
    setSundayLunch(recipes[0].name);
    setSundaySupper(recipes[0].name);
  }
}, [recipes]);

 const handleSubmit = (e) => {
   
   e.preventDefault();
   if(name!=="" && description !== "" && number !== "") {
     const newSchedule = {
       name: name,
       description: description,
       weekNumber: number,
       monday: [mondayBreakfast, mondaySecondBreakfast, mondaySoup, mondayLunch, mondaySupper],
       tuesday: [tuesdayBreakfast, tuesdaySecondBreakfast, tuesdaySoup, tuesdayLunch, tuesdaySupper],
       wednesday: [wednesdayBreakfast, wednesdaySecondBreakfast, wednesdaySoup, wednesdayLunch, wednesdaySupper],
       thrusday: [thrusdayBreakfast, thrusdaySecondBreakfast, thrusdaySoup, thrusdayLunch, thrusdaySupper],
       friday: [fridayBreakfast, fridaySecondBreakfast, fridaySoup, fridayLunch, fridaySupper],
       saturday: [saturdayBreakfast, saturdaySecondBreakfast, saturdaySoup, saturdayLunch, saturdaySupper],
       sunday: [sundayBreakfast, sundaySecondBreakfast, sundaySoup, sundayLunch, sundaySupper]
     }
     dispatch(addSchedule(newSchedule));
     history.push("/foodplan/dashboard");
   }
 }

  
  return (
    <div className="add__schedule__container">
      <div className="add__schedule__header">
        <h1>new plan</h1>
        <button className="add__schedule__button" onClick={(e) => handleSubmit(e)}>Save and close</button>
      </div>

      <div className="add__schedule__input">
        <form>
          <label>
            Schedules name
            <input
              className="schedule__name-input"
              type="text"
              placeholder="add schedule's name"
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            Schedules description
            <textarea
              rows="6"
              className="schedule__description-input"
              type="text"
              placeholder="add schedule's description"
              onChange={e => setDescription(e.target.value)}
            />
          </label>
          <label className="week__label">
            Number of the week
            <div className="schedule__week-input-container">
              <input
                className="schedule__week-input"
                type="text"
                placeholder=""
                onChange={e => setNumber(e.target.value)}
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
              <select  value={mondayBreakfast} onChange={e => setMondayBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={mondaySecondBreakfast} onChange={e => setMondaySecondBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={mondaySoup} onChange={e => setMondaySoup(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
             </select>
          </td>
          <td>
              <select value={mondayLunch} onChange={e => setMondayLunch(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
          <td>
              <select value={mondaySupper} onChange={e => setMondaySupper(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
        </tr>
        <tr className="add__schedule-table-row">
          <td>wtorek</td>
          <td>
              <select value={tuesdayBreakfast} onChange={e => setTuesdayBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={tuesdaySecondBreakfast} onChange={e => setTuesdaySecondBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={tuesdaySoup} onChange={e => setTuesdaySoup(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
             </select>
          </td>
          <td>
              <select value={tuesdayLunch} onChange={e => setTuesdayLunch(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
          <td>
              <select value={tuesdaySupper} onChange={e => setTuesdaySupper(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
        </tr>
        <tr className="add__schedule-table-row">
          <td>sroda</td>
          <td>
              <select value={wednesdayBreakfast} onChange={e => setWednesdayBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={wednesdaySecondBreakfast} onChange={e => setWednesdaySecondBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={wednesdaySoup} onChange={e => setWednesdaySoup(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
             </select>
          </td>
          <td>
              <select value={wednesdayLunch} onChange={e => setWednesdayLunch(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
          <td>
              <select value={wednesdaySupper} onChange={e => setWednesdaySupper(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
        </tr>
        <tr className="add__schedule-table-row">
          <td>czwartek</td>
          <td>
              <select value={thrusdayBreakfast} onChange={e => setThrusdayBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={thrusdaySecondBreakfast} onChange={e => setMondaySecondBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={thrusdaySoup} onChange={e => setThrusdaySoup(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
             </select>
          </td>
          <td>
              <select value={thrusdayLunch} onChange={e => setThrusdayLunch(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
          <td>
              <select value={thrusdaySupper} onChange={e => setThrusdaySupper(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
        </tr>
        <tr className="add__schedule-table-row">
          <td>piatek</td>
          <td>
              <select value={fridayBreakfast} onChange={e => setFridayBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={fridaySecondBreakfast} onChange={e => setFridaySecondBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={fridaySoup} onChange={e => setFridaySoup(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
             </select>
          </td>
          <td>
              <select value={fridayLunch} onChange={e => setFridayLunch(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
          <td>
              <select value={fridaySupper} onChange={e => setFridaySupper(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
        </tr>
        <tr className="add__schedule-table-row">
          <td>sobota</td>
          <td>
              <select value={saturdayBreakfast} onChange={e => setSaturdayBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={saturdaySecondBreakfast} onChange={e => setSaturdaySecondBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={saturdaySoup} onChange={e => setSaturdaySoup(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
             </select>
          </td>
          <td>
              <select value={saturdayLunch} onChange={e => setSaturdayLunch(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
          <td>
              <select value={saturdaySupper} onChange={e => setSaturdaySupper(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
        </tr>
        <tr className="add__schedule-table-row">
          <td>niedziela</td>
          <td>
              <select value={sundayBreakfast} onChange={e => setSundayBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={sundaySecondBreakfast} onChange={e => setSundaySecondBreakfast(e.target.value)}>
               {recipes.map((el, index) => {
                 return <option key={index}>{el.name}</option>
               })}
             </select>
          </td>
          <td>
              <select value={sundaySoup} onChange={e => setSundaySoup(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
             </select>
          </td>
          <td>
              <select value={sundayLunch} onChange={e => setSundayLunch(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
          <td>
              <select value={sundaySupper} onChange={e => setSundaySupper(e.target.value)}>
                 {recipes.map((el, index) => {
                   return <option key={index}>{el.name}</option>
                 })}
              </select>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AddSchedule;
