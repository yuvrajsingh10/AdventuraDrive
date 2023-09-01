import axios from "axios";
import { base_url } from "../utils/base_url";
import { config } from "../utils/axiosConfig";

const register = async (data) => {
  try {
    const response = await axios.post(
      `${base_url}/user/register`,
      data,
      config
    );
    return {
      error: null,
      data: response.data,
    };
  } catch (error) {
    if (error.response.status === 409) {
      console.log("this is the error");
      return {
        error: "User with this email already exists.",
        data: null,
      };
    } else {
      return {
        error: "server Error",
      };
    }
  }
};

const login = async (data) => {
  try {
    const response = await axios.post(`${base_url}/user/login`, data, config);
    console.log(response.data)
    return {
      error:null,
      data:response.data
    }
  } catch (error) {
    if(error.response.status === 409){
      return {
        error:"User is not registered !",
        data:null
      }
    }else{
      return {
        error:"Server Error "
      }
    }
  }
};
const logout =async ()=>{
  try {
    const response = await axios.put(`${base_url}/user/logout`,{},config);
    console.log('this is resonse')
      console.log('user is succesfully logged out')
      return {
        successMsg:"User logged Out Successfully",
        error:null
      }
  } catch (error) {
    if(error.response.status === 409){
      console.log('user is logged out please login again')
    }
    return {
      error:"Error in logging out",
      succesMsg:null
    }
  }
}

export { register, login ,logout};
