import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchedules } from "../../../../../redux/actions/schedules";

const Schedules = () => {
  const dispatch = useDispatch();
  /* const [schedules, setSchedulse] = useState(null); */
  const schedules = useSelector(state => state.schedules.schedules);

  useEffect(() => {
    dispatch(getSchedules);
  }, []);

  return (
    <>
      {schedules ? (
        <div>
          {schedules.map(schedule => (
            <div>
              <div>{schedule.id}</div>
              <div>{schedule.name}</div>
              <div>{schedule.description}</div>
              <div>{schedule.weekNumber}</div>
              {console.log(schedule.weekNumber)}
            </div>
          ))}
        </div>
      ) : (
        <div>Michal nie dziala </div>
      )}
    </>
  );
};

export default Schedules;
