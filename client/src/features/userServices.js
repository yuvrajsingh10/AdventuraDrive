import axios from "axios";
import { base_url } from "../utils/base_url";
import { config } from "../utils/axiosConfig";

const register = (data)=>{
    try {
        console.log(data)
    } catch (error) {
        return {
            msg:null,
            error:"Server Error"
        }
    }
}

const login = data =>{
    try {
        console.log(data);
    } catch (error) {
        return {
            data:null,
            error:"Server Error"
        }
    }
}

export {
    register,
    login
}