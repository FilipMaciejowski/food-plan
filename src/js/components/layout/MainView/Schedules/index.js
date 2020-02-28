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

const Schedules = () => {
  const dispatch = useDispatch();
  /* const [schedules, setSchedulse] = useState(null); */
  const schedules = useSelector(state => state.schedules);

  useEffect(() => {
    dispatch(getSchedules());
  }, []);

  return (
    <div className="recipes__content-container">
      <div className="recipes__content__view">
        <div className="recipes__content__view-header">
          <h1>list of recipes</h1>
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
          {schedules.map(schedule => (
            <tr className="recipes__content__table-cell">
              <td>{schedule.id}</td>
              <td>{schedule.name}</td>
              <td>{schedule.description}</td>
              <td>{schedule.weekNumber}</td>

              <td>
                <FontAwesomeIcon className="icon-edit" icon={faEdit} />
                <FontAwesomeIcon className="icon-delete" icon={faTrashAlt} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Schedules;
