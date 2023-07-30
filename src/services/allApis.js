import { BASE_URL } from "./base_url";
import { commonRequest } from "./commonHTTPRequest";





// register api
export const register = async (body,header)=>{
    return await commonRequest("POST",`${BASE_URL}/register`,body,header)
}

// allemployees

export const getallemployees = async() =>{
    return await commonRequest("GET",`${BASE_URL}/all-employees`,"","")
}

// viewemployee

export const viewemployee = async(id) =>{
    return await commonRequest("GET",`${BASE_URL}/view-employee/${id}`)
}