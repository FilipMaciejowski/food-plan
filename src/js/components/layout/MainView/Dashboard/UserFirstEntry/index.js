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
    <div className="dashboard__user__first-entry">
      <h1>Witaj,</h1>
      <p>wygląda na to że jesteś tutaj pierwszy raz!</p>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="user"
          placeholder="tutaj wpisz jak masz na imię"
        />
        <button type="submit">Gotowe!</button>
      </form>
      <p>
        Podaj nam swoje imię, a my zorganizujemy dla Ciebie naszą aplikację
        :&#41;
      </p>
    </div>
  );
};

export default UserFirstEntry;
