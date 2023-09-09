import { base_url } from "../utils/base_url";
import { config } from "../utils/axiosConfig";
import axios from "axios";

const getVehicles = async () => {
  try {
    const response = await axios.get(`${base_url}/vehicle/all-vehicles`);
    if (response) {
      return { data: response.data, error: null };
    }
  } catch (error) {
    return {data:null,error:"some this went wrong from our side please try again later"}
  }
};

const checkAvailability = async (data) => {
  try {
    const response = await axios.post(
      `${base_url}/vehicle/check-vehicle-available`,
      data
    );
    console.log(response.data);
    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    if (error.response) {
      return { date: null, error: "something error try again sometime" };
    }
  }
};

export { getVehicles, checkAvailability };
