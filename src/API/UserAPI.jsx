import axiosClient from "./axiosClient";

const UserAPI = {
  getAllData: () => {
    const url = "/users";
    return axiosClient.get(url);
  },
  // fecth detail usersignin
  getDetailData: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
  // fetch signup
  postSignUp: (query) => {
    const url = `/users/signup/${query}`;
    return axiosClient.post(url);
  },
  //fecth signin
  postSignIn: (query) => {
    const url = `/users/signin/${query}`;
    return axiosClient.post(url);
  },
};

export default UserAPI;
