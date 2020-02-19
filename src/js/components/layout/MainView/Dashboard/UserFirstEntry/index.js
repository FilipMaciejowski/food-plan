import React from "react";


const UserFirstEntry = () => {
  return (
    <div className="dashboard__user__first-entry">
      <h1>Witaj,</h1>
      <p>wygląda na to że jesteś tutaj pierwszy raz!</p>
      <input type="text" placeholder="tutaj wpisz jak masz na imię" />
      <button>Gotowe!</button>
      <p>
        Podaj nam swoje imię, a my zorganizujemy dla Ciebie naszą aplikację
        :&#41;
      </p>
    </div>
  );
};


export default UserFirstEntry;
