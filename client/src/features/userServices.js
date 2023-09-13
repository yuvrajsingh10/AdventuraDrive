import axios from "axios";
import { base_url } from "../utils/base_url";
import { config } from "../utils/axiosConfig";

const registerUser = async (data) => {
  const response = { error: null, data: null };
  try {
    response.data = await axios.post(`${base_url}/user/register`, data, config);
    return { error: response.error, data: response.data.data };
  } catch (error) {
    if (error.response.status === 409) {
      response.error = "User with this email already exists.";
      response.data = null;
    } else {
      response.error = "Server Error";
      response.data = null;
    }
    return response;
  }
};

const loginUser = async (data) => {
  const response = { error: null, data: null };
  try {
    response.data = await axios.post(`${base_url}/user/login`, data, config);
    return { error: response.error, data: response.data.data };
  } catch (error) {
    if (error.response.status === 409) {
      response.error = "User with this email already exists.";
      response.data = null;
    } else {
      response.error = "Server Error";
      response.data = null;
    }
    return response;
  }
};
const logoutUser = async () => {
  try {
    const response = await axios.put(`${base_url}/user/logout`, {}, config);
    return {
      successMsg: "User logged Out Successfully",
      error: null,
    };
  } catch (error) {
    if (error?.response?.status === 409) {
      console.log("user is logged out please login again");
    }
    return {
      error: "Error in logging out",
      successMsg: null,
    };
  }
};

const forgetUserPassword = async (data) => {
  console.log(data)
  try {
    const response = await axios.post(`${base_url}/user/forget-password`, data);
    return {
      successMsg: "User logged Out Successfully",
      error: null,
    };
  } catch (error) {
    if (error.response.status === 404) {
      return {
        error: "error 5454",
        successMsg: null,
      };
    }
  }
};

export { registerUser, loginUser, logoutUser, forgetUserPassword };
