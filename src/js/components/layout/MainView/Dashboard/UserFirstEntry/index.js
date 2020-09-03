import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateUser } from "../../../../../../redux/actions/user";

const UserFirstEntry = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (name !== "") {
      dispatch(updateUser(name));
    }
  };
  return (
    <div className="dashboard__user__first__entry-container">
      <div className="dashboard__user__first-entry">
        <h1>Hello!</h1>
        <p>It seems you are here for the first time!</p>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            name="user"
            placeholder="your name"
          />
          <button type="submit">Done!</button>
        </form>
        <p>
          Type your name and we will organize application for you!
          :&#41;
        </p>
      </div>
    </div>
  );
};

export default UserFirstEntry;
