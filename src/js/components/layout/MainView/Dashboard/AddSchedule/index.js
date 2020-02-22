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
          <td></td>
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