import React from "react";

const ScheduleOverview = () => {
  return (
    <>
      <div className="schedule__overview-title">
        Twój plan na nr_tygodnia tydzień:
      </div>
      <div className="schedule__overview-content-container">
        <div className="schedule__overview-content-day">
          <div className="schedule__overview-content-element-title">
            Poniedziałek
          </div>
          <div className="schedule__overview-content-element">sniadanie</div>
          <div className="schedule__overview-content-element">
            drugie sniadanie
          </div>
          <div className="schedule__overview-content-element">zupa</div>
          <div className="schedule__overview-content-element">drugie danie</div>
          <div className="schedule__overview-content-element">kolacja</div>
        </div>
        <div className="schedule__overview-content-day">
          <div className="schedule__overview-content-element-title">Wtorek</div>
          <div className="schedule__overview-content-element">sniadanie</div>
          <div className="schedule__overview-content-element">
            drugie sniadanie
          </div>
          <div className="schedule__overview-content-element">zupa</div>
          <div className="schedule__overview-content-element">drugie danie</div>
          <div className="schedule__overview-content-element">kolacja</div>
        </div>
        <div className="schedule__overview-content-day">
          <div className="schedule__overview-content-element-title">Środa</div>
          <div className="schedule__overview-content-element">sniadanie</div>
          <div className="schedule__overview-content-element">
            drugie sniadanie
          </div>
          <div className="schedule__overview-content-element">zupa</div>
          <div className="schedule__overview-content-element">drugie danie</div>
          <div className="schedule__overview-content-element">kolacja</div>
        </div>
        <div className="schedule__overview-content-day">
          <div className="schedule__overview-content-element-title">
            Czwartek
          </div>
          <div className="schedule__overview-content-element">sniadanie</div>
          <div className="schedule__overview-content-element">
            drugie sniadanie
          </div>
          <div className="schedule__overview-content-element">zupa</div>
          <div className="schedule__overview-content-element">drugie danie</div>
          <div className="schedule__overview-content-element">kolacja</div>
        </div>
        <div className="schedule__overview-content-day">
          <div className="schedule__overview-content-element-title">Piątek</div>
          <div className="schedule__overview-content-element">sniadanie</div>
          <div className="schedule__overview-content-element">
            drugie sniadanie
          </div>
          <div className="schedule__overview-content-element">zupa</div>
          <div className="schedule__overview-content-element">drugie danie</div>
          <div className="schedule__overview-content-element">kolacja</div>
        </div>
        <div className="schedule__overview-content-day">
          <div className="schedule__overview-content-element-title">Sobota</div>
          <div className="schedule__overview-content-element">sniadanie</div>
          <div className="schedule__overview-content-element">
            drugie sniadanie
          </div>
          <div className="schedule__overview-content-element">zupa</div>
          <div className="schedule__overview-content-element">drugie danie</div>
          <div className="schedule__overview-content-element">kolacja</div>
        </div>
        <div className="schedule__overview-content-day">
          <div className="schedule__overview-content-element-title">
            Niedziela
          </div>
          <div className="schedule__overview-content-element">sniadanie</div>
          <div className="schedule__overview-content-element">
            drugie sniadanie
          </div>
          <div className="schedule__overview-content-element">zupa</div>
          <div className="schedule__overview-content-element">drugie danie</div>
          <div className="schedule__overview-content-element">kolacja</div>
        </div>
      </div>
      <div className="schedule__overview-content-nav">
        <div className="schedule__overview-content-nav-element prev">
          <span>&laquo;</span>
          <span>poprzedni</span>
        </div>
        <div className="schedule__overview-content-nav-element next">
          <span>następny</span>
          <span>&raquo;</span>
        </div>
      </div>
    </>
  );
};

export default ScheduleOverview;
