import axios from "axios";

const USER_FETCHED = "USER_FETCHED";

const userFetched = userName => ({
  type: USER_FETCHED,
  payload: userName
});

const getUser = () => dispatch => {
  axios.get("http://localhost:3000/user").then(res => {
    dispatch(userFetched(res.data.name));
  });
};

const updateUser = userName => dispatch => {
  axios
    .patch("http://localhost:3000/user", { name: userName })
    .then(res => dispatch(userFetched(res.data.name)));
};

export { USER_FETCHED, getUser, updateUser };
