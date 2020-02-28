import { connect } from "react-redux";

import ScheduleOverview from "./index";

import { getSchedules } from "../../../../../../../redux/actions/schedules";

const mapState = ({ schedules }) => {
  return { schedules };
};

const mapDispatch = dispach => ({
  getSchedules: () => dispach(getSchedules())
});

export default connect(mapState, mapDispatch)(ScheduleOverview);
