import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchedules } from "../../../../../redux/actions/schedules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faEdit,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { scheduleDelete, scheduleEdit } from "../../../../../redux/actions/schedules";

const Schedules = () => {
  const dispatch = useDispatch();
  const schedules = useSelector(state => state.schedules);
  const [schedulesState, setSchedulesState] = useState(schedules);

  useEffect(() => {
    dispatch(getSchedules());
  }, []);

  useEffect(() => {
    setSchedulesState(schedules)
  }, [schedules]);

  const editSchedule = schedule => {
    const editName = prompt("Plese, edit your name");
    const editDescription = prompt("Please, edit description");
    let newData = Object.assign(schedule);
    newData.name = editName;
    newData.description = editDescription;
    dispatch(scheduleEdit(newData));
  };

  const deleteSchedule = id => {
    dispatch(scheduleDelete(id))
  };

  return (
    <div className="recipes__content-container">
      <div className="recipes__content__view">
        <div className="recipes__content__view-header">
          <h1>list of schedules</h1>
          <Link to="/foodplan/schedules/add" className="icon-plus">
            <FontAwesomeIcon
              className="recipes-icon-plus"
              icon={faPlusSquare}
            />
          </Link>
        </div>
        <table className="recipes__content__table">
          <tr className="recipes__content__table-header">
            <th>id</th>
            <th>name</th>
            <th>description</th>
            <th>week</th>

            <th className="table__header__cell-actions">actions</th>
          </tr>
          {schedulesState.map(schedule => (
            <tr className="recipes__content__table-cell">
              <td>{schedule.id}</td>
              <td>{schedule.name}</td>
              <td>{schedule.description}</td>
              <td>{schedule.weekNumber}</td>

              <td>
                <FontAwesomeIcon className="icon-edit" onClick={() => editSchedule(schedule)} icon={faEdit} />
                <FontAwesomeIcon className="icon-delete" onClick={() => deleteSchedule(schedule.id)} icon={faTrashAlt}/>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Schedules;
