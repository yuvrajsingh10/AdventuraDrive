import { base_url } from "../utils/base_url";
import { config } from "../utils/axiosConfig";
import axios from "axios";

const getVehicles = async () => {
  try {
    const response = await axios.get(`${base_url}/vehicle/all-vehicles`);
    console.log(response.data);
  } catch (error) {}
};

export { getVehicles };
